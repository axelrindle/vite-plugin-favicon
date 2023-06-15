import { Plugin, ResolvedConfig } from 'vite'
import { PluginOptions } from './types'
import { favicons } from 'favicons'
import { mkdirp } from 'mkdirp'
import { join, resolve } from 'path'
import { writeFile } from 'fs/promises'
import chalk from 'chalk'

export default function favicon(options: PluginOptions): Plugin {
    let viteOptions: ResolvedConfig

    function log(message: string) {
        viteOptions.logger.info(`${chalk.cyan('favicon')} - ${chalk.gray(message)}`)
    }

    return {
        name: 'favicon',
        apply: 'build',
        configResolved(config: ResolvedConfig) {
            viteOptions = config
        },
        async buildEnd() {
            const output = resolve(options.output)
            const response = await favicons(options.source, options.generatorOptions)

            await mkdirp(output)
            await Promise.all(
                response.images.map(
                    async (image) => await writeFile(join(output, image.name), image.contents)
                )
            )
            await Promise.all(
                response.files.map(
                    async (file) => await writeFile(join(output, file.name), file.contents)
                )
            )

            const htmlFile = join(output, 'favicons.html')
            await writeFile(htmlFile, response.html.join("\n"))

            log(`generated ${response.images.length} images`)
            log(`generated ${response.files.length} additional files`)
            log(`html tags written to ${htmlFile}`)
        }
    }
}

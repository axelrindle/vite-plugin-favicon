import { existsSync, rmSync } from 'fs'
import { join, resolve } from 'path'
import { build } from 'vite'
import { beforeEach, expect, test } from 'vitest'
import favicon from '../src'

const fixtures = resolve(__dirname, 'fixtures')
const output = resolve(__dirname, 'output')

beforeEach(() => rmSync(output, { recursive: true, force: true }))

test('it compiles', async() => {
	expect(existsSync(output)).toBe(false)

	await build({
		root: fixtures,
		logLevel: 'silent',
		plugins: [
			favicon({
                source: join(fixtures, 'icon.png'),
                output,
                generatorOptions: {
                    appName: 'vite-plugin-favicon',
                    appShortName: 'vite-plugin-favicon',
                    icons: {
                        appleStartup: false,
                        yandex: false,
                    }
                }
            })
		],
	})

	expect(existsSync(resolve(output, 'favicon.ico'))).toBe(true)
	expect(existsSync(resolve(output, 'favicons.html'))).toBe(true)
	expect(existsSync(resolve(output, 'manifest.webmanifest'))).toBe(true)
})

import { FaviconOptions } from 'favicons'

export interface PluginOptions {
    source: string | string[]
    output: string
    generatorOptions?: FaviconOptions
}

[![CI](https://github.com/axelrindle/vite-plugin-favicon/actions/workflows/ci.yml/badge.svg)](https://github.com/axelrindle/vite-plugin-favicon/actions/workflows/ci.yml)
![npm (scoped)](https://img.shields.io/npm/v/@axelrindle/vite-plugin-favicon)
[![commit style](https://img.shields.io/badge/Commits-Conventional-fa6673?logo=conventional-commits)](https://www.conventionalcommits.org/en/v1.0.0/)
[![changelog style](https://img.shields.io/badge/Keep%20a-Changelog-e05735?logo=keep-a-changelog)](https://keepachangelog.com/en/1.1.0/)

# vite-plugin-favicon

> 💠 Generate favicons

## Install

```
npm i @axelrindle/vite-plugin-favicon
```

## Usage

```js
import favicon from '@axelrindle/vite-plugin-favicon'
import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        favicon()
    ]
})
```

## Configuration

### `source`

One or multiple input files.

One input file is enough in most cases.

### `output`

The relative output directory to place the generated files in.

### `generatorOptions`

Options to pass to the underlying generator library.

For reference see https://github.com/itgalaxy/favicons.

## TODO

- automatic index.html injection

## License

[MIT](LICENSE)

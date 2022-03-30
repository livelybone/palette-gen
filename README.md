# palette-gen
[![NPM Version](http://img.shields.io/npm/v/palette-gen.svg?style=flat-square)](https://www.npmjs.com/package/palette-gen)
[![Download Month](http://img.shields.io/npm/dm/palette-gen.svg?style=flat-square)](https://www.npmjs.com/package/palette-gen)
![gzip with dependencies: kb](https://img.shields.io/badge/gzip--with--dependencies-kb-brightgreen.svg "gzip with dependencies: kb")
![typescript](https://img.shields.io/badge/typescript-supported-blue.svg "typescript")
![pkg.module](https://img.shields.io/badge/pkg.module-supported-blue.svg "pkg.module")

> `pkg.module supported`, which means that you can apply tree-shaking in you project

[中文文档](./README-CN.md)

A module for generating a palette that including a series colors

## repository
git@github.com:livelybone/palette-gen.git

## Demo
https://github.com/livelybone/palette-gen

## Run Example
you can see the usage by run the example of the module, here is the step:

1. Clone the library `git clone git@github.com:livelybone/palette-gen.git`
2. Go to the directory `cd [the-module-directory]`
3. Install npm dependencies `npm i`(use taobao registry: `npm i --registry=http://registry.npm.taobao.org`)
4. Open service `npm run dev`
5. See the example(usually is `http://127.0.0.1:3000/examples/test.html`) in your browser

## Installation
```bash
npm i -S palette-gen
```

## Global name - The variable the module exported in `umd` bundle
`PaletteGen`

## Interface
See what method or params you can use in [index.d.ts](./index.d.ts)

## Usage
```js
import * as PaletteGen from 'palette-gen'
```

## CDN
Use in html, see what you can use in [CDN: unpkg](https://unpkg.com/palette-gen/lib/umd/)
```html
<-- use what you want -->
<script src="https://unpkg.com/palette-gen/lib/umd/<--module-->.js"></script>
```

Or，see what you can use in [CDN: jsdelivr](https://cdn.jsdelivr.net/npm/palette-gen/lib/umd/)
```html
<script src="https://cdn.jsdelivr.net/npm/palette-gen/lib/umd/<--module-->.js"></script>
```

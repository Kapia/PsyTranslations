# TODO

- crear templates para las páginas / posts
- Cambiar la config de xity.config
- Eliminar todo rastro de la palabra Xity + Bulma
- mirar vulnerables: is-svg, pug
- https

A blog-ready 11ty starter based on PostCSS and Snowpack, with a RSS feed and Native Elements.

azul: #00add8
amarillo: #ffd700
gris oscuro: #707c7c

## Key features

📰 Integrated RSS Feed.

💅 [PostCSS][] with [PostCSS Preset Env][] and [cssnano][] to enhance and clean your css.

🏅 No <abbr title="Cascading Style Sheets">CSS</abbr> or <abbr title="JavaScript">JS</abbr> frameworks to remove. Just add what you need.

📝 Basic blog structure.
📦 Basic building with [Snowpack][].
🎚 Configuration file to set meta data and global settings.
🎨 Code highlights which you can disable with a flag.
⚡️ Superpowered HTML elements with [Native Elements][].
⚠️ Custom 404 page layout
🤖 Custom blog posts parser to create `<figure>` and wrap iframes
⚙️ Service Worker generated by [eleventy-plugin-pwa][]

## Preconfigured tools

- [Eleventy][] for templates and site generation
- [PostCSS][] and [PostCSS Preset Env][] to process your CSS
- [cssnano][] to minimize, merge and optimize the CSS output
- [Snowpack][] for a simple asset build pipeline
- [Turbolinks][] makes navigating your web application faster
- [What Input][] to show outline only when navigating with keyboard

[eleventy]: https://11ty.dev 'Static site generator'
[postcss]: https://postcss.org 'A tool for transforming CSS with JavaScript'
[postcss preset env]: https://preset-env.cssdb.org 'Use tomorrow’s CSS today'
[cssnano]: https://cssnano.co 'A modular minifier based on the PostCSS ecosystem'
[snowpack]: https://www.snowpack.dev/ 'Web application bundler'
[turbolinks]: https://github.com/turbolinks/turbolinks
[what input]: https://github.com/ten1seven/what-input 'A global utility for tracking the current input method'
[native elements]: https://native-elements.dev
[eleventy-plugin-pwa]: https://github.com/okitavera/eleventy-plugin-pwa 'An Eleventy plugin to generate service worker'
[node.js]: https://nodejs.org/
[yarn]: https://yarnpkg.com/ 'Package Manager'

---

## Prerequisites

- [Node.js][] & npm
- [Yarn][]

## Usage

You can download the scaffolding to create a new project structure with one command:

```bash
npx degit equinusocio/xity-starter#main
```

This command will download the project to your current working directory and remove the `.github` and `.vscode` folders. After the project structure has been downloaded, you should install the required dependencies:

```bash
yarn install
```

### Running the local development mode

This command will run `eleventy` and the `snowpack` with auto reload.

```bash
yarn start
```

### Building the production version

To generate your static site you can run the following command. It will build the project and run optimisations for a production release inside the `/build` folder.

```bash
yarn build
```

### More commands

XITY provides also two more commands useful to update dependencies and the cssdb used by Browserslist and PostCSS:

```bash
# Update dependencies interactively
yarn update:deps

# Update the cssdb definitions. Run it every month.
yarn update:cssdb

# Run prettier against md, css, and js files
yarn lint
```

## Configurations

You can easily configure your site by changing the settings inside the `xity.config.js` configuration file.

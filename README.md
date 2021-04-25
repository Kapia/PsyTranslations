# TODO

- i18n -> https://github.com/adamduncan/eleventy-plugin-i18n#readme
- crear templates para sección Blog / posts
- SEO? -> https://iamjoona.com/blog/seo-tags-in-eleventy/
- traducir textos
  - selector de idioma
- google analytics?
- cookies warning?

- FORMSPREE https://formspree.io/blog/html-contact-form/


---

## Prerequisites

- [Node.js][] & npm
- [Yarn][]

## Usage

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

two more commands useful to update dependencies and the cssdb used by Browserslist and PostCSS:

```bash
# Update dependencies interactively
yarn update:deps

# Update the cssdb definitions. Run it every month.
yarn update:cssdb

# Run prettier against md, css, and js files
yarn lint
```

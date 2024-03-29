/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
  mount: {
    /* https://www.snowpack.dev/reference/configuration#mount */
    _site: { url: '/', static: true },
    'assets/js': { url: '/js' },
    'assets/css/vendors': { url: '/css' },
  },
  plugins: [
    /* https://www.snowpack.dev/reference/configuration#plugins */
    '@snowpack/plugin-postcss',
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'eleventy --pathprefix=PsyTranslations',
        watch: '$1 --watch --quiet',
      },
      /*{ cmd: 'eleventy', watch: '$1 --watch --quiet' },*/
    ],
    [
      '@snowpack/plugin-run-script',
      {
        cmd: 'postcss ./assets/css/app.css -o ./build/css/index.css',
        watch: '$1 --watch',
      },
    ],
  ],
  routes: [
    /* https://www.snowpack.dev/guides/routing#nav-primary
     * Enable an SPA Fallback in development:
     * {"match": "routes", "src": ".*", "dest": "/index.html"},
     */
  ],
  optimize: {
    /* https://www.snowpack.dev/guides/optimize-and-bundle#option-1%3A-built-in-optimizations */
    /*  entrypoints: 'auto',
    preload: true,
    splitting: true,
    treeshake: true,
    bundle: true,
    minify: true,
    target: 'es2018', */
  },
  packageOptions: {
    /* https://www.snowpack.dev/reference/configuration#packageoptions */
  },
  devOptions: {
    // Eleventy updates multiple files at once, so add a 300ms delay before we trigger a browser update
    hmrDelay: 300,
  },
  buildOptions: {
    /* https://www.snowpack.dev/reference/configuration#buildoptions */
  },
}

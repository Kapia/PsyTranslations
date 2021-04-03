module.exports = {
  /**
   * Site data
   */
  name: 'PsyTranslations',
  shortDesc: 'Psychology and healthcare linguistic solutions',
  url: 'https://www.psytranslations.com/',
  lang: 'en',
  authorName: 'Enrique Quirós',
  /**
   * Content settings
   */
  syntaxTheme: 'mystyles.css',
  permalinkClass: ['permalink'],
  iframeClass: ['iframes-wrapper'],
  codeClass: ['code-wrapper'],
  figureClass: ['figure'],
  /**
   * Main navigation items.
   * Used by components/header.njk
   */
  navigation: [
    {
      text: 'Home',
      url: '/',
      external: false,
    },
   /*  {
      text: 'About',
      url: '/about/',
      external: false,
    },
    {
      text: 'Solutions',
      url: '/solutions/',
      external: false,
    },
    {
      text: 'Contact',
      url: '/contact/',
      external: false,
    },
    {
      text: 'Blog',
      url: '/blog/',
      external: false,
    }, */
  ],
}

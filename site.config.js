module.exports = {
  /**
   * Site data
   */
  name: 'English to Spanish translator | PsyTranslations',
  shortDesc: 'Psychology translator: Psychology and Healthcare linguistic solutions for your Spanish needs by a licensed psychologist and medical translator',
  url: 'https://www.psytranslations.com',
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
    {
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
    },
  ],
}
/*   {
  text: 'Blog',
  url: '/blog/',
  external: false,
},    {
  text: 'Blog example',
  url: '/blog_example/',
  external: false,
},    {
  text: 'Post example',
  url: '/post_example/',
  external: false,
},*/

import Turbolinks from 'turbolinks'

/**
 * Init Turbolinks within the site
 */
Turbolinks.start()

/**
 * Init ThemeSwitcher
 */
const html = document.documentElement
/*
const themeSwitcher = document.getElementById('themeSwitcher')
const currentTheme = 'light'
themeSwitcher.value = currentTheme
*/

const setTheme = (theme) => {
  html.dataset.theme = theme
  localStorage.setItem('theme', theme)
}

import { createContext } from 'react'

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
}

const ThemeContext = createContext(THEMES.LIGHT)

ThemeContext.THEMES = THEMES

export default ThemeContext

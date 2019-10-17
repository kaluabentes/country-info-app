import { createContext } from 'react'

const THEMES = {
  LIGHT: 'light',
  DARK: 'dark',
}

const ThemeContext = createContext({
  theme: THEMES.LIGHT,
  toggleTheme: () => {},
})

ThemeContext.THEMES = THEMES

export default ThemeContext

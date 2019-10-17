import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Brand from '_atoms/brand'
import ThemeToggler from '_molecules/theme-toggler'
import ThemeContext from '_contexts/theme-context'
import Container from '_atoms/container'

import styles from './styles.css'

const THEMES = {
  light: styles.light,
  dark: styles.dark,
}

const AppBar = ({ title }) => (
  <ThemeContext.Consumer>
    {({ theme, toggleTheme }) => (
      <header className={classnames(styles.appBar, THEMES[theme])}>
        <Container>
          <div className={styles.inner}>
            <Brand
              href="/"
              title={title}
            />
            <ThemeToggler
              isActive={theme === ThemeContext.THEMES.DARK}
              onChange={toggleTheme}
            />
          </div>
        </Container>
      </header>
    )}
  </ThemeContext.Consumer>
)

AppBar.propTypes = {
  title: PropTypes.string,
}

AppBar.defaultProps = {
  title: '',
}

export default AppBar

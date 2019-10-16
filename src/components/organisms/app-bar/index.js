import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Brand from '_atoms/brand'
import ThemeToggler from '_molecules/theme-toggler'
import Container from '_atoms/container'

import styles from './styles.css'

/* const THEMES = {
  light: styles.light,
  dark: styles.dark,
} */

const AppBar = ({ title, isThemeActive, onThemeChange }) => (
  <header className={classnames(styles.appBar)}>
    <Container>
      <div className={styles.inner}>
        <Brand
          href="/"
          title={title}
        />
        <ThemeToggler
          isActive={isThemeActive}
          onChange={onThemeChange}
        />
      </div>
    </Container>
  </header>
)

AppBar.propTypes = {
  title: PropTypes.string,
  isThemeActive: PropTypes.bool,
  onThemeChange: PropTypes.func,
}

AppBar.defaultProps = {
  title: '',
  isThemeActive: false,
  onThemeChange: () => {},
}

export default AppBar

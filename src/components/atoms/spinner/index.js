import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import ThemeContext from '_contexts/theme-context'

import styles from './styles.css'

const SIZES = {
  large: styles.large,
  small: styles.small,
}

const THEMES = {
  light: styles.light,
  dark: styles.dark,
}

const Spinner = ({ size, className }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div className={classNames(styles.spinner, className, size, THEMES[theme])}>
        <div className={styles.thinCircle} />
        <div className={styles.innerCircle} />
      </div>
    )}
  </ThemeContext.Consumer>
)

Spinner.propTypes = {
  className: PropTypes.string,
  size: PropTypes.string,
}

Spinner.defaultProps = {
  className: undefined,
  size: SIZES.large,
}

Spinner.sizes = SIZES

export default Spinner

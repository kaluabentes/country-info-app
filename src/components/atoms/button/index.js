import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ThemeContext from '_contexts/theme'
import Icon from '_atoms/icon'

import styles from './styles.css'

const THEMES = {
  light: styles.light,
  dark: styles.dark,
}

const SIZES = {
  default: styles.default,
  small: styles.small,
}

const Button = ({
  onClick,
  children,
  icon,
  href,
  size
}) => {
  const getClassNames = (theme) => classnames(
    styles.button,
    THEMES[theme],
    size
  )

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (href ? (
        <a
          className={getClassNames(theme)}
          href={href}
        >
          <Icon name={icon} />
          {children}
        </a>
      ) : (
        <button
          type="button"
          className={getClassNames(theme)}
          onClick={onClick}
        >
          {icon && <Icon name={icon} />}
          {children}
        </button>
      ))}
    </ThemeContext.Consumer>
  )
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
  size: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  icon: '',
  href: '',
  size: SIZES.default,
}

Button.sizes = SIZES

export default Button

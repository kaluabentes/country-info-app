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

const Button = ({
  onClick,
  children,
  icon,
  href
}) => (
  <ThemeContext.Consumer>
    {({ theme }) => (href ? (
      <a
        className={classnames(styles.button, THEMES[theme])}
        href={href}
      >
        <Icon name={icon} />
        {children}
      </a>
    ) : (
      <button
        type="button"
        className={classnames(styles.button, THEMES[theme])}
        onClick={onClick}
      >
        <Icon name={icon} />
        {children}
      </button>
    ))}
  </ThemeContext.Consumer>
)

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node.isRequired,
  icon: PropTypes.string,
  href: PropTypes.string,
}

Button.defaultProps = {
  onClick: () => {},
  icon: '',
  href: '',
}

export default Button

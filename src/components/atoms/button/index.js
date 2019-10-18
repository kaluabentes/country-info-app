import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import { useRouter } from 'next/router'

import ThemeContext from '_contexts/theme-context'
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
  size,
  href,
}) => {
  const router = useRouter()
  const getClassNames = (theme) => classnames(
    styles.button,
    THEMES[theme],
    size
  )

  const handleNav = () => {
    router.push(href)
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <button
          className={getClassNames(theme)}
          type="button"
          onClick={href ? handleNav : onClick}
        >
          {icon && <Icon name={icon} />}
          {children}
        </button>
      )}
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

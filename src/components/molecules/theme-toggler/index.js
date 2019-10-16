import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import Toggler from '_atoms/toggler'
import Icon from '_atoms/icon'
import styles from './styles.css'

const ThemeToggler = ({ onChange, isActive }) => {
  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      onChange()
    }
  }

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={onChange}
      onKeyPress={handleKeyPress}
      className={
        classnames(
          styles.themeToggler,
          { [styles.isActive]: isActive }
        )
      }
    >
      <Toggler
        isActive={isActive}
      />
      <Icon name={isActive ? 'ion-md-moon' : 'ion-md-sunny'} />
    </div>
  )
}

ThemeToggler.propTypes = {
  onChange: PropTypes.func,
  isActive: PropTypes.bool,
}

ThemeToggler.defaultProps = {
  onChange: () => {},
  isActive: false,
}

export default ThemeToggler

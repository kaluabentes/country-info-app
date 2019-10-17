import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ClickOutside from 'react-click-outside'

import ThemeContext from '_contexts/theme'
import Icon from '_atoms/icon'

import styles from './styles.css'

const THEMES = {
  light: styles.light,
  dark: styles.dark,
}

const Select = ({
  onChange, value, options, placeholder
}) => {
  const [isOpen, setOpen] = useState(false)

  const handleToggle = () => {
    setOpen(!isOpen)
  }

  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      handleToggle()
    }
  }

  const handleClick = (currentValue) => {
    handleToggle()
    onChange(currentValue)
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <ClickOutside onClickOutside={handleToggle}>
          <div
            className={
              classnames(
                styles.container,
                THEMES[theme],
                { [styles.open]: isOpen }
              )
            }
          >
            <button
              type="button"
              onClick={handleToggle}
              onKeyPress={handleKeyPress}
              className={styles.currentValue}
            >
              {value || placeholder}
              <Icon name="ion-ios-arrow-down" />
            </button>
            <div className={styles.options}>
              {options.map(({ value: val, label }) => (
                <button
                  type="button"
                  onClick={() => handleClick(val)}
                  className={styles.option}
                  value={val}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>
        </ClickOutside>
      )}
    </ThemeContext.Consumer>
  )
}

Select.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.shape({
    label: PropTypes.string,
    value: PropTypes.string,
  })),
  placeholder: PropTypes.string,
}

Select.defaultProps = {
  onChange: () => {},
  value: '',
  options: [],
  placeholder: '',
}

export default Select

import React, { useState } from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import ClickOutside from 'react-click-outside'

import ThemeContext from '_contexts/theme-context'
import Icon from '_atoms/icon'

import styles from './styles.css'

const THEMES = {
  light: styles.light,
  dark: styles.dark,
}

const POSITIONS = {
  left: styles.left,
  right: styles.right,
  top: styles.top,
  bottom: styles.bottom,
}

const Select = ({
  onChange,
  value,
  options,
  placeholder,
  position,
}) => {
  const [isOpen, setOpen] = useState(false)
  const positions = position
    .split(' ')
    .map((pos) => POSITIONS[pos])
  const currentOption = options.find((op) => op.value === value)

  const handleClickOutside = () => {
    setOpen(false)
  }

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
        <ClickOutside onClickOutside={handleClickOutside}>
          <div
            className={
              classnames(
                styles.container,
                THEMES[theme],
                { [styles.open]: isOpen },
                positions
              )
            }
          >
            <button
              type="button"
              onClick={handleToggle}
              onKeyPress={handleKeyPress}
              className={styles.currentValue}
            >
              {currentOption ? currentOption.label : placeholder}
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
  position: PropTypes.string,
}

Select.defaultProps = {
  onChange: () => {},
  value: '',
  options: [],
  placeholder: '',
  position: 'left top',
}

export default Select

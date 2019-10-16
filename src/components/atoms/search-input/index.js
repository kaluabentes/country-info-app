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

const SearchInput = ({ onChange, value, placeholder }) => (
  <ThemeContext.Consumer>
    {({ theme }) => (
      <div className={classnames(styles.container, THEMES[theme])}>
        {/* eslint-disable-next-line jsx-a11y/label-has-associated-control */}
        <label className={styles.label} htmlFor="search">Search</label>
        <input
          className={styles.input}
          id="search"
          name="search"
          type="search"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
        />
        <Icon name="ion-md-search" />
      </div>
    )}
  </ThemeContext.Consumer>
)

SearchInput.propTypes = {
  onChange: PropTypes.func,
  value: PropTypes.string,
  placeholder: PropTypes.string,
}

SearchInput.defaultProps = {
  onChange: () => {},
  value: '',
  placeholder: ''
}

export default SearchInput

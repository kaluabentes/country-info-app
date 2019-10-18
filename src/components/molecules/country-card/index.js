import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'

import ThemeContext from '_contexts/theme-context'
import CountryField from '_atoms/country-field'

import styles from './styles.css'

const THEMES = {
  light: styles.light,
  dark: styles.dark,
}

const CountryCard = ({
  title,
  image,
  population,
  region,
  capital,
  onClick,
}) => {
  const handleKeyPress = (event) => {
    if (event.charCode === 13) {
      onClick()
    }
  }

  return (
    <ThemeContext.Consumer>
      {({ theme }) => (
        <div
          role="button"
          tabIndex={0}
          onClick={onClick}
          onKeyPress={handleKeyPress}
          className={classnames(styles.card, THEMES[theme])}
        >
          <img className={styles.image} src={image} alt={title} />
          <div className={styles.content}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.fields}>
              <CountryField
                label="Population"
                value={population}
              />
              <CountryField
                label="Region"
                value={region}
              />
              <CountryField
                label="Capital"
                value={capital}
              />
            </div>
          </div>
        </div>
      )}
    </ThemeContext.Consumer>
  )
}

CountryCard.propTypes = {
  title: PropTypes.string,
  image: PropTypes.string,
  population: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]),
  region: PropTypes.string,
  capital: PropTypes.string,
  onClick: PropTypes.func,
}

CountryCard.defaultProps = {
  title: '',
  image: '',
  population: '',
  region: '',
  capital: '',
  onClick: () => {},
}

export default CountryCard

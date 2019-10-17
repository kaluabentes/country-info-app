import React from 'react'
import PropTypes from 'prop-types'

import styles from './styles.css'

const CountryField = ({ label, value }) => (
  <p className={styles.field}>
    <span className={styles.label}>
      {label}
:
    </span>
    <span className={styles.value}>{value}</span>
  </p>
)

CountryField.propTypes = {
  label: PropTypes.string,
  value: PropTypes.string,
}

CountryField.defaultProps = {
  label: '',
  value: '',
}

export default CountryField

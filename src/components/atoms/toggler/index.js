import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'

import styles from './styles.css'

const Toggler = ({ onChange, isActive }) => (
  <button
    className={classNames(styles.toggler, { [styles.togglerActive]: isActive })}
    type="button"
    onClick={onChange}
  >
    <div className={styles.needle} />
  </button>
)

Toggler.propTypes = {
  onChange: PropTypes.func,
  isActive: PropTypes.bool,
}

Toggler.defaultProps = {
  onChange: PropTypes.func,
  isActive: false,
}

export default Toggler

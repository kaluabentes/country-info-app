import React from 'react'
import PropTypes from 'prop-types'

import Icon from '_atoms/icon'

import styles from './styles.css'

const EmptyState = ({ title }) => (
  <div className={styles.emptyState}>
    <Icon name="ion-md-alert" />
    <h3 className={styles.title}>{title}</h3>
  </div>
)

EmptyState.propTypes = {
  title: PropTypes.string.isRequired,
}

export default EmptyState

import React from 'react'

import Spinner from '_atoms/spinner'

import styles from './styles.css'

const ContentLoader = () => (
  <div className={styles.contentLoader}>
    <Spinner />
  </div>
)

export default ContentLoader

import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'

import styles from './styles.css'

const Brand = ({ title, href }) => (
  <Link href={href}>
    <h1 className={styles.brand}>
      {title}
    </h1>
  </Link>
)

Brand.propTypes = {
  title: PropTypes.string,
  href: PropTypes.string,
}

Brand.defaultProps = {
  title: '',
  href: '',
}

export default Brand

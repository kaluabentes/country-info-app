import React from 'react'
import PropTypes from 'prop-types'
import classnames from 'classnames'
import Link from 'next/link'

import styles from './styles.css'

const THEMES = {
  light: styles.light,
  dark: styles.dark,
}

const Brand = ({ title, href, theme }) => (
  <Link href={href}>
    <h1 className={classnames(styles.brand, theme)}>
      {title}
    </h1>
  </Link>
)

Brand.propTypes = {
  title: PropTypes.string,
  theme: PropTypes.string,
  href: PropTypes.string,
}

Brand.defaultProps = {
  title: '',
  href: '',
  theme: THEMES.light,
}

export default Brand

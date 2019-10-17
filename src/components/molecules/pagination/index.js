import React from 'react'
import PropTypes from 'prop-types'

import Select from '_atoms/select'

import styles from './styles.css'

const Pagination = ({
  onClick,
  collection,
  maxItems,
  currentPage
}) => {
  const pageNumber = Math.round(collection.length / maxItems)
  const rangeArray = (Array(pageNumber)).fill('').map((_, index) => index + 1)
  const options = rangeArray.map((page) => ({
    label: `Page ${page}`,
    value: page,
  }))

  return (
    <div className={styles.pagination}>
      <Select onChange={onClick} value={currentPage} position="bottom left" options={options} />
    </div>
  )
}

Pagination.propTypes = {
  onClick: PropTypes.func.isRequired,
  collection: PropTypes.instanceOf(Array).isRequired,
  maxItems: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
  currentPage: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired
}

export default Pagination

import React from 'react'
import PropTypes from 'prop-types'
import Head from 'next/head'

const Meta = ({ title }) => (
  <Head>
    <title>{title}</title>
    <link
      href="https://unpkg.com/ionicons@4.5.10-0/dist/css/ionicons.min.css"
      rel="stylesheet"
    />
    <link
      href="https://fonts.googleapis.com/css?family=Nunito+Sans:300,600,800&display=swap"
      rel="stylesheet"
    />
  </Head>
)

Meta.propTypes = {
  title: PropTypes.string.isRequired,
}

export default Meta

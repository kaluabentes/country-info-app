import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '_organisms/app-bar'
import Meta from '_atoms/meta'
import ThemeContext from '_contexts/theme'

import '_styles/base.css'

const getAlternativeTheme = (state) => {
  if (state.theme === ThemeContext.THEMES.LIGHT) {
    return ThemeContext.THEMES.DARK
  }

  return ThemeContext.THEMES.LIGHT
}

class Layout extends Component {
  constructor(props) {
    super(props)

    this.state = {
      theme: ThemeContext.THEMES.LIGHT,
    }

    this.handleThemeChange = this.handleThemeChange.bind(this)
  }

  handleThemeChange() {
    this.setState((prevState) => ({
      theme: getAlternativeTheme(prevState)
    }))
  }

  render() {
    const { children } = this.props
    const { theme } = this.state
    const isThemeActive = theme === ThemeContext.THEMES.LIGHT

    return (
      <>
        <Meta title="Where in the world? - Home" />
        <AppBar
          title="Where in the world?"
          isThemeActive={isThemeActive}
          onThemeChange={this.handleThemeChange}
        />
        <main>{children}</main>
      </>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

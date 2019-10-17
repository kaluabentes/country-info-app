import React, { Component } from 'react'
import PropTypes from 'prop-types'

import AppBar from '_organisms/app-bar'
import Meta from '_atoms/meta'
import ThemeContext from '_contexts/theme-context'

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

    this.handleThemeChange = this.handleThemeChange.bind(this)

    this.state = {
      theme: ThemeContext.THEMES.LIGHT,
      toggleTheme: this.handleThemeChange,
    }
  }

  componentDidMount() {
    const { theme } = this.state
    document.querySelector('body').setAttribute('class', theme)
  }

  componentDidUpdate() {
    const { theme } = this.state
    document.querySelector('body').setAttribute('class', theme)
  }

  handleThemeChange() {
    this.setState((prevState) => ({
      theme: getAlternativeTheme(prevState)
    }))
  }

  render() {
    const { children } = this.props
    const { theme, toggleTheme } = this.state

    return (
      <ThemeContext.Provider value={{ theme, toggleTheme }}>
        <Meta title="Where in the world? - Home" />
        <AppBar
          title="Where in the world?"
        />
        <main>{children}</main>
      </ThemeContext.Provider>
    )
  }
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout

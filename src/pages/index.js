import React, { Component } from 'react'

import Layout from '_templates/layout'
import SearchInput from '_atoms/search-input'
import Container from '_atoms/container'

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
    }

    this.handleSearch = this.handleSearch.bind(this)
  }

  handleSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  render() {
    const { searchTerm } = this.state

    return (
      <Layout>
        <Container>
          <SearchInput
            onChange={this.handleSearch}
            value={searchTerm}
            placeholder="Search for a country"
          />
        </Container>
      </Layout>
    )
  }
}

export default Home

import React, { Component } from 'react'

import Layout from '_templates/layout'
import SearchInput from '_atoms/search-input'
import Container from '_atoms/container'
import Select from '_atoms/select'

const COUNTRIES = [
  {
    label: 'Africa',
    value: 'Africa',
  },
  {
    label: 'America',
    value: 'America',
  },
  {
    label: 'Asia',
    value: 'Asia',
  },
  {
    label: 'Europe',
    value: 'Europe',
  },
  {
    label: 'Oceania',
    value: 'Oceania',
  },
]

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      filterValue: '',
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  handleSearch(event) {
    this.setState({
      searchTerm: event.target.value,
    })
  }

  handleFilter(value) {
    this.setState({
      filterValue: value,
    })
  }

  render() {
    const { searchTerm, filterValue } = this.state

    return (
      <Layout>
        <Container>
          <SearchInput
            onChange={this.handleSearch}
            value={searchTerm}
            placeholder="Search for a country"
          />
          <Select
            onChange={this.handleFilter}
            value={filterValue}
            placeholder="Filter by Region"
            options={COUNTRIES}
          />
        </Container>
      </Layout>
    )
  }
}

export default Home

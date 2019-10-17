import React, { Component } from 'react'

import Layout from '_templates/layout'
import SearchInput from '_atoms/search-input'
import Container from '_atoms/container'
import Select from '_atoms/select'
import CountryCard from '_molecules/country-card'
import CountryService from '_services/country-service'
import ContentLoader from '_molecules/content-loader'

import styles from './styles.css'

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
      countries: [],
      isLoading: true,
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  async componentDidMount() {
    const fields = ['flag', 'name', 'population', 'region', 'capital']

    this.setState({
      isLoading: true,
    })

    const countries = await CountryService.index(fields)

    this.setState({
      countries,
      isLoading: false,
    })
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
    const {
      searchTerm,
      filterValue,
      isLoading,
      countries
    } = this.state

    return (
      <Layout>
        <Container>
          <div className={styles.controls}>
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
          </div>
          {isLoading ? (
            <ContentLoader />
          ) : (
            <div className={styles.cardsGrid}>
              {countries.map((country) => (
                <CountryCard
                  title={country.name}
                  image={country.flag}
                  population={country.population}
                  region={country.region}
                  capital={country.capital}
                />
              ))}
            </div>
          )}
        </Container>
      </Layout>
    )
  }
}

export default Home

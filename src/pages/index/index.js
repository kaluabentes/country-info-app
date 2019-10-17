import React, { Component } from 'react'

import Layout from '_templates/layout'
import SearchInput from '_atoms/search-input'
import Container from '_atoms/container'
import Select from '_atoms/select'
import CountryCard from '_molecules/country-card'
import CountryService from '_services/country-service'
import RegionService from '_services/region-service'
import ContentLoader from '_molecules/content-loader'

import styles from './styles.css'

const REGIONS = [
  {
    label: 'Africa',
    value: 'Africa',
  },
  {
    label: 'Americas',
    value: 'Americas',
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

const REQUEST_FIELDS = ['flag', 'name', 'population', 'region', 'capital']

class Home extends Component {
  constructor(props) {
    super(props)

    this.state = {
      searchTerm: '',
      regionFilter: '',
      countries: [],
      isLoading: true,
    }

    this.handleSearch = this.handleSearch.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
  }

  async componentDidMount() {
    this.setState({
      isLoading: true,
    })

    const countries = await CountryService.index(REQUEST_FIELDS)

    this.setState({
      countries,
      isLoading: false,
    })
  }

  async fetchCountriesByRegion(region) {
    this.setState({
      isLoading: true,
    })

    const countries = await RegionService.index(region, REQUEST_FIELDS)

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

  handleFilter(region) {
    this.fetchCountriesByRegion(region)
    this.setState({
      regionFilter: region,
    })
  }

  render() {
    const {
      searchTerm,
      regionFilter,
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
              value={regionFilter}
              placeholder="Filter by Region"
              options={REGIONS}
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

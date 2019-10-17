import React, { Component, createRef } from 'react'

import Layout from '_templates/layout'
import SearchInput from '_atoms/search-input'
import Container from '_atoms/container'
import Select from '_atoms/select'
import CountryCard from '_molecules/country-card'
import CountryService from '_services/country-service'
import RegionService from '_services/region-service'
import ContentLoader from '_molecules/content-loader'
import EmptyState from '_molecules/empty-state'
import Pagination from '_molecules/pagination'

import styles from './styles.css'

const MAX_COUNTRIES = 12

const ERROR_NOT_FOUND = 'Not found'

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
      isLoading: false,
      currentPage: 1,
      errorMessage: '',
    }

    this.gridRef = createRef()

    this.handleSearch = this.handleSearch.bind(this)
    this.handleFilter = this.handleFilter.bind(this)
    this.handlePaginationClick = this.handlePaginationClick.bind(this)
  }

  componentDidMount() {
    this.fetchAllCountries()
  }

  async fetchAllCountries() {
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

  async searchCountryByName(countryName) {
    this.setState({
      isLoading: true,
    })

    try {
      const countries = await CountryService.search(countryName, REQUEST_FIELDS)

      this.setState({
        countries,
        isLoading: false,
      })
    } catch (e) {
      this.setState({
        countries: [],
        errorMessage: e.response.data.message || ERROR_NOT_FOUND,
        isLoading: false,
      })
    }
  }

  handleSearch(event) {
    const { target: { value } } = event

    this.setState({
      searchTerm: event.target.value,
    })

    clearTimeout(this.searchTimeout)

    if (!value) {
      this.fetchAllCountries()
      return
    }

    this.searchTimeout = setTimeout(() => {
      this.searchCountryByName(value)
    }, 600)
  }

  handleFilter(region) {
    this.fetchCountriesByRegion(region)
    this.setState({
      regionFilter: region,
    })
  }

  handlePaginationClick(page) {
    this.setState({
      currentPage: page,
    })
  }

  renderCards() {
    const {
      errorMessage,
      countries,
      currentPage,
    } = this.state
    const startIndex = (currentPage * MAX_COUNTRIES) - MAX_COUNTRIES
    const endIndex = currentPage * MAX_COUNTRIES

    if (!countries.length) {
      return <EmptyState title={errorMessage} />
    }

    return (
      <div ref={this.gridRef} className={styles.cardsGrid}>
        {countries
          .slice(startIndex, endIndex)
          .map((country) => (
            <CountryCard
              title={country.name}
              image={country.flag}
              population={country.population}
              region={country.region}
              capital={country.capital}
            />
          ))}
        <Pagination
          onClick={this.handlePaginationClick}
          currentPage={currentPage}
          collection={countries}
          maxItems={MAX_COUNTRIES}
        />
      </div>
    )
  }

  render() {
    const {
      searchTerm,
      regionFilter,
      isLoading,
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
          {isLoading ? <ContentLoader /> : this.renderCards()}
        </Container>
      </Layout>
    )
  }
}

export default Home

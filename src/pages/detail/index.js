import React, { Component } from 'react'
import { withRouter } from 'next/router'
import PropTypes from 'prop-types'

import Layout from '_templates/layout'
import Container from '_atoms/container'
import Button from '_atoms/button'
import CountryField from '_atoms/country-field'
import ContentLoader from '_molecules/content-loader'
import CountryService from '_services/country-service'
import EmptyState from '_molecules/empty-state'
import Storage from '_utils/storage'

import styles from './styles.css'

const FIELDS = [
  'flag',
  'name',
  'nativeName',
  'population',
  'region',
  'subregion',
  'capital',
  'topLevelDomain',
  'currencies',
  'languages',
  'borders'
]

const getCurrency = (currencies) => {
  if (currencies.length) {
    return currencies[0].name
  }

  return ''
}

const getLanguages = (languages) => {
  if (languages.length) {
    return languages.map((lang) => lang.name).join(', ')
  }

  return ''
}

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {
      country: undefined,
      isLoading: true,
      isNotFound: false,
    }
  }

  async componentDidMount() {
    const { router } = this.props

    if (!router.asPath.match(/country/)) {
      this.setState({
        isNotFound: true,
      })
      return
    }

    const countryCode = router.asPath.split('=')[1]
    const country = await CountryService.show(countryCode, FIELDS)

    this.setState({
      country,
      isLoading: false,
    })
  }

  renderCountryDetail() {
    const { country, isLoading } = this.state
    const countriesAlphaCodes = Storage.getItem('countriesAlphaCodes')

    if (isLoading) {
      return <ContentLoader />
    }

    return (
      <div className={styles.countryDetail}>
        <div className={styles.imageContainer}>
          <img
            className={styles.countryImage}
            src={country.flag}
            alt={country.name}
          />
        </div>
        <div className={styles.countryInfo}>
          <h2 className={styles.countryTitle}>{country.name}</h2>
          <div className={styles.countryContentGrid}>
            <div>
              <CountryField
                label="Native Name"
                value={country.nativeName}
              />
              <CountryField
                label="Population"
                value={country.population}
              />
              <CountryField
                label="Region"
                value={country.region}
              />
              <CountryField
                label="Sub Region"
                value={country.subregion}
              />
              <CountryField
                label="Capital"
                value={country.capital}
              />
            </div>
            <div>
              <CountryField
                label="Top Level Domain"
                value={country.topLevelDomain}
              />
              <CountryField
                label="Currency"
                value={getCurrency(country.currencies)}
              />
              <CountryField
                label="Languages"
                value={getLanguages(country.languages)}
              />
            </div>
          </div>
          {country.borders.length ? (
            <div className={styles.borderCountries}>
              <span>Border Countries:</span>
              {country.borders.map((border) => (
                <Button
                  href={`/detail?country=${border}`}
                  size={Button.sizes.small}
                >
                  {countriesAlphaCodes[border]}
                </Button>
              ))}
            </div>
          ) : null}
        </div>
      </div>
    )
  }

  render() {
    const { isNotFound } = this.state

    return (
      <Layout>
        <Container>
          <div className={styles.actions}>
            <Button href="/" icon="ion-md-arrow-back">Back</Button>
          </div>
          {isNotFound ? <EmptyState title="Not Found" /> : this.renderCountryDetail()}
        </Container>
      </Layout>
    )
  }
}

Detail.propTypes = {
  router: PropTypes.shape({
    asPath: PropTypes.string
  }).isRequired,
}

export default withRouter(Detail)

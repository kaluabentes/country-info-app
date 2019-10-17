import React, { Component } from 'react'

import Layout from '_templates/layout'
import Container from '_atoms/container'
import Button from '_atoms/button'
import CountryField from '_atoms/country-field'

import styles from './styles.css'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Container>
          <div className={styles.actions}>
            <Button href="/" icon="ion-md-arrow-back">Back</Button>
          </div>
          <div className={styles.countryDetail}>
            <div className={styles.imageContainer}>
              <img
                className={styles.countryImage}
                src="https://restcountries.eu/data/deu.svg"
                alt="Belgium"
              />
            </div>
            <div className={styles.countryInfo}>
              <h2 className={styles.countryTitle}>Belgium</h2>
              <div className={styles.countryContentGrid}>
                <div>
                  <CountryField
                    label="Native Name"
                    value="Belgie"
                  />
                  <CountryField
                    label="Population"
                    value="11,319,511"
                  />
                  <CountryField
                    label="Region"
                    value="Europe"
                  />
                  <CountryField
                    label="Sub Region"
                    value="Western Europe"
                  />
                  <CountryField
                    label="Capital"
                    value="Brussels"
                  />
                </div>
                <div>
                  <CountryField
                    label="Top Level Domain"
                    value=".be"
                  />
                  <CountryField
                    label="Currency"
                    value="Euro"
                  />
                  <CountryField
                    label="Languages"
                    value="Dutch, French, German"
                  />
                </div>
              </div>
              <div className={styles.borderCountries}>
                <span>Border Countries:</span>
                <Button size={Button.sizes.small}>France</Button>
                <Button size={Button.sizes.small}>Germany</Button>
                <Button size={Button.sizes.small}>Netherlands</Button>
              </div>
            </div>
          </div>
        </Container>
      </Layout>
    )
  }
}

export default Detail

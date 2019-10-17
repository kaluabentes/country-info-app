import React, { Component } from 'react'

import Layout from '_templates/layout'
import Container from '_atoms/container'
import Button from '_atoms/button'

class Detail extends Component {
  constructor(props) {
    super(props)

    this.state = {}
  }

  render() {
    return (
      <Layout>
        <Container>
          <Button href="/" icon="ion-md-arrow-back">Back</Button>
        </Container>
      </Layout>
    )
  }
}

export default Detail

import AxiosClient from '_utils/axios-client'

const handleResponse = (res) => res.data

class CountryService {
  static index(fields) {
    return (
      AxiosClient
        .get(`/all?fields=${fields.join(';')}`)
        .then(handleResponse)
    )
  }

  static show(country, fields) {
    return (
      AxiosClient
        .get(`/alpha/${country}?fields=${fields.join(';')}`)
        .then(handleResponse)
    )
  }

  static search(term, fields) {
    return (
      AxiosClient
        .get(`/name/${term}?fields=${fields.join(';')}`)
        .then(handleResponse)
    )
  }
}

export default CountryService

import AxiosClient from '_utils/axios-client'

const handleResponse = (res) => res.data

class CountryService {
  static index(fields) {
    return AxiosClient.get(`/all?fields=${fields.join(';')}`).then(handleResponse)
  }
}

export default CountryService

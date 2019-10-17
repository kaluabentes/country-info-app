import AxiosClient from '_utils/axios-client'

const handleResponse = (res) => res.data

class Country {
  static index(fields) {
    return AxiosClient.get(`/all?fields=${fields.join(';')}`).then(handleResponse)
  }
}

export default Country

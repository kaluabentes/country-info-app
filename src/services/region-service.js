import AxiosClient from '_utils/axios-client'

const handleResponse = (res) => res.data

class RegionService {
  static index(region, fields) {
    return AxiosClient.get(`/region/${region}?fields=${fields.join(';')}`).then(handleResponse)
  }
}

export default RegionService

import axios from 'axios'

import { API_URLS } from '../constants/api-urls'

const axiosClient = axios.create({
  baseURL: API_URLS.baseURL,
})

export { axiosClient }

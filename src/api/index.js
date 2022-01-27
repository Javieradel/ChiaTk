import axios from 'axios'
import API from '/env/enviroment'
const {baseURL, API_KEY } = API
const api = axios.create({
  baseURL,
  headers: {
    'Content-Type': 'application/json',
    api_key: API_KEY
  }
})

export default api

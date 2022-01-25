import axios from 'axios'
import API from '/env/enviroment'
const {BASE, API_KEY } = API
const api = axios.create({
  BASE,
  headers: {
    'Content-Type': 'application/json',
    api_key: API_KEY
  }
})

export default api

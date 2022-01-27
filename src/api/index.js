import axios from 'axios'
import API from '/env/enviroment'
const {baseURL, API_KEY } = API
const api = axios.create({
  baseURL,
  headers: {
    //'Content-Type': 'application/x-www-form-urlencoded',
    'app-id': API_KEY
  }
})

export default api

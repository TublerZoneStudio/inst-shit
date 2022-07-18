import axios from 'axios'

export const API_URL = 'http://localhost:5000/api'

const $api = axios.create({
    headers: {
        'Access-Control-Allow-Origin': '*'
    },
    withCredentials: true,
    baseURL: API_URL
})

export default $api
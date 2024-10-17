import axios from 'axios'
import {
  getRefreshToken,
  setAccessToken,
  setRefreshToken
} from './local-storage'

// live EC2
// const BASE_URL = "https://bubbl.cards/api";
// development
// const BASE_URL = "https://devapi.bubbl.cards/api";
const BASE_URL = 'http://127.1.0.0:8000/api'

const axiosInstance = axios.create({ baseURL: BASE_URL })

// Interceptor to check for 401 errors (token expiration)
axiosInstance.interceptors.response.use(
  response => response, // if the response is successful, return it
  async error => {
    const originalRequest = error.config

    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true

      const refreshToken = getRefreshToken()

      const response = await axios.post(`${BASE_URL + '/auth/refresh-token'}`, {
        refreshToken
      })

      if (response.status === 200) {
        const newAccessToken = response.data.accessToken
        const newRefreshToken = response?.data?.refreshToken
        setAccessToken(newAccessToken)
        setRefreshToken(newRefreshToken)

        // Set the new access token in the request header and retry the request
        originalRequest.headers['Authorization'] = `Bearer ${newAccessToken}`
        return axiosInstance(originalRequest)
      }
    }

    return Promise.reject(error) // If it's a different error, reject the promise
  }
)

export default axiosInstance

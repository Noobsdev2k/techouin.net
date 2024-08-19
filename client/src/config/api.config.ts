// axiosInstance.ts
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { cookies } from 'next/headers'

// Define the Axios instance with a base URL and timeout
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://localhost:8888', // Use your API base URL
  timeout: 10000, // Set timeout as needed
  headers: {
    'Content-Type': 'application/json'
  }
})
// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from cookies

    const token = cookies().get('token')
    const clientId = cookies().get('client_id')
    if (token && clientId) {
      // Set the Authorization header with the token
      config.headers = config.headers || {}
      config.headers['authorization'] = token
      config.headers['x-client-id'] = clientId
    }
    return config
  },
  (error: AxiosError): Promise<AxiosError> => {
    // Handle request errors
    return Promise.reject(error)
  }
)

// Response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse => {
    // Optionally process the response data here
    return response
  },
  (error: AxiosError): Promise<AxiosError> => {
    // Handle response errors
    if (error.response && (error.response.status === 500 || error.response.status === 401)) {
      // Handle unauthorized errors (e.g., clear token and redirect to login)
      cookies().delete('token')
      cookies().delete('client_id')
      // Redirect to login or handle unauthorized access appropriately
    }
    return Promise.reject(error)
  }
)

export default axiosInstance

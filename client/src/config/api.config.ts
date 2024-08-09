// axiosInstance.ts
import axios, { AxiosInstance, AxiosResponse, AxiosError } from 'axios'
import { cookies } from 'next/headers'
import { useRouter } from 'next/navigation'

// Define the Axios instance with a base URL and timeout
const axiosInstance: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API_BASE_URL || 'https://localhost:8888', // Use your API base URL
  timeout: 10000, // Set timeout as needed
  headers: {
    'Content-Type': 'application/json'
  }
})
const cookieStore = cookies()
const router = useRouter()
// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from cookies

    const token = cookieStore.get('token')
    const clientId = cookieStore.get('client_id')
    const refreshToken = cookieStore.get('refresh_token')
    if (token && clientId && refreshToken) {
      // Set the Authorization header with the token
      config.headers = config.headers || {}
      config.headers['authorization'] = token
      config.headers['x-client-id'] = clientId
      config.headers['x-refresh-token'] = refreshToken
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
      cookieStore.delete('token')
      cookieStore.delete('client_id')
      cookieStore.delete('refresh_token')
      // Redirect to login or handle unauthorized access appropriately
      router.push('/login')
    }
    return Promise.reject(error)
  }
)

export default axiosInstance

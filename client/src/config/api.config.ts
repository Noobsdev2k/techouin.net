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

// Helper function to refresh token
// const refreshToken = async () => {
//   const cookieStore = cookies()
//   const clientId = cookieStore.get('client_id')?.value
//   const refreshToken = cookieStore.get('refresh_token')?.value
//   const token = cookieStore.get('token')?.value

//   if (!clientId || !refreshToken) {
//     console.error('Missing client ID or refresh token')
//     return null
//   }

//   try {
//     const response = await axiosInstance.post('/refresh_token', null, {
//       headers: {
//         'x-refresh-token': refreshToken,
//         'x-client-id': clientId,
//         authorization: token
//       }
//     })

//     if (response.status === 200) {
//       const data = response.data
//       const newToken = data.metadata.tokens.accessToken
//       cookies().set('token', newToken) // Update token in cookies
//       return newToken
//     }
//   } catch (error) {
//     console.error('Failed to refresh token:', error)
//     return null
//   }
// }

// Request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    // Retrieve the token from cookies
    const token = cookies().get('token')?.value
    const clientId = cookies().get('client_id')?.value
    console.log('token', token)
    console.log('client_id', clientId)

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
  async (error: AxiosError): Promise<any> => {
    // Ensure that the original request exists
    const originalRequest = error.config

    if (originalRequest && error.response) {
      // Handle 401 errors (unauthorized)
      if (error.response.status === 401) {
        // const newToken = await refreshToken()
        // if (newToken) {
        //   // Retry the original request with the new token
        //   originalRequest.headers = originalRequest.headers || {}
        //   originalRequest.headers['authorization'] = newToken
        //   return axiosInstance(originalRequest)
        // }
      }

      // Handle 500 errors (server error)
      if (error.response.status === 500) {
        // cookies().delete('token')
        // cookies().delete('client_id')
      }
    }

    return Promise.reject(error)
  }
)

export default axiosInstance

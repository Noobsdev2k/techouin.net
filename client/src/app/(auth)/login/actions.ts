'use server'

import axiosInstance from '@/config/api.config'
import { loginSchema, LoginValues } from '@/lib/validation'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(value: LoginValues): Promise<{ error: string }> {
  try {
    const response = await axiosInstance.post('/login', value)
    const data = response.data
    if (data.status !== 200) {
      return {
        error: data.message
      }
    }
    cookies().set('token', data.metadata.tokens.accessToken)
    cookies().set('client_id', data.metadata.isUser._id)
    return redirect('/')
  } catch (error) {
    if (isRedirectError(error)) throw error
    console.log(error)
    return {
      error: 'Something went wrong. Please try again.'
    }
  }
}

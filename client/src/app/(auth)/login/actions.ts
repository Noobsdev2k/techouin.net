'use server'

import axiosInstance from '@/config/api.config'
import { loginSchema, LoginValues } from '@/lib/validation'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function login(value: LoginValues): Promise<{ error: string }> {
  try {
    const formData = loginSchema.parse(value)
    const response = await axiosInstance.post('/login', formData)
    let data = response.data
    if (response.status !== 200) {
      return {
        error: data.message
      }
    }
    cookies().set('token', data.metadata.tokens.accessToken)
    cookies().set('refreshToken', data.metadata.tokens.refreshToken)
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

export async function googleLogin(value: any): Promise<{ error: string }> {
  try {
    console.log(value)

    const response = await axiosInstance.post('/auth/google', value)
    let data = response.data
    if (response.status !== 200) {
      return {
        error: data.message || 'login with google is fail'
      }
    }
    console.log(data)

    cookies().set('token', data.metadata.tokens.accessToken)
    cookies().set('refreshToken', data.metadata.tokens.refreshToken)
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

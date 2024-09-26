'use server'

import axiosInstance from '@/config/api.config'
import { signUpSchema, SignUpValues } from '@/lib/validation'
import { isAxiosError } from 'axios'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'

export async function register(value: SignUpValues): Promise<{ error: string }> {
  try {
    const formData = signUpSchema.parse(value)
    const response = await axiosInstance.post('/signup', formData)

    if (response.status !== 201) {
      const data = response.data
      return {
        error: data.message || 'Registration failed. Please try again.'
      }
    }
    return redirect('/verify_otp')
  } catch (error) {
    if (isRedirectError(error)) throw error
    if (isAxiosError(error) && error.response) {
      // Handle server errors that are not 201
      const serverError = error.response.data?.message || 'Something went wrong. Please try again.'
      return {
        error: serverError
      }
    }
    console.log('error', error)
    return {
      error: 'Something went wrong. Please try again.'
    }
  }
}

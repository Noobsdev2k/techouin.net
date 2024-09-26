'use server'

import axiosInstance from '@/config/api.config'
import { OtpSchema, OtpValues } from '@/lib/validation'
import { isAxiosError } from 'axios'
import { isRedirectError } from 'next/dist/client/components/redirect'
import { redirect } from 'next/navigation'
import { cookies } from 'next/headers'

export async function verify_otp(value: OtpValues): Promise<{ error: string }> {
  try {
    const formData = OtpSchema.parse(value)
    const response = await axiosInstance.post('/verify_otp', formData)
    let data = response.data
    if (response.status !== 201) {
      return {
        error: data.message || 'Verify OTP failed. Please try again.'
      }
    }
    cookies().set('token', data.metadata.tokens.accessToken)
    cookies().set('client_id', data.metadata.isUser._id)
    return redirect('/')
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

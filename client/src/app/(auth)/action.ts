'use server'
import axiosInstance from '@/config/api.config'
import { isRedirectError } from 'next/dist/client/components/redirect'

export async function checkUser() {
  try {
    const res = await axiosInstance.get('/getProfile')

    return res.data.metadata
  } catch (error) {
    if (isRedirectError(error)) throw error
    console.log(error)
  }
}

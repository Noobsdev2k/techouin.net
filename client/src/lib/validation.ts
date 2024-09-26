import { z } from 'zod'

const requiredString = z.string().trim().min(2, 'Required')

export const signUpSchema = z
  .object({
    email: requiredString.email('Invalid email address'),
    name: requiredString.regex(/^[^\u00C0-\u1EF9]+$/i, 'Only letters, numbers, - and _ allowed'),
    password: requiredString.min(8, 'Must be at least 8 characters'),
    confirm_password: requiredString.min(8, 'Must be at least 8 characters'),
    phone: requiredString
      .min(10, 'Phone number must be at least 10 digits')
      .max(13, 'Phone number must not exceed 13 digits')
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "Passwords don't match",
    path: ['confirm_password']
  })

export type SignUpValues = z.infer<typeof signUpSchema>

export const loginSchema = z.object({
  email: requiredString.email('Invalid email address'),
  password: requiredString
})

export type LoginValues = z.infer<typeof loginSchema>

export const OtpSchema = z.object({
  pin: z.string().min(6, {
    message: 'Your one-time password must be 6 characters.'
  })
})
export type OtpValues = z.infer<typeof OtpSchema>
export const updateUserProfileSchema = z.object({
  displayName: requiredString,
  bio: z.string().max(1000, 'Must be at most 1000 characters')
})

export type UpdateUserProfileValues = z.infer<typeof updateUserProfileSchema>

export const createCommentSchema = z.object({
  content: requiredString
})

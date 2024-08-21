import { useState } from 'react'
import { z, ZodObject } from 'zod'

type FormState<T> = {
  [K in keyof T]: T[K]
}
type FormErrors<T> = Partial<Record<keyof FormState<T>, string[]>>

export const useFormFields = <T extends Record<string, any>>(initialState: T) => {
  const [formFields, setFormFields] = useState<FormState<T>>(initialState)
  const [errors, setErrors] = useState<FormErrors<T>>({})

  const validateForm = (data: FormState<T>, FormSchema: ZodObject<any> | any): FormErrors<T> => {
    try {
      FormSchema.parse(data)
      setErrors({})
      return {}
    } catch (error) {
      if (error instanceof z.ZodError) {
        const formErrors: FormErrors<T> = {}

        for (const key in error.flatten().fieldErrors) {
          if (key in data) {
            formErrors[key as keyof T] = error.flatten().fieldErrors[key]
          }
        }
        setErrors(formErrors)
        return formErrors
      }
      return {}
    }
  }

  // Handle changes to any input field
  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = event.target
    const updatedFormData = { ...formFields, [name]: value }
    setFormFields(updatedFormData)
  }
  const resetFields = () => {
    setFormFields(initialState)
  }
  return {
    formFields,
    handleFieldChange,
    validateForm,
    errors,
    resetFields
  }
}

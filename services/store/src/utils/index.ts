import { Types } from 'mongoose'
import bcrypt from 'bcrypt'

export const checkEnable = (value: any) => {
  return value === 'true'
}

export const convert2ObjectId = (id: string) => {
  return new Types.ObjectId(id)
}

export const hashPassword = async (password: string) => {
  const salt = await bcrypt.genSalt(10)
  return await bcrypt.hash(password, salt)
}
export const comparePassword = async (password: string, hashPassword: string) =>
  await bcrypt.compare(password, hashPassword)

export const getSelectData = (select: any = []) => {
  return Object.fromEntries(select.map((el: any) => [el, 1]))
}

export const unGetSelectData = (select: any = []) => {
  return Object.fromEntries(select.map((el: any) => [el, 0]))
}

export const Headers = {
  API_KEY: 'x-api-key',
  AUTHORIZATION: 'authorization',
  CLIENT_ID: 'x-client-id',
  REFRESH_TOKEN: 'x-refresh-token'
}

/**
 * Removes properties from an object that have values of `undefined` or `null`.
 * @param object - The object from which properties with `undefined` or `null` values will be removed.
 * @returns The modified object with all properties having `undefined` or `null` values removed.
 */
export const removeAttrUndefined = (object: Record<string, any>): Record<string, any> => {
  Object.keys(object).forEach((key) => {
    if (object[key] === undefined || object[key] === null) {
      delete object[key]
    }
  })

  return object
}

/**
 * Flattens a nested object by converting nested keys into dot-separated keys.
 * @param obj - The nested object to be flattened.
 * @returns The flattened object with dot-separated keys.
 */
export const updateNestedObjectParser = (obj: Record<string, any>): Record<string, any> => {
  const final: Record<string, any> = {}

  Object.keys(obj).forEach((key) => {
    if (typeof obj[key] === 'object' && !Array.isArray(obj[key])) {
      const nestedObj = updateNestedObjectParser(obj[key])
      Object.keys(nestedObj).forEach((nestedKey) => {
        final[`${key}.${nestedKey}`] = nestedObj[nestedKey]
      })
    } else {
      final[key] = obj[key]
    }
  })

  return final
}

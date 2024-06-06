import { Response } from 'express' // Assuming you're using Express for Response
import { ReasonPhrases } from 'http-status-codes'
interface ResponseType<T = object | any> {
  message: string
  metadata?: T
}
interface MyResponseType extends ResponseType<object> {
  res: Response
  headers?: object
}
export { ResponseType, MyResponseType }

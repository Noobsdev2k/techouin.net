import { Schema, model } from 'mongoose'
const DOCUMENT_NAME = 'Otp'
const COLLECTION_NAME = 'Otps'

const OtpSchema = new Schema(
  {
    email: String,
    otp: String,
    time: { type: Date, default: Date.now(), index: { expires: 60 } } // 60s expire
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

export default model(DOCUMENT_NAME, OtpSchema)

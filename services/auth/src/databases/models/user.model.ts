import { Schema, model } from 'mongoose'
const DOCUMENT_NAME = 'User'
const COLLECTION_NAME = 'Users'

const userSchema = new Schema(
  {
    name: {
      type: String,
      trim: true,
      maxLength: 150
    },
    email: {
      type: String,
      unique: true,
      trim: true
    },
    password: {
      type: String,
      required: true
    },
    phone: {
      type: String,
      default: ''
    },
    avatar: {
      type: String,
      default: ''
    },
    verify: {
      type: Boolean,
      default: false
    },
    status: {
      type: String,
      enum: ['active', 'inactive'],
      default: 'inactive'
    },
    roles: {
      type: Schema.Types.ObjectId,
      ref: 'Role'
    }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

export default model(DOCUMENT_NAME, userSchema)

import { model, Schema } from 'mongoose'

const DOCUMENT_NAME = 'Resource'
const COLLECTION_NAME = 'Resources'

const modelSchema = new Schema(
  {
    srcName: { type: String, required: true },
    srcSlug: { type: String, required: true },
    srcDescription: { type: String, default: '' },
    usrStatus: { type: String, default: 'pending', enum: ['pending', 'active', 'block'] }
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

export default model(DOCUMENT_NAME, modelSchema)

import { Schema, model } from 'mongoose'

const DOCUMENT_NAME = 'Role'
const COLLECTION_NAME = 'Roles'

const modelSchema = new Schema(
  {
    roleName: { type: String, default: 'user', enum: ['user', 'creator', 'admin'], require: true, unique: true },
    roleSlug: { type: String, required: true },
    roleStatus: { type: String, default: 'pending', enum: ['pending', 'active', 'block'] },
    roleDescription: { type: String, default: '' },
    roleGrants: [
      {
        resource: { type: Schema.Types.ObjectId, ref: 'Resource', required: true },
        actions: [{ type: String, required: true }],
        attributes: { type: String, default: '*' }
      }
    ]
  },
  {
    timestamps: true,
    collection: COLLECTION_NAME
  }
)

export default model(DOCUMENT_NAME, modelSchema)

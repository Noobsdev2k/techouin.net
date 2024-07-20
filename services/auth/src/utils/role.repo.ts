import { Api403Error, BusinessLogicError } from '@/api/middlewares'
import resourceModel from '@/databases/models/resource.model'
import roleModel from '@/databases/models/role.model'
import userModel from '@/databases/models/user.model'

export const createRole = async ({ name = 'shop', slug = 's00001', description = '', grants = [] }) => {
  return await roleModel.create({
    roleName: name,
    roleSlug: slug,
    roleDescription: description,
    roleGrants: grants
  })
}

export const createResource = async ({ name = 'profile', slug = 'p00001', description = '' }) => {
  // 1. Check if the resource name already exists
  const existingResource = await resourceModel.findOne({ srcName: name })
  if (existingResource) {
    throw new Api403Error('Resource with this name already exists')
  }

  // 2. Create and save the new resource
  const newResource = resourceModel.create({ srcName: name, srcSlug: slug, srcDescription: description })

  return newResource
}

export const getRoleListOfUser = async (userId = '') => {
  try {
    // get role of user
    const foundUser = await userModel.findOne({ _id: userId, verify: true })
    const roleCodes = foundUser?.roles

    // get role detail
    const roles = await roleModel.aggregate([
      { $match: { _id: roleCodes } },
      { $unwind: '$roleGrants' },
      {
        $lookup: {
          from: 'Resources',
          localField: 'roleGrants.resource',
          foreignField: '_id',
          as: 'resource'
        }
      },
      { $unwind: '$resource' },
      {
        $project: {
          role: '$roleName',
          resource: '$resource.srcName',
          action: '$roleGrants.actions',
          attributes: '$roleGrants.attributes'
        }
      },
      {
        $unwind: '$action'
      },
      {
        $project: {
          _id: 0,
          role: 1,
          resource: 1,
          action: '$action',
          attributes: 1
        }
      }
    ])
    console.log(roles)

    return roles
  } catch (e: any) {
    throw new BusinessLogicError(e)
  }
}

import userModel from '@/databases/models/user.model'
import { Api401Error } from '../middlewares'
import { hashPassword } from '@/utils'
import { createTokenPair, generateKeyPair } from '@/helpers/auth'
import keyTokenServices from './keyToken.services'
import roleModel from '@/databases/models/role.model'
import { createRole } from '@/utils/role.repo'

class AccessService {
  createAdmin = async (payload: any): Promise<any> => {
    const { name, email, password, phone } = payload
    const checkEmail = await userModel.findOne({ email }).lean()
    //check email is already
    if (checkEmail) {
      throw new Api401Error('Email already Register!!')
    }
    // hash password
    const hashPass = await hashPassword(password)

    //create role admin
    const adminRole = await roleModel.findOne({ roleName: 'admin' })

    //create new user
    const newAdmin = await userModel.create({
      name,
      email,
      password: hashPass,
      phone,
      verify: true,
      roles: adminRole?._id
    })
    if (!newAdmin) {
      return null
    }

    const { privateKey, publicKey } = generateKeyPair()

    const publicKeyDb = await keyTokenServices.createKeyToken({
      userId: newAdmin._id,
      publicKey,
      privateKey
    })
    if (!publicKeyDb) throw new Api401Error('Create key token failed')
    const tokens = await createTokenPair(
      { userId: newAdmin._id, email, roles: newAdmin.roles },
      publicKeyDb,
      privateKey
    )
    return { newAdmin, tokens }
  }

  //create role
  createRole = async (payload: any) => {
    const { name, slug, description, grants } = payload
    // check admin

    //check exits
    const existingRole = await roleModel.findOne({ roleName: name })
    if (existingRole) {
      throw new Api401Error('Role with this name already exists.')
    }
    const newRole = createRole({ name, slug, description, grants })
    return newRole
  }
}
export default new AccessService()

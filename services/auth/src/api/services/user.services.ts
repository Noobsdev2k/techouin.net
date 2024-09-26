import userModel from '@/databases/models/user.model'
import { Api401Error } from '../middlewares'

class UserService {
  //create roles
  getProfile = async ({ userId, data }: any) => {
    console.log(userId, data)

    const isUser = await userModel.findById(userId)
    if (!isUser) {
      throw new Api401Error('Profile not found')
    }
    return isUser
  }
}
export default new UserService()

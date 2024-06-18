import cloudinary from '@/utils/cloudinary.connect'
import { Api400Error } from '../middlewares'

class UploadServices {
  static async UploadImage({ path, folderName }: any) {
    if (!path) throw new Api400Error('path not found')
    const result = await cloudinary.uploader.upload(path, {
      folder: `product/${folderName}`,
      format: 'webp'
    })
    if (!result) throw new Api400Error('Upload fail')
    return {
      image_url: result.secure_url
    }
  }
}
export default UploadServices

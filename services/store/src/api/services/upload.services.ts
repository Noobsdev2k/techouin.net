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

  static async UploadMultiImage({ files, folderName }: any) {
    if (!files.length) return
    let uploadUrls = []
    for (const file of files) {
      const result = await cloudinary.uploader.upload(file.path, {
        folder: `product/${folderName}`,
        format: 'webp'
      })

      uploadUrls.push({
        imageUrl: result.secure_url,
        shopId: folderName,
        thumbUrl: await cloudinary.url(result.public_id, {
          height: 100,
          width: 150,
          format: 'webp'
        })
      })
    }
    return uploadUrls
  }
}
export default UploadServices

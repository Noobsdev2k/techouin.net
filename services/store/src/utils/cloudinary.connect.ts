import config from '@/configs/config'
import { v2 as cloudinary } from 'cloudinary'

// Configuration
cloudinary.config({
  cloud_name: config.upload.cloud_name,
  api_key: config.upload.api_key,
  api_secret: config.upload.api_secret // Click 'View Credentials' below to copy your API secret
})

export default cloudinary

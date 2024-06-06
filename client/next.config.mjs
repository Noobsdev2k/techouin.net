import MillionLint from '@million/lint'
/** @type {import('next').NextConfig} */

const nextConfig = {
  reactStrictMode: true,
  // output: 'export',
  trailingSlash: true,
  distDir: 'dist',
  images: {
    unoptimized: true
  },
  // basePath: '/',
  webpack: (config) => {
    config.watchOptions = {
      poll: 1000,
      aggregateTimeout: 300
    }
    return config
  }
}
export default MillionLint.next({
  rsc: true,
  filter: {
    include: '**/components/*.{mtsx,mjsx,tsx,jsx}',
    include: '**/(blog)/blog/components/*.{mtsx,mjsx,tsx,jsx}'
  }
})(nextConfig)

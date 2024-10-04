/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true,
  },
  env: {
    MONGODB_URI: process.env.MONGODB_URI,
  },
  images: {
    domains: ['cdn.discordapp.com'],
  },
}

export default nextConfig

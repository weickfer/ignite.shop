/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  
  images: {
    domains: ['files.stripe.com']
  },

  experimental: {
    images: {
      newNextLinkBehavior: true, // With this option enabled, Link component add anchor tag on content
      allowFutureImage: true,
    }
  }
}

module.exports = nextConfig

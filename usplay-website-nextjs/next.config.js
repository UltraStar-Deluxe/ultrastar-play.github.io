/** @type {import('next').NextConfig} */
const nextConfig = {
    assetPrefix: '/UltraStar-Deluxe/',
    basePath: '/UltraStar-Deluxe',
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            unoptimized: true
        }
    }
}

module.exports = nextConfig

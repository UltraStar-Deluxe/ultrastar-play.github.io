/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    experimental: {
        images: {
            unoptimized: true
        }
    },

    async redirects()
    {
        return [
            {
                source: '/get',
                destination: 'https://github.com/UltraStar-Deluxe/Play/releases/latest',
                permanent: false,
            },
            {
                source: '/sponsors',
                destination: 'https://github.com/UltraStar-Deluxe/Play/releases/latest',
                permanent: false,
            },
        ]
    },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    swcMinify: true,
    images: {
        loader: 'akamai',
        path: '/',
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

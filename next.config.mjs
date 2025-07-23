/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        formats: ['image/webp'],
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'images.unsplash.com',
            },
            {
                protocol: 'https',
                hostname: 'img.icons8.com',
            },
            {
                protocol: 'https',
                hostname: 'www.powerschool.com',
            },
            {
                protocol: 'https',
                hostname: 'assets.mixkit.co'
            },
        ],

    },
};

export default nextConfig;
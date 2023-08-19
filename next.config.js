/** @type {import('next').NextConfig} */
const nextConfig = {
    headers: {
        cacheControl: {
            maxAge: 600,
            noCache: false,
            mustRevalidate: false,
        },
    },
    images: {
        domains: ['github.com'], // Add other domains if needed
    },
}

module.exports = nextConfig

/** @type {import('next').NextConfig} */
const withLess = require("next-with-less");

const nextConfig = {
  reactStrictMode: false,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'mynervadev.s3.ap-south-1.amazonaws.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
}

const lessCongig = withLess({
  lessLoaderOptions: {
    /* ... */
  },
})

module.exports = {...nextConfig,...lessCongig}

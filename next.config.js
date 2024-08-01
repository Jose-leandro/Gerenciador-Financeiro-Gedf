/** @type {import('next').NextConfig} */

module.exports = {
    experimental: {
      forceSwcTransforms: true,
    },
    async redirects() {
      return [
        {
          source: '/',
          destination: '/en',
          permanent: true,
        },
      ];
    },
  }


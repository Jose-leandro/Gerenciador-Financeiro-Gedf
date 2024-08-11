/** @type {import('next').NextConfig} */

module.exports = {
  experimental: {
    forceSwcTransforms: true,
  },
  compilerOptions: {
    baseUrl: '.',
    paths: {
      '@/*': ['src/*'],
    },
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
};

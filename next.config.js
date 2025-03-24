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
  }
};

module.exports = {
  testEnvironment: 'jest-environment-jsdom',
   setupFilesAfterEnv: ['<rootDir>/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.sass$': '<rootDir>sass-transformer.js'
  }
}

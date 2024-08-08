module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['C:/Users/leand/gerenciador-financeiro-gedf/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.jsx?$': 'babel-jest',
    '^.+\\.sass$': 'jest-transform-sass'
  }  
}

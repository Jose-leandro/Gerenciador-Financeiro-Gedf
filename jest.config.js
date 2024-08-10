module.exports = {
  testEnvironment: 'jest-environment-jsdom',
  setupFilesAfterEnv: ['C:/Users/leand/gerenciador-financeiro-gedf/jest.setup.js'],
  moduleNameMapper: {
    '\\.(css|sass|scss)$': 'identity-obj-proxy'
  },
  transform: {
    '^.+\\.jsx?$': 'C:/Users/leand/gerenciador-financeiro-gedf/babel-transformer.js',
    '^.+\\.sass$': 'C:/Users/leand/gerenciador-financeiro-gedf/sass-transformer.js'
  }  
}

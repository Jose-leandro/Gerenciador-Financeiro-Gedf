module.exports = {
    testEnvironment: 'jest-environment-jsdom',
    "moduleNameMapper": {
        "\\.(css|sass|scss)$": "identity-obj-proxy"
    },
    "transform": {
        '^.+\\.jsx?$': 'babel-jest',
        '^.+\\.sass$': '<rootDir>sass-transformer.js',
    },
};
const { createTransformer } = require('babel-jest');
const babelOptions = {
  presets: [
    '@babel/preset-env',
    '@babel/preset-react',
  ],
  plugins: [
    'babel-plugin-transform-import-meta', // Add this line
  ],
};

module.exports = createTransformer(babelOptions);

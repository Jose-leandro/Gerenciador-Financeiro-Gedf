const path = require('path');

module.exports = {
  mode: 'development',
  entry: './pages/index.jsx',
  output: {
    filename: 'index.bundle.jsx',
    path: path.resolve(__dirname, 'dist'),
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
    ],
  },
  plugins: [],
};

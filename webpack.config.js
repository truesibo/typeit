const webpack = require('webpack');
const pkg = require('./package.json');
const isProd = process.env.NODE_ENV === 'production';

const banner = `
  ${pkg.name} - ${pkg.description}
  Author: ${pkg.author}
  Version: v${pkg.version}
  URL: ${pkg.homepage}
  License: ${pkg.license}
`;

module.exports = {
  mode: isProd ? 'production' : 'development',
  entry: {
    TypeIt: './src/TypeIt.js'
  },
  output: {
    path: __dirname + '/dist',
    library: 'TypeIt',
    libraryTarget: 'umd',
    libraryExport: "default",
    filename: 'typeit.min.js'
  },
  module: {
    rules: [{
      test: /\.js$/,
      exclude: /node_modules/,
      loader: 'babel-loader',
      query: {
        compact: true
      }
    }]
  },
  plugins: [
    new webpack.BannerPlugin({ banner })
  ]
};

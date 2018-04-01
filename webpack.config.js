const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm

const config = {
  mode: "development",
  module: {
    rules: [
      { test: /\.js$/, use: 'babel-loader' }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin()
  ]
};

module.exports = config;
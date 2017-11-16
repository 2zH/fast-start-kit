const HtmlWebpackPlugin = require('html-webpack-plugin')
const path = require('path')

const entry = './index.js'
const output = {
  path: path.resolve(__dirname, './'),
  filename: 'bundle.js'
}
const devServer = {
  contentBase: './',
  open: true,
  watchOptions:{
    poll: true
  }
}
const plugins = [
  new HtmlWebpackPlugin()
]

module.exports = {
  entry,
  output,
  devServer,
  plugins
}
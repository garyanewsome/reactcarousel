/*eslint-disable no-undef */
var path = require('path')
var webpack = require('webpack')
module.exports = {
  context: __dirname + '/src',
  entry: './app.js',

  output: {
    filename: 'app.js',
    path: __dirname + '/dist'
  },
  devtool: '#source-map',
  externals: {'jquery':'jQuery'},
  plugins: [
    //new webpack.optimize.UglifyJsPlugin({minimize: true})
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['react-hot', 'babel'],
        include: path.join(__dirname, 'src')
      }
    ]
  }
}
/*eslint-disable no-undef */
var webpack = require('webpack');

module.exports = {
  devtool: 'source-map',
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname+'/client',
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ],
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
      exclude: /node_modules/,
      loader: 'babel'
    }
  ]
  }
};

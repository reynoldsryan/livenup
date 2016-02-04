module.exports = {
  entry: [
    './client/index.js'
  ],
  output: {
    path: __dirname+'/client',
    publicPath: '/',
    filename: 'bundle.js'
  },
  module: {
    loaders: [{
      exclude: /node_modules/,
      loader: 'babel'
    }]
  },
  devtool: 'eval',
  resolve: {
    extensions: ['', '.js', '.jsx']
  }
};

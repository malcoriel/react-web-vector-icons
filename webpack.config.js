var path = require('path');
module.exports = {
  entry: {
    index: './src/index.js',
    partial :'./src/partial.js'
  },
  output: {
    path: path.resolve(__dirname, 'dist'),
    libraryTarget: 'commonjs2' // ----------------------
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        include: path.resolve(__dirname, 'src'),
        exclude: /(node_modules|dist)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['env']
          }
        }
      }
    ]
  },
  externals: {
    'react': 'commonjs react' // ----------------------
  }
};

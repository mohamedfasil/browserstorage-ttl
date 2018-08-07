const path = require('path');

 module.exports = {
   entry: {
    bundle: './src/index.js'
  },
   output: {
     path: path.resolve(__dirname),
      filename: 'Storage.js',
      library: 'Storage',
      libraryTarget: 'umd',
      umdNamedDefine: true
    },
  module: {
    rules: [{
      test: /\.js$/,
     exclude: /node_modules/,
     use: 'babel-loader'
   }]
 }
 };
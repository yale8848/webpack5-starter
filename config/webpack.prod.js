 const { merge } = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
 const common = require('./webpack.common.js');

 module.exports = merge(common, {
     mode: "production",
     devtool: 'source-map',
     output: {
         publicPath: ''
     },
     plugins: [
         new UglifyJSPlugin({
             sourceMap: true
         })
     ],
     target: ['web', 'es5'],
     module: {
         rules: [{
             test: /\.js$/,
             exclude: /node_modules/,
             use: {
                 loader: 'babel-loader',
             }
         }]
     },
 });
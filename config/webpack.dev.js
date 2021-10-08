 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
 const root = path.resolve(__dirname, '../')
 const src = path.resolve(root, 'src')
 const dist = path.resolve(root, 'dist')


 module.exports = merge(common, {
     devtool: 'inline-source-map',
     mode: 'development',
     devServer: {
         static: {
             directory: dist,
         },
     },

 });
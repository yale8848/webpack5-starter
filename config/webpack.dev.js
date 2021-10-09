 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
 const path = require('path');
 const root = path.resolve(__dirname, '../')
 const src = path.resolve(root, 'src')
 const dist = path.resolve(root, 'dist')

 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

 module.exports = merge(common, {
     devtool: 'inline-source-map',
     mode: 'development',
     devServer: {
         static: {
             directory: dist,
         },
     },
     plugins: [
         new BundleAnalyzerPlugin()
     ]

 });
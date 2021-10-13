 const { merge } = require('webpack-merge');
 const common = require('./webpack.common.js');
 const config = require('./config')

 const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

 module.exports = merge(common, {
     devtool: 'inline-source-map',
     mode: 'development',
     devServer: {
         static: {
             directory: config.dist,
         },
     },

     plugins: [
         // new BundleAnalyzerPlugin()
     ]

 });
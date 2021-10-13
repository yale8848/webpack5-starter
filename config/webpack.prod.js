 const { merge } = require('webpack-merge');
 const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

 const common = require('./webpack.common.js');

 module.exports = merge(common, {
     mode: "production",
     devtool: 'source-map',
     output: {
         publicPath: ''
     },
     optimization: {
         splitChunks: {
             chunks: "all",
             minSize: 30000,
             minChunks: 1,
             maxAsyncRequests: 5,
             maxInitialRequests: 3,
             automaticNameDelimiter: '~',
             cacheGroups: {
                 vendors: {
                     name: "vendor",
                     test: /[\\/]node_modules[\\/]/,
                     priority: -10
                 },
                 default: {
                     name: "common",
                     minChunks: 2,
                     priority: -20,
                     reuseExistingChunk: true
                 }
             }
         },
     },
     plugins: [
         new UglifyJSPlugin({
             sourceMap: true
         })
     ],
     target: ['web', 'es5'],
     module: {
         rules: []
     },
 });
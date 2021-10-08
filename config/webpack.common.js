const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require('path');
const root = path.resolve(__dirname, '../')
const src = path.resolve(root, 'src')
const dist = path.resolve(root, 'dist')


module.exports = {
    entry: path.resolve(src, 'index.js'),
    output: {
        filename: '[name].[contenthash:8].js',
        path: dist,
        publicPath: '/'
    },
    resolve: {
        alias: {
            "@": src
        }
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(src, 'index.html'),
            title: "webpack starter",
        }),
    ],
    module: {
        rules: [{
            test: /\.css$/,
            use: [
                'style-loader',
                'css-loader'
            ]
        }]
    },
};
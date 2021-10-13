const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const config = require('./config')

module.exports = {
    entry: {
        main: path.resolve(config.src, 'index.js'),
    },
    output: {
        filename: '[name].[contenthash:8].js',
        path: config.dist,
        publicPath: '/'
    },
    resolve: {
        alias: {
            "@": config.src
        }
    },
    externals: {
        lodash: '_'
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            template: path.resolve(config.src, 'index.html'),
            title: "webpack starter",
        }),
        new MiniCssExtractPlugin({
            filename: '[name].[hash:10].css',
        })

    ],
    module: {
        rules: [{
                test: /\.css$/,
                exclude: /node_modules/,
                use: [MiniCssExtractPlugin.loader, 'css-loader']
            },
            {
                test: /\.(png|svg|jpg|gif)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1000,
                        esModule: false,
                        name: "img/[hash:10].[ext]",

                    },
                }],
                type: 'javascript/auto'
            },
            {
                test: /\.(woff|woff2|eot|ttf|otf)$/,
                use: [{
                    loader: 'url-loader',
                    options: {
                        limit: 1,
                        esModule: false,
                        name: "font/[hash:10].[ext]",

                    },
                }],
                type: 'javascript/auto'
            },
            {
                test: /\.less$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader" // compiles Less to CSS
                }]
            },
            {
                test: /\.scss$/,
                use: [MiniCssExtractPlugin.loader, {
                    loader: "css-loader" // 将 CSS 转化成 CommonJS 模块
                }, {
                    loader: 'postcss-loader'
                }, {
                    loader: "sass-loader" // 将 Sass 编译成 CSS
                }]
            }
        ]
    },
};
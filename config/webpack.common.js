const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require("html-webpack-plugin");

const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const path = require('path');
const config = require('./config')

const pages = ["index", "page1"]

const Htmlplugin = pages.map(chunkName => {
    return new HtmlWebpackPlugin({
        template: path.resolve(config.src, `${chunkName}.html`), //设置打包后的文件,插入到的模板html文件是哪个(以来的模板文件)
        filename: `${chunkName}.html`, //输出文件的名称(打包后的html文件名,可以自己设置,最好不要变动)
        chunks: [chunkName], //代表指定的入口文件是哪个
    })
});

const entrys = () => {

    let ret = {};
    for (const pg of pages) {
        ret[pg] = path.resolve(config.src, `${pg}`, `${pg}.js`)
    }
    return ret;
}
module.exports = {
    entry: entrys(),
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
        ...Htmlplugin,
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
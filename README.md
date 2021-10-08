

### Moudle

<details>
  <summary>convert to ES5</summary>
   <pre><code>
npm install webpack webpack-cli @babel/core @babel/preset-env babel-loader core-js --save-dev 
    </code></pre>
    webpack-config.js
   <pre><code>
const path = require('path');

module.exports = {
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'dist')
    },
    mode: 'development',
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
};
    </code></pre>
    .babelrc
   <pre><code>

{
    "presets": [
      ["@babel/preset-env",
        {
          "useBuiltIns": "usage",
          "corejs": 3
        }
      ]
    ]
  }
    </code></pre>

</details>



### Ref
- [webpack官网](https://www.webpackjs.com/guides/)
- [webpack5配置babel](https://my.oschina.net/u/4125329/blog/4916583)
- [webpack5.x 配合babel编译打包发布es5的代码](https://blog.csdn.net/maki077/article/details/110531741)
  

'use strict'

const path = require('path')
const webpack  = require('webpack')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry:{
    index:'./src/index.js',
    file:'./src/file.js',
    search:'./src/search.js'
  },
  output:{
    path: path.join(__dirname,'dist'),
    filename:'[name].js'
  },
  mode:'development',
  // 文件监听
  watch:false,
  // 只有开启监听模式时，watchOptions才有意义
  watchOptions:{
    // 默认为空，不监听的文件或者文件夹，支持正则匹配
    ignored:/node_modules/,
    // 监听到变化发生后会等待300ms再去执行，默认300ms
    aggregateTimeout:300,
    // 判断文件是否发生变化，是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
    poll:300
  },
  // 热更新插件,是webpack内嵌的一个插件，可以直接通过webpack的方式来引用，无需额外引入
  plugins:[
    new webpack.HotModuleReplacementPlugin(),
    new optimizeCssAssetsWebpackPlugin({
      assetNameRegExp:/\.css$/g,
      cssProcessor:require('cssnano')
    }),
    // 构建清除插件，可以自动清除dist目录下的内容
    new CleanWebpackPlugin()
  ],
  devServer:{
    contentBase:'./dist',
    hot:true  //开启热更新
  },
  // loader配置
  module: {
    rules:[
      {
        test:/.js$/,
        use:'babel-loader'
      },
      {
        test:/.css$/,
        use:[
          'style-loader',
          'css-loader'
        ]
      },
      {
        test:/.less$/,
        use:[
          'style-loader',
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/.(png|jpg|gif|jpeg)$/,
        use:[
          {
            loader:'url-loader',
            options:{
              limit:512000
            }
          }
        ]
      }
    ]
  }
}
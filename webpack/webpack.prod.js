'use strict'

const path = require('path')
const webpack  = require('webpack')
const optimizeCssAssetsWebpackPlugin = require('optimize-css-assets-webpack-plugin')
// const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
  entry:{
    index:'./src/index.js',
    file:'./src/file.js',
    search:'./src/search.js'
  },
  output:{
    path: path.join(__dirname,'dist'),
    filename:'[name]_[chunkhash].js' //设置模块的文件指纹
  },
  mode:'production',
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
  // 热更新插件,是webpack内嵌的一个插件，可以直接通过webpack.的方式来引用，无需额外引入
  plugins:[
    new optimizeCssAssetsWebpackPlugin({
      assetNameRegExp:/\.css$/g,
      cssProcessor:require('cssnano')
    }),
    // 把css文件单独打包成一个文件，同时支持给css文件添加文件指纹
    // new MiniCssExtractPlugin({
    //     filename: '[name]_[contenthash:8].css'
    // }),

    new HtmlWebpackPlugin({
      template:path.join(__dirname,'src/index.html'), //模板
      filename:'index.html', //最终打包生成的html的文件名
      chunks:['index'],  //生成的html要使用哪些chunk
      inject:true, //打包出来的chunk会自动注入到html中
      minify:{
        html5:true,
        collapseWhitespace:false,
        preserveLineBreaks:false,
        minifyCSS:true,
        minifyJS:true,
        removeComments:false
      }
    }),
    // 构建清除插件，可以自动清除dist目录下的内容
    new CleanWebpackPlugin(),
    //一个页面对应一个htmlwebpackplugin
    new HtmlWebpackPlugin({
      template:path.join(__dirname,'src/search.html'), //模板
      filename:'search.html', //最终打包生成的html的文件名
      chunks:['search'],  //生成的html要使用哪些chunk
      inject:true, //打包出来的chunk会自动注入到html中
      minify:{
        html5:true,
        collapseWhitespace:true,
        preserveLineBreaks:false,
        minifyCSS:true,
        minifyJS:true,
        removeComments:false
      }
    })
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
          // MiniCssExtractPlugin.loader,
          'css-loader'
        ]
      },
      {
        test:/.less$/,
        // style-loader的作用是将css样式添加到<head>标签中，所以无法和miniCssExtractPlugin.loader共存
        use:[
          'style-loader',
          // MiniCssExtractPlugin.loader,
          'css-loader',
          'less-loader'
        ]
      },
      {
        test:/.(png|jpg|gif|jpeg)$/,
        use:[
          {
            loader:'file-loader',
            options:{
              name:'[name]_[hash:8][ext]'  //设定图片的文件指纹，name为文件名，hash:8即随即生成的MD5的前8位，ext是文件后缀
            }
          }
        ]
      }
      // {
      //   test:/.(png|jpg|gif|jpeg)$/,
      //   use:[
      //     {
      //       loader:'url-loader',
      //       options:{
      //         limit:512000
      //       }
      //     }
      //   ]
      // }
    ]
  }
}
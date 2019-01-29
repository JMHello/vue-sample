const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

const {
  VueLoaderPlugin
} = require('vue-loader');

const config = require('./config');
const p = config.path;
const isDev = process.env.NODE_ENV === 'development';


const cssLoader = {
  loader: 'css-loader',
  options: {
    importLoaders: 1
  }
};

const styleLoader = {
  loader: 'style-loader'
};

const postCssLoader = {
  loader: 'postcss-loader',
  options: {
    plugins: [
      require('./css.rpx')
    ]
  }
};

const extractLoader = {
  loader: MiniCssExtractPlugin.loader
}

const sassResourcesLoader = {
  loader: 'sass-resources-loader',
  options: {
    resources: path.resolve(p.entry, 'assets/css/vars.scss')
  }
}

module.exports = {
  entry: {
    index: path.resolve(p.entry, 'index.js'),
  },

  resolve: {
    extensions: [
      '.ts',
      '.js',
      '.vue',
      '.css',
      '.json'
    ],
    alias: {
      vue$: 'vue/dist/vue.esm.js'
    }
  },
  module: {
    rules: [{
        test: /\.vue$/,
        loader: 'vue-loader',
        exclude: /node_modules/,
        include: p.entry
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        include: p.entry
      },
      {
        test: /\.tsx?$/,
        loader: 'ts-loader',
        exclude: /node_modules/,
        options: {
          // vue 单文件组件中假如使用了lang="ts"，ts-loader需要配置appendTsSuffixTo: [/\.vue$/]，用来给.vue文件添加个.ts后缀用于编译。
          appendTsSuffixTo: [/\.vue$/],
        }
      },
      {
        test: /\.css$/,
        use: [
          isDev ? styleLoader : extractLoader,
          cssLoader,
          postCssLoader
        ]
      },
      {
        test: /\.sass$/,
        use: [
          isDev ? 'vue-style-loader' : extractLoader,
          cssLoader,
          postCssLoader,
          {
            loader: 'sass-loader',
            options: {
              // sass-loader 会默认处理不基于缩进的 scss 语法。为了使用基于缩进的 sass 语法，需要向这个 loader 传递选项 indentedSyntax
              indentedSyntax: true
            }
          },
          sassResourcesLoader
        ]
      },
      {
        test: /\.scss$/,
        use: [
          isDev ? 'vue-style-loader' : extractLoader,
          cssLoader,
          postCssLoader,
          'sass-loader',
          sassResourcesLoader
        ]
      },
      {
        test: /\.less$/,
        use: [
          isDev ? 'vue-style-loader' : MiniCssExtractPlugin.loader,
          cssLoader,
          'less-loader',
          postCssLoader
        ]
      },
      {
        test: /\.(woff(2)?|ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
        options: {
          name: '[name].[ext]?[hash]'
        }
      },
      {
        test: /\.(png|jpeg|jpg|svg)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 1024,
            name: '[name].[ext]'
          }
        }]
      },
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(p.entry, './index.html'),
      filename: 'index.html',
      inject: true
    }),

    new VueLoaderPlugin()
    // 在dev环境下，去掉 webpack.NamedModulesPlugin 及 webpack.NoEmitOnErrorsPlugin 插件，因为 webpack4 开发模式已经内置
    // new webpack.NamedModulesPlugin()
    // new webpack.NoEmitOnErrorsPlugin()
  ]
}
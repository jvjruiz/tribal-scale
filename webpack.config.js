var path = require('path');

var webpack = require('webpack');

module.exports = {
    entry: path.resolve(__dirname, 'js/index.js'),
    output: {
        path: path.resolve(__dirname, 'build/js'),
        filename: 'index.js',
        publicPath: 'http://localhost:7700/dist',
    },
    devServer: {
      hot:true,
      inline:true,
      port:7700,
      historyApiFallback:true,
    },
    devtool: 'inline-source-map',
    module: {
      loaders: [
        {
          test: /\.js$/,
          exclude: /(node_modules)/,
          loader: 'babel',
        },
      ]
    },
    externals: {
    'cheerio': 'window',
    'react/lib/ExecutionEnvironment': true,
    'react/lib/ReactContext': true,
  },
};

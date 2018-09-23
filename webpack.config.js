const path = require('path');
const webpack = require('webpack');

const config = {
  resolve: {
    modules: [
      path.resolve('./lib'),
      path.resolve('./node_modules'),
    ]
  },
  entry : {
    vendor: [
      'babel-polyfill',
      'jquery',
      'react',
      'react-dom',
      'react-bootstrap',
      'react-redux',
      'redux',
      'redux-immutable-state-invariant',
      'redux-thunk',
      'prop-types',
      'request',
      'toastr'
    ],
    app: ['./lib/renderers/dom.js'],
  },
  output: {
    path: path.resolve(__dirname, 'public'),
    filename: '[name].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['react', 'env', 'stage-2']
          }
        }
      },
      {test: /\.css$/, use: ['style-loader','css-loader']},
    ]
  },
  node: {
    console: true,
    fs: 'empty',
    net: 'empty',
    tls: 'empty'
  },
  plugins: [
    new webpack.optimize.CommonsChunkPlugin({
      name: 'vendor',
    })
  ]
};

module.exports = config;

'use strict'
const webpack = require('webpack')
const base = require('./webpack.base')

base.devtool = 'eval-source-map'
base.plugins.push(
    new webpack.DefinePlugin({
        'process.env.NODE_ENV': JSON.stringify('development')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
)

// push loader for .css file
base.module.loaders.push(
    {
        test: /\.css$/,
        loader: 'style-loader!css-loader?-autoprefixer!postcss-loader'
    }
)

module.exports = base

const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // https://github.com/webpack-contrib/copy-webpack-plugin
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: "source-map",
    plugins: [
        /* new UglifyJSPlugin({
            sourceMap: true
        }) */
    ]
});
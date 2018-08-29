const merge = require('webpack-merge');
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "development",
    devtool: 'inline-source-map', // https://webpack.js.org/configuration/devtool/
    devServer: {
        contentBase: './build'
    }
 });
const merge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin'); // https://github.com/webpack-contrib/copy-webpack-plugin
const common = require('./webpack.common.js');

module.exports = merge(common, {
    mode: "production",
    devtool: "source-map",
    plugins: [
        new UglifyJSPlugin({
            sourceMap: true
        }),
        new CopyWebpackPlugin([
            { from: './build/*.js', to: '../copytarget/js/', flatten: true },
            { from: './build/*.js.map', to: '../copytarget/js/', flatten: true },
            { from: './build/*.css', to: '../copytarget/css/', flatten: true },
            { from: './build/*.css.map', to: '../copytarget/css/', flatten: true }
        ]/* options omitted */)
    ]
});
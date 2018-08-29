const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const extractSass = new ExtractTextPlugin({
    filename: "[name].css"
    // Issue with outputting unwanted jsfiles based on entry.
    // The following plugin can delete unwanted files, but it seems too early to include at this point 2018-03-01.
    // https://github.com/webpack-contrib/extract-text-webpack-plugin/issues/518
});

module.exports = {
    entry: {
        app: './src/js/index.js',
        polyfill: 'babel-polyfill',
        styling: './src/scss/style.scss'
    },
    output: {
        //filename: '[name].js',
        path: path.resolve(__dirname, '../build')
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['env'] // webpack docs is wrong here, it suggests using @babel/preset-env which is wrong
                    }
                }
            },
            {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, "../src/scss")
                ],
                use: [
                    'css-loader',
                    "sass-loader"
                ]
            },
            {
                test: /\.scss$/,
                exclude: [
                    path.resolve(__dirname, "../src/js")
                ],
                use: extractSass.extract({
                    use: [{
                        loader: "css-loader"
                    },{
                        loader: "sass-loader"
                    }]
                })
            }
        ]
    },
    plugins: [
        extractSass    
    ]
};


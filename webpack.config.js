const path = require('path');
const webpack = require('webpack');

module.exports = {
    entry: "./app/sources/modules/app.js",
    output: {
        path: __dirname,
        filename: "./app/bundle.js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: "babel-loader",
                query: {
                  presets: 'es2015',
                },
            }
        ]
    }
};
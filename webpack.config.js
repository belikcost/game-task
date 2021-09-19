const path = require('path');
const webpack = require('webpack')
require('react');

module.exports = {
    entry: ['babel-polyfill', './src/index.js'],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                use: [
                    {
                        loader: 'babel-loader',
                    }
                ],
            },
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader'],
            },
            {
                test: /\.scss$/,
                use: ['style-loader','css-loader', 'sass-loader'],
            },
            {
                test: /\.(jpe?g|png|svg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            encoding: 'base64',
                        },
                    }
                ],
            },
        ]
    },
    output: {
        filename: 'build.js',
        path: path.resolve(__dirname, 'public'),
    },
    plugins: [
        new webpack.ProvidePlugin({
            "React": "react",
        })
    ]
};
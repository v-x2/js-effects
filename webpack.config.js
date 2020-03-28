const path = require('path');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const CompressionPlugin = require('compression-webpack-plugin');


module.exports = {
    mode: 'production',
    entry: {
        "v2-js-effects": './src/V2.js'
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].min.js'
    },
    optimization: {
        minimize: true,
        minimizer: [
            new UglifyJsPlugin({
                test: /\.js(\?.*)?$/i,
                exclude: /(node_modules|bower_components)/,
            }),
        ],
        splitChunks: {
            cacheGroups: {
                vendors: {
                    test: /[\\/]node_modules[\\/]/,
                    name: "vendor",
                    chunks: "all"
                },
                main: {
                    name: "v2-js-effects"
                }
            }
        }
    },
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env'],
                        plugins: ['@babel/plugin-proposal-class-properties']
                    }
                }
            }
        ]
    },

    plugins: [
        new CompressionPlugin({
            exclude: /[\\/]node_modules[\\/]/,
        })
    ]
};
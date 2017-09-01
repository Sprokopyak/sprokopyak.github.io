const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const StyleLintPlugin = require('stylelint-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin')

module.exports = {
    entry: './src/app.js',
    output: {
        filename: './build/app.js'
    },
    module: {
        rules: [{
                test: /\.ts$/,
                enforce: 'pre',
                loader: 'tslint-loader',
                options: {
                    configuration: {
                        rules: {
                            quotemark: [true, 'double']
                        }
                    },
                    configFile: false,
                    emitErrors: false,
                    failOnHint: false
                }
            }, {
                test: /\.ts$/,
                loader: 'ts-loader'
            },

            {
                test: /\.s[a|c]ss$/,
                use: ExtractTextPlugin.extract({
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins: [
        new CleanWebpackPlugin(['build/*.*']),
        new HtmlWebpackPlugin({
            filename: 'src/index.html'
        }),
        new StyleLintPlugin({
            configFile: 'styleLint.json',
            failOnError: false
        }),
        new ExtractTextPlugin({
            filename: './build/style.css'
        }),
        new CopyWebpackPlugin([{
            from: './src/index.html',
            to: './build/index.html'
        }]),
    ]
};
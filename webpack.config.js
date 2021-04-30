// Generated using webpack-cli http://github.com/webpack-cli
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");

const mode = process.env.NODE_ENV;
const isProd = mode === 'production';

module.exports = () => ({
    mode,
    entry: './src/index.jsx',
    devtool: 'source-map',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: isProd ? '/spa-fcp-speedup/' : '/',
    },
    devServer: {
        hot: true,
        open: true,
        host: 'localhost',
        historyApiFallback: true,
        compress: true,
    },
    resolve: {
        extensions: ['.js', '.json', '.jsx'],
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: './dist/index.html',
        }),
        new CopyPlugin({
            patterns: [
                { from: ".github/gh-pages/*", to: "[name][ext]" },
            ],
        }),
    ],
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(eot|svg|ttf|woff|woff2|png|jpg|gif)$/,
                type: 'asset',
            },

            // Add your rules for custom modules here
            // Learn more about loaders from https://webpack.js.org/loaders/
        ],
    },
});

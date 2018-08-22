const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src/js'),
    SRC: path.resolve(__dirname, 'src'), 
};

module.exports = {
    entry: path.join(paths.JS, 'index.js'),
    output: {
        path: paths.DIST,
        filename: 'app.bundle.js'
    },
    // Use webpack's built-in development optimizations
    mode: 'development', 
    plugins: [
        // index.html is used as a template in which it'll inject bundled app.
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
        // css will be extracted to this bundle file
        new ExtractTextPlugin('styles.bundle.css')
    ],
    module: {
        rules: [
            { test: /\.(js|jsx)$/, exclude: /node_modules/, use: [ 'babel-loader', ]},
            { test: /\.css$/, loader: ExtractTextPlugin.extract({ use: 'css-loader', })}
        ],
    },
    // Enable importing JS files without specifying their's extenstion
    resolve: {
        extensions: ['.js', '.jsx'],
    }
};
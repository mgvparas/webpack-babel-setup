const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const paths = {
    DIST: path.resolve(__dirname, 'dist'),
    JS: path.resolve(__dirname, 'src/js'),
    SRC: path.resolve(__dirname, 'src'), 
};

// Webpack configuration
module.exports = {
    entry: path.join(paths.JS, 'index.js'),
    output: {
        path: paths.DIST,
        filename: 'bundle.js'
    },
    mode: 'development',
    plugins: [
        new HtmlWebpackPlugin({
            template: path.join(paths.SRC, 'index.html'),
        }),
    ]
};
const path = require('path');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    mode: 'production',
    entry: './src/script.js',
    devtool: 'inline-source-map',
    devServer: {
        contentBase: '../dist/baby'
    },
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, '../dist/baby')
    },
    plugins: [
    new CopyWebpackPlugin([{
                from: 'index.html',
                to: ''
            },
            {
                from: '../_common/css/*.min.css',
                to: './css',
                flatten: true
            },
            {
                from: 'css/**/*.min.css',
                to: ''
            },
            {
                from: 'images/**/*',
                to: ''
            },

            {
                from: 'my-icons-collection/font/**/*',
                to: ''
            }], {
            copyUnmodified: true
        })]
};

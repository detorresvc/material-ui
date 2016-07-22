var path = require('path');
var webpack = require('webpack');

var NoErrorsPlugin = webpack.NoErrorsPlugin;
var optimize = webpack.optimize;




module.exports = {
    context: __dirname + "/src/app",
    entry: './index.js',
    output: {
        path: path.resolve(__dirname, 'dist/js/'),
        filename: 'bundle.js'
    },

    module: {
        loaders: [
            {
                test: /src\/.+.js$/,
                exclude: /node_modules/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015','stage-0','react']
                }
            }
        ]
    }
};

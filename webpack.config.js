var webpack = require('webpack'),
    path    = require("path");

module.exports = {
    entry: {
        'app': "./app/app.ts"
    },
    output: {
        path: path.join(__dirname, "dist"),
        filename: "index.d.js"
    },
    resolve: {
        extensions: ['.scss', '.ts', '.tsx', '.js']
    },
    module: {
        rules: [
            { 
                test: /\.tag$/, 
                loader: 'riot-tag-loader', 
                exclude: /node_modules/,
                enforce: "pre",
                query: {
                    format: 'ems'
                }
            },
            {
                test: /\.ts$/,
                enforce: "pre",
                loader: 'tslint-loader'
            },
            { test: /\.ts$/, use: ['ts-loader'], exclude: /(node_modules|dist)/ },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                exclude: /dist/
            },
            { 
                test: /\.scss$/, 
                exclude: /dist/,
                use: [
                    { 
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    },
                    { 
                        loader: 'postcss-loader'
                    }, 
                    { loader: 'sass-loader' }
                ]
            }            
        ]
    }
}
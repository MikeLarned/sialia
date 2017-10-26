var webpack                 = require('webpack'),
    path                    = require('path')
    nodeExternals           = require('webpack-node-externals'),
    FixDefaultImportPlugin  = require('webpack-fix-default-import-plugin'),
    ExtractTextPlugin       = require('extract-text-webpack-plugin');

let excludes = nodeExternals({
    whitelist: ["bluebutton"]
});

const extractCss = new ExtractTextPlugin({
    filename: '[name].[contenthash].css'
});

/*excludes.lodash = {
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: '_',
    root: '_'
};*/

module.exports = {
    entry: {
        'sialia': "./app/app.ts"
    },
    target: "node",
    devtool: 'source-map',
    externals: [excludes],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "[name].js",
        library: "ccdaview",
        libraryTarget: "commonjs"
    },
    resolve: {
        extensions: ['.scss', '.ts', '.tsx', '.js']
    },
    plugins: [
        new FixDefaultImportPlugin(),
        extractCss
    ],
    module: {
        rules: [
            { 
                test: /\.tag$/, 
                loader: 'riot-tag-loader',
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
            { test: /\.ts$/, use: ['ts-loader'], exclude: /dist/ },
            {
                test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
                loader: 'url-loader',
                exclude: /dist/
            },
            { 
                test: /\.scss$/, 
                exclude: /dist/,
                use: extractCss.extract({
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
                    ],
                    fallback: 'style-loader'
                }),
            }            
        ]
    }
}
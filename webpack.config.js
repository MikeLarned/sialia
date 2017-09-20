var webpack             = require('webpack'),
    path                = require('path')
    nodeExternals       = require('webpack-node-externals');

let excludes = nodeExternals();

excludes.lodash = {
    commonjs: 'lodash',
    commonjs2: 'lodash',
    amd: '_',
    root: '_'
};

function DtsBundlerPlugin(){}
DtsBundlerPlugin.prototype.apply = function(compiler) {
    compiler.plugin('done', function() {
        var dts = require('dts-bundle');

        dts.bundle({
            name: 'index',
            main: 'dist/**/*.d.ts',
            out: 'index.d.ts',
            removeSource: true,
            outputAsModuleFolder: true
        })
    });
};

module.exports = {
    entry: {
        'app': "./app/app.ts"
    },
    target: "node",
    externals: [excludes],
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: "index.js",
        //library: "ccdaview",
        libraryTarget: "umd"
    },
    resolve: {
        extensions: ['.scss', '.ts', '.tsx', '.js']
    },
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
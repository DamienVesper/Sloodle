import merge from 'webpack-merge';
import common from './webpack.common';

import { DefinePlugin } from 'webpack';
import CSSMinimizerPlugin from 'css-minimizer-webpack-plugin';

import * as path from 'path';

const config = merge(common, {
    mode: `development`,
    devtool: `source-map`,

    devServer: {
        devMiddleware: { publicPath: `http://localhost:3000` },
        static: { directory: path.resolve(__dirname, `../public`) },
        historyApiFallback: true,
        port: 3000,
        hot: true
    },

    output: {
        path: path.resolve(__dirname, `../build`),
        filename: `assets/js/[name].[chunkhash].js`,
        clean: true
    },

    optimization: {
        runtimeChunk: {
            name: `manifest`
        },
        splitChunks: {
            cacheGroups: {
                vendor: {
                    test: /[\\/]node_modules[\\/]/,
                    name: `vendor`,
                    chunks: `all`
                }
            }
        },
        minimizer: [
            `...`,
            new CSSMinimizerPlugin({
                minimizerOptions: {
                    preset: [`default`, { discardComments: { removeAll: true } }]
                }
            })
        ]
    },

    plugins: [
        new DefinePlugin({ API_URL: `\`http://localhost:8080\`` })
    ]
});

export default config;

const path = require("path");
const webpack = require('webpack');
const HtmlWebpackPlugin = require("html-webpack-plugin");
const TerserPlugin = require('terser-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin')

module.exports = () => {

    const output =  process.env.OUTPUT
    const website = output === 'dist_test' ?
                    '' : `${process.env.WEBSITE}/`
    const publicPath = output === 'dist_test' ?
                       'http://lprsc.acytest.com/2020-03-AlistairLandingPage' : 'https://lprsc.acycms.com/2020-03-AlistairLandingPage'

        
    return {
        mode: "production",
        devtool: 'none',
        entry: {
            main: "./src/index.js"
        },
        output: {
            filename: "[name].[contentHash].bundle.js",
            path: path.resolve(__dirname, `${output}`, `${website}`,`${process.env.REACT_APP_LANG}`),
            publicPath: `${publicPath}/${output}/${website}${process.env.REACT_APP_LANG}/`
        },
        optimization: {
            minimizer: [
                new OptimizeCssAssetsPlugin(),
                new TerserPlugin()
            ]
        },
        plugins: [
            new HtmlWebpackPlugin({
                template: "./public/index.html"
            }),
            new webpack.DefinePlugin({
                "process.env.REACT_APP_LANG": JSON.stringify(process.env.REACT_APP_LANG),
                "process.env.OUTPUT": JSON.stringify(process.env.OUTPUT),
                "process.env.WEBSITE": JSON.stringify(process.env.WEBSITE)
            }),        
            new CleanWebpackPlugin(),
            new MiniCssExtractPlugin({
                filename: "[name].[contenthash].css"
                //MiniCssExtractPlugin.loader in loader part
            })
        ],
        module: {
            rules:[
                {
                    test: /\.html$/,
                    use: {
                        loader: "html-loader",
                        options: {
                            attributes: true
                        }
                    }  
                },
                {
                    test: /\.(svg|png|jpg|gif|mp4)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[hash].[ext]", 
                            outputPath: "assets/"
                        }
                    }
                },
                {
                    test: /\.css$/, 
                    use: [
                      MiniCssExtractPlugin.loader,
                    //   "style-loader", 
                      "css-loader"
                    ]
                },
                {
                    test: /\.js$/,
                    exclude: /node_modules/,
                    use: ["babel-loader"]
                },
                {
                    test: /\.ico$/,
                    use: ["url-loader"]
                }
            ]
        }
    }
}
const path = require("path")
const webpack = require('webpack')
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
    mode: "development",
    devtool: 'eval-source-map',
    entry: {
        main: "./src/index.js"
    },
    output: {
        filename: "[name].bundle.js",
        path: path.resolve(__dirname, "dist", `${process.env.REACT_APP_LANG}`)
    },
    plugins: [
        new HtmlWebpackPlugin({
            template: "./public/index.html"
        }),
        new webpack.DefinePlugin({
            "process.env.REACT_APP_LANG": JSON.stringify(process.env.REACT_APP_LANG),
            "process.env.OUTPUT": JSON.stringify(process.env.OUTPUT)
        }),
        // new webpack.EnvironmentPlugin(['REACT_APP_LANG'])
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
                test: /\.(mp4|svg|png|jpg|gif)$/,
                use: {
                    loader: "file-loader",
                    options: {
                        name: "[name].[hash].[ext]", 
                        outputPath: "assets"
                    }
                }
            },
            {
                test: /\.css$/, 
                use: [
                  "style-loader", 
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
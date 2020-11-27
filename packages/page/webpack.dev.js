const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var path = require('path');
const webpack = require('webpack');

module.exports = {
	entry: {
        main: './index.js'
    },
	output: {
		path: path.resolve(__dirname, 'dist1'),
		filename: '[name].js',
		publicPath: '/'
	},
	mode: 'development',
	devtool: 'inline-source-map',

	plugins: [ 
        new HtmlWebpackPlugin({ template: './Templates/index.html' }),
        new webpack.DefinePlugin({
            'process.env.REACT_APP_LANG': JSON.stringify(process.env.REACT_APP_LANG),
            'process.env.OUTPUT': JSON.stringify(process.env.OUTPUT),
			'process.env.REACT_APP_WEBSITE': JSON.stringify(process.env.REACT_APP_WEBSITE),
        })
    ],
	devServer: {
		// contentBase: path.join(__dirname, 'dist1'),
		// compress: true,
		// port: 3000,
		// allowedHosts:['localhost','192.168.33.11'],
		// useLocalIp: true,
		historyApiFallback: true
	},
	module: {
		rules: [
			// {
            //     test: /\.html$/,
            //     use: {
            //         loader: "html-loader",
            //         options: {
            //             attributes: true
            //         }
            //     }    
            // },
            {
				test: /\.(png|jpg|gif|pdf|ico)$/i,
				use: [
					{
						loader: 'url-loader'
					}
				]
			},
			{
				test: /\.scss$/,
				use: [
					'style-loader',
					'css-loader',
					'sass-loader',
				],
			}, {
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader',
				]
			},

			{
				test: /\.(js|jsx)$/,
				loader: 'babel-loader',
				exclude: /node_modules/,
				options: {
					cacheDirectory: true,
					presets: [
						[
							'@babel/preset-env',
							{
								targets: '> 0.99%, not dead'
							}
						],
						'@babel/preset-react'
					]
				}
			}
		]
	},

};

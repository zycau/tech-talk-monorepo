const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var path = require('path');



module.exports = {

	entry: './index.js',
	output: {
		path: path.resolve(__dirname, 'dist1'),
		filename: 'dist.js'
	},
	mode: 'development',
	devtool: 'inline-source-map',

	plugins: [ new HtmlWebpackPlugin({ template: './index.html' }) ],
	devServer: {
		contentBase: path.join(__dirname, 'dist'),
		compress: true,
		port: 8000,
		allowedHosts:['localhost','192.168.33.11'],
		useLocalIp: true

	},
	module: {
		rules: [
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

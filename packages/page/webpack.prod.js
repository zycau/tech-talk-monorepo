const HtmlWebpackPlugin = require('html-webpack-plugin'); //installed via npm
var path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports =() => {
    const lang = process.env.REACT_APP_LANG
	const output = process.env.OUTPUT
	const website = process.env.REACT_APP_WEBSITE

	const [dirName] = __dirname.split(path.sep).slice(-1)
	const publicPath = output === 'test' ? `http://lprsc.acytest.com/${dirName}` : `https://lprsc.acycms.com/${dirName}`
	const dist = output === 'test' ? 'dist_test' : 'dist'
	const templateFolder = output === 'test' ? 'testing' : 'live'

	return {
		entry: {
			main: './index.js'
		},
		output: {
			path: path.resolve(__dirname, `${dist}`, `${website}`, `${lang}`),
			filename: '[name].[contentHash].bundle.js',
			publicPath: `${publicPath}/${dist}/${website}/${lang}/`
		},
		mode: 'production',
		// devtool: 'inline-source-map',
	
		plugins: [ 
			new HtmlWebpackPlugin({ template: `./Templates/${templateFolder}/${website}/${lang}/index.html` }),
			new webpack.DefinePlugin({
				'process.env.REACT_APP_LANG': JSON.stringify(process.env.REACT_APP_LANG),
                'process.env.OUTPUT': JSON.stringify(process.env.OUTPUT),
                'process.env.REACT_APP_WEBSITE': JSON.stringify(process.env.REACT_APP_WEBSITE),
            }),
			new CleanWebpackPlugin(),
			// new BundleAnalyzerPlugin()
		],
		devServer: {
			contentBase: path.join(__dirname, `${output}`),
			compress: true,
			port: 3002,
			allowedHosts:['localhsot','192.168.33.11'],
			useLocalIp: true
	
		},
		module: {
			rules: [
				// {
				// 	test: /\.(png|jpg|gif|pdf|ico)$/i,
				// 	use: [
				// 		{
				// 			loader: 'url-loader'
				// 		}
				// 	]
				// },
				{
                    test: /\.(svg|png|jpg|gif|ico)$/,
                    use: {
                        loader: "file-loader",
                        options: {
                            name: "[name].[ext]", 
							outputPath: "../../assets/"
                        }
                    }
                },
				{
					test: /\.scss$/,
					use: [
						'style-loader',
						'css-loader',
						'sass-loader',
					]
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
	}

};

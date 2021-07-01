const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = {
	entry: './src/client/index.js',
	mode: 'development',
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: 'bundle.js',
	},
	devtool: 'source-map',
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules)/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: ['@babel/preset-env'],
					},
				},
			},
			{
				test: /\.scss$/,
				loader: ['style-loader', 'css-loader', 'sass-loader'],
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({ template: './src/client/views/index.html' }),
		new CleanWebpackPlugin({
			dry: true,
			verbose: true,
			cleanStaleWebpackAssets: false,
			protectWebpackAssets: false,
		}),
	],
};

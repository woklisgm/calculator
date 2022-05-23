const path = require('path');
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HTMLWebpackPlugin = require('html-webpack-plugin');

const NODE_ENV = process.env.NODE_ENV;
const IS_DEV = NODE_ENV === 'development';
const IS_PROD = NODE_ENV === 'production';
const GLOBAL_CSS_REGEXP = /\.global\.css$/;

const DEV_PLUGINS = [];
// const COMMON_PLUGINS = [ new DefinePlugin({ 'process.env.CLIENT_ID': `'${process.env.CLIENT_ID}'` }) ];

function setupDevtool() {
	if (IS_DEV) return 'eval';
	if (IS_PROD) return false;
}

module.exports = {
	mode: NODE_ENV ? NODE_ENV : 'development',
	entry: path.resolve(__dirname, 'src/index.tsx'),
	output: {
		path: path.resolve(__dirname, 'public'),
		filename: 'bundle.js'
	},
	resolve: {
		extensions: ['.js', '.jsx', '.ts', '.tsx', '.json']
	},
	module: {
		rules: [
			{
				test: /\.[tj]sx?$/,
				use: ['ts-loader'],
				exclude: "/node_modules/"
			},
			{
				test: /\.(eot|svg|ttf|woff|woff2)$/,
				type: 'asset/resource',
				generator: {
					filename: 'fonts/[name][ext]'
				}
     		},
			{
				test: /\.css?/,
				use: [
					'style-loader', 
					{
						loader: 'css-loader',
						options: {
							modules: {
								mode: 'local',
								localIdentName: '[name]__[local]--[hash:base64:5]',
							}
						}
					},
				],
				exclude: GLOBAL_CSS_REGEXP
			},
			{
        test: GLOBAL_CSS_REGEXP,
        use: ['style-loader', 'css-loader']
      }
		]
	},
	plugins: [
		new HTMLWebpackPlugin({ template: path.resolve(__dirname, 'public/index.html')}),
		// new CopyWebpackPlugin({
		// 	patterns: [
		// 		{ 
		// 			from: path.resolve(__dirname, 'src/assets/fonts/Geometria/'), 
		// 			to:  path.resolve(__dirname, 'public/assets/fonts'),
		// 		}
		// 	]
		// })
	],
	devServer: {
		port: 3000,
		open: true,
		hot: IS_DEV,
	},
	devtool: setupDevtool()
};
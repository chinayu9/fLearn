const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
module.exports = {
	devtool:'eval-source-map',
	entry : __dirname + "/app/main.js",
	output:{
		path:__dirname + "/build",
		filename:"bundle.js"
	},
	devServer:{
		contentBase:'./build',
		historyApiFallback:true,
		inline:true,
		port:8100,
		hot:true
	},
	module:{
		rules:[
			{
				test:/(\.jsx|\.js)$/,
				use:{
					loader:"babel-loader",
				},
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				use:ExtractTextPlugin.extract({
					fallback:"style-loader",
					use:[{
						loader:"css-loader",
						options:{
							modules:true
						}
					},{
						loader:"postcss-loader"
					}]
				})
			}
		]
	},
	plugins:[
		new webpack.BannerPlugin('版权所有，翻版必究'),
		new HtmlWebpackPlugin({
			template:__dirname + "/app/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin(),
		new webpack.optimize.OccurrenceOrderPlugin(),
		new webpack.optimize.UglifyJsPlugin(),
		new ExtractTextPlugin("style.css")
	]
}
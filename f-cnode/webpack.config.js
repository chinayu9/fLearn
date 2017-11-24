const webpack = require("webpack");
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
	entry:__dirname + "/src/app.js",
	output:{
		path:__dirname + '/build',
		filename:"bundle.js",
		publicPath:"/"
	},
	devtool:"eval-source-map",//source-map  方便调试
	devServer:{
		contentBase:"./build",//本地服务器所加载页面所在目录
		inline:true,//实时刷新
		historyApiFallback:true,
		port:3000,
		hot:true
	},
	module:{
		rules:[
			{
				test:/\.jsx?$/,
				use:[
					{
						loader:"babel-loader"
					}
				],
				exclude:/node_modules/
			},
			{
				test:/\.css$/,
				use:[
					{
						loader:"style-loader"
					},
					{
						loader:"css-loader"
					}
				]
			}
		]
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:__dirname + "/src/index.tmpl.html"
		}),
		new webpack.HotModuleReplacementPlugin()
	]
};
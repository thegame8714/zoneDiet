const path = require("path")
const HtmlWebpackPlugin = require("html-webpack-plugin")
const CleanWebpackPlugin = require("clean-webpack-plugin")

const outDir = "dist"

module.exports = {
	entry: "./src/client/index.tsx",
	output: {
		path: path.join(__dirname, outDir),
		filename: "bundle.js"
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /node_modules/,
				use: {
					loader: "babel-loader"
				}
			},
			{
				test: /\.tsx$/,
				exclude: /node_modules/,
				use: {
					loader: "ts-loader"
				}
			}
		]
	},
	plugins: [
		new CleanWebpackPlugin([outDir]),
		new HtmlWebpackPlugin({
			template: "./src/client/index.html"
		})
	]
}

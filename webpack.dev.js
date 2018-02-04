const webpack = require("webpack");
const merge = require("webpack-merge");
const path = require("path");
const common = require("./webpack.common.js");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;

const srcDir = path.resolve(__dirname, "app");

module.exports = merge(common, {
	devServer: {
		historyApiFallback: true,
		contentBase: srcDir,
		publicPath: "/"
	},
	devtool: "cheap-module-source-map",
	plugins: [
		new webpack.NamedModulesPlugin(),
		new BundleAnalyzerPlugin()
	]
});

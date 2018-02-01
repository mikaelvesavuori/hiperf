const webpack = require("webpack");
const path = require("path");
const ExtractTextPlugin = require("extract-text-webpack-plugin");
const CopyWebpackPlugin = require("copy-webpack-plugin");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const ScriptExtHtmlWebpackPlugin = require("script-ext-html-webpack-plugin");
const AutoDllPlugin = require("autodll-webpack-plugin");

const srcDir = path.resolve(__dirname, "src");
const distDir = path.resolve(__dirname, "dist");

module.exports = {
	watch: false,
	context: srcDir,
	entry: [
		// Examples of what might make sense to split into bundles
		//framework: ["react", "react-router-dom", "react-loadable", "preact-compat"],
		//common: ["styled-components", "marked"],

		// Your main entry point, usually a .js or .jsx file
		//app: ["./index-example.html"],
		//styles: "./assets/styles/main.scss"
		"./main.js"
	],
	output: {
		path: distDir,
		filename: "[name].[chunkhash].js",
		publicPath: "/"
	},
	resolve: {
		modules: [path.resolve(__dirname, "node_modules"), path.resolve(__dirname, "src")],
		extensions: [".js", ".jsx", ".html", ".scss", ".sass", ".css"],
		/*
		In case you are using React, alias React with Preact to minimize footprint
		There way be similar ways to handle this scenario with other frameworks

		alias: {
			"react": "preact-compat",
			"react-dom": "preact-compat"
		}
		*/
	},
	module: {
		rules: [
			/*
			{
				enforce: "pre",
				test: /\.(js|jsx)$/,
				loader: "eslint-loader",
				options: {
					fix: true,
					emitWarning: true
				},
				exclude: /node_modules/
			},
			*/
			{
				test: /\.(js|jsx)$/,
				use: [
					{
						loader: "babel-loader",
						options: {
							plugins: [
								"lodash" // So we can trim down any Lodash weight later on (from dependencies that are highly likely to use it)
							],
						}
					}
				],
				exclude: /node_modules/
			},
			{
				test: /\.(woff|woff2)$/,
				loader: "url-loader",
				options: {
					limit: 1,
					name: "./assets/fonts/[name].[ext]"
				}
			},
			{
				test: /\.(jpeg|jpg|png|svg|gif)$/,
				loader: "url-loader", // Use file-loader if you want to deal with the images; url-loader is because we later copy all images and then optimize them through a separate imageoptim pass
				options: {
					limit: 0, // Make sure we don't inline any of the content, but rather copy files instead
				}
			},
			{
				test: /\.(sass|scss|css)$/,
				loader: ExtractTextPlugin.extract({
					fallback: "style-loader",
					use: [
						{
							loader: "css-loader",
							options: {
								importLoaders: 1
							}
						},
						"postcss-loader"
					]
				}),
				exclude: /node_modules/
			},
			{
				test: /\.html$/,
				loader: "raw-loader",
				exclude: /node_modules/
			}
		]
	},
	plugins: [
		new CopyWebpackPlugin([{
			from: path.resolve(__dirname, "src/assets/images/"),
			to: path.resolve(__dirname, "dist/assets/images/")
		}]),
		new ExtractTextPlugin({
			filename: "assets/styles/[name].css",
			allChunks: true
		}),
		new HtmlWebpackPlugin({
			template: path.join(srcDir, "index.html"),
			inject: true,
			path: distDir,
			filename: "index.html",
			//excludeChunks: ["base"],
			minify: {
				collapseWhitespace: true,
				collapseInlineTagWhitespace: true,
				removeComments: true,
				removeRedundantAttributes: true
			}
		}),
		/*
		new ScriptExtHtmlWebpackPlugin({
			defaultAttribute: "defer"
		}),
		*/
		/*
		new AutoDllPlugin({
			inject: true,
			debug: true,
			filename: "[name]_[hash].js",
			path: "./dll",
			//filename: "[name].js",
			entry: {
				vendor: [
					"path"
				]
			}
		})
		*/
	],
	performance: {
		maxEntrypointSize: 250000,
		maxAssetSize: 250000,
		hints: "warning"
	}
};

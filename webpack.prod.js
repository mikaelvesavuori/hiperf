const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer")
	.BundleAnalyzerPlugin;
const BrotliGzipPlugin = require("brotli-gzip-webpack-plugin");

module.exports = merge(common, {
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		// Setup for Service Worker
		new WorkboxPlugin({
			cacheName: "hiperf",
			globPatterns: ["**/*.{html,js,svg,jpg,jpeg,woff2}"],
			directoryIndex: "index.html",
			navigateFallback: "index.html",
			swDest: path.join("dist", "sw.js"),
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			skipWaiting: true,
			clientsClaim: true
		}),
		// Turn on Node production mode
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		// Removed in Webpack 4
		/*
		new webpack.optimize.CommonsChunkPlugin({
			names: ["common"],
			minChunks: Infinity
		}),
		*/
		// Create a single manifest for Webpack and its built file rather than duplicating it across all files
		/*
		new webpack.optimize.CommonsChunkPlugin({
			name: "manifest",
			minChunks: Infinity
		}),
		*/
		new OptimizeJsPlugin({
			sourceMap: false
		}),
		// Put any Lodash stuff in any dependencies on a strict diet
		new LodashModuleReplacementPlugin({
			caching: true,
			collections: true,
			paths: true,
			shorthands: true
		}),
		// Create precompressed assets for the server
		new BrotliGzipPlugin({
			asset: "[path].br[query]",
			algorithm: "brotli",
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		}),
		new BrotliGzipPlugin({
			asset: "[path].gz[query]",
			algorithm: "gzip",
			test: /\.(js|css|html|svg)$/,
			threshold: 10240,
			minRatio: 0.8
		})
		// Uncomment to analyze your production bundles.
		// Note: It will pause the process, so have it turned off when you create stuff. Turn it on when you need to inspect what gets put into the bundles.
		//new BundleAnalyzerPlugin()
	],
	performance: {
		hints: "error"
	}
});

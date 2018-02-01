const webpack = require("webpack");
const merge = require("webpack-merge");
const common = require("./webpack.common.js");
const path = require("path");
const WorkboxPlugin = require("workbox-webpack-plugin");
const OptimizeJsPlugin = require("optimize-js-plugin");
const LodashModuleReplacementPlugin = require("lodash-webpack-plugin");
const BundleAnalyzerPlugin = require("webpack-bundle-analyzer").BundleAnalyzerPlugin;
const BrotliGzipPlugin = require("brotli-gzip-webpack-plugin");

const PUBLIC_PATH = "";

module.exports = merge(common, {
	plugins: [
		new webpack.HashedModuleIdsPlugin(),
		// Setup for Service Worker
		new WorkboxPlugin({
			cacheName: "hiperf",
			globPatterns: ["**/*.{html,js,svg,png,woff2}"],
			directoryIndex: "index.html",
			navigateFallback: "index.html",
			swDest: path.join("dist", "sw.js"),
			dontCacheBustUrlsMatching: /\.\w{8}\./,
			skipWaiting: true,
			clientsClaim: true
		}),
		new webpack.DefinePlugin({
			"process.env": {
				NODE_ENV: JSON.stringify("production")
			}
		}),
		new webpack.optimize.ModuleConcatenationPlugin(),
		new webpack.optimize.CommonsChunkPlugin({
			names: ["common"],
			minChunks: Infinity
			/*
			name: "vendor",
			minChunks: function(module) {
				return module.context && module.context.includes("node_modules");
			}
			*/
		}),
		// Create a single manifest for Webpack and its built file rather than duplicating it across all files
		new webpack.optimize.CommonsChunkPlugin({
			name: "manifest",
			minChunks: Infinity
		}),
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
		new webpack.optimize.UglifyJsPlugin({
			mangle: {
				keep_fnames: true,
				screw_ie8: true
			},
			compress: {
				screw_ie8: true,
				warnings: false,
				conditionals: true,
				unused: true,
				comparisons: true,
				sequences: true,
				dead_code: true,
				evaluate: true,
				if_return: true,
				join_vars: true
			},
			output: {
				comments: false
			}
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
		//new BundleAnalyzerPlugin()
	],
	performance: {
		hints: "error"
	}
});

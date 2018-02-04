module.exports = {
	plugins: {
		"postcss-import": {},
		"precss": {},
		"postcss-cssnext": {
			browsers: [
				"Chrome >= 60",
				"Safari >= 10.1",
				"iOS >= 10.3",
				"Firefox >= 54",
				"Edge >= 15"
			],
			compress: true
		},
	},
};
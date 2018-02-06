module.exports = {
	parser: "babel-eslint",
	parserOptions: {
		ecmaFeatures: {
			modules: true
		}
	},
	env: {
		browser: true
	},
	extends: ["eslint:recommended", "eslint-config-prettier"],
	plugins: ["eslint-plugin-prettier"],
	rules: {
		eqeqeq: 1,
		"brace-style": [0, "stroustrup"],
		curly: 1,
		eqeqeq: 1,
		indent: [0, "tab", { SwitchCase: 1 }],
		"no-mixed-spaces-and-tabs": [2, "smart-tabs"],
		"no-undef": [0],
		"no-unused-vars": [0],
		semi: [1, "always"],
		"space-infix-ops": [1, { int32Hint: false }],
		quotes: [1, "double"]
	}
};

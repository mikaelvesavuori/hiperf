module.exports = {
	extends: [
		"stylelint-config-idiomatic-order",
		"./node_modules/prettier-stylelint/config.js"
	],
	rules: {
		"at-rule-name-space-after": "always",
		"block-no-empty": true,
		"block-opening-brace-newline-after": "always",
		"block-closing-brace-newline-before": "always",
		"color-no-invalid-hex": true,
		"color-no-hex": true,
		"color-named": "never",
		"comment-no-empty": true,
		"declaration-bang-space-after": "never",
		"declaration-colon-space-after": "always",
		"declaration-colon-space-before": "never",
		"declaration-block-no-duplicate-properties": true,
		"declaration-block-trailing-semicolon": "always",
		"function-calc-no-unspaced-operator": true,
		"function-comma-newline-before": "never-multi-line",
		"function-comma-space-after": "always",
		"function-comma-space-before": "never",
		"function-url-quotes": "always",
		indentation: "tab",
		"keyframe-declaration-no-important": true,
		"media-feature-colon-space-after": "always",
		"media-feature-colon-space-before": "never",
		"media-feature-name-no-vendor-prefix": true,
		"max-empty-lines": 5,
		"no-duplicate-selectors": true,
		"no-empty-source": true,
		"no-eol-whitespace": [
			true,
			{
				ignore: ["empty-lines"]
			}
		],
		"no-extra-semicolons": true,
		"number-leading-zero": "never",
		"number-max-precision": 3,
		"number-no-trailing-zeros": true,
		"selector-list-comma-newline-after": "always-multi-line",
		"selector-list-comma-newline-before": "never-multi-line",
		"selector-list-comma-space-after": "always-single-line",
		"selector-list-comma-space-before": "never",
		"selector-no-id": true,
		"selector-pseudo-class-case": "lower",
		"shorthand-property-no-redundant-values": true,
		"string-quotes": "double",
		"string-no-newline": true,
		"time-min-milliseconds": 100,
		"unit-case": "lower",
		"unit-no-unknown": true,
		"value-keyword-case": "lower",
		"value-no-vendor-prefix": true
	}
};

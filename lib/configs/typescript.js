module.exports = {
	// Lint all TypeScript files
	// - Lets ESLint v7 know to add these to `--ext`
	"overrides": [
		{
			"files": [
				"**/*.{ts,tsx}",
			],

			"parser": "@typescript-eslint/parser",

			"parserOptions": {
				"project": "./tsconfig.json",
			},

			"plugins": [
				"@typescript-eslint",
				"import",
			],

			"extends": [
				"plugin:@typescript-eslint/eslint-recommended",
				"plugin:@typescript-eslint/recommended",
				"plugin:@typescript-eslint/recommended-requiring-type-checking",
				"plugin:import/typescript",
			],

			"rules": {
				/*
					TypeScript rules
					Supported rules: https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules
				*/
				// Reason: Organization
				"@typescript-eslint/member-ordering": "error",
				// Reason: Confusing syntax (TSX, etc.)
				"@typescript-eslint/consistent-type-assertions": [
					"error",
					{
						"assertionStyle": "as",
					},
				],
				// Reason: Allow omitting vars from objects like `{badProp, ...otherProps} = props`
				"@typescript-eslint/no-unused-vars": [
					"error",
					{
						ignoreRestSiblings: true,
					},
				],
			},
		},
	],
};

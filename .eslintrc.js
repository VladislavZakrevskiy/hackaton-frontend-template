module.exports = {
	env: {
		browser: true,
		es2021: true,
	},
	extends: [
		"airbnb",
		"plugin:react/recommended",
		"eslint-plugin-vlad-path-checker-plugin",
		// "prettier"
	],
	overrides: [
		{
			env: {
				node: true,
			},
			files: [".eslintrc.{js,cjs}"],
			parserOptions: {
				sourceType: "script",
			},
		},
	],
	parserOptions: {
		ecmaVersion: "latest",
		sourceType: "module",
		project: "./tsconfig.json",
	},
	plugins: [
		"react",
		"i18next",
		"unused-imports",
		"eslint-plugin-vlad-path-checker-plugin",
	],
	rules: {
		"react/jsx-filename-extension": [
			2,
			{ extensions: [".js", ".jsx", ".tsx"] },
		],
		"import/no-unresolved": "off",
		"import/prefer-default-export": "off",
		"no-unused-vars": "warn",
		"react/require-default-props": "off",
		"react/react-in-jsx-scope": "off",
		"react/jsx-props-no-spreading": "warn",
		"react/function-component-definition": "off",
		"no-shadow": "off",
		"no-tabs": "off",
		"strict-boolean-expressions": "off",
		"prefer-nullish-coalescing": "off",
		"comma-dangle": "off",
		"import/extensions": "off",
		"eslint-plugin-vlad-path-checker-plugin/path-checker":
			["error", { alias: "@" }],
		"eslint-plugin-vlad-path-checker-plugin/public-api-imports":
			[
				"error",
				{
					alias: "@",
					testFiles: [
						"**/*.test.*",
						"**/*.story.*",
						"**/StoreDecorator.tsx",
					],
				},
			],
		"eslint-plugin-vlad-path-checker-plugin/layer-imports":
			[
				"error",
				{
					alias: "@",
					ignoreImportPatterns: [
						"**/StoreProvider",
						"**/testing",
					],
				},
			],
	},
};

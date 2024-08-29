import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import pluginReact from "eslint-plugin-react";

export default [
	{ files: ["**/*.{js,mjs,cjs,ts,jsx,tsx}"] },
	{ languageOptions: { globals: globals.browser } },
	pluginJs.configs.recommended,
	...tseslint.configs.recommended,
	pluginReact.configs.flat.recommended,
	{
		rules: {
			"@typescript-eslint/no-unsafe-assignment": "off",
			"@typescript-eslint/no-unsafe-member-access": "off",
			"@typescript-eslint/no-unsafe-argument": "off",
			"@typescript-eslint/no-floating-promises": "off",
			"@typescript-eslint/await-thenable": "off",
			"@typescript-eslint/no-misused-promises": "off",
			"@typescript-eslint/no-unsafe-call": "off",
			"@typescript-eslint/no-unsafe-enum-comparison": "off",
			"@typescript-eslint/unbound-method": "off",
			"@typescript-eslint/no-var-requires": "off",
			"@typescript-eslint/no-throw-literal": "off",
			"react/react-in-jsx-scope": "off",
			"no-restricted-syntax": "off",
			"promise/always-return": "off",
		},
	},
];

module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:@typescript-eslint/recommended"
    ],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
		"project": "tsconfig.json",
		"tsconfigRootDir": ".",
    },
    "plugins": [
        "react",
        "@typescript-eslint",
		"unused-imports",
		"import"
    ],
	"ignorePatterns": ["webpack.config.js", ".eslintrc.js", "tsconfig.json"],
    "rules": {
		// "@typescript-eslint/no-explicit-any": [
		// 	0,
		// 	{
		// 		fixToUnknown: true,
		// 		ignoreRestArgs: false
		// 	}
		// ],
		"@typescript-eslint/no-use-before-define": "error",
		"@typescript-eslint/explicit-module-boundary-types": "off",
		"react/no-array-index-key": "off",

    	"@typescript-eslint/semi": ["warn"],
		"@typescript-eslint/no-empty-function": [
			"error",
			{ "allow": ["arrowFunctions"] }
		],
		
		"import/no-absolute-path": "error",
		"import/no-unresolved": "off",
		"import/first": "error",
		"import/newline-after-import": "warn",
	
		// "import/order": [
		// 	"warn",
		// 	{
		// 		"groups": [
		// 		"builtin",
		// 		"external",
		// 		"internal",
		// 		"parent",
		// 		"sibling",
		// 		"index"
		// 		]
		// 	}
		// ],

		"unused-imports/no-unused-imports": "warn",
		"no-unused-expressions": [
			"error",
			{ allowShortCircuit: true }
		],
		"no-console": process.env.NODE_ENV === "production" ? "error": "off",
		"no-debugger": process.env.NODE_ENV === "production" ? "error": "off",
		"no-alert": process.env.NODE_ENV === "production" ? "error": "off",
		"no-plusplus": ["error", { "allowForLoopAfterthoughts": true }],

		"curly": "error",
		// "semi": "always", // off
		"no-shadow": "off",
		"newline-before-return": "warn",

		"spaced-comment": [
			"error",
			"always"
		],
		"max-len": [
			"warn", {
				code: 120,
				tabWidth: 2,
				comments: 1000,
				ignoreComments: true,
				ignoreTrailingComments: true,
				ignoreUrls: true,
				ignoreStrings: true,
				ignoreTemplateLiterals: true,
				ignoreRegExpLiterals: true,
			}
		],
    },
	settings: {
		"import/parsers": {
			"@typescript-eslint/parser": [".ts", ".tsx"],
		},
		"import/resolver": {
			typescript: {
				alwaysTryTypes: true, // always try to resolve types under `<root>@types` directory even it doesn't contain any source code, like `@types/unist`
				project: ["./tsconfig.json"],
			},
		},
	},
}

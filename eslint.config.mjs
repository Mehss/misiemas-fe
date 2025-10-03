import { defineConfig, globalIgnores } from "eslint/config";
import typescriptEslint from "@typescript-eslint/eslint-plugin";
import unusedImports from "eslint-plugin-unused-imports";
import _import from "eslint-plugin-import";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";
import path from "node:path";
import { fileURLToPath } from "node:url";
import js from "@eslint/js";
import { FlatCompat } from "@eslint/eslintrc";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const compat = new FlatCompat({
    baseDirectory: __dirname,
    recommendedConfig: js.configs.recommended,
    allConfig: js.configs.all
});

export default defineConfig([globalIgnores([
    "src/api/idm/types.ts",
    "**/coverage",
    "**/build",
    "**/dist",
    "**/node_modules",
]), {
    extends: compat.extends("prettier"),

    plugins: {
        "@typescript-eslint": typescriptEslint,
        "unused-imports": unusedImports,
        import: fixupPluginRules(_import),
    },

    languageOptions: {
        globals: {
            ...globals.browser,
            ...globals.node,
            ...globals.jest,
        },

        parser: tsParser,
        ecmaVersion: 5,
        sourceType: "commonjs",

        parserOptions: {
            project: "./tsconfig.json",
        },
    },

    rules: {
        "no-debugger": "error",
        "no-console": "warn",
        semi: "off",
        "@typescript-eslint/semi": [2, "never"],

        "react/jsx-filename-extension": [0, {
            extensions: [".js", ".jsx", ".ts", ".tsx"],
        }],

        "no-use-before-define": ["off", {
            functions: false,
        }],

        "@typescript-eslint/default-param-last": "off",
        "import/no-extraneous-dependencies": 0,
        "import/no-unresolved": 0,
        "import/prefer-default-export": 0,
        "import/extensions": 0,
        "linebreak-style": 0,
        "react/require-default-props": [0],

        "no-param-reassign": ["error", {
            props: true,
            ignorePropertyModificationsFor: ["state"],
        }],

        "react/prop-types": 0,
        "@typescript-eslint/explicit-function-return-type": 0,
        "@typescript-eslint/explicit-member-accessibility": 0,
        "@typescript-eslint/indent": 0,
        "@typescript-eslint/member-delimiter-style": 0,
        "@typescript-eslint/no-explicit-any": 0,
        "@typescript-eslint/no-var-requires": 0,
        "@typescript-eslint/no-use-before-define": 0,
        "@typescript-eslint/no-unused-vars": "off",
        "unused-imports/no-unused-imports": "error",
        "unused-imports/no-unused-vars": "error",
        "import/no-cycle": 0,

        "import/order": ["error", {
            alphabetize: {
                order: "asc",
                caseInsensitive: true,
            },

            "newlines-between": "always",
            groups: ["builtin", "external", "internal", "parent", "sibling", "index"],

            pathGroups: [{
                pattern: "{react,react-dom,react-router-dom,connected-react-router,@reduxjs/toolkit,react-redux,reselect,prop-types,@testing-library/react,@testing-library/react-hooks,@testing-library/jest-dom}",
                group: "builtin",
                position: "before",
            }, {
                pattern: "~/**",
                group: "internal",
            }],

            pathGroupsExcludedImportTypes: ["builtin"],
        }],
    },
}]);
import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';

export default [
    {
        files: ['**/*.{js,mjs,cjs,jsx}'],
    },
    {
        languageOptions: {
            globals: {
                ...globals.browser,
            },
            ecmaVersion: 12,
            sourceType: 'module',
        },
        rules: {
            'no-unused-vars': 'warn',
        },
        // rules: {
        //     'no-unused-vars': [
        //         'error',
        //         {
        //             vars: 'all',
        //             args: 'after-used',
        //             caughtErrors: 'all',
        //             ignoreRestSiblings: false,
        //             reportUsedIgnorePattern: false,
        //         },
        //     ],
        // },
    },
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];

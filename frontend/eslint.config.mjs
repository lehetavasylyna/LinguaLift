import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginReact from 'eslint-plugin-react';
import pluginCypress from 'eslint-plugin-cypress/flat';

export default [
    { files: ['**/*.{js,mjs,cjs,jsx}'] },
    {
        settings: {
            react: {
                version: '17.0',
            },
        },
        languageOptions: {
            globals: {
                ...globals.browser,
                ...globals.node,
                Cypress: true,
            },
        },
        plugins: {
            cypress: pluginCypress,
        },
        rules: {
            // 'cypress/no-unnecessary-waiting': 'off',
            'cypress/unsafe-to-chain-command': 'error',
            'spaced-comment': 'off',
            'no-console': 'warn',
            'consistent-return': 'off',
            'func-names': 'off',
            'object-shorthand': 'off',
            'no-process-exit': 'off',
            'no-param-reassign': 'off',
            'no-return-await': 'off',
            'no-underscore-dangle': 'off',
            'class-methods-use-this': 'off',
            'eslint-disable-next-line': 'off',
            'prefer-destructuring': ['error', { object: true, array: false }],
            'prefer-object-spread': 'off',
            'no-unused-vars': ['error', { argsIgnorePattern: 'req|res|next|val' }],
        },
    },
    pluginCypress.configs.recommended,
    pluginJs.configs.recommended,
    pluginReact.configs.flat.recommended,
];

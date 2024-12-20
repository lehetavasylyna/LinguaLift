// https://eslint.org/docs/v8.x/

const config = {
    env: {
        browser: true,
        node: true,
        es2021: true,
    },
    parser: 'babel-eslint',
    parserOptions: {
        ecmaVersion: 2021,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
        requireConfigFile: false,
    },
    extends: [
        'eslint:recommended',
        /* https://www.npmjs.com/package/eslint-plugin-react */
        'plugin:react/recommended',
        /* https://www.npmjs.com/package/eslint-plugin-react-hooks */
        'plugin:react-hooks/recommended',
        /*https://www.npmjs.com/package/eslint-plugin-import*/
        'plugin:import/errors',
        'plugin:import/warnings',
        /*https://www.npmjs.com/package/eslint-plugin-unicorn*/
        'plugin:unicorn/recommended',
        /*https://www.npmjs.com/package/eslint-plugin-cypress*/
        'plugin:cypress/recommended',
    ],
    /* https://github.com/import-js/eslint-plugin-import */
    settings: {
        react: {
            version: 'detect',
        },
        'import/resolver': {
            node: {
                extensions: ['.js', '.jsx'],
            },
            webpack: {
                config: './config/webpack.development.config.js',
            },
        },
    },

    plugins: ['simple-import-sort', 'react', 'react-hooks'],
    ignorePatterns: ['node_modules', 'coverage'],
    rules: {
        'unicorn/filename-case': [
            'error',
            {
                cases: {
                    camelCase: true,
                    pascalCase: true,
                },
            },
        ],
        'simple-import-sort/exports': 'error',
        'simple-import-sort/imports': 'error',
        'import/namespace': [2, { allowComputed: true }],
        'import/first': 'error',
        'import/newline-after-import': 'error',
    },
    overrides: [
        {
            files: ['*rc.js', '*.config.js'],
            rules: {
                'unicorn/prefer-module': 'off',
                'unicorn/filename-case': 'off',
            },
        },
    ],
    globals: {
        Cypress: true,
    },
};

module.exports = config;

module.exports = {
    extends: [
        'plugin:react/recommended',
        'plugin:react-hooks/recommended',
        'plugin:prettier/recommended',
    ],
    env: {
        es6: true,
        node: true,
        browser: true,
    },
    parserOptions: {
        ecmaVersion: 11,
        sourceType: 'module',
        ecmaFeatures: {
            jsx: true,
        },
    },
    ignorePatterns: ['/node_modules/**', '/build/**'],
    rules: {
        'no-unused-vars': ['warn', { args: 'none', argsIgnorePattern: 'req|res|next|val' }],
        'prettier/prettier': ['error'],
        "react/react-in-jsx-scope": "off",
    },
    settings: {
        react: {
            version: 'detect',
        },
    },
};
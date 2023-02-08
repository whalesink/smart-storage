module.exports = {
  extends: 'airbnb-typescript-prettier',
  rules: {
    '@typescript-eslint/ban-ts-comment': 'off',
    '@typescript-eslint/explicit-function-return-type': [
      'error',
      {
        allowExpressions: true,
        allowTypedFunctionExpressions: true,
      },
    ],
    '@typescript-eslint/member-ordering': 'error',
    '@typescript-eslint/no-explicit-any': 'off',
    '@typescript-eslint/no-this-alias': 'off',
    '@typescript-eslint/no-unused-vars': ['error', { argsIgnorePattern: '^_' }],
    '@typescript-eslint/no-var-requires': 'off',
    'func-names': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
    'no-extend-native': 'off',
    'no-param-reassign': [
      'error',
      {
        props: true,
        ignorePropertyModificationsFor: ['result', 'itemRef'],
      },
    ],
    'no-plusplus': 'off',
    'no-underscore-dangle': 'off',
    'no-void': 'off',
    'prefer-spread': 'off',
    'react/function-component-definition': 'off',
    'react-hooks/rules-of-hooks': 'off',
  },
};
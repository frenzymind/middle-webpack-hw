import eslint from '@eslint/js'
import tseslint from 'typescript-eslint'

export default tseslint.config({
  files: ['**/*.ts'],
  ignores: ['dist'],
  extends: [eslint.configs.recommended, tseslint.configs.strict, tseslint.configs.stylistic],
  rules: {
    '@typescript-eslint/array-type': 'error',
    '@typescript-eslint/consistent-type-imports': 'error',
    '@typescript-eslint/consistent-type-definitions': 'off',
  },
})

// import js from '@eslint/js'
// import vue from 'eslint-plugin-vue'
// import tseslint from 'typescript-eslint'
// import prettier from 'eslint-config-prettier'
// import vueParser from 'vue-eslint-parser'

// export default [
//   js.configs.recommended,

//   ...tseslint.configs.recommendedTypeChecked,

//   ...vue.configs['flat/recommended'],

//   prettier,

//   {
//     files: ['src/**/*.{ts,tsx,vue}'],
//     languageOptions: {
//       parser: vueParser,
//       parserOptions: {
//         parser: tseslint.parser,
//         project: ['./tsconfig.app.json'],
//         tsconfigRootDir: import.meta.dirname,
//         extraFileExtensions: ['.vue'],
//         ecmaVersion: 'latest',
//         sourceType: 'module',
//       },
//     },
//     rules: {
//       /* =====================
//          TIPADO
//          ===================== */
//       '@typescript-eslint/no-explicit-any': 'error',
//       '@typescript-eslint/explicit-function-return-type': 'warn',
//       '@typescript-eslint/no-non-null-assertion': 'error',
//       '@typescript-eslint/no-unused-vars': ['warn', { argsIgnorePattern: '^_' }],
//       '@typescript-eslint/consistent-type-imports': 'error',

//       /* =====================
//          BUENAS PRÁCTICAS
//          ===================== */
//       'prefer-const': 'error',
//       'no-console': 'warn',
//       'no-debugger': 'error',

//       /* =====================
//          VUE
//          ===================== */
//       'vue/multi-word-component-names': 'off',
//       'vue/no-mutating-props': 'error',
//       'vue/require-default-prop': 'off',
//     },
//   },

//   {
//     files: ['vite.config.ts', 'eslint.config.ts', 'vitest.config.ts', '**/*.config.ts'],
//     languageOptions: {
//       parserOptions: {
//         project: false,
//       },
//     },
//   },
// ]

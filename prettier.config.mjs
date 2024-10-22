/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  importOrder: [
    '^(react)',
    '^(lit)|^(@lit)',
    '<THIRD_PARTY_MODULES>',
    '',
    '<TYPES>',
    '',
    '^[./|../]',
    '',
    '<TYPES>^[./|../]',
  ],
  importOrderSeparation: true,
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  importOrderMergeDuplicateImports: true,
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
}

export default config

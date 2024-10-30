/** @type {import("prettier").Config} */
const config = {
  semi: false,
  singleQuote: true,
  importOrder: [
    '^(react)',
    '^(next)',
    '^(content)',
    '^(lit)|^(@lit)',
    '<THIRD_PARTY_MODULES>',
    '',
    '<TYPES>',
    '',
    '^(@sebgroup)',
    '^[./|../]',
    '',
    '<TYPES>^[./|../]',
  ],
  importOrderParserPlugins: ['typescript', 'jsx', 'decorators-legacy'],
  plugins: ['@ianvs/prettier-plugin-sort-imports'],
}

export default config

/* eslint-disable */
export default {
  displayName: 'core-lib-dev',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/src/test-setup.ts'],
  transform: {
    '^.+\\.[tj]s$': 'babel-jest',
  },
  moduleFileExtensions: ['ts', 'js', 'html'],
  coverageDirectory: '../../coverage/apps/core-lib-dev',
  transformIgnorePatterns: [
    'node_modules/(?!.*.mjs$|lit-element|lit-html|lit|@lit|@lit-labs|dist/)',
  ],
  moduleNameMapper: {
    '@sebgroup/green-core': '<rootDir>/../../dist/libs/core/src/index.js',
  },
}

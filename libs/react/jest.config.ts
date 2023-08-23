/* eslint-disable */
export default {
  displayName: 'react',
  preset: '../../jest.preset.js',
  transform: {
    '^.+\\.[tj]sx?$': ['babel-jest', { presets: ['@nrwl/react/babel'] }],
  },
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/react',
  setupFilesAfterEnv: ['@testing-library/jest-dom/extend-expect'],
  transformIgnorePatterns: [
    'node_modules/(?!.*.mjs$|lit-element|lit-html|lit|@lit|@lit-labs/)',
  ],
  moduleNameMapper: {
    '@sebgroup/green-core': '<rootDir>/../../dist/libs/core/src',
  },
}

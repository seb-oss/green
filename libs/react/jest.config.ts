/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('../../tsconfig.base')

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
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/../..',
  }),
}

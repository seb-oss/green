/* eslint-disable */
const { pathsToModuleNameMapper } = require('ts-jest')
const { compilerOptions } = require('../../tsconfig.base')

export default {
  displayName: 'angular',
  preset: '../../jest.preset.js',
  setupFilesAfterEnv: ['<rootDir>/test-setup.ts'],
  globals: {},
  transform: {
    '^.+.(ts|mjs|js|html)$': [
      'jest-preset-angular',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  moduleNameMapper: pathsToModuleNameMapper(compilerOptions.paths, {
    prefix: '<rootDir>/../..',
  }),
  snapshotSerializers: [
    'jest-preset-angular/build/serializers/no-ng-attributes',
    'jest-preset-angular/build/serializers/ng-snapshot',
    'jest-preset-angular/build/serializers/html-comment',
  ],
  transformIgnorePatterns: [
    'node_modules/(?!.*.mjs$|@sebgroup/green-react|@sebgroup/extract|@sebgroup/green-core|lit-element|lit-html|lit|@lit|@lit-labs|@jsverse|flat|chalk)',
  ],
  testPathIgnorePatterns: ['<rootDir>/node_modules/', '/node_modules/'],
}

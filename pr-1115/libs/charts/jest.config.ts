/* eslint-disable */
export default {
  displayName: 'charts',
  preset: '../../jest.preset.js',
  globals: {},
  transform: {
    '^.+\\.[tj]sx?$': [
      'ts-jest',
      {
        tsconfig: '<rootDir>/tsconfig.spec.json',
        stringifyContentPathRegex: '\\.(html|svg)$',
      },
    ],
  },
  transformIgnorePatterns: ['<rootDir>/node_modules/(?!billboard.js/.*)'],
  moduleFileExtensions: ['ts', 'tsx', 'js', 'jsx'],
  coverageDirectory: '../../coverage/libs/charts',
}

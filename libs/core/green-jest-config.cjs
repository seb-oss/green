/**
 * This config can be used when using jest for testing an application that directly or
 * indirectly (through green-react or green-angular) use the Green Core web components.
 *
 * The config includes the following:
 * - `transformIgnorePatterns` to ignore transforming certain Green and Lit files
 * - `setupFilesAfterEnv` that mocks some browser APIs that are used by the web components
 */
module.exports = {
  apply: (config) => {
    const transformIgnorePatterns = [
      'node_modules/(?!.*.mjs$|@sebgroup/green-react|@sebgroup/extract|@sebgroup/green-core|lit-element|lit-html|lit|@lit|@lit-labs/)',
      ...(config.transformIgnorePatterns || []),
    ]
    config.transformIgnorePatterns = [
      transformIgnorePatterns.join('&')
    ]

    config.setupFilesAfterEnv = [
      ...(config.setupFilesAfterEnv || []),
      __dirname + '/setup-jest.js',
    ]

    return config
  },
}

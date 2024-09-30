export default {
  files: ['dist/tests/core/**/*.test.js'],
  nodeResolve: true,
  concurrentBrowsers: 3,
  testFramework: {
    config: {
      timeout: 3000,
      retries: 5,
    },
  },
}

/// <reference types="vitest" />
/// <reference types="@vitest/browser/matchers" />
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

const root = resolve(__dirname)

export default defineConfig({
  root,
  test: {
    name: 'core',
    include: ['src/**/*.test.ts'],
    setupFiles: ['./src/test-setup.ts'],
    browser: {
      enabled: true,
      provider: 'playwright',
      headless: true,
      instances: [{ browser: 'chromium' }, { browser: 'webkit' }],
    },
    testTimeout: 10000,
    retry: 2,
  },
  resolve: {
    alias: {
      '@sebgroup/green-core': resolve(__dirname, 'src'),
    },
  },
})

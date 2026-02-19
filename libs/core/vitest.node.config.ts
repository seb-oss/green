/// <reference types="vitest" />
import { resolve } from 'path'
import { defineConfig } from 'vitest/config'

const root = resolve(__dirname)

export default defineConfig({
  root,
  test: {
    name: 'core-node',
    include: ['src/bin/**/*.test.ts'],
    environment: 'node',
    testTimeout: 10000,
    retry: 2,
  },
  resolve: {
    alias: {
      '@sebgroup/green-core': resolve(__dirname, 'src'),
    },
  },
})

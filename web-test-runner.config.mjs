import { esbuildPlugin } from '@web/dev-server-esbuild'

export default {
  files: ['libs/**/*.test.ts'],
  plugins: [esbuildPlugin({ ts: true })],
}

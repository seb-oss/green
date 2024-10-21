import * as esbuild from 'esbuild'
import { globby } from 'globby'

await esbuild.build({
  entryPoints: await globby('libs/core/src/**/*.test.ts'),
  bundle: true,
  tsconfig: 'libs/core/tsconfig.spec.json',
  alias: {
    '@sebgroup/green-core': './dist/libs/core/src',
  },
  packages: 'external',
  target: 'es2022',
  platform: 'neutral',
  outdir: 'dist/tests/core',
})

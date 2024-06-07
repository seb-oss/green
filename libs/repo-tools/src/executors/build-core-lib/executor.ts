import { BuildCoreLibExecutorSchema } from './schema'
import * as esbuild from 'esbuild'
import * as glob from 'glob'
import { sassPlugin } from 'esbuild-sass-plugin'
import postcss from 'postcss'
import * as autoprefixer from 'autoprefixer'
import * as postcssPresetEnv from 'postcss-preset-env'
import type { ExecutorContext } from '@nx/devkit'
import { copyAssets } from '@nx/js'
import { removeSync } from 'fs-extra'

export default async function runExecutor(
  options: BuildCoreLibExecutorSchema,
  context: ExecutorContext,
) {
  removeSync(options.outputPath)

  await copyAssets(options, context)

  await esbuild.build({
    entryPoints: [
      // Everything
      './libs/core/src',

      // Components
      ...glob.sync(
        './libs/core/src/components/**/!(*.test|*.style|*.styles|*.stories).ts',
      ),

      // Transitional styles
      ...glob.sync('./libs/core/src/components/**/*.trans.styles.ts'),

      // Primitives
      // These are considered internal, but it is somtimes neccessary to
      // import directly, for example in our tests.
      ...glob.sync(
        './libs/core/src/primitives/**/!(*.test|*.style|*.styles|*.stories).ts',
      ),

      // Utils
      ...glob.sync('./libs/core/src/localization.ts'),
      ...glob.sync('./libs/core/src/transitional-styles.ts'),
      ...glob.sync('./libs/core/src/scoping.ts'),
    ],
    chunkNames: 'chunks/[name].[hash]',
    splitting: true,
    bundle: true,
    tsconfig: options.tsconfig,
    packages: 'external',
    target: 'es2017',
    platform: 'browser',
    outdir: options.outputPath,
    outbase: './libs/core/src',
    format: 'esm',
    define: {
      'process.env.NODE_ENV': '"production"',
    },
    plugins: [
      sassPlugin({
        type: 'css-text',
        async transform(source, _resolveDir) {
          const { css } = await postcss([
            autoprefixer,
            postcssPresetEnv({ stage: false }),
          ]).process(source, { from: undefined })
          return css
        },
      }),
    ],
  })

  return {
    success: true,
  }
}

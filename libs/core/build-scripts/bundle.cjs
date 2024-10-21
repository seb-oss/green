const esbuild = require('esbuild')
const esp = require('esbuild-sass-plugin')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')

esbuild.build({
  entryPoints: ['libs/core/src/index.ts'],
  outfile: 'dist/libs/core/src/index.bundle.js',
  bundle: true,
  plugins: [
    esp.sassPlugin({
      type: 'css-text',
      async transform(source, resolveDir) {
        const { css } = await postcss([
          autoprefixer,
          postcssPresetEnv({ stage: false }),
        ]).process(source, { from: undefined })
        return css
      },
    }),
  ],
})

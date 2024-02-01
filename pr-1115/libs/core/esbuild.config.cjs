const esp = require('esbuild-sass-plugin')
const postcss = require('postcss')
const autoprefixer = require('autoprefixer')
const postcssPresetEnv = require('postcss-preset-env')

module.exports = {
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
}

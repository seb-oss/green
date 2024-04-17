const esp = require('esbuild-sass-plugin')

module.exports = {
  outExtension: '.js=.mjs',
  plugins: [
    esp.sassPlugin({
      type: 'css-text',
    }),
  ],
}

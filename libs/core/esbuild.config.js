const esp = require('esbuild-sass-plugin')

module.exports = {
  plugins: [
    esp.sassPlugin({
      type: 'css-text',
    }),
  ],
}

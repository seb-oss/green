import Color from 'tinycolor2'

export default {
  name: 'green/color/composeColor',
  type: 'value',
  filter: (token) => token.path.includes('color'),
  transform: function (token, _, options) {
    const str = Color(options.usesDtcg ? token.$value : token.value).toHex8()
    return 'Color(0x' + str.slice(6) + str.slice(0, 6) + ')'
  },
}

export default {
  'color-scheme': {
    name: 'color-scheme',
    matcher: function (token) {
      return 'darkValue' in token
    },
  },
}

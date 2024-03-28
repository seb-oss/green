function getLastWorkInName(token) {
  const nameArr = token.name.split('-')
  return nameArr[nameArr.length - 1]
}

export default {
  'light-mode': {
    name: 'light-mode',
    matcher: function (token) {
      return getLastWorkInName(token) === 'light'
    },
  },
  'dark-mode': {
    name: 'dark-mode',
    matcher: function (token) {
      return getLastWorkInName(token) === 'dark'
    },
  },
  'color-scheme': {
    name: 'color-scheme',
    matcher: function (token) {
      return 'darkValue' in token
    },
  },
}

function getLastWorkInName(token) {
  const nameArr = token.name.split('-')
  return nameArr[nameArr.length - 1]
}

export default {
  'color-scheme': {
    name: 'color-scheme',
    matcher: function (token) {
      return 'darkValue' in token
    },
  },
  // 'color-scheme': {
  //   name: 'color-scheme',
  //   matcher: function (token) {
  //     return 'value' in token && 'darkValue' in token && 'alpha' in token
  //   },
  // },
  'dark-mode': {
    name: 'dark-mode',
    matcher: function (token) {
      return getLastWorkInName(token) === 'dark'
    },
  },
  is2016Color: {
    name: 'is2016Color',
    matcher: (token) => {
      if (token.version !== '2016') {
        return false
      }
      return 'darkValue' in token
    },
  },
  is2016Pallet: {
    name: 'is2016Pallet',
    matcher: (token) => {
      if (token.darkValue) return false
      return token.version === '2016'
    },
  },
  is2016Ref: {
    name: 'is2016Ref',
    matcher: (token) => {
      if (token.version !== '2016') {
        return false
      }
      return token.path.includes('ref')
    },
  },
  is2023MotionColor: {
    name: 'is2023MotionColor',
    matcher: (token) => {
      if (token.version === '2016') return false

      if (token.path.includes('motion')) {
        return true
      }

      return token.type === 'color' && !!token.darkValue
    },
  },
  is2023Color: {
    name: 'is2023Color',
    matcher: (token) => {
      if (token.version === '2016') {
        return false
      }
      return 'darkValue' in token
    },
  },
  is2023Radii: {
    name: 'is2023Radii',
    matcher: (token) => {
      if (token.version === '2016') return false
      return token.path.includes('radii')
    },
  },
  is2023Ref: {
    name: 'is2023Ref',
    matcher: (token) => {
      if (token.version === '2016') {
        return false
      }
      return token.path.includes('ref')
    },
  },
  is2023Size: {
    name: 'is2023Size',
    matcher: (token) => {
      if (token.path.includes('ref')) return false
      return token.path.includes('size')
    },
  },
  is2023Sys: {
    name: 'is2023Sys',
    matcher: (token) => {
      if (token.version === '2016') {
        return false
      }
      return token.path.includes('sys')
    },
  },
  isMotion: {
    name: 'isMotion',
    matcher: function (token) {
      return token.path?.includes('motion')
    },
  },
  'light-mode': {
    name: 'light-mode',
    matcher: function (token) {
      return getLastWorkInName(token) === 'light'
    },
  },
}

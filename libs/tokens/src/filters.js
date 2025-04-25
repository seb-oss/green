export default {
  'light-mode': {
    name: 'light-mode',
    filter: async (token) => {
      return token.filePath.includes('.light.')
    },
  },
  'dark-mode': {
    name: 'dark-mode',
    filter: async (token) => {
      console.log(token.filePath)
      console.log(token.filePath.includes('.dark.'))

      return token.filePath.includes('.dark.')
    },
  },
  'no-colors': {
    name: 'no-colors',
    filter: async (token) => {
      return token.type !== 'color'
    },
  },
  'no-colors-no-ref': {
    name: 'no-colors-no-ref',
    filter: async (token) => {
      return token.type !== 'color' && !token.path.includes('ref')
    },
  },
  'is-color': {
    name: 'is-color',
    filter: async (token) => {
      return token.type === 'color'
    },
  },
  'is-color-no-ref': {
    name: 'is-color-no-ref',
    filter: async (token) => {
      return token.type === 'color' && !token.path.includes('ref')
    },
  },
  'is-color-is-ref': {
    name: 'is-color-is-ref',
    filter: async (token) => {
      return token.type === 'color' && token.path.includes('ref')
    },
  },
  isRef: {
    name: 'isRef',
    filter: async (token) => {
      return token.path.includes('ref')
    },
  },
  'no-ref': {
    name: 'no-ref',
    filter: async (token) => {
      return !token.path.includes('ref')
    },
  },
  'is-shape': {
    name: 'is-shape',
    filter: async (token) => {
      if (token.version === '') return false
      return token.path.includes('shape')
    },
  },
  'is-dimension': {
    name: 'is-dimension',
    filter: async (token) => {
      return token.type === 'dimension'
    },
  },
  'is-sys': {
    name: 'is-sys',
    filter: async (token) => {
      if (token.version === '') {
        return false
      }
      return token.path.includes('sys')
    },
  },
  'is-motion': {
    name: 'is-motion',
    filter: async function (token) {
      return token.path.includes('motion')
    },
  },
}

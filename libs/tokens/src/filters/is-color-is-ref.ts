export default {
  name: 'is-color-is-ref',
  filter: async (token) => {
    return token.$type === 'color' && token.path.includes('ref')
  },
}

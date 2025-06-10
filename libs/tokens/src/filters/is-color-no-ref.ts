export default {
  name: 'is-color-no-ref',
  filter: async (token) => {
    return token.$type === 'color' && !token.path.includes('ref')
  },
}

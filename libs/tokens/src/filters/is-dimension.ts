export default {
  name: 'is-dimension',
  filter: async (token) => {
    return token.$type === 'dimension' && !token.path.includes('ref')
  },
}

export default {
  name: 'is-shape',
  filter: async (token) => {
    if (token.version === '') return false
    return token.path.includes('shape')
  },
}

export default {
  name: 'is-sys',
  filter: async (token) => {
    if (token.version === '') {
      return false
    }
    return token.path.includes('sys')
  },
}

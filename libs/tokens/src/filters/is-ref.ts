export default {
  name: 'isRef',
  filter: async (token) => {
    return token.path.includes('ref')
  },
}

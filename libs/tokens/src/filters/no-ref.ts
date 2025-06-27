export default {
  name: 'no-ref',
  filter: async (token) => {
    return !token.path.includes('ref')
  },
}

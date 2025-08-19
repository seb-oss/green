export default {
  name: 'is-motion',
  filter: async function (token) {
    return token.path.includes('motion')
  },
}

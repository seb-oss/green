export default {
  name: 'no-colors',
  filter: async (token) => {
    return token.$type !== 'color'
  },
}
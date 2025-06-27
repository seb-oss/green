export default {
  name: 'is-color',
  filter: async (token) => {
    return token.$type === 'color'
  },
}
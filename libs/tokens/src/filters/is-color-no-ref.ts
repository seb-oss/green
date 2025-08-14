export default {
  name: 'is-color-no-ref',
  filter: async (token) => {
    return !token.path.includes('ref') && token.path.includes('color')
  },
}

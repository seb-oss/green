export default {
  name: 'no-colors-no-ref',
  filter: async (token) => {
    return token.$type !== 'color' && !token.path.includes('ref')
  },
}

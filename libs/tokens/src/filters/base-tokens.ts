export default {
  name: 'base-tokens',
  filter: async (token) => {
    return (
      token.type !== 'color' &&
      !token.path.includes('ref') &&
      !token.path.includes('shadow')
    )
  },
}

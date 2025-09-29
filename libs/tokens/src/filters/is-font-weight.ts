export default {
  name: 'is-font-weight',
  filter: async (token) => {
    return token?.$type === 'fontWeight' || token?.type === 'fontWeight'
  },
}

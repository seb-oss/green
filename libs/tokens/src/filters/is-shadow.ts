export default {
  name: 'is-shadow',
  filter: async (token) => {
    return token?.$type === 'shadow' || token?.type === 'shadow'
  },
}

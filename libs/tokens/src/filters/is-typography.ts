export default {
  name: 'is-typography',
  filter: async (token) => {
    return token?.$type === 'typography' || token?.type === 'typography'
  },
}
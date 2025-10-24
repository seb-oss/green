// src/filters/is-spacing.ts
export default {
  name: 'is-spacing',
  filter: async (token) => {
    return token.path[1] === 'space' && !token.path.includes('ref')
  },
}

// src/filters/is-viewport.ts
export default {
  name: 'is-viewport',
  filter: async (token) => {
    return token.path[1] === 'viewport'
  },
}

// src/filters/is-radius.ts
export default {
  name: 'is-radius',
  filter: async (token) => {
    return token.path[1] === 'radius'
  },
}

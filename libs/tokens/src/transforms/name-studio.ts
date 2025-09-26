// src/transforms/name-studio.ts
export default {
  name: 'name/studio',
  type: 'name',
  transform: (token) => {
    // Get the relevant parts of the path
    const category = token.path[2]
    const name = token.path[token.path.length - 1]

    // For background levels (L1, L2, L3)
    if (['L1', 'L2', 'L3'].includes(category)) {
      return name
    }

    return name
  },
}

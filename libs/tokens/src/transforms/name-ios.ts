import { camelCase } from 'change-case'

export default {
  name: 'name/ios',
  type: 'name',
  transform: (token) => {
    const name = camelCase(token.path.slice(2).join(' '), {
      mergeAmbiguousCharacters: true,
    })

    if (token.$type === 'dimension') {
      return `_${name}`
    }
    return name
  },
}

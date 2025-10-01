import { camelCase } from 'change-case'

export default {
  name: 'name/ios',
  type: 'name',
  transform: (token) => {
    return camelCase(token.path.slice(2).join(' '), {
      mergeAmbiguousCharacters: true,
    })
  },
}

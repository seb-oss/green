import { pascalCase } from 'change-case'

export default {
  name: 'name/android',
  type: 'name',
  transform: (token) => {
    return pascalCase(token.path.slice(2).join(' '), {
      mergeAmbiguousCharacters: true,
    })
  },
}

export default {
  name: 'light-mode',
  filter: async (token) => {
    return token.filePath.includes('.light.')
  },
}

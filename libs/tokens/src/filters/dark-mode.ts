export default {
  name: 'dark-mode',
  filter: async (token) => {
    return token.filePath.includes('.dark.')
  },
}

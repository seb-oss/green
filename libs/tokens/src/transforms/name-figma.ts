export default {
  name: 'name/figma',
  type: 'name',
  transform: (token) => {
    return token.path.slice(1, token.path.length).join('/')
  },
}

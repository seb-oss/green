interface transform {
  name: string
  type: 'name'
  transformer: (token: any) => any
}

const transforms: Record<string, transform> = {
  'name/figma': {
    name: 'name/figma',
    type: 'name',
    transformer: (token) => {
      return token.path.slice(1, token.path.length).join('/')
    },
  },
}

export default transforms

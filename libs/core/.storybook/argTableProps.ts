import customElements from '../custom-elements.json'

export function argTablePropsFor(tagName: string) {
  const manifest = customElements.modules.find((m) =>
    m.declarations.find((d: any) => d.tagName === tagName),
  )?.declarations[0] as any

  return manifest?.members
    ?.filter((m) => m.category)
    .map((m) => {
      return {
        [m.name]: {
          control: 'none',
          table: {
            category: m.category,
          },
        },
      }
    })
    .reduce((acc, obj) => {
      return {
        ...acc,
        ...obj,
      }
    }, {})
}

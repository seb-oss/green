import customElements from '../custom-elements.json'

export function getArgTablePropsFor(tagName: string) {
  const manifest = customElements.modules.find((m) =>
    m.declarations.find((d: any) => d.tagName === tagName),
  )?.declarations[0] as any

  return manifest?.members
    .filter((m) => m.category)
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
// const divManifest = customElements.modules.find((m) =>
//   m.declarations.find((d: any) => d.tagName === 'gds-div'),
// )?.declarations[0] as any

// const argTable = divManifest?.members
//   .filter((m) => m.category)
//   .map((m) => {
//     return {
//       [m.name]: {
//         table: {
//           category: m.category,
//         },
//       },
//     }
//   })

//   // flatten the array of objects into a single object
//   .reduce((acc, obj) => {
//     return {
//       ...acc,
//       ...obj,
//     }
//   }, {})

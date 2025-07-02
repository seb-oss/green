// hooks/args.ts
// import customElements from '../../../libs/core/custom-elements.json'
import customElements from '@sebgroup/green-core/custom-elements.json'

// Define the structure that matches your JSON file
interface CustomElementsJson {
  modules: {
    declarations: {
      tagName?: string
      members?: {
        name: string
        category?: string
        type?: {
          text: string
        }
        description?: string
        default?: string
        optional?: boolean
      }[]
      events?: {
        name: string
        type?: {
          text: string
        }
        description?: string
      }[]
    }[]
  }[]
}

// Cast the imported JSON to the correct type
const typedCustomElements = customElements as CustomElementsJson

export function getComponentDocs(tagName: string) {
  const component = typedCustomElements.modules.find((m) =>
    m.declarations.find((d) => d.tagName === tagName),
  )?.declarations[0]

  if (!component) {
    return { props: [], events: [] }
  }

  return {
    props:
      component.members
        ?.filter((m) => m.category)
        .map((prop) => ({
          name: prop.name,
          type: prop.type?.text || 'any',
          description: prop.description || '',
          default: prop.default,
          required: !prop.optional,
          category: prop.category,
        })) || [],
    events:
      component.events?.map((event) => ({
        name: event.name,
        description: event.description || '',
        type: event.type?.text || 'CustomEvent',
      })) || [],
  }
}

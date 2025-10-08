// utils/helpers/part-composer.ts
import { html, nothing, TemplateResult } from 'lit'
import { unsafeHTML } from 'lit/directives/unsafe-html.js'

import { stripWhitespace } from './strip-white-space'

type PartConfig = {
  slot?: string
  conditions?: Record<string, () => boolean>
  templates?: Record<string, () => TemplateResult>
  wrapper?: (content: TemplateResult) => TemplateResult
  parts?: Record<string, Part>
}

type PartReturn =
  | TemplateResult
  | typeof nothing
  | (TemplateResult | undefined)[]

type Part = {
  render: () => PartReturn
}

const strippedHTML = stripWhitespace(html)

export const createComposer = (host: HTMLElement) => {
  const Part = (config: PartConfig): Part => ({
    render: () => {
      const { conditions, templates, wrapper, parts } = config

      if (conditions && templates) {
        const validContent = Object.keys(conditions)
          .filter((key) => conditions[key]?.())
          .map((key) => templates[key]?.())
          .filter(Boolean)

        if (validContent.length) {
          return wrapper
            ? wrapper(strippedHTML`${validContent}`)
            : strippedHTML`${validContent}`
        }
      }

      if (config.slot && host.querySelector(`[slot="${config.slot}"]`)) {
        const slotContent = strippedHTML`<slot name="${config.slot}"></slot>`
        return wrapper ? wrapper(slotContent) : slotContent
      }

      if (parts) {
        const renderedParts = Object.values(parts)
          .map((part) => part.render())
          .filter((content) => content !== nothing)

        if (renderedParts.length) {
          return wrapper
            ? wrapper(strippedHTML`${renderedParts}`)
            : strippedHTML`${renderedParts}`
        }
      }

      return nothing
    },
  })

  const Core = (parts: Record<string, Part>) => {
    const rendered = Object.values(parts)
      .map((part) => part.render())
      .filter((content) => content !== nothing)

    return rendered.length ? strippedHTML`${rendered}` : nothing
  }

  return { Part, Core }
}

// utils/helpers/part-composer.ts
import { html, nothing, TemplateResult } from 'lit'

type PartConfig = {
  slot?: string
  conditions?: Record<string, () => boolean>
  templates?: Record<string, () => TemplateResult>
  wrapper?: (content: TemplateResult) => TemplateResult
}

type PartReturn =
  | TemplateResult
  | typeof nothing
  | (TemplateResult | undefined)[]

type Part = {
  render: () => PartReturn
}

export const createComposer = (host: HTMLElement) => {
  const createPart = (config: PartConfig): Part => ({
    render: () => {
      const { conditions, templates, wrapper } = config

      // Handle templates with conditions
      if (conditions && templates) {
        const validContent = Object.keys(conditions)
          .filter((key) => conditions[key]?.())
          .map((key) => templates[key]?.())
          .filter(Boolean)

        if (validContent.length) {
          return wrapper ? wrapper(html`${validContent}`) : validContent
        }
      }

      // Handle slot
      if (config.slot && host.querySelector(`[slot="${config.slot}"]`)) {
        const slotContent = html`<slot name="${config.slot}"></slot>`
        return wrapper ? wrapper(slotContent) : slotContent
      }

      return nothing
    },
  })

  const Core = (parts: Record<string, Part>) => {
    const rendered = Object.values(parts)
      .map((part) => part.render())
      .filter((content) => content !== nothing)

    return rendered.length ? html`${rendered}` : nothing
  }

  return { createPart, Core }
}

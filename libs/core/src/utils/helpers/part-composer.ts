// utils/helpers/part-composer.ts
import { html, nothing, TemplateResult } from 'lit'
import { ClassInfo, classMap } from 'lit/directives/class-map.js'

import { stripWhitespace } from './strip-white-space'

type PartConfig = {
  slot?: string
  conditions?: Record<string, () => boolean>
  templates?: Record<string, () => TemplateResult>
  parts?: Record<string, Part>
  className?: ClassInfo
  wrapper?: (content: TemplateResult) => TemplateResult
  wrap?: boolean
}

type Part = {
  config: PartConfig
  render: () => TemplateResult | typeof nothing
}

const strippedHTML = stripWhitespace(html)

const isValidContent = (content: unknown): content is TemplateResult => {
  return content !== nothing && content !== undefined && content !== null
}

export const createComposer = (host: HTMLElement) => {
  const wrapContent = (
    content: TemplateResult,
    config: PartConfig,
    name: string,
  ) => {
    if (config.wrapper) {
      return config.wrapper(content)
    }

    if (config.wrap || config.className) {
      const classes = {
        ...(config.wrap ? { [`part-${name.toLowerCase()}`]: true } : {}),
        ...(config.className || {}),
      }
      return strippedHTML`<div class=${classMap(classes)}>${content}</div>`
    }

    return content
  }

  const createPart = (config: PartConfig, name = 'root'): Part => {
    const part: Part = {
      config,
      render: () => {
        if (config.parts) {
          const renderedParts = Object.entries(config.parts)
            .map(([childName, childPart]) => {
              // Create new part with child name
              const child = createPart(childPart.config, childName)
              return child.render()
            })
            .filter(isValidContent)

          if (renderedParts.length) {
            return wrapContent(strippedHTML`${renderedParts}`, config, name)
          }
        }

        if (config.slot && host.querySelector(`[slot="${config.slot}"]`)) {
          const content = strippedHTML`<slot name="${config.slot}"></slot>`
          return wrapContent(content, config, name)
        }

        if (config.conditions && config.templates) {
          const validContent = Object.entries(config.conditions)
            .filter(([_, check]) => check())
            .map(([key]) => config.templates?.[key]?.())
            .filter(isValidContent)

          if (validContent.length) {
            return wrapContent(strippedHTML`${validContent}`, config, name)
          }
        }

        return nothing
      },
    }

    return part
  }

  return {
    Part: (config: PartConfig) => createPart(config),
  }
}

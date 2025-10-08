// utils/helpers/part-composer.ts
import { html, nothing, TemplateResult } from 'lit'
import { ClassInfo, classMap } from 'lit/directives/class-map.js'

import { stripWhitespace } from './strip-white-space'

/**
 * Configuration for a part in the composition structure.
 */
type PartConfig = {
  /** Slot name if the part represents a slot */
  slot?: string
  /** Conditions that determine if templates should render */
  conditions?: Record<string, () => boolean>
  /** Templates to render when corresponding conditions are met */
  templates?: Record<string, () => TemplateResult>
  /** Nested parts for hierarchical structures */
  parts?: Record<string, Part>
  /** Classes to apply to the wrapper element */
  className?: ClassInfo | (() => ClassInfo)
  /** Custom wrapper function for the content */
  wrapper?: (content: TemplateResult) => TemplateResult
  /** Whether to wrap content in a div with part-{name} class */
  wrap?: boolean
}

/**
 * A part in the composition structure.
 */
type Part = {
  config: PartConfig
  render: () => TemplateResult | typeof nothing
}

const strippedHTML = stripWhitespace(html)

/**
 * Type guard for valid template content.
 */
const isValidContent = (content: unknown): content is TemplateResult => {
  return content !== nothing && content !== undefined && content !== null
}

/**
 * Creates a composer that helps build complex component structures with nested parts,
 * conditional rendering, and automatic class naming.
 *
 * The composer supports:
 * - Nested part structures
 * - Conditional rendering
 * - Slot handling
 * - Automatic class naming based on part structure
 * - Custom wrappers
 * - Flexible content composition
 *
 * @example
 * ```typescript
 * #Parts = {
 *   Root: this.#Compose.Part({
 *     className: this.#classes,
 *     parts: {
 *       Header: this.#Compose.Part({
 *         slot: 'header',
 *         wrap: true,
 *         conditions: {
 *           Image: () => !!this.src
 *         },
 *         templates: {
 *           Image: () => html`<gds-img src=${this.src}></gds-img>`
 *         },
 *         wrapper: (content) =>
             html`<header class="custom-wrap">${content}</header>`,
 *       })
 *     }
 *   })
 * }
 * ```
 *
 * @param host The host element for slot queries
 */
export const createComposer = (host: HTMLElement) => {
  /**
   * Wraps content with appropriate element and classes.
   * Uses custom wrapper if provided, otherwise creates a div with appropriate classes.
   */
  const wrapContent = (
    content: TemplateResult,
    config: PartConfig,
    name: string,
  ) => {
    if (config.wrapper) {
      return config.wrapper(content)
    }

    // Always wrap if there's className, regardless of wrap flag
    if (config.className || config.wrap) {
      // For debugging
      console.log('Classes:', config.className)

      const classes = {
        ...(typeof config.className === 'function'
          ? config.className()
          : config.className || {}),
        ...(config.wrap ? { [`part-${name.toLowerCase()}`]: true } : {}),
      }

      return strippedHTML`<div class=${classMap(classes)}>${content}</div>`
    }

    return content
  }

  /**
   * Creates a part with rendering logic for nested structures, slots, and conditional content.
   * Automatically handles class naming based on the part's position in the structure.
   */
  const createPart = (config: PartConfig, name = 'root'): Part => {
    const part: Part = {
      config,
      render: () => {
        // Handle nested parts
        if (config.parts) {
          const renderedParts = Object.entries(config.parts)
            .map(([childName, childPart]) => {
              const child = createPart(childPart.config, childName)
              return child.render()
            })
            .filter(isValidContent)

          if (renderedParts.length) {
            return wrapContent(strippedHTML`${renderedParts}`, config, name)
          }
        }

        // Handle slot content
        if (config.slot && host.querySelector(`[slot="${config.slot}"]`)) {
          const content = strippedHTML`<slot name="${config.slot}"></slot>`
          return wrapContent(content, config, name)
        }

        // Handle conditional content
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

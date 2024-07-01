import { css } from 'lit'
import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../../gds-element'
import { tokens } from '../../../tokens.style'
import { styleExpressionProperty } from '../../../utils/decorators/style-expression-property'

import TextCSS from './text.style.css'

/**
 * `gds-text` is a custom element that provides a flexible text system.
 * For accessibility reasons, it is recommended to use the `gds-text` element to display text content with flexibility like changing the tag, wrap the text and max length in characters.
 *
 * @element gds-text
 * @status beta
 *
 */
@gdsCustomElement('gds-text')
export class GdsText extends GdsElement {
  // static styles = [tokens, TextCSS, ]

  static styles = [tokens, TextCSS]

  /**
   * Controls the tag of the text.
   * Supports all valid HTML tags like h1, h2, h3, h4, h5, h6, p, span, etc.
   *
   * @property tag
   */
  @property({ type: String })
  tag = 'p'

  /**
   * Controls the size of the text.
   * Supports all typography size tokens from the design system.
   *
   * You can apply size like this:
   * ```html
   * <gds-text size="body-medium"></gds-text>
   * ```
   *
   * These are the available values you can use to define size:
   *
   * `label-overline`,
   * `label-input-medium`,
   * `label-input-large`,
   * `label-information-medium`,
   * `label-information-large`,
   * `label-small`,
   * `label-medium`,
   * `label-large`,
   * `body-small`,
   * `body-medium`,
   * `body-large`,
   * `title-small`,
   * `title-medium`,
   * `title-large`,
   * `headline-small`,
   * `headline-medium`,
   * `headline-large`,
   * `display-small`,
   * `display-medium`,
   * `display-large`,
   *
   * @property size
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
    styleTemplate: (prop, values) => {
      const size = values[0]
      return `font-size: var(--gds-text-size-${size}); line-height: var(--gds-text-line-height-${size});`
    },
  })
  size?: string

  /**
   * @property margin
   * Controls the margin of the text.
   * Supports all the default margin values.
   */
  @styleExpressionProperty()
  margin?: string

  /**
   * @property wrap
   * Controls the text-wrap property of the text.
   * Supports all valid CSS text-wrap values.
   */
  @styleExpressionProperty({
    property: 'text-wrap',
    valueTemplate: (v) => v,
  })
  wrap?: string

  /**
   * @property transform
   * Controls the text-transform property of the text.
   * Supports all valid CSS text-transform values.
   */
  @styleExpressionProperty({
    property: 'text-transform',
    valueTemplate: (v) => v,
  })
  transform?: string

  /**
   * @property length
   * Controls the max length of the text in characters.
   * Length is by defualt in characters to keep conistency with the text content.
   *
   * You can apply length like this:
   * ```html
   * <gds-text length="50"></gds-text>
   * ```
   */
  @styleExpressionProperty({
    property: 'max-width',
    valueTemplate: (v) => `${v}ch`,
  })
  length?: string

  /**
   * @property max
   * Controls the max-width property of the text.
   * Supports all valid CSS max-width values.
   */
  @styleExpressionProperty({
    property: 'min-width',
    valueTemplate: (v) => `${v}ch`,
  })
  min?: string

  /**
   * @property align
   * Controls the text-align property of the text.
   * Supports all valid CSS text-align values.
   */
  @styleExpressionProperty({
    property: 'text-align',
    valueTemplate: (v) => v,
  })
  align?: string

  @styleExpressionProperty({
    property: '--_lines',
    valueTemplate: (v) => v,
  })
  lines?: number

  createTag() {
    const tag = document.createElement(this.tag)
    tag.appendChild(document.createElement('slot'))
    return tag
  }

  @styleExpressionProperty({
    property: 'color',
    valueTemplate: (v) => {
      const [colorName, transparency] = v.split('/')
      if (transparency) {
        return `color-mix(in srgb, var(--gds-sys-color-${colorName}) ${parseFloat(transparency) * 100}%, transparent 0%)`
      } else {
        return `var(--gds-sys-color-${colorName})`
      }
    },
  })
  color?: string

  render() {
    return html`${this.createTag()}`
  }
}

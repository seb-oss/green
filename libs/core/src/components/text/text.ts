import { css } from 'lit'
import { property } from 'lit/decorators.js'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'

import TextCSS from './text.style.css'

/**
 * @element gds-text
 * `gds-text` is a custom element that provides a flexible text system.
 * For accessibility reasons, it is recommended to use the `gds-text` element to display text content with flexibility like changing the tag, wrap the text and max length in characters.
 *
 * @status beta
 *
 */
@gdsCustomElement('gds-text')
export class GdsText extends GdsElement {
  // static styles = [tokens, TextCSS, ]

  static styles = [
    tokens,
    TextCSS,
    css`
      // .truncate {
      //   display: -webkit-box;
      //   -webkit-box-orient: vertical;
      //   overflow: hidden;
      // }
    `,
  ]

  /**  use line clamp instead 
  https://developer.mozilla.org/en-US/docs/Web/CSS/-webkit-line-clamp
  */

  /**
   * @property tag
   * Controls the tag of the text.
   * Supports all valid HTML tags like h1, h2, h3, h4, h5, h6, p, span, etc.
   */
  @property({ type: String })
  tag = 'p'

  /**
   * @property size
   * Controls the size of the text.
   * Supports all the size tokens from the design system.
   * You can apply size like this:
   * ```html
   * <gds-text size="xs"></gds-text>
   * ```
   * The above example will apply the size of xs.
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
    styleTemplate: (prop, values) => {
      const size = values[0]
      return `font-size: var(--gds-text-size-${size}); line-height: var(--gds-sys-typography-line-height-${size});`
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

  render() {
    return html`${this.createTag()}`
  }
}

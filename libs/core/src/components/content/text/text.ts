import { html, unsafeStatic } from 'lit/static-html.js'
import { property } from 'lit/decorators.js'
import { gdsCustomElement } from '../../../utils/helpers/custom-element-scoping'
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
  static styles = [tokens, TextCSS]

  /**
   * Controls the tag of the text.
   * Supports all valid HTML tags like h1, h2, h3, h4, h5, h6, p, span, etc.
   *
   * @property tag
   */
  @property({ type: String })
  tag = 'span'

  /**
   * Controls the size of the text.
   * Supports all typography size tokens from the design system.
   *
   * You can apply size like this:
   * ```html
   * <gds-text size="body-m"></gds-text>
   * ```
   *
   * These are the available values you can use to define size:
   *
   * `heading-xl`,
   * `heading-l`,
   * `heading-m`,
   * `heading-s`,
   * `heading-xs`,
   * `heading-2xs`,
   * `detail-m`,
   * `detail-s`,
   * `detail-xs`,
   * `body-l`,
   * `body-m`,
   * `body-s`,
   * `display-2xl`,
   * `display-xl`,
   * `display-l`,
   * `display-m`,
   * `display-s `,
   * `preamble-2xl`,
   * `preamble-xl`,
   * `preamble-l`,
   * `preamble-m`,
   * `preamble-s`,
   * `preamble-xs`,
   *
   * @property size
   */
  @styleExpressionProperty({
    valueTemplate: (v) => `${v}`,
    selector: '[tag]',
    styleTemplate: (prop, values) => {
      const size = values[0]
      const styleSize = `font-size: var(--gds-text-size-${size});`
      const styleLine = `line-height: var(--gds-text-line-height-${size});`
      return styleSize + styleLine
    },
  })
  size?: string

  /**
   * Controls the `font-weight` of the text.
   * Supports all the weigh tokens.
   *
   * @property weight
   */
  @styleExpressionProperty({
    property: 'font-weight',
    selector: '[tag]',
    valueTemplate: (v) => `var(--gds-text-weight-${v})`,
  })
  weight?: string

  /**
   * Controls the margin of the text.
   * Supports all the default margin values.
   *
   * @property margin
   */
  @styleExpressionProperty({
    property: 'margin',
    selector: '[tag]',
    valueTemplate: (v) => v,
  })
  margin?: string

  /**
   * Controls the text-wrap property of the text.
   * Supports all valid CSS text-wrap values.
   *
   * @property wrap
   */
  @styleExpressionProperty({
    property: 'text-wrap',
    selector: '[tag]',
    valueTemplate: (v) => v,
  })
  wrap?: string

  /**
   * Controls the text-transform property of the text.
   * Supports all valid CSS text-transform values.
   *
   * @property transform
   */
  @styleExpressionProperty({
    property: 'text-transform',
    selector: '[tag]',
    valueTemplate: (v) => v,
  })
  transform?: string

  /**
   * Controls the max length of the text in characters.
   * Length is by defualt in characters to keep conistency with the text content.
   *
   * You can apply length like this:
   *
   * ```html
   * <gds-text length="50"></gds-text>
   * ```
   *
   * @property length
   */
  @styleExpressionProperty({
    property: 'max-width',
    selector: '[tag]',
    valueTemplate: (v) => `${v}ch`,
  })
  length?: string

  /**
   * Controls the max-width property of the text.
   * Supports all valid CSS max-width values.
   *
   * @property max
   */
  @styleExpressionProperty({
    property: 'min-width',
    selector: '[tag]',
    valueTemplate: (v) => `${v}ch`,
  })
  min?: string

  /**
   * Controls the text-align property of the text.
   * Supports all valid CSS text-align values.
   *
   * @property align
   */
  @styleExpressionProperty({
    property: 'text-align',
    selector: '[tag]',
    valueTemplate: (v) => v,
  })
  align?: string

  /**
   * Controls the number of lines it should show.
   *
   * @property lines
   */
  @styleExpressionProperty({
    property: '--_lines',
    selector: '[tag]',
    valueTemplate: (v) => v,
  })
  lines?: number

  /**
   * Controls the color property of the text.
   * Supports all the color tokens from the design system.
   *
   * @property color
   *
   * @example
   * ```html
   * <gds-text color="primary"></gds-text>
   * ```
   */
  @styleExpressionProperty({
    property: 'color',
    selector: '[tag]',
    valueTemplate: (v) => {
      const [colorName, transparency] = v.split('/')
      if (transparency) {
        return `color-mix(in srgb, var(--gds-color-${colorName}) ${parseFloat(transparency) * 100}%, transparent 0%)`
      } else {
        return `var(--gds-color-${colorName})`
      }
    },
  })
  color?: string

  render() {
    const TAG_ENCODE = encodeURI(this.tag)
    const TAG = unsafeStatic(TAG_ENCODE)
    return html`<${TAG} tag><slot></slot></${TAG}>`
  }
}

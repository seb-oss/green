import { property } from 'lit/decorators.js'
import { html, unsafeStatic } from 'lit/static-html.js'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsDiv } from '../div/div.component'
import { defaultStyles } from './default-typography.styles'
import textStyles from './text.style'

/**
 * @element gds-text
 * @status beta
 *
 * `gds-text` extends `gds-div` and adds the ability to set an internal tag name, such as `h1`, `h2`, etc. It also adds line clamping and text decoration properties.
 *
 * Style expression properties apply to the outer element unless otherwise specified.
 */
@gdsCustomElement('gds-text')
export class GdsText extends GdsDiv {
  static styles = [tokens, defaultStyles, textStyles]

  /**
   * Controls the tag of the text.
   * Supports all valid HTML tags like h1, h2, h3, h4, h5, h6, p, span, etc.
   */
  @property({ type: String })
  tag = 'span'

  /**
   * Style Expression Property that controls the `font-size` property.
   * Supports all typography size tokens from the design system.
   */
  @styleExpressionProperty({
    selector: '[tag]',
    styleTemplate: (_prop, values) => {
      const size = values[0]
      const styleSize = `font-size: var(--gds-sys-text-size-${size});`
      const styleLine = `line-height: var(--gds-sys-text-line-height-${size});`
      return styleSize + styleLine
    },
  })
  'font-size'?: string

  /**
   * Style Expression Property that controls the `font-weight` property.
   * Supports all typography weight tokens from the design system.
   */
  @styleExpressionProperty({
    selector: '[tag]',
    valueTemplate: (v) => `var(--gds-sys-text-weight-${v})`,
  })
  'font-weight'?: string

  /**
   * Controls the text-transform property of the text.
   * Supports all valid CSS text-transform values.
   */
  @styleExpressionProperty()
  'text-transform'?: string

  /**
   * Controls the text-decoration property of the inner element.
   * Supports all valid CSS text-decoration values.
   */
  @styleExpressionProperty({
    selector: '[tag]',
  })
  'text-decoration'?: string

  /**
   * Controls the number of lines it should show.
   */
  @styleExpressionProperty({
    selector: '[tag]',
    styleTemplate: (_prop, values) => {
      return `overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-line-clamp: ${values[0]};
      -webkit-box-orient: vertical;`
    },
  })
  lines?: number

  render() {
    const TAG = unsafeStatic(encodeURI(this.tag))
    return html`<${TAG} tag><slot></slot></${TAG}>`
  }
}

import { property } from 'lit/decorators.js'
import { html, unsafeStatic } from 'lit/static-html.js'

import { tokens } from '../../tokens.style'
import { styleExpressionProperty } from '../../utils/decorators/style-expression-property'
import { gdsCustomElement } from '../../utils/helpers/custom-element-scoping'
import { GdsContainer } from '../container'
import { defaultStyles } from './default-typography.styles'
import textStyles from './text.style'

/**
 * `gds-text` is a custom element that provides a flexible text system.
 * For accessibility reasons, it is recommended to use the `gds-text` element to display text content with flexibility like changing the tag, wrap the text and max length in characters.
 *
 * @element gds-text
 * @status beta
 *
 */
@gdsCustomElement('gds-text')
export class GdsText extends GdsContainer {
  static styles = [tokens, defaultStyles, textStyles]

  /**
   * Controls the tag of the text.
   * Supports all valid HTML tags like h1, h2, h3, h4, h5, h6, p, span, etc.
   *
   * @property tag
   */
  @property({ type: String })
  tag = 'span'

  /**
   * Controls the text-transform property of the text.
   * Supports all valid CSS text-transform values.
   *
   * @property transform
   */
  @styleExpressionProperty()
  'text-transform'?: string

  /**
   * Controls the text-decoration property of the text.
   * Supports all valid CSS text-decoration values.
   *
   * @property text-decoration
   */
  @styleExpressionProperty({
    selector: '[tag]',
  })
  'text-decoration'?: string

  /**
   * Controls the number of lines it should show.
   *
   * @property lines
   */
  @styleExpressionProperty({
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

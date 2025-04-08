import { property } from 'lit/decorators.js'

import { GdsElement } from '../../gds-element'
import { gdsCustomElement, html } from '../../scoping'
import styles from './blur.styles'

/**
 * @element gds-blur
 * A container that applies a blur effect to its content.
 *
 * The component wraps the target element and applies a blur effect based
 * on the `shouldBlur` property. When active, the content behind it will be visually blurred.
 *
 * @slot - Content to be blurred.
 *
 * @example
 * <gds-blur should-blur>
 *   <div>Sensitive content here</div>
 * </gds-blur>
 *
 * @status beta
 */
@gdsCustomElement('gds-blur')
export class GdsBlur extends GdsElement {
  static styles = styles

  render() {
    return html`<slot></slot>`
  }
}

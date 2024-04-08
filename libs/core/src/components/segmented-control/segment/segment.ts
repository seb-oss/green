import { property } from 'lit/decorators.js'
import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '../../../transitional-styles'
import { watch } from '../../../utils/decorators/watch'
import { unsafeCSS } from 'lit'

import { tokens } from '../../../tokens.style'
import style from './segment.style.css'

/**
 * @element gds-segment
 * @internal
 */
@gdsCustomElement('gds-segment')
export class GdsSegment extends GdsElement {
  static styles = [...tokens, unsafeCSS(style)]

  /**
   * Whether the segment is selected
   * @attr selected
   */
  @property({ type: Boolean, reflect: true })
  selected = false

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-segmented')

    this.setAttribute('role', 'listitem')
  }

  render() {
    return html`<button aria-selected=${String(this.selected)}>
      <slot></slot>
    </button>`
  }
}

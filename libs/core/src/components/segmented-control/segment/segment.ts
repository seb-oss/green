import { property } from 'lit/decorators.js'
import { GdsElement } from '@sebgroup/green-core/gds-element'
import {
  gdsCustomElement,
  html,
} from '@sebgroup/green-core/utils/helpers/custom-element-scoping'
import { TransitionalStyles } from '@sebgroup/green-core/transitional-styles'
import { unsafeCSS } from 'lit'

import { tokens } from '@sebgroup/green-core/tokens.style'
import style from './segment.style.css'

/**
 * @element gds-segment
 */
@gdsCustomElement('gds-segment')
export class GdsSegment<ValueT = any> extends GdsElement {
  static styles = [...tokens, unsafeCSS(style)]

  /**
   * Whether the segment is selected
   * @attr selected
   */
  @property({ type: Boolean, reflect: true })
  selected = false

  /**
   * Value can be used to tie arbitrary data to the segment.
   * @attr value
   */
  @property()
  value?: ValueT

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-segmented')

    this.setAttribute('role', 'listitem')
  }

  render() {
    return html`<button aria-current=${String(this.selected)}>
      <slot></slot>
    </button>`
  }
}

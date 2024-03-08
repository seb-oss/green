import { HTMLTemplateResult, unsafeCSS } from 'lit'
import { query, state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  getScopedTagName,
  html,
} from '../../utils/helpers/custom-element-scoping'

import './segment'
import type { GdsSegment } from './segment'

import { tokens } from '../../tokens.style'
import style from './segmented-control.style.css'

/**
 * @element gds-segmented-control
 * @internal
 */
@gdsCustomElement('gds-segmented-control')
export class GdsSegmentedControl extends GdsElement {
  static styles = [tokens, unsafeCSS(style)]

  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  @query('slot')
  private _elSlot!: HTMLSlotElement

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-segmented-control')
  }

  render() {
    return html`${this._tStyles}<slot
        gds-allow="gds-segment"
        @click=${this.#handleSegmentClick}
      ></slot>`
  }

  #handleSegmentClick = (event: Event) => {
    const segment = (event.target as HTMLElement).closest(
      getScopedTagName('gds-segment')
    ) as GdsSegment

    if (segment) {
      this._elSlot
        .assignedElements()
        .forEach((s) => ((s as GdsSegment).selected = false))

      segment.selected = true

      this.dispatchEvent(
        new CustomEvent('gds-segment-click', {
          detail: { segment },
          bubbles: true,
          composed: true,
        })
      )
    }
  }
}

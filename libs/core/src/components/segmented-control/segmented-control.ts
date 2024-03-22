import { HTMLTemplateResult, unsafeCSS } from 'lit'
import { query, queryAsync, state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  getScopedTagName,
  html,
} from '../../utils/helpers/custom-element-scoping'

import './segment/segment'
import type { GdsSegment } from './segment/segment'

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

  @queryAsync('slot')
  private _elSlot!: Promise<HTMLSlotElement>

  @query('#indicator')
  private _elIndicator!: HTMLDivElement

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-segmented-control')
    this.#updateIndicator()
  }

  render() {
    return html`${this._tStyles}<slot
        gds-allow="gds-segment"
        @click=${this.#handleSegmentClick}
      ></slot>
      <div id="indicator"></div>`
  }

  #updateIndicator = () => {
    this._elSlot.then((slot) => {
      const segment = slot
        .assignedElements()
        .find((s) => (s as GdsSegment).selected) as GdsSegment

      if (segment) {
        const { left, width } = segment.getBoundingClientRect()

        this._elIndicator.style.transform = `translateX(${segment.offsetLeft}px)`
        this._elIndicator.style.width = `${width}px`
      }
    })
  }

  #handleSegmentClick = (event: Event) => {
    const segment = (event.target as HTMLElement).closest(
      getScopedTagName('gds-segment')
    ) as GdsSegment

    if (segment) {
      this._elSlot.then((slot) => {
        slot
          .assignedElements()
          .forEach((s) => ((s as GdsSegment).selected = false))

        segment.selected = true

        this.#updateIndicator()

        this.dispatchEvent(
          new CustomEvent('gds-segment-click', {
            detail: { segment },
            bubbles: true,
            composed: true,
          })
        )
      })
    }
  }
}

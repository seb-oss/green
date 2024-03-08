import { property } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { watch } from '../../utils/decorators/watch'

/**
 * @element gds-segment
 * @internal
 */
@gdsCustomElement('gds-segment')
export class GdsSegment extends GdsElement {
  @property({ type: Boolean, reflect: true })
  selected = false

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'button')
    this.setAttribute('tabindex', '0')
  }

  render() {
    return html`<slot></slot>`
  }

  @watch('selected')
  private _handleSelectedChange() {
    this.setAttribute('aria-selected', String(this.selected))
  }
}

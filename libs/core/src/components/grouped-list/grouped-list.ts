import { HTMLTemplateResult } from 'lit'
import { state, property } from 'lit/decorators.js'
import { when } from 'lit/directives/when.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import { constrainSlots } from '../../utils/helpers'

/**
 * @element gds-grouped-list
 * @status beta
 *
 * Grouped lists are used to list many datapoints with labels in a structured way.
 */
@gdsCustomElement('gds-grouped-list')
export class GdsGroupedList extends GdsElement {
  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult
  /**
   * The label for the list that will render in the shadowDOM as the first <li> element in the list with the class `gds-list-heading`
   */
  @property()
  label = ''

  connectedCallback(): void {
    super.connectedCallback()
    constrainSlots(this)

    this.setAttribute('role', 'list')
    this.setAttribute('aria-label', this.label)
    TransitionalStyles.instance.apply(this, 'gds-grouped-list')
  }

  render() {
    return html`${this._tStyles}${when(
        this.label,
        () =>
          html`<li class="gds-list-heading" role="none" aria-hidden="true">
            ${this.label}
          </li>`
      )}<slot gds-allow="li"></slot>`
  }
}

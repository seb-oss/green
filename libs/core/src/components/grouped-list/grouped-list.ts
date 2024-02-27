import { HTMLTemplateResult } from 'lit'
import { state, property } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

/**
 * @element gds-grouped-list
 * @internal
 */
@gdsCustomElement('gds-grouped-list')
export class GdsGroupedList extends GdsElement {
  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult
  /**
   * The label for the list that will render in the shadowDOM as the first <li> element in the list with the class `gds-list-heading`
   */
  @property({ reflect: true })
  label = ''

  connectedCallback(): void {
    super.connectedCallback()

    this.setAttribute('role', 'list')
    TransitionalStyles.instance.apply(this, 'gds-grouped-list')
  }

  render() {
    return html`${this._tStyles}${this.label
        ? html`<li class="gds-list-heading">${this.label}</li>`
        : ''}<slot></slot>`
  }
}

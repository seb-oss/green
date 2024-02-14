import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'
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

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-grouped-list')
  }

  render() {
    return html`${this._tStyles}<slot></slot>`
  }
}

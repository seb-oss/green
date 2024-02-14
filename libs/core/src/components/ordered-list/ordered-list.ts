import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

/**
 * @element gds-ordered list
 * @internal
 */
@gdsCustomElement('gds-ordered-list')
export class GdsOrderedList extends GdsElement {
  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  connectedCallback(): void {
    super.connectedCallback()

    TransitionalStyles.instance.apply(this, 'gds-ordered-list')
  }

  render() {
    return html`${this._tStyles}<slot></slot>`
  }
}

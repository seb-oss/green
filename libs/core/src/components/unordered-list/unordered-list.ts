import { HTMLTemplateResult } from 'lit'
import { state } from 'lit/decorators.js'
import { GdsElement } from '../../gds-element'
import { TransitionalStyles } from '../../transitional-styles'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'

/**
 * @element gds-unordered-list
 * @internal
 */
@gdsCustomElement('gds-unordered-list')
export class GdsUnorderedList extends GdsElement {
  // Used for Transitional Styles in some legacy browsers
  @state()
  private _tStyles?: HTMLTemplateResult

  connectedCallback(): void {
    super.connectedCallback()

    // This component should have the same style as option, so we just apply `gds-option` here.
    TransitionalStyles.instance.apply(this, 'gds-unordered-list')
  }

  render() {
    return html`${this._tStyles}<slot></slot>`
  }
}

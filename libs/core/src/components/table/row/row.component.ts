import { css } from 'lit'

import { GdsElement } from '../../../gds-element'
import { tokens } from '../../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'

@gdsCustomElement('gds-table-row')
export class GdsTableRow extends GdsElement {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }

      .row {
        display: flex;
        flex-wrap: wrap;
        width: 100%;
      }

      @media (max-width: 768px) {
        .row {
          flex-direction: column;
        }
      }
    `,
  ]

  render() {
    return html`
      <div class="row" role="row">
        <slot></slot>
      </div>
    `
  }
}

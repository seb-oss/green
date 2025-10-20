import { css } from 'lit'

import { GdsElement } from '../../../gds-element'
import { tokens } from '../../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'

@gdsCustomElement('gds-table-head')
export class GdsTableHead extends GdsElement {
  static styles = [
    tokens,
    css`
      :host {
        flex: 1;
      }
      .header-cell {
        padding: var(--gds-sys-space-s);
        font-weight: var(--gds-sys-font-weight-bold);
        box-sizing: border-box;
      }

      /* Responsive styles */
      @media (max-width: 768px) {
        .header-cell {
          display: none; /* Hide headers on mobile */
        }
      }
    `,
  ]

  render() {
    return html`
      <div class="header-cell" role="columnheader" aria-sort="none">
        <slot></slot>
      </div>
    `
  }
}

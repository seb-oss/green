import { css } from 'lit'
import { property, query } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import { tokens } from '../../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'

@gdsCustomElement('gds-table-cell')
export class GdsTableCell extends GdsElement {
  @property({ type: String })
  header = ''

  static styles = [
    tokens,
    css`
      :host {
        flex: 1;
      }
      .cell {
        padding: var(--gds-sys-space-s);
        box-sizing: border-box;
      }

      .mobile-header {
        display: none;
      }

      @media (max-width: 768px) {
        .cell {
          width: 100%;
          display: flex;
          flex-direction: column;
        }

        .mobile-header {
          display: block;
        }
      }
    `,
  ]

  render() {
    return html`
      <div class="cell" role="cell">
        <div class="mobile-header">${this.header}</div>
        <slot></slot>
      </div>
    `
  }
}

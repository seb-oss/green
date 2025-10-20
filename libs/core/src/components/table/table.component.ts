import { css } from 'lit'

import { GdsElement } from '../../gds-element'
import { tokens } from '../../tokens.style'
import {
  gdsCustomElement,
  html,
} from '../../utils/helpers/custom-element-scoping'
import {
  withLayoutChildProps,
  withMarginProps,
  withSizeXProps,
} from '../../utils/mixins/declarative-layout-mixins'

@gdsCustomElement('gds-table')
export class GdsTable extends withSizeXProps(
  withMarginProps(withLayoutChildProps(GdsElement)),
) {
  static styles = [
    tokens,
    css`
      :host {
        display: block;
      }
      .table {
        display: flex;
        flex-direction: column;
        width: 100%;
        border: 1px solid black;
      }
    `,
  ]

  render() {
    return html`
      <div class="table" role="table" aria-label="Label">
        <slot name="header"></slot>
        <slot></slot>
      </div>
    `
  }
}

import { css } from 'lit'
import { property } from 'lit/decorators.js'
import { classMap } from 'lit/directives/class-map.js'

import type { ClassInfo } from 'lit/directives/class-map.js'

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

/**
 * @element gds-table
 *
 * @status beta
 *
 */
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
      }

      .header {
        background: var(--gds-sys-color-l2-neutral-01);
        border-radius: var(--gds-sys-radius-m);
        padding: var(--gds-sys-space-s);
      }

      ::slotted(gds-table-row) {
        border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
        padding-inline: var(--gds-sys-space-s) var(--gds-sys-space-m);
      }

      ::slotted(gds-table-row:last-child) {
        border-bottom: none;
      }

      @media (max-width: 768px) {
        .header {
          display: none;
        }
      }
    `,
  ]

  @property({ type: Boolean, reflect: false })
  responsive = false

  classes() {
    const classes: ClassInfo = {
      table: true,
      'table-responsive': this.responsive,
    }
    return classMap(classes)
  }

  render() {
    return html`
      <div class=${this.classes} role="table" aria-label="Label">
        <div class="header">
          <slot name="header"></slot>
        </div>
        <slot></slot>
      </div>
    `
  }
}

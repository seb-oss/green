import { nothing, unsafeCSS } from 'lit'
import { property, query } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'

import '../../flex'
import '../../text'

import style from './cell.styles.css?inline'

/**
 * @element gds-table-cell
 */
@gdsCustomElement('gds-table-cell')
export class GdsTableCell extends GdsElement {
  static styles = [unsafeCSS(style)]

  @property()
  variant = ''

  @property({ type: Boolean })
  draggable = false

  render() {
    return html`
      <gds-flex
        align-items="center"
        justify-content="space-between"
        padding="xs m"
        border-style="solid"
        border-width="0 0 0 4xs"
        min-height="100%"
        flex="1"
        .background=${this.variant}
        .color=${this.variant}
        .border-color=${this.variant}
        draggable=${this.draggable}
        @dragstart=${(e: DragEvent) =>
          this.dispatchEvent(new CustomEvent('cell-dragstart', { detail: e }))}
        @dragover=${(e: DragEvent) =>
          this.dispatchEvent(new CustomEvent('cell-dragover', { detail: e }))}
        @dragend=${(e: DragEvent) =>
          this.dispatchEvent(new CustomEvent('cell-dragend', { detail: e }))}
        @drop=${(e: DragEvent) =>
          this.dispatchEvent(new CustomEvent('cell-drop', { detail: e }))}
      >
        <gds-flex gap="s" align-items="center">
          <slot name="lead"></slot>
          <gds-flex class="cell-value" flex-direction="column" flex="1">
            <slot></slot>
            <gds-text tag="small" color="secondary">
              <slot name="supporting-text"></slot>
            </gds-text>
          </gds-flex>
        </gds-flex>
        <slot name="trail"></slot>
      </gds-flex>
    `
  }
}

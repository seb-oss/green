import { nothing, unsafeCSS } from 'lit'
import { property, query, state } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import style from './row.styles.css?inline'

import '../../input'
import '../../dropdown'
import '../../card'
import '../../div'
import '../../button'
import '../../icon/icons/dot-grid-two'
import '../../icon/icons/dot-grid-one-vertical'
import '../../icon/icons/chevron-right'

/**
 * @element gds-table-row
 * @slot - Default slot for table cells
 * @slot options - Slot for custom options menu content
 */
@gdsCustomElement('gds-table-row')
export class GdsTableRow extends GdsElement {
  static styles = [unsafeCSS(style)]

  @property({ type: Boolean })
  sortable = false

  @property({ type: Boolean })
  selectable = false

  @property({ type: Boolean })
  selected = false

  @property({ type: Boolean })
  hasOptions = false

  @property({ type: String })
  href = ''

  @property({ type: String })
  target?: '_blank' | '_self'

  @property({ type: Number })
  rowId?: number

  @state()
  private isDragging = false

  @state()
  private showOptions = false

  private handleDragStart(e: DragEvent) {
    if (!this.sortable) return
    this.isDragging = true
    e.dataTransfer?.setData('text/plain', this.rowId?.toString() || '')
    this.dispatchEvent(
      new CustomEvent('row-drag-start', {
        detail: { rowId: this.rowId },
      }),
    )
  }

  private handleDragEnd() {
    this.isDragging = false
    this.dispatchEvent(new CustomEvent('row-drag-end'))
  }

  private handleDragOver(e: DragEvent) {
    if (!this.sortable) return
    e.preventDefault()
    this.dispatchEvent(
      new CustomEvent('row-drag-over', {
        detail: { rowId: this.rowId },
      }),
    )
  }

  private handleDrop(e: DragEvent) {
    if (!this.sortable) return
    e.preventDefault()
    const draggedId = e.dataTransfer?.getData('text/plain')
    this.dispatchEvent(
      new CustomEvent('row-drop', {
        detail: {
          sourceId: parseInt(draggedId || '0'),
          targetId: this.rowId,
        },
      }),
    )
  }

  private handleSelect(e: Event) {
    const checked = (e.target as HTMLInputElement).checked
    this.selected = checked
    this.dispatchEvent(
      new CustomEvent('row-select', {
        detail: {
          rowId: this.rowId,
          selected: checked,
        },
      }),
    )
  }

  private handleRowClick(e: MouseEvent) {
    // Don't trigger if clicking on interactive elements
    if ((e.target as HTMLElement).closest('input, button, .gds-row-options')) {
      return
    }

    if (this.href) {
      if (this.target === '_blank') {
        window.open(this.href, '_blank')
      } else {
        window.location.href = this.href
      }
    }

    this.dispatchEvent(
      new CustomEvent('row-click', {
        detail: { rowId: this.rowId },
      }),
    )
  }

  private toggleOptions() {
    this.showOptions = !this.showOptions
  }

  render() {
    const rowClasses = {
      'gds-table-row': true,
      dragging: this.isDragging,
      selected: this.selected,
      clickable: !!this.href,
      'has-options': this.hasOptions,
    }

    return html`
      <div
        class=${Object.entries(rowClasses)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ')}
        draggable=${this.sortable}
        @dragstart=${this.handleDragStart}
        @dragend=${this.handleDragEnd}
        @dragover=${this.handleDragOver}
        @drop=${this.handleDrop}
        @click=${this.handleRowClick}
        role=${this.href ? 'link' : 'row'}
        tabindex=${this.href ? '0' : '-1'}
      >
        ${this.sortable
          ? html`
              <div class="gds-row-drag">
                <gds-icon-dot-grid-two></gds-icon-dot-grid-two>
              </div>
            `
          : nothing}
        ${this.selectable
          ? html`
              <div class="gds-row-select">
                <input
                  type="checkbox"
                  .checked=${this.selected}
                  @change=${this.handleSelect}
                />
              </div>
            `
          : nothing}

        <div class="gds-row-content">
          <slot></slot>
        </div>

        ${this.hasOptions
          ? html`
              <div class="gds-row-options">
                <gds-button
                  size="small"
                  rank="tertiary"
                  @click=${this.toggleOptions}
                >
                  <gds-icon-dot-grid-one-vertical></gds-icon-dot-grid-one-vertical>
                </gds-button>
                ${this.showOptions
                  ? html`
                      <div class="options-menu">
                        <slot name="options">
                          <gds-dropdown>
                            <gds-option
                              @click=${() =>
                                this.dispatchEvent(new CustomEvent('row-edit'))}
                            >
                              Edit
                            </gds-option>
                            <gds-option
                              @click=${() =>
                                this.dispatchEvent(
                                  new CustomEvent('row-delete'),
                                )}
                            >
                              Delete
                            </gds-option>
                          </gds-dropdown>
                        </slot>
                      </div>
                    `
                  : nothing}
              </div>
            `
          : nothing}
        ${this.href
          ? html`
              <gds-icon-chevron-right
                class="link-icon"
              ></gds-icon-chevron-right>
            `
          : nothing}
      </div>
    `
  }
}

import { nothing, unsafeCSS } from 'lit'
import { property, query, state } from 'lit/decorators.js'

import { GdsElement } from '../../../gds-element'
import {
  gdsCustomElement,
  html,
} from '../../../utils/helpers/custom-element-scoping'
import style from './cell.styles.css?inline'

import '../../input'
import '../../dropdown'
import '../../card'
import '../../div'
import '../../button'
import '../../icon/icons/floppy-disk'
import '../../icon/icons/cross-small'

interface EditableContent {
  value: string
  originalValue: string
}

/**
 * @element gds-table-cell
 * @slot lead - Slot for leading content (icon, badge, image)
 * @slot content - Slot for main cell content
 */
@gdsCustomElement('gds-table-cell')
export class GdsTableCell extends GdsElement {
  static styles = [unsafeCSS(style)]

  @property({ type: String })
  value = ''

  @property({ type: Boolean })
  editable = false

  @property({ type: String })
  href = ''

  @property({ type: String })
  target?: '_blank' | '_self'

  @property({ type: String })
  type: 'text' | 'number' | 'dropdown' = 'text'

  @state()
  private isEditing = false

  @state()
  private editValue: EditableContent | null = null

  @query('slot:not([name])')
  private defaultSlot!: HTMLSlotElement

  private handleEditStart() {
    if (!this.editable || this.href) return
    this.isEditing = true
    this.editValue = {
      value: this.value,
      originalValue: this.value,
    }
    this.requestUpdate()
  }

  private handleEditCancel() {
    this.isEditing = false
    this.editValue = null
    this.requestUpdate()
  }

  private handleEditSave() {
    if (!this.editValue) return

    if (this.editValue.value !== this.editValue.originalValue) {
      this.value = this.editValue.value
      this.dispatchEvent(
        new CustomEvent('cell-change', {
          detail: {
            oldValue: this.editValue.originalValue,
            newValue: this.editValue.value,
          },
        }),
      )
    }

    this.isEditing = false
    this.editValue = null
    this.requestUpdate()
  }

  private handleKeyDown(e: KeyboardEvent) {
    if (e.key === 'Enter') {
      this.handleEditSave()
    } else if (e.key === 'Escape') {
      this.handleEditCancel()
    }
  }

  private handleCellClick(e: MouseEvent) {
    if (this.href) {
      // If it's not an actual link click (like on the edit button), navigate
      if (!(e.target as HTMLElement).closest('button')) {
        if (this.target === '_blank') {
          window.open(this.href, '_blank')
        } else {
          window.location.href = this.href
        }
      }
    }
  }

  private renderEditMode() {
    return html`
      <div class="gds-cell editing">
        <div class="cell-content">
          <div class="cell-lead">
            <slot name="lead"></slot>
          </div>
          <div class="cell-edit-input">
            <gds-input
              size="small"
              .value=${this.editValue?.value || ''}
              @input=${(e: InputEvent) => {
                this.editValue = {
                  ...this.editValue!,
                  value: (e.target as HTMLInputElement).value,
                }
              }}
              @keydown=${this.handleKeyDown}
            ></gds-input>
          </div>
        </div>
        <div class="cell-actions">
          <gds-button
            size="xs"
            rank="tertiary"
            variant="positive"
            @click=${this.handleEditSave}
          >
            <gds-icon-floppy-disk></gds-icon-floppy-disk>
          </gds-button>
          <gds-button
            size="xs"
            rank="tertiary"
            variant="negative"
            @click=${this.handleEditCancel}
          >
            <gds-icon-cross-small></gds-icon-cross-small>
          </gds-button>
        </div>
      </div>
    `
  }

  render() {
    if (this.isEditing) {
      return this.renderEditMode()
    }

    const cellClasses = {
      'gds-cell': true,
      editable: this.editable && !this.href,
      clickable: !!this.href,
    }

    return html`
      <div
        class=${Object.entries(cellClasses)
          .filter(([, value]) => value)
          .map(([key]) => key)
          .join(' ')}
        @dblclick=${this.handleEditStart}
        @click=${this.handleCellClick}
        role=${this.href ? 'link' : 'cell'}
        tabindex=${this.href ? '0' : '-1'}
      >
        <div class="cell-content">
          <div class="cell-lead">
            <slot name="lead"></slot>
          </div>
          <div class="cell-value">
            <slot @slotchange=${this.handleSlotChange}></slot>
            ${!this.hasSlottedContent ? this.value : ''}
          </div>
        </div>
        ${this.editable && !this.href
          ? html`
              <gds-button
                size="xs"
                rank="tertiary"
                class="edit-button"
                @click=${this.handleEditStart}
              >
                <gds-icon-text-edit></gds-icon-text-edit>
              </gds-button>
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

  private hasSlottedContent = false

  private handleSlotChange() {
    this.hasSlottedContent = this.defaultSlot?.assignedNodes().length > 0
    this.requestUpdate()
  }
}

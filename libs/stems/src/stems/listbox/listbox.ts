import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Ref, createRef, ref } from 'lit/directives/ref.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { TransitionalStyles } from '../../transitional-styles'

import { GdsOption } from './option'
import 'reflect-metadata'
import style from './listbox.styles'

/**
 * @element gds-listbox
 *
 * A listbox is a widget that allows the user to select one or more items from a list of choices.
 * This primitive corresponds to the aria listbox role: https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Roles/listbox_role
 *
 * The listbox handles keyboard navigation and manages focus and selection of options.
 *
 * Can be used together with the `gds-option` primitive.
 *
 * @slot - The default slot. Only `gds-option` elements should be used here.
 */
@customElement('gds-listbox')
export class GdsListbox extends LitElement {
  static styles = unsafeCSS(style)

  #slotRef: Ref<HTMLSlotElement> = createRef()

  constructor() {
    super()
  }

  /**
   * Returns a list of all `gds-option` elements in the listbox.
   */
  get optionElements() {
    let slot = this.#slotRef.value
    if (!slot) return []

    // Unwrap nested slots
    while (slot.assignedElements()[0].nodeName === 'SLOT') {
      slot = slot.assignedElements()[0] as HTMLSlotElement
    }

    return (slot.assignedElements() as GdsOption[]) || []
  }

  /**
   * Returns a list of all visible `gds-option` elements in the listbox.
   */
  get visibleOptionElements() {
    return this.optionElements.filter((el) => !el.hidden)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'listbox')
    TransitionalStyles.instance.apply(this, 'gds-listbox')

    this.addEventListener('keydown', (e) => {
      if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return
      if (!(e.target instanceof GdsOption)) return

      e.stopPropagation()
      e.preventDefault()

      if (e.key === 'ArrowDown') {
        const nextOptionIndex = this.visibleOptionElements.indexOf(e.target) + 1
        const nextItem = this.visibleOptionElements[nextOptionIndex]
        nextItem?.focus()
      }
      if (e.key === 'ArrowUp') {
        const prevOptionIndex = this.visibleOptionElements.indexOf(e.target) - 1
        const prevItem = this.visibleOptionElements[prevOptionIndex]
        prevItem?.focus()
      }
    })

    this.addEventListener('select', (e) => {
      const option = e.target as GdsOption
      Array.from(this.optionElements).forEach((el) => {
        if (el !== option) el.selected = false
      })
    })
  }

  /**
   * Focuses the first option in the listbox.
   * If the listbox is empty, nothing happens.
   *
   * @public
   */
  focus() {
    const firstItem = this.visibleOptionElements[0]
    firstItem?.focus()
  }

  render() {
    return html`<slot ${ref(this.#slotRef)}></slot>`
  }
}

export const GdsListboxReact = createComponent({
  tagName: 'gds-listbox',
  elementClass: GdsListbox,
  react: React,
})

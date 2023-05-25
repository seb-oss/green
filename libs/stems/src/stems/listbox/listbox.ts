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

  /**
   * Returns a list of all selected `gds-option` elements in the listbox.
   */
  get selectedOptionElements() {
    return this.optionElements.filter((el) => el.selected)
  }

  connectedCallback(): void {
    super.connectedCallback()
    this.setAttribute('role', 'listbox')
    TransitionalStyles.instance.apply(this, 'gds-listbox')

    this.addEventListener('keydown', (e) => {
      if (!(e.target instanceof GdsOption)) return

      let handled = false

      if (e.key === 'ArrowDown') {
        const nextOptionIndex = this.visibleOptionElements.indexOf(e.target) + 1
        const nextItem = this.visibleOptionElements[nextOptionIndex]
        nextItem?.focus()
        handled = true
        //
      } else if (e.key === 'ArrowUp') {
        const prevOptionIndex = this.visibleOptionElements.indexOf(e.target) - 1
        const prevItem = this.visibleOptionElements[prevOptionIndex]
        prevItem?.focus()
        handled = true
        //
      } else if (e.key === 'Home') {
        this.visibleOptionElements[0]?.focus()
        handled = true
        //
      } else if (e.key === 'End') {
        this.visibleOptionElements[
          this.visibleOptionElements.length - 1
        ]?.focus()
        handled = true
        //
      } else {
        console.log('other key')
        const key = e.key.toLowerCase()
        if (key.length !== 1) {
          return
        }
        const isLetter = key >= 'a' && key <= 'z'
        const isNumber = key >= '0' && key <= '9'
        if (isLetter || isNumber) {
          console.log('letters or numbers')
          handled = true
        }
      }

      if (handled) {
        e.preventDefault()
        e.stopPropagation()
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
   * Focuses the first selected option in the listbox.
   * If no option is selected, the first visible option is focused.
   *
   * @public
   */
  focus() {
    ;(this.selectedOptionElements[0] || this.visibleOptionElements[0])?.focus()
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

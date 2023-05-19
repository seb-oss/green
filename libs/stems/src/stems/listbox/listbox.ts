import { LitElement, adoptStyles, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Ref, createRef, ref } from 'lit/directives/ref.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { TransitionalStyles } from '../../transitional-styles'

import 'reflect-metadata'
import style from './listbox.styles'

@customElement('gds-listbox')
export class GdsListbox extends LitElement {
  static styles = unsafeCSS(style)

  private internals: ElementInternals
  private slotRef: Ref<HTMLSlotElement> = createRef()

  constructor() {
    super()

    this.internals = this.attachInternals() as any
    this.internals.role = 'listbox'
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-listbox')

    this.addEventListener('keydown', (e) => {
      if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return
      if (!(e.target instanceof GdsOption)) return

      e.stopPropagation()
      e.preventDefault()

      if (e.key === 'ArrowDown') {
        const nextItem = e.target?.nextElementSibling as GdsOption
        nextItem?.focus()
      }
      if (e.key === 'ArrowUp') {
        const prevItem = e.target?.previousElementSibling as GdsOption
        prevItem?.focus()
      }
    })
  }

  focus() {
    console.log('focus listbox')

    let slot = this.slotRef.value
    if (!slot) return

    // Unwrap nested slots
    while (slot.assignedElements()[0].nodeName === 'SLOT') {
      slot = slot.assignedElements()[0] as HTMLSlotElement
    }

    const firstItem = slot.assignedElements()[0] as GdsOption
    firstItem?.focus()
  }

  render() {
    return html`<slot ${ref(this.slotRef)}></slot> `
  }
}

export const GdsListboxReact = createComponent({
  tagName: 'gds-listbox',
  elementClass: GdsListbox,
  react: React,
})

@customElement('gds-option')
export class GdsOption extends LitElement {
  static styles = unsafeCSS(style)

  private internals: ElementInternals

  value: any

  static properties = {
    value: { reflect: true },
  }

  constructor() {
    super()

    this.internals = this.attachInternals() as any
    this.internals.role = 'option'

    this.addEventListener('click', () => {
      this.select()
    })
    this.addEventListener('keydown', (e) => {
      if (e.key !== 'Enter') return
      this.select()
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-option')
  }

  focus(options?: FocusOptions | undefined): void {
    this.setAttribute('tabindex', '0')
    super.focus(options)
  }

  onblur = () => {
    this.setAttribute('tabindex', '-1')
  }

  select() {
    this.dispatchEvent(
      new CustomEvent('select', {
        bubbles: true,
        composed: true,
        detail: {
          value: this.value,
        },
      })
    )
  }

  render() {
    return html`<slot></slot> `
  }
}

export const GdsOptionReact = createComponent({
  tagName: 'gds-option',
  elementClass: GdsOption,
  react: React,
})

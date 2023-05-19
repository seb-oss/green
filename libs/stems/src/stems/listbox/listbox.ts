import { LitElement, adoptStyles, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { Ref, createRef, ref } from 'lit/directives/ref.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'
import { TransitionalStyles } from '../../transitional-styles'

import 'reflect-metadata'
import style from './listbox.styles'

@customElement('gds-listbox')
export class Listbox extends LitElement {
  static styles = unsafeCSS(style)
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }

  private slotRef: Ref<HTMLSlotElement> = createRef()

  constructor() {
    super()
    this.addEventListener('keydown', (e) => {
      console.log('keydown', e.key)
      if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return
      if (!(e.target instanceof Listbox)) return

      e.stopPropagation()
      e.preventDefault()

      if (e.key === 'ArrowDown') {
        const nextItem = e.target?.nextElementSibling as ListboxItem
        console.log('arrowdown', nextItem)
        nextItem?.focus()
      }
      if (e.key === 'ArrowUp') {
        const prevItem = e.target?.previousElementSibling as ListboxItem
        prevItem?.focus()
      }
    })
  }

  connectedCallback(): void {
    super.connectedCallback()
    TransitionalStyles.instance.apply(this, 'gds-listbox')
  }

  focus(options?: FocusOptions | undefined) {
    super.focus(options)
    console.log('focus listbox')

    let slot = this.slotRef.value
    if (!slot) return

    // Unwrap nested slots
    while (slot.assignedElements()[0].nodeName === 'SLOT') {
      slot = slot.assignedElements()[0] as HTMLSlotElement
    }

    const firstItem = slot.assignedElements()[0] as ListboxItem
    firstItem?.focus()
  }

  render() {
    return html`
      <ul role="listbox" tabindex="0">
        <slot ${ref(this.slotRef)}></slot>
      </ul>
    `
  }
}

export const ListboxReact = createComponent({
  tagName: 'gds-listbox',
  elementClass: Listbox,
  react: React,
})

@customElement('gds-listbox-item')
export class ListboxItem extends LitElement {
  static styles = unsafeCSS(style)
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }

  value: any

  static properties = {
    value: { reflect: true },
  }

  constructor() {
    super()
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
    TransitionalStyles.instance.apply(this, 'gds-listbox')
  }

  focus(options?: FocusOptions | undefined): void {
    super.focus(options)
    console.log('focus listbox item')
    this.shadowRoot?.querySelector('li')?.classList.add('active')
  }

  select() {
    this.shadowRoot?.querySelector('li')?.focus()
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
    return html`
      <li role="option">
        <slot></slot>
      </li>
    `
  }
}

export const ListboxItemReact = createComponent({
  tagName: 'gds-listbox-item',
  elementClass: ListboxItem,
  react: React,
})

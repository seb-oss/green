import { LitElement, html, unsafeCSS } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'

import 'reflect-metadata'

import styles from './stem.styles.scss'

@customElement('gds-listbox')
export class Listbox extends LitElement {
  static styles = unsafeCSS(styles)
  static shadowRootOptions = {
    ...LitElement.shadowRootOptions,
    delegatesFocus: true,
  }

  constructor() {
    super()
    this.addEventListener('keydown', (e) => {
      if (!['ArrowDown', 'ArrowUp'].includes(e.key)) return
      if (!(e.target instanceof ListboxItem)) return

      e.stopPropagation()
      e.preventDefault()

      if (e.key === 'ArrowDown') {
        const nextItem = e.target?.nextElementSibling as ListboxItem
        nextItem?.focus()
      }
      if (e.key === 'ArrowUp') {
        const prevItem = e.target?.previousElementSibling as ListboxItem
        prevItem?.focus()
      }
    })
  }

  focus(options?: FocusOptions | undefined) {
    super.focus(options)
    console.log('focus listbox')
    const firstItem = this.querySelector('gds-listbox-item') as ListboxItem
    console.log(firstItem)
    firstItem?.focus()
  }

  render() {
    return html`
      <ul role="listbox">
        <slot></slot>
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
  static styles = unsafeCSS(styles)
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

  focus(options?: FocusOptions | undefined): void {
    super.focus(options)
    console.log('focus listbox item')
    this.shadowRoot?.querySelector('li')?.focus()
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
    return html`
      <li role="option" tabindex="0">
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

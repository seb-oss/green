import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import { Listbox, Popover } from '../stems'
import * as React from 'react'

import styles from './stem.styles.scss'

@customElement('stem-dropdown')
export class Dropdown extends LitElement {
  static styles = css`
    // TODO: Figure out how to load scss here
  `

  open = false

  static properties = {
    open: { type: String, reflect: true },
  }

  render() {
    return html`
      <style>
        ${styles}
      </style>
      <button>Dropdown button</button>
      <stem-popover .open=${this.open}>
        <stem-listbox>
          <stem-listbox-item>Item 1</stem-listbox-item>
          <stem-listbox-item>Item 2</stem-listbox-item>
          <stem-listbox-item>Item 3</stem-listbox-item>
        </stem-listbox>
      </stem-popover>
    `
  }
}

export const DropdownReact = createComponent({
  tagName: 'stem-dropdown',
  elementClass: Dropdown,
  react: React,
})

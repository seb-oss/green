import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'

import styles from './stem.styles.scss'

@customElement('stem-listbox')
export class Listbox extends LitElement {
  render() {
    return html`
      <style>
        ${styles}
      </style>
      <ul aria-role="listbox">
        <slot></slot>
      </ul>
    `
  }
}

export const ListboxReact = createComponent({
  tagName: 'stem-listbox',
  elementClass: Listbox,
  react: React,
})

@customElement('stem-listbox-item')
export class ListboxItem extends LitElement {
  render() {
    return html`
      <style>
        ${styles}
      </style>
      <li aria-role="option">
        <slot></slot>
      </li>
    `
  }
}

export const ListboxItemReact = createComponent({
  tagName: 'stem-listbox-item',
  elementClass: ListboxItem,
  react: React,
})

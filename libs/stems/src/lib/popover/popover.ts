import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'

import styles from './stem.styles.scss'

@customElement('stem-popover')
export class Popover extends LitElement {
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
      <div class="popover popover-dropdown ${this.open ? 'active' : ''}">
        <slot></slot>
      </div>
    `
  }
}

export const PopoverReact = createComponent({
  tagName: 'stem-popover',
  elementClass: Popover,
  react: React,
})

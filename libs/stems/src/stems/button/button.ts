import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'

import styles from './stem.styles.scss'

@customElement('gds-button')
export class Button extends LitElement {
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
      <button>
        <slot></slot>
      </button>
    `
  }
}

export const ButtonReact = createComponent({
  tagName: 'gds-button',
  elementClass: Button,
  react: React,
})

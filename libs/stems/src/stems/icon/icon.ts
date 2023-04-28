import { LitElement, html, css } from 'lit'
import { customElement } from 'lit/decorators.js'
import { createComponent } from '@lit-labs/react'
import * as React from 'react'

import styles from './stem.styles.scss'

@customElement('gds-icon')
export class Icon extends LitElement {
  static styles = css`
    // TODO: Figure out how to load scss here
  `

  open = false
  name = ''

  static properties = {
    open: { type: String, reflect: true },
    name: { type: String },
  }

  render() {
    const { name } = this;
    return html`
      <style>
        ${styles}
      </style>
      <svg display="none">
        <symbol
          id="plus"
          stroke="currentColor"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          width="24"
          height="24"
          viewBox="0 0 24 24"
        >
          <line x1="12" y1="5" x2="12" y2="19" />
          <line x1="5" y1="12" x2="19" y2="12" />
        </symbol>
      </svg>
      <svg viewBox="0 0 24 24" width="24" height="24">
        <use href="#${name}" ></use>
      </svg>
    `
  }
}

export const IconReact = createComponent({
  tagName: 'gds-icon',
  elementClass: Icon,
  react: React,
})

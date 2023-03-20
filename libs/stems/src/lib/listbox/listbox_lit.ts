import { LitElement, html } from 'lit'
import { customElement, property } from 'lit/decorators.js'
import * as React from 'react'
import { createComponent } from '@lit-labs/react'

@customElement('stem-listbox')
export class Listbox extends LitElement {
  @property()
  version = 'STARTING'

  render() {
    return html`
      <p>Welcome to the Lit tutorial!</p>
      <p>This is the ${this.version} code.</p>
    `
  }
}

export const ListboxReactComponent = createComponent({
  tagName: 'stem-listbox',
  elementClass: Listbox,
  react: React,
  events: {
    onactivate: 'activate',
    onchange: 'change',
  },
})

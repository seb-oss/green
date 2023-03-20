import styles from './stem.styles.scss'

export class Listbox extends HTMLElement {
  private _shadowRoot: ShadowRoot
  private isOpen: boolean = false

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'closed' })
    this.render()
  }

  static register() {
    customElements.define('stem-listbox', Listbox)
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>
      <ul aria-role="listbox">
        <slot></slot>
      </ul>
    `
  }
}

export class ListboxItem extends HTMLElement {
  private _shadowRoot: ShadowRoot
  private isOpen: boolean = false

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'closed' })
    this.render()
  }

  static register() {
    customElements.define('stem-listbox-item', ListboxItem)
  }

  render() {
    this._shadowRoot.innerHTML = `
        <style>
          ${styles}
        </style>
        <li aria-role="option">
          <slot></slot>
        </li>
      `
  }
}

interface StemProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['stem-listbox']: StemProps
      ['stem-listbox-item']: StemProps
    }
  }
}

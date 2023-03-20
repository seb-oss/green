import styles from './stem.styles.scss'

export class Popover extends HTMLElement {
  private _shadowRoot: ShadowRoot
  private isOpen: boolean = false

  constructor() {
    super()
    this._shadowRoot = this.attachShadow({ mode: 'closed' })
    this.render()
  }

  static get observedAttributes() {
    return ['open']
  }

  static register() {
    customElements.define('stem-popover', Popover)
  }

  attributeChangedCallback(name: string, oldValue: string, newValue: string) {
    if (name === 'open') {
      this.isOpen = newValue !== 'false' && newValue !== null
      this.render()
    }
  }

  render() {
    this._shadowRoot.innerHTML = `
      <style>
        ${styles}
      </style>
      <div class="popover popover-dropdown ${this.isOpen ? 'active' : ''}">
        <slot></slot>
      </div>
    `
  }
}

interface StemPopoverProps
  extends React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLElement>,
    HTMLElement
  > {
  open?: boolean
}

declare global {
  namespace JSX {
    interface IntrinsicElements {
      ['stem-popover']: StemPopoverProps
    }
  }
}

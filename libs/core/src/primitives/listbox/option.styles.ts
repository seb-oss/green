import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: block;
      padding: 1rem 1.5rem;
      cursor: pointer;
    }

    :host(:not(:last-child)) {
      border-bottom: 1px solid #e0e0e0;
    }

    :host(:hover) {
      background-color: #ededed;
    }
  }
`

export default style

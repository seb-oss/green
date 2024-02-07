import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      padding: 0.5 1rem;
      cursor: pointer;
    }

    :host(:hover) {
      background-color: grey;
    }
  }
`

export default style

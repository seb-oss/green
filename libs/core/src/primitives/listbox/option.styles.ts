import { css } from 'lit'

const style = css`
  :host {
    padding: 0.5 1rem;
    cursor: pointer;
  }

  :host(:hover) {
    background-color: grey;
  }
`

export default style

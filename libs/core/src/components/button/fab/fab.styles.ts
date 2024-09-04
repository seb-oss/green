import { css } from 'lit'

const style = css`
  :host {
    position: fixed;
    inset: auto 2rem 2rem auto;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    height: calc(var(--_size) + 0.5rem);
  }
`

export default style

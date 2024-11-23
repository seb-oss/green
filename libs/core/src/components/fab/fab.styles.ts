import { css } from 'lit'

const style = css`
  :host {
    display: flex;
  }
  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    inset: auto var(--gds-space-3xl) var(--gds-space-3xl) auto;
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
    width: max-content;
  }
`

export default style

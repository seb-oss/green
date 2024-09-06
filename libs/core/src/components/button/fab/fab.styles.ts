import { css } from 'lit'

const style = css`
  :host {
    display: contents;
  }

  .button {
    box-shadow: var(--gds-shadow-m);
    position: fixed;
    bottom: var(--gds-space-3xl);
    right: var(--gds-space-3xl);
    block-size: calc(var(--_block-size) + var(--gds-space-xs));
  }
`

export default style

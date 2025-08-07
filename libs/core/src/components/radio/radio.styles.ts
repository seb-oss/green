import { css } from 'lit'

const style = css`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`
export default style

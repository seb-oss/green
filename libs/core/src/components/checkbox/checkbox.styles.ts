import { css } from 'lit'

const style = css`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-content-negative-01);
  }

  :host(:focus) {
    outline: none;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  #message {
    display: none;
  }
`
export default style

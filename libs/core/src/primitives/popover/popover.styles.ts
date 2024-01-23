import { css } from 'lit'

const style = css`
  :host([open]) dialog {
    opacity: 1;
    transform: translate3d(0, 0, 0);
    visibility: visible;
  }

  dialog {
    inset: auto;
    position: fixed;
    overflow: hidden;
    padding: 0px;
    box-sizing: border-box;
    border-width: 0;
    right: 0;
  }
`

export default style

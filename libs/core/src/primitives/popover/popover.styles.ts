import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
      visibility: visible;
    }

    dialog {
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.1), 0 1rem 2rem rgba(0, 0, 0, 0.1);
      border-width: 0;
      border-radius: 1rem;
    }

    header {
      display: none;
    }

    dialog::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`

export default style

import { css } from 'lit'

const style = css`
  :host {
    position: fixed;
    top: 0;
    left: 0;
  }
  button {
    /* TODO: Tokens! */
    box-shadow:
      0px 8px 12px 0px rgba(27, 27, 24, 0.15),
      0px 0px 1px 0px rgba(13, 13, 12, 0.3);
    height: 3.5rem;
    font-weight: 400;
  }
`

export default style

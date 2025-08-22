import { css } from 'lit'

const style = css`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    background: var(--_color, currentColor);
    border: 0;
    min-height: 1px;
    max-height: 1px;
    height: 1px;
    width: 100%;
  }
`
export default style

import { css } from 'lit'

const style = css`
  :host {
    display: contents;
  }

  hr {
    border-radius: 200px;
    color: currentColor;
    background: currentColor;
    font-size: 0;
    border: 0;
    block-size: 1px;
    margin-top: calc((var(--_size) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size) / 2) - (1px / 2));
  }
`
export default style

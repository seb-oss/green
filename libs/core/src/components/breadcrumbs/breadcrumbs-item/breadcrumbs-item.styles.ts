import { css } from 'lit'

const style = css`
  :host {
    display: contents;
  }

  li {
    display: flex;
    align-items: center;
    justify-content: center;
    list-style: none;
    margin: unset;
    padding: unset;
    height: max-content;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
  }
`
export default style

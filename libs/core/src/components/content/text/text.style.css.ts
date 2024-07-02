import { css } from 'lit'

const style = css`
  :host {
    display: block;
  }

  * {
    margin: unset;
    font-weight: normal;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  :host([lines]) {
    * {
      display: -webkit-box;
      -webkit-box-orient: vertical;
      overflow: hidden;
      -webkit-line-clamp: var(--_lines);
    }
  }
`
export default style

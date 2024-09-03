import { css } from 'lit'

const style = css`
  :host {
    display: contents;
  }

  * {
    margin: unset;
    font-weight: inherit;
    font-size: inherit;
    line-height: inherit;
    text-wrap: inherit;
  }

  // TODO: Add defaults for H1-H6 and p
  // Example:
  // :host(:not([size])) {
  // h1 {
  //   font-size: var(--font-size-body-m);
  //   line-height: var(--line-height-body-m);
  // }
  // }

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

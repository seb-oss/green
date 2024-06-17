import { css } from 'lit'

const style = css`
  :host {
    display: block;

    & > * {
      margin: unset;
      font-weight: normal;
      font-size: inherit;
      line-height: inherit;
    }
  }
`
export default style

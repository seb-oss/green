import { css } from 'lit'

const style = css`
  :host {
    display: block;
  }

  [backdrop] {
    inset: 0;
    z-index: -1;
    position: absolute;
    mask-size: cover;
    mask-repeat: no-repeat;
    mask-position: center;
  }

  [backdrop] + slot {
    z-index: 1;
  }
`
export default style

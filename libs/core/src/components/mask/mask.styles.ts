import { css } from 'lit'

const style = css`
  :host {
    contain: strict;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    mask-composite: intersect;
  }
`
export default style

import { css } from 'lit'

const style = css`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    :host(:not([width]):not([height])) svg {
      height: 1lh;
      width: auto;
    }

    svg {
      display: block;
    }
  }
`
export default style

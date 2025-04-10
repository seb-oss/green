import { css } from 'lit'

const style = css`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
    }

    :host(:not([size])) svg {
      height: 1lh;
      width: auto;
    }
  }
`
export default style

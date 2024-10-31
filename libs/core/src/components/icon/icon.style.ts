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
  }
`
export default style

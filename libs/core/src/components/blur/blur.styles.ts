import { css } from 'lit'

const style = css`
  :host {
    --_blur: 5px;
  }

  .blur {
    filter: blur(var(--_blur));
  }
`
export default style

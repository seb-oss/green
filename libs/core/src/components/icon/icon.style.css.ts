import { css } from 'lit'

const style = css`
  @layer icon;

  @layer icon {
    :host {
      --_color: #fc0;
      color: var(--_color);
    }
  }
`
export default style

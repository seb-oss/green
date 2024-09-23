import { css } from 'lit'

const style = css`
  @layer badge, shell, tokens, a11y, variants, types;

  @layer badge {
    :host {
      display: contents;
    }
  }
`
export default style

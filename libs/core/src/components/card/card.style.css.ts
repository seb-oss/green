import { css } from 'lit'

const style = css`
  @layer card, card.desktop, card.tablet, card.mobile, card.span, card.space, card.align, card.debug;

  @layer card {
    :host {
      color: teal;
    }
  }
`
export default style

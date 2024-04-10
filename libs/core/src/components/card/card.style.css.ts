import { css } from 'lit'

const style = css`
  @layer card, card.span, card.space, card.align, card.debug;

  @layer card {
    :host {
      --_: 0;
    }
  }

  /* Responsive */
  :host {
    --_: 0;
  }

  @media only screen and (max-width: 768px) {
    :host {
      --_: 0;
    }
  }

  @media only screen and (max-width: 425px) {
    :host {
      --_: 0;
    }
  }
`
export default style

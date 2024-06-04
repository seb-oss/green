import { css } from 'lit'

const style = css`
  @layer card, card.desktop, card.tablet, card.mobile, card.span, card.space, card.align, card.debug;

  @layer card {
    :host {
      display: contents;
    }

    .card {
      box-shadow: 0 0 var(--_elevation-desktop) currentColor;
      border-radius: var(--_radius-desktop);
    }

    @media only screen and (max-width: 768px) {
      :host {
        box-shadow: 0 0 var(--_elevation-tablet) currentColor;
        border-radious: var(--_radius-tablet);
      }
    }

    @media only screen and (max-width: 425px) {
      :host {
        box-shadow: 0 0 var(--_elevation-mobile) currentColor;
        border-radious: var(--_radius-mobile);
      }
    }

    // Add hovered state for card
  }
`
export default style

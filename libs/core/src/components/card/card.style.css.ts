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
      background: var(--_background-desktop);
    }

    // Elevation 1
    // box-shadow: 0px 1px 1px 0px var(--color-elevation-light-black-25, rgba(27, 27, 24, 0.25)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);
    /* Elevation/Light/Level 2 */
    // box-shadow: 0px 3px 5px 0px var(--color-elevation-light-black-20, rgba(27, 27, 24, 0.20)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);
    /* Elevation/Light/Level 3 */
    // box-shadow: 0px 8px 12px 0px var(--color-elevation-light-black-15, rgba(27, 27, 24, 0.15)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);
    /* Elevation/Light/Level 4 */
    // box-shadow: 0px 10px 18px 0px var(--color-elevation-light-black-15, rgba(27, 27, 24, 0.15)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);
    /* Elevation/Light/Level 5 */
    // box-shadow: 0px 18px 28px 0px var(--color-elevation-light-black-15, rgba(27, 27, 24, 0.15)), 0px 0px 1px 0px rgba(13, 13, 12, 0.30);

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

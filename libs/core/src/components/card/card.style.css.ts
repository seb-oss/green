import { css } from 'lit'

const style = css`
  @layer card, card.desktop, card.tablet, card.mobile, card.span, card.space, card.align, card.debug;

  @layer card {
    :host {
      --gds-color-shadow-light-black-15: rgba(27, 27, 24, 0.15);
      --gds-color-shadow-light-black-25: rgba(27, 27, 24, 0.25);
      --gds-color-shadow-light-black-20: rgba(27, 27, 24, 0.2);
      --gds-color-shadow-light-black-30: rgba(13, 13, 12, 0.3);

      --gds-shadow-xs: 0px 1px 1px 0px var(--gds-color-shadow-light-black-25),
        0px 0px 1px 0px var(--gds-color-shadow-light-black-30);

      --gds-shadow-s: 0px 3px 5px 0px var(--gds-color-shadow-light-black-20),
        0px 0px 1px 0px var(--gds-color-shadow-light-black-30);

      --gds-shadow-m: 0px 8px 12px 0px var(--gds-color-shadow-light-black-15),
        0px 0px 1px 0px var(--gds-color-shadow-light-black-30);

      --gds-shadow-l: 0px 10px 18px 0px var(--gds-color-shadow-light-black-15),
        0px 0px 1px 0px var(--gds-color-shadow-light-black-30);

      --gds-shadow-xl: 0px 18px 28px 0px var(--gds-color-shadow-light-black-15),
        0px 0px 1px 0px var(--gds-color-shadow-light-black-30);

      --gds-shadow-none: 0 0 0 0;
      --_shadow-desktop: var(--_shadow-desktop);
      border-radius: var(--_radius-desktop);
      background: var(--_background-desktop);
      box-shadow: var(--_shadow-desktop);
    }
  }
`
export default style

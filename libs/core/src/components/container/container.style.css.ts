import { css } from 'lit'

const style = css`
  @layer container, container.desktop, container.tablet, container.mobile, container.span, container.space, container.align, container.debug;

  @layer container {
    :host {
      display: contents;
    }

    .container {
      padding: var(--_padding-desktop);
      display: var(--_display-desktop);
      gap: var(--_gap-desktop);
      row-gap: var(--_row-gap-desktop);
      align-items: var(--_align-desktop);
      justify-content: var(--_justify-desktop, center);
      flex-direction: var(--_direction-desktop);
      grid-column-start: span var(--_span-desktop);
    }
  }
`
export default style

import { css } from 'lit'

const style = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
    }

    button {
      display: flex;
      border-width: 0;
      background-color: var(--gds-sys-color-l3-02);
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;

      &:focus-visible {
        outline-offset: var(--gds-sys-space-3xs);
        outline-style: solid;
        outline-width: var(--gds-sys-space-3xs);
        outline-color: var(--gds-sys-color-content-01);
      }
    }

    button:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-02),
        var(--gds-sys-color-state-light-hover)
      );
    }
  }
`

export default style

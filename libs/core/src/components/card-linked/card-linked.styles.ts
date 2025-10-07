import { css } from 'lit'

const style = css`
  @layer base, types, layout, motion;
  @layer base {
    :host {
      display: inline-block;
    }

    @layer motion {
      @media (prefers-reduced-motion: reduce) {
        .card {
          transition: none;
        }
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      color: inherit;
      text-decoration: none;
      outline: solid var(--gds-sys-space-4xs) transparent;
      outline-offset: var(--gds-sys-space-4xs);
      border-radius: var(--gds-sys-radius-s);
      padding: var(--gds-sys-space-xs);
      background: var(--gds-sys-color-l2-neutral-01);

      &:focus {
        outline-color: var(--gds-sys-color-content-neutral-01);
        outline-offset: var(--gds-sys-space-3xs);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-neutral-01),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l2-neutral-01),
          var(--gds-sys-color-state-neutral-04)
        );
      }

      .footer {
        pointer-events: none;
      }
    }
  }
`
export default style

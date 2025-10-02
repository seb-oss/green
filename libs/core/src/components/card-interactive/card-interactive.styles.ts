import { css } from 'lit'

const style = css`
  @layer base, types, layout, motion;
  @layer base {
    :host {
      display: inline-block;
    }

    @layer motion {
      @media (prefers-reduced-motion: reduce) {
        a {
          transition: none;
        }
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      transition: all 264ms;
      color: inherit;
      text-decoration: none;
      position: relative;

      &:not(.layout-plain) {
        border-radius: var(--gds-sys-radius-s);
        padding: var(--gds-sys-space-xs);
        background: var(--gds-sys-color-l2-neutral-01);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 160px;
        height: auto;

        img {
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
          min-width: 100%;
          max-height: 100%;
          transition: all 420ms;

          @starting-style {
            opacity: 0;
            filter: blur(4px);
            scale: 1.2;
          }
        }
      }

      &:not(.media) header {
        border-radius: var(--gds-sys-radius-s);
        background-color: var(--gds-sys-color-l3-neutral-02);
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: var(--gds-sys-space-xl);
        padding: var(--gds-sys-space-m);
      }

      main {
        display: flex;
        flex-direction: column;
        gap: var(--gds-sys-space-xs);
      }

      footer {
        display: flex;
        align-items: center;
        gap: var(--gds-sys-space-s);

        .pseudo-link,
        .prompt-link {
          display: flex;
          align-items: center;
          gap: var(--gds-sys-space-s);
        }
      }

      /* Type: Linked */
      &.type-linked {
        outline: solid var(--gds-sys-space-4xs) transparent;
        outline-offset: var(--gds-sys-space-4xs);

        &:focus {
          outline-color: var(--gds-sys-color-content-neutral-01);
          outline-offset: var(--gds-sys-space-3xs);

          &:not(:focus-visible) {
            outline-color: transparent;
          }
        }

        &:hover {
          background-color: red;
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
      }
    }
  }
`
export default style

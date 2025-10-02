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
      gap: var(--gds-sys-space-m);
      position: relative;

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
        border-radius: var(--gds-sys-radius-s);
        overflow: hidden;
        background-color: var(--gds-sys-color-l2-neutral-03);
        color: #fff;

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

      &.media-square header {
        aspect-ratio: 1/1;
      }

      &.media-portrait header {
        aspect-ratio: 2/3;
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

      &.type-linked {
        padding: var(--gds-sys-space-s);

        &::after {
          content: '';
          position: absolute;
          inset: 0;
          background-color: var(--gds-sys-color-l2-neutral-01);
          transition: all 420ms;
          border-radius: var(--gds-sys-radius-l);
          z-index: -1;
        }

        &:hover::after {
          inset: -4px;
        }

        &:hover [gds-element='gds-img'] {
          scale: 1.2;
          transion: all 420ms;
        }
      }
    }
  }
`
export default style

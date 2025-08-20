import { css } from 'lit'

const style = css`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.indicators {
        border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
      }

      &.small {
        border-spacing: var(--gds-sys-space-2xs);

        thead th {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
        }

        tbody tr .week-number {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }

        &.indicators {
          border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
        }
      }
    }

    thead {
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        width: var(--gds-sys-space-2xl);
        height: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-max);
        transition: background 0.2s; //might be removed
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);
        //--_background: transparent;

        &.short {
          width: var(--gds-sys-space-4xl);
        }

        &.wide {
          width: var(--gds-sys-space-5xl);
        }

        &.long {
          width: var(--gds-sys-space-7xl);
        }

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          cursor: pointer;
        }

        &[aria-selected='true'] {
          background: var(--gds-sys-color-l3-01);
          color: var(--gds-sys-color-content-03);
        }

        &:not(.disabled):hover {
          background: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-05)
          );
        }

        &[aria-selected='true']:not(.disabled):hover {
          background: color-mix(
            in srgb,
            var(--gds-sys-color-l3-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }

        &.today {
          border-color: var(--gds-sys-color-border-strong);
        }

        &.disabled {
          background: var(--gds-sys-color-l3-disabled-01);
          color: var(--gds-sys-color-content-disabled-01);
          cursor: not-allowed;
        }

        &[aria-selected='false']:active:not(.disabled) {
          background: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-06)
          );
        }

        &[aria-selected='true']:active:not(.disabled) {
          background: color-mix(
            in srgb,
            var(--gds-sys-color-l3-01),
            var(--gds-sys-color-state-neutral-02)
          );
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-content-01);
          outline-width: var(--gds-sys-space-3xs);
          outline-offset: 3.75px;
        }

        &.small {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);

          &.short {
            width: var(--gds-sys-space-2xl);
          }

          &.wide {
            width: var(--gds-sys-space-3xl);
          }

          &.long {
            width: var(--gds-sys-space-6xl);
          }
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-space-max);
        background: var(--gds-sys-color-l3-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }

      .indicator-icon {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-l);
        height: var(--gds-sys-space-m);
        border-radius: var(--gds-sys-space-max);
        background: var(--gds-sys-color-l3-notice-02);
        inset: calc(100% + var(--gds-sys-space-2xs))
          calc(50% - var(--gds-sys-space-l) / 2) auto auto;
      }
    }
  }
`
export default style

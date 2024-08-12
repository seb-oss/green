import { css } from 'lit'

const style = css`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
      padding: 10px;
    }

    :host table {
      border-spacing: 0;
      flex-grow: 1;
      width: 100%;
    }

    table {
      border-spacing: 0;
    }

    th,
    td {
      box-sizing: border-box;
      height: 2.75rem;
      text-align: center;
      width: 2.75rem;
    }

    thead {
      /* days */
      th {
        background: var(--gds-sys-color-container-container-bright);
        border-bottom: solid 1px var(--gds-sys-color-base300);
        font-weight: var(--gds-text-weight-book);
        top: 0;
      }
    }

    tbody {
      /* week numbers */
      th {
        font-weight: var(--gds-text-weight-regular);
      }
      /* dates */
      td {
        border: solid 1px transparent;
        font-weight: var(--gds-text-weight-book);
        user-select: none;

        /* weekend */
        &.sg-date-holiday:not(.disabled) {
          background: #ccc;
          color: #fafafa;
        }

        /* today */
        &.today {
          background: teal;
          border-radius: 4px;
          box-shadow: inset 0 0 0 2px currentColor;
          color: #000;
        }

        /* hover */
        &:hover:not(.disabled) {
          background: #000;
          border: solid 1px currentColor;
          border-radius: 4px;
          color: #fff;
          cursor: pointer;
        }

        /* focus */
        &:focus-visible {
          // @include common.add-focus();
          color: red;
        }

        &:focus-visible:not(.disabled) {
          border: solid 1px green;
          border-radius: 4px;
          cursor: pointer;
          position: relative;
          z-index: 0;
        }

        /* selected */
        &[aria-selected='true'] {
          background: red;
          border: solid 1px currentColor;
          border-radius: 4px;
          color: #fff;
        }

        /* highlighted */
        &[tabindex='0'] {
          border-radius: 4px;
        }

        /* active (pressed) */
        &:hover:active:not(.disabled) {
          background: orange;
          border: solid 1px currentColor;
          border-radius: 4px;
          color: red;
        }

        /* disabled */
        &.disabled {
          background-color: #f8f8f8;
          color: #adadad;
          border: solid 1px currentColor;
          border-radius: 4px;
          cursor: not-allowed;
          font-weight: var(--gds-text-weight-book);

          // &.sg-date-holiday {
          //   color: #fca;
          // }
          // .number,
          // .indicator-dot {
          //   --_color: #fc0 !important;
          // }
        }

        &.custom-date {
          position: relative;
        }
      }

      .number {
        color: var(--_color, 'currentColor');
      }

      .indicator-dot {
        display: block;
        width: 0.375rem;
        height: 0.375rem;
        top: 1.5rem;
        border-radius: 50%;
        margin: auto;
        position: absolute;
        inset-block-end: 0.125rem;
        inset-inline: 0;
        background-color: var(--_color);
      }
    }
  }
`

export default style

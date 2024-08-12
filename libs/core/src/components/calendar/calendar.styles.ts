import { css } from 'lit'

const style = css`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: 4px;
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 1px 0 0 var(--gds-sys-color-base300);
      th {
        height: 44px;
        width: 44px;
        box-sizing: border-box;
        text-align: center;
        background: var(--gds-sys-color-container-container-bright);
        font-weight: normal;
      }
    }

    tbody {
      td {
        height: 44px;
        width: 44px;
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: 2px;
        border-style: solid;
        border-color: transparent;
        border-radius: 4px;
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 1px;
        outline-offset: 2px;

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: #333;
          cursor: pointer;
          color: #fff;
        }

        &.today:not(:hover) {
          border-color: currentColor;
        }

        &.disabled {
          background-color: #f8f8f8;
          color: #adadad;
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor 50%, transparent 50%);
        }
      }
    }
  }
`

export default style

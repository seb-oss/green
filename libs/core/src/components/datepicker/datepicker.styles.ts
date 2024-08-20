import { css } from 'lit'

export const styles = css`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-book);
      line-height: var(--gds-text-line-height-label-input-large);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-label-information-medium);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-information-medium);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-label-medium);
      line-height: var(--gds-text-line-height-label-medium);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      color: #1b1b1b;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      background-color: #e2e2e2;
      border: var(--gds-space-4xs) solid #6f6f6f;
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: 48px;
      box-sizing: border-box;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: 2px;
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: 2px;

        &:focus-visible,
        &:hover {
          outline: 2px solid currentcolor;
        }
      }

      &.small {
        height: 32px;
        padding: 0;
        font-size: 12px;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`

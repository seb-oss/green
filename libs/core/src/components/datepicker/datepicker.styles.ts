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
      padding-inline: 1ch;
      padding-block-start: 2ch;
      gap: 1ch;
      box-sizing: border-box;

      .month-dropdown {
        flex: 1;
      }
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: 2ch;
      padding-block-end: 2ch;
    }

    label {
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      font-size: var(--gds-text-size-label-input-large);
      padding-block: var(--gds-space-2xs);
      font-family: inherit;
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: 1ch;
      border-radius: var(--gds-space-2xs);
      font-size: var(--gds-text-size-label-medium);
      line-height: var(--gds-text-line-height-label-medium);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      color: var(--gds-sys-color-base800);
      padding-inline: var(--gds-space-2xs);
      padding-block: var(--gds-space-2xs);
      background-color: var(--gds-sys-color-container-container-bright);
      border: 1px solid var(--gds-sys-color-base600);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        height: inherit;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;

        &:has(:focus-within) {
          span {
            opacity: 0;
          }
        }

        span {
          opacity: 0.4;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          padding-inline: 1ch;
          outline-color: var(--gds-sys-color-base500);
          outline-offset: -2px;
          outline-width: 1px;
          box-sizing: border-box;
        }

        .spinner[aria-valuetext='yyyy'],
        .spinner[aria-valuetext='mm'],
        .spinner[aria-valuetext='dd'] {
          color: var(--gds-sys-color-base500);
        }

        .spinner[aria-label='Year'] {
          width: 50px;
        }

        .spinner[aria-label='Month'],
        .spinner[aria-label='Day'] {
          width: 42px;
        }

        .spinner:hover,
        .spinner:focus {
          color: var(--gds-sys-color-base800);
        }
      }
    }
  }
`

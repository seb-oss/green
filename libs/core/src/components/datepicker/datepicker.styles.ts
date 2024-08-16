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

      ::part(_button) {
        border-radius: var(--gds-space-2xs);
      }

      ::part(ripple) {
        border-radius: var(--gds-space-2xs);
      }
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
      gap: var(--gds-space-s);
      border-radius: var(--gds-space-2xs);
      font-size: var(--gds-text-size-label-medium);
      line-height: var(--gds-text-line-height-label-medium);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      color: var(--gds-sys-color-base800);
      padding-inline: var(--gds-space-2xs);
      padding-block: var(--gds-space-2xs);
      margin-block: var(--gds-space-xs);
      background-color: var(--gds-sys-color-container-container-bright);
      border: var(--gds-space-4xs) solid var(--gds-sys-color-base600);
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

        span {
          opacity: 0.4;
        }

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: var(--gds-sys-color-base500);
          outline-offset: -2px;
          outline-width: 2px;
          box-sizing: border-box;
          border-radius: var(--gds-space-2xs);

          &:focus-visible {
            outline-style: solid;
          }
        }

        .spinner[aria-valuetext='yyyy'],
        .spinner[aria-valuetext='mm'],
        .spinner[aria-valuetext='dd'] {
          color: var(--gds-sys-color-base500);
        }

        .spinner[aria-label='Year'] {
          width: var(--gds-space-4xl);
        }

        .spinner[aria-label='Month'],
        .spinner[aria-label='Day'] {
          width: var(--gds-space-2xl);
        }

        .spinner:hover,
        .spinner:focus {
          color: var(--gds-sys-color-base800);
        }
      }

      ::part(_button) {
        outline-offset: -2px;
        border-radius: var(--gds-space-2xs);
      }
    }
  }
`

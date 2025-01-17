import { css } from 'lit'

export const styles = css`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
      font-family: inherit;
      min-width: 200px;
    }

    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      min-width: 10ch;
      gap: var(--gds-space-4xs);
      font-family: monospace;
      font-size: var(--gds-text-size-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      border-radius: var(--gds-space-2xs);
      outline: none;
      padding-inline: var(--gds-space-2xs);
      padding-block: var(--gds-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-color-l3-background-primary);
        color: var(--gds-color-l3-content-primary);
      }

      &[data-max-width='4'] {
        width: calc(4ch + (var(--gds-space-2xs) * 2));
      }

      &[data-max-width='2'] {
        width: calc(2ch + (var(--gds-space-2xs) * 2));
      }
    }
  }
`

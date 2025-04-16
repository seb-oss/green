import { css } from 'lit'

export const styles = css`
  @layer base, reset;

  @layer base {
    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 11ch;
      gap: var(--gds-space-4xs);
      font-size: var(--gds-text-size-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    :host([size='small']) .spinners {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      /* border-radius: var(--gds-space-2xs); */
      outline: none;
      padding-block: var(--gds-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-color-l2-background-tertiary);
        color: var(--gds-color-l2-content-tertiary);
      }
    }
  }
`

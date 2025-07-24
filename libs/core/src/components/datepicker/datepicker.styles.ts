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
      gap: var(--gds-sys-space-4xs);
      font-size: var(--gds-sys-text-size-detail-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    :host([size='small']) .spinners {
      font-size: var(--gds-sys-text-size-detail-s);
      line-height: var(--gds-sys-text-line-height-detail-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      /* border-radius: var(--gds-sys-space-2xs); */
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 2rem;
      text-align: center;

      &:focus {
        background-color: var(--gds-sys-color-l2-background-tertiary);
        color: var(--gds-sys-color-l2-content-tertiary);
      }
    }

    :host([size='small']) .spinner {
      line-height: 1.5rem;
    }
  }
`

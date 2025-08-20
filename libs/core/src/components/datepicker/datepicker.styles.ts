import { css } from 'lit'

const style = css`
  @layer base, reset;

  @layer base {
    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 12ch;
      gap: var(--gds-sys-space-4xs);
      font: var(--gds-sys-text-detail-book-m);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-book-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-3xs);
      margin: calc(-1 * var(--gds-sys-space-3xs));
      border-radius: var(--gds-sys-radius-2xs);

      &:focus-visible {
        background-color: var(--gds-sys-color-l3-01);
        color: var(--gds-sys-color-content-inversed);
      }
    }
  }
`
export default style

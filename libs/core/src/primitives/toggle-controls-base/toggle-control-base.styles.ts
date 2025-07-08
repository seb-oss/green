import { css } from 'lit'

const style = css`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .container {
      display: flex;
      gap: var(--gds-sys-space-s);
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    .primary-label {
      font: var(--gds-sys-text-detail-book-m);
      cursor: inherit;
    }

    .supporting-text {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`
export default style

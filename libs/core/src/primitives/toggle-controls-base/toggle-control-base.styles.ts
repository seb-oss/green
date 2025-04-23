import { css } from 'lit'

export const styles = css`
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
      --_color: var(--_radio-label-color, inherit);
    }

    .selection-field-container {
      display: flex;
      gap: var(--gds-space-s);
      cursor: pointer;
    }

    .selection-field-label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--_color);
    }

    .primary-label {
      font-weight: var(--gds-text-weight-book);
      cursor: pointer;
    }

    .supporting-text {
      font-size: var(--_font-size-supporting-text);
      line-height: var(--_line-height-supporting-text);
      font-weight: var(--gds-text-weight-regular);
    }
  }
`

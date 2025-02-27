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
    }

    .selection-field-container {
      display: flex;
      gap: var(--gds-space-2xs);
    }

    .selection-field-label {
      display: flex;
      flex-direction: column;
      justify-content: center;
      color: var(--gds-color-l3-content-tertiary);

      .label {
        font-size: var(--gds-text-size-detail-m);
        line-height: var(--gds-line-height-detail-m);
        font-weight: var(--gds-text-weight-book);
      }

      .supporting-text {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-line-height-detail-s);
        font-weight: var(--gds-text-weight-regular);
      }

      &.has-supporting-text {
        padding-block-start: calc(1cap / 2);
      }
    }

    @media (hover: hover) {
    }
  }
`

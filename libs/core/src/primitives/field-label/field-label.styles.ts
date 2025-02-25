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

    .field-label-container {
      display: flex;
      gap: var(--gds-spacing-m);
    }

    .field-label {
      display: flex;
      flex-direction: column;
      gap: var(--gds-spacing-xxs);

      .label {
        font-size: var(--gds-text-size-detail-m);
        line-height: var(--gds-line-height-detail-m);
        font-weight: var(--gds-text-weight-book);
      }

      .support-text {
      }
    }

    @media (hover: hover) {
    }
  }
`

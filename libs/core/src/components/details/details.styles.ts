import { css } from 'lit'

export const styles = css`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-space-4xs)
        var(--gds-color-l2-border-primary);
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
      color: var(--gds-color-l2-content-secondary);
      transition: border-color 240ms linear;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-space-2xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-color-l2-content-primary);
    }

    .summary-icon {
      border-radius: var(--gds-space-max);
      background-color: transparent;
      transition: all 280ms;
      aspect-ratio: 1;
      width: max-content;
      height: max-content;
      line-height: 1;
    }

    .summary:focus {
      outline-color: var(--gds-color-l3-content-tertiary);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      .summary:is(:hover, :focus-within) .summary-icon {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
      }

      .summary:active .summary-icon {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-pressed)
        );
      }

      .details:hover,
      .details:focus-within {
        border-color: var(--gds-color-l2-border-quaternary);
      }
    }

    .summary-label {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
      padding-block: var(--gds-space-s);
    }

    .details.small .content {
      font-size: var(--gds-text-size-heading-2xs);
      line-height: var(--gds-text-line-height-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-space-2xs);
    }

    .details.open .content {
      padding-block-end: var(--gds-space-l);
    }

    .details.small.open .content {
      padding-block-end: var(--gds-space-s);
    }

    .content {
      interpolate-size: allow-keywords;
      height: 0;
      transition: height 0.35s ease;
      overflow-y: clip;
      outline: none;
    }

    .content.open {
      height: max-content;
      max-height: 100vh;
      overflow-y: auto;
    }
  }
`

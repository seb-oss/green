import { css } from 'lit'

export const styles = css`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-sys-space-4xs)
        var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-body-regular-m);
      color: var(--gds-sys-color-content-01);
      transition: border-color 240ms linear;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-sys-space-2xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-sys-color-l2-content-primary);
    }

    .summary-icon {
      border-radius: var(--gds-sys-space-max);
      background-color: transparent;
      transition: all 280ms;
      aspect-ratio: 1;
      width: max-content;
      height: max-content;
      line-height: 1;
      position: relative;
    }

    .summary-icon::after {
      content: '';
      position: absolute;
      border-radius: var(--gds-sys-space-max);
      transition: all 280ms;
      inset: 0;
      scale: 0.9;
      opacity: 0;
      pointer-events: none;
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-light-hover)
      );
    }

    .summary:focus {
      outline-color: var(--gds-sys-color-content-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      .summary:hover .summary-icon::after,
      .summary:focus-visible .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .summary:active .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .details:hover,
      .details:focus-within {
        border-color: var(--gds-sys-color-border-strong);
      }
    }

    .summary-label {
      font: var(--gds-sys-text-heading-xs);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font: var(--gds-sys-text-heading-2xs);
      padding-block: var(--gds-sys-space-s);
    }

    .details.small .content {
      font: var(--gds-sys-text-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-sys-space-2xs);
    }

    .details.open .content {
      padding-block-end: var(--gds-sys-space-l);
    }

    .details.small.open .content {
      padding-block-end: var(--gds-sys-space-s);
    }

    .content {
      interpolate-size: allow-keywords;
      height: 0;
      transition:
        height 0.35s ease,
        padding-block-end 0.35s ease;
      overflow: hidden;
      outline: none;
      scrollbar-width: none;
    }

    .content.open {
      overflow: auto;
      height: max-content;
      max-height: 100vh;
    }
  }
`

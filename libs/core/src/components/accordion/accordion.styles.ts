import { css } from 'lit'

export const styles = css`
  @layer base, reset;
  @layer base {
    details {
      border-bottom: solid var(--gds-space-4xs)
        var(--gds-color-l2-border-primary);
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
      color: var(--gds-color-l2-content-secondary);
      transition: border-color 240ms linear;
    }

    details:hover {
      border-color: var(--gds-color-l2-border-quaternary);
    }

    summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      cursor: pointer;
      user-select: none;
      outline-offset: var(--gds-space-2xs);
      outline-color: currentColor;
      transition: all 120ms;
      padding-block: var(--gds-space-m);
      color: var(--gds-color-l2-content-primary);
    }

    summary::-webkit-details-marker {
      display: none;
    }

    summary .label {
      font-size: var(--gds-text-size-heading-xs);
      line-height: var(--gds-text-line-height-heading-xs);
      font-weight: var(--gds-text-weight-regular);
    }

    summary svg {
      block-size: var(--gds-space-m);
      inline-size: var(--gds-space-m);
      stroke: currentColor;
      stroke-width: 1.5;
      stroke-linecap: round;
    }

    summary:focus-visible {
      border-radius: var(--gds-space-2xs);
    }

    .content {
      padding-block-end: var(--gds-space-l);
    }
  }
`

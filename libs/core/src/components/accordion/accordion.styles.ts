import { css } from 'lit'

export const styles = css`
  @layer base, reset;
  @layer base {
    details {
      border-top: solid var(--gds-space-4xs) var(--gds-color-l3-border-tertiary);
      font-size: var(--gds-text-size-body-m);
      line-height: var(--gds-text-line-height-body-m);
      color: var(--gds-color-l2-content-secondary);
    }

    summary {
      font-weight: var(--gds-text-weight-regular);
      list-style: none;
      padding: 0.4lh 0.2ch;
      font-size: var(--gds-text-size-body-l);
      line-height: var(--gds-text-line-height-body-l);
      color: var(--gds-color-l2-content-primary);
      display: flex;
      justify-content: space-between;
      align-items: center;
      cursor: pointer;
      user-select: none;
      outline-offset: var(--gds-space-2xs);
      outline-color: currentColor;

      &:focus-visible {
        border-radius: var(--gds-space-2xs);
      }
    }

    details[open] {
      margin-bottom: 1lh;
    }

    details[open] summary {
      border-bottom: var(--gds-space-4xs) solid
        var(--gds-color-l3-border-tertiary);
    }
  }
`

import { css } from 'lit'

export const PaginationStyles = css`
  :host {
    display: flex;
    align-items: center;
    gap: var(--gds-sys-space-xl);
  }

  .pages {
    display: flex;
    gap: var(--gds-sys-space-2xs);
  }

  .pages ::part(_button) {
    padding: 0;
    aspect-ratio: 1/1;
  }
`

import { css } from 'lit'

export const defaultStyles = css`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-sys-text-weight-book);
    }

    a:visited {
      color: currentColor;
    }

    h1 {
      font: var(--gds-sys-text-heading-xl);
    }

    h2 {
      font: var(--gds-sys-text-heading-l);
    }

    h3 {
      font: var(--gds-sys-text-heading-m);
    }

    h4 {
      font: var(--gds-sys-text-heading-s);
    }

    h5 {
      font: var(--gds-sys-text-heading-xs);
    }

    h6 {
      font: var(--gds-sys-text-heading-2xs);
    }

    p,
    li {
      font: var(--gds-sys-text-body-book-m);
    }

    strong {
      font: var(--gds-sys-text-body-book-m);
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`

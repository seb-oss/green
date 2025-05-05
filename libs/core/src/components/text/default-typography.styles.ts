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
      font-size: var(--gds-sys-text-size-heading-xl);
      line-height: var(--gds-sys-text-line-height-heading-xl);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h2 {
      font-size: var(--gds-sys-text-size-heading-l);
      line-height: var(--gds-sys-text-line-height-heading-l);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h3 {
      font-size: var(--gds-sys-text-size-heading-m);
      line-height: var(--gds-sys-text-line-height-heading-m);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h4 {
      font-size: var(--gds-sys-text-size-heading-s);
      line-height: var(--gds-sys-text-line-height-heading-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h5 {
      font-size: var(--gds-sys-text-size-heading-xs);
      line-height: var(--gds-sys-text-line-height-heading-xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    h6 {
      font-size: var(--gds-sys-text-size-heading-2xs);
      line-height: var(--gds-sys-text-line-height-heading-2xs);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    p,
    li {
      font-size: var(--gds-sys-text-size-body-m);
      line-height: var(--gds-sys-text-line-height-body-m);
    }

    strong {
      font-weight: var(--gds-sys-text-weight-medium);
    }
  }
`

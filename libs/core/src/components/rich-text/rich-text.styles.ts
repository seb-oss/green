import { css } from 'lit'

export const styles = css`
  :host {
    font-size: var(--gds-text-size-body-m);
    line-height: var(--gds-text-line-height-body-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
  }

  :host > :first-child {
    margin-top: 0;
  }

  /*
  * typography
  * -----------------------------------------------------------
  */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: 0.6lh;
    margin-bottom: 0.3lh;
  }

  p {
    margin-bottom: 1lh;
  }

  blockquote {
    margin: unset;
    border-left: 0.2rem solid currentColor;
    padding-left: 1ch;
  }

  s {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: -0.22lh;
  }

  mark {
    color: currentColor;
    background-color: color-mix(in srgb, currentColor, transparent 80%);
  }

  /*
  * lists
  * -----------------------------------------------------------
  */
  ul,
  ol,
  li {
    margin: 0 0 0 1ch;
    padding: 0 0 0.3lh 0;
  }
  li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure
  * -----------------------------------------------------------
  */
  figure {
    margin: 0;
    & img {
      display: block;
    }
  }
  figcaption {
    font-size: smaller;
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: collapse;
    width: 100%;
  }
  th {
    font-weight: var(--gds-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
  }
  th,
  td {
    padding: 0.3lh 0.6ch;
  }
  td:not(:last-child) {
    border-right: var(--default-border);
  }
  tr:nth-child(even) td {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  /*
  * Details
  * -----------------------------------------------------------
  */
  details {
    border: var(--default-border);
    border-radius: var(--gds-space-xs);
    padding: 0.5em 0.5em 0;
  }

  summary {
    font-weight: var(--gds-text-weight-book);
    margin: -0.5em -0.5em 0;
    padding: 0.5em;
  }

  details[open] {
    padding: 0.5em;
  }

  details[open] summary {
    border-bottom: var(--default-border);
    margin-bottom: 0.5em;
  }
`

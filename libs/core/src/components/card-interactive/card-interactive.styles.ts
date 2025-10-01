import { css } from 'lit'

const style = css`
  :host {
    display: contents;
  }

  a {
    text-decoration: none;
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-4xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
    border-radius: var(--gds-sys-radius-s);
    height: max-content;

    &:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }
  }

  .card {
    transition: all 264ms;
  }
`
export default style

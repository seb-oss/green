import { css } from 'lit'

const style = css`
  :host {
    position: fixed;
    top: 0;
    left: 0;
  }
  button {
    /* TODO: Tokens! */
    box-shadow:
      0px 8px 12px 0px rgba(27, 27, 24, 0.15),
      0px 0px 1px 0px rgba(13, 13, 12, 0.3);
    border: none;
    background-color: var(--gds-sys-color-background-background-dim);
    color: var(--gds-sys-color-primary-text);
    height: 3.5rem;
    font-weight: 400;

    &:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-container-container-shade1) 10%,
        transparent
      );
    }
  }
`

export default style

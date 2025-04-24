import { css } from 'lit'

export const styles = css`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-color-l3-content-disabled);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`

import { css } from 'lit'

export const styles = css`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-color-l3-content-disabled);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-color-l3-content-negative);
  }

  :host(:focus) {
    outline: none;
  }
`

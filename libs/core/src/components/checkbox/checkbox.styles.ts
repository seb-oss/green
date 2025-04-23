import { css } from 'lit'

export const styles = css`
  :host([disabled]) {
    color: var(--gds-color-l3-content-disabled);
  }

  :host(:invalid) {
    color: var(--gds-color-l3-content-negative);
  }

  :host(:focus) {
    outline: none;
  }
`

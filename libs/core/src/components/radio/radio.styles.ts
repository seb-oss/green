import { css } from 'lit'

export const styles = css`
  :host([disabled]) {
    color: var(--gds-color-l3-content-disabled);
  }

  :host(:focus) {
    outline: none;
  }
`

import { css } from 'lit'

export const styles = css`
  :host([disabled]) {
    --_checkbox-label-color: var(--gds-color-l3-content-disabled);
  }

  :host(:focus) {
    outline: none;
  }
`

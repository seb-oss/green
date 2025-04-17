import { css } from 'lit'

export const styles = css`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .checkbox {
        transition: none;
      }
    }
  }

  @layer base {
    :host([disabled]) {
      --_checkbox-label-color: var(--gds-color-l3-content-disabled);
    }

    :host(:focus) {
      outline: none;
    }
  }
`

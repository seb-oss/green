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

    @media (hover: hover) {
      .checkbox:hover,
      :host(:hover) .checkbox .state {
        background-color: var(--checkbox-bg-mix);
        scale: 1;
      }
    }

    .checkbox:active .state,
    :host(:active) .checkbox .state {
      background-color: var(--checkbox-bg-mix-active);
    }

    :host(:active:not(:focus-visible)) .checkbox:active .state,
    :host(:active:not(:focus-visible)) .checkbox .state {
      scale: 0.96;
    }

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .checkbox .state {
      outline-color: var(--_checkbox-outline-color);
      scale: 1;
    }

    :host(:not(:focus-visible)) .checkbox .state {
      outline-color: transparent;
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .checkbox .disc {
      box-shadow: none;
      background-color: var(--gds-color-l3-content-disabled);
    }
  }
`

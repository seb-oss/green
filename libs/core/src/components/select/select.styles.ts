import { css } from 'lit'

export const styles = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      min-width: 100%;
    }

    ::slotted(select) {
      appearance: none;
      outline: none;
      border: none;
      font: inherit;
      flex: 1;
      opacity: 0;
      position: absolute;
      z-index: 1;
      inset: 0;
      box-sizing: border-box;
    }

    label {
      flex: 1;
    }

    :host(:focus-within) [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`

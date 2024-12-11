import { css } from 'lit'

export const styles = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      min-width: 100%;
      height: max-content;
    }

    ::slotted(select) {
      appearance: none;
      outline: none;
      border: none;
      font: inherit;
      flex: 1;
      box-sizing: border-box;
      background: transparent;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
      inset: 0;
      line-height: 1.4;

      &::-ms-expand {
        display: none;
      }
    }

    .multiple ::slotted(select) {
      opacity: 1;
      position: relative;
    }

    label {
      flex: 1;
    }

    :host(:focus-within) [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`

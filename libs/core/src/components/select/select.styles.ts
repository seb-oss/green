import { css } from 'lit'

export const styles = css`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      contain: layout;
      isolation: isolate;
      gap: var(--gds-space-xs);
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
  }
`

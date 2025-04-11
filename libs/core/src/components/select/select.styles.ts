import { css } from 'lit'

export const styles = css`
  @layer base, reset, transitional-styles;
  @layer base {
    .select-container {
      display: contents;
    }

    select {
      flex: 1;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
      inset: 0;

      &::-ms-expand {
        display: none;
      }
    }

    select[multiple] {
      opacity: 1;
      position: relative;
      width: 100%;
    }

    label {
      flex: 1;
    }
  }
`

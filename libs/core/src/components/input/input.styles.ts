import { css } from 'lit'

export const styles = css`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: color 368ms cubic-bezier(0.4, 0, 0.2, 1),
        background-color 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      :host {
        --_transition: none;
      }
    }

    @media (prefers-reduced-transparency: reduce) {
      :host {
        --_transparency: 1;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      contain: layout;
      display: block;
      isolation: isolate;
    }

    input,
    textarea {
      appearance: none;
      background-color: transparent;
      border: 0;
      box-sizing: border-box;
      font-family: inherit;
      margin: unset;
      outline: none;
      overflow: hidden;
      padding: unset;
      transition: var(--_transition);
      width: 100%;
    }
  }

  @layer simplified {
    // ...
  }
`

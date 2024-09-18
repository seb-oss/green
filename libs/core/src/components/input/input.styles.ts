import { css } from 'lit'

export const styles = css`
  @layer tokens, a11y, base, simplified;

  @layer tokens {
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
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
      display: contents;
      isolation: isolate;
    }

    :host([size='small']) input {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
    }

    .field {
      transition: var(--_transition);
      position: relative;

      &:has(input:focus) {
        border-color: var(--gds-color-l3-border-primary);
      }

      // min-height: max(var(--gds-space-xl), calc(1lh * var(--_lines)));
    }

    @media (hover: hover) {
      .field:hover {
        .state {
          opacity: 1;
        }
      }
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
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
    }

    textarea {
      overflow: hidden;
      resize: none;
      transition: unset;
      min-height: calc(1lh * 4);
      height: calc(1lh * var(--_lines));
    }
  }

  @layer simplified {
    // ...
  }
`

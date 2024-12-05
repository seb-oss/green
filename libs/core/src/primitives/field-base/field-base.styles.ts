import { css } from 'lit'

export const styles = css`
  @layer base, reset;
  @layer base {
    /* Field Base Style */
    :host {
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    * {
      box-sizing: border-box;
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);

      &:focus-within {
        border-color: var(--gds-color-l3-border-primary);
        outline-color: currentColor;
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      min-width: var(--gds-space-l);
    }
  }
`

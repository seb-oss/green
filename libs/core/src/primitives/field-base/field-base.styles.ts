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
      user-select: none;
    }

    .field {
      transition: var(--_transition);
      position: relative;
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);

      &.focused {
        outline-color: currentColor;
      }
    }

    @media (hover: hover) {
      .field {
        &:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-secondary),
            var(--gds-color-l3-states-light-hover)
          );
        }

        &.invalid:hover {
          background: color-mix(
            in srgb,
            var(--gds-color-l3-background-negative-secondary),
            var(--gds-color-l3-states-negative-hover)
          );
        }
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

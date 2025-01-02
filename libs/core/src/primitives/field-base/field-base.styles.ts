import { css } from 'lit'

export const styles = css`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
      user-select: none;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-xs);
      /* In Figma, the border overlaps with the padding, so we need to
         subtract 1px to replicate this in CSS */
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs)
        calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
      min-block-size: var(--gds-space-3xl);
      outline-style: solid;
      outline-color: transparent;
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);
      border-radius: var(--gds-space-xs);
      background: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      border: var(--gds-space-4xs) solid var(--gds-color-l3-border-secondary);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color, border-color, outline-color;
    }

    .field:focus-within {
      outline-color: currentColor;
    }

    .field.small {
      gap: var(--gds-space-2xs);
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs);
      min-block-size: var(--gds-space-xl);
    }

    /* In Figma, the icon button overlaps 4px with the padding. The rule
       below is there to replicate that so the field doesn't change height
       when the action button appears */
    .field.small slot[name='action']::slotted(*) {
      margin: calc(var(--gds-space-xs) / -0.5) 0;
    }

    .field.multiline {
      align-items: flex-start;
      padding: calc(var(--gds-space-s) - 1px) var(--gds-space-s)
        calc(var(--gds-space-s) - 1px) var(--gds-space-m);
      height: max-content;
    }

    .field.trail-slot-occupied,
    .field:not(.action-slot-occupied):not(.small) {
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
    }

    .field.disabled {
      background: var(--gds-color-l3-background-disabled);
      color: var(--gds-color-l3-content-disabled);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-color-l3-background-negative-secondary);
      border-color: var(--gds-color-l3-border-negative);
      color: var(--gds-color-l3-content-negative);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      flex: 1;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
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

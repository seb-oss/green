import { css } from 'lit'

export const styles = css`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .radio {
        transition: none;
      }
    }
  }

  @layer base {
    :host([disabled]) {
      --_radio-label-color: var(--gds-sys-color-l3-content-disabled);
    }

    .radio {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: var(--radio-disc-size);
      height: var(--radio-disc-size);
      margin-block-start: calc(var(--radio-border-width) * 2);
      cursor: pointer;
    }

    .state {
      display: flex;
      box-sizing: border-box;
      backface-visibility: hidden;
      transition-property: background-color, scale, outline;
      transition-duration: 248ms;
      outline-style: solid;
      outline-offset: calc(-1 * var(--radio-outline-width));
      outline-width: var(--radio-outline-width);
      outline-color: transparent;
      border-radius: var(--radio-radius);
      min-width: var(--radio-size);
      min-height: var(--radio-size);
      position: absolute;
      left: calc(* 1 - calc((var(--radio-size) - var(--radio-disc-size)) / 2));
      top: calc(* 1 - calc((var(--radio-size) - var(--radio-disc-size)) / 2));
      scale: 0.8;
    }

    @media (hover: hover) {
      .radio:hover,
      :host(:hover) .radio .state {
        background-color: var(--radio-bg-mix);
        scale: 1;
      }
    }

    .radio:active .state,
    :host(:active) .radio .state {
      background-color: var(--radio-bg-mix-active);
    }

    :host(:active:not(:focus-visible)) .radio:active .state,
    :host(:active:not(:focus-visible)) .radio .state {
      scale: 0.96;
    }

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .radio .state {
      outline-color: var(--_radio-outline-color);
      scale: 1;
    }

    :host(:not(:focus-visible)) .radio .state {
      outline-color: transparent;
    }

    .disc {
      width: var(--radio-disc-size);
      height: var(--radio-disc-size);
      border-radius: var(--radio-radius);
      box-shadow: inset 0 0 0 var(--radio-border-width)
        var(--radio-border-color);
      background-color: var(--radio-disc-background-color);
      box-sizing: border-box;
      transition-property: box-shadow;
      transition-duration: 248ms;
      will-change: box-shadow;
      position: absolute;
      inset: 0;
    }

    :host([checked]) .disc,
    :host(:active) .disc {
      box-shadow: inset 0 0 0 var(--radio-border-width-selected)
        var(--radio-border-color-selected);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .radio .disc {
      box-shadow: none;
      background-color: var(--gds-sys-color-l3-content-disabled);
    }
  }
`

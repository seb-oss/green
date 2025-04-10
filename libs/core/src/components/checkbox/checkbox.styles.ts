import { css } from 'lit'

export const styles = css`
  @layer base, a11y, reset, transitional-styles;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .checkbox {
        transition: none;
      }
    }
  }

  @layer base {
    :host([disabled]) {
      --_checkbox-label-color: var(--gds-color-l3-content-disabled);
    }

    .check-icon {
      line-height: 10px;
      transition: scale 248ms;
      will-change: scale, opacity;
      scale: 1;
      color: var(--gds-color-l3-content-primary);
      opacity: 1;
      @starting-style {
        scale: 0.2;
      }
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: var(--checkbox-disc-size);
      height: var(--checkbox-disc-size);
      margin-block-start: calc(var(--checkbox-border-width) * 2);
      cursor: pointer;
    }

    .state {
      display: flex;
      box-sizing: border-box;
      backface-visibility: hidden;
      transition-property: background-color, scale, outline;
      transition-duration: 248ms;
      outline-style: solid;
      outline-offset: calc(-1 * var(--checkbox-outline-width));
      outline-width: var(--checkbox-outline-width);
      outline-color: transparent;
      border-radius: calc(var(--checkbox-radius) + 4px);
      min-width: var(--checkbox-size);
      min-height: var(--checkbox-size);
      position: absolute;
      left: calc(
        * 1 - calc((var(--checkbox-size) - var(--checkbox-disc-size)) / 2)
      );
      top: calc(
        * 1 - calc((var(--checkbox-size) - var(--checkbox-disc-size)) / 2)
      );
      scale: 0.8;
    }

    @media (hover: hover) {
      .checkbox:hover,
      :host(:hover) .checkbox .state {
        background-color: var(--checkbox-bg-mix);
        scale: 1;
      }
    }

    .checkbox:active .state,
    :host(:active) .checkbox .state {
      background-color: var(--checkbox-bg-mix-active);
    }

    :host(:active:not(:focus-visible)) .checkbox:active .state,
    :host(:active:not(:focus-visible)) .checkbox .state {
      scale: 0.96;
    }

    :host(:focus) {
      outline: none;
    }

    :host(:focus) .checkbox .state {
      outline-color: var(--_checkbox-outline-color);
      scale: 1;
    }

    :host(:not(:focus-visible)) .checkbox .state {
      outline-color: transparent;
    }

    .disc {
      width: var(--checkbox-disc-size);
      height: var(--checkbox-disc-size);
      border-radius: var(--checkbox-radius);
      box-shadow: inset 0 0 0 var(--checkbox-border-width)
        var(--checkbox-border-color);
      background-color: var(--checkbox-disc-background-color);
      box-sizing: border-box;
      transition-property: box-shadow;
      transition-duration: 248ms;
      will-change: box-shadow;
      position: absolute;
      inset: 0;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    :host([checked]) .disc,
    :host(:active) .disc {
      box-shadow: inset 0 0 0 var(--checkbox-border-width-selected)
        var(--checkbox-border-color-selected);
    }

    :host([disabled]) {
      pointer-events: none;
    }

    :host([disabled]) .checkbox .disc {
      box-shadow: none;
      background-color: var(--gds-color-l3-content-disabled);
    }
  }
`

/**
 * Radiobutton and Checkbox toggle
 *
 * These styles covers the square checkmark toggle for checkbox and the round radio toggle for radio buttons.
 */

import { css } from 'lit'

export default css`
  .check-icon {
    line-height: 10px;
    transition: scale 150ms;
    will-change: scale;
    scale: 1;
    color: var(--gds-color-l3-content-primary);
    opacity: 1;
    @starting-style {
      scale: 0.2;
    }
  }

  .rbcb-toggle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--checkbox-disc-size);
    height: var(--checkbox-disc-size);
    margin-block-start: calc(var(--checkbox-border-width) * 2);
    cursor: pointer;
  }

  .checkbox {
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

  .checkbox.checked {
    box-shadow: inset 0 0 0 var(--checkbox-border-width-selected)
      var(--checkbox-border-color-selected);
  }

  .perimeter {
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

  :host([disabled]) .checkbox {
    box-shadow: none;
    background-color: var(--gds-color-l3-content-disabled);
  }

  :host(:focus-visible) .perimeter {
    outline-color: var(--_checkbox-outline-color);
    scale: 1;
  }

  @media (hover: hover) {
    .rbcb-toggle:hover .perimeter,
    :host(:hover) .perimeter {
      background-color: var(--checkbox-bg-mix);
      scale: 1;
    }
  }

  .rbcb-toggle:active .perimeter,
  :host(:active) .perimeter {
    background-color: var(--checkbox-bg-mix-active);
  }

  :host(:active:not(:focus-visible)) .rbcb-toggle:active .perimeter,
  :host(:active:not(:focus-visible)) .perimeter {
    scale: 0.96;
  }
`

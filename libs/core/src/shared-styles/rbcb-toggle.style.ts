/**
 * Radiobutton and Checkbox toggle
 * `rbcb` = radio button / checkbox
 *
 * These styles covers the square checkmark toggle for checkbox and the round radio toggle for radio buttons.
 */

import { css } from 'lit'

export default css`
  .rbcb {
    --_toggle-size: var(--gds-sys-space-m);
    --_toggle-radius: var(--gds-sys-space-2xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_toggle-border-width-checked: var(--gds-sys-space-s);

    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-secondary),
      var(--gds-sys-color-l3-states-light-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-secondary),
      var(--gds-sys-color-l3-states-light-pressed)
    );

    /* -- */

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    margin-block-start: calc(var(--gds-sys-space-4xs) * 2);
    cursor: pointer;
  }

  .rbcb--radio {
    --_toggle-radius: var(--gds-sys-space-max);
    --_toggle-border-width-checked: var(--gds-sys-space-2xs);
  }

  .rbcb__toggle {
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    border-radius: var(--_toggle-radius);
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-secondary);
    background-color: var(--gds-sys-color-l3-content-primary);
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

  .rbcb__icon {
    line-height: 10px;
    transition: scale 150ms;
    will-change: scale;
    scale: 1;
    color: var(--gds-sys-color-l3-content-primary);
    @starting-style {
      scale: 0.2;
    }
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: 248ms;
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-3xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-l3-content-tertiary);
    border-radius: calc(var(--_toggle-radius) + 4px);
    min-width: var(--_perimeter-size);
    min-height: var(--_perimeter-size);
    position: absolute;
    left: calc(* 1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(* 1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-border-primary);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-border-primary);
  }

  .--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-negative);
  }

  .--disabled {
    cursor: default;
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-sys-color-l3-content-disabled);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-sys-color-l3-background-negative-secondary);
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-negative);
  }

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-border-negative);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-sys-color-l3-border-negative);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-negative-secondary),
      var(--gds-sys-color-l3-states-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-background-negative-secondary),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-sys-color-l3-content-negative);
  }

  :host(:focus-visible) .rbcb__perimeter {
    outline-width: var(--gds-sys-space-3xs);
    scale: 1;
  }

  @media (hover: hover) {
    .rbcb:hover:not(.--disabled) .rbcb__perimeter,
    :host(:hover) .rbcb:not(.--disabled) .rbcb__perimeter {
      background-color: var(--_perimeter-bg-mix);
      scale: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rbcb__toggle {
      transition: none;
    }
  }

  .rbcb:active:not(.--disabled) .rbcb__perimeter,
  :host(:active) .rbcb:not(.--disabled) .rbcb__perimeter {
    background-color: var(--_perimeter-bg-mix-active);
  }

  :host(:active:not(:focus-visible)) .rbcb:active .rbcb__perimeter,
  :host(:active:not(:focus-visible)) .rbcb__perimeter {
    scale: 0.96;
  }
`

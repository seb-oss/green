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
    --_toggle-radius: var(--gds-sys-space-3xs);
    --_perimeter-radius: var(--gds-sys-space-xs);
    --_toggle-border-width-checked: var(--gds-sys-space-s);

    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-03)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-04)
    );

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_toggle-size);
    height: var(--_toggle-size);

    cursor: pointer;
  }

  :not(.rbcb-wrapper) .rbcb {
    margin-block-start: calc(var(--gds-sys-space-5xs) * 2);
  }

  .rbcb--radio {
    --_toggle-radius: var(--gds-sys-space-max);
    --_perimeter-radius: var(--gds-sys-space-max);
    --_toggle-border-width-checked: var(--gds-sys-space-3xs);
  }

  .rbcb__toggle {
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    border-radius: var(--_toggle-radius);
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-l3-neutral-01);
    background-color: var(--gds-sys-color-l1-neutral-01);
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
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
    color: var(--gds-sys-color-content-neutral-03);
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-4xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-content-neutral-01);
    border-radius: var(--_perimeter-radius);
    min-width: var(--_perimeter-size, var(--gds-sys-space-2xl));
    min-height: var(--_perimeter-size, var(--gds-sys-space-2xl));
    position: absolute;
    left: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-01);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-01);
  }

  .--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-border-negative-01);
  }

  .--disabled {
    cursor: default;
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-sys-color-l3-disabled-02);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-sys-color-l3-negative-02);
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-border-negative-01);
  }

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-l3-negative-01);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-sys-color-border-negative-01);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-state-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-sys-color-content-negative-01);
  }

  /* Visually hidden checkbox   */
  .visually-hidden-checkbox {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }

  .rbcb-wrapper {
    position: relative;
  }

  /*
   * When using the checkbox in a listbox, we need to remove the outline
   * from the checkbox since it exsist on the list item
   */
  :host([gds-element='gds-option']) .rbcb__perimeter {
    outline: none;
  }

  :host([gds-element='gds-radio']:focus-visible) .rbcb__perimeter,
  :host([gds-element='gds-radio']:focus-within) .rbcb__perimeter,
  :host([gds-element='gds-checkbox']:focus-visible) .rbcb__perimeter,
  :host([gds-element='gds-checkbox']:focus-within) .rbcb__perimeter,
  .rbcb-wrapper:focus-visible .rbcb__perimeter,
  .rbcb-wrapper:focus-within .rbcb__perimeter {
    outline-width: var(--gds-sys-space-4xs);
    scale: 1;
  }

  @media (hover: hover) {
    :host([gds-element='gds-checkbox']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    :host([gds-element='gds-option']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    :host([gds-element='gds-radio']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    .rbcb:hover:not(.--disabled) .rbcb__perimeter {
      background-color: var(--_perimeter-bg-mix);
      scale: 1;
    }
  }

  :host([gds-element='gds-checkbox']:active)
    .rbcb:not(.--disabled)
    .rbcb__perimeter,
  :host([gds-element='gds-radio']:active)
    .rbcb:not(.--disabled)
    .rbcb__perimeter,
  .rbcb:active:not(.--disabled) .rbcb__perimeter {
    background-color: var(--_perimeter-bg-mix-active);
    scale: 0.9;
  }

  @media (prefers-reduced-motion: reduce) {
    .rbcb__toggle {
      transition: none;
    }
  }
`

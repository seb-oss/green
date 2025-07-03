import{i as l}from"./lit-element-Bx14lxc-.js";import{e as n}from"./class-map-CXsQwv0r.js";import{n as o}from"./when-BR7zwNJC.js";import{h as s}from"./gds-element-DKcDvDP5.js";const h=l`
  .rbcb {
    --_toggle-size: var(--gds-sys-space-m);
    --_toggle-radius: var(--gds-sys-space-2xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_toggle-border-width-checked: var(--gds-sys-space-s);

    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-02),
      var(--gds-sys-color-state-light-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-02),
      var(--gds-sys-color-state-light-pressed)
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
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs) var(--gds-sys-color-l3-01);
    background-color: var(--gds-sys-color-l1-01);
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
    color: var(--gds-sys-color-content-inversed);
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-3xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-content-01);
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
      var(--gds-sys-color-l3-01);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-border-interactive);
  }

  .--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
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
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-border-negative-01);
  }

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
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

  /*
   * When using the checkbox in a listbox, we need to remove the outline
   * from the checkbox since it exsist on the list item
   */
  :host([gds-element='gds-option']) .rbcb__perimeter {
    outline: none;
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
    scale: 0.9;
  }
`,p=e=>a({...e,type:"checkbox"}),y=e=>a({...e,type:"radio"}),a=e=>{const{type:r,checked:i,indeterminate:t,disabled:c,invalid:d}=e;return s`
    <div class="rbcb ${n({"rbcb--checkbox":r==="checkbox","rbcb--radio":r==="radio","--checked":i,"--indeterminate":t,"--disabled":c,"--invalid":d})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${o(r==="checkbox",()=>s`
            ${o(t,()=>s`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>o(i,()=>s`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `};export{y as a,p as c,h as r};

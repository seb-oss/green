import{i as E,n as p,R as S,f as k,y as V,H as F,I as M,Q as O,a0 as W,a as D,h as n,o as G,g as I}from"./iframe-BfmYTVu1.js";import{I as L}from"./checkmark.component-CKHa9wGj.js";const T=E`
  @media (prefers-reduced-motion: reduce) {
    :is(.track, .thumb, .checkmark) {
      transition: none;
    }

    .perimeter.ripple {
      animation: none;
    }
  }

  :host {
    --switch-motion-track-duration: var(--gds-sys-motion-duration-default);
    --switch-motion-thumb-duration: var(--gds-sys-motion-duration-fast);
    --switch-motion-checkmark-duration: var(--gds-sys-motion-duration-default);
    --switch-motion-ripple-duration: var(--gds-sys-motion-duration-default);
    --switch-motion-ease: cubic-bezier(var(--gds-sys-motion-easing-ease-out));
    --switch-gap: var(--gds-sys-space-s);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
  }

  #switch-input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .switch {
    display: flex;
    align-items: center;
    justify-content: flex-start;
    flex-direction: row;
    gap: var(--switch-gap);
    user-select: none;
    cursor: pointer;
    z-index: 1;
  }

  .label {
    font: var(--gds-sys-text-detail-m-book);
  }

  .switch.control-start {
    flex-direction: row-reverse;
  }

  .switch.disabled {
    cursor: not-allowed;
  }

  .switch.small {
    --switch-gap: var(--gds-sys-space-xs);
    --switch-track-width: 38px;
    --switch-track-height: 24px;
    --switch-thumb-size: 12px;
    --switch-thumb-size-checked: 16px;
    --switch-thumb-top: 4px;
    --switch-thumb-left: 4px;
    --switch-thumb-top-checked: 2px;
    --switch-thumb-left-checked: calc(
      100% - var(--switch-thumb-size-checked) - 2px
    );
  }

  .switch.small .label {
    font: var(--gds-sys-text-detail-s-book);
  }

  .switch:not(.small) {
    --switch-track-width: 54px;
    --switch-track-height: 32px;
    --switch-thumb-size: 20px;
    --switch-thumb-size-checked: 24px;
    --switch-thumb-top: 4px;
    --switch-thumb-left: 4px;
    --switch-thumb-top-checked: 2px;
    --switch-thumb-left-checked: calc(
      100% - var(--switch-thumb-size-checked) - 2px
    );
  }

  :is(.track, .thumb, .perimeter) {
    border-radius: var(--gds-sys-radius-max);
  }

  .track {
    display: flex;
    position: relative;
    box-sizing: border-box;
    width: var(--switch-track-width);
    height: var(--switch-track-height);
    border-width: var(--gds-sys-space-4xs);
    border-style: solid;
    border-color: var(--gds-sys-color-border-neutral-01);
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-4xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
    transition:
      background-color var(--switch-motion-track-duration)
        var(--switch-motion-ease),
      border-color var(--switch-motion-track-duration) var(--switch-motion-ease),
      outline-color var(--switch-motion-track-duration)
        var(--switch-motion-ease);
  }

  #switch-input:focus-visible ~ .track {
    outline-color: var(--gds-sys-color-content-neutral-01);
  }

  .thumb {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    background: var(--gds-sys-color-border-neutral-01);
    width: var(--switch-thumb-size);
    height: var(--switch-thumb-size);
    top: var(--switch-thumb-top);
    left: var(--switch-thumb-left);
    transition:
      top var(--switch-motion-thumb-duration) var(--switch-motion-ease),
      left var(--switch-motion-thumb-duration) var(--switch-motion-ease),
      width var(--switch-motion-thumb-duration) var(--switch-motion-ease),
      height var(--switch-motion-thumb-duration) var(--switch-motion-ease),
      background-color var(--switch-motion-thumb-duration)
        var(--switch-motion-ease),
      scale var(--switch-motion-thumb-duration) var(--switch-motion-ease);
  }

  .perimeter {
    display: flex;
    position: absolute;
    inset: -6px;
    z-index: -2;
    background: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-03),
      var(--gds-sys-color-state-neutral-01)
    );
    opacity: 0;
    transform: scale(0);
    pointer-events: none;
  }

  .perimeter.ripple {
    animation: perimeter-pulse var(--switch-motion-ripple-duration)
      var(--switch-motion-ease);
  }

  @keyframes perimeter-pulse {
    from {
      opacity: 1;
      transform: scale(0);
    }
    to {
      opacity: 0;
      transform: scale(1.2);
    }
  }

  .checkmark {
    opacity: 0;
    scale: 0;
    transition:
      scale var(--switch-motion-checkmark-duration) var(--switch-motion-ease),
      opacity var(--switch-motion-checkmark-duration) var(--switch-motion-ease);
    transform-origin: center;
  }

  @media (pointer: fine) {
    .switch:not(.disabled):not(:active):hover .thumb {
      scale: 1.085;
    }
  }

  .checked {
    .track {
      background-color: var(--gds-sys-color-l3-positive-01);
      border-color: var(--gds-sys-color-l3-positive-01);
    }

    .thumb {
      top: var(--switch-thumb-top-checked);
      left: var(--switch-thumb-left-checked);
      width: var(--switch-thumb-size-checked);
      height: var(--switch-thumb-size-checked);
      background: var(--gds-sys-color-content-neutral-05);
    }

    .checkmark {
      opacity: 1;
      scale: 1;
      color: var(--gds-sys-color-l3-positive-01);
    }

    .perimeter {
      background: color-mix(
        in srgb,
        var(--gds-sys-color-l3-positive-01),
        var(--gds-sys-color-state-positive-01)
      );
    }
  }

  .switch.disabled .track {
    background-color: var(--gds-sys-color-l3-disabled-01);
    border-color: var(--gds-sys-color-content-disabled-01);
    outline-color: transparent;
  }

  .switch.disabled .thumb {
    background: var(--gds-sys-color-content-disabled-01);
  }

  .switch.disabled .perimeter {
    background: var(--gds-sys-color-state-neutral-01);
  }

  .switch.disabled .track {
    opacity: 0.6;
  }

  .switch.disabled .checkmark {
    color: var(--gds-sys-color-l3-disabled-01);
  }

  @media (prefers-color-scheme: dark) {
    .switch.disabled .track {
      opacity: 0.4;
    }
  }
`,B=T;var R=Object.defineProperty,j=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},a=(t,e,s,h)=>{for(var o=h>1?void 0:h?j(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(h?d(e,s,o):d(o))||o);return h&&o&&R(e,s,o),o},g=(t,e,s)=>e.has(t)||f("Cannot "+s),v=(t,e,s)=>(g(t,e,"read from private field"),s?s.call(t):e.get(t)),u=(t,e,s)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),c=(t,e,s)=>(g(t,e,"access private method"),s),r,y,x,_,z,m,P,w,C,$;let i=class extends W{constructor(){super(...arguments),u(this,r),this.checked=!1,this.controlPlacement="end",this.size="large",this["justify-content"]="flex-start",u(this,m,()=>{this.checked=this._input.checked,c(this,r,$).call(this),c(this,r,P).call(this)}),u(this,w,t=>{this.disabled||t.key==="Enter"&&(t.preventDefault(),this._input.click())})}get value(){return this._internalValue||"on"}set value(t){this._internalValue=t}_getValidityAnchor(){return this._input}formResetCallback(){this.checked=!1,this._internalValue=void 0}focus(t){this._input?.focus(t)}render(){const t={switch:!0,checked:this.checked,disabled:this.disabled,"control-start":this.controlPlacement==="start",small:this.size==="small"};return n`
      <label class=${D(t)} for="switch-input">
        ${[c(this,r,y).call(this),c(this,r,x).call(this),c(this,r,z).call(this)]}
      </label>
    `}};r=new WeakSet;y=function(){return n`
      <input
        id="switch-input"
        type="checkbox"
        role="switch"
        .checked=${this.checked}
        ?disabled=${this.disabled}
        aria-label=${G(this.label?void 0:"Switch")}
        @keydown=${v(this,w)}
        @change=${v(this,m)}
      />
    `};x=function(){return this.label?n`<span id="label" class="label">${this.label}</span>`:null};_=function(){return n`<span class="thumb">
      <span class="perimeter"></span>
      <gds-icon-checkmark
        size="${this.size==="small"?"xs":"s"}"
        stroke="4"
        class="checkmark"
      ></gds-icon-checkmark>
    </span>`};z=function(){return n`
      <span class="track" aria-hidden="true"> ${c(this,r,_).call(this)} </span>
    `};m=new WeakMap;P=function(){c(this,r,C).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};w=new WeakMap;C=function(){this.checked?this._setFormValue(this._internalValue||"on"):this._setFormValue(null)};$=function(){const t=this._perimeter;t&&(t.classList.remove("ripple"),t.offsetWidth,t.classList.add("ripple"))};i.styles=[B];a([p({type:Boolean,reflect:!0})],i.prototype,"checked",2);a([p({attribute:"control-placement",reflect:!0})],i.prototype,"controlPlacement",2);a([p({reflect:!0})],i.prototype,"size",2);a([S({selector:".switch",valueTemplate:t=>t})],i.prototype,"justify-content",2);a([k('input[type="checkbox"]')],i.prototype,"_input",2);a([k(".perimeter")],i.prototype,"_perimeter",2);i=a([V({labelledBy:"#switch-input",describedBy:"#switch-input",errorMessage:"#switch-input"})],i);let b=class extends F(M(O(i))){};b=a([I("gds-switch",{dependsOn:[L]})],b);export{b as G};

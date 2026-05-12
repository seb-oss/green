var y=e=>{throw TypeError(e)};var b=(e,s,t)=>s.has(e)||y("Cannot "+t);var w=(e,s,t)=>(b(e,s,"read from private field"),t?t.call(e):s.get(e)),u=(e,s,t)=>s.has(e)?y("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,t),v=(e,s,t,r)=>(b(e,s,"write to private field"),r?r.call(e,t):s.set(e,t),t),a=(e,s,t)=>(b(e,s,"access private method"),t);import{i as j,a7 as O,a as D,h,o as F,n as k,$ as L,f as x,Q as S,S as G,Z as I,g as T}from"./iframe-WQFYoQO9.js";import{I as R}from"./checkmark.component-PnTpgWTX.js";const A=j`
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
      background: var(--gds-sys-color-l3-neutral-01);
    }

    .checkmark {
      opacity: 1;
      scale: 1;
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

  @media (prefers-color-scheme: dark) {
    .switch.disabled .track {
      opacity: 0.4;
    }
  }
`,B=A;var K=Object.defineProperty,M=Object.getOwnPropertyDescriptor,n=(e,s,t,r)=>{for(var c=r>1?void 0:r?M(s,t):s,p=e.length-1,m;p>=0;p--)(m=e[p])&&(c=(r?m(s,t,c):m(c))||c);return r&&c&&K(s,t,c),c},i,z,_,$,P,l,C,d,V,E;const g=class g extends O{constructor(){super(...arguments);u(this,i);u(this,l);u(this,d);this.checked=!1,this.controlPlacement="end",this.size="large",this["justify-content"]="flex-start",v(this,l,()=>{this.checked=this._input.checked,a(this,i,E).call(this),a(this,i,C).call(this)}),v(this,d,t=>{this.disabled||t.key==="Enter"&&(t.preventDefault(),this._input.click())})}get value(){return this._internalValue||"on"}set value(t){this._internalValue=t}_getValidityAnchor(){return this._input}formResetCallback(){this.checked=!1,this._internalValue=void 0}focus(t){var r;(r=this._input)==null||r.focus(t)}render(){const t={switch:!0,checked:this.checked,disabled:this.disabled,"control-start":this.controlPlacement==="start",small:this.size==="small"};return h`
      <label class=${D(t)} for="switch-input">
        ${[a(this,i,z).call(this),a(this,i,_).call(this),a(this,i,P).call(this)]}
      </label>
    `}};i=new WeakSet,z=function(){return h`
      <input
        id="switch-input"
        type="checkbox"
        role="switch"
        .checked=${this.checked}
        ?disabled=${this.disabled}
        aria-label=${F(this.label?void 0:"Switch")}
        @keydown=${w(this,d)}
        @change=${w(this,l)}
      />
    `},_=function(){return this.label?h`<span id="label" class="label">${this.label}</span>`:null},$=function(){return h`<span class="thumb">
      <span class="perimeter"></span>
      <gds-icon-checkmark
        size="${this.size==="small"?"xs":"s"}"
        stroke="4"
        color=${this.disabled?"neutral-05":"positive-01"}
        class="checkmark"
      ></gds-icon-checkmark>
    </span>`},P=function(){return h`
      <span class="track" aria-hidden="true"> ${a(this,i,$).call(this)} </span>
    `},l=new WeakMap,C=function(){a(this,i,V).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})},d=new WeakMap,V=function(){this.checked?this._setFormValue(this._internalValue||"on"):this._setFormValue(null)},E=function(){const t=this._perimeter;t&&(t.classList.remove("ripple"),t.offsetWidth,t.classList.add("ripple"))},g.styles=[B];let o=g;n([k({type:Boolean,reflect:!0})],o.prototype,"checked",2);n([k({attribute:"control-placement",reflect:!0})],o.prototype,"controlPlacement",2);n([k({reflect:!0})],o.prototype,"size",2);n([L({selector:".switch",valueTemplate:e=>e})],o.prototype,"justify-content",2);n([x('input[type="checkbox"]')],o.prototype,"_input",2);n([x(".perimeter")],o.prototype,"_perimeter",2);let f=class extends S(G(I(o))){};f=n([T("gds-switch",{dependsOn:[R]})],f);export{f as G};

import{l as S}from"./runtime-CNluP0A8.js";import{n as d,G as T,h as c,g as k,r as j}from"./gds-element-DKcDvDP5.js";import{a as H}from"./query-p8xgzTDt.js";import{e as C}from"./class-map-CXsQwv0r.js";import{G as K,a as q}from"./form-control-header.component-CuIHKeYV.js";import{t as R}from"./tokens.style-Khpz0lp_.js";import{w as F}from"./watch-tFciLXSI.js";import{d as U,b as X,w as J}from"./declarative-layout-mixins-D-CzJZ0x.js";import{a as N}from"./button.component-CP7I7SJN.js";import{i as _}from"./lit-element-Bx14lxc-.js";import{n as f}from"./when-BR7zwNJC.js";const Q=_`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .container {
      display: flex;
      gap: var(--gds-sys-space-s);
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    slot[name='label']::slotted(*) {
      font-weight: var(--gds-sys-text-weight-book);
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font-size: var(--_font-size-supporting-text);
      line-height: var(--_line-height-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,z=(e,t,s,i)=>{for(var r=i>1?void 0:i?Z(t,s):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(i?l(t,s,r):l(r))||r);return i&&r&&Y(t,s,r),r};let u=class extends T{constructor(){super(),this.label="",this.supportingText=""}render(){const e={label:!0,"has-supporting-text":!!this.supportingText};return c`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${C(e)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};u.styles=[R,Q];z([d()],u.prototype,"label",2);z([d({attribute:"supporting-text"})],u.prototype,"supportingText",2);u=z([k("gds-toggle-control-base"),S()],u);const ee=_`
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

  :host(:focus-visible) .rbcb__perimeter,
  :host(:focus-within) .rbcb__perimeter {
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
`,we=e=>G({...e,type:"checkbox"}),te=e=>G({...e,type:"radio"}),G=e=>{const{type:t,checked:s,indeterminate:i,disabled:r,invalid:a}=e;return c`
    <div class="rbcb ${C({"rbcb--checkbox":t==="checkbox","rbcb--radio":t==="radio","--checked":s,"--indeterminate":i,"--disabled":r,"--invalid":a})}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${f(t==="checkbox",()=>c`
            ${f(i,()=>c`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`,()=>f(s,()=>c`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}
          `)}
      </div>
    </div>
  `},se=_`
  :host {
    /* Font Sizes */
    --_font-size-label: var(--gds-sys-text-size-detail-m);
    --_line-height-label: var(--gds-sys-text-line-height-detail-m);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
    font-size: var(--_font-size-label);
    line-height: var(--_line-height-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-l3-content-negative);
  }

  :host([size='small']) {
    --_font-size-label: var(--gds-sys-text-size-detail-s);
    --_line-height-label: var(--gds-sys-text-line-height-detail-s);
    --_font-size-supporting-text: var(--gds-sys-text-size-detail-s);
    --_line-height-supporting-text: var(--gds-sys-text-line-height-detail-s);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_radio-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-l);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-xs);
  }
`;var ie=Object.defineProperty,re=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},g=(e,t,s,i)=>{for(var r=i>1?void 0:i?re(t,s):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(i?l(t,s,r):l(r))||r);return i&&r&&ie(t,s,r),r},oe=(e,t,s)=>t.has(e)||O("Cannot "+s),ae=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),n=(e,t,s)=>(oe(e,t,"access private method"),s),o,m,D,E,P,L,x,M,B,I,W;let h=class extends N{constructor(){super(...arguments),ae(this,o),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),n(this,o,m).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(e){var t;(t=this._getValidityAnchor())==null||t.focus(e)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{n(this,o,m).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(e=>{e.checked=e.value===this.value,e.size=this.size,e.invalid=this.invalid})}render(){const e={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return c`<div
      role="radiogroup"
      id="radiogroup"
      class=${C(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${n(this,o,M).call(this)}
    </div>`}};o=new WeakSet;m=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(t=>t.checked);e?(e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(t=>!t.checked).forEach(t=>t.setAttribute("tabindex","-1"))};D=function(){if(!this._contentElement||!this._isConnected)return;const e=this.radios.find(s=>s.checked),t=e||this.radios[0];t&&(t.focus(),e||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};E=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};P=function(e){e.stopPropagation();const t=e.target;this.value=t.value,this._syncRadioStates(),n(this,o,E).call(this)};L=function(e){if(!this._isConnected)return;const t=this.radios.filter(i=>!i.disabled);if(t.length===0)return;let s=t.findIndex(i=>document.activeElement===i);switch(s===-1&&(s=t.findIndex(i=>i.checked),s===-1&&(s=0)),e.key){case"ArrowDown":case"ArrowRight":{e.preventDefault();const i=(s+1)%t.length;n(this,o,x).call(this,t[i]);break}case"ArrowUp":case"ArrowLeft":{e.preventDefault();const i=(s-1+t.length)%t.length;n(this,o,x).call(this,t[i]);break}default:return}};x=function(e){!this._contentElement||!this._isConnected||(this.radios.forEach(t=>t.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),e.checked=!0,e.focus(),this.value=e.value,this._syncRadioStates(),n(this,o,E).call(this))};M=function(){return[n(this,o,B).call(this),n(this,o,I).call(this),n(this,o,W).call(this)].map(t=>c`${t}`)};B=function(){if(this.label)return c` <gds-form-control-header
        class="size-${this.size}"
        .showExtendedSupportingText="${this.showExtendedSupportingText}"
      >
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};I=function(){return c` <div
      class="content"
      @keydown=${n(this,o,L)}
      @focus=${n(this,o,D)}
    >
      <slot @input=${n(this,o,P)}></slot>
    </div>`};W=function(){return c` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};h.styles=[R,se];g([d()],h.prototype,"size",2);g([d()],h.prototype,"direction",2);g([d({attribute:"supporting-text"})],h.prototype,"supportingText",2);g([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],h.prototype,"showExtendedSupportingText",2);g([H(".content")],h.prototype,"_contentElement",2);g([F("value")],h.prototype,"_handleValueChange",1);g([F("invalid")],h.prototype,"_syncRadioStates",1);h=g([S()],h);let $=class extends U(X(J(h))){};$=g([k("gds-radio-group",{dependsOn:[K,q]})],$);const ne=_`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-l3-content-disabled);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`;var le=Object.defineProperty,de=Object.getOwnPropertyDescriptor,V=e=>{throw TypeError(e)},b=(e,t,s,i)=>{for(var r=i>1?void 0:i?de(t,s):t,a=e.length-1,l;a>=0;a--)(l=e[a])&&(r=(i?l(t,s,r):l(r))||r);return i&&r&&le(t,s,r),r},ce=(e,t,s)=>t.has(e)||V("Cannot "+s),y=(e,t,s)=>(ce(e,t,"read from private field"),s?s.call(e):t.get(e)),A=(e,t,s)=>t.has(e)?V("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v,w;let p=class extends T{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,A(this,v,e=>{this.disabled||!this.value||!this.label||(e.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),A(this,w,e=>{this.disabled||(e.key==="Enter"||e.key===" ")&&(e.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",y(this,w)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",y(this,v))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(e){super.updated(e),(e.has("checked")||e.has("disabled")||e.has("invalid"))&&this._updateAriaState()}render(){return c`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${y(this,v)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${te({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};v=new WeakMap;w=new WeakMap;p.styles=[ee,ne];b([d()],p.prototype,"label",2);b([d({attribute:"supporting-text"})],p.prototype,"supportingText",2);b([d()],p.prototype,"value",2);b([d({type:Boolean,reflect:!0})],p.prototype,"checked",2);b([d({type:Boolean,reflect:!0})],p.prototype,"disabled",2);b([d({type:Boolean})],p.prototype,"invalid",2);b([j()],p.prototype,"_isFocused",2);p=b([k("gds-radio",{dependsOn:[u]})],p);export{p as G,$ as a,u as b,we as c,ee as r};

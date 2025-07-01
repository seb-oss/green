import{l as A}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n,G as k,h as u,g as y,r as W}from"./gds-element-DKcDvDP5.js";import{a as V}from"./query-p8xgzTDt.js";import{e as T}from"./if-defined-BAXgs-ZI.js";import{G as H,a as K}from"./form-control-header.component-D5jM4LBF.js";import{t as R}from"./tokens.style-C_w8vPoe.js";import{w as F}from"./watch-tFciLXSI.js";import{w as j,b as q,a as U}from"./declarative-layout-mixins-Bw_LIblW.js";import{a as X}from"./button.component-CqghcLOY.js";import{i as m}from"./lit-element-Bx14lxc-.js";import{r as J,a as N}from"./rbcb-toggle.template-BwdIBVxJ.js";const Q=m`
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

    .primary-label {
      font: var(--gds-sys-text-detail-book-m);
      cursor: inherit;
    }

    .supporting-text {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,C=(t,e,s,i)=>{for(var r=i>1?void 0:i?Z(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(r=(i?d(e,s,r):d(r))||r);return i&&r&&Y(e,s,r),r};let b=class extends k{constructor(){super(),this.label="",this.supportingText=""}render(){const t={label:!0,"has-supporting-text":!!this.supportingText};return u`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${T(t)}">
          <label class="primary-label"> ${this.label} </label>
          ${this.label?u`
                <span class="supporting-text"> ${this.supportingText} </span>
              `:""}
        </div>
      </div>
    `}};b.styles=[R,Q];C([n()],b.prototype,"label",2);C([n({attribute:"supporting-text"})],b.prototype,"supportingText",2);b=C([y("gds-toggle-control-base"),A()],b);const tt=m`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-s);
    font: var(--_font-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
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
`;var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,G=t=>{throw TypeError(t)},p=(t,e,s,i)=>{for(var r=i>1?void 0:i?st(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(r=(i?d(e,s,r):d(r))||r);return i&&r&&et(e,s,r),r},it=(t,e,s)=>e.has(t)||G("Cannot "+s),rt=(t,e,s)=>e.has(t)?G("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),a=(t,e,s)=>(it(t,e,"access private method"),s),o,v,z,w,O,D,g,P,L,M,B;let c=class extends X{constructor(){super(...arguments),rt(this,o),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),a(this,o,v).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{a(this,o,v).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(t=>{t.checked=t.value===this.value,t.size=this.size,t.invalid=this.invalid})}render(){const t={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return u`<div
      role="radiogroup"
      id="radiogroup"
      class=${T(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${a(this,o,P).call(this)}
    </div>`}};o=new WeakSet;v=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(e=>e.checked);t?(t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(e=>!e.checked).forEach(e=>e.setAttribute("tabindex","-1"))};z=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(s=>s.checked),e=t||this.radios[0];e&&(e.focus(),t||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};w=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};O=function(t){t.stopPropagation();const e=t.target;this.value=e.value,this._syncRadioStates(),a(this,o,w).call(this)};D=function(t){if(!this._isConnected)return;const e=this.radios.filter(i=>!i.disabled);if(e.length===0)return;let s=e.findIndex(i=>document.activeElement===i);switch(s===-1&&(s=e.findIndex(i=>i.checked),s===-1&&(s=0)),t.key){case"ArrowDown":case"ArrowRight":{t.preventDefault();const i=(s+1)%e.length;a(this,o,g).call(this,e[i]);break}case"ArrowUp":case"ArrowLeft":{t.preventDefault();const i=(s-1+e.length)%e.length;a(this,o,g).call(this,e[i]);break}default:return}};g=function(t){!this._contentElement||!this._isConnected||(this.radios.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),t.checked=!0,t.focus(),this.value=t.value,this._syncRadioStates(),a(this,o,w).call(this))};P=function(){return[a(this,o,L).call(this),a(this,o,M).call(this),a(this,o,B).call(this)].map(e=>u`${e}`)};L=function(){if(this.label)return u` <gds-form-control-header
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
      </gds-form-control-header>`};M=function(){return u` <div
      class="content"
      @keydown=${a(this,o,D)}
      @focus=${a(this,o,z)}
    >
      <slot @input=${a(this,o,O)}></slot>
    </div>`};B=function(){return u` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};c.styles=[R,tt];p([n()],c.prototype,"size",2);p([n()],c.prototype,"direction",2);p([n({attribute:"supporting-text"})],c.prototype,"supportingText",2);p([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);p([V(".content")],c.prototype,"_contentElement",2);p([F("value")],c.prototype,"_handleValueChange",1);p([F("invalid")],c.prototype,"_syncRadioStates",1);c=p([A()],c);let E=class extends j(q(U(c))){};E=p([y("gds-radio-group",{dependsOn:[H,K]})],E);const ot=m`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`;var at=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,I=t=>{throw TypeError(t)},f=(t,e,s,i)=>{for(var r=i>1?void 0:i?nt(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(r=(i?d(e,s,r):d(r))||r);return i&&r&&at(e,s,r),r},lt=(t,e,s)=>e.has(t)||I("Cannot "+s),$=(t,e,s)=>(lt(t,e,"read from private field"),s?s.call(t):e.get(t)),S=(t,e,s)=>e.has(t)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),_,x;let h=class extends k{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,S(this,_,t=>{this.disabled||!this.value||!this.label||(t.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),S(this,x,t=>{this.disabled||(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",$(this,x)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",$(this,_))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(t){super.updated(t),(t.has("checked")||t.has("disabled")||t.has("invalid"))&&this._updateAriaState()}render(){return u`
      <gds-toggle-control-base
        supporting-text=${this.supportingText}
        label=${this.label}
        type="radio"
      >
        ${N({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};_=new WeakMap;x=new WeakMap;h.styles=[J,ot];f([n()],h.prototype,"label",2);f([n({attribute:"supporting-text"})],h.prototype,"supportingText",2);f([n()],h.prototype,"value",2);f([n({type:Boolean,reflect:!0})],h.prototype,"checked",2);f([n({type:Boolean,reflect:!0})],h.prototype,"disabled",2);f([n({type:Boolean})],h.prototype,"invalid",2);f([W()],h.prototype,"_isFocused",2);h=f([y("gds-radio",{dependsOn:[b]})],h);export{h as G,E as a,b};

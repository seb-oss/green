import{l as $}from"./runtime-CNluP0A8.js";import{n as a,r as W}from"./Reflect-DJ7r0WLU.js";import{a as V}from"./query-p8xgzTDt.js";import{e as k}from"./if-defined-BAXgs-ZI.js";import{G as H,a as K}from"./form-control-header.component-DaKwxvE7.js";import{G as R,h as f,g as y}from"./gds-element-DTROifYq.js";import{t as T}from"./tokens.style-DW_p3hws.js";import{w as F}from"./watch-tFciLXSI.js";import{d as j,b as q,w as U}from"./declarative-layout-mixins-CquYcIh8.js";import{a as X}from"./button.component-B47tSEyr.js";import{i as C}from"./lit-element-Bx14lxc-.js";import{a as J}from"./transitional-styles-DOynpii0.js";import{r as N}from"./rbcb-toggle.template-B-MDayTD.js";const Q=C`
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
      font: var(--gds-sys-text-detail-book-m);
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,w=(t,e,s,i)=>{for(var o=i>1?void 0:i?Z(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(i?d(e,s,o):d(o))||o);return i&&o&&Y(e,s,o),o};let v=class extends R{constructor(){super(),this.label="",this.supportingText=""}render(){const t={label:!0,"has-supporting-text":!!this.supportingText};return f`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${k(t)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};v.styles=[T,Q];w([a()],v.prototype,"label",2);w([a({attribute:"supporting-text"})],v.prototype,"supportingText",2);v=w([y("gds-toggle-control-base"),$()],v);const tt=C`
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
`;var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,G=t=>{throw TypeError(t)},p=(t,e,s,i)=>{for(var o=i>1?void 0:i?st(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(i?d(e,s,o):d(o))||o);return i&&o&&et(e,s,o),o},it=(t,e,s)=>e.has(t)||G("Cannot "+s),ot=(t,e,s)=>e.has(t)?G("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),n=(t,e,s)=>(it(t,e,"access private method"),s),r,_,z,E,O,D,x,P,L,M,B;let c=class extends X{constructor(){super(...arguments),ot(this,r),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),n(this,r,_).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{n(this,r,_).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(t=>{t.checked=t.value===this.value,t.size=this.size,t.invalid=this.invalid})}render(){const t={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return f`<div
      role="radiogroup"
      id="radiogroup"
      class=${k(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${n(this,r,P).call(this)}
    </div>`}};r=new WeakSet;_=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(e=>e.checked);t?(t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(e=>!e.checked).forEach(e=>e.setAttribute("tabindex","-1"))};z=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(s=>s.checked),e=t||this.radios[0];e&&(e.focus(),t||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};E=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};O=function(t){t.stopPropagation();const e=t.target;this.value=e.value,this._syncRadioStates(),n(this,r,E).call(this)};D=function(t){if(!this._isConnected)return;const e=this.radios.filter(i=>!i.disabled);if(e.length===0)return;let s=e.findIndex(i=>document.activeElement===i);switch(s===-1&&(s=e.findIndex(i=>i.checked),s===-1&&(s=0)),t.key){case"ArrowDown":case"ArrowRight":{t.preventDefault();const i=(s+1)%e.length;n(this,r,x).call(this,e[i]);break}case"ArrowUp":case"ArrowLeft":{t.preventDefault();const i=(s-1+e.length)%e.length;n(this,r,x).call(this,e[i]);break}default:return}};x=function(t){!this._contentElement||!this._isConnected||(this.radios.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),t.checked=!0,t.focus(),this.value=t.value,this._syncRadioStates(),n(this,r,E).call(this))};P=function(){return[n(this,r,L).call(this),n(this,r,M).call(this),n(this,r,B).call(this)].map(e=>f`${e}`)};L=function(){if(this.label)return f` <gds-form-control-header
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
      </gds-form-control-header>`};M=function(){return f` <div
      class="content"
      @keydown=${n(this,r,D)}
      @focus=${n(this,r,z)}
    >
      <slot @input=${n(this,r,O)}></slot>
    </div>`};B=function(){return f` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};c.styles=[T,tt];p([a()],c.prototype,"size",2);p([a()],c.prototype,"direction",2);p([a({attribute:"supporting-text"})],c.prototype,"supportingText",2);p([a({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);p([V(".content")],c.prototype,"_contentElement",2);p([F("value")],c.prototype,"_handleValueChange",1);p([F("invalid")],c.prototype,"_syncRadioStates",1);c=p([$()],c);let A=class extends j(q(U(c))){};A=p([y("gds-radio-group",{dependsOn:[H,K]})],A);const rt=C`
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
`;var nt=Object.defineProperty,at=Object.getOwnPropertyDescriptor,I=t=>{throw TypeError(t)},u=(t,e,s,i)=>{for(var o=i>1?void 0:i?at(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(i?d(e,s,o):d(o))||o);return i&&o&&nt(e,s,o),o},lt=(t,e,s)=>e.has(t)||I("Cannot "+s),b=(t,e,s)=>(lt(t,e,"read from private field"),s?s.call(t):e.get(t)),S=(t,e,s)=>e.has(t)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),g,m;let h=class extends R{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,S(this,g,t=>{this.disabled||!this.value||!this.label||(t.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),S(this,m,t=>{this.disabled||(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",b(this,m)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",b(this,g))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(t){super.updated(t),(t.has("checked")||t.has("disabled")||t.has("invalid"))&&this._updateAriaState()}render(){return f`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${b(this,g)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${N({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};g=new WeakMap;m=new WeakMap;h.styles=[J,rt];u([a()],h.prototype,"label",2);u([a({attribute:"supporting-text"})],h.prototype,"supportingText",2);u([a()],h.prototype,"value",2);u([a({type:Boolean,reflect:!0})],h.prototype,"checked",2);u([a({type:Boolean,reflect:!0})],h.prototype,"disabled",2);u([a({type:Boolean})],h.prototype,"invalid",2);u([W()],h.prototype,"_isFocused",2);h=u([y("gds-radio",{dependsOn:[v]})],h);export{h as G,A as a,v as b};

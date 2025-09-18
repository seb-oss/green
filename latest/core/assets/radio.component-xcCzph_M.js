import{l as $}from"./runtime-CNluP0A8.js";import{n,r as W}from"./Reflect-DJ7r0WLU.js";import{a as V}from"./query-p8xgzTDt.js";import{e as k}from"./if-defined-BAXgs-ZI.js";import{G as H,a as K}from"./form-control-header.component-DIQtapHK.js";import{G as R,h as f,g as y}from"./gds-element-DTROifYq.js";import{t as T}from"./tokens.style-BS_h03Rl.js";import{w as z}from"./watch-tFciLXSI.js";import{d as j,b as q,w as U}from"./declarative-layout-mixins-DjJmHTNk.js";import{a as X}from"./button.component-HPQBaSXh.js";import{i as C}from"./lit-element-Bx14lxc-.js";import{a as J}from"./transitional-styles-D2m6PuZd.js";import{r as N}from"./rbcb-toggle.template-B-MDayTD.js";const Q=C`
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
      gap: var(--_container-gap, var(--gds-sys-space-s));
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    slot[name='label']::slotted(*) {
      font: var(--_font-label, var(--gds-sys-text-detail-book-m));
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,w=(t,e,s,i)=>{for(var o=i>1?void 0:i?Z(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(i?d(e,s,o):d(o))||o);return i&&o&&Y(e,s,o),o};let g=class extends R{constructor(){super(),this.label="",this.supportingText=""}render(){const t={label:!0,"has-supporting-text":!!this.supportingText};return f`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${k(t)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};g.styles=[T,Q];w([n()],g.prototype,"label",2);w([n({attribute:"supporting-text"})],g.prototype,"supportingText",2);g=w([y("gds-toggle-control-base"),$()],g);const tt=C`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .radio-group {
    gap: var(--gds-sys-space-xs);
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
    gap: var(--gds-sys-space-s) var(--gds-sys-space-xl);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) .direction-column .content {
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) .direction-row .content {
    gap: var(--gds-sys-space-xs) var(--gds-sys-space-m);
  }
`;var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,F=t=>{throw TypeError(t)},h=(t,e,s,i)=>{for(var o=i>1?void 0:i?st(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(i?d(e,s,o):d(o))||o);return i&&o&&et(e,s,o),o},it=(t,e,s)=>e.has(t)||F("Cannot "+s),ot=(t,e,s)=>e.has(t)?F("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),a=(t,e,s)=>(it(t,e,"access private method"),s),r,_,G,E,O,D,x,P,L,M,B;let c=class extends X{constructor(){super(...arguments),ot(this,r),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),a(this,r,_).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{a(this,r,_).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(t=>{t.checked=t.value===this.value,t.size=this.size,t.invalid=this.invalid})}render(){const t={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return f`<div
      role="radiogroup"
      id="radiogroup"
      class=${k(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${a(this,r,P).call(this)}
    </div>`}};r=new WeakSet;_=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(e=>e.checked);t?(t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(e=>!e.checked).forEach(e=>e.setAttribute("tabindex","-1"))};G=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(s=>s.checked),e=t||this.radios[0];e&&(e.focus(),t||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};E=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};O=function(t){t.stopPropagation();const e=t.target;this.value=e.value,this._syncRadioStates(),a(this,r,E).call(this)};D=function(t){if(!this._isConnected)return;const e=this.radios.filter(i=>!i.disabled);if(e.length===0)return;let s=e.findIndex(i=>document.activeElement===i);switch(s===-1&&(s=e.findIndex(i=>i.checked),s===-1&&(s=0)),t.key){case"ArrowDown":case"ArrowRight":{t.preventDefault();const i=(s+1)%e.length;a(this,r,x).call(this,e[i]);break}case"ArrowUp":case"ArrowLeft":{t.preventDefault();const i=(s-1+e.length)%e.length;a(this,r,x).call(this,e[i]);break}default:return}};x=function(t){!this._contentElement||!this._isConnected||(this.radios.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),t.checked=!0,t.focus(),this.value=t.value,this._syncRadioStates(),a(this,r,E).call(this))};P=function(){return[a(this,r,L).call(this),a(this,r,M).call(this),a(this,r,B).call(this)].map(e=>f`${e}`)};L=function(){if(this.label)return f` <gds-form-control-header
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
      @keydown=${a(this,r,D)}
      @focus=${a(this,r,G)}
    >
      <slot @input=${a(this,r,O)}></slot>
    </div>`};B=function(){return f` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};c.styles=[T,tt];h([n()],c.prototype,"size",2);h([n()],c.prototype,"direction",2);h([n({attribute:"supporting-text"})],c.prototype,"supportingText",2);h([n({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],c.prototype,"showExtendedSupportingText",2);h([V(".content")],c.prototype,"_contentElement",2);h([z("value")],c.prototype,"_handleValueChange",1);h([z("invalid")],c.prototype,"_syncRadioStates",1);c=h([$()],c);let A=class extends j(q(U(c))){};A=h([y("gds-radio-group",{dependsOn:[H,K]})],A);const rt=C`
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
`;var at=Object.defineProperty,nt=Object.getOwnPropertyDescriptor,I=t=>{throw TypeError(t)},u=(t,e,s,i)=>{for(var o=i>1?void 0:i?nt(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(o=(i?d(e,s,o):d(o))||o);return i&&o&&at(e,s,o),o},lt=(t,e,s)=>e.has(t)||I("Cannot "+s),b=(t,e,s)=>(lt(t,e,"read from private field"),s?s.call(t):e.get(t)),S=(t,e,s)=>e.has(t)?I("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),v,m;let p=class extends R{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,S(this,v,t=>{this.disabled||!this.value||!this.label||(t.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),S(this,m,t=>{this.disabled||(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",b(this,m)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",b(this,v))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.toggleAttribute("aria-invalid",this.invalid)}updated(t){super.updated(t),(t.has("checked")||t.has("disabled")||t.has("invalid"))&&this._updateAriaState()}render(){return f`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${b(this,v)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${N({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};v=new WeakMap;m=new WeakMap;p.styles=[J,rt];u([n()],p.prototype,"label",2);u([n({attribute:"supporting-text"})],p.prototype,"supportingText",2);u([n()],p.prototype,"value",2);u([n({type:Boolean,reflect:!0})],p.prototype,"checked",2);u([n({type:Boolean,reflect:!0})],p.prototype,"disabled",2);u([n({type:Boolean})],p.prototype,"invalid",2);u([W()],p.prototype,"_isFocused",2);p=u([y("gds-radio",{dependsOn:[g]})],p);export{p as G,A as a,g as b};

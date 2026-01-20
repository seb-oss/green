import{i as w,ah as D,n as l,I as O,J as P,h as f,g as k,t as L,d as I,a8 as _,Q as B,S as W,a0 as V,a9 as H,a as K}from"./iframe-CJoIiIdK.js";import{G as q}from"./toggle-control-base.component-sjzhA5PK.js";import{r as J}from"./rbcb-toggle.template-DyWjXP9d.js";import{l as Q}from"./localized-decorator-B52viOIE.js";import{G as U,a as X}from"./form-control-header.component-Cvo4PuFM.js";const N=w`
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
`;var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,S=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var a=i>1?void 0:i?Z(e,s):e,p=t.length-1,u;p>=0;p--)(u=t[p])&&(a=(i?u(e,s,a):u(a))||a);return i&&a&&Y(e,s,a),a},j=(t,e,s)=>e.has(t)||S("Cannot "+s),v=(t,e,s)=>(j(t,e,"read from private field"),s?s.call(t):e.get(t)),C=(t,e,s)=>e.has(t)?S("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),g,b;let n=class extends P{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,C(this,g,t=>{this.disabled||!this.value||!this.label||(t.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),C(this,b,t=>{this.disabled||(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",v(this,b)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",v(this,g))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.setAttribute("aria-description",this.errorMessage?this.errorMessage:""),this.toggleAttribute("aria-invalid",this.invalid)}updated(t){super.updated(t),(t.has("checked")||t.has("disabled")||t.has("invalid"))&&this._updateAriaState()}render(){return f`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${v(this,g)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${J({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};g=new WeakMap;b=new WeakMap;n.styles=[D,N];c([l()],n.prototype,"label",2);c([l({attribute:"supporting-text"})],n.prototype,"supportingText",2);c([l()],n.prototype,"value",2);c([l({type:Boolean,reflect:!0})],n.prototype,"checked",2);c([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);c([l({type:Boolean})],n.prototype,"invalid",2);c([l({type:String})],n.prototype,"errorMessage",2);c([O()],n.prototype,"_isFocused",2);n=c([k("gds-radio",{dependsOn:[q]})],n);const tt=w`
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
`;var et=Object.defineProperty,st=Object.getOwnPropertyDescriptor,A=t=>{throw TypeError(t)},h=(t,e,s,i)=>{for(var a=i>1?void 0:i?st(e,s):e,p=t.length-1,u;p>=0;p--)(u=t[p])&&(a=(i?u(e,s,a):u(a))||a);return i&&a&&et(e,s,a),a},it=(t,e,s)=>e.has(t)||A("Cannot "+s),at=(t,e,s)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),o=(t,e,s)=>(it(t,e,"access private method"),s),r,x,$,m,R,z,y,F,G,T,M;let d=class extends H{constructor(){super(...arguments),at(this,r),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),o(this,r,x).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(t){var e;(e=this._getValidityAnchor())==null||e.focus(t)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{o(this,r,x).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(t=>{t.checked=t.value===this.value,t.size=this.size,t.invalid=this.invalid,t.errorMessage=this.errorMessage})}render(){const t={"radio-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return f`<div
      role="radiogroup"
      id="radiogroup"
      class=${K(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${o(this,r,F).call(this)}
    </div>`}};r=new WeakSet;x=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(e=>e.checked);t?(t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(e=>!e.checked).forEach(e=>e.setAttribute("tabindex","-1"))};$=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(s=>s.checked),e=t||this.radios[0];e&&(e.focus(),t||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};m=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};R=function(t){t.stopPropagation();const e=t.target;this.value=e.value,this._syncRadioStates(),o(this,r,m).call(this)};z=function(t){if(!this._isConnected)return;const e=this.radios.filter(i=>!i.disabled);if(e.length===0)return;let s=e.findIndex(i=>document.activeElement===i);switch(s===-1&&(s=e.findIndex(i=>i.checked),s===-1&&(s=0)),t.key){case"ArrowDown":case"ArrowRight":{t.preventDefault();const i=(s+1)%e.length;o(this,r,y).call(this,e[i]);break}case"ArrowUp":case"ArrowLeft":{t.preventDefault();const i=(s-1+e.length)%e.length;o(this,r,y).call(this,e[i]);break}default:return}};y=function(t){!this._contentElement||!this._isConnected||(this.radios.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),t.checked=!0,t.focus(),this.value=t.value,this._syncRadioStates(),o(this,r,m).call(this))};F=function(){return[o(this,r,G).call(this),o(this,r,T).call(this),o(this,r,M).call(this)].map(e=>f`${e}`)};G=function(){if(this.label)return f` <gds-form-control-header
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
      </gds-form-control-header>`};T=function(){return f` <div
      class="content"
      @keydown=${o(this,r,z)}
      @focus=${o(this,r,$)}
    >
      <slot @input=${o(this,r,R)}></slot>
    </div>`};M=function(){return f` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};d.styles=[L,tt];h([l()],d.prototype,"size",2);h([l()],d.prototype,"direction",2);h([l({attribute:"supporting-text"})],d.prototype,"supportingText",2);h([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);h([I(".content")],d.prototype,"_contentElement",2);h([_("value")],d.prototype,"_handleValueChange",1);h([_("invalid"),_("errorMessage")],d.prototype,"_syncRadioStates",1);d=h([Q()],d);let E=class extends B(W(V(d))){};E=h([k("gds-radio-group",{dependsOn:[U,X]})],E);export{n as G,E as a};

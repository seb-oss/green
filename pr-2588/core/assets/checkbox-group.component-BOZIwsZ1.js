import{i as $,t as A,ai as B,n as i,d as w,a8 as x,a9 as G,b as W,h as g,g as E,U as H,Q as U,S as J,a0 as N,a as O}from"./iframe-CJRfEGsj.js";import{G as q}from"./toggle-control-base.component-7Oi1EWHE.js";import{c as Q}from"./rbcb-toggle.template-MVFq5vSP.js";import{I as R}from"./checkmark.component-CmN0yaht.js";import{I as X}from"./minus-small.component-Dc_13eel.js";import{l as K}from"./localized-decorator-bnc5vlTW.js";import{G as Y,a as Z}from"./form-control-header.component-Bifo4n9C.js";const j=$`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-content-negative-01);
  }

  :host(:focus) {
    outline: none;
  }

  #message {
    display: none;
  }
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},h=(e,t,s,c)=>{for(var a=c>1?void 0:c?te(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&ee(t,s,a),a},se=(e,t,s)=>t.has(e)||S("Cannot "+s),ae=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),y=(e,t,s)=>(se(e,t,"access private method"),s),b,M,_;let l=class extends G{constructor(){super(...arguments),ae(this,b),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return g`
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?indeterminate=${this.indeterminate}
          aria-invalid=${this.invalid}
          aria-describedby="message supporting-text"
          id="checkbox-input"
          @change=${()=>{this.checked=this._elCheckbox.checked,y(this,b,_).call(this)}}
        />
        ${W(this.errorMessage,()=>g`<span id="message">${this.errorMessage}</span>`)}
        <gds-toggle-control-base type="checkbox" @click=${y(this,b,M)}>
          <label for="checkbox-input" slot="label"> ${this.label} </label>
          <span
            slot="supporting-text"
            class="supporting-text"
            id="supporting-text"
          >
            ${this.supportingText}
          </span>
          ${Q({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
        </gds-toggle-control-base>
      </div>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};b=new WeakSet;M=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,y(this,b,_).call(this))};_=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};l.styles=[A,B,j];h([i()],l.prototype,"label",2);h([i({attribute:"supporting-text"})],l.prototype,"supportingText",2);h([i({type:Boolean})],l.prototype,"checked",2);h([i({type:Boolean,reflect:!0})],l.prototype,"indeterminate",2);h([i({type:Boolean,reflect:!0})],l.prototype,"disabled",2);h([w('input[type="checkbox"]')],l.prototype,"_elCheckbox",2);h([x("indeterminate")],l.prototype,"_handleIndeterminateChange",1);l=h([E("gds-checkbox",{dependsOn:[q,R,X]})],l);const re=$`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);

    /* Perimiter */
    --_perimeter-size: var(--gds-sys-space-2xl);
    --_container-gap: var(--gds-sys-space-s);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .checkbox-group {
    gap: var(--gds-sys-space-xs);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_checkbox-label-color);
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

  .visually-hidden {
    border: 0;
    clip: rect(0 0 0 0);
    height: 1px;
    margin: -1px;
    overflow: hidden;
    padding: 0;
    position: absolute;
    width: 1px;
  }
`;var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,z=e=>{throw TypeError(e)},o=(e,t,s,c)=>{for(var a=c>1?void 0:c?ie(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&oe(t,s,a),a},P=(e,t,s)=>t.has(e)||z("Cannot "+s),f=(e,t,s)=>(P(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?z("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(P(e,t,"access private method"),s),v,n,T,V,F,I,m,L,D;let r=class extends G{constructor(){super(...arguments),k(this,n),this.size="large",this.direction="column",this.hideLabel=!1,this.supportingText="",this.showExtendedSupportingText=!1,k(this,v,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){f(this,v).call(this)}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",f(this,v))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${O(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${d(this,n,T).call(this)}
    </div>`}_syncOnDOMChange(){f(this,v).call(this),d(this,n,m).call(this)}};v=new WeakMap;n=new WeakSet;T=function(){return[d(this,n,V).call(this),d(this,n,F).call(this),d(this,n,D).call(this)].map(t=>g`${t}`)};V=function(){if(this.label)return g`<gds-form-control-header
        class=${O({[`size-${this.size}`]:!0,"visually-hidden":this.hideLabel})}
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
      </gds-form-control-header>`};F=function(){return g`<div class="content">
      <slot @input=${d(this,n,I)}></slot>
    </div>`};I=function(e){e&&e.stopPropagation(),d(this,n,m).call(this),d(this,n,L).call(this)};m=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};L=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};D=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};r.styles=[re];o([i()],r.prototype,"size",2);o([i()],r.prototype,"direction",2);o([i({type:Boolean,attribute:"hide-label"})],r.prototype,"hideLabel",2);o([i({attribute:"supporting-text"})],r.prototype,"supportingText",2);o([i({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);o([i({type:Array})],r.prototype,"value",1);o([w("#checkboxgroup")],r.prototype,"_elCheckboxGroup",2);o([x("value",{waitUntilFirstUpdate:!0})],r.prototype,"_handleValueChange",1);o([x("invalid"),x("errorMessage")],r.prototype,"_handleGroupInvalidChange",1);o([H({attributes:!0,childList:!0,subtree:!0,characterData:!0})],r.prototype,"_syncOnDOMChange",1);r=o([K()],r);let C=class extends U(J(N(r))){};C=o([E("gds-checkbox-group",{dependsOn:[Y,Z]})],C);export{l as G,C as a};

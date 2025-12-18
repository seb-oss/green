import{i as $,t as A,af as L,n as l,d as w,a2 as f,a3 as G,b as B,h as g,g as E,L as W,J as H,K as J,U,a as N}from"./iframe-a2ZbZpP3.js";import{G as q}from"./toggle-control-base.component-CbOJpEZr.js";import{c as K}from"./rbcb-toggle.template-Dyfo1X36.js";import{I as R}from"./checkmark.component-Dx90FUJj.js";import{I as X}from"./minus-small.component-B9J-QSOa.js";import{l as Q}from"./localized-decorator-Bmo7rl4w.js";import{G as Y,a as Z}from"./form-control-header.component-Be3Rbof_.js";const j=$`
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
`;var ee=Object.defineProperty,te=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},h=(e,t,s,c)=>{for(var r=c>1?void 0:c?te(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(r=(c?u(t,s,r):u(r))||r);return c&&r&&ee(t,s,r),r},se=(e,t,s)=>t.has(e)||O("Cannot "+s),re=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_=(e,t,s)=>(se(e,t,"access private method"),s),x,M,m;let n=class extends G{constructor(){super(...arguments),re(this,x),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return g`
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          ?indeterminate=${this.indeterminate}
          aria-invalid=${this.invalid}
          aria-describedby="message supporting-text"
          id="checkbox-input"
          @change=${()=>{this.checked=this._elCheckbox.checked,_(this,x,m).call(this)}}
        />
        ${B(this.errorMessage,()=>g`<span id="message">${this.errorMessage}</span>`)}
        <gds-toggle-control-base type="checkbox" @click=${_(this,x,M)}>
          <label for="checkbox-input" slot="label"> ${this.label} </label>
          <span
            slot="supporting-text"
            class="supporting-text"
            id="supporting-text"
          >
            ${this.supportingText}
          </span>
          ${K({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
        </gds-toggle-control-base>
      </div>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};x=new WeakSet;M=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,_(this,x,m).call(this))};m=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};n.styles=[A,L,j];h([l()],n.prototype,"label",2);h([l({attribute:"supporting-text"})],n.prototype,"supportingText",2);h([l({type:Boolean})],n.prototype,"checked",2);h([l({type:Boolean,reflect:!0})],n.prototype,"indeterminate",2);h([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);h([w('input[type="checkbox"]')],n.prototype,"_elCheckbox",2);h([f("indeterminate")],n.prototype,"_handleIndeterminateChange",1);n=h([E("gds-checkbox",{dependsOn:[q,R,X]})],n);const ae=$`
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
`;var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},o=(e,t,s,c)=>{for(var r=c>1?void 0:c?ie(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(r=(c?u(t,s,r):u(r))||r);return c&&r&&oe(t,s,r),r},z=(e,t,s)=>t.has(e)||S("Cannot "+s),b=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),k=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(z(e,t,"access private method"),s),v,i,P,T,V,F,y,I,D;let a=class extends G{constructor(){super(...arguments),k(this,i),this.size="large",this.direction="column",this.supportingText="",this.showExtendedSupportingText=!1,k(this,v,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){b(this,v).call(this)}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",b(this,v))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${N(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${d(this,i,P).call(this)}
    </div>`}_syncOnDOMChange(){b(this,v).call(this),d(this,i,y).call(this)}};v=new WeakMap;i=new WeakSet;P=function(){return[d(this,i,T).call(this),d(this,i,V).call(this),d(this,i,D).call(this)].map(t=>g`${t}`)};T=function(){if(this.label)return g`<gds-form-control-header class="size-${this.size}">
        <label id="group-label" slot="label">${this.label}</label>
        <span slot="supporting-text" id="supporting-text">
          ${this.supportingText}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`};V=function(){return g`<div class="content">
      <slot @input=${d(this,i,F)}></slot>
    </div>`};F=function(e){e&&e.stopPropagation(),d(this,i,y).call(this),d(this,i,I).call(this)};y=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};I=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};D=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};a.styles=[ae];o([l()],a.prototype,"size",2);o([l()],a.prototype,"direction",2);o([l({attribute:"supporting-text"})],a.prototype,"supportingText",2);o([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],a.prototype,"showExtendedSupportingText",2);o([l({type:Array})],a.prototype,"value",1);o([w("#checkboxgroup")],a.prototype,"_elCheckboxGroup",2);o([f("value",{waitUntilFirstUpdate:!0})],a.prototype,"_handleValueChange",1);o([f("invalid"),f("errorMessage")],a.prototype,"_handleGroupInvalidChange",1);o([W({attributes:!0,childList:!0,subtree:!0,characterData:!0})],a.prototype,"_syncOnDOMChange",1);a=o([Q()],a);let C=class extends H(J(U(a))){};C=o([E("gds-checkbox-group",{dependsOn:[Y,Z]})],C);export{n as G,C as a};

import{i as G,y as N,a1 as R,n as o,l as E,$ as b,a as M,D as S,a0 as O,d as U,h as g,K as q,J as K,z as X,R as Q,e as z}from"./iframe-rjCVMJaw.js";import{G as Y}from"./toggle-control-base.component-DJOoNRLU.js";import{c as Z}from"./rbcb-toggle.template-DNos7dPl.js";import{I as j}from"./checkmark.component-B3BV8t7U.js";import{I as ee}from"./minus-small.component-DY0JZnGc.js";import{l as te}from"./localized-decorator-BrvJyMUG.js";import{G as se,a as ae}from"./form-control-header.component-D1lD6KG0.js";const re=G`
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
`;var ie=Object.defineProperty,oe=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},d=(e,t,s,c)=>{for(var a=c>1?void 0:c?oe(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&ie(t,s,a),a},V=(e,t,s)=>t.has(e)||T("Cannot "+s),ne=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),C=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v=(e,t,s)=>(V(e,t,"access private method"),s),x,D,y,F,m;let l=class extends O{constructor(){super(...arguments),C(this,x),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1,C(this,y,()=>{this.indeterminate?(this.indeterminate=!1,this.checked=!1,this._elCheckbox.checked=!1,this._elCheckbox.indeterminate=!1):this.checked=this._elCheckbox.checked,v(this,x,m).call(this)})}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return g`
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          .indeterminate=${this.indeterminate}
          aria-invalid=${this.invalid}
          aria-describedby="message supporting-text"
          id="checkbox-input"
          @change=${ne(this,y)}
        />
        ${U(this.errorMessage,()=>g`<span id="message">${this.errorMessage}</span>`)}
        <gds-toggle-control-base type="checkbox" @click=${v(this,x,D)}>
          <label for="checkbox-input" slot="label"> ${this.label} </label>
          <span
            slot="supporting-text"
            class="supporting-text"
            id="supporting-text"
          >
            ${this.supportingText}
          </span>
          ${Z({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid})}
        </gds-toggle-control-base>
      </div>
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};x=new WeakSet;D=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,v(this,x,m).call(this))};y=new WeakMap;F=function(){this.checked?this._setFormValue(this._internalValue||"on"):this._setFormValue(null)};m=function(){v(this,x,F).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};l.styles=[N,R,re];d([o()],l.prototype,"label",2);d([o({attribute:"supporting-text"})],l.prototype,"supportingText",2);d([o({type:Boolean})],l.prototype,"checked",2);d([o({type:Boolean,reflect:!0})],l.prototype,"indeterminate",2);d([o({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([E('input[type="checkbox"]')],l.prototype,"_elCheckbox",2);d([b("indeterminate")],l.prototype,"_handleIndeterminateChange",1);l=d([M("gds-checkbox",{dependsOn:[Y,j,ee]}),S({labelledBy:"#checkbox-input",describedBy:"#checkbox-input",errorMessage:"#checkbox-input"})],l);const le=G`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-m-book);
    --_font-supporting-text: var(--gds-sys-text-detail-s-regular);
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
    --_font-label: var(--gds-sys-text-detail-s-book);
    --_font-supporting-text: var(--gds-sys-text-detail-xs-regular);
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
`;var ce=Object.defineProperty,he=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},i=(e,t,s,c)=>{for(var a=c>1?void 0:c?he(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&ce(t,s,a),a},B=(e,t,s)=>t.has(e)||P("Cannot "+s),_=(e,t,s)=>(B(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h=(e,t,s)=>(B(e,t,"access private method"),s),f,n,I,L,A,W,k,H,J;let r=class extends O{constructor(){super(...arguments),$(this,n),this.size="large",this.flexDirection="column",this.hideLabel=!1,this.supportingText="",this.showExtendedSupportingText=!1,$(this,f,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){_(this,f).call(this)}focus(){this.checkboxes[0]?.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",_(this,f))}render(){const e={"checkbox-group":!0,"direction-row":this.flexDirection==="row","direction-column":this.flexDirection==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${z(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${h(this,n,I).call(this)}
    </div>`}_syncOnDOMChange(){_(this,f).call(this),h(this,n,k).call(this)}};f=new WeakMap;n=new WeakSet;I=function(){return[h(this,n,L).call(this),h(this,n,A).call(this),h(this,n,J).call(this)].map(t=>g`${t}`)};L=function(){if(this.label)return g`<gds-form-control-header
        .showExtendedSupportingText=${this.showExtendedSupportingText}
        class=${z({[`size-${this.size}`]:!0,"visually-hidden":this.hideLabel})}
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
      </gds-form-control-header>`};A=function(){return g`<div class="content">
      <slot @input=${h(this,n,W)}></slot>
    </div>`};W=function(e){e&&e.stopPropagation(),h(this,n,k).call(this),h(this,n,H).call(this)};k=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};H=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};J=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};r.styles=[le];i([o()],r.prototype,"size",2);i([o({attribute:"flex-direction"})],r.prototype,"flexDirection",2);i([o({type:Boolean,attribute:"hide-label"})],r.prototype,"hideLabel",2);i([o({attribute:"supporting-text"})],r.prototype,"supportingText",2);i([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);i([o({type:Array})],r.prototype,"value",1);i([E("#checkboxgroup")],r.prototype,"_elCheckboxGroup",2);i([b("value",{waitUntilFirstUpdate:!0})],r.prototype,"_handleValueChange",1);i([b("invalid"),b("errorMessage")],r.prototype,"_handleGroupInvalidChange",1);i([q({attributes:!0,childList:!0,subtree:!0,characterData:!0})],r.prototype,"_syncOnDOMChange",1);r=i([S({labelledBy:"#checkboxgroup",describedBy:"#checkboxgroup",errorMessage:"#checkboxgroup"}),te()],r);let w=class extends K(X(Q(r))){};w=i([M("gds-checkbox-group",{dependsOn:[se,ae]})],w);export{l as G,w as a};

import{i as G,t as H,aj as U,n as o,d as E,a6 as f,a7 as S,b as J,h as g,g as M,U as N,S as q,T as R,$ as X,a as O}from"./iframe-Dz9p1f8e.js";import{G as K}from"./toggle-control-base.component-Dcvc8zKF.js";import{c as Q}from"./rbcb-toggle.template-BxMwsqYC.js";import{I as Y}from"./checkmark.component-DrrOLekq.js";import{I as Z}from"./minus-small.component-Cj49tgcq.js";import{l as j}from"./localized-decorator-VO--eyaN.js";import{G as ee,a as te}from"./form-control-header.component-DA_G7Lif.js";const se=G`
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
`;var ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},h=(e,t,s,c)=>{for(var a=c>1?void 0:c?re(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&ae(t,s,a),a},z=(e,t,s)=>t.has(e)||T("Cannot "+s),ie=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),C=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_=(e,t,s)=>(z(e,t,"access private method"),s),x,P,m,y;let l=class extends S{constructor(){super(...arguments),C(this,x),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1,C(this,m,()=>{this.indeterminate?(this.indeterminate=!1,this.checked=!1,this._elCheckbox.checked=!1,this._elCheckbox.indeterminate=!1):this.checked=this._elCheckbox.checked,_(this,x,y).call(this)})}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return g`
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          ?checked=${this.checked}
          ?disabled=${this.disabled}
          .indeterminate=${this.indeterminate}
          aria-invalid=${this.invalid}
          aria-describedby="message supporting-text"
          id="checkbox-input"
          @change=${ie(this,m)}
        />
        ${J(this.errorMessage,()=>g`<span id="message">${this.errorMessage}</span>`)}
        <gds-toggle-control-base type="checkbox" @click=${_(this,x,P)}>
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
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};x=new WeakSet;P=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,_(this,x,y).call(this))};m=new WeakMap;y=function(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};l.styles=[H,U,se];h([o()],l.prototype,"label",2);h([o({attribute:"supporting-text"})],l.prototype,"supportingText",2);h([o({type:Boolean})],l.prototype,"checked",2);h([o({type:Boolean,reflect:!0})],l.prototype,"indeterminate",2);h([o({type:Boolean,reflect:!0})],l.prototype,"disabled",2);h([E('input[type="checkbox"]')],l.prototype,"_elCheckbox",2);h([f("indeterminate")],l.prototype,"_handleIndeterminateChange",1);l=h([M("gds-checkbox",{dependsOn:[K,Y,Z]})],l);const oe=G`
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
`;var ne=Object.defineProperty,le=Object.getOwnPropertyDescriptor,I=e=>{throw TypeError(e)},i=(e,t,s,c)=>{for(var a=c>1?void 0:c?le(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&ne(t,s,a),a},V=(e,t,s)=>t.has(e)||I("Cannot "+s),b=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>t.has(e)?I("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d=(e,t,s)=>(V(e,t,"access private method"),s),v,n,F,L,D,A,k,B,W;let r=class extends S{constructor(){super(...arguments),$(this,n),this.size="large",this.direction="column",this.hideLabel=!1,this.supportingText="",this.showExtendedSupportingText=!1,$(this,v,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){b(this,v).call(this)}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",b(this,v))}render(){const e={"checkbox-group":!0,"direction-row":this.direction==="row","direction-column":this.direction==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${O(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${d(this,n,F).call(this)}
    </div>`}_syncOnDOMChange(){b(this,v).call(this),d(this,n,k).call(this)}};v=new WeakMap;n=new WeakSet;F=function(){return[d(this,n,L).call(this),d(this,n,D).call(this),d(this,n,W).call(this)].map(t=>g`${t}`)};L=function(){if(this.label)return g`<gds-form-control-header
        .showExtendedSupportingText=${this.showExtendedSupportingText}
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
      </gds-form-control-header>`};D=function(){return g`<div class="content">
      <slot @input=${d(this,n,A)}></slot>
    </div>`};A=function(e){e&&e.stopPropagation(),d(this,n,k).call(this),d(this,n,B).call(this)};k=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};B=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};W=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};r.styles=[oe];i([o()],r.prototype,"size",2);i([o()],r.prototype,"direction",2);i([o({type:Boolean,attribute:"hide-label"})],r.prototype,"hideLabel",2);i([o({attribute:"supporting-text"})],r.prototype,"supportingText",2);i([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],r.prototype,"showExtendedSupportingText",2);i([o({type:Array})],r.prototype,"value",1);i([E("#checkboxgroup")],r.prototype,"_elCheckboxGroup",2);i([f("value",{waitUntilFirstUpdate:!0})],r.prototype,"_handleValueChange",1);i([f("invalid"),f("errorMessage")],r.prototype,"_handleGroupInvalidChange",1);i([N({attributes:!0,childList:!0,subtree:!0,characterData:!0})],r.prototype,"_syncOnDOMChange",1);r=i([j()],r);let w=class extends q(R(X(r))){};w=i([M("gds-checkbox-group",{dependsOn:[ee,te]})],w);export{l as G,w as a};

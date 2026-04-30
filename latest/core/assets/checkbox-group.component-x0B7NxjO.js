import{i as E,E as J,am as N,n as o,f as G,a7 as v,a8 as S,d as U,h as g,g as M,T as q,Q,S as R,Z as X,a as O}from"./iframe-CsT9moiw.js";import{G as Z}from"./toggle-control-base.component-GahbHGDB.js";import{c as K}from"./rbcb-toggle.template-CHoUOIyf.js";import{I as Y}from"./checkmark.component-BhJ1Ystt.js";import{I as j}from"./minus-small.component-BZJo_MqX.js";import{l as ee}from"./localized-decorator-CHDsyZqF.js";import{G as te,a as se}from"./form-control-header.component-1yNw0pfW.js";const ae=E`
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
`;var ie=Object.defineProperty,re=Object.getOwnPropertyDescriptor,T=e=>{throw TypeError(e)},d=(e,t,s,c)=>{for(var a=c>1?void 0:c?re(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&ie(t,s,a),a},z=(e,t,s)=>t.has(e)||T("Cannot "+s),oe=(e,t,s)=>(z(e,t,"read from private field"),s?s.call(e):t.get(e)),C=(e,t,s)=>t.has(e)?T("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),b=(e,t,s)=>(z(e,t,"access private method"),s),f,V,m,P,y;let l=class extends S{constructor(){super(...arguments),C(this,f),this.label="",this.supportingText="",this.checked=!1,this.indeterminate=!1,this.disabled=!1,C(this,m,()=>{this.indeterminate?(this.indeterminate=!1,this.checked=!1,this._elCheckbox.checked=!1,this._elCheckbox.indeterminate=!1):this.checked=this._elCheckbox.checked,b(this,f,y).call(this)})}get value(){return this._internalValue||""}set value(e){this._internalValue=e}_handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}focus(e){this._elCheckbox.focus(e)}render(){return g`
        <input
          type="checkbox"
          class="visually-hidden-checkbox"
          .checked=${this.checked}
          ?disabled=${this.disabled}
          .indeterminate=${this.indeterminate}
          aria-invalid=${this.invalid}
          aria-describedby="message supporting-text"
          id="checkbox-input"
          @change=${oe(this,m)}
        />
        ${U(this.errorMessage,()=>g`<span id="message">${this.errorMessage}</span>`)}
        <gds-toggle-control-base type="checkbox" @click=${b(this,f,V)}>
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
    `}_getValidityAnchor(){return this._elCheckbox}formResetCallback(){this.checked=!1}};f=new WeakSet;V=function(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,b(this,f,y).call(this))};m=new WeakMap;P=function(){this.checked?this._setFormValue(this._internalValue||"on"):this._setFormValue(null)};y=function(){b(this,f,P).call(this),this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})};l.styles=[J,N,ae];d([o()],l.prototype,"label",2);d([o({attribute:"supporting-text"})],l.prototype,"supportingText",2);d([o({type:Boolean})],l.prototype,"checked",2);d([o({type:Boolean,reflect:!0})],l.prototype,"indeterminate",2);d([o({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([G('input[type="checkbox"]')],l.prototype,"_elCheckbox",2);d([v("indeterminate")],l.prototype,"_handleIndeterminateChange",1);l=d([M("gds-checkbox",{dependsOn:[Z,Y,j]})],l);const ne=E`
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
`;var le=Object.defineProperty,ce=Object.getOwnPropertyDescriptor,D=e=>{throw TypeError(e)},r=(e,t,s,c)=>{for(var a=c>1?void 0:c?ce(t,s):t,p=e.length-1,u;p>=0;p--)(u=e[p])&&(a=(c?u(t,s,a):u(a))||a);return c&&a&&le(t,s,a),a},F=(e,t,s)=>t.has(e)||D("Cannot "+s),_=(e,t,s)=>(F(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>t.has(e)?D("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h=(e,t,s)=>(F(e,t,"access private method"),s),x,n,I,L,A,B,k,W,H;let i=class extends S{constructor(){super(...arguments),$(this,n),this.size="large",this.flexDirection="column",this.hideLabel=!1,this.supportingText="",this.showExtendedSupportingText=!1,$(this,x,()=>{this.checkboxes.forEach(e=>{e.invalid=this.invalid,e.errorMessage=this.errorMessage})})}get value(){return this._internalValue||[]}set value(e){this._internalValue=e}get checkboxes(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}_getValidityAnchor(){return this._elCheckboxGroup}_handleValueChange(){this.checkboxes.forEach(e=>{e.checked=this.value.includes(e.value)||!1})}_handleGroupInvalidChange(){_(this,x).call(this)}focus(){var e;(e=this.checkboxes[0])==null||e.focus()}connectedCallback(){super.connectedCallback(),this.addEventListener("gds-validity-state",_(this,x))}render(){const e={"checkbox-group":!0,"direction-row":this.flexDirection==="row","direction-column":this.flexDirection==="column"};return g`<div
      role="group"
      id="checkboxgroup"
      class=${O(e)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${h(this,n,I).call(this)}
    </div>`}_syncOnDOMChange(){_(this,x).call(this),h(this,n,k).call(this)}};x=new WeakMap;n=new WeakSet;I=function(){return[h(this,n,L).call(this),h(this,n,A).call(this),h(this,n,H).call(this)].map(t=>g`${t}`)};L=function(){if(this.label)return g`<gds-form-control-header
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
      </gds-form-control-header>`};A=function(){return g`<div class="content">
      <slot @input=${h(this,n,B)}></slot>
    </div>`};B=function(e){e&&e.stopPropagation(),h(this,n,k).call(this),h(this,n,W).call(this)};k=function(){const e=this.checkboxes.filter(t=>t.checked).map(t=>t.value);JSON.stringify(e)!==JSON.stringify(this.value)&&(this.value=e)};W=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};H=function(){return g`<gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};i.styles=[ne];r([o()],i.prototype,"size",2);r([o({attribute:"flex-direction"})],i.prototype,"flexDirection",2);r([o({type:Boolean,attribute:"hide-label"})],i.prototype,"hideLabel",2);r([o({attribute:"supporting-text"})],i.prototype,"supportingText",2);r([o({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);r([o({type:Array})],i.prototype,"value",1);r([G("#checkboxgroup")],i.prototype,"_elCheckboxGroup",2);r([v("value",{waitUntilFirstUpdate:!0})],i.prototype,"_handleValueChange",1);r([v("invalid"),v("errorMessage")],i.prototype,"_handleGroupInvalidChange",1);r([q({attributes:!0,childList:!0,subtree:!0,characterData:!0})],i.prototype,"_syncOnDOMChange",1);i=r([ee()],i);let w=class extends Q(R(X(i))){};w=r([M("gds-checkbox-group",{dependsOn:[te,se]})],w);export{l as G,w as a};

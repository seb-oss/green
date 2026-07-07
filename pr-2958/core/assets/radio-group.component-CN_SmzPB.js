import{i as E,a2 as O,n as l,w as B,g as k,y as S,z as P,h as f,v as L,f as I,$ as b,H as W,I as V,Q as H,a0 as K,a as q}from"./iframe-7cQTFavr.js";import{G as Q}from"./toggle-control-base.component-CYeo2w_8.js";import{r as U}from"./rbcb-toggle.template-CCn-Zv0V.js";import{l as X}from"./localized-decorator-C7_wkvKS.js";import{G as J,a as N}from"./form-control-header.component-iW9ZCUn8.js";const Y=E`
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
`;var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,A=t=>{throw TypeError(t)},c=(t,e,s,i)=>{for(var r=i>1?void 0:i?j(e,s):e,p=t.length-1,u;p>=0;p--)(u=t[p])&&(r=(i?u(e,s,r):u(r))||r);return i&&r&&Z(e,s,r),r},tt=(t,e,s)=>e.has(t)||A("Cannot "+s),v=(t,e,s)=>(tt(t,e,"read from private field"),s?s.call(t):e.get(t)),C=(t,e,s)=>e.has(t)?A("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),g,_;let n=class extends P{constructor(){super(),this.label="",this.supportingText="",this.value="",this.checked=!1,this.disabled=!1,this.invalid=!1,this._isFocused=!1,C(this,g,t=>{this.disabled||!this.label||(t.preventDefault(),this.checked=!0,this.focus(),this.dispatchStandardEvent("input",{bubbles:!0}))}),C(this,_,t=>{this.disabled||(t.key==="Enter"||t.key===" ")&&(t.preventDefault(),this.checked=!0,this.dispatchStandardEvent("input",{bubbles:!0}))}),this.addEventListener("keydown",v(this,_)),this.addEventListener("focus",()=>this._isFocused=!0),this.addEventListener("blur",()=>this._isFocused=!1)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",v(this,g))}_updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.setAttribute("aria-description",this.errorMessage?this.errorMessage:""),this.toggleAttribute("aria-invalid",this.invalid)}updated(t){super.updated(t),(t.has("checked")||t.has("disabled")||t.has("invalid"))&&this._updateAriaState()}render(){return f`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${v(this,g)}> ${this.label} </label>
        <span slot="supporting-text"> ${this.supportingText} </span>
        ${U({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid})}
      </gds-toggle-control-base>
    `}};g=new WeakMap;_=new WeakMap;n.styles=[O,Y];c([l()],n.prototype,"label",2);c([l({attribute:"supporting-text"})],n.prototype,"supportingText",2);c([l({type:String})],n.prototype,"value",2);c([l({type:Boolean,reflect:!0})],n.prototype,"checked",2);c([l({type:Boolean,reflect:!0})],n.prototype,"disabled",2);c([l({type:Boolean})],n.prototype,"invalid",2);c([l({type:String})],n.prototype,"errorMessage",2);c([B()],n.prototype,"_isFocused",2);n=c([k("gds-radio",{dependsOn:[Q]}),S({labelledBy:"gds-toggle-control-base",describedBy:"gds-toggle-control-base"})],n);const et=E`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-m-book);
    --_font-supporting-text: var(--gds-sys-text-detail-s-regular);
    font: var(--_font-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-s-book);
    --_font-supporting-text: var(--gds-sys-text-detail-xs-regular);
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
`;var st=Object.defineProperty,it=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},h=(t,e,s,i)=>{for(var r=i>1?void 0:i?it(e,s):e,p=t.length-1,u;p>=0;p--)(u=t[p])&&(r=(i?u(e,s,r):u(r))||r);return i&&r&&st(e,s,r),r},rt=(t,e,s)=>e.has(t)||$("Cannot "+s),at=(t,e,s)=>e.has(t)?$("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),o=(t,e,s)=>(rt(t,e,"access private method"),s),a,x,R,m,z,F,y,D,G,T,M;let d=class extends K{constructor(){super(...arguments),at(this,a),this.size="large",this.flexDirection="column",this.supportingText="",this.showExtendedSupportingText=!1,this._isConnected=!1}get radios(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}connectedCallback(){super.connectedCallback(),this._isConnected=!0,this.updateComplete.then(()=>{this._syncRadioStates(),o(this,a,x).call(this)}),this.addEventListener("invalid",this._syncRadioStates)}disconnectedCallback(){super.disconnectedCallback(),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}focus(t){this._getValidityAnchor()?.focus(t)}_getValidityAnchor(){return this._contentElement}_handleValueChange(){this._isConnected&&(this._syncRadioStates(),this.updateComplete.then(()=>{o(this,a,x).call(this)}))}_syncRadioStates(){this._isConnected&&this.radios.forEach(t=>{t.checked=t.value===this.value,t.size=this.size,t.invalid=this.invalid,t.errorMessage=this.errorMessage})}render(){const t={"radio-group":!0,"direction-row":this.flexDirection==="row","direction-column":this.flexDirection==="column"};return f`<div
      role="radiogroup"
      id="radiogroup"
      class=${q(t)}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${this.invalid}
    >
      ${o(this,a,D).call(this)}
    </div>`}};a=new WeakSet;x=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(e=>e.checked);t?(t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter(e=>!e.checked).forEach(e=>e.setAttribute("tabindex","-1"))};R=function(){if(!this._contentElement||!this._isConnected)return;const t=this.radios.find(s=>s.checked),e=t||this.radios[0];e&&(e.focus(),t||(this.radios.forEach(s=>s.setAttribute("tabindex","-1")),e.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))};m=function(){this.updateComplete.then(()=>this.dispatchStandardEvent("change",{composed:!0,bubbles:!0})),this.updateComplete.then(()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0}))};z=function(t){t.stopPropagation();const e=t.target;this.value=e.value,this._syncRadioStates(),o(this,a,m).call(this)};F=function(t){if(!this._isConnected)return;const e=this.radios.filter(i=>!i.disabled);if(e.length===0)return;let s=e.findIndex(i=>document.activeElement===i);switch(s===-1&&(s=e.findIndex(i=>i.checked),s===-1&&(s=0)),t.key){case"ArrowDown":case"ArrowRight":{t.preventDefault();const i=(s+1)%e.length;o(this,a,y).call(this,e[i]);break}case"ArrowUp":case"ArrowLeft":{t.preventDefault();const i=(s-1+e.length)%e.length;o(this,a,y).call(this,e[i]);break}default:return}};y=function(t){!this._contentElement||!this._isConnected||(this.radios.forEach(e=>e.setAttribute("tabindex","-1")),t.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),t.checked=!0,t.focus(),this.value=t.value,this._syncRadioStates(),o(this,a,m).call(this))};D=function(){return[o(this,a,G).call(this),o(this,a,T).call(this),o(this,a,M).call(this)].map(e=>f`${e}`)};G=function(){if(this.label)return f` <gds-form-control-header
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
      @keydown=${o(this,a,F)}
      @focus=${o(this,a,R)}
    >
      <slot @input=${o(this,a,z)}></slot>
    </div>`};M=function(){return f` <gds-form-control-footer
      id="footer"
      class="size-${this.size}"
      .errorMessage=${this.invalid?this.errorMessage:void 0}
    >
    </gds-form-control-footer>`};d.styles=[L,et];h([l()],d.prototype,"size",2);h([l({attribute:"flex-direction"})],d.prototype,"flexDirection",2);h([l({attribute:"supporting-text"})],d.prototype,"supportingText",2);h([l({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],d.prototype,"showExtendedSupportingText",2);h([I(".content")],d.prototype,"_contentElement",2);h([b("value")],d.prototype,"_handleValueChange",1);h([b("invalid"),b("errorMessage")],d.prototype,"_syncRadioStates",1);d=h([S({labelledBy:"#radiogroup",describedBy:"#radiogroup",errorMessage:"#radiogroup"}),X()],d);let w=class extends W(V(H(d))){};w=h([k("gds-radio-group",{dependsOn:[J,N]})],w);export{n as G,w as a};

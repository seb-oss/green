import{i as z,t as M,n as d,d as E,a8 as V,Q as L,H as F,N as P,D as T,S as D,b,a as G,h as n,P as N,g as k}from"./iframe-BDogtV4N.js";import{f as B,G as W}from"./form-control-host.style-C3xRBB-f.js";import{G as H,a as I}from"./form-control-header.component-CjIzPZLM.js";import{I as q}from"./chevron-bottom.component-DF3cP79n.js";const R=z`
  @layer base, reset, transitional-styles;
  @layer base {
    .select-container {
      display: contents;
    }

    select {
      flex: 1;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
      inset: 0;

      &::-ms-expand {
        display: none;
      }
    }

    select[multiple] {
      opacity: 1;
      position: relative;
      width: 100%;
    }

    label {
      flex: 1;
    }
  }
`;var Q=Object.defineProperty,U=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},i=(e,t,s,h)=>{for(var r=h>1?void 0:h?U(t,s):t,m=e.length-1,f;m>=0;m--)(f=e[m])&&(r=(h?f(t,s,r):f(r))||r);return h&&r&&Q(t,s,r),r},_=(e,t,s)=>t.has(e)||y("Cannot "+s),p=(e,t,s)=>(_(e,t,"read from private field"),t.get(e)),v=(e,t,s)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),X=(e,t,s,h)=>(_(e,t,"write to private field"),t.set(e,s),s),o=(e,t,s)=>(_(e,t,"access private method"),s),c,a,x,u,C,S,w,$,A,O;let l=class extends D{constructor(){super(...arguments),v(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.size="large",this.plain=!1,v(this,c,!1),v(this,u,e=>{e.stopPropagation(),o(this,a,C).call(this),requestAnimationFrame(()=>{this.dispatchCustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}),this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})})})}get value(){return this._internalValue}set value(e){p(this,c)||X(this,c,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){var e;return((e=this.selectElement)==null?void 0:e.multiple)??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}focus(e){var t;(t=this._getValidityAnchor())==null||t.focus(e)}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),n`
      ${b(!this.plain,()=>n`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText=${this.showExtendedSupportingText}
          >
            <label for="select" slot="label" id="label-text">
              ${this.label}
            </label>
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`)}

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${G(e)}
      >
        ${o(this,a,S).call(this)}
      </gds-field-base>

      ${b(o(this,a,x).call(this),()=>n`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const s=t.cloneNode(!0);return s.addEventListener("change",p(this,u)),s.addEventListener("input",p(this,u)),s.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),s.ariaLabel=this.label,s.setAttribute("id","select"),s.disabled=this.disabled,s.className="native-control",p(this,c)?s.value=this.value:this._internalValue=s.value,s});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};c=new WeakMap;a=new WeakSet;x=function(){return!this.plain&&this.invalid};u=new WeakMap;C=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};S=function(){return[o(this,a,w).call(this),o(this,a,A).call(this),o(this,a,$).call(this),o(this,a,O).call(this)].map(t=>n`${t}`)};w=function(){return n`<slot name="lead" slot="lead"></slot>`};$=function(){if(!this.multiple)return n`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};A=function(){return n`<div class="select-container"></div>`};O=function(){if(!this.multiple)return n`
        <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
      `};l.styles=[M,B,R];i([d({attribute:"supporting-text"})],l.prototype,"supportingText",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);i([d({type:String})],l.prototype,"size",2);i([d({type:Boolean})],l.prototype,"plain",2);i([E("select")],l.prototype,"selectElement",2);i([d()],l.prototype,"value",1);i([E(".select-container")],l.prototype,"_elSelectContainer",2);i([V({childList:!0,subtree:!0,attributes:!0,characterData:!0})],l.prototype,"_captureDOM",1);i([L("value")],l.prototype,"_handleValueChange",1);l=i([N()],l);let g=class extends F(P(T(l))){};g=i([k("gds-select",{dependsOn:[H,I,W,q]})],g);g.define();

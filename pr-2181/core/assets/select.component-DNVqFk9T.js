import{l as z}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as c,h as r,g as A}from"./custom-element-scoping-CNGU1oQ0.js";import{a as E}from"./query-p8xgzTDt.js";import{e as V}from"./class-map-CXsQwv0r.js";import{n as _}from"./when-BR7zwNJC.js";import{f as L,G as F}from"./form-control-host.style-tmPF1Pqn.js";import{G,a as T}from"./form-control-header.component-CNt2VnMQ.js";import{t as P}from"./tokens.style-DQsNuKSy.js";import{o as D}from"./observe-light-dom-CmJPHUQ4.js";import{w as k}from"./watch-tFciLXSI.js";import{w as B,a as N,b as W}from"./declarative-layout-mixins-dHcexrGz.js";import{a as I}from"./button.component-DlNfO7QT.js";import{I as q}from"./chevron-bottom.component-DzNg7GNq.js";import{i as H}from"./lit-element-Bx14lxc-.js";const R=H`
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
`;var U=Object.defineProperty,X=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},l=(e,t,s,h)=>{for(var n=h>1?void 0:h?X(t,s):t,m=e.length-1,f;m>=0;m--)(f=e[m])&&(n=(h?f(t,s,n):f(n))||n);return h&&n&&U(t,s,n),n},g=(e,t,s)=>t.has(e)||y("Cannot "+s),d=(e,t,s)=>(g(e,t,"read from private field"),t.get(e)),v=(e,t,s)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),J=(e,t,s,h)=>(g(e,t,"write to private field"),t.set(e,s),s),o=(e,t,s)=>(g(e,t,"access private method"),s),p,a,x,u,C,S,w,$,M,O;let i=class extends I{constructor(){super(...arguments),v(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.size="large",this.plain=!1,v(this,p,!1),v(this,u,e=>{e.stopPropagation(),o(this,a,C).call(this),requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})})}get value(){return this._internalValue}set value(e){d(this,p)||J(this,p,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){var e;return((e=this.selectElement)==null?void 0:e.multiple)??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),r`
      ${_(!this.plain,()=>r`<gds-form-control-header
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
        class=${V(e)}
      >
        ${o(this,a,S).call(this)}
      </gds-field-base>

      ${_(o(this,a,x).call(this),()=>r`<gds-form-control-footer
            class="size-${this.size}"
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const s=t.cloneNode(!0);return s.addEventListener("change",d(this,u)),s.addEventListener("input",d(this,u)),s.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),s.ariaLabel=this.label,s.setAttribute("id","select"),s.disabled=this.disabled,s.className="native-control",d(this,p)?s.value=this.value:this._internalValue=s.value,s});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};p=new WeakMap;a=new WeakSet;x=function(){return!this.plain&&this.invalid};u=new WeakMap;C=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};S=function(){return[o(this,a,w).call(this),o(this,a,M).call(this),o(this,a,$).call(this),o(this,a,O).call(this)].map(t=>r`${t}`)};w=function(){return r`<slot name="lead" slot="lead"></slot>`};$=function(){if(!this.multiple)return r`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};M=function(){return r`<div class="select-container"></div>`};O=function(){if(!this.multiple)return r` <gds-icon-chevron-bottom></gds-icon-chevron-bottom> `};i.styles=[P,L,R];l([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);l([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);l([c({type:String})],i.prototype,"size",2);l([c({type:Boolean})],i.prototype,"plain",2);l([E("select")],i.prototype,"selectElement",2);l([c()],i.prototype,"value",1);l([E(".select-container")],i.prototype,"_elSelectContainer",2);l([D({childList:!0,subtree:!0,attributes:!0,characterData:!0})],i.prototype,"_captureDOM",1);l([k("value")],i.prototype,"_handleValueChange",1);i=l([z()],i);let b=class extends B(N(W(i))){};b=l([A("gds-select",{dependsOn:[G,T,F,q]})],b);export{b as G};

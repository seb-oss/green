import{l as z}from"./runtime-CNluP0A8.js";import{n as c}from"./Reflect-DJ7r0WLU.js";import{a as E}from"./query-p8xgzTDt.js";import{e as M}from"./class-map-CXsQwv0r.js";import{n as b}from"./when-BR7zwNJC.js";import{f as V,G as L}from"./form-control-host.style-CXyUmhtg.js";import{G as F,a as T}from"./form-control-header.component-RuBLcEE3.js";import{t as G}from"./tokens.style-CQAfIFlK.js";import{o as P}from"./observe-light-dom-CmJPHUQ4.js";import{w as D}from"./watch-tFciLXSI.js";import{h as a,g as k}from"./gds-element-DTROifYq.js";import{d as B,w as N,b as W}from"./declarative-layout-mixins-DFPXvh_g.js";import{a as I}from"./button.component-B9IS2xn2.js";import{I as q}from"./chevron-bottom.component-YfrMVwtI.js";import{i as H}from"./lit-element-Bx14lxc-.js";const R=H`
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
`;var U=Object.defineProperty,X=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},l=(e,t,s,h)=>{for(var n=h>1?void 0:h?X(t,s):t,m=e.length-1,f;m>=0;m--)(f=e[m])&&(n=(h?f(t,s,n):f(n))||n);return h&&n&&U(t,s,n),n},_=(e,t,s)=>t.has(e)||y("Cannot "+s),d=(e,t,s)=>(_(e,t,"read from private field"),t.get(e)),v=(e,t,s)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),J=(e,t,s,h)=>(_(e,t,"write to private field"),t.set(e,s),s),o=(e,t,s)=>(_(e,t,"access private method"),s),p,r,x,u,C,S,w,$,A,O;let i=class extends I{constructor(){super(...arguments),v(this,r),this.supportingText="",this.showExtendedSupportingText=!1,this.size="large",this.plain=!1,v(this,p,!1),v(this,u,e=>{e.stopPropagation(),o(this,r,C).call(this),requestAnimationFrame(()=>{this.dispatchCustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}),this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})})})}get value(){return this._internalValue}set value(e){d(this,p)||J(this,p,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){var e;return((e=this.selectElement)==null?void 0:e.multiple)??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}focus(e){var t;(t=this._getValidityAnchor())==null||t.focus(e)}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),a`
      ${b(!this.plain,()=>a`<gds-form-control-header
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
        class=${M(e)}
      >
        ${o(this,r,S).call(this)}
      </gds-field-base>

      ${b(o(this,r,x).call(this),()=>a`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const s=t.cloneNode(!0);return s.addEventListener("change",d(this,u)),s.addEventListener("input",d(this,u)),s.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),s.ariaLabel=this.label,s.setAttribute("id","select"),s.disabled=this.disabled,s.className="native-control",d(this,p)?s.value=this.value:this._internalValue=s.value,s});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};p=new WeakMap;r=new WeakSet;x=function(){return!this.plain&&this.invalid};u=new WeakMap;C=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};S=function(){return[o(this,r,w).call(this),o(this,r,A).call(this),o(this,r,$).call(this),o(this,r,O).call(this)].map(t=>a`${t}`)};w=function(){return a`<slot name="lead" slot="lead"></slot>`};$=function(){if(!this.multiple)return a`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};A=function(){return a`<div class="select-container"></div>`};O=function(){if(!this.multiple)return a`
        <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
      `};i.styles=[G,V,R];l([c({attribute:"supporting-text"})],i.prototype,"supportingText",2);l([c({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],i.prototype,"showExtendedSupportingText",2);l([c({type:String})],i.prototype,"size",2);l([c({type:Boolean})],i.prototype,"plain",2);l([E("select")],i.prototype,"selectElement",2);l([c()],i.prototype,"value",1);l([E(".select-container")],i.prototype,"_elSelectContainer",2);l([P({childList:!0,subtree:!0,attributes:!0,characterData:!0})],i.prototype,"_captureDOM",1);l([D("value")],i.prototype,"_handleValueChange",1);i=l([z()],i);let g=class extends B(N(W(i))){};g=l([k("gds-select",{dependsOn:[F,T,L,q]})],g);g.define();

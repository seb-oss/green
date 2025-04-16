import{l as z}from"./localized-decorator-DtmrKsyB.js";import"./runtime-BL31MtW8.js";import{n as u,h as r,g as A}from"./custom-element-scoping-b4c89-hi.js";import{a as E}from"./query-p8xgzTDt.js";import{e as L}from"./class-map-CXsQwv0r.js";import{n as _}from"./when-BR7zwNJC.js";import{f as V,G as F}from"./form-control-host.style-B9O882Nq.js";import{G,a as P}from"./form-control-header.component-DE15buoc.js";import{t as D}from"./tokens.style-C9bLefPj.js";import{o as T}from"./observe-light-dom-CmJPHUQ4.js";import{w as k}from"./watch-tFciLXSI.js";import{d as N,w as W,b as B}from"./declarative-layout-mixins-C09DP4OO.js";import{a as I}from"./button.component-CJG_iMlt.js";import{I as q}from"./chevron-bottom.component-C-Vz_I11.js";import{i as H}from"./lit-element-Bx14lxc-.js";const R=H`
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
`;var U=Object.defineProperty,X=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},i=(e,t,s,h)=>{for(var n=h>1?void 0:h?X(t,s):t,m=e.length-1,f;m>=0;m--)(f=e[m])&&(n=(h?f(t,s,n):f(n))||n);return h&&n&&U(t,s,n),n},g=(e,t,s)=>t.has(e)||y("Cannot "+s),p=(e,t,s)=>(g(e,t,"read from private field"),t.get(e)),v=(e,t,s)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),J=(e,t,s,h)=>(g(e,t,"write to private field"),t.set(e,s),s),o=(e,t,s)=>(g(e,t,"access private method"),s),c,a,C,d,S,x,w,$,M,O;let l=class extends I{constructor(){super(...arguments),v(this,a),this.supportingText="",this.size="large",this.plain=!1,v(this,c,!1),v(this,d,e=>{e.stopPropagation(),o(this,a,S).call(this),requestAnimationFrame(()=>{this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0})),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})})}get value(){return this._internalValue}set value(e){p(this,c)||J(this,c,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){var e;return((e=this.selectElement)==null?void 0:e.multiple)??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),r`
      ${_(!this.plain,()=>r`<gds-form-control-header class="size-${this.size}">
            <label for="select" slot="label" id="label-text"
              >${this.label}</label
            >
            <span slot="supporting-text" id="supporting-text">
              ${this.supportingText}
            </span>
          </gds-form-control-header>`)}

      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${L(e)}
      >
        ${o(this,a,x).call(this)}
      </gds-field-base>

      ${_(o(this,a,C).call(this),()=>r`<gds-form-control-footer
            class="size-${this.size}"
            .validationMessage=${this.invalid&&(this.errorMessage||this.validationMessage)}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const s=t.cloneNode(!0);return s.addEventListener("change",p(this,d)),s.addEventListener("input",p(this,d)),s.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),s.ariaLabel=this.label,s.setAttribute("id","select"),s.disabled=this.disabled,s.className="native-control",p(this,c)?s.value=this.value:this.value=s.value,s});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};c=new WeakMap;a=new WeakSet;C=function(){return!this.plain&&this.invalid};d=new WeakMap;S=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};x=function(){return[o(this,a,w).call(this),o(this,a,M).call(this),o(this,a,$).call(this),o(this,a,O).call(this)].map(t=>r`${t}`)};w=function(){return r`<slot name="lead" slot="lead"></slot>`};$=function(){if(!this.multiple)return r`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};M=function(){return r`<div class="select-container"></div>`};O=function(){if(!this.multiple)return r` <gds-icon-chevron-bottom></gds-icon-chevron-bottom> `};l.styles=[D,V,R];i([u({attribute:"supporting-text"})],l.prototype,"supportingText",2);i([u({type:String})],l.prototype,"size",2);i([u({type:Boolean})],l.prototype,"plain",2);i([E("select")],l.prototype,"selectElement",2);i([u()],l.prototype,"value",1);i([E(".select-container")],l.prototype,"_elSelectContainer",2);i([T({childList:!0,subtree:!0,attributes:!0,characterData:!0})],l.prototype,"_captureDOM",1);i([k("value")],l.prototype,"_handleValueChange",1);l=i([z()],l);let b=class extends N(W(B(l))){};b=i([A("gds-select",{dependsOn:[G,P,F,q]})],b);export{b as G};

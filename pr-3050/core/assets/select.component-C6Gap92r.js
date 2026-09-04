import{l as O}from"./localized-decorator-BP913zUc.js";import{i as z,B as V,n as d,l as y,N as F,$ as L,F as T,L as G,T as P,C as B,a0 as D,d as _,h as r,e as N,a as k}from"./iframe-cJ-G3WTm.js";import{f as W,G as I}from"./form-control-host.style-96d-FLFm.js";import{G as q,a as H}from"./form-control-header.component-BfqMHHeE.js";import{I as R}from"./chevron-bottom.component-D5GjlAul.js";const U=z`
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
`;var X=Object.defineProperty,J=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},i=(e,t,s,h)=>{for(var n=h>1?void 0:h?J(t,s):t,m=e.length-1,f;m>=0;m--)(f=e[m])&&(n=(h?f(t,s,n):f(n))||n);return h&&n&&X(t,s,n),n},g=(e,t,s)=>t.has(e)||E("Cannot "+s),p=(e,t,s)=>(g(e,t,"read from private field"),t.get(e)),v=(e,t,s)=>t.has(e)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),K=(e,t,s,h)=>(g(e,t,"write to private field"),t.set(e,s),s),o=(e,t,s)=>(g(e,t,"access private method"),s),c,a,x,u,C,S,w,$,A,M;let l=class extends D{constructor(){super(...arguments),v(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.size="large",this.plain=!1,v(this,c,!1),v(this,u,e=>{e.stopPropagation(),o(this,a,C).call(this),requestAnimationFrame(()=>{this.dispatchCustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}),this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})})})}get value(){return this._internalValue}set value(e){p(this,c)||K(this,c,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){return this.selectElement?.multiple??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}focus(e){this._getValidityAnchor()?.focus(e)}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),r`
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
        class=${N(e)}
      >
        ${o(this,a,S).call(this)}
      </gds-field-base>

      ${_(o(this,a,x).call(this),()=>r`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const s=t.cloneNode(!0);return s.addEventListener("change",p(this,u)),s.addEventListener("input",p(this,u)),s.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),s.ariaLabel=this.label,s.setAttribute("id","select"),s.disabled=this.disabled,s.className="native-control",p(this,c)?s.value=this.value:this._internalValue=s.value,s});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};c=new WeakMap;a=new WeakSet;x=function(){return!this.plain&&this.invalid};u=new WeakMap;C=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};S=function(){return[o(this,a,w).call(this),o(this,a,A).call(this),o(this,a,$).call(this),o(this,a,M).call(this)].map(t=>r`${t}`)};w=function(){return r`<slot name="lead" slot="lead"></slot>`};$=function(){if(!this.multiple)return r`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};A=function(){return r`<div class="select-container"></div>`};M=function(){if(!this.multiple)return r`
        <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
      `};l.styles=[V,W,U];i([d({attribute:"supporting-text"})],l.prototype,"supportingText",2);i([d({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);i([d({type:String})],l.prototype,"size",2);i([d({type:Boolean})],l.prototype,"plain",2);i([y("select")],l.prototype,"selectElement",2);i([d()],l.prototype,"value",1);i([y(".select-container")],l.prototype,"_elSelectContainer",2);i([F({childList:!0,subtree:!0,attributes:!0,characterData:!0})],l.prototype,"_captureDOM",1);i([L("value")],l.prototype,"_handleValueChange",1);l=i([T({labelledBy:"select",describedBy:"select",errorMessage:"select"}),O()],l);let b=class extends G(P(B(l))){};b=i([k("gds-select",{dependsOn:[q,H,I,R]})],b);export{b as G};

import{l as V}from"./localized-decorator-CYeEJ5u0.js";import{i as z,B as D,n as u,l as x,N as F,$ as T,F as G,L as k,T as P,C as B,a0 as W,d as b,h as n,e as N,a as I}from"./iframe-C23GnPn7.js";import{f as q,G as H}from"./form-control-host.style-CidSUJ9c.js";import{G as R,a as K}from"./form-control-header.component-C_JrsW6P.js";import{I as U}from"./chevron-bottom.component-CnKBQp7A.js";const X=z`
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
`;var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},i=(e,t,s,d)=>{for(var r=d>1?void 0:d?Q(t,s):t,f=e.length-1,v;f>=0;f--)(v=e[f])&&(r=(d?v(t,s,r):v(r))||r);return d&&r&&J(t,s,r),r},_=(e,t,s)=>t.has(e)||C("Cannot "+s),h=(e,t,s)=>(_(e,t,"read from private field"),t.get(e)),c=(e,t,s)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),Y=(e,t,s,d)=>(_(e,t,"write to private field"),t.set(e,s),s),o=(e,t,s)=>(_(e,t,"access private method"),s),p,a,S,m,g,y,w,$,M,A,L,O;let l=class extends W{constructor(){super(...arguments),c(this,a),this.supportingText="",this.showExtendedSupportingText=!1,this.size="large",this.plain=!1,c(this,p,!1),c(this,m,e=>{if(e.stopPropagation(),this.readonly){this._handleValueChange();return}o(this,a,w).call(this),requestAnimationFrame(()=>{this.dispatchCustomEvent("input",{detail:{value:this.value},bubbles:!0,composed:!0}),this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})})}),c(this,g,e=>{this.readonly&&e.preventDefault()}),c(this,y,e=>{this.readonly&&e.key!=="Tab"&&e.preventDefault()})}get value(){return this._internalValue}set value(e){h(this,p)||Y(this,p,!0),this._internalValue=e}get displayValue(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map(e=>e.text).join(", "):""}get multiple(){return this.selectElement?.multiple??!1}connectedCallback(){super.connectedCallback(),this.updateComplete.then(()=>{this._captureDOM(),this._handleValueChange()})}focus(e){this._getValidityAnchor()?.focus(e)}render(){const e={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),n`
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
        .readonly=${this.readonly}
        .invalid=${this.invalid}
        .multiline=${this.multiple}
        align-items=${this.multiple?"flex-start":"center"}
        class=${N(e)}
      >
        ${o(this,a,$).call(this)}
      </gds-field-base>

      ${b(o(this,a,S).call(this),()=>n`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          ></gds-form-control-footer>`)}
    `}_captureDOM(){if(!this.shadowRoot||this.childNodes.length===0||!this._elSelectContainer)return;const e=Array.from(this.children).filter(t=>t.nodeName==="SELECT").map(t=>{const s=t.cloneNode(!0);return s.addEventListener("change",h(this,m)),s.addEventListener("input",h(this,m)),s.addEventListener("mousedown",h(this,g)),s.addEventListener("keydown",h(this,y)),s.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),s.ariaLabel=this.label,s.setAttribute("id","select"),s.disabled=this.disabled,s.toggleAttribute("aria-readonly",this.readonly),s.className="native-control",h(this,p)?s.value=this.value:this._internalValue=s.value,s});this._elSelectContainer.replaceChildren(...e)}formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach(e=>{e.selected=!1}),this.value=[];else{const e=this.selectElement.options[0];e&&(this.value=e.value,this.selectElement.value=e.value)}}_getValidityAnchor(){return this.selectElement}_handleValueChange(){if(this.selectElement){if(this.multiple){const e=this.value||[];Array.from(this.selectElement.options).forEach(t=>{t.selected=e.includes(t.value)})}else this.selectElement.value=this.value;this.requestUpdate()}}};p=new WeakMap;a=new WeakSet;S=function(){return!this.plain&&this.invalid};m=new WeakMap;g=new WeakMap;y=new WeakMap;w=function(){if(this.selectElement)if(this.multiple){const e=Array.from(this.selectElement.selectedOptions);this.value=e.map(t=>t.value)}else this.value=this.selectElement.value};$=function(){return[o(this,a,M).call(this),o(this,a,L).call(this),o(this,a,A).call(this),o(this,a,O).call(this)].map(t=>n`${t}`)};M=function(){return n`<slot name="lead" slot="lead"></slot>`};A=function(){if(!this.multiple)return n`<label id="placeholder" class="native-control"
        >${this.displayValue}</label
      >`};L=function(){return n`<div class="select-container"></div>`};O=function(){if(!this.multiple)return n`
        <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
      `};l.styles=[D,q,X];i([u({attribute:"supporting-text"})],l.prototype,"supportingText",2);i([u({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],l.prototype,"showExtendedSupportingText",2);i([u({type:String})],l.prototype,"size",2);i([u({type:Boolean})],l.prototype,"plain",2);i([x("select")],l.prototype,"selectElement",2);i([u()],l.prototype,"value",1);i([x(".select-container")],l.prototype,"_elSelectContainer",2);i([F({childList:!0,subtree:!0,attributes:!0,characterData:!0})],l.prototype,"_captureDOM",1);i([T("value")],l.prototype,"_handleValueChange",1);l=i([G({labelledBy:"select",describedBy:"select",errorMessage:"select"}),V()],l);let E=class extends k(P(B(l))){};E=i([I("gds-select",{dependsOn:[R,K,H,U]})],E);export{E as G};

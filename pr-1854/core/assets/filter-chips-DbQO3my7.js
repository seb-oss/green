import{n as h,a as x,g as w,G as P,h as C,r as k}from"./custom-element-scoping-b4lD3laR.js";import{a as G}from"./query-p8xgzTDt.js";import{e as $}from"./class-map-Bz98xO8-.js";import{r as W}from"./resize-observer-B9k8v2TZ.js";import{w as F}from"./watch-tFciLXSI.js";import{s as T}from"./attribute-converters-CdI0trPX.js";import{a as H}from"./button-BAcXvPLI.js";import{i as S}from"./lit-element-C_s9q329.js";import{r as z}from"./query-async-MEroNOeJ.js";import{T as g}from"./transitional-styles-6hf7tRoc.js";import"./checkmark-D62oMl69.js";const D=S`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`,M=S`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;var V=Object.defineProperty,B=Object.getOwnPropertyDescriptor,f=(e,t,s,r)=>{for(var l=r>1?void 0:r?B(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(r?n(t,s,l):n(l))||l);return r&&l&&V(t,s,l),l};let p=class extends P{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),g.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{g.instance.apply(e,"gds-button")})}render(){const e={"btn-p":!this.selected};return C`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${$(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};p.styles=[M];f([h({reflect:!0,type:Boolean})],p.prototype,"selected",2);f([h()],p.prototype,"value",2);f([z(x("gds-button"))],p.prototype,"_button",2);p=f([w("gds-filter-chip")],p);var R=Object.defineProperty,N=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},i=(e,t,s,r)=>{for(var l=r>1?void 0:r?N(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(r?n(t,s,l):n(l))||l);return r&&l&&R(t,s,l),l},_=(e,t,s)=>t.has(e)||A("Cannot "+s),v=(e,t,s)=>(_(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),U=(e,t,s,r)=>(_(e,t,"write to private field"),t.set(e,s),s),b=(e,t,s)=>(_(e,t,"access private method"),s),m,y,d,u,E,O;let a=class extends H{constructor(){super(...arguments),c(this,u),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,m,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),c(this,y,3),c(this,d,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return C`<div
      class="chips ${$(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${v(this,m)}
        @slotchange=${b(this,u,O)}
        role="none"
      ></slot>
    </div>`}_getValidityAnchor(){return this}_handleResize(){if(!this.rowCollapse)return;const e=b(this,u,E).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*v(this,y)&&(this._collapsed=!0,U(this,d,s)),s>v(this,d)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};m=new WeakMap;y=new WeakMap;d=new WeakMap;u=new WeakSet;E=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};O=function(){var t;const e=(t=this.chips.find(s=>s.selected))==null?void 0:t.value;e&&(this.value=e)};a.styles=[D];i([h({converter:T})],a.prototype,"value",2);i([h({type:Boolean})],a.prototype,"multiple",2);i([h()],a.prototype,"label",2);i([h({type:Boolean,attribute:"row-collapse"})],a.prototype,"rowCollapse",2);i([k()],a.prototype,"_collapsed",2);i([G("slot")],a.prototype,"_elSlot",2);i([W()],a.prototype,"_handleResize",1);i([F("value")],a.prototype,"_updateSelectedFromValue",1);a=i([w("gds-filter-chips")],a);

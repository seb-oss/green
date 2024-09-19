import{n as h,a as k,g as C,G as x,h as $,r as P}from"./gds-element-86064462.js";import{a as W}from"./query-b9d3c2af.js";import{R as S}from"./class-map-f04c1558.js";import{a as T}from"./button-f13a8f91.js";import{r as G}from"./resize-observer-81981523.js";import{w as H}from"./watch-c4961afe.js";import{s as F}from"./attribute-converters-ae269b4b.js";import{r as z}from"./query-async-1ff18261.js";import{T as w}from"./transitional-styles-8ea9588a.js";import"./checkmark-da617071.js";import{i as A}from"./lit-element-1d72f0ce.js";const D=A`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;var M=Object.defineProperty,R=Object.getOwnPropertyDescriptor,u=(e,t,s,a)=>{for(var l=a>1?void 0:a?R(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(a?n(t,s,l):n(l))||l);return a&&l&&M(t,s,l),l};let p=class extends x{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),w.instance.apply(this,"gds-filter-chip"),this._button.then(e=>{w.instance.apply(e,"gds-button")})}render(){const e={"btn-p":!this.selected};return $`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${S(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};p.styles=[D];u([h({reflect:!0,type:Boolean})],p.prototype,"selected",2);u([h()],p.prototype,"value",2);u([z(k("gds-button"))],p.prototype,"_button",2);p=u([C("gds-filter-chip")],p);const V=A`
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
`;var B=Object.defineProperty,N=Object.getOwnPropertyDescriptor,i=(e,t,s,a)=>{for(var l=a>1?void 0:a?N(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(a?n(t,s,l):n(l))||l);return a&&l&&B(t,s,l),l},_=(e,t,s)=>{if(!t.has(e))throw TypeError("Cannot "+s)},f=(e,t,s)=>(_(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>{if(t.has(e))throw TypeError("Cannot add the same private member more than once");t instanceof WeakSet?t.add(e):t.set(e,s)},U=(e,t,s,a)=>(_(e,t,"write to private field"),a?a.call(e,s):t.set(e,s),s),b=(e,t,s)=>(_(e,t,"access private method"),s),v,m,d,y,E,g,O;let r=class extends T{constructor(){super(...arguments),c(this,y),c(this,g),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,v,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),c(this,m,3),c(this,d,0)}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return $`<div
      class="chips ${S(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        gds-allow="gds-filter-chip"
        @click=${f(this,v)}
        @slotchange=${b(this,g,O)}
        role="none"
      ></slot>
    </div>`}_getValidityAnchor(){return this}_handleResize(){if(!this.rowCollapse)return;const e=b(this,y,E).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*f(this,m)&&(this._collapsed=!0,U(this,d,s)),s>f(this,d)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};v=new WeakMap;m=new WeakMap;d=new WeakMap;y=new WeakSet;E=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};g=new WeakSet;O=function(){var t;const e=(t=this.chips.find(s=>s.selected))==null?void 0:t.value;e&&(this.value=e)};r.styles=[V];i([h({converter:F})],r.prototype,"value",2);i([h({type:Boolean})],r.prototype,"multiple",2);i([h()],r.prototype,"label",2);i([h({type:Boolean,attribute:"row-collapse"})],r.prototype,"rowCollapse",2);i([P()],r.prototype,"_collapsed",2);i([W("slot")],r.prototype,"_elSlot",2);i([G()],r.prototype,"_handleResize",1);i([H("value")],r.prototype,"_updateSelectedFromValue",1);r=i([C("gds-filter-chips")],r);

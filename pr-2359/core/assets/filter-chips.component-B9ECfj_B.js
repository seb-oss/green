import{n as p,G,h as w,g as C,r as k}from"./gds-element-DKcDvDP5.js";import{a as x}from"./query-p8xgzTDt.js";import{e as b}from"./class-map-CXsQwv0r.js";import{r as E}from"./resize-observer-B9k8v2TZ.js";import{w as P}from"./watch-tFciLXSI.js";import{s as W}from"./attribute-converters-CdI0trPX.js";import{G as F,a as V}from"./button.component-LlNp-C7s.js";import{T as H}from"./transitional-styles-DNKDJRMg.js";import{I as T}from"./checkmark.component-CioA8zuv.js";import{i as $}from"./lit-element-Bx14lxc-.js";const z=$`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;var B=Object.defineProperty,D=Object.getOwnPropertyDescriptor,y=(e,t,s,r)=>{for(var l=r>1?void 0:r?D(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(r?n(t,s,l):n(l))||l);return r&&l&&B(t,s,l),l};let h=class extends G{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),H.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return w`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${b(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};h.styles=[z];y([p({reflect:!0,type:Boolean})],h.prototype,"selected",2);y([p()],h.prototype,"value",2);h=y([C("gds-filter-chip",{dependsOn:[F,T]})],h);const M=$`
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
`;var R=Object.defineProperty,I=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},i=(e,t,s,r)=>{for(var l=r>1?void 0:r?I(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(r?n(t,s,l):n(l))||l);return r&&l&&R(t,s,l),l},_=(e,t,s)=>t.has(e)||S("Cannot "+s),f=(e,t,s)=>(_(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s,r)=>(_(e,t,"write to private field"),t.set(e,s),s),g=(e,t,s)=>(_(e,t,"access private method"),s),v,m,d,u,A,O;let a=class extends V{constructor(){super(...arguments),c(this,u),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,v,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),c(this,m,3),c(this,d,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return w`<div
      class="chips ${b(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${f(this,v)}
        @slotchange=${g(this,u,O)}
        role="none"
      ></slot>
    </div>`}focus(e){var t;(t=this.chips[0])==null||t.focus(e)}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=g(this,u,A).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*f(this,m)&&(this._collapsed=!0,q(this,d,s)),s>f(this,d)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};v=new WeakMap;m=new WeakMap;d=new WeakMap;u=new WeakSet;A=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};O=function(){var t;const e=(t=this.chips.find(s=>s.selected))==null?void 0:t.value;e&&(this.value=e)};a.styles=[M];i([p({converter:W})],a.prototype,"value",1);i([p({type:Boolean})],a.prototype,"multiple",2);i([p()],a.prototype,"label",2);i([p({type:Boolean,attribute:"row-collapse"})],a.prototype,"rowCollapse",2);i([k()],a.prototype,"_collapsed",2);i([x("slot")],a.prototype,"_elSlot",2);i([E()],a.prototype,"_handleResize",1);i([P("value")],a.prototype,"_updateSelectedFromValue",1);a=i([C("gds-filter-chips",{dependsOn:[h]})],a);export{h as G,a};

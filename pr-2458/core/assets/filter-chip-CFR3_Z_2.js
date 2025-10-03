import{n as p,r as k}from"./Reflect-DJ7r0WLU.js";import{a as G}from"./query-p8xgzTDt.js";import{e as C}from"./if-defined-BAXgs-ZI.js";import{r as x}from"./resize-observer-B9k8v2TZ.js";import{w as z}from"./watch-tFciLXSI.js";import{s as E}from"./attribute-converters-CdI0trPX.js";import{G as P,h as w,g as b}from"./gds-element-DTROifYq.js";import{G as V,a as F}from"./button.component-qvVtjlow.js";import{i as $}from"./lit-element-Bx14lxc-.js";import{T as W}from"./transitional-styles-BfqUw7Aj.js";import{I as H}from"./checkmark.component-BsK1aQGf.js";const T=$`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;var B=Object.defineProperty,D=Object.getOwnPropertyDescriptor,f=(e,t,s,i)=>{for(var l=i>1?void 0:i?D(t,s):t,n=e.length-1,h;n>=0;n--)(h=e[n])&&(l=(i?h(t,s,l):h(l))||l);return i&&l&&B(t,s,l),l};let o=class extends P{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),W.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return w`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${C(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};o.styles=[T];f([p({reflect:!0,type:Boolean})],o.prototype,"selected",2);f([p()],o.prototype,"value",2);f([p({reflect:!0,type:String})],o.prototype,"size",2);o=f([b("gds-filter-chip",{dependsOn:[V,H]})],o);const M=$`
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
`;var R=Object.defineProperty,I=Object.getOwnPropertyDescriptor,S=e=>{throw TypeError(e)},r=(e,t,s,i)=>{for(var l=i>1?void 0:i?I(t,s):t,n=e.length-1,h;n>=0;n--)(h=e[n])&&(l=(i?h(t,s,l):h(l))||l);return i&&l&&R(t,s,l),l},_=(e,t,s)=>t.has(e)||S("Cannot "+s),v=(e,t,s)=>(_(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?S("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s,i)=>(_(e,t,"write to private field"),t.set(e,s),s),g=(e,t,s)=>(_(e,t,"access private method"),s),m,y,d,u,A,O;let a=class extends F{constructor(){super(...arguments),c(this,u),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,m,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),c(this,y,3),c(this,d,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return w`<div
      class="chips ${C(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${v(this,m)}
        @slotchange=${g(this,u,O)}
        role="none"
      ></slot>
    </div>`}focus(e){var t;(t=this.chips[0])==null||t.focus(e)}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=g(this,u,A).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*v(this,y)&&(this._collapsed=!0,q(this,d,s)),s>v(this,d)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};m=new WeakMap;y=new WeakMap;d=new WeakMap;u=new WeakSet;A=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};O=function(){var e;if(this.value===void 0)if(this.multiple){const t=this.chips.filter(s=>s.selected).map(s=>s.value);t.length&&(this.value=t)}else{const t=(e=this.chips.find(s=>s.selected))==null?void 0:e.value;t&&(this.value=t)}else this._updateSelectedFromValue()};a.styles=[M];r([p({converter:E})],a.prototype,"value",1);r([p({type:Boolean})],a.prototype,"multiple",2);r([p()],a.prototype,"label",2);r([p({type:Boolean,attribute:"row-collapse"})],a.prototype,"rowCollapse",2);r([k()],a.prototype,"_collapsed",2);r([G("slot")],a.prototype,"_elSlot",2);r([x()],a.prototype,"_handleResize",1);r([z("value")],a.prototype,"_updateSelectedFromValue",1);a=r([b("gds-filter-chips",{dependsOn:[o]})],a);a.define();o.define();

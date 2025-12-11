import{i as C,n as p,I as k,a7 as V,a as b,h as w,g as S,V as x,O as z,d as E,Q as P,S as F}from"./iframe-Deag-pbG.js";import{r as G}from"./resize-observer-B9k8v2TZ.js";import{s as W}from"./attribute-converters-CdI0trPX.js";import{I as H}from"./checkmark.component-Bx1F4dhc.js";const B=C`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;var D=Object.defineProperty,M=Object.getOwnPropertyDescriptor,v=(e,t,s,i)=>{for(var l=i>1?void 0:i?M(t,s):t,n=e.length-1,h;n>=0;n--)(h=e[n])&&(l=(i?h(t,s,l):h(l))||l);return i&&l&&D(t,s,l),l};let o=class extends k{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),V.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return w`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${b(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};o.styles=[B];v([p({reflect:!0,type:Boolean})],o.prototype,"selected",2);v([p()],o.prototype,"value",2);v([p({reflect:!0,type:String})],o.prototype,"size",2);o=v([S("gds-filter-chip",{dependsOn:[x,H]})],o);const T=C`
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
`;var I=Object.defineProperty,R=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},r=(e,t,s,i)=>{for(var l=i>1?void 0:i?R(t,s):t,n=e.length-1,h;n>=0;n--)(h=e[n])&&(l=(i?h(t,s,l):h(l))||l);return i&&l&&I(t,s,l),l},m=(e,t,s)=>t.has(e)||$("Cannot "+s),f=(e,t,s)=>(m(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),q=(e,t,s,i)=>(m(e,t,"write to private field"),t.set(e,s),s),g=(e,t,s)=>(m(e,t,"access private method"),s),y,_,d,u,O,A;let a=class extends F{constructor(){super(...arguments),c(this,u),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,y,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),c(this,_,3),c(this,d,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return w`<div
      class="chips ${b(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${f(this,y)}
        @slotchange=${g(this,u,A)}
        role="none"
      ></slot>
    </div>`}focus(e){var t;(t=this.chips[0])==null||t.focus(e)}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=g(this,u,O).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*f(this,_)&&(this._collapsed=!0,q(this,d,s)),s>f(this,d)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};y=new WeakMap;_=new WeakMap;d=new WeakMap;u=new WeakSet;O=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};A=function(){var e;if(this.value===void 0)if(this.multiple){const t=this.chips.filter(s=>s.selected).map(s=>s.value);t.length&&(this.value=t)}else{const t=(e=this.chips.find(s=>s.selected))==null?void 0:e.value;t&&(this.value=t)}else this._updateSelectedFromValue()};a.styles=[T];r([p({converter:W})],a.prototype,"value",1);r([p({type:Boolean})],a.prototype,"multiple",2);r([p()],a.prototype,"label",2);r([p({type:Boolean,attribute:"row-collapse"})],a.prototype,"rowCollapse",2);r([z()],a.prototype,"_collapsed",2);r([E("slot")],a.prototype,"_elSlot",2);r([G()],a.prototype,"_handleResize",1);r([P("value")],a.prototype,"_updateSelectedFromValue",1);a=r([S("gds-filter-chips",{dependsOn:[o]})],a);a.define();o.define();

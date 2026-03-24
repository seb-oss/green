import{i as m,G as C,h as v,_ as l,n as r,g as y,b as o,d as n,c as f,e as w,r as k}from"./tokens.style-DdV6ipms.js";import{e as S,w as $}from"./watch-Bh1rs_BK.js";import{e as g}from"./class-map-DX7GvrIr.js";import{r as A}from"./resize-observer-B9k8v2TZ.js";import{s as x}from"./attribute-converters-CdI0trPX.js";import{G,a as z}from"./button.component-dABcb4XE.js";import{I as V}from"./checkmark.component-DOQOUXBd.js";import{T as W}from"./transitional-styles-R5Ln4I92.js";const E=m`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let i=class extends C{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),W.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return v`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${g(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};i.styles=[E];l([r({reflect:!0,type:Boolean})],i.prototype,"selected",2);l([r()],i.prototype,"value",2);l([r({reflect:!0,type:String})],i.prototype,"size",2);i=l([y("gds-filter-chip",{dependsOn:[G,V]})],i);const F=m`
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
`;var H=F,p,c,h,d,_,u,b;let a=class extends z{constructor(){super(...arguments),o(this,d),o(this,u),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,o(this,p,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),o(this,c,3),o(this,h,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return v`<div
      class="chips ${g(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${n(this,p)}
        @slotchange=${f(this,u,b)}
        role="none"
      ></slot>
    </div>`}focus(e){var t;(t=this.chips[0])==null||t.focus(e)}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=f(this,d,_).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*n(this,c)&&(this._collapsed=!0,w(this,h,s)),s>n(this,h)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};p=new WeakMap;c=new WeakMap;h=new WeakMap;d=new WeakSet;_=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};u=new WeakSet;b=function(){var e;if(this.value===void 0)if(this.multiple){const t=this.chips.filter(s=>s.selected).map(s=>s.value);t.length&&(this.value=t)}else{const t=(e=this.chips.find(s=>s.selected))==null?void 0:e.value;t&&(this.value=t)}else this._updateSelectedFromValue()};a.styles=[H];l([r({converter:x})],a.prototype,"value",1);l([r({type:Boolean})],a.prototype,"multiple",2);l([r()],a.prototype,"label",2);l([r({type:Boolean,attribute:"row-collapse"})],a.prototype,"rowCollapse",2);l([k()],a.prototype,"_collapsed",2);l([S("slot")],a.prototype,"_elSlot",2);l([A()],a.prototype,"_handleResize",1);l([$("value")],a.prototype,"_updateSelectedFromValue",1);a=l([y("gds-filter-chips",{dependsOn:[i]})],a);export{a as G,i as a};

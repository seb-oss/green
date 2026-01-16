import{i as f,G as b,h as m,_ as l,n as r,g as v,b as o,d as p,c as u,e as C,r as w}from"./tokens.style-C8tF5EVt.js";import{e as k,w as S}from"./watch-Bh1rs_BK.js";import{e as y}from"./class-map-C_NlsVg5.js";import{r as $}from"./resize-observer-B9k8v2TZ.js";import{s as A}from"./attribute-converters-CdI0trPX.js";import{G,a as x}from"./button.component-CXXAP0PG.js";import{I as z}from"./checkmark.component-CAckjp8z.js";import{T as V}from"./transitional-styles-CxWs7PU3.js";const F=f`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let i=class extends b{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),V.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return m`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${y(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};i.styles=[F];l([r({reflect:!0,type:Boolean})],i.prototype,"selected",2);l([r()],i.prototype,"value",2);l([r({reflect:!0,type:String})],i.prototype,"size",2);i=l([v("gds-filter-chip",{dependsOn:[G,z]})],i);const E=f`
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
`;var W=E,c,d,h,n,g,_;let a=class extends x{constructor(){super(...arguments),o(this,n),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,o(this,c,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),o(this,d,3),o(this,h,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return m`<div
      class="chips ${y(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${p(this,c)}
        @slotchange=${u(this,n,_)}
        role="none"
      ></slot>
    </div>`}focus(e){var t;(t=this.chips[0])==null||t.focus(e)}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=u(this,n,g).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*p(this,d)&&(this._collapsed=!0,C(this,h,s)),s>p(this,h)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};c=new WeakMap;d=new WeakMap;h=new WeakMap;n=new WeakSet;g=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};_=function(){var e;if(this.value===void 0)if(this.multiple){const t=this.chips.filter(s=>s.selected).map(s=>s.value);t.length&&(this.value=t)}else{const t=(e=this.chips.find(s=>s.selected))==null?void 0:e.value;t&&(this.value=t)}else this._updateSelectedFromValue()};a.styles=[W];l([r({converter:A})],a.prototype,"value",1);l([r({type:Boolean})],a.prototype,"multiple",2);l([r()],a.prototype,"label",2);l([r({type:Boolean,attribute:"row-collapse"})],a.prototype,"rowCollapse",2);l([w()],a.prototype,"_collapsed",2);l([k("slot")],a.prototype,"_elSlot",2);l([$()],a.prototype,"_handleResize",1);l([S("value")],a.prototype,"_updateSelectedFromValue",1);a=l([v("gds-filter-chips",{dependsOn:[i]})],a);export{a as G,i as a};

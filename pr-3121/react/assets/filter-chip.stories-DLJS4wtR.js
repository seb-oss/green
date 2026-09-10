import{j as r}from"./jsx-runtime-u17CrQMm.js";import{e as g}from"./iframe-7ifkKTWJ.js";import{o as y}from"./create-component-CVDMTe9T.js";import{i as C,G as A,h as b,_ as l,n as o,g as _,r as $,b as h,c as u,d as v,e as j,a as F}from"./declarative-layout-mixins-qhlmn3Eh.js";import{e as G,w as T,a as z}from"./watch-rsnQmdjn.js";import{e as w}from"./class-map-CWftihNH.js";import{r as E}from"./resize-observer-CfkbZofs.js";import{s as V}from"./attribute-converters-CdI0trPX.js";import{G as B,a as I}from"./button.component-CQcepbFA.js";import{I as O}from"./checkmark.component-PWPV95-w.js";import{T as W,b as H}from"./transitional-styles--Sf0A24C.js";const M=C`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let i=class extends A{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),W.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return b`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${w(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};i.styles=[M];l([o({reflect:!0,type:Boolean})],i.prototype,"selected",2);l([o()],i.prototype,"value",2);l([o({reflect:!0,type:String})],i.prototype,"size",2);i=l([_("gds-filter-chip",{dependsOn:[B,O]})],i);const D=C`
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
`;var R=D,m,f,c,d,x,S;let s=class extends I{constructor(){super(...arguments),h(this,d),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,h(this,m,e=>{const t=this.chips.find(a=>a===e.target||a.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(a=>a!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),h(this,f,3),h(this,c,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return b`<div
      class="chips ${w(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${u(this,m)}
        @slotchange=${v(this,d,S)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=v(this,d,x).call(this),t=this.offsetHeight,a=this.offsetWidth;t>=e*u(this,f)&&(this._collapsed=!0,j(this,c,a)),a>u(this,c)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};m=new WeakMap;f=new WeakMap;c=new WeakMap;d=new WeakSet;x=function(){return this.chips[0]?.offsetHeight||0};S=function(){if(this.value===void 0)if(this.multiple){const e=this.chips.filter(t=>t.selected).map(t=>t.value);e.length&&(this.value=e)}else{const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)}else this._updateSelectedFromValue()};s.styles=[R];l([o({converter:V})],s.prototype,"value",1);l([o({type:Boolean})],s.prototype,"multiple",2);l([o()],s.prototype,"label",2);l([o({type:Boolean,attribute:"row-collapse"})],s.prototype,"rowCollapse",2);l([$()],s.prototype,"_collapsed",2);l([G("slot")],s.prototype,"_elSlot",2);l([E()],s.prototype,"_handleResize",1);l([T("value")],s.prototype,"_updateSelectedFromValue",1);s=l([_("gds-filter-chips",{dependsOn:[i]}),z({labelledBy:'[role="listbox"]',describedBy:'[role="listbox"]'})],s);s.define();H();const k=y({tagName:F("gds-filter-chips"),elementClass:s,react:g}),n=y({tagName:F("gds-filter-chip"),elementClass:i,react:g}),N=({children:e,...t})=>r.jsx(k,{...t,children:e}),L={title:"Components/Filter Chips",component:k},p={render:N.bind({}),name:"Filter Chips",parameters:{componentIds:["component-filterchips"]},args:{children:[r.jsx(n,{value:"all",children:"All"}),r.jsx(n,{value:"top-news",children:"Top news"}),r.jsx(n,{value:"division",children:"Division"}),r.jsx(n,{value:"global",children:"Global"}),r.jsx(n,{value:"country",children:"Country"}),r.jsx(n,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  render: Template.bind({}),
  name: 'Filter Chips',
  parameters: {
    componentIds: ['component-filterchips']
  },
  args: {
    children: [<FilterChip value="all">All</FilterChip>, <FilterChip value="top-news">Top news</FilterChip>, <FilterChip value="division">Division</FilterChip>, <FilterChip value="global">Global</FilterChip>, <FilterChip value="country">Country</FilterChip>, <FilterChip value="lcfi">
        Large Corporate & Financial Institutions
      </FilterChip>]
  }
}`,...p.parameters?.docs?.source}}};const q=["Default"],le=Object.freeze(Object.defineProperty({__proto__:null,Default:p,__namedExportsOrder:q,default:L},Symbol.toStringTag,{value:"Module"}));export{le as F,k as a,n as b};

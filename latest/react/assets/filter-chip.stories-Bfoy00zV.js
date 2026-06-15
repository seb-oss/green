import{j as r}from"./jsx-runtime-u17CrQMm.js";import{e as y}from"./iframe-BPZcHg85.js";import{o as C}from"./create-component-CVDMTe9T.js";import{i as b,G as $,h as _,_ as l,n as o,g as F,r as j,b as p,d,c as g,e as G,a as w}from"./declarative-layout-mixins-KigxYqMv.js";import{e as T,w as z,a as E}from"./watch-QkQzTQuG.js";import{e as x}from"./class-map-BbSRX5Yn.js";import{r as V}from"./resize-observer-CfkbZofs.js";import{s as W}from"./attribute-converters-CdI0trPX.js";import{G as B,a as H}from"./button.component-BXQa7sdv.js";import{I}from"./checkmark.component-DMF8pn9K.js";import{T as O,b as M}from"./transitional-styles-DCQos146.js";const D=b`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let i=class extends ${constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),O.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return _`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${x(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};i.styles=[D];l([o({reflect:!0,type:Boolean})],i.prototype,"selected",2);l([o()],i.prototype,"value",2);l([o({reflect:!0,type:String})],i.prototype,"size",2);i=l([F("gds-filter-chip",{dependsOn:[B,I]})],i);const R=b`
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
`;var N=R,u,m,c,f,S,v,k;let s=class extends H{constructor(){super(...arguments),p(this,f),p(this,v),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,p(this,u,e=>{const t=this.chips.find(a=>a===e.target||a.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(a=>a!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),p(this,m,3),p(this,c,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return _`<div
      class="chips ${x(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${d(this,u)}
        @slotchange=${g(this,v,k)}
        role="none"
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=g(this,f,S).call(this),t=this.offsetHeight,a=this.offsetWidth;t>=e*d(this,m)&&(this._collapsed=!0,G(this,c,a)),a>d(this,c)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};u=new WeakMap;m=new WeakMap;c=new WeakMap;f=new WeakSet;S=function(){return this.chips[0]?.offsetHeight||0};v=new WeakSet;k=function(){if(this.value===void 0)if(this.multiple){const e=this.chips.filter(t=>t.selected).map(t=>t.value);e.length&&(this.value=e)}else{const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)}else this._updateSelectedFromValue()};s.styles=[N];l([o({converter:W})],s.prototype,"value",1);l([o({type:Boolean})],s.prototype,"multiple",2);l([o()],s.prototype,"label",2);l([o({type:Boolean,attribute:"row-collapse"})],s.prototype,"rowCollapse",2);l([j()],s.prototype,"_collapsed",2);l([T("slot")],s.prototype,"_elSlot",2);l([V()],s.prototype,"_handleResize",1);l([z("value")],s.prototype,"_updateSelectedFromValue",1);s=l([F("gds-filter-chips",{dependsOn:[i]}),E({labelledBy:'[role="listbox"]',describedBy:'[role="listbox"]'})],s);s.define();M();const A=C({tagName:w("gds-filter-chips"),elementClass:s,react:y}),n=C({tagName:w("gds-filter-chip"),elementClass:i,react:y}),L=({children:e,...t})=>r.jsx(A,{...t,children:e}),q={title:"Components/Filter Chips",component:A},h={render:L.bind({}),name:"Filter Chips",parameters:{componentIds:["component-filterchips"]},args:{children:[r.jsx(n,{value:"all",children:"All"}),r.jsx(n,{value:"top-news",children:"Top news"}),r.jsx(n,{value:"division",children:"Division"}),r.jsx(n,{value:"global",children:"Global"}),r.jsx(n,{value:"country",children:"Country"}),r.jsx(n,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
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
}`,...h.parameters?.docs?.source}}};const P=["Default"],ie=Object.freeze(Object.defineProperty({__proto__:null,Default:h,__namedExportsOrder:P,default:q},Symbol.toStringTag,{value:"Module"}));export{ie as F,A as a,n as b};

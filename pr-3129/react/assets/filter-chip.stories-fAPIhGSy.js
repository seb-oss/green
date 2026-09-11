import{j as o}from"./jsx-runtime-u17CrQMm.js";import{e as k}from"./iframe-C5LH_78q.js";import{o as F}from"./create-component-CVDMTe9T.js";import{i as x,G,h as A,_ as l,n as h,g as S,r as I,b as r,c as n,d as w,e as W,a as $}from"./declarative-layout-mixins-Dk4w2_B5.js";import{e as R,w as D,a as H}from"./watch-rsnQmdjn.js";import{e as T}from"./class-map-CnZEBaqW.js";import{r as M}from"./resize-observer-CfkbZofs.js";import{s as O}from"./attribute-converters-CdI0trPX.js";import{G as V,a as B}from"./button.component-CpKUpj9k.js";import{I as L}from"./checkmark.component-BeayktRH.js";import{T as N,b as U}from"./transitional-styles-CGwGA0Oe.js";const q=x`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let a=class extends G{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),N.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return A`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${T(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};a.styles=[q];a.shadowRootOptions={mode:"open",delegatesFocus:!0};l([h({reflect:!0,type:Boolean})],a.prototype,"selected",2);l([h()],a.prototype,"value",2);l([h({reflect:!0,type:String})],a.prototype,"size",2);a=l([S("gds-filter-chip",{dependsOn:[V,L]})],a);const K=x`
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
`;var P=K,g,u,v,y,m,b,j,C,E,_;let i=class extends B{constructor(){super(...arguments),r(this,b),r(this,C),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,r(this,g,e=>{if(!["ArrowDown","ArrowUp","ArrowLeft","ArrowRight","Home","End"].includes(e.key))return;const s=e.target instanceof a?e.target:null;if(!s||!this.chips.includes(s))return;e.preventDefault();const f=this.chips.indexOf(s);let p=f;switch(e.key){case"ArrowDown":case"ArrowRight":p=(f+1)%this.chips.length;break;case"ArrowUp":case"ArrowLeft":p=(f-1+this.chips.length)%this.chips.length;break;case"Home":p=0;break;case"End":p=this.chips.length-1;break}n(this,u).call(this,p),this.chips[p]?.focus()}),r(this,u,e=>{this.chips.forEach((t,s)=>{t.setAttribute("tabindex",s===e?"0":"-1")})}),r(this,v,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),r(this,y,3),r(this,m,0),r(this,_,()=>{this.chips.length!==0&&n(this,u).call(this,0)})}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return A`<div
      class="chips ${T(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
      @keydown=${n(this,g)}
    >
      <slot
        @click=${n(this,v)}
        @slotchange=${w(this,C,E)}
      ></slot>
    </div>`}focus(e){this.chips[0]?.focus(e)}_getValidityAnchor(){return this.shadowRoot?.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=w(this,b,j).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*n(this,y)&&(this._collapsed=!0,W(this,m,s)),s>n(this,m)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};g=new WeakMap;u=new WeakMap;v=new WeakMap;y=new WeakMap;m=new WeakMap;b=new WeakSet;j=function(){return this.chips[0]?.offsetHeight||0};C=new WeakSet;E=function(){if(this.value===void 0)if(this.multiple){const e=this.chips.filter(t=>t.selected).map(t=>t.value);e.length&&(this.value=e)}else{const e=this.chips.find(t=>t.selected)?.value;e&&(this.value=e)}else this._updateSelectedFromValue();this.updateComplete.then(()=>{n(this,_).call(this)})};_=new WeakMap;i.styles=[P];l([h({converter:O})],i.prototype,"value",1);l([h({type:Boolean})],i.prototype,"multiple",2);l([h()],i.prototype,"label",2);l([h({type:Boolean,attribute:"row-collapse"})],i.prototype,"rowCollapse",2);l([I()],i.prototype,"_collapsed",2);l([R("slot")],i.prototype,"_elSlot",2);l([M()],i.prototype,"_handleResize",1);l([D("value")],i.prototype,"_updateSelectedFromValue",1);i=l([S("gds-filter-chips",{dependsOn:[a]}),H({labelledBy:'[role="listbox"]',describedBy:'[role="listbox"]'})],i);i.define();U();const z=F({tagName:$("gds-filter-chips"),elementClass:i,react:k}),c=F({tagName:$("gds-filter-chip"),elementClass:a,react:k}),J=({children:e,...t})=>o.jsx(z,{...t,children:e}),Q={title:"Components/Filter Chips",component:z},d={render:J.bind({}),name:"Filter Chips",parameters:{componentIds:["component-filterchips"]},args:{children:[o.jsx(c,{value:"all",children:"All"}),o.jsx(c,{value:"top-news",children:"Top news"}),o.jsx(c,{value:"division",children:"Division"}),o.jsx(c,{value:"global",children:"Global"}),o.jsx(c,{value:"country",children:"Country"}),o.jsx(c,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
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
}`,...d.parameters?.docs?.source}}};const X=["Default"],he=Object.freeze(Object.defineProperty({__proto__:null,Default:d,__namedExportsOrder:X,default:Q},Symbol.toStringTag,{value:"Module"}));export{he as F,z as a,c as b};

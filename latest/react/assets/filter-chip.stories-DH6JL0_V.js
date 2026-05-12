import{j as r}from"./jsx-runtime-D_zvdyIk.js";import{R as b}from"./iframe-DZnDkVPA.js";import{o as F}from"./create-component-CPRSibq9.js";import{i as w,G as T,h as S,_ as i,n as o,g as x,r as z,b as p,d,c as g,e as E,a as k}from"./tokens.style-BzBOz0om.js";import{e as V,w as W}from"./watch-Bh1rs_BK.js";import{e as A}from"./class-map-_dPGYW0e.js";import{r as H}from"./resize-observer-B9k8v2TZ.js";import{s as I}from"./attribute-converters-CdI0trPX.js";import{G as O,a as R}from"./button.component-DRS14h0U.js";import{I as M}from"./checkmark.component-BI95O3ov.js";import{T as B,b as D}from"./transitional-styles-Dgr8Ntu3.js";const N=w`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`;let a=class extends T{constructor(){super(...arguments),this.selected=!1,this.size="large"}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),B.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return S`<gds-button
      class="btn"
      .size=${this.size==="large"?"medium":"small"}
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${A(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};a.styles=[N];i([o({reflect:!0,type:Boolean})],a.prototype,"selected",2);i([o()],a.prototype,"value",2);i([o({reflect:!0,type:String})],a.prototype,"size",2);a=i([x("gds-filter-chip",{dependsOn:[O,M]})],a);const L=w`
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
`;var q=L,u,m,c,f,$,v,j;let l=class extends R{constructor(){super(...arguments),p(this,f),p(this,v),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,p(this,u,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value===this.value?void 0:t.value,this.dispatchCustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0}))}),p(this,m,3),p(this,c,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return S`<div
      class="chips ${A(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${d(this,u)}
        @slotchange=${g(this,v,j)}
        role="none"
      ></slot>
    </div>`}focus(e){var t;(t=this.chips[0])==null||t.focus(e)}_getValidityAnchor(){var e;return(e=this.shadowRoot)==null?void 0:e.querySelector("div")}_handleResize(){if(!this.rowCollapse)return;const e=g(this,f,$).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*d(this,m)&&(this._collapsed=!0,E(this,c,s)),s>d(this,c)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})})}};u=new WeakMap;m=new WeakMap;c=new WeakMap;f=new WeakSet;$=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};v=new WeakSet;j=function(){var e;if(this.value===void 0)if(this.multiple){const t=this.chips.filter(s=>s.selected).map(s=>s.value);t.length&&(this.value=t)}else{const t=(e=this.chips.find(s=>s.selected))==null?void 0:e.value;t&&(this.value=t)}else this._updateSelectedFromValue()};l.styles=[q];i([o({converter:I})],l.prototype,"value",1);i([o({type:Boolean})],l.prototype,"multiple",2);i([o()],l.prototype,"label",2);i([o({type:Boolean,attribute:"row-collapse"})],l.prototype,"rowCollapse",2);i([z()],l.prototype,"_collapsed",2);i([V("slot")],l.prototype,"_elSlot",2);i([H()],l.prototype,"_handleResize",1);i([W("value")],l.prototype,"_updateSelectedFromValue",1);l=i([x("gds-filter-chips",{dependsOn:[a]})],l);l.define();D();const G=F({tagName:k("gds-filter-chips"),elementClass:l,react:b}),n=F({tagName:k("gds-filter-chip"),elementClass:a,react:b}),P=({children:e,...t})=>r.jsx(G,{...t,children:e}),U={title:"Components/Filter Chips",component:G},h={render:P.bind({}),name:"Filter Chips",parameters:{componentIds:["component-filterchips"]},args:{children:[r.jsx(n,{value:"all",children:"All"}),r.jsx(n,{value:"top-news",children:"Top news"}),r.jsx(n,{value:"division",children:"Division"}),r.jsx(n,{value:"global",children:"Global"}),r.jsx(n,{value:"country",children:"Country"}),r.jsx(n,{value:"lcfi",children:"Large Corporate & Financial Institutions"})]}};var y,C,_;h.parameters={...h.parameters,docs:{...(y=h.parameters)==null?void 0:y.docs,source:{originalSource:`{
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
}`,...(_=(C=h.parameters)==null?void 0:C.docs)==null?void 0:_.source}}};const J=["Default"],re=Object.freeze(Object.defineProperty({__proto__:null,Default:h,__namedExportsOrder:J,default:U},Symbol.toStringTag,{value:"Module"}));export{re as F,G as a,n as b};

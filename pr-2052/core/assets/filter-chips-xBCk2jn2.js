import{n as p,G as O,h as w,g as b,r as x}from"./custom-element-scoping-BOlwUH_F.js";import{a as P}from"./query-p8xgzTDt.js";import{e as C}from"./class-map-CXsQwv0r.js";import{r as k}from"./resize-observer-B9k8v2TZ.js";import{w as G}from"./watch-tFciLXSI.js";import{s as W}from"./attribute-converters-CdI0trPX.js";import{a as F}from"./button-DC9S9tme.js";import{i as $}from"./lit-element-Bx14lxc-.js";import{T as V}from"./transitional-styles-D9IvMC4x.js";import"./checkmark-D28m9aNM.js";const H=$`
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
`,T=$`
  @layer base, reset, transitional-styles;
  @layer base {
    .btn-p {
      padding: 0 0.75rem;
    }
    .icon {
      width: 1rem;
    }
  }
`;var z=Object.defineProperty,D=Object.getOwnPropertyDescriptor,_=(e,t,s,i)=>{for(var l=i>1?void 0:i?D(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(i?n(t,s,l):n(l))||l);return i&&l&&z(t,s,l),l};let h=class extends O{constructor(){super(...arguments),this.selected=!1}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),V.instance.apply(this,"gds-filter-chip")}render(){const e={"btn-p":!this.selected};return w`<gds-button
      class="btn"
      size="small"
      .rank=${this.selected?"primary":"secondary"}
      variant=${this._isUsingTransitionalStyles?"ghost":"default"}
      gds-role="option"
      gds-aria-selected=${this.selected}
    >
      <span class=${C(e)}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${this.selected?"contents":"none"}"
        width="16"
        height="16"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`}};h.styles=[T];_([p({reflect:!0,type:Boolean})],h.prototype,"selected",2);_([p()],h.prototype,"value",2);h=_([b("gds-filter-chip")],h);h.define();var M=Object.defineProperty,B=Object.getOwnPropertyDescriptor,A=e=>{throw TypeError(e)},r=(e,t,s,i)=>{for(var l=i>1?void 0:i?B(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(l=(i?n(t,s,l):n(l))||l);return i&&l&&M(t,s,l),l},y=(e,t,s)=>t.has(e)||A("Cannot "+s),f=(e,t,s)=>(y(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?A("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),R=(e,t,s,i)=>(y(e,t,"write to private field"),t.set(e,s),s),g=(e,t,s)=>(y(e,t,"access private method"),s),v,m,d,u,S,E;let a=class extends F{constructor(){super(...arguments),c(this,u),this.multiple=!1,this.label="",this.rowCollapse=!1,this._collapsed=!1,c(this,v,e=>{const t=this.chips.find(s=>s===e.target||s.contains(e.target));t&&(this.multiple&&Array.isArray(this.value)?t.selected?this.value=this.value.filter(s=>s!==t.value):this.value=[...this.value,t.value]:this.value=t.value,this.dispatchEvent(new CustomEvent("change",{detail:{clickedChip:t,value:this.value},bubbles:!0,composed:!0})))}),c(this,m,3),c(this,d,0)}get value(){return this._internalValue}set value(e){this._internalValue=e}get chips(){return this._elSlot?this._elSlot.assignedElements():[]}render(){const e={collapse:this._collapsed};return w`<div
      class="chips ${C(e)}"
      role="listbox"
      aria-label=${this.label}
      aria-multiselectable=${this.multiple}
    >
      <slot
        @click=${f(this,v)}
        @slotchange=${g(this,u,E)}
        role="none"
      ></slot>
    </div>`}_getValidityAnchor(){return this}_handleResize(){if(!this.rowCollapse)return;const e=g(this,u,S).call(this),t=this.offsetHeight,s=this.offsetWidth;t>=e*f(this,m)&&(this._collapsed=!0,R(this,d,s)),s>f(this,d)&&(this._collapsed=!1)}_updateSelectedFromValue(){this.value&&(this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then(()=>{this.chips.forEach(e=>{e.selected=this.multiple?this.value.includes(e.value):this.value===e.value})}))}};v=new WeakMap;m=new WeakMap;d=new WeakMap;u=new WeakSet;S=function(){var e;return((e=this.chips[0])==null?void 0:e.offsetHeight)||0};E=function(){var t;const e=(t=this.chips.find(s=>s.selected))==null?void 0:t.value;e&&(this.value=e)};a.styles=[H];r([p({converter:W})],a.prototype,"value",1);r([p({type:Boolean})],a.prototype,"multiple",2);r([p()],a.prototype,"label",2);r([p({type:Boolean,attribute:"row-collapse"})],a.prototype,"rowCollapse",2);r([x()],a.prototype,"_collapsed",2);r([P("slot")],a.prototype,"_elSlot",2);r([k()],a.prototype,"_handleResize",1);r([G("value")],a.prototype,"_updateSelectedFromValue",1);a=r([b("gds-filter-chips")],a);a.define();

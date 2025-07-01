import{m as E}from"./runtime-BL31MtW8.js";import{l as P}from"./localized-decorator-DtmrKsyB.js";import{i as G,E as L}from"./lit-element-Bx14lxc-.js";import{h,g as _,G as y,n as d}from"./gds-element-DKcDvDP5.js";import{r as T}from"./query-async-MEroNOeJ.js";import{n as D}from"./when-BR7zwNJC.js";import{T as b}from"./transitional-styles-BOV6aykc.js";import{s as M,F as B,L as W,u as A}from"./unwrap-slots-DbM1_JFj.js";import{n as I,e as S}from"./ref-R0wBYijq.js";import{t as z}from"./tokens.style-C9n1Y52h.js";import{b as R,w as F}from"./declarative-layout-mixins-Bw_LIblW.js";import{G as N}from"./button.component-BQEAXfVs.js";import{I as H}from"./dot-grid-one-horizontal-D9v2KJIs.js";import{G as K}from"./popover.component-BnrRARyx.js";import"./menu-heading.component-CtfYlSvu.js";var q=Object.defineProperty,J=Object.getOwnPropertyDescriptor,w=e=>{throw TypeError(e)},Q=(e,t,s,a)=>{for(var r=a>1?void 0:a?J(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&q(t,s,r),r},U=(e,t,s)=>t.has(e)||w("Cannot "+s),V=(e,t,s)=>(U(e,t,"read from private field"),s?s.call(e):t.get(e)),X=(e,t,s)=>t.has(e)?w("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),v;let c=class extends B(y){constructor(){super(...arguments),X(this,v,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",V(this,v)),b.instance.apply(this,"gds-option")}render(){return h`<div class="item"><slot></slot></div>`}};v=new WeakMap;c.styles=[M];c=Q([_("gds-menu-item")],c);var Y=Object.defineProperty,Z=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},j=(e,t,s,a)=>{for(var r=a>1?void 0:a?Z(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&Y(t,s,r),r},ee=(e,t,s)=>t.has(e)||C("Cannot "+s),u=(e,t,s)=>(ee(e,t,"read from private field"),s?s.call(e):t.get(e)),te=(e,t,s)=>t.has(e)?C("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),p;let m=class extends y{constructor(){super(),te(this,p,S()),new W(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),b.instance.apply(this,"gds-listbox")}get navigableItems(){return u(this,p).value?A(u(this,p).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return h`<slot ${I(u(this,p))}></slot>`}};p=new WeakMap;m=j([_("gds-menu",{dependsOn:[c]})],m);const se=G`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
    }

    button {
      display: flex;
      border-width: 0;
      background-color: var(--gds-sys-color-l3-02);
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;

      &:focus-visible {
        outline-offset: var(--gds-sys-space-3xs);
        outline-style: solid;
        outline-width: var(--gds-sys-space-3xs);
        outline-color: var(--gds-sys-color-content-01);
      }
    }

    button:hover {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l3-02),
        var(--gds-sys-color-state-light-hover)
      );
    }
  }
`;var re=Object.defineProperty,ae=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},l=(e,t,s,a)=>{for(var r=a>1?void 0:a?ae(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(r=(a?n(t,s,r):n(r))||r);return a&&r&&re(t,s,r),r},O=(e,t,s)=>t.has(e)||k("Cannot "+s),oe=(e,t,s)=>(O(e,t,"read from private field"),s?s.call(e):t.get(e)),$=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),ne=(e,t,s)=>(O(e,t,"access private method"),s),f,g,x;let i=class extends R(F(y)){constructor(){super(...arguments),$(this,g),this.open=!1,this.buttonLabel=E("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",$(this,f,()=>h`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${this.elTriggerBtn}
      .anchorRef=${this.elTriggerBtn}
      .label=${this.label}
      .placement=${this.placement}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${ne(this,g,x)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),b.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return h`<gds-button
        .rank=${"secondary"}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        ${this.showLabel?this.buttonLabel??this.label:L}
        <gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal>
      </gds-button>
      ${D(this.open,oe(this,f))}`}};f=new WeakMap;g=new WeakSet;x=function(){this.open=!1};i.styles=[z,se];i.shadowRootOptions={mode:"open",delegatesFocus:!0};l([d({type:Boolean,reflect:!0})],i.prototype,"open",2);l([d({attribute:"button-label"})],i.prototype,"buttonLabel",2);l([d({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);l([d()],i.prototype,"label",2);l([d()],i.prototype,"placement",2);l([T("#trigger")],i.prototype,"elTriggerBtn",2);i=l([_("gds-context-menu",{dependsOn:[c,m,K,N,H]}),P()],i);export{c as G,i as a};

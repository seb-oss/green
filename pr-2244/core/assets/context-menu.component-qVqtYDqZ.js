import{m as L,l as T}from"./runtime-CNluP0A8.js";import{n as u}from"./Reflect-DJ7r0WLU.js";import{r as k}from"./query-async-MEroNOeJ.js";import{n as D}from"./when-BR7zwNJC.js";import{h as c,g as b,G as $,a as I}from"./gds-element-DJNCW3iR.js";import{T as C}from"./transitional-styles-DTrj-OFY.js";import{s as M,F as S,L as W,u as B}from"./unwrap-slots-L-kB66To.js";import{n as A,e as N}from"./ref-R0wBYijq.js";import{t as R}from"./tokens.style-B41Dpirr.js";import{b as z,d as F}from"./declarative-layout-mixins-CquYcIh8.js";import{G as q}from"./button.component-DkxkWQde.js";import{I as H}from"./dot-grid-one-horizontal-C4ZDFmVS.js";import{G as K}from"./popover.component-SrErJWu7.js";import{i as U}from"./lit-element-Bx14lxc-.js";import"./menu-heading.component-Do2zbgFN.js";var J=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,O=e=>{throw TypeError(e)},V=(e,t,s,r)=>{for(var a=r>1?void 0:r?Q(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(a=(r?n(t,s,a):n(a))||a);return r&&a&&J(t,s,a),a},X=(e,t,s)=>t.has(e)||O("Cannot "+s),Y=(e,t,s)=>(X(e,t,"read from private field"),s?s.call(e):t.get(e)),Z=(e,t,s)=>t.has(e)?O("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let h=class extends S($){constructor(){super(...arguments),Z(this,g,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",Y(this,g)),C.instance.apply(this,"gds-option")}render(){return c`<div class="item"><slot></slot></div>`}};g=new WeakMap;h.styles=[M];h=V([b("gds-menu-item")],h);var j=Object.defineProperty,ee=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},te=(e,t,s,r)=>{for(var a=r>1?void 0:r?ee(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(a=(r?n(t,s,a):n(a))||a);return r&&a&&j(t,s,a),a},se=(e,t,s)=>t.has(e)||x("Cannot "+s),f=(e,t,s)=>(se(e,t,"read from private field"),s?s.call(e):t.get(e)),ae=(e,t,s)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d;let _=class extends ${constructor(){super(),ae(this,d,N()),new W(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,"gds-listbox")}get navigableItems(){return f(this,d).value?B(f(this,d).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return c`<slot ${A(f(this,d))}></slot>`}};d=new WeakMap;_=te([b("gds-menu",{dependsOn:[h]})],_);const re=U`
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
        var(--gds-sys-color-state-neutral-03)
      );
    }
  }
`;var oe=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},l=(e,t,s,r)=>{for(var a=r>1?void 0:r?ne(t,s):t,o=e.length-1,n;o>=0;o--)(n=e[o])&&(a=(r?n(t,s,a):n(a))||a);return r&&a&&oe(t,s,a),a},P=(e,t,s)=>t.has(e)||E("Cannot "+s),ie=(e,t,s)=>(P(e,t,"read from private field"),s?s.call(e):t.get(e)),w=(e,t,s)=>t.has(e)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s)=>(P(e,t,"access private method"),s),p,v,y,G;let i=class extends z(F($)){constructor(){super(...arguments),w(this,p),this.open=!1,this.buttonLabel=L("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",w(this,y,()=>c`<gds-popover
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
        @gds-menu-item-click=${m(this,p,G)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),C.instance.apply(this,"gds-context-menu"),m(this,p,v).call(this),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return c`<gds-button
        .rank=${"secondary"}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        @click=${()=>this.open=!0}
      >
        ${this.showLabel?c`<slot
                name="icon"
                slot="lead"
                @slotchange=${m(this,p,v)}
              ></slot
              >${this.buttonLabel}`:c`<slot
              name="icon"
              @slotchange=${m(this,p,v)}
            ></slot>`}
      </gds-button>
      ${D(this.open,ie(this,y))}`}};p=new WeakSet;v=function(){this.elIconSlot.then(e=>{if(!e.assignedNodes({flatten:!0}).some(t=>t instanceof Element&&t.tagName.toLowerCase().startsWith("gds-icon"))){const t=document.createElement(I("gds-icon-dot-grid-one-horizontal"));e.appendChild(t),this.requestUpdate()}})};y=new WeakMap;G=function(){this.open=!1};i.styles=[R,re];i.shadowRootOptions={mode:"open",delegatesFocus:!0};l([u({type:Boolean,reflect:!0})],i.prototype,"open",2);l([u({attribute:"button-label"})],i.prototype,"buttonLabel",2);l([u({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);l([u()],i.prototype,"label",2);l([u()],i.prototype,"placement",2);l([k("#trigger")],i.prototype,"elTriggerBtn",2);l([k('slot[name="icon"]')],i.prototype,"elIconSlot",2);i=l([b("gds-context-menu",{dependsOn:[h,_,K,q,H]}),T()],i);export{i as G,h as a};

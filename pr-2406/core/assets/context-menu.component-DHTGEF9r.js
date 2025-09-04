import{m as x,l as T}from"./runtime-CNluP0A8.js";import{n as u}from"./Reflect-DJ7r0WLU.js";import{r as O}from"./query-async-MEroNOeJ.js";import{n as D}from"./when-BR7zwNJC.js";import{h as c,g as b,G as y,a as I}from"./gds-element-DTROifYq.js";import{T as C}from"./transitional-styles-DlCTkooe.js";import{s as M,F as S,L as W,u as B}from"./unwrap-slots-dIUgOhQO.js";import{n as A,e as N}from"./ref-R0wBYijq.js";import{t as R}from"./tokens.style-BAmYQ5hh.js";import{b as z,d as F}from"./declarative-layout-mixins-DjJmHTNk.js";import{G as q}from"./button.component-DMapjBgE.js";import{I as H}from"./dot-grid-one-horizontal-dVak9lUp.js";import{G as K}from"./popover.component-CWjW8C4-.js";import"./menu-heading.component-tnrTPgF3.js";var U=Object.defineProperty,J=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},Q=(e,t,s,r)=>{for(var a=r>1?void 0:r?J(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&U(t,s,a),a},V=(e,t,s)=>t.has(e)||E("Cannot "+s),X=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),Y=(e,t,s)=>t.has(e)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let h=class extends S(y){constructor(){super(...arguments),Y(this,g,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",X(this,g)),C.instance.apply(this,"gds-option")}render(){return c`<div class="item"><slot></slot></div>`}};g=new WeakMap;h.styles=[M];h=Q([b("gds-menu-item")],h);var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},ee=(e,t,s,r)=>{for(var a=r>1?void 0:r?j(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&Z(t,s,a),a},te=(e,t,s)=>t.has(e)||P("Cannot "+s),f=(e,t,s)=>(te(e,t,"read from private field"),s?s.call(e):t.get(e)),se=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),d;let _=class extends y{constructor(){super(),se(this,d,N()),new W(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,"gds-listbox")}get navigableItems(){return f(this,d).value?B(f(this,d).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return c`<slot ${A(f(this,d))}></slot>`}};d=new WeakMap;_=ee([b("gds-menu",{dependsOn:[h]})],_);var ae=Object.defineProperty,re=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},l=(e,t,s,r)=>{for(var a=r>1?void 0:r?re(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(a=(r?o(t,s,a):o(a))||a);return r&&a&&ae(t,s,a),a},G=(e,t,s)=>t.has(e)||k("Cannot "+s),ne=(e,t,s)=>(G(e,t,"read from private field"),s?s.call(e):t.get(e)),w=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s)=>(G(e,t,"access private method"),s),p,v,$,L;let i=class extends z(F(y)){constructor(){super(...arguments),w(this,p),this.open=!1,this.buttonLabel=x("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",w(this,$,()=>c`<gds-popover
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
        @gds-menu-item-click=${m(this,p,L)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),C.instance.apply(this,"gds-context-menu"),m(this,p,v).call(this),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return c`<gds-button
        .rank=${"secondary"}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${this.open}
        label=${this.buttonLabel}
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
      ${D(this.open,ne(this,$))}`}};p=new WeakSet;v=function(){this.elIconSlot.then(e=>{if(!e.assignedNodes({flatten:!0}).some(t=>t instanceof Element&&t.tagName.toLowerCase().startsWith("gds-icon"))){const t=document.createElement(I("gds-icon-dot-grid-one-horizontal"));e.appendChild(t),this.requestUpdate()}})};$=new WeakMap;L=function(){this.open=!1};i.styles=[R];i.shadowRootOptions={mode:"open",delegatesFocus:!0};l([u({type:Boolean,reflect:!0})],i.prototype,"open",2);l([u({attribute:"button-label"})],i.prototype,"buttonLabel",2);l([u({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);l([u()],i.prototype,"label",2);l([u()],i.prototype,"placement",2);l([O("#trigger")],i.prototype,"elTriggerBtn",2);l([O('slot[name="icon"]')],i.prototype,"elIconSlot",2);i=l([b("gds-context-menu",{dependsOn:[h,_,K,q,H]}),T()],i);export{i as G,h as a};

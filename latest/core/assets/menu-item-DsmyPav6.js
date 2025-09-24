import{m as x,l as T}from"./runtime-CNluP0A8.js";import{n as u}from"./Reflect-DJ7r0WLU.js";import{r as O}from"./query-async-MEroNOeJ.js";import{n as D}from"./when-BR7zwNJC.js";import{h as c,g as b,G as y,a as I}from"./gds-element-DTROifYq.js";import{n as M,e as S}from"./ref-R0wBYijq.js";import{T as C}from"./transitional-styles-D2m6PuZd.js";import{s as W,F as B,L as A,u as N}from"./unwrap-slots-CufDiWNZ.js";import{t as R}from"./tokens.style-BS_h03Rl.js";import{b as z,d as F}from"./declarative-layout-mixins-XrCARJjW.js";import{G as q}from"./button.component-DDm1VAHa.js";import{I as H}from"./dot-grid-one-horizontal-DxD_5NFz.js";import{G as K}from"./popover.component-C7ifnrUG.js";import"./menu-heading-BFIm_Bkm.js";var U=Object.defineProperty,J=Object.getOwnPropertyDescriptor,E=e=>{throw TypeError(e)},Q=(e,t,s,n)=>{for(var a=n>1?void 0:n?J(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&U(t,s,a),a},V=(e,t,s)=>t.has(e)||E("Cannot "+s),X=(e,t,s)=>(V(e,t,"read from private field"),s?s.call(e):t.get(e)),Y=(e,t,s)=>t.has(e)?E("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),g;let d=class extends B(y){constructor(){super(...arguments),Y(this,g,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",X(this,g)),C.instance.apply(this,"gds-option")}render(){return c`<div class="item"><slot></slot></div>`}};g=new WeakMap;d.styles=[W];d=Q([b("gds-menu-item")],d);var Z=Object.defineProperty,j=Object.getOwnPropertyDescriptor,P=e=>{throw TypeError(e)},ee=(e,t,s,n)=>{for(var a=n>1?void 0:n?j(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&Z(t,s,a),a},te=(e,t,s)=>t.has(e)||P("Cannot "+s),v=(e,t,s)=>(te(e,t,"read from private field"),s?s.call(e):t.get(e)),se=(e,t,s)=>t.has(e)?P("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),h;let _=class extends y{constructor(){super(),se(this,h,S()),new A(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),C.instance.apply(this,"gds-listbox")}get navigableItems(){return v(this,h).value?N(v(this,h).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return c`<slot ${M(v(this,h))}></slot>`}};h=new WeakMap;_=ee([b("gds-menu",{dependsOn:[d]})],_);var ae=Object.defineProperty,ne=Object.getOwnPropertyDescriptor,k=e=>{throw TypeError(e)},l=(e,t,s,n)=>{for(var a=n>1?void 0:n?ne(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(a=(n?i(t,s,a):i(a))||a);return n&&a&&ae(t,s,a),a},L=(e,t,s)=>t.has(e)||k("Cannot "+s),re=(e,t,s)=>(L(e,t,"read from private field"),s?s.call(e):t.get(e)),w=(e,t,s)=>t.has(e)?k("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m=(e,t,s)=>(L(e,t,"access private method"),s),p,f,$,G;let r=class extends z(F(y)){constructor(){super(...arguments),w(this,p),this.open=!1,this.buttonLabel=x("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",w(this,$,()=>c`<gds-popover
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
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),C.instance.apply(this,"gds-context-menu"),m(this,p,f).call(this),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(e.preventDefault(),this.open=!1,this.elTriggerBtn.then(t=>t.focus()))})}render(){return c`<gds-button
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
                @slotchange=${m(this,p,f)}
              ></slot
              >${this.buttonLabel}`:c`<slot
              name="icon"
              @slotchange=${m(this,p,f)}
            ></slot>`}
      </gds-button>
      ${D(this.open,re(this,$))}`}};p=new WeakSet;f=function(){this.elIconSlot.then(e=>{if(!e.assignedNodes({flatten:!0}).some(t=>t instanceof Element&&t.tagName.toLowerCase().startsWith("gds-icon"))){const t=document.createElement(I("gds-icon-dot-grid-one-horizontal"));e.appendChild(t),this.requestUpdate()}})};$=new WeakMap;G=function(){this.open=!1};r.styles=[R];r.shadowRootOptions={mode:"open",delegatesFocus:!0};l([u({type:Boolean,reflect:!0})],r.prototype,"open",2);l([u({attribute:"button-label"})],r.prototype,"buttonLabel",2);l([u({attribute:"show-label",type:Boolean})],r.prototype,"showLabel",2);l([u()],r.prototype,"label",2);l([u()],r.prototype,"placement",2);l([O("#trigger")],r.prototype,"elTriggerBtn",2);l([O('slot[name="icon"]')],r.prototype,"elIconSlot",2);r=l([b("gds-context-menu",{dependsOn:[d,_,K,q,H]}),T()],r);r.define();d.define();

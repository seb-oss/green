import{m as A,l as T}from"./runtime-CNluP0A8.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{a as D}from"./query-p8xgzTDt.js";import{n as S}from"./when-BR7zwNJC.js";import{h,g as C,G as k}from"./gds-element-DTROifYq.js";import{T as O}from"./transitional-styles-UDysEBZS.js";import{s as W,F as z,L as B,u as I}from"./unwrap-slots-CdkSbl-V.js";import{n as R,e as F}from"./ref-R0wBYijq.js";import{t as N}from"./tokens.style-CQAfIFlK.js";import{w as q}from"./watch-tFciLXSI.js";import{b as H,d as U}from"./declarative-layout-mixins-C4FFYA_h.js";import{G as K}from"./button.component-D-n6FD2-.js";import{I as J}from"./dot-grid-one-horizontal-BrjyvyG6.js";import{a as Q,G as V}from"./popover.component-D6JhbD8X.js";import"./menu-heading.component-Bqscp6sb.js";var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,L=e=>{throw TypeError(e)},Z=(e,t,s,a)=>{for(var r=a>1?void 0:a?Y(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&X(t,s,r),r},j=(e,t,s)=>t.has(e)||L("Cannot "+s),ee=(e,t,s)=>(j(e,t,"read from private field"),s?s.call(e):t.get(e)),te=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let m=class extends z(k){constructor(){super(...arguments),te(this,_,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",ee(this,_)),O.instance.apply(this,"gds-option")}render(){return h`<div class="item"><slot></slot></div>`}};_=new WeakMap;m.styles=[W];m=Z([C("gds-menu-item")],m);var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},ae=(e,t,s,a)=>{for(var r=a>1?void 0:a?re(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&se(t,s,r),r},ne=(e,t,s)=>t.has(e)||G("Cannot "+s),f=(e,t,s)=>(ne(e,t,"read from private field"),s?s.call(e):t.get(e)),oe=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),u;let b=class extends k{constructor(){super(),oe(this,u,F()),new B(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),O.instance.apply(this,"gds-listbox")}get navigableItems(){return f(this,u).value?I(f(this,u).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return h`<slot ${R(f(this,u))}></slot>`}};u=new WeakMap;b=ae([C("gds-menu",{dependsOn:[m]})],b);var ie=Object.defineProperty,le=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},d=(e,t,s,a)=>{for(var r=a>1?void 0:a?le(t,s):t,n=e.length-1,o;n>=0;n--)(o=e[n])&&(r=(a?o(t,s,r):o(r))||r);return a&&r&&ie(t,s,r),r},E=(e,t,s)=>t.has(e)||x("Cannot "+s),l=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),c=(e,t,s)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),P=(e,t,s,a)=>(E(e,t,"write to private field"),t.set(e,s),s),pe=(e,t,s)=>(E(e,t,"access private method"),s),p,w,g,y,$,M;let i=class extends H(U(k)){constructor(){super(...arguments),c(this,$),this.open=!1,this.buttonLabel=A("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",c(this,p),c(this,w,()=>{var t;l(this,p)||P(this,p,((t=this.shadowRoot)==null?void 0:t.querySelector("#trigger"))??void 0);const e=l(this,p);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",s=>{(s.key==="ArrowDown"||s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.open=!0)}),Q(e,this.open,"menu"))}),c(this,g,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&P(this,p,e),l(this,w).call(this)}),c(this,y,()=>h`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(l(this,p))}
      .anchorRef=${Promise.resolve(l(this,p))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${pe(this,$,M)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),O.instance.apply(this,"gds-context-menu"),this.updateComplete.then(l(this,g)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return h`<slot
        name="trigger"
        @slotchange=${l(this,g)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?h`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:h`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${S(this.open,l(this,y))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=l(this,p))==null?void 0:e.focus()})}};p=new WeakMap;w=new WeakMap;g=new WeakMap;y=new WeakMap;$=new WeakSet;M=function(){this.open=!1};i.styles=[N];i.shadowRootOptions={mode:"open",delegatesFocus:!0};d([v({type:Boolean,reflect:!0})],i.prototype,"open",2);d([v({attribute:"button-label"})],i.prototype,"buttonLabel",2);d([v({attribute:"show-label",type:Boolean})],i.prototype,"showLabel",2);d([v()],i.prototype,"label",2);d([v()],i.prototype,"placement",2);d([D('slot[name="trigger"]')],i.prototype,"_elTriggerSlot",2);d([q("open",{waitUntilFirstUpdate:!0})],i.prototype,"_handleOpenChange",1);i=d([C("gds-context-menu",{dependsOn:[m,b,V,K,J]}),T()],i);export{m as G,i as a};

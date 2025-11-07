import{m as A,l as T}from"./runtime-CNluP0A8.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{a as D}from"./query-p8xgzTDt.js";import{n as S}from"./when-BR7zwNJC.js";import{h,g as C,G as k}from"./gds-element-DTROifYq.js";import{n as W,e as z}from"./ref-R0wBYijq.js";import{T as O}from"./transitional-styles-s5w4Hoty.js";import{s as B,F as I,L as R,u as F}from"./unwrap-slots-CdkSbl-V.js";import{t as N}from"./tokens.style-DeseHqaM.js";import{w as q}from"./watch-tFciLXSI.js";import{b as H,d as U}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as K}from"./button.component-CX-UD_CF.js";import{I as J}from"./dot-grid-one-horizontal-BGVmcfK4.js";import{a as Q,G as V}from"./popover.component-Cia4H2Cs.js";import"./menu-heading-k_FiOrbs.js";var X=Object.defineProperty,Y=Object.getOwnPropertyDescriptor,L=e=>{throw TypeError(e)},Z=(e,t,s,a)=>{for(var r=a>1?void 0:a?Y(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(t,s,r):i(r))||r);return a&&r&&X(t,s,r),r},j=(e,t,s)=>t.has(e)||L("Cannot "+s),ee=(e,t,s)=>(j(e,t,"read from private field"),s?s.call(e):t.get(e)),te=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let c=class extends I(k){constructor(){super(...arguments),te(this,_,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",ee(this,_)),O.instance.apply(this,"gds-option")}render(){return h`<div class="item"><slot></slot></div>`}};_=new WeakMap;c.styles=[B];c=Z([C("gds-menu-item")],c);var se=Object.defineProperty,re=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},ae=(e,t,s,a)=>{for(var r=a>1?void 0:a?re(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(t,s,r):i(r))||r);return a&&r&&se(t,s,r),r},ne=(e,t,s)=>t.has(e)||G("Cannot "+s),g=(e,t,s)=>(ne(e,t,"read from private field"),s?s.call(e):t.get(e)),oe=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m;let b=class extends k{constructor(){super(),oe(this,m,z()),new R(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),O.instance.apply(this,"gds-listbox")}get navigableItems(){return g(this,m).value?F(g(this,m).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return h`<slot ${W(g(this,m))}></slot>`}};m=new WeakMap;b=ae([C("gds-menu",{dependsOn:[c]})],b);var ie=Object.defineProperty,le=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},d=(e,t,s,a)=>{for(var r=a>1?void 0:a?le(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(a?i(t,s,r):i(r))||r);return a&&r&&ie(t,s,r),r},E=(e,t,s)=>t.has(e)||M("Cannot "+s),l=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),P=(e,t,s,a)=>(E(e,t,"write to private field"),t.set(e,s),s),pe=(e,t,s)=>(E(e,t,"access private method"),s),p,w,f,y,$,x;let n=class extends H(U(k)){constructor(){super(...arguments),u(this,$),this.open=!1,this.buttonLabel=A("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",u(this,p),u(this,w,()=>{var t;l(this,p)||P(this,p,((t=this.shadowRoot)==null?void 0:t.querySelector("#trigger"))??void 0);const e=l(this,p);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",s=>{(s.key==="ArrowDown"||s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.open=!0)}),Q(e,this.open,"menu"))}),u(this,f,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&P(this,p,e),l(this,w).call(this)}),u(this,y,()=>h`<gds-popover
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
        @gds-menu-item-click=${pe(this,$,x)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),O.instance.apply(this,"gds-context-menu"),this.updateComplete.then(l(this,f)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return h`<slot
        name="trigger"
        @slotchange=${l(this,f)}
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
      ${S(this.open,l(this,y))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=l(this,p))==null?void 0:e.focus()})}};p=new WeakMap;w=new WeakMap;f=new WeakMap;y=new WeakMap;$=new WeakSet;x=function(){this.open=!1};n.styles=[N];n.shadowRootOptions={mode:"open",delegatesFocus:!0};d([v({type:Boolean,reflect:!0})],n.prototype,"open",2);d([v({attribute:"button-label"})],n.prototype,"buttonLabel",2);d([v({attribute:"show-label",type:Boolean})],n.prototype,"showLabel",2);d([v()],n.prototype,"label",2);d([v()],n.prototype,"placement",2);d([D('slot[name="trigger"]')],n.prototype,"_elTriggerSlot",2);d([q("open",{waitUntilFirstUpdate:!0})],n.prototype,"_handleOpenChange",1);n=d([C("gds-context-menu",{dependsOn:[c,b,V,K,J]}),T()],n);n.define();c.define();

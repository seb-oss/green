import{m as D,l as T}from"./runtime-CNluP0A8.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{a as A}from"./query-p8xgzTDt.js";import{n as S}from"./when-BR7zwNJC.js";import{h,g as C,G as k}from"./gds-element-DTROifYq.js";import{n as W,e as z}from"./ref-R0wBYijq.js";import{T as O}from"./transitional-styles-C-VAQSys.js";import{s as B,F as I,L as R,u as F}from"./unwrap-slots-CufDiWNZ.js";import{t as N}from"./tokens.style-BcVhf7GG.js";import{w as q}from"./watch-tFciLXSI.js";import{b as H,d as U}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as K}from"./button.component-CymCYp3R.js";import{I as J}from"./dot-grid-one-horizontal-CKehN2fu.js";import{G as Q}from"./popover.component-D-f0JXvk.js";import"./menu-heading-zPFZ9WN9.js";var V=Object.defineProperty,X=Object.getOwnPropertyDescriptor,L=e=>{throw TypeError(e)},Y=(e,t,s,n)=>{for(var r=n>1?void 0:n?X(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(n?i(t,s,r):i(r))||r);return n&&r&&V(t,s,r),r},Z=(e,t,s)=>t.has(e)||L("Cannot "+s),j=(e,t,s)=>(Z(e,t,"read from private field"),s?s.call(e):t.get(e)),ee=(e,t,s)=>t.has(e)?L("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),_;let c=class extends I(k){constructor(){super(...arguments),ee(this,_,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",j(this,_)),O.instance.apply(this,"gds-option")}render(){return h`<div class="item"><slot></slot></div>`}};_=new WeakMap;c.styles=[B];c=Y([C("gds-menu-item")],c);var te=Object.defineProperty,se=Object.getOwnPropertyDescriptor,G=e=>{throw TypeError(e)},re=(e,t,s,n)=>{for(var r=n>1?void 0:n?se(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(n?i(t,s,r):i(r))||r);return n&&r&&te(t,s,r),r},ne=(e,t,s)=>t.has(e)||G("Cannot "+s),g=(e,t,s)=>(ne(e,t,"read from private field"),s?s.call(e):t.get(e)),ae=(e,t,s)=>t.has(e)?G("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),m;let w=class extends k{constructor(){super(),ae(this,m,z()),new R(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),O.instance.apply(this,"gds-listbox")}get navigableItems(){return g(this,m).value?F(g(this,m).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return h`<slot ${W(g(this,m))}></slot>`}};m=new WeakMap;w=re([C("gds-menu",{dependsOn:[c]})],w);var oe=Object.defineProperty,ie=Object.getOwnPropertyDescriptor,M=e=>{throw TypeError(e)},d=(e,t,s,n)=>{for(var r=n>1?void 0:n?ie(t,s):t,o=e.length-1,i;o>=0;o--)(i=e[o])&&(r=(n?i(t,s,r):i(r))||r);return n&&r&&oe(t,s,r),r},E=(e,t,s)=>t.has(e)||M("Cannot "+s),l=(e,t,s)=>(E(e,t,"read from private field"),s?s.call(e):t.get(e)),u=(e,t,s)=>t.has(e)?M("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),P=(e,t,s,n)=>(E(e,t,"write to private field"),t.set(e,s),s),le=(e,t,s)=>(E(e,t,"access private method"),s),p,b,f,y,$,x;let a=class extends H(U(k)){constructor(){super(...arguments),u(this,$),this.open=!1,this.buttonLabel=D("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",u(this,p),u(this,b,()=>{var t;l(this,p)||P(this,p,((t=this.shadowRoot)==null?void 0:t.querySelector("#trigger"))??void 0);const e=l(this,p);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",s=>{(s.key==="ArrowDown"||s.key==="Enter"||s.key===" ")&&(s.preventDefault(),this.open=!0)}))}),u(this,f,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(t=>t instanceof HTMLElement);e&&P(this,p,e),l(this,b).call(this)}),u(this,y,()=>h`<gds-popover
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
        @gds-menu-item-click=${le(this,$,x)}
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
      ${S(this.open,l(this,y))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=l(this,p))==null?void 0:e.focus()})}};p=new WeakMap;b=new WeakMap;f=new WeakMap;y=new WeakMap;$=new WeakSet;x=function(){this.open=!1};a.styles=[N];a.shadowRootOptions={mode:"open",delegatesFocus:!0};d([v({type:Boolean,reflect:!0})],a.prototype,"open",2);d([v({attribute:"button-label"})],a.prototype,"buttonLabel",2);d([v({attribute:"show-label",type:Boolean})],a.prototype,"showLabel",2);d([v()],a.prototype,"label",2);d([v()],a.prototype,"placement",2);d([A('slot[name="trigger"]')],a.prototype,"_elTriggerSlot",2);d([q("open",{waitUntilFirstUpdate:!0})],a.prototype,"_handleOpenChange",1);a=d([C("gds-context-menu",{dependsOn:[c,w,Q,K,J]}),T()],a);a.define();c.define();

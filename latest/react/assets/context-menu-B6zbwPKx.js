import{R as _}from"./iframe-82Rx1u5H.js";import{o as w}from"./create-component-CPRSibq9.js";import{b as a,d as t,h as i,G as h,_ as n,g,i as E,l as G,e as $,c as A,t as T,n as c,a as M}from"./gds-element-EmizKElO.js";import{m as I,l as S}from"./runtime-nRyYmvPb.js";import{e as O,w as R}from"./watch-Bh1rs_BK.js";import{n as N}from"./when-BR7zwNJC.js";import{F as W,o as z,L as B,u as P}from"./unwrap-slots-oQR_DihP.js";import{T as b,r as D}from"./transitional-styles-Bg7A93fM.js";import{e as F,n as H}from"./ref-CUirhiHu.js";import{b as U,d as q}from"./icon.component-YocLzsoq.js";import{G as K}from"./button.component-DRY2iMeD.js";import{I as x}from"./dot-grid-one-horizontal.component-coWD4qIG.js";import{a as j,G as J}from"./popover.component-BOfOBena.js";var f;let r=class extends W(h){constructor(){super(...arguments),a(this,f,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",t(this,f)),b.instance.apply(this,"gds-option")}render(){return i`<div class="item"><slot></slot></div>`}};f=new WeakMap;r.styles=[z];r=n([g("gds-menu-item")],r);var l;let y=class extends h{constructor(){super(),a(this,l,F()),new B(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),b.instance.apply(this,"gds-listbox")}get navigableItems(){return t(this,l).value?P(t(this,l).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return i`<slot ${H(t(this,l))}></slot>`}};l=new WeakMap;y=n([g("gds-menu",{dependsOn:[r]})],y);x.define();const Q=E`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: var(--gds-sys-color-l2-neutral-01);
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-detail-s-book);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;var V=Q;let d=class extends h{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>b.instance.apply(this,"gds-menu-heading"))}render(){return G`<slot></slot>`}};d.styles=V;d=n([g("gds-menu-heading")],d);var o,k,m,v,C,L;let s=class extends U(q(h)){constructor(){super(...arguments),a(this,C),this.open=!1,this.buttonLabel=I("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",a(this,o,void 0),a(this,k,()=>{var p;t(this,o)||$(this,o,((p=this.shadowRoot)==null?void 0:p.querySelector("#trigger"))??void 0);const e=t(this,o);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",u=>{(u.key==="ArrowDown"||u.key==="Enter"||u.key===" ")&&(u.preventDefault(),this.open=!0)}),j(e,this.open,"menu"))}),a(this,m,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(p=>p instanceof HTMLElement);e&&$(this,o,e),t(this,k).call(this)}),a(this,v,()=>i`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(t(this,o))}
      .anchorRef=${Promise.resolve(t(this,o))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${A(this,C,L)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),b.instance.apply(this,"gds-context-menu"),this.updateComplete.then(t(this,m)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return i`<slot
        name="trigger"
        @slotchange=${t(this,m)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?i`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:i`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${N(this.open,t(this,v))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=t(this,o))==null?void 0:e.focus()})}};o=new WeakMap;k=new WeakMap;m=new WeakMap;v=new WeakMap;C=new WeakSet;L=function(){this.open=!1};s.styles=[T];s.shadowRootOptions={mode:"open",delegatesFocus:!0};n([c({type:Boolean,reflect:!0})],s.prototype,"open",2);n([c({attribute:"button-label"})],s.prototype,"buttonLabel",2);n([c({attribute:"show-label",type:Boolean})],s.prototype,"showLabel",2);n([c()],s.prototype,"label",2);n([c()],s.prototype,"placement",2);n([O('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);n([R("open",{waitUntilFirstUpdate:!0})],s.prototype,"_handleOpenChange",1);s=n([g("gds-context-menu",{dependsOn:[r,y,J,K,x]}),S()],s);s.define();d.define();D();const ce=w({tagName:M("gds-context-menu"),elementClass:s,events:{onMenuItemClick:"gds-menu-item-click",onUiStateChange:"gds-ui-state"},react:_}),pe=w({tagName:M("gds-menu-item"),elementClass:r,events:{onMenuItemClick:"gds-menu-item-click"},react:_}),ue=w({tagName:M("gds-menu-heading"),elementClass:d,react:_});export{ce as C,pe as M,ue as a};

import{R as _}from"./iframe-BDaA0b86.js";import{o as x}from"./create-component-CPRSibq9.js";import{b as o,d as t,h as i,G as g,_ as n,g as m,i as L,l as A,e as $,c as T,t as H,n as l,a as M}from"./tokens.style-BMM60aNn.js";import{m as I,l as S}from"./runtime-nRyYmvPb.js";import{e as B,w as N,a as O}from"./watch-2OEWzoh-.js";import{n as R}from"./when-BR7zwNJC.js";import{F as W,o as z,L as F,u as P}from"./unwrap-slots-Bgzpn9C-.js";import{T as b,r as D}from"./transitional-styles-BJxT6KdA.js";import{e as U,n as q}from"./ref-C1eGPhNJ.js";import{b as K,d as j}from"./icon.component-B-OY17om.js";import{G as J}from"./button.component-DNH_punI.js";import{I as E}from"./dot-grid-one-horizontal.component-DXpxMcUY.js";import{a as Q,G as V}from"./popover.component-Dy9b5Bzu.js";var f;let r=class extends W(g){constructor(){super(...arguments),o(this,f,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",t(this,f)),b.instance.apply(this,"gds-option")}render(){return i`<div class="item"><slot></slot></div>`}};f=new WeakMap;r.styles=[z];r=n([m("gds-menu-item")],r);var d;let y=class extends g{constructor(){super(),o(this,d,U()),new F(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),b.instance.apply(this,"gds-listbox")}get navigableItems(){return t(this,d).value?P(t(this,d).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return i`<slot ${q(t(this,d))}></slot>`}};d=new WeakMap;y=n([m("gds-menu",{dependsOn:[r]})],y);E.define();const X=L`
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
`;var Y=X;let c=class extends g{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>b.instance.apply(this,"gds-menu-heading"))}render(){return A`<slot></slot>`}};c.styles=Y;c=n([m("gds-menu-heading")],c);var a,k,p,v,C,G,w;let s=class extends K(j(g)){constructor(){super(...arguments),o(this,C),this.open=!1,this.buttonLabel=I("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",o(this,a,void 0),o(this,k,()=>{var u;t(this,a)||$(this,a,((u=this.shadowRoot)==null?void 0:u.querySelector("#trigger"))??void 0);const e=t(this,a);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",h=>{(h.key==="ArrowDown"||h.key==="Enter"||h.key===" ")&&(h.preventDefault(),this.open=!0)}),Q(e,this.open,"menu"))}),o(this,p,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(u=>u instanceof HTMLElement);e&&$(this,a,e),t(this,k).call(this)}),o(this,v,()=>i`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(t(this,a))}
      .anchorRef=${Promise.resolve(t(this,a))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${t(this,w)}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${T(this,C,G)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),o(this,w,()=>`${Math.min(window.innerHeight,this.maxHeight)-16}px`)}connectedCallback(){super.connectedCallback(),b.instance.apply(this,"gds-context-menu"),this.updateComplete.then(t(this,p)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return i`<slot
        name="trigger"
        @slotchange=${t(this,p)}
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
      ${R(this.open,t(this,v))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=t(this,a))==null?void 0:e.focus()})}};a=new WeakMap;k=new WeakMap;p=new WeakMap;v=new WeakMap;C=new WeakSet;G=function(){this.open=!1};w=new WeakMap;s.styles=[H,L`
      .menu {
        overflow: auto;
      }
    `];s.shadowRootOptions={mode:"open",delegatesFocus:!0};n([l({type:Boolean,reflect:!0})],s.prototype,"open",2);n([l({attribute:"button-label"})],s.prototype,"buttonLabel",2);n([l({attribute:"show-label",type:Boolean})],s.prototype,"showLabel",2);n([l()],s.prototype,"label",2);n([l({type:Number,attribute:"max-height"})],s.prototype,"maxHeight",2);n([l()],s.prototype,"placement",2);n([B('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);n([N("open",{waitUntilFirstUpdate:!0})],s.prototype,"_handleOpenChange",1);s=n([m("gds-context-menu",{dependsOn:[r,y,V,J,E]}),O({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),S()],s);s.define();c.define();D();const he=x({tagName:M("gds-context-menu"),elementClass:s,events:{onMenuItemClick:"gds-menu-item-click",onUiStateChange:"gds-ui-state"},react:_}),pe=x({tagName:M("gds-menu-item"),elementClass:r,events:{onMenuItemClick:"gds-menu-item-click"},react:_}),ge=x({tagName:M("gds-menu-heading"),elementClass:c,react:_});export{he as C,pe as M,ge as a};

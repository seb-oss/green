import{e as w}from"./iframe-DdYfK44g.js";import{o as _}from"./create-component-CVDMTe9T.js";import{b as o,d as t,h as r,G as p,_ as n,g,i as $,x as G,k as A,m as T,e as M,c as H,t as I,n as d,a as x}from"./declarative-layout-mixins-DsnZ6DlD.js";import{m as S,l as B}from"./runtime-Cgryh99k.js";import{e as N,w as O,a as W}from"./watch-QkQzTQuG.js";import{n as z}from"./when-CI7b_ccM.js";import{F,o as P,L as R,u as D}from"./unwrap-slots-DhVSfgWw.js";import{T as m,r as U}from"./transitional-styles-CTHhaKMu.js";import{e as q,n as K}from"./ref-CCwSWoEw.js";import{G as j}from"./button.component-fE6F2GrL.js";import{I as L}from"./dot-grid-one-horizontal.component-CCO2-rMY.js";import{a as J,G as Q}from"./popover.component-Bhk_b8WT.js";var b;let l=class extends F(p){constructor(){super(...arguments),o(this,b,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",t(this,b)),m.instance.apply(this,"gds-option")}render(){return r`<div class="item"><slot></slot></div>`}};b=new WeakMap;l.styles=[P];l=n([g("gds-menu-item")],l);var c;let f=class extends p{constructor(){super(),o(this,c,q()),new R(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),m.instance.apply(this,"gds-listbox")}get navigableItems(){return t(this,c).value?D(t(this,c).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return r`<slot ${K(t(this,c))}></slot>`}};c=new WeakMap;f=n([g("gds-menu",{dependsOn:[l]})],f);L.define();const V=$`
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
`;var X=V;let u=class extends p{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>m.instance.apply(this,"gds-menu-heading"))}render(){return G`<slot></slot>`}};u.styles=X;u=n([g("gds-menu-heading")],u);var a,y,h,k,v,E,C;let s=class extends A(T(p)){constructor(){super(...arguments),o(this,v),this.open=!1,this.buttonLabel=S("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",o(this,a,void 0),o(this,y,()=>{t(this,a)||M(this,a,this.shadowRoot?.querySelector("#trigger")??void 0);const e=t(this,a);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",i=>{(i.key==="ArrowDown"||i.key==="Enter"||i.key===" ")&&(i.preventDefault(),this.open=!0)}),J(e,this.open,"menu"))}),o(this,h,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(i=>i instanceof HTMLElement);e&&M(this,a,e),t(this,y).call(this)}),o(this,k,()=>r`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(t(this,a))}
      .anchorRef=${Promise.resolve(t(this,a))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${t(this,C)}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${H(this,v,E)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),o(this,C,()=>`${Math.min(window.innerHeight,this.maxHeight)-16}px`)}connectedCallback(){super.connectedCallback(),m.instance.apply(this,"gds-context-menu"),this.updateComplete.then(t(this,h)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return r`<slot
        name="trigger"
        @slotchange=${t(this,h)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?r`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:r`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${z(this.open,t(this,k))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>t(this,a)?.focus())}};a=new WeakMap;y=new WeakMap;h=new WeakMap;k=new WeakMap;v=new WeakSet;E=function(){this.open=!1};C=new WeakMap;s.styles=[I,$`
      .menu {
        overflow: auto;
      }
    `];s.shadowRootOptions={mode:"open",delegatesFocus:!0};n([d({type:Boolean,reflect:!0})],s.prototype,"open",2);n([d({attribute:"button-label"})],s.prototype,"buttonLabel",2);n([d({attribute:"show-label",type:Boolean})],s.prototype,"showLabel",2);n([d()],s.prototype,"label",2);n([d({type:Number,attribute:"max-height"})],s.prototype,"maxHeight",2);n([d()],s.prototype,"placement",2);n([N('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);n([O("open",{waitUntilFirstUpdate:!0})],s.prototype,"_handleOpenChange",1);s=n([g("gds-context-menu",{dependsOn:[l,f,Q,j,L]}),W({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),B()],s);s.define();u.define();U();const ce=_({tagName:x("gds-context-menu"),elementClass:s,events:{onMenuItemClick:"gds-menu-item-click",onUiStateChange:"gds-ui-state"},react:w}),ue=_({tagName:x("gds-menu-item"),elementClass:l,events:{onMenuItemClick:"gds-menu-item-click"},react:w}),he=_({tagName:x("gds-menu-heading"),elementClass:u,react:w});export{ce as C,ue as M,he as a};

import{e as w}from"./iframe-Dm4IxEOf.js";import{o as C}from"./create-component-CVDMTe9T.js";import{b as i,c as t,h as r,G as m,_ as a,g as p,i as E,x as T,w as S,m as A,e as M,d as I,t as G,n as d,a as x}from"./declarative-layout-mixins-Dc4S7uGD.js";import{m as N,l as O}from"./runtime-Cgryh99k.js";import{e as H,w as B,a as W}from"./watch-rsnQmdjn.js";import{n as R}from"./when-CI7b_ccM.js";import{F as z,m as F,L as P,a as D}from"./menu-listbox.style-CG5hGZMj.js";import{T as g,M as U,r as q}from"./transitional-styles-B2QFLws8.js";import{e as K,n as Y}from"./ref-D0kgfidS.js";import{G as X}from"./button.component-BFZkXmeS.js";import{I as $}from"./dot-grid-one-horizontal.component-Bvdo9LN7.js";import{a as j,G as J}from"./popover.component-CJgyxz_d.js";var b;let l=class extends z(m){constructor(){super(...arguments),i(this,b,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",t(this,b)),g.instance.apply(this,"gds-option")}render(){return r`<div class="item"><slot></slot></div>`}};b=new WeakMap;l.styles=[F];l=a([p("gds-menu-item")],l);function Q(e){let n=e;for(;n.assignedElements().length>0&&n.assignedElements()[0].nodeName==="SLOT";)n=n.assignedElements()[0];return n}var c;let f=class extends m{constructor(){super(),i(this,c,K()),new P(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),g.instance.apply(this,U)}get navigableItems(){return t(this,c).value?Q(t(this,c).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return r`<slot ${Y(t(this,c))}></slot>`}};c=new WeakMap;f=a([p("gds-menu",{dependsOn:[l]})],f);$.define();const V=E`
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
`;var Z=V;let u=class extends m{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>g.instance.apply(this,"gds-menu-heading"))}render(){return T`<slot></slot>`}};u.styles=Z;u=a([p("gds-menu-heading")],u);var o,y,h,k,v,L,_;let s=class extends S(A(m)){constructor(){super(...arguments),i(this,v),this.open=!1,this.buttonLabel=N("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",i(this,o,void 0),i(this,y,()=>{t(this,o)||M(this,o,this.shadowRoot?.querySelector("#trigger")??void 0);const e=t(this,o);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",n=>{(n.key==="ArrowDown"||n.key==="Enter"||n.key===" ")&&(n.preventDefault(),this.open=!0)}),j(e,this.open,"menu"))}),i(this,h,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(n=>n instanceof HTMLElement);e&&M(this,o,e),t(this,y).call(this)}),i(this,k,()=>r`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(t(this,o))}
      .anchorRef=${Promise.resolve(t(this,o))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${t(this,_)}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu-listbox"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${I(this,v,L)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),i(this,_,()=>`${Math.min(window.innerHeight,this.maxHeight)-16}px`)}connectedCallback(){super.connectedCallback(),g.instance.apply(this,"gds-context-menu"),this.updateComplete.then(t(this,h)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return r`<slot
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
      ${R(this.open,t(this,k))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>t(this,o)?.focus())}};o=new WeakMap;y=new WeakMap;h=new WeakMap;k=new WeakMap;v=new WeakSet;L=function(){this.open=!1};_=new WeakMap;s.styles=[G,D];s.shadowRootOptions={mode:"open",delegatesFocus:!0};a([d({type:Boolean,reflect:!0})],s.prototype,"open",2);a([d({attribute:"button-label"})],s.prototype,"buttonLabel",2);a([d({attribute:"show-label",type:Boolean})],s.prototype,"showLabel",2);a([d()],s.prototype,"label",2);a([d({type:Number,attribute:"max-height"})],s.prototype,"maxHeight",2);a([d()],s.prototype,"placement",2);a([H('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);a([B("open",{waitUntilFirstUpdate:!0})],s.prototype,"_handleOpenChange",1);s=a([p("gds-context-menu",{dependsOn:[l,f,J,X,$]}),W({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),O()],s);s.define();u.define();q();const he=C({tagName:x("gds-context-menu"),elementClass:s,events:{onMenuItemClick:"gds-menu-item-click",onUiStateChange:"gds-ui-state"},react:w}),me=C({tagName:x("gds-menu-item"),elementClass:l,events:{onMenuItemClick:"gds-menu-item-click"},react:w}),pe=C({tagName:x("gds-menu-heading"),elementClass:u,react:w});export{he as C,me as M,pe as a};

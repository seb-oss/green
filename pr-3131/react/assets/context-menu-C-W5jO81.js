import{e as w}from"./iframe-DMUA-wVy.js";import{o as C}from"./create-component-CVDMTe9T.js";import{b as i,c as s,h as l,G as m,_ as n,g as p,i as E,x as T,w as S,m as A,e as M,d as I,t as G,n as r,a as x}from"./declarative-layout-mixins-CBo1VPzG.js";import{m as N,l as O}from"./runtime-Cgryh99k.js";import{e as B,w as H,a as W}from"./watch-rsnQmdjn.js";import{n as R}from"./when-CI7b_ccM.js";import{F as z,m as F,L as P,a as D}from"./menu-listbox.style-BeyYQgFm.js";import{T as g,M as U,r as q}from"./transitional-styles-CrzPaHR6.js";import{e as K,n as Y}from"./ref-CuFhGBds.js";import{G as X}from"./button.component-BH6WLb5Z.js";import{I as $}from"./dot-grid-one-horizontal.component-BiG-1eAP.js";import{a as j,G as J}from"./popover.component-D6OtDKOe.js";var b;let d=class extends z(m){constructor(){super(...arguments),i(this,b,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",s(this,b)),g.instance.apply(this,"gds-option")}render(){return l`<div class="item"><slot></slot></div>`}};b=new WeakMap;d.styles=[F];d=n([p("gds-menu-item")],d);function Q(e){let a=e;for(;a.assignedElements().length>0&&a.assignedElements()[0].nodeName==="SLOT";)a=a.assignedElements()[0];return a}var c;let f=class extends m{constructor(){super(),i(this,c,K()),new P(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),g.instance.apply(this,U)}get navigableItems(){return s(this,c).value?Q(s(this,c).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){this.navigableItems[0]?.focus()}render(){return l`<slot ${Y(s(this,c))}></slot>`}};c=new WeakMap;f=n([p("gds-menu",{dependsOn:[d]})],f);$.define();const V=E`
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
`;var Z=V;let h=class extends m{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>g.instance.apply(this,"gds-menu-heading"))}render(){return T`<slot></slot>`}};h.styles=Z;h=n([p("gds-menu-heading")],h);var o,y,u,k,v,L,_;let t=class extends S(A(m)){constructor(){super(...arguments),i(this,v),this.open=!1,this.buttonLabel=N("Open context menu"),this.showLabel=!1,this.label="",this.maxHeight=500,this.placement="bottom-start",this.nonmodal=!1,i(this,o,void 0),i(this,y,()=>{s(this,o)||M(this,o,this.shadowRoot?.querySelector("#trigger")??void 0);const e=s(this,o);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",a=>{(a.key==="ArrowDown"||a.key==="Enter"||a.key===" ")&&(a.preventDefault(),this.open=!0)}),j(e,this.open,"menu"))}),i(this,u,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(a=>a instanceof HTMLElement);e&&M(this,o,e),s(this,y).call(this)}),i(this,k,()=>l`<gds-popover
      id="menu"
      autofocus
      .open=${this.open}
      .triggerRef=${Promise.resolve(s(this,o))}
      .anchorRef=${Promise.resolve(s(this,o))}
      .label=${this.label}
      .placement=${this.placement}
      .popupRole=${"menu"}
      .calcMaxHeight=${s(this,_)}
      .nonmodal=${this.nonmodal}
      @gds-ui-state=${e=>this.open=e.detail.open}
    >
      <gds-menu
        class="menu-listbox"
        aria-label=${this.label??this.buttonLabel}
        @gds-menu-item-click=${I(this,v,L)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`),i(this,_,()=>`${Math.min(window.innerHeight,this.maxHeight)-16}px`)}connectedCallback(){super.connectedCallback(),g.instance.apply(this,"gds-context-menu"),this.updateComplete.then(s(this,u)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return l`<slot
        name="trigger"
        @slotchange=${s(this,u)}
        ><gds-button
          .rank=${"secondary"}
          id="trigger"
          label=${this.buttonLabel}
        >
          ${this.showLabel?l`<slot name="icon" slot="lead"
                  ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal></slot
                >${this.buttonLabel}`:l`<slot name="icon"
                ><gds-icon-dot-grid-one-horizontal></gds-icon-dot-grid-one-horizontal
              ></slot>`}
        </gds-button>
      </slot>
      ${R(this.open,s(this,k))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>s(this,o)?.focus())}};o=new WeakMap;y=new WeakMap;u=new WeakMap;k=new WeakMap;v=new WeakSet;L=function(){this.open=!1};_=new WeakMap;t.styles=[G,D];t.shadowRootOptions={mode:"open",delegatesFocus:!0};n([r({type:Boolean,reflect:!0})],t.prototype,"open",2);n([r({attribute:"button-label"})],t.prototype,"buttonLabel",2);n([r({attribute:"show-label",type:Boolean})],t.prototype,"showLabel",2);n([r()],t.prototype,"label",2);n([r({type:Number,attribute:"max-height"})],t.prototype,"maxHeight",2);n([r()],t.prototype,"placement",2);n([r({type:Boolean,reflect:!0})],t.prototype,"nonmodal",2);n([B('slot[name="trigger"]')],t.prototype,"_elTriggerSlot",2);n([H("open",{waitUntilFirstUpdate:!0})],t.prototype,"_handleOpenChange",1);t=n([p("gds-context-menu",{dependsOn:[d,f,J,X,$]}),W({labelledBy:"#trigger",describedBy:"#trigger",controls:"#trigger"}),O()],t);t.define();h.define();q();const ue=C({tagName:x("gds-context-menu"),elementClass:t,events:{onMenuItemClick:"gds-menu-item-click",onUiStateChange:"gds-ui-state"},react:w}),me=C({tagName:x("gds-menu-item"),elementClass:d,events:{onMenuItemClick:"gds-menu-item-click"},react:w}),pe=C({tagName:x("gds-menu-heading"),elementClass:h,react:w});export{ue as C,me as M,pe as a};

import{b as a,d as t,h as r,G as h,_ as n,g,i as x,x as L,e as w,c as G,t as M,n as d}from"./tokens.style-BORDEglN.js";import{T as m}from"./transitional-styles-B6dpIcV2.js";import{m as E,l as A}from"./runtime-nRyYmvPb.js";import{e as T,w as O}from"./watch-Bh1rs_BK.js";import{n as S}from"./when-BR7zwNJC.js";import{F as W,o as z,e as B,L as I,u as P,n as R}from"./unwrap-slots-Dru1Gr1q.js";import{b as D,a as F}from"./icon.component-CM5lwlbu.js";import{G as H}from"./button.component-Ddsmj2lA.js";import{I as C}from"./dot-grid-one-horizontal.component-DXoH5Jlo.js";import{a as N,G as q}from"./popover.component-CaqpzcP2.js";var b;let l=class extends W(h){constructor(){super(...arguments),a(this,b,()=>{this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menuitem"),this.addEventListener("keydown",e=>{e.key!=="Enter"&&e.key!==" "||(e.preventDefault(),this.click())}),this.addEventListener("click",t(this,b)),m.instance.apply(this,"gds-option")}render(){return r`<div class="item"><slot></slot></div>`}};b=new WeakMap;l.styles=[z];l=n([g("gds-menu-item")],l);var i;let f=class extends h{constructor(){super(),a(this,i,B()),new I(this)}connectedCallback(){super.connectedCallback(),this.setAttribute("role","menu"),m.instance.apply(this,"gds-listbox")}get navigableItems(){return t(this,i).value?P(t(this,i).value).assignedElements().filter(e=>!e.hasAttribute("isplaceholder")&&e.gdsElementName==="gds-menu-item")||[]:[]}focus(){var e;(e=this.navigableItems[0])==null||e.focus()}render(){return r`<slot ${R(t(this,i))}></slot>`}};i=new WeakMap;f=n([g("gds-menu",{dependsOn:[l]})],f);C.define();const U=x`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-content-neutral-02);
      background-color: var(--gds-sys-color-l2-neutral-01);
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-s);
      padding-block: var(--gds-sys-space-xs);
    }
  }
`;var K=U;let y=class extends h{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then(()=>m.instance.apply(this,"gds-menu-heading"))}render(){return L`<slot></slot>`}};y.styles=K;y=n([g("gds-menu-heading")],y);var o,v,c,k,_,$;let s=class extends D(F(h)){constructor(){super(...arguments),a(this,_),this.open=!1,this.buttonLabel=E("Open context menu"),this.showLabel=!1,this.label="",this.placement="bottom-start",a(this,o),a(this,v,()=>{var p;t(this,o)||w(this,o,((p=this.shadowRoot)==null?void 0:p.querySelector("#trigger"))??void 0);const e=t(this,o);e&&!e.hasAttribute("data-gds-context-menu-trigger")&&(e.setAttribute("data-gds-context-menu-trigger","true"),e.addEventListener("click",()=>{this.open=!this.open}),e.addEventListener("keydown",u=>{(u.key==="ArrowDown"||u.key==="Enter"||u.key===" ")&&(u.preventDefault(),this.open=!0)}),N(e,this.open,"menu"))}),a(this,c,()=>{const e=this._elTriggerSlot.assignedNodes({flatten:!0}).find(p=>p instanceof HTMLElement);e&&w(this,o,e),t(this,v).call(this)}),a(this,k,()=>r`<gds-popover
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
        @gds-menu-item-click=${G(this,_,$)}
      >
        <slot></slot>
      </gds-menu>
    </gds-popover>`)}connectedCallback(){super.connectedCallback(),m.instance.apply(this,"gds-context-menu"),this.updateComplete.then(t(this,c)),this.addEventListener("keydown",e=>{this.open&&e.key=="Tab"&&(this.open=!1,e.preventDefault())})}render(){return r`<slot
        name="trigger"
        @slotchange=${t(this,c)}
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
      ${S(this.open,t(this,k))}`}_handleOpenChange(){this.open||requestAnimationFrame(()=>{var e;return(e=t(this,o))==null?void 0:e.focus()})}};o=new WeakMap;v=new WeakMap;c=new WeakMap;k=new WeakMap;_=new WeakSet;$=function(){this.open=!1};s.styles=[M];s.shadowRootOptions={mode:"open",delegatesFocus:!0};n([d({type:Boolean,reflect:!0})],s.prototype,"open",2);n([d({attribute:"button-label"})],s.prototype,"buttonLabel",2);n([d({attribute:"show-label",type:Boolean})],s.prototype,"showLabel",2);n([d()],s.prototype,"label",2);n([d()],s.prototype,"placement",2);n([T('slot[name="trigger"]')],s.prototype,"_elTriggerSlot",2);n([O("open",{waitUntilFirstUpdate:!0})],s.prototype,"_handleOpenChange",1);s=n([g("gds-context-menu",{dependsOn:[l,f,q,H,C]}),A()],s);export{s as G,y as a,l as b};

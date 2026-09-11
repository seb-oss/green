"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4916],{2581(e,t,s){s.d(t,{r:()=>a});var i=s(6861),o=s(7526),r=s(3832);let a=class extends r.M{};a._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',a._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',a._name="cross-small",a._width=24,a._height=24,a._viewBox="0 0 24 24",a=(0,i.Cc)([(0,o.Y$)("gds-icon-cross-small")],a)},2144(e,t,s){s.d(t,{E:()=>P,B:()=>Z});var i,o,r,a,n,l,c,d,h,g,p,b,u,v,y,m,_,f,x,w,k=s(6861),C=s(6743),M=s(4367),S=s(3578),E=s(7956),V=s(3539),L=s(7526),A=s(4457),D=s(1374),W=s(8714),T=s(1239),z=s(2581),K=s(9443).AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host > div:not([hidden]) {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      visibility: visible;
    }

    dialog {
      display: flex;
      flex-direction: column;
      inset: auto;
      position: fixed;
      overflow: hidden;
      padding: 0px;
      box-sizing: border-box;
      right: 0;
      margin: 0;
      box-shadow: var(--gds-sys-shadow-l-01);
      border: var(--gds-sys-space-5xs) solid
        var(--gds-sys-color-border-neutral-02);
      border-radius: var(--gds-sys-radius-s);
      overscroll-behavior: contain;
    }

    :host([nonmodal]) dialog {
      z-index: 1;
    }

    @media (max-width: 576px) {
      dialog.use-modal-in-mobile {
        border-radius: var(--gds-sys-radius-m) var(--gds-sys-radius-m) 0 0;
        transition: transform var(--gds-sys-motion-duration-fastest) ease;
        min-width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;

        padding-bottom: 0;

        transform: translateY(0);
        @starting-style {
          transform: translateY(100%);
        }

        &::backdrop {
          background-color: rgba(0, 0, 0, 0.3);
          display: block;
          position: fixed;
          opacity: 1;
          transition: opacity var(--gds-sys-motion-duration-fast) ease;
          @starting-style {
            opacity: 0;
          }
        }
      }
    }

    @media (min-width: 577px) {
      header {
        display: none;
      }
    }

    header {
      display: none;
    }

    @media (min-width: 577px) {
      dialog:not(.has-backdrop)::backdrop {
        background-color: transparent;
        display: block;
        position: fixed;
      }
    }
  }
`;function R(e){const t=window.devicePixelRatio||1;return Math.round(e*t)/t}function Z(e,t,s){e.setAttribute("aria-expanded",String(t)),e.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(e.nodeName)||(e.setAttribute("tabindex","0"),e.setAttribute("role","button"));const i=e.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===e.getAttribute(i)&&e.setAttribute(i,s)}let P=class extends V.j{constructor(){super(...arguments),(0,k.VK)(this,i),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.disableScrollClose=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>window.innerHeight-16+"px",this.nonmodal=!1,this.floatingUIMiddleware=P.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,(0,k.VK)(this,r),(0,k.VK)(this,a,!1),(0,k.VK)(this,n),(0,k.VK)(this,l),(0,k.VK)(this,h,()=>{(0,k.S7)(this,g).call(this,"cancel")&&(this.open=!1)}),(0,k.VK)(this,g,e=>{const t="show"===e;return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})}),(0,k.VK)(this,p,e=>{e.stopPropagation(),e.preventDefault(),(0,k.S7)(this,g).call(this,"close")&&(this.open=!1,setTimeout(()=>this._trigger?.focus(),250))}),(0,k.VK)(this,m,e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,(0,k.S7)(this,g).call(this,"show")),"Escape"===e.key&&this.open&&(0,k.S7)(this,h).call(this)}),(0,k.VK)(this,_,e=>{e.preventDefault(),(0,k.S7)(this,g).call(this,this.open?"close":"show")&&(this.open=!this.open)}),(0,k.VK)(this,f,()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then(()=>{e?.focus()})}),(0,k.VK)(this,x,e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const e=s.getBoundingClientRect();!(e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width)&&(0,k.S7)(this,g).call(this,"close")&&(this.open=!1)}}),(0,k.VK)(this,w,()=>{this.open&&!this.disableScrollClose&&window.innerWidth>767&&(0,k.S7)(this,g).call(this,"close")&&(this.open=!1)})}_handleTriggerRefChanged(){this.triggerRef?.then(e=>{e&&(this._trigger=e)})}_handleAnchorRefChanged(){this.anchorRef?.then(e=>{e&&(this._anchor=e)})}_handleTriggerChanged(){(0,k.jq)(this,i,b).call(this),(0,k.jq)(this,i,v).call(this)}_handleAnchorChanged(){(0,k.jq)(this,i,y).call(this)}connectedCallback(){super.connectedCallback(),A.n.instance.apply(this,"gds-popover"),(0,k.jq)(this,i,b).call(this),this._handleOpenChange(),this.addEventListener("keydown",e=>{"Escape"===e.key&&this.open&&((0,k.S7)(this,h).call(this),e.stopPropagation(),e.preventDefault())}),this.addEventListener("focusin",e=>{const t=e.target;t!==this&&("INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)}),this.addEventListener("blurin",e=>{this._isVirtKbVisible=!1})}disconnectedCallback(){super.disconnectedCallback(),(0,k.jq)(this,i,u).call(this),(0,k.jq)(this,i,d).call(this),window.removeEventListener("scroll",(0,k.S7)(this,w))}render(){return L.qy`<slot
        name="trigger"
        @slotchange=${(0,k.jq)(this,i,o)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${(0,S.H)({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&(0,k.S7)(this,h).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${(0,k.S7)(this,p)}
              class="close"
              label="${(0,C.ab)("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){this.updateComplete.then(()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&((0,k.S7)(this,f).call(this),setTimeout(()=>(0,k.S7)(this,f).call(this),250)),requestAnimationFrame(()=>{(0,k.S7)(this,n)&&((0,k.S7)(this,n).show=!0)}),setTimeout(()=>(0,k.jq)(this,i,c).call(this),0),window.addEventListener("scroll",(0,k.S7)(this,w),{passive:!0})):(this._elDialog?.close(),(0,k.jq)(this,i,d).call(this),window.removeEventListener("scroll",(0,k.S7)(this,w)),(0,k.S7)(this,n)&&((0,k.S7)(this,n).show=!1))})}_handleBackdropChange(){const e=this.parentElement?.getRootNode();this.backdrop&&e&&(0,k.OV)(this,n,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;(0,k.OV)(this,a,e),e&&!this.disableMobileStyles?(null==(t=(0,k.S7)(this,r))||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("right"),this._elDialog?.style.removeProperty("bottom"),this._elDialog?.style.removeProperty("transform"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width")):this.updateComplete.then(()=>{(0,k.jq)(this,i,y).call(this)})}};i=new WeakSet,o=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},r=new WeakMap,a=new WeakMap,n=new WeakMap,l=new WeakMap,c=function(){this.open&&this.isConnected&&((0,k.jq)(this,i,d).call(this),(0,k.OV)(this,l,(this.nonmodal?(0,k.S7)(this,n):this._elDialog)||document),(0,k.S7)(this,l).addEventListener("click",(0,k.S7)(this,x)))},d=function(){(0,k.S7)(this,l)?.removeEventListener("click",(0,k.S7)(this,x)),(0,k.OV)(this,l,void 0)},h=new WeakMap,g=new WeakMap,p=new WeakMap,b=function(){this._trigger?.addEventListener("keydown",(0,k.S7)(this,m)),this._trigger?.addEventListener("click",(0,k.S7)(this,_))},u=function(){var e;this._trigger?.removeEventListener("keydown",(0,k.S7)(this,m)),this._trigger?.removeEventListener("click",(0,k.S7)(this,_)),null==(e=(0,k.S7)(this,r))||e.call(this)},v=function(){this._trigger&&Z(this._trigger,this.open,this.popupRole)},y=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;e&&t&&(!(0,k.S7)(this,a)||this.disableMobileStyles)&&((0,k.S7)(this,r)&&(0,k.S7)(this,r).call(this),(0,k.OV)(this,r,(0,E.ll)(e,t,()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),(0,E.rD)(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then(({x:e,y:s})=>Object.assign(t.style,{left:"0",top:"0",right:"auto",bottom:"auto",transform:`translate3d(${R(e)}px, ${R(s)}px, 0)`}))})))},m=new WeakMap,_=new WeakMap,f=new WeakMap,x=new WeakMap,w=new WeakMap,P.styles=K,P.DefaultMiddleware=[(0,E.cY)(8),(0,E.BN)({crossAxis:!0,padding:8})],(0,k.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],P.prototype,"open",2),(0,k.Cc)([(0,M.MZ)({attribute:"popup-role"})],P.prototype,"popupRole",2),(0,k.Cc)([(0,M.MZ)({attribute:!1})],P.prototype,"triggerRef",2),(0,k.Cc)([(0,M.MZ)({attribute:!1})],P.prototype,"anchorRef",2),(0,k.Cc)([(0,M.MZ)()],P.prototype,"label",2),(0,k.Cc)([(0,M.MZ)()],P.prototype,"placement",2),(0,k.Cc)([(0,M.MZ)({type:Boolean})],P.prototype,"disableMobileStyles",2),(0,k.Cc)([(0,M.MZ)({type:Boolean})],P.prototype,"disableScrollClose",2),(0,k.Cc)([(0,M.MZ)({type:Boolean})],P.prototype,"autofocus",2),(0,k.Cc)([(0,M.MZ)({attribute:!1})],P.prototype,"calcMinWidth",2),(0,k.Cc)([(0,M.MZ)({attribute:!1})],P.prototype,"calcMaxWidth",2),(0,k.Cc)([(0,M.MZ)({attribute:!1})],P.prototype,"calcMinHeight",2),(0,k.Cc)([(0,M.MZ)({attribute:!1})],P.prototype,"calcMaxHeight",2),(0,k.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],P.prototype,"nonmodal",2),(0,k.Cc)([(0,M.MZ)()],P.prototype,"backdrop",2),(0,k.Cc)([(0,M.MZ)({attribute:!1})],P.prototype,"floatingUIMiddleware",2),(0,k.Cc)([(0,M.wk)()],P.prototype,"_trigger",2),(0,k.Cc)([(0,M.wk)()],P.prototype,"_anchor",2),(0,k.Cc)([(0,M.wk)()],P.prototype,"_isVirtKbVisible",2),(0,k.Cc)([(0,M.P)("slot:not([name])")],P.prototype,"_elDefaultSlot",2),(0,k.Cc)([(0,M.P)('slot[name="trigger"]')],P.prototype,"_elTriggerSlot",2),(0,k.Cc)([(0,M.P)("dialog")],P.prototype,"_elDialog",2),(0,k.Cc)([(0,D.w)("triggerRef")],P.prototype,"_handleTriggerRefChanged",1),(0,k.Cc)([(0,D.w)("anchorRef")],P.prototype,"_handleAnchorRefChanged",1),(0,k.Cc)([(0,D.w)("_trigger")],P.prototype,"_handleTriggerChanged",1),(0,k.Cc)([(0,D.w)("_anchor")],P.prototype,"_handleAnchorChanged",1),(0,k.Cc)([(0,D.w)("open")],P.prototype,"_handleOpenChange",1),(0,k.Cc)([(0,D.w)("backdrop")],P.prototype,"_handleBackdropChange",1),(0,k.Cc)([(0,W.M)("(max-width: 576px)")],P.prototype,"_handleMobileLayout",1),P=(0,k.Cc)([(0,L.Y$)("gds-popover",{dependsOn:[z.r]}),(0,T.J)({labelledBy:"dialog",describedBy:"dialog"}),(0,C.cc)()],P)},4843(e,t,s){s.d(t,{A:()=>i}),s(6861);var i=s(9443).AH`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-neutral-02);
    }

    :host .item {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-s);
      cursor: pointer;
      font: var(--gds-sys-text-detail-m-regular);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-sys-space-3xs);
        position: absolute;
        border: var(--gds-sys-space-4xs) solid currentColor;
        border-radius: var(--gds-sys-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-neutral-06)
      );
      color: var(--gds-sys-color-content-neutral-01);
    }

    :host(:hover:not([highlighted])) .item {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-neutral-05)
      );
    }

    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible) div::before {
      inset: var(--gds-sys-space-3xs);
      opacity: 1;
      visivility: visible;
    }

    :host([inert]) {
      display: none;
    }
  }
`},3045(e,t,s){s.d(t,{A:()=>i}),s(6861);var i=s(9443).AH`
  @layer base, reset, transitional-styles;

  @layer base {
    .menu-listbox {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`},8146(e,t,s){s.d(t,{A:()=>i}),s(6861);var i=s(9443).AH`
  .rbcb {
    --_toggle-size: var(--gds-sys-space-m);
    --_toggle-radius: var(--gds-sys-space-3xs);
    --_perimeter-radius: var(--gds-sys-space-xs);
    --_toggle-border-width-checked: var(--gds-sys-space-s);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-03)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-04)
    );
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    margin-block-start: calc(var(--gds-sys-space-5xs) * 2);
    cursor: pointer;
    user-select: none;
  }

  .rbcb-wrapper .rbcb {
    margin-block-start: 0;
  }

  .rbcb--radio {
    --_toggle-radius: var(--gds-sys-space-max);
    --_perimeter-radius: var(--gds-sys-space-max);
    --_toggle-border-width-checked: var(--gds-sys-space-3xs);
  }

  .rbcb__toggle {
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    border-radius: var(--_toggle-radius);
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-border-neutral-01);
    background-color: var(--gds-sys-color-l1-neutral-01);
    box-sizing: border-box;
    transition-property: box-shadow, background-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    will-change: box-shadow;
    position: absolute;
    inset: 0;
    display: grid;
    place-items: center;
  }

  .rbcb__icon {
    line-height: 10px;
    grid-area: 1 / 1;
    transition-property: scale, opacity;
    transition-duration: 150ms;
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    will-change: scale, opacity;
    scale: 0.6;
    opacity: 0;
    color: var(--gds-sys-color-content-neutral-03);
  }

  .rbcb__icon--visible {
    scale: 1;
    opacity: 1;
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-4xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-content-neutral-01);
    border-radius: var(--_perimeter-radius);
    min-width: var(--_perimeter-size, var(--gds-sys-space-2xl));
    min-height: var(--_perimeter-size, var(--gds-sys-space-2xl));
    position: absolute;
    left: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-03);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-03);
  }

  .rbcb--radio.--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-border-negative-01);
  }

  .--disabled {
    cursor: default;
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-sys-color-l3-disabled-02);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-sys-color-l3-negative-02);
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
      var(--gds-sys-color-border-negative-01);
  }

  .rbcb--radio.--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-negative-01);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-sys-color-border-negative-01);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-state-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-sys-color-content-negative-01);
  }

  /* Visually hidden checkbox   */
  .visually-hidden-checkbox {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
  }

  .rbcb-wrapper {
    position: relative;
  }

  /*
   * When using the checkbox in a listbox, we need to remove the outline
   * from the checkbox since it exsist on the list item
   */
  :host([gds-element='gds-option']) .rbcb__perimeter {
    outline: none;
  }

  :host([gds-element='gds-radio']:focus-visible) .rbcb__perimeter,
  :host([gds-element='gds-checkbox']):has(.visually-hidden-checkbox:focus-visible)
    .rbcb__perimeter,
  .rbcb-wrapper:has(.visually-hidden-checkbox:focus-visible) .rbcb__perimeter {
    outline-width: var(--gds-sys-space-4xs);
    scale: 1;
  }

  @media (hover: hover) {
    :host([gds-element='gds-checkbox']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    :host([gds-element='gds-option']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    :host([gds-element='gds-radio']:hover)
      .rbcb:not(.--disabled)
      .rbcb__perimeter,
    .rbcb:hover:not(.--disabled) .rbcb__perimeter {
      background-color: var(--_perimeter-bg-mix);
      scale: 1;
    }
  }

  :host([gds-element='gds-checkbox']:active)
    .rbcb:not(.--disabled)
    .rbcb__perimeter,
  :host([gds-element='gds-radio']:active)
    .rbcb:not(.--disabled)
    .rbcb__perimeter,
  .rbcb:active:not(.--disabled) .rbcb__perimeter {
    background-color: var(--_perimeter-bg-mix-active);
    scale: 0.9;
  }

  @media (prefers-reduced-motion: reduce) {
    .rbcb__toggle,
    .rbcb__icon {
      transition: none;
    }
  }
`},5552(e,t,s){s.d(t,{y:()=>r});var i,o=s(6861);class r{constructor(e){(0,o.VK)(this,i,e=>{const t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){const e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){const e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{const t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){const e=this.host.navigableItems.find(e=>{const s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)});e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())}),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",(0,o.S7)(this,i))}hostDisconnected(){this.host.removeEventListener("keydown",(0,o.S7)(this,i))}}i=new WeakMap},8714(e,t,s){s.d(t,{M:()=>o}),s(6861);var i=s(8337);function o(e){return(t,s,o)=>{if(i.S)return;const r=window.matchMedia(e),a=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){a?.call(this);const e=e=>{o.value?.call(this,e.matches)};r.addEventListener("change",e),this.disconnectedCallback=function(){n?.call(this),r.removeEventListener("change",e)},o.value?.call(this,r.matches)}}}},4397(e,t,s){s(6861),s.d(t,["z",0,e=>class extends e{focus(e){this.setAttribute("tabindex","0"),super.focus(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:e.relatedTarget}))}),this.addEventListener("focus",e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:e.relatedTarget}))})}}])}}]);
//# sourceMappingURL=4916.cf5b5f30.iframe.bundle.js.map
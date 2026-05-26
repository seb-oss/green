"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[111],{22581(e,t,s){s.d(t,{r:()=>a});var i=s(30745),o=s(77526),r=s(13832);let a=class extends r.M{};a._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',a._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',a._name="cross-small",a._width=24,a._height=24,a._viewBox="0 0 24 24",a=(0,i.Cc)([(0,o.Y$)("gds-icon-cross-small")],a)},52144(e,t,s){s.d(t,{E:()=>B,B:()=>Z});var i,o,r,a,n,l,c,d,h,g,p,b,u,v,m,y,_,f,w,x,k,C=s(30745),S=s(16743),M=s(14367),E=s(3578),V=s(27956),L=s(93539),W=s(77526),A=s(64457),D=s(91374),T=s(68714),K=s(24338),z=s(22581),R=s(39443).AH`
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
`;function Z(e,t,s){e.setAttribute("aria-expanded",String(t)),e.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(e.nodeName)||(e.setAttribute("tabindex","0"),e.setAttribute("role","button"));const i=e.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===e.getAttribute(i)&&e.setAttribute(i,s)}let B=class extends L.j{constructor(){super(...arguments),(0,C.VK)(this,i),(0,C.VK)(this,h),(0,C.VK)(this,p),(0,C.VK)(this,u),(0,C.VK)(this,m),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.disableScrollClose=!1,this.autofocus=!1,this.calcMinWidth=e=>`${e.offsetWidth}px`,this.calcMaxWidth=e=>"auto",this.calcMinHeight=e=>"auto",this.calcMaxHeight=e=>window.innerHeight-16+"px",this.nonmodal=!1,this.floatingUIMiddleware=B.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,(0,C.VK)(this,r,void 0),(0,C.VK)(this,a,!1),(0,C.VK)(this,n,void 0),(0,C.VK)(this,l,(()=>{(0,C.S7)(this,c).call(this,"cancel")&&(this.open=!1)})),(0,C.VK)(this,c,(e=>{const t="show"===e;return this.dispatchCustomEvent("gds-ui-state",{detail:{open:t,reason:e},bubbles:!1,composed:!1,cancelable:!0})})),(0,C.VK)(this,d,(e=>{e.stopPropagation(),e.preventDefault(),(0,C.S7)(this,c).call(this,"close")&&(this.open=!1,setTimeout((()=>this._trigger?.focus()),250))})),(0,C.VK)(this,_,(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,(0,C.S7)(this,c).call(this,"show")),"Escape"===e.key&&this.open&&(0,C.S7)(this,l).call(this)})),(0,C.VK)(this,f,(e=>{e.preventDefault(),(0,C.S7)(this,c).call(this,this.open?"close":"show")&&(this.open=!this.open)})),(0,C.VK)(this,w,(()=>{const e=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then((()=>{e?.focus()}))})),(0,C.VK)(this,x,(e=>{const t=e,s=this._elDialog;if((t.clientX>0||t.clientY>0)&&s&&this.open){const e=s.getBoundingClientRect();!(e.top<=t.clientY&&t.clientY<=e.top+e.height&&e.left<=t.clientX&&t.clientX<=e.left+e.width)&&(0,C.S7)(this,c).call(this,"close")&&(this.open=!1)}})),(0,C.VK)(this,k,(()=>{this.open&&!this.disableScrollClose&&window.innerWidth>767&&(0,C.S7)(this,c).call(this,"close")&&(this.open=!1)}))}_handleTriggerRefChanged(){this.triggerRef?.then((e=>{e&&(this._trigger=e)}))}_handleAnchorRefChanged(){this.anchorRef?.then((e=>{e&&(this._anchor=e)}))}_handleTriggerChanged(){(0,C.jq)(this,h,g).call(this),(0,C.jq)(this,u,v).call(this)}_handleAnchorChanged(){(0,C.jq)(this,m,y).call(this)}connectedCallback(){super.connectedCallback(),A.n.instance.apply(this,"gds-popover"),(0,C.jq)(this,h,g).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&this.open&&((0,C.S7)(this,l).call(this),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;t!==this&&("INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)})),this.addEventListener("blurin",(e=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),(0,C.jq)(this,p,b).call(this),window.removeEventListener("scroll",(0,C.S7)(this,k))}render(){return W.qy`<slot
        name="trigger"
        @slotchange=${(0,C.jq)(this,i,o)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${(0,E.H)({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&(0,C.S7)(this,l).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${(0,C.S7)(this,d)}
              class="close"
              label="${(0,S.ab)("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const e=(this.nonmodal?(0,C.S7)(this,n):this._elDialog)||document;this.updateComplete.then((()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&((0,C.S7)(this,w).call(this),setTimeout((()=>(0,C.S7)(this,w).call(this)),250)),requestAnimationFrame((()=>{(0,C.S7)(this,n)&&((0,C.S7)(this,n).show=!0)})),setTimeout((()=>e.addEventListener("click",(0,C.S7)(this,x))),0),window.addEventListener("scroll",(0,C.S7)(this,k),{passive:!0})):(this._elDialog?.close(),e.removeEventListener("click",(0,C.S7)(this,x)),window.removeEventListener("scroll",(0,C.S7)(this,k)),(0,C.S7)(this,n)&&((0,C.S7)(this,n).show=!1))}))}_handleBackdropChange(){const e=this.parentElement?.getRootNode();this.backdrop&&e&&(0,C.OV)(this,n,e.querySelector(this.backdrop))}_handleMobileLayout(e){var t;(0,C.OV)(this,a,e),e&&!this.disableMobileStyles?(null==(t=(0,C.S7)(this,r))||t.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width")):this.updateComplete.then((()=>{(0,C.jq)(this,m,y).call(this)}))}};i=new WeakSet,o=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},r=new WeakMap,a=new WeakMap,n=new WeakMap,l=new WeakMap,c=new WeakMap,d=new WeakMap,h=new WeakSet,g=function(){this._trigger?.addEventListener("keydown",(0,C.S7)(this,_)),this._trigger?.addEventListener("click",(0,C.S7)(this,f))},p=new WeakSet,b=function(){var e;this._trigger?.removeEventListener("keydown",(0,C.S7)(this,_)),this._trigger?.removeEventListener("click",(0,C.S7)(this,f)),null==(e=(0,C.S7)(this,r))||e.call(this)},u=new WeakSet,v=function(){this._trigger&&Z(this._trigger,this.open,this.popupRole)},m=new WeakSet,y=function(){if(!this._anchor||!this._elDialog)return;const e=this._anchor,t=this._elDialog;e&&t&&(!(0,C.S7)(this,a)||this.disableMobileStyles)&&((0,C.S7)(this,r)&&(0,C.S7)(this,r).call(this),(0,C.OV)(this,r,(0,V.ll)(e,t,(()=>{Object.assign(t.style,{minWidth:this.calcMinWidth(e),maxWidth:this.calcMaxWidth(e),minHeight:this.calcMinHeight(e),maxHeight:this.calcMaxHeight(e)}),(0,V.rD)(e,t,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then((({x:e,y:s})=>Object.assign(t.style,{left:`${e}px`,top:`${s}px`})))}))))},_=new WeakMap,f=new WeakMap,w=new WeakMap,x=new WeakMap,k=new WeakMap,B.styles=R,B.DefaultMiddleware=[(0,V.cY)(8),(0,V.BN)({crossAxis:!0,padding:8})],(0,C.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],B.prototype,"open",2),(0,C.Cc)([(0,M.MZ)({attribute:"popup-role"})],B.prototype,"popupRole",2),(0,C.Cc)([(0,M.MZ)({attribute:!1})],B.prototype,"triggerRef",2),(0,C.Cc)([(0,M.MZ)({attribute:!1})],B.prototype,"anchorRef",2),(0,C.Cc)([(0,M.MZ)()],B.prototype,"label",2),(0,C.Cc)([(0,M.MZ)()],B.prototype,"placement",2),(0,C.Cc)([(0,M.MZ)({type:Boolean})],B.prototype,"disableMobileStyles",2),(0,C.Cc)([(0,M.MZ)({type:Boolean})],B.prototype,"disableScrollClose",2),(0,C.Cc)([(0,M.MZ)({type:Boolean})],B.prototype,"autofocus",2),(0,C.Cc)([(0,M.MZ)({attribute:!1})],B.prototype,"calcMinWidth",2),(0,C.Cc)([(0,M.MZ)({attribute:!1})],B.prototype,"calcMaxWidth",2),(0,C.Cc)([(0,M.MZ)({attribute:!1})],B.prototype,"calcMinHeight",2),(0,C.Cc)([(0,M.MZ)({attribute:!1})],B.prototype,"calcMaxHeight",2),(0,C.Cc)([(0,M.MZ)({type:Boolean,reflect:!0})],B.prototype,"nonmodal",2),(0,C.Cc)([(0,M.MZ)()],B.prototype,"backdrop",2),(0,C.Cc)([(0,M.MZ)({attribute:!1})],B.prototype,"floatingUIMiddleware",2),(0,C.Cc)([(0,M.wk)()],B.prototype,"_trigger",2),(0,C.Cc)([(0,M.wk)()],B.prototype,"_anchor",2),(0,C.Cc)([(0,M.wk)()],B.prototype,"_isVirtKbVisible",2),(0,C.Cc)([(0,M.P)("slot:not([name])")],B.prototype,"_elDefaultSlot",2),(0,C.Cc)([(0,M.P)('slot[name="trigger"]')],B.prototype,"_elTriggerSlot",2),(0,C.Cc)([(0,M.P)("dialog")],B.prototype,"_elDialog",2),(0,C.Cc)([(0,D.w)("triggerRef")],B.prototype,"_handleTriggerRefChanged",1),(0,C.Cc)([(0,D.w)("anchorRef")],B.prototype,"_handleAnchorRefChanged",1),(0,C.Cc)([(0,D.w)("_trigger")],B.prototype,"_handleTriggerChanged",1),(0,C.Cc)([(0,D.w)("_anchor")],B.prototype,"_handleAnchorChanged",1),(0,C.Cc)([(0,D.w)("open")],B.prototype,"_handleOpenChange",1),(0,C.Cc)([(0,D.w)("backdrop")],B.prototype,"_handleBackdropChange",1),(0,C.Cc)([(0,T.M)("(max-width: 576px)")],B.prototype,"_handleMobileLayout",1),B=(0,C.Cc)([(0,W.Y$)("gds-popover",{dependsOn:[z.r]}),(0,K.J)({labelledBy:"dialog",describedBy:"dialog"}),(0,S.cc)()],B)},47326(e,t,s){s.d(t,{A:()=>i}),s(30745);var i=s(39443).AH`
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
`},18146(e,t,s){s.d(t,{A:()=>i}),s(30745);var i=s(39443).AH`
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
  :host([gds-element='gds-radio']:focus-within) .rbcb__perimeter,
  :host([gds-element='gds-checkbox']:focus-visible) .rbcb__perimeter,
  :host([gds-element='gds-checkbox']:focus-within) .rbcb__perimeter,
  .rbcb-wrapper:focus-visible .rbcb__perimeter,
  .rbcb-wrapper:focus-within .rbcb__perimeter {
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
`},65552(e,t,s){s.d(t,{y:()=>r});var i,o=s(30745);class r{constructor(e){(0,o.VK)(this,i,(e=>{const t=e.target;if(!this.host.navigableItems.includes(t))return;let s=!1;if("ArrowDown"===e.key){const e=this.host.navigableItems.indexOf(t)+1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("ArrowUp"===e.key){const e=this.host.navigableItems.indexOf(t)-1,i=this.host.navigableItems[e];i?.focus(),s=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),s=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),s=!0;else{const t=e.key.toLowerCase();if(1!==t.length)return;if(t>="a"&&t<="z"||t>="0"&&t<="9"){const e=this.host.navigableItems.find((e=>{const s=e.textContent?.trim().toLowerCase();return s?.startsWith(t)}));e?.focus(),s=!0}}s&&(e.preventDefault(),e.stopPropagation())})),(this.host=e).addController(this)}hostConnected(){this.host.addEventListener("keydown",(0,o.S7)(this,i))}hostDisconnected(){this.host.removeEventListener("keydown",(0,o.S7)(this,i))}}i=new WeakMap},68714(e,t,s){s.d(t,{M:()=>o}),s(30745);var i=s(48337);function o(e){return(t,s,o)=>{if(i.S)return;const r=window.matchMedia(e),a=t.connectedCallback,n=t.disconnectedCallback;t.connectedCallback=function(){a?.call(this);const e=e=>{o.value?.call(this,e.matches)};r.addEventListener("change",e),this.disconnectedCallback=function(){n?.call(this),r.removeEventListener("change",e)},o.value?.call(this,r.matches)}}}},40825(e,t,s){function i(e){let t=e;for(;t.assignedElements().length>0&&"SLOT"===t.assignedElements()[0].nodeName;)t=t.assignedElements()[0];return t}s.d(t,{o:()=>i}),s(30745)},4397(e,t,s){s.d(t,{z:()=>i}),s(30745);const i=e=>class extends e{focus(e){this.setAttribute("tabindex","0"),super.focus(e)}connectedCallback(){super.connectedCallback(),this.addEventListener("blur",(e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:e.relatedTarget}))})),this.addEventListener("focus",(e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:e.relatedTarget}))}))}}}}]);
//# sourceMappingURL=111.c4badcfd.iframe.bundle.js.map
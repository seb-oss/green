"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7929],{"./dist/libs/core/src/components/icon/icons/cross-small.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>IconCrossSmall});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconCrossSmall=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconCrossSmall._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',IconCrossSmall._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',IconCrossSmall._name="cross-small",IconCrossSmall._width=24,IconCrossSmall._height=24,IconCrossSmall._viewBox="0 0 24 24",IconCrossSmall=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-cross-small")],IconCrossSmall)},"./dist/libs/core/src/components/popover/popover.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GdsPopover,B:()=>applyTriggerAriaAttributes});var chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),platform=__webpack_require__("./dist/libs/core/src/utils/helpers/platform.js");var cross_small_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/cross-small.component.js");var _GdsPopover_instances,handleTriggerSlotChange_fn,_autoPositionCleanupFn,_isMobileViewport,_backdropEl,_handleCancel,_dispatchUiStateEvent,_handleCloseButton,registerTriggerEvents_fn,unregisterTriggerEvents_fn,setupTriggerAttributes_fn,registerAutoPositioning_fn,_handleTriggerKeyDown,_handleTriggerClick,_focusFirstSlottedChild,_handleClickOutside,_handlePageScroll,popover_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
        var(--gds-sys-color-border-subtle-01);
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
`;function applyTriggerAriaAttributes(trigger,open,popupRole){trigger.setAttribute("aria-expanded",String(open));trigger.nodeName.startsWith("GDS-")||["A","BUTTON","INPUT","TEXTAREA"].includes(trigger.nodeName)||(trigger.setAttribute("tabindex","0"),trigger.setAttribute("role","button"));const ariaHasPopupAttr=trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===trigger.getAttribute(ariaHasPopupAttr)&&trigger.setAttribute(ariaHasPopupAttr,popupRole)}let GdsPopover=class extends gds_element.j{constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsPopover_instances),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=referenceEl=>`${referenceEl.offsetWidth}px`,this.calcMaxWidth=_referenceEl=>"auto",this.calcMinHeight=_referenceEl=>"auto",this.calcMaxHeight=_referenceEl=>window.innerHeight-16+"px",this.nonmodal=!1,this.floatingUIMiddleware=GdsPopover.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,(0,chunk_QU3DSPNU.VK)(this,_autoPositionCleanupFn),(0,chunk_QU3DSPNU.VK)(this,_isMobileViewport,!1),(0,chunk_QU3DSPNU.VK)(this,_backdropEl),(0,chunk_QU3DSPNU.VK)(this,_handleCancel,(()=>{(0,chunk_QU3DSPNU.S7)(this,_dispatchUiStateEvent).call(this,"cancel")&&(this.open=!1)})),(0,chunk_QU3DSPNU.VK)(this,_dispatchUiStateEvent,(reason=>{const toState="show"===reason;return this.dispatchCustomEvent("gds-ui-state",{detail:{open:toState,reason},bubbles:!1,composed:!1,cancelable:!0})})),(0,chunk_QU3DSPNU.VK)(this,_handleCloseButton,(e=>{e.stopPropagation(),e.preventDefault(),(0,chunk_QU3DSPNU.S7)(this,_dispatchUiStateEvent).call(this,"close")&&(this.open=!1,setTimeout((()=>this._trigger?.focus()),250))})),(0,chunk_QU3DSPNU.VK)(this,_handleTriggerKeyDown,(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,(0,chunk_QU3DSPNU.S7)(this,_dispatchUiStateEvent).call(this,"show")),"Escape"===e.key&&this.open&&(0,chunk_QU3DSPNU.S7)(this,_handleCancel).call(this)})),(0,chunk_QU3DSPNU.VK)(this,_handleTriggerClick,(e=>{e.preventDefault(),(0,chunk_QU3DSPNU.S7)(this,_dispatchUiStateEvent).call(this,this.open?"close":"show")&&(this.open=!this.open)})),(0,chunk_QU3DSPNU.VK)(this,_focusFirstSlottedChild,(()=>{const firstSlottedChild=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then((()=>{firstSlottedChild?.focus()}))})),(0,chunk_QU3DSPNU.VK)(this,_handleClickOutside,(evt=>{const e=evt,dialog=this._elDialog;if((e.clientX>0||e.clientY>0)&&dialog&&this.open){const rect=dialog.getBoundingClientRect();!(rect.top<=e.clientY&&e.clientY<=rect.top+rect.height&&rect.left<=e.clientX&&e.clientX<=rect.left+rect.width)&&(0,chunk_QU3DSPNU.S7)(this,_dispatchUiStateEvent).call(this,"close")&&(this.open=!1)}})),(0,chunk_QU3DSPNU.VK)(this,_handlePageScroll,(()=>{this.open&&window.innerWidth>767&&(0,chunk_QU3DSPNU.S7)(this,_dispatchUiStateEvent).call(this,"close")&&(this.open=!1)}))}_handleTriggerRefChanged(){this.triggerRef?.then((el=>{el&&(this._trigger=el)}))}_handleAnchorRefChanged(){this.anchorRef?.then((el=>{el&&(this._anchor=el)}))}_handleTriggerChanged(){(0,chunk_QU3DSPNU.jq)(this,_GdsPopover_instances,registerTriggerEvents_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsPopover_instances,setupTriggerAttributes_fn).call(this)}_handleAnchorChanged(){(0,chunk_QU3DSPNU.jq)(this,_GdsPopover_instances,registerAutoPositioning_fn).call(this)}connectedCallback(){super.connectedCallback(),transitional_styles.n.instance.apply(this,"gds-popover"),(0,chunk_QU3DSPNU.jq)(this,_GdsPopover_instances,registerTriggerEvents_fn).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&this.open&&((0,chunk_QU3DSPNU.S7)(this,_handleCancel).call(this),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;t!==this&&("INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1)})),this.addEventListener("blurin",(_=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),(0,chunk_QU3DSPNU.jq)(this,_GdsPopover_instances,unregisterTriggerEvents_fn).call(this),window.removeEventListener("scroll",(0,chunk_QU3DSPNU.S7)(this,_handlePageScroll))}render(){return custom_element_scoping.qy`<slot
        name="trigger"
        @slotchange=${(0,chunk_QU3DSPNU.jq)(this,_GdsPopover_instances,handleTriggerSlotChange_fn)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${(0,class_map.H)({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&(0,chunk_QU3DSPNU.S7)(this,_handleCancel).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${(0,chunk_QU3DSPNU.S7)(this,_handleCloseButton)}
              class="close"
              label="${(0,lit_localize.ab)("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const clickOutsideTarget=(this.nonmodal?(0,chunk_QU3DSPNU.S7)(this,_backdropEl):this._elDialog)||document;this.updateComplete.then((()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&((0,chunk_QU3DSPNU.S7)(this,_focusFirstSlottedChild).call(this),setTimeout((()=>(0,chunk_QU3DSPNU.S7)(this,_focusFirstSlottedChild).call(this)),250)),requestAnimationFrame((()=>{(0,chunk_QU3DSPNU.S7)(this,_backdropEl)&&((0,chunk_QU3DSPNU.S7)(this,_backdropEl).show=!0)})),setTimeout((()=>clickOutsideTarget.addEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleClickOutside))),0),window.addEventListener("scroll",(0,chunk_QU3DSPNU.S7)(this,_handlePageScroll),{passive:!0})):(this._elDialog?.close(),clickOutsideTarget.removeEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleClickOutside)),window.removeEventListener("scroll",(0,chunk_QU3DSPNU.S7)(this,_handlePageScroll)),(0,chunk_QU3DSPNU.S7)(this,_backdropEl)&&((0,chunk_QU3DSPNU.S7)(this,_backdropEl).show=!1))}))}_handleBackdropChange(){const parentRoot=this.parentElement?.getRootNode();this.backdrop&&parentRoot&&(0,chunk_QU3DSPNU.OV)(this,_backdropEl,parentRoot.querySelector(this.backdrop))}_handleMobileLayout(matches){var _a;(0,chunk_QU3DSPNU.OV)(this,_isMobileViewport,matches),matches&&!this.disableMobileStyles?(null==(_a=(0,chunk_QU3DSPNU.S7)(this,_autoPositionCleanupFn))||_a.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this._elDialog?.style.removeProperty("min-width"),this.updateComplete.then((()=>{this.open&&this._elDialog?.showModal()}))):this.updateComplete.then((()=>{(0,chunk_QU3DSPNU.jq)(this,_GdsPopover_instances,registerAutoPositioning_fn).call(this)}))}};_GdsPopover_instances=new WeakSet,handleTriggerSlotChange_fn=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},_autoPositionCleanupFn=new WeakMap,_isMobileViewport=new WeakMap,_backdropEl=new WeakMap,_handleCancel=new WeakMap,_dispatchUiStateEvent=new WeakMap,_handleCloseButton=new WeakMap,registerTriggerEvents_fn=function(){this._trigger?.addEventListener("keydown",(0,chunk_QU3DSPNU.S7)(this,_handleTriggerKeyDown)),this._trigger?.addEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleTriggerClick))},unregisterTriggerEvents_fn=function(){var _a;this._trigger?.removeEventListener("keydown",(0,chunk_QU3DSPNU.S7)(this,_handleTriggerKeyDown)),this._trigger?.removeEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleTriggerClick)),null==(_a=(0,chunk_QU3DSPNU.S7)(this,_autoPositionCleanupFn))||_a.call(this)},setupTriggerAttributes_fn=function(){this._trigger&&applyTriggerAriaAttributes(this._trigger,this.open,this.popupRole)},registerAutoPositioning_fn=function(){if(!this._anchor||!this._elDialog)return;const referenceEl=this._anchor,floatingEl=this._elDialog;referenceEl&&floatingEl&&(!(0,chunk_QU3DSPNU.S7)(this,_isMobileViewport)||this.disableMobileStyles)&&((0,chunk_QU3DSPNU.S7)(this,_autoPositionCleanupFn)&&(0,chunk_QU3DSPNU.S7)(this,_autoPositionCleanupFn).call(this),(0,chunk_QU3DSPNU.OV)(this,_autoPositionCleanupFn,(0,floating_ui_dom.ll)(referenceEl,floatingEl,(()=>{Object.assign(floatingEl.style,{minWidth:this.calcMinWidth(referenceEl),maxWidth:this.calcMaxWidth(referenceEl),minHeight:this.calcMinHeight(referenceEl),maxHeight:this.calcMaxHeight(referenceEl)}),(0,floating_ui_dom.rD)(referenceEl,floatingEl,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then((({x,y})=>Object.assign(floatingEl.style,{left:`${x}px`,top:`${y}px`})))}))))},_handleTriggerKeyDown=new WeakMap,_handleTriggerClick=new WeakMap,_focusFirstSlottedChild=new WeakMap,_handleClickOutside=new WeakMap,_handlePageScroll=new WeakMap,GdsPopover.styles=popover_styles_default,GdsPopover.DefaultMiddleware=[(0,floating_ui_dom.cY)(8),(0,floating_ui_dom.BN)({crossAxis:!0,padding:8})],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"popup-role"})],GdsPopover.prototype,"popupRole",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"triggerRef",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"anchorRef",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsPopover.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsPopover.prototype,"placement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsPopover.prototype,"disableMobileStyles",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsPopover.prototype,"autofocus",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinWidth",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxWidth",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinHeight",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxHeight",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"nonmodal",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsPopover.prototype,"backdrop",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"floatingUIMiddleware",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsPopover.prototype,"_trigger",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsPopover.prototype,"_anchor",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsPopover.prototype,"_isVirtKbVisible",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("slot:not([name])")],GdsPopover.prototype,"_elDefaultSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)('slot[name="trigger"]')],GdsPopover.prototype,"_elTriggerSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("dialog")],GdsPopover.prototype,"_elDialog",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("triggerRef")],GdsPopover.prototype,"_handleTriggerRefChanged",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("anchorRef")],GdsPopover.prototype,"_handleAnchorRefChanged",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("_trigger")],GdsPopover.prototype,"_handleTriggerChanged",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("_anchor")],GdsPopover.prototype,"_handleAnchorChanged",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("open")],GdsPopover.prototype,"_handleOpenChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("backdrop")],GdsPopover.prototype,"_handleBackdropChange",1),(0,chunk_QU3DSPNU.Cc)([function watchMediaQuery(q){return(proto,_propertyKey,descriptor)=>{if(platform.S)return;const mediaQuery=window.matchMedia(q),connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){connectedCallback?.call(this);const listener=e=>{descriptor.value?.call(this,e.matches)};mediaQuery.addEventListener("change",listener),this.disconnectedCallback=function(){disconnectedCallback?.call(this),mediaQuery.removeEventListener("change",listener)},descriptor.value?.call(this,mediaQuery.matches)}}}("(max-width: 576px)")],GdsPopover.prototype,"_handleMobileLayout",1),GdsPopover=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-popover",{dependsOn:[cross_small_component.r]}),(0,lit_localize.cc)()],GdsPopover)},"./dist/libs/core/src/primitives/listbox/option.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>option_styles_default});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var option_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    }

    :host .item {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-s);
      cursor: pointer;
      font: var(--gds-sys-text-detail-regular-m);
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
      background-color: var(--gds-sys-color-l2-neutral-03);
      color: var(--gds-sys-color-content-inversed);
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
`},"./dist/libs/core/src/shared-styles/rbcb-toggle.style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>rbcb_toggle_style_default});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var rbcb_toggle_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
    cursor: pointer;
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
      var(--gds-sys-color-l3-neutral-01);
    background-color: var(--gds-sys-color-l1-neutral-01);
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    will-change: box-shadow;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rbcb__icon {
    line-height: 10px;
    transition: scale 150ms;
    will-change: scale;
    scale: 1;
    color: var(--gds-sys-color-content-neutral-03);
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
      var(--gds-sys-color-l3-neutral-01);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-border-interactive);
  }

  .--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
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

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-5xs)
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
    width: 0;
    height: 0;
    pointer-events: none;
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
    .rbcb__toggle {
      transition: none;
    }
  }
`},"./dist/libs/core/src/utils/controllers/listbox-kb-nav-controller.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>ListboxKbNavController});var _keyboardNavigationHandler,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");class ListboxKbNavController{constructor(host){(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_keyboardNavigationHandler,(e=>{const targetItem=e.target;if(!this.host.navigableItems.includes(targetItem))return;let handled=!1;if("ArrowDown"===e.key){const nextItemIndex=this.host.navigableItems.indexOf(targetItem)+1,nextItem=this.host.navigableItems[nextItemIndex];nextItem?.focus(),handled=!0}else if("ArrowUp"===e.key){const prevOptionIndex=this.host.navigableItems.indexOf(targetItem)-1,prevItem=this.host.navigableItems[prevOptionIndex];prevItem?.focus(),handled=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),handled=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),handled=!0;else{const key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){const firstMatch=this.host.navigableItems.find((el=>{const text=el.textContent?.trim().toLowerCase();return text?.startsWith(key)}));firstMatch?.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())})),(this.host=host).addController(this)}hostConnected(){this.host.addEventListener("keydown",(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}}_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/utils/helpers/unwrap-slots.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>unwrap});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");function unwrap(slotRef){let slot=slotRef;for(;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}},"./dist/libs/core/src/utils/mixins/focusable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Focusable});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");const Focusable=superClass=>class HighlightableElement extends superClass{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!1,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!1,composed:!0,relatedTarget:e.relatedTarget}))}}focus(options){this.setAttribute("tabindex","0"),super.focus(options)}}}}]);
//# sourceMappingURL=7929.aa2e38b9.iframe.bundle.js.map
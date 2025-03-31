"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[2685],{"./dist/libs/core/src/components/icon/icons/cross-small.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>IconCrossSmall});var _chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QTSIPXV3.js"),_scoping__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconCrossSmall=class extends _icon__WEBPACK_IMPORTED_MODULE_0__.M{};IconCrossSmall._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',IconCrossSmall._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',IconCrossSmall._name="cross-small",IconCrossSmall=(0,_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_1__.Cc)([(0,_scoping__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-cross-small")],IconCrossSmall)},"./dist/libs/core/src/components/popover/popover.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GdsPopover});var chunk_QTSIPXV3=__webpack_require__("./dist/libs/core/src/chunks/chunk.QTSIPXV3.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),is_server=__webpack_require__("./dist/libs/core/src/utils/helpers/is-server.js");var cross_small_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/cross-small.component.js");var _handleTriggerSlotChange,handleTriggerSlotChange_fn,_autoPositionCleanupFn,_isMobileViewport,_backdropEl,_handleCancel,_dispatchUiStateEvent,_handleCloseButton,_registerTriggerEvents,registerTriggerEvents_fn,_unregisterTriggerEvents,unregisterTriggerEvents_fn,_setupTriggerAttributes,setupTriggerAttributes_fn,_registerAutoPositioning,registerAutoPositioning_fn,_handleTriggerKeyDown,_handleTriggerClick,_focusFirstSlottedChild,_handleClickOutside,popover_styles_default=lit.AH`
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
      /*transform: translate3d(0, 0, 0);*/
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
      box-shadow:
        0 0 0 1px rgba(0, 0, 0, 0.2),
        0 1rem 28px rgba(0, 0, 0, 0.15);
      border-width: 0;
      border-radius: 0.5rem;
    }

    :host([nonmodal]) dialog {
      z-index: 1;
    }

    @media (max-width: 767px) {
      dialog.use-modal-in-mobile {
        border-radius: 1rem 1rem 0 0;
        transition: all 200ms ease;
        min-width: 100vw;
        position: fixed;
        bottom: 0;
        left: 0;

        max-height: 50svh;
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
          transition: opacity 200ms ease;
          @starting-style {
            opacity: 0;
          }
        }
      }
    }

    @media (min-width: 768px) {
      header {
        display: none;
      }
    }

    header {
      display: none;
    }

    @media (min-width: 768px) {
      dialog:not(.has-backdrop)::backdrop {
        background-color: transparent;
        display: block;
        position: fixed;
      }
    }
  }
`;let GdsPopover=class extends gds_element.j{constructor(){super(...arguments),(0,chunk_QTSIPXV3.VK)(this,_handleTriggerSlotChange),(0,chunk_QTSIPXV3.VK)(this,_registerTriggerEvents),(0,chunk_QTSIPXV3.VK)(this,_unregisterTriggerEvents),(0,chunk_QTSIPXV3.VK)(this,_setupTriggerAttributes),(0,chunk_QTSIPXV3.VK)(this,_registerAutoPositioning),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=referenceEl=>`${referenceEl.offsetWidth}px`,this.calcMaxWidth=_referenceEl=>"auto",this.calcMinHeight=_referenceEl=>"auto",this.calcMaxHeight=_referenceEl=>window.innerHeight-16+"px",this.nonmodal=!1,this.floatingUIMiddleware=GdsPopover.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,(0,chunk_QTSIPXV3.VK)(this,_autoPositionCleanupFn,void 0),(0,chunk_QTSIPXV3.VK)(this,_isMobileViewport,!1),(0,chunk_QTSIPXV3.VK)(this,_backdropEl,void 0),(0,chunk_QTSIPXV3.VK)(this,_handleCancel,(()=>{(0,chunk_QTSIPXV3.S7)(this,_dispatchUiStateEvent).call(this,"cancel")&&(this.open=!1)})),(0,chunk_QTSIPXV3.VK)(this,_dispatchUiStateEvent,(reason=>{const toState="show"===reason;return this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:toState,reason},bubbles:!1,composed:!1,cancelable:!0}))})),(0,chunk_QTSIPXV3.VK)(this,_handleCloseButton,(e=>{e.stopPropagation(),e.preventDefault(),(0,chunk_QTSIPXV3.S7)(this,_dispatchUiStateEvent).call(this,"close")&&(this.open=!1,setTimeout((()=>this._trigger?.focus()),250))})),(0,chunk_QTSIPXV3.VK)(this,_handleTriggerKeyDown,(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,(0,chunk_QTSIPXV3.S7)(this,_dispatchUiStateEvent).call(this,"show")),"Escape"===e.key&&this.open&&(0,chunk_QTSIPXV3.S7)(this,_handleCancel).call(this)})),(0,chunk_QTSIPXV3.VK)(this,_handleTriggerClick,(e=>{e.preventDefault(),(0,chunk_QTSIPXV3.S7)(this,_dispatchUiStateEvent).call(this,this.open?"close":"show")&&(this.open=!this.open)})),(0,chunk_QTSIPXV3.VK)(this,_focusFirstSlottedChild,(()=>{const firstSlottedChild=this._elDefaultSlot?.assignedElements()[0];this.updateComplete.then((()=>{firstSlottedChild?.focus()}))})),(0,chunk_QTSIPXV3.VK)(this,_handleClickOutside,(evt=>{const e=evt,dialog=this._elDialog;if((e.clientX>0||e.clientY>0)&&dialog&&this.open){const rect=dialog.getBoundingClientRect();!(rect.top<=e.clientY&&e.clientY<=rect.top+rect.height&&rect.left<=e.clientX&&e.clientX<=rect.left+rect.width)&&(0,chunk_QTSIPXV3.S7)(this,_dispatchUiStateEvent).call(this,"close")&&(this.open=!1)}}))}_handleTriggerRefChanged(){this.triggerRef?.then((el=>{el&&(this._trigger=el)}))}_handleAnchorRefChanged(){this.anchorRef?.then((el=>{el&&(this._anchor=el)}))}_handleTriggerChanged(){(0,chunk_QTSIPXV3.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),(0,chunk_QTSIPXV3.jq)(this,_setupTriggerAttributes,setupTriggerAttributes_fn).call(this)}_handleAnchorChanged(){(0,chunk_QTSIPXV3.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}connectedCallback(){super.connectedCallback(),transitional_styles.n.instance.apply(this,"gds-popover"),(0,chunk_QTSIPXV3.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&this.open&&((0,chunk_QTSIPXV3.S7)(this,_handleCancel).call(this),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1})),this.addEventListener("blurin",(_=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),(0,chunk_QTSIPXV3.jq)(this,_unregisterTriggerEvents,unregisterTriggerEvents_fn).call(this)}render(){return custom_element_scoping.qy`<slot
        name="trigger"
        @slotchange=${(0,chunk_QTSIPXV3.jq)(this,_handleTriggerSlotChange,handleTriggerSlotChange_fn)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${(0,class_map.H)({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&(0,chunk_QTSIPXV3.S7)(this,_handleCancel).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${(0,chunk_QTSIPXV3.S7)(this,_handleCloseButton)}
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
      </div>`}_handleOpenChange(){const clickOutsideTarget=(this.nonmodal?(0,chunk_QTSIPXV3.S7)(this,_backdropEl):this._elDialog)||document;this.updateComplete.then((()=>{this._trigger?.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?this._elDialog?.setAttribute("open","true"):this._elDialog?.showModal(),this.autofocus&&((0,chunk_QTSIPXV3.S7)(this,_focusFirstSlottedChild).call(this),setTimeout((()=>(0,chunk_QTSIPXV3.S7)(this,_focusFirstSlottedChild).call(this)),250)),requestAnimationFrame((()=>{(0,chunk_QTSIPXV3.S7)(this,_backdropEl)&&((0,chunk_QTSIPXV3.S7)(this,_backdropEl).show=!0)})),setTimeout((()=>clickOutsideTarget.addEventListener("click",(0,chunk_QTSIPXV3.S7)(this,_handleClickOutside))),0)):(this._elDialog?.close(),clickOutsideTarget.removeEventListener("click",(0,chunk_QTSIPXV3.S7)(this,_handleClickOutside)),(0,chunk_QTSIPXV3.S7)(this,_backdropEl)&&((0,chunk_QTSIPXV3.S7)(this,_backdropEl).show=!1))}))}_handleBackdropChange(){const parentRoot=this.parentElement?.getRootNode();this.backdrop&&parentRoot&&(0,chunk_QTSIPXV3.OV)(this,_backdropEl,parentRoot.querySelector(this.backdrop))}_handleMobileLayout(matches){var _a;(0,chunk_QTSIPXV3.OV)(this,_isMobileViewport,matches),matches&&!this.disableMobileStyles?(null==(_a=(0,chunk_QTSIPXV3.S7)(this,_autoPositionCleanupFn))||_a.call(this),this._elDialog?.style.removeProperty("left"),this._elDialog?.style.removeProperty("top"),this._elDialog?.style.removeProperty("minWidth"),this.updateComplete.then((()=>{this.open&&this._elDialog?.showModal()}))):this.updateComplete.then((()=>{(0,chunk_QTSIPXV3.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}))}};_handleTriggerSlotChange=new WeakSet,handleTriggerSlotChange_fn=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},_autoPositionCleanupFn=new WeakMap,_isMobileViewport=new WeakMap,_backdropEl=new WeakMap,_handleCancel=new WeakMap,_dispatchUiStateEvent=new WeakMap,_handleCloseButton=new WeakMap,_registerTriggerEvents=new WeakSet,registerTriggerEvents_fn=function(){this._trigger?.addEventListener("keydown",(0,chunk_QTSIPXV3.S7)(this,_handleTriggerKeyDown)),this._trigger?.addEventListener("click",(0,chunk_QTSIPXV3.S7)(this,_handleTriggerClick))},_unregisterTriggerEvents=new WeakSet,unregisterTriggerEvents_fn=function(){var _a;this._trigger?.removeEventListener("keydown",(0,chunk_QTSIPXV3.S7)(this,_handleTriggerKeyDown)),this._trigger?.removeEventListener("click",(0,chunk_QTSIPXV3.S7)(this,_handleTriggerClick)),null==(_a=(0,chunk_QTSIPXV3.S7)(this,_autoPositionCleanupFn))||_a.call(this)},_setupTriggerAttributes=new WeakSet,setupTriggerAttributes_fn=function(){if(this._trigger){this._trigger?.setAttribute("aria-expanded",String(this.open));const focusableNodeNames=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||focusableNodeNames.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const ariaHasPopupAttr=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(ariaHasPopupAttr)&&this._trigger.setAttribute(ariaHasPopupAttr,this.popupRole)}},_registerAutoPositioning=new WeakSet,registerAutoPositioning_fn=function(){if(!this._anchor||!this._elDialog)return;const referenceEl=this._anchor,floatingEl=this._elDialog;referenceEl&&floatingEl&&(!(0,chunk_QTSIPXV3.S7)(this,_isMobileViewport)||this.disableMobileStyles)&&((0,chunk_QTSIPXV3.S7)(this,_autoPositionCleanupFn)&&(0,chunk_QTSIPXV3.S7)(this,_autoPositionCleanupFn).call(this),(0,chunk_QTSIPXV3.OV)(this,_autoPositionCleanupFn,(0,floating_ui_dom.ll)(referenceEl,floatingEl,(()=>{Object.assign(floatingEl.style,{minWidth:this.calcMinWidth(referenceEl),maxWidth:this.calcMaxWidth(referenceEl),minHeight:this.calcMinHeight(referenceEl),maxHeight:this.calcMaxHeight(referenceEl)}),(0,floating_ui_dom.rD)(referenceEl,floatingEl,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then((({x,y})=>Object.assign(floatingEl.style,{left:`${x}px`,top:`${y}px`})))}))))},_handleTriggerKeyDown=new WeakMap,_handleTriggerClick=new WeakMap,_focusFirstSlottedChild=new WeakMap,_handleClickOutside=new WeakMap,GdsPopover.styles=(0,lit.iz)(popover_styles_default),GdsPopover.DefaultMiddleware=[(0,floating_ui_dom.cY)(8),(0,floating_ui_dom.BN)({crossAxis:!0,padding:8})],(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"open",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:"popup-role"})],GdsPopover.prototype,"popupRole",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"triggerRef",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"anchorRef",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)()],GdsPopover.prototype,"label",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)()],GdsPopover.prototype,"placement",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean})],GdsPopover.prototype,"disableMobileStyles",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean})],GdsPopover.prototype,"autofocus",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinWidth",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxWidth",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinHeight",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxHeight",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"nonmodal",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)()],GdsPopover.prototype,"backdrop",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsPopover.prototype,"floatingUIMiddleware",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],GdsPopover.prototype,"_trigger",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],GdsPopover.prototype,"_anchor",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],GdsPopover.prototype,"_isVirtKbVisible",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.P)("slot:not([name])")],GdsPopover.prototype,"_elDefaultSlot",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.P)('slot[name="trigger"]')],GdsPopover.prototype,"_elTriggerSlot",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.P)("dialog")],GdsPopover.prototype,"_elDialog",2),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("triggerRef")],GdsPopover.prototype,"_handleTriggerRefChanged",1),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("anchorRef")],GdsPopover.prototype,"_handleAnchorRefChanged",1),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("_trigger")],GdsPopover.prototype,"_handleTriggerChanged",1),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("_anchor")],GdsPopover.prototype,"_handleAnchorChanged",1),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("open")],GdsPopover.prototype,"_handleOpenChange",1),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("backdrop")],GdsPopover.prototype,"_handleBackdropChange",1),(0,chunk_QTSIPXV3.Cc)([function watchMediaQuery(q){return(proto,_propertyKey,descriptor)=>{if(is_server.S)return;const mediaQuery=window.matchMedia(q),connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){connectedCallback?.call(this);const listener=e=>{descriptor.value?.call(this,e.matches)};mediaQuery.addEventListener("change",listener),this.disconnectedCallback=function(){disconnectedCallback?.call(this),mediaQuery.removeEventListener("change",listener)},descriptor.value?.call(this,mediaQuery.matches)}}}("(max-width: 576px)")],GdsPopover.prototype,"_handleMobileLayout",1),GdsPopover=(0,chunk_QTSIPXV3.Cc)([(0,custom_element_scoping.Y$)("gds-popover",{dependsOn:[cross_small_component.r]}),(0,lit_localize.cc)()],GdsPopover)},"./dist/libs/core/src/components/popover/popover.trans.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>register});var transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js");const popover_trans_styles_scss="/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  :host {\n    display: contents;\n  }\n  :host([open]) dialog {\n    box-sizing: border-box;\n    opacity: 1;\n    transform: translate3d(0, 0, 0);\n    visibility: visible;\n  }\n  :host > div:not([hidden]) {\n    display: contents;\n  }\n  header {\n    display: flex;\n  }\n  header .close::part(_button) {\n    border-radius: 100%;\n    color: var(--text-primary-color);\n    border: 1px solid transparent;\n  }\n  header .close::part(_button):hover {\n    background-color: var(--grey-500);\n  }\n  header h2 {\n    flex-grow: 1;\n    font-weight: 400;\n    line-height: 1.5;\n    margin: 0.25rem 0 0 0.75rem;\n  }\n  dialog {\n    --z-index: var(--sg-z-index-popover);\n    background-color: var(--sg-popover-background);\n    display: flex;\n    flex-direction: column;\n    justify-content: flex-end;\n    opacity: 0;\n    visibility: hidden;\n    position: fixed;\n    inset: auto;\n    z-index: var(--z-index);\n    box-shadow: var(--sg-popover-box-shadow);\n    color: var(--text-primary-color);\n    overflow: hidden;\n    padding: 0;\n    padding-bottom: 0;\n    border: solid var(--sg-border-width) var(--sg-border-color);\n    --border-color: var(--text-primary-color);\n    --sg-border-color: var(--text-primary-color);\n    border-radius: var(--sg-border-radius);\n  }\n  @media (max-width: 35.98em) {\n    dialog.use-modal-in-mobile {\n      border-top: solid var(--sg-border-width) var(--sg-border-color);\n      --border-color: var(--sg-border-color);\n      padding-bottom: 0.5rem;\n      border-radius: 1rem 1rem 0 0;\n      bottom: 0;\n      left: 0;\n      transition: all 300ms ease-in-out;\n      width: 100%;\n      border: 1px solid var(--border-color);\n      border-radius: 0.25rem;\n      max-height: 80svh;\n      padding-bottom: 0;\n      inset: 0;\n    }\n    dialog.use-modal-in-mobile.v-kb-visible {\n      inset-block-end: auto;\n      max-height: 50svh;\n      top: 1rem;\n    }\n  }\n  @media (min-width: 36em) {\n    dialog.use-modal-in-mobile header {\n      display: none;\n    }\n  }\n  @media (min-width: 36em) {\n    dialog.use-modal-in-mobile:not(.has-backdrop)::backdrop {\n      opacity: 0;\n    }\n  }\n  dialog::backdrop {\n    background-color: rgba(0, 0, 0, 0.2);\n    display: block;\n    position: fixed;\n  }\n  dialog:not(.use-modal-in-mobile) header {\n    display: none;\n  }\n  dialog:not(.use-modal-in-mobile)::backdrop {\n    opacity: 0;\n  }\n}";function register(){transitional_styles.n.instance.register("gds-popover",popover_trans_styles_scss.toString())}},"./dist/libs/core/src/primitives/listbox/listbox.trans.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>register});var transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js");const menu_heading_trans_styles_scss="@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  :host {\n    background-color: var(--gds-ref-pallet-base300);\n    color: var(--gds-ref-pallet-base800);\n    display: flex;\n    font-size: 0.875rem;\n    font-weight: 500;\n    padding: 0.75rem 1rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n  :host([aria-hidden=true]) {\n    display: none;\n  }\n}",listbox_trans_styles_scss="/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n/** \n  * @deprecated in favor of Grouped list component\n  */\n/** \n  * @deprecated in favor of Grouped list component\n  */\n@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  :host {\n    padding-left: 0;\n    margin-bottom: 0;\n    margin-top: 0;\n    display: flex;\n    flex-direction: column;\n    list-style: none;\n    overflow-y: auto;\n  }\n  :host > li {\n    padding-bottom: 0.5rem;\n    padding-top: 0.5rem;\n    border: 0;\n    display: block;\n    position: relative;\n  }\n  :host > li::before {\n    font-weight: 500;\n    display: inline-block;\n    left: 0;\n    position: absolute;\n    text-align: center;\n  }\n}",option_trans_styles_scss="/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  :host div {\n    padding-left: 1rem;\n    padding-right: 1rem;\n    padding-bottom: 0.75rem;\n    padding-top: 0.75rem;\n    line-height: 1.25;\n    cursor: pointer;\n    display: flex;\n    gap: 0.75rem;\n    -webkit-user-select: none;\n       -moz-user-select: none;\n            user-select: none;\n  }\n  :host div:hover, :host div:focus-visible {\n    background-color: var(--grey-400);\n  }\n  :host div:active {\n    background-color: var(--grey-400);\n  }\n  :host div:focus {\n    outline-color: #000;\n    outline-offset: -0.25rem;\n  }\n  :host div.active.sg-highlighted, :host div[aria-selected=true] {\n    background: var(--grey-1000);\n    color: #fff;\n  }\n  :host(:hover) div,\n  :host(:focus-visible) div {\n    background-color: var(--grey-400);\n  }\n  :host(:active) div {\n    background-color: var(--grey-500);\n  }\n  :host(:focus-visible) {\n    outline-color: #000;\n    outline-offset: -0.25rem;\n  }\n  :host([inert]) {\n    display: none;\n  }\n  :host([highlighted]) div {\n    background: var(--grey-1000);\n    color: #fff;\n  }\n  .checkbox {\n    background-color: var(--gds-comp-checkbox-container-color);\n    border-radius: var(--gds-comp-checkbox-border-radius);\n    box-shadow: inset 0 0 0 1px var(--gds-comp-checkbox-border-color);\n    flex: 0 0 auto;\n    flex-shrink: 0;\n    height: var(--gds-comp-checkbox-container-width);\n    margin-top: 0.15rem;\n    position: relative;\n    width: var(--gds-comp-checkbox-container-width);\n    display: flex;\n    align-items: center;\n    justify-content: center;\n  }\n  .checkbox [gds-element=gds-icon-checkmark]::part(icon) {\n    width: 10px;\n    height: 10px;\n  }\n  .checkbox.checked {\n    background-color: var(--gds-comp-checkbox-container-color-selected);\n  }\n  .checkbox.checked [gds-element=gds-icon-checkmark]::part(icon) {\n    color: var(--gds-comp-checkbox-border-color-selected, #fff);\n  }\n}";function register(){transitional_styles.n.instance.register("gds-listbox",listbox_trans_styles_scss.toString()),transitional_styles.n.instance.register("gds-option",option_trans_styles_scss.toString()),transitional_styles.n.instance.register("gds-menu-heading",menu_heading_trans_styles_scss.toString())}},"./dist/libs/core/src/primitives/listbox/option.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>option_styles_default});var option_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-color-l2-border-primary);
    }

    :host div {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-m);
      cursor: pointer;
      font-size: var(--gds-text-size-label-input-large);
      font-weight: var(--gds-text-weight-regular);
      line-height: var(--gds-text-line-height-label-input-large);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-space-2xs);
        position: absolute;
        border: var(--gds-space-3xs) solid currentColor;
        border-radius: var(--gds-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: var(--gds-color-l2-background-tertiary);
      color: var(--gds-color-l2-content-tertiary);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-color-l3-background-secondary);
    }

    :host(:focus-visible) {
      outline: none;

      div::before {
        inset: var(--gds-space-2xs);
        opacity: 1;
        visivility: visible;
      }
    }

    :host([inert]) {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: 1lh;
      box-sizing: border-box;
      position: relative;
      aspect-ratio: 1/1;
      border-radius: var(--gds-space-2xs);
      border: var(--gds-space-3xs) solid currentColor;
      padding: var(--gds-space-3xs);

      &.checked {
        background-color: currentColor;

        gds-icon-checkmark {
          &::part(icon) {
            color: var(--gds-color-l2-content-tertiary);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`},"./dist/libs/core/src/utils/controllers/listbox-kb-nav-controller.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>ListboxKbNavController});var _keyboardNavigationHandler,_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QTSIPXV3.js");class ListboxKbNavController{constructor(host){(0,_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_keyboardNavigationHandler,(e=>{const targetItem=e.target;if(!this.host.navigableItems.includes(targetItem))return;let handled=!1;if("ArrowDown"===e.key){const nextItemIndex=this.host.navigableItems.indexOf(targetItem)+1,nextItem=this.host.navigableItems[nextItemIndex];nextItem?.focus(),handled=!0}else if("ArrowUp"===e.key){const prevOptionIndex=this.host.navigableItems.indexOf(targetItem)-1,prevItem=this.host.navigableItems[prevOptionIndex];prevItem?.focus(),handled=!0}else if("Home"===e.key)this.host.navigableItems[0]?.focus(),handled=!0;else if("End"===e.key)this.host.navigableItems[this.host.navigableItems.length-1]?.focus(),handled=!0;else{const key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){const firstMatch=this.host.navigableItems.find((el=>{const text=el.textContent?.trim().toLowerCase();return text?.startsWith(key)}));firstMatch?.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())})),(this.host=host).addController(this)}hostConnected(){this.host.addEventListener("keydown",(0,_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}}_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/utils/helpers/unwrap-slots.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function unwrap(slotRef){let slot=slotRef;for(;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}__webpack_require__.d(__webpack_exports__,{o:()=>unwrap})},"./dist/libs/core/src/utils/mixins/focusable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Focusable});const Focusable=superClass=>class HighlightableElement extends superClass{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(options){this.setAttribute("tabindex","0"),super.focus(options)}}}}]);
//# sourceMappingURL=2685.1b9ba6ba.iframe.bundle.js.map
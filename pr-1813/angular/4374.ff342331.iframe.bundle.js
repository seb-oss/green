"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[4374],{"./dist/libs/core/src/chunks/chunk.5WPIF46G.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_3PL54UIC_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.3PL54UIC.js"),_chunk_HMD2XFIL_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.HMD2XFIL.js"),_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/index.js"),menu_heading_styles_default=lit__WEBPACK_IMPORTED_MODULE_4__.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-sys-color-primary-text);
      background-color: var(--gds-sys-color-container-container-dim1);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`,GdsMenuHeading=class extends _chunk_HMD2XFIL_js__WEBPACK_IMPORTED_MODULE_1__.j{connectedCallback(){super.connectedCallback(),this.setAttribute("inert","true"),this.updateComplete.then((()=>_chunk_3PL54UIC_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-menu-heading")))}render(){return lit__WEBPACK_IMPORTED_MODULE_4__.qy`<slot></slot>`}};GdsMenuHeading.styles=menu_heading_styles_default,GdsMenuHeading=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-menu-heading")],GdsMenuHeading)},"./dist/libs/core/src/chunks/chunk.67DBEXTS.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>unwrap,y:()=>ListboxKbNavController});var _keyboardNavigationHandler,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),ListboxKbNavController=class{constructor(host){(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_keyboardNavigationHandler,(e=>{var _a,_b;const targetItem=e.target;if(!this.host.navigableItems.includes(targetItem))return;let handled=!1;if("ArrowDown"===e.key){const nextItemIndex=this.host.navigableItems.indexOf(targetItem)+1,nextItem=this.host.navigableItems[nextItemIndex];null==nextItem||nextItem.focus(),handled=!0}else if("ArrowUp"===e.key){const prevOptionIndex=this.host.navigableItems.indexOf(targetItem)-1,prevItem=this.host.navigableItems[prevOptionIndex];null==prevItem||prevItem.focus(),handled=!0}else if("Home"===e.key)null==(_a=this.host.navigableItems[0])||_a.focus(),handled=!0;else if("End"===e.key)null==(_b=this.host.navigableItems[this.host.navigableItems.length-1])||_b.focus(),handled=!0;else{const key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){const firstMatch=this.host.navigableItems.find((el=>{var _a2;const text=null==(_a2=el.textContent)?void 0:_a2.trim().toLowerCase();return null==text?void 0:text.startsWith(key)}));null==firstMatch||firstMatch.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())})),(this.host=host).addController(this)}hostConnected(){this.host.addEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}};function unwrap(slotRef){let slot=slotRef;for(;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/chunks/chunk.6TYK3IPH.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_QSG5QMTU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QSG5QMTU.js"),_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconCrossSmall=class extends _chunk_QSG5QMTU_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconCrossSmall._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',IconCrossSmall._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',IconCrossSmall._name="cross-small",IconCrossSmall=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-cross-small")],IconCrossSmall)},"./dist/libs/core/src/chunks/chunk.FVXKBQLW.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _handleTriggerSlotChange,handleTriggerSlotChange_fn,_autoPositionCleanupFn,_isMobileViewport,_backdropEl,_handleCancel,_dispatchUiStateEvent,_handleCloseButton,_registerTriggerEvents,registerTriggerEvents_fn,_unregisterTriggerEvents,unregisterTriggerEvents_fn,_setupTriggerAttributes,setupTriggerAttributes_fn,_registerAutoPositioning,registerAutoPositioning_fn,_handleTriggerKeyDown,_handleTriggerClick,_focusFirstSlottedChild,_handleClickOutside,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_3PL54UIC_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.3PL54UIC.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_HMD2XFIL_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.HMD2XFIL.js"),_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/class-map.js"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),popover_styles_default=lit__WEBPACK_IMPORTED_MODULE_6__.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;
    }

    :host([open]) dialog {
      opacity: 1;
      box-sizing: border-box;
      transform: translate3d(0, 0, 0);
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

    header {
      display: none;
    }

    dialog:not(.has-backdrop)::backdrop {
      background-color: transparent;
      display: block;
      position: fixed;
    }
  }
`,GdsPopover=class extends _chunk_HMD2XFIL_js__WEBPACK_IMPORTED_MODULE_2__.j{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleTriggerSlotChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_registerTriggerEvents),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_unregisterTriggerEvents),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_setupTriggerAttributes),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_registerAutoPositioning),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.calcMinWidth=referenceEl=>`${referenceEl.offsetWidth}px`,this.calcMaxWidth=_referenceEl=>"auto",this.calcMinHeight=_referenceEl=>"auto",this.calcMaxHeight=_referenceEl=>"500px",this.nonmodal=!1,this.floatingUIMiddleware=[(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_9__.cY)(8),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_9__.UU)()],this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_autoPositionCleanupFn,void 0),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_isMobileViewport,!1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_backdropEl,void 0),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleCancel,(()=>{this.open=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"cancel")})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_dispatchUiStateEvent,(reason=>{this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:this.open,reason},bubbles:!1,composed:!1}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleCloseButton,(e=>{e.stopPropagation(),e.preventDefault(),this.open=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"close"),setTimeout((()=>{var _a;return null==(_a=this._trigger)?void 0:_a.focus()}),250)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleTriggerKeyDown,(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"show")),"Escape"===e.key&&this.open&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleCancel).call(this)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleTriggerClick,(e=>{e.preventDefault(),this.open=!this.open,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,this.open?"show":"close")})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_focusFirstSlottedChild,(()=>{var _a;const firstSlottedChild=null==(_a=this._elDefaultSlot)?void 0:_a.assignedElements()[0];this.updateComplete.then((()=>{null==firstSlottedChild||firstSlottedChild.focus()}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleClickOutside,(evt=>{const e=evt,dialog=this._elDialog;if((e.clientX>0||e.clientY>0)&&dialog&&this.open){const rect=dialog.getBoundingClientRect();rect.top<=e.clientY&&e.clientY<=rect.top+rect.height&&rect.left<=e.clientX&&e.clientX<=rect.left+rect.width||(this.open=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_dispatchUiStateEvent).call(this,"close"))}}))}_handleTriggerRefChanged(){var _a;null==(_a=this.triggerRef)||_a.then((el=>{el&&(this._trigger=el)}))}_handleAnchorRefChanged(){var _a;null==(_a=this.anchorRef)||_a.then((el=>{el&&(this._anchor=el)}))}_handleTriggerChanged(){(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_setupTriggerAttributes,setupTriggerAttributes_fn).call(this)}_handleAnchorChanged(){(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}connectedCallback(){super.connectedCallback(),_chunk_3PL54UIC_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-popover"),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&this.open&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleCancel).call(this),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1})),this.addEventListener("blurin",(_=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_unregisterTriggerEvents,unregisterTriggerEvents_fn).call(this)}render(){return _chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot
        name="trigger"
        @slotchange=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_handleTriggerSlotChange,handleTriggerSlotChange_fn)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__.H)({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          aria-hidden="${String(!this.open)}"
          @close=${()=>this.open&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleCancel).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleCloseButton)}
              class="close"
              label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.ab)("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const clickOutsideTarget=(this.nonmodal?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_backdropEl):this._elDialog)||document;this.updateComplete.then((()=>{var _a,_b,_c,_d;null==(_a=this._trigger)||_a.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?null==(_c=this._elDialog)||_c.setAttribute("open","true"):null==(_b=this._elDialog)||_b.showModal(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_focusFirstSlottedChild).call(this),requestAnimationFrame((()=>{(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_backdropEl)&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_backdropEl).show=!0)})),setTimeout((()=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_focusFirstSlottedChild).call(this)),250),setTimeout((()=>clickOutsideTarget.addEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleClickOutside))),0)):(null==(_d=this._elDialog)||_d.close(),clickOutsideTarget.removeEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleClickOutside)),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_backdropEl)&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_backdropEl).show=!1))}))}_handleBackdropChange(){var _a;const parentRoot=null==(_a=this.parentElement)?void 0:_a.getRootNode();this.backdrop&&parentRoot&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_backdropEl,parentRoot.querySelector(this.backdrop))}_handleMobileLayout(matches){var _a,_b,_c,_d;(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_isMobileViewport,matches),matches&&!this.disableMobileStyles?(null==(_a=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn))||_a.call(this),null==(_b=this._elDialog)||_b.style.removeProperty("left"),null==(_c=this._elDialog)||_c.style.removeProperty("top"),null==(_d=this._elDialog)||_d.style.removeProperty("minWidth"),this.updateComplete.then((()=>{var _a2;this.open&&(null==(_a2=this._elDialog)||_a2.showModal())}))):this.updateComplete.then((()=>{(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}))}};_handleTriggerSlotChange=new WeakSet,handleTriggerSlotChange_fn=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},_autoPositionCleanupFn=new WeakMap,_isMobileViewport=new WeakMap,_backdropEl=new WeakMap,_handleCancel=new WeakMap,_dispatchUiStateEvent=new WeakMap,_handleCloseButton=new WeakMap,_registerTriggerEvents=new WeakSet,registerTriggerEvents_fn=function(){var _a,_b;null==(_a=this._trigger)||_a.addEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleTriggerKeyDown)),null==(_b=this._trigger)||_b.addEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleTriggerClick))},_unregisterTriggerEvents=new WeakSet,unregisterTriggerEvents_fn=function(){var _a,_b,_c;null==(_a=this._trigger)||_a.removeEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleTriggerKeyDown)),null==(_b=this._trigger)||_b.removeEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleTriggerClick)),null==(_c=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn))||_c.call(this)},_setupTriggerAttributes=new WeakSet,setupTriggerAttributes_fn=function(){var _a;if(this._trigger){null==(_a=this._trigger)||_a.setAttribute("aria-expanded",String(this.open));const focusableNodeNames=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||focusableNodeNames.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const ariaHasPopupAttr=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(ariaHasPopupAttr)&&this._trigger.setAttribute(ariaHasPopupAttr,this.popupRole)}},_registerAutoPositioning=new WeakSet,registerAutoPositioning_fn=function(){if(!this._anchor||!this._elDialog)return;const referenceEl=this._anchor,floatingEl=this._elDialog;referenceEl&&floatingEl&&(!(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_isMobileViewport)||this.disableMobileStyles)&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn)&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_autoPositionCleanupFn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_autoPositionCleanupFn,(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_9__.ll)(referenceEl,floatingEl,(()=>{Object.assign(floatingEl.style,{minWidth:this.calcMinWidth(referenceEl),maxWidth:this.calcMaxWidth(referenceEl),minHeight:this.calcMinHeight(referenceEl),maxHeight:this.calcMaxHeight(referenceEl)}),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_9__.rD)(referenceEl,floatingEl,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then((({x,y})=>Object.assign(floatingEl.style,{left:`${x}px`,top:`${y}px`})))}))))},_handleTriggerKeyDown=new WeakMap,_handleTriggerClick=new WeakMap,_focusFirstSlottedChild=new WeakMap,_handleClickOutside=new WeakMap,GdsPopover.styles=(0,lit__WEBPACK_IMPORTED_MODULE_6__.iz)(popover_styles_default),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"open",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:"popup-role"})],GdsPopover.prototype,"popupRole",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:!1})],GdsPopover.prototype,"triggerRef",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:!1})],GdsPopover.prototype,"anchorRef",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsPopover.prototype,"label",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsPopover.prototype,"placement",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean})],GdsPopover.prototype,"disableMobileStyles",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinWidth",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxWidth",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinHeight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxHeight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean})],GdsPopover.prototype,"nonmodal",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsPopover.prototype,"backdrop",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:!1})],GdsPopover.prototype,"floatingUIMiddleware",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.wk)()],GdsPopover.prototype,"_trigger",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.wk)()],GdsPopover.prototype,"_anchor",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.wk)()],GdsPopover.prototype,"_isVirtKbVisible",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.P)("slot:not([name])")],GdsPopover.prototype,"_elDefaultSlot",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.P)('slot[name="trigger"]')],GdsPopover.prototype,"_elTriggerSlot",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.P)("dialog")],GdsPopover.prototype,"_elDialog",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("triggerRef")],GdsPopover.prototype,"_handleTriggerRefChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("anchorRef")],GdsPopover.prototype,"_handleAnchorRefChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("_trigger")],GdsPopover.prototype,"_handleTriggerChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("_anchor")],GdsPopover.prototype,"_handleAnchorChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("open")],GdsPopover.prototype,"_handleOpenChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("backdrop")],GdsPopover.prototype,"_handleBackdropChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_10__.M)("(max-width: 576px)")],GdsPopover.prototype,"_handleMobileLayout",1),GdsPopover=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-popover"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.cc)()],GdsPopover)},"./dist/libs/core/src/chunks/chunk.LH3DUZRS.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_HMD2XFIL_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.HMD2XFIL.js"),_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),GdsBackdrop=class extends _chunk_HMD2XFIL_js__WEBPACK_IMPORTED_MODULE_0__.j{constructor(){super(...arguments),this.show=!1}render(){return _chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_1__.qy``}};GdsBackdrop.styles=lit__WEBPACK_IMPORTED_MODULE_3__.AH`
    :host {
      display: none;
      position: fixed;
      inset: 0;
      background-color: rgba(0, 0, 0, 0.25);
      width: 100%;
      height: 100%;
    }

    :host([show]) {
      display: block;
    }
  `,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean,reflect:!0})],GdsBackdrop.prototype,"show",2),GdsBackdrop=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_MLXMQIEV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-backdrop")],GdsBackdrop)},"./dist/libs/core/src/chunks/chunk.U53LM7EE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>option_styles_default,z:()=>Focusable});var lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),Focusable=superClass=>class HighlightableElement extends superClass{constructor(){super(...arguments),this.onblur=e=>{this.setAttribute("tabindex","-1"),this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},this.onfocus=e=>{this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))}}focus(options){this.setAttribute("tabindex","0"),super.focus(options)}},option_styles_default=lit__WEBPACK_IMPORTED_MODULE_0__.AH`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-stroke-variant2);
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
    }

    :host([highlighted]) div {
      background-color: var(--gds-sys-color-container-container-shade1);
      color: var(--gds-sys-color-content-content-inverse);
    }

    :host(:hover:not([highlighted])) div {
      background-color: var(--gds-sys-color-container-container-dim1);
    }

    :host(:focus-visible) {
      outline: auto;
      outline-offset: -6px;
      outline-color: currentColor;
      outline-width: 2px;
    }

    :host([aria-hidden='true']) div {
      display: none;
    }

    .checkbox {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 1lh;
      width: auto;
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
            color: var(--gds-sys-color-base-white);
            stroke-width: var(--gds-space-2xs);
          }
        }
      }
    }
  }
`},"./libs/angular/src/lib/shared/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$M:()=>core_element_module.$});var tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs"),common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),Subject=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/Subject.js"),fromEvent=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/fromEvent.js"),interval=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/observable/interval.js"),takeUntil=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/takeUntil.js"),throttle=__webpack_require__("./node_modules/rxjs/dist/esm5/internal/operators/throttle.js");const ON_SCROLL_TOKEN=new core.InjectionToken("ON_SCROLL_TOKEN");let NggOnScrollDirective=class NggOnScrollDirective{constructor(elementRef){this.elementRef=elementRef,this.onScroll$=new Subject.B,this.destroy$=new Subject.B}ngAfterViewInit(){this.elementRef&&(0,fromEvent.R)(this.elementRef?.nativeElement,"scroll").pipe((0,takeUntil.Q)(this.destroy$),(0,throttle.n)((()=>(0,interval.Y)(30)))).subscribe((()=>{this.onScroll$.next(null)}))}ngOnDestroy(){this.destroy$.next(null),this.destroy$.complete()}static{this.ctorParameters=()=>[{type:core.ElementRef}]}};NggOnScrollDirective=(0,tslib_es6.Cg)([(0,core.Directive)({selector:"[nggOnScroll]",providers:[{provide:ON_SCROLL_TOKEN,useFactory:component=>component?.onScroll$,deps:[NggOnScrollDirective]}]}),(0,tslib_es6.Sn)("design:paramtypes",[core.ElementRef])],NggOnScrollDirective);let NggSharedModule=class NggSharedModule{};NggSharedModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[NggOnScrollDirective],imports:[common.CommonModule],exports:[NggOnScrollDirective]})],NggSharedModule);__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.directive.ts");var core_element_module=__webpack_require__("./libs/angular/src/lib/shared/core-element/core-element.module.ts")}}]);
//# sourceMappingURL=4374.ff342331.iframe.bundle.js.map
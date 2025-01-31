"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7624],{"./libs/react/src/lib/context-menu/context-menu.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{tz:()=>ContextMenu,hM:()=>CoreMenuHeading,Dr:()=>MenuItem});var _t,_t2,react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./node_modules/@lit/react/index.js"),chunk_DJJ2ZCTZ=__webpack_require__("./dist/libs/core/src/chunks/chunk.DJJ2ZCTZ.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_4ZH47R3Q=__webpack_require__("./dist/libs/core/src/chunks/chunk.4ZH47R3Q.js"),chunk_LQSWYCMZ=__webpack_require__("./dist/libs/core/src/chunks/chunk.LQSWYCMZ.js"),chunk_QK3R23GV=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),chunk_SEHSDSX2=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var _handleItemClick,handleItemClick_fn,context_menu_styles_default=(0,lit.AH)(_t||(_t=_`
  @layer base, reset, transitional-styles;
  @layer base {
    button {
      display: flex;
      border-width: 0;
      background-color: #ededed;
      border-radius: calc(1px * infinity);
      padding: 0.4rem 0.8rem;
      font-family: inherit;
      cursor: pointer;
      align-items: center;
      gap: 0.5rem;
    }

    button:hover {
      background-color: #dcdcdc;
    }
  }
`)),GdsContextMenu=function(_GdsElement){function GdsContextMenu(){var _this;return(0,classCallCheck.A)(this,GdsContextMenu),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsContextMenu),(0,chunk_SEHSDSX2.VK)(_this,_handleItemClick),_this.open=!1,_this.buttonLabel=(0,lit_localize.ab)("Open context menu"),_this.showLabel=!1,_this.label="",_this.placement="bottom-start",_this}return(0,inherits.A)(GdsContextMenu,_GdsElement),(0,createClass.A)(GdsContextMenu,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsContextMenu,"connectedCallback",this,3)([]),chunk_4ZH47R3Q.nD.instance.apply(this,"gds-context-menu"),this.addEventListener("keydown",(function(e){_this2.open&&"Tab"==e.key&&(e.preventDefault(),_this2.open=!1,_this2.elTriggerBtn.then((function(el){return el.focus()})))}))}},{key:"render",value:function render(){var _a,_b,_c,_this3=this;return(0,chunk_QK3R23GV.qy)(_t2||(_t2=_`<button
        id="trigger"
        class="icon border-0 small ${0}"
        aria-label=${0}
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${0}
      >
        <slot name="trigger">
          ${0}
          <svg width="24" height="24" viewBox="0 0 24 24">
            <path
              d="M14 12C14 13.1042 13.1042 14 12 14C10.8958 14 10 13.1042 10 12C10 10.8958 10.8958 10 12 10C13.1042 10 14 10.8958 14 12ZM19 10C17.8958 10 17 10.8958 17 12C17 13.1042 17.8958 14 19 14C20.1042 14 21 13.1042 21 12C21 10.8958 20.1042 10 19 10ZM5 10C3.89583 10 3 10.8958 3 12C3 13.1042 3.89583 14 5 14C6.10417 14 7 13.1042 7 12C7 10.8958 6.10417 10 5 10Z"
              fill="#353531"
            />
          </svg>
        </slot>
      </button>
      <gds-popover
        id="menu"
        .open=${0}
        .triggerRef=${0}
        .anchorRef=${0}
        .label=${0}
        .placement=${0}
        @gds-ui-state=${0}
      >
        <gds-menu
          aria-label=${0}
          @gds-menu-item-click=${0}
        >
          <slot></slot>
        </gds-menu>
      </gds-popover>`),(0,class_map.H)({highlighted:this.open}),null!=(_a=this.buttonLabel)?_a:this.label,this.open,this.showLabel?null!=(_b=this.buttonLabel)?_b:this.label:lit.s6,this.open,this.elTriggerBtn,this.elTriggerBtn,this.label,this.placement,(function(e){return _this3.open=e.detail.open}),null!=(_c=this.label)?_c:this.buttonLabel,(0,chunk_SEHSDSX2.jq)(this,_handleItemClick,handleItemClick_fn))}}])}(chunk_LQSWYCMZ.j);_handleItemClick=new WeakSet,handleItemClick_fn=function handleItemClick_fn(){this.open=!1},GdsContextMenu.styles=[context_menu_styles_default],GdsContextMenu.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsContextMenu.prototype,"open",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({attribute:"button-label"})],GdsContextMenu.prototype,"buttonLabel",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({attribute:"show-label",type:Boolean})],GdsContextMenu.prototype,"showLabel",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"label",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"placement",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.nJ)("#trigger")],GdsContextMenu.prototype,"elTriggerBtn",2),GdsContextMenu=(0,chunk_SEHSDSX2.Cc)([(0,chunk_QK3R23GV.Y$)("gds-context-menu"),(0,lit_localize.cc)()],GdsContextMenu);var chunk_3FDFFKP3_t,_slotRef,chunk_E62NOHQC=__webpack_require__("./dist/libs/core/src/chunks/chunk.E62NOHQC.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),chunk_3FDFFKP3_=function _(t){return t};function chunk_3FDFFKP3_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_3FDFFKP3_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsMenu=function(_GdsElement){function GdsMenu(){var _this;return(0,classCallCheck.A)(this,GdsMenu),_this=function chunk_3FDFFKP3_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,chunk_3FDFFKP3_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsMenu),(0,chunk_SEHSDSX2.VK)(_this,_slotRef,(0,ref._)()),new chunk_E62NOHQC.y(_this),_this}return(0,inherits.A)(GdsMenu,_GdsElement),(0,createClass.A)(GdsMenu,[{key:"connectedCallback",value:function connectedCallback(){!function chunk_3FDFFKP3_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsMenu,"connectedCallback",this,3)([]),this.setAttribute("role","menu"),chunk_4ZH47R3Q.nD.instance.apply(this,"gds-listbox")}},{key:"navigableItems",get:function get(){return(0,chunk_SEHSDSX2.S7)(this,_slotRef).value&&(0,chunk_E62NOHQC.o)((0,chunk_SEHSDSX2.S7)(this,_slotRef).value).assignedElements().filter((function(o){return!o.hasAttribute("isplaceholder")&&"gds-menu-item"===o.gdsElementName}))||[]}},{key:"focus",value:function focus(){var _a;null==(_a=this.navigableItems[0])||_a.focus()}},{key:"render",value:function render(){return(0,chunk_QK3R23GV.qy)(chunk_3FDFFKP3_t||(chunk_3FDFFKP3_t=chunk_3FDFFKP3_`<slot ${0}></slot>`),(0,ref.K)((0,chunk_SEHSDSX2.S7)(this,_slotRef)))}}])}(chunk_LQSWYCMZ.j);_slotRef=new WeakMap,GdsMenu=(0,chunk_SEHSDSX2.Cc)([(0,chunk_QK3R23GV.Y$)("gds-menu")],GdsMenu);var chunk_WKIWEQFN_t,_handleOnClick,chunk_ZRKILGXZ=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZRKILGXZ.js"),chunk_WKIWEQFN_=function _(t){return t};function chunk_WKIWEQFN_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(chunk_WKIWEQFN_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsMenuItem=function(_Focusable){function GdsMenuItem(){var _this;return(0,classCallCheck.A)(this,GdsMenuItem),_this=function chunk_WKIWEQFN_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,chunk_WKIWEQFN_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsMenuItem,arguments),(0,chunk_SEHSDSX2.VK)(_this,_handleOnClick,(function(){_this.dispatchEvent(new CustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0}))})),_this}return(0,inherits.A)(GdsMenuItem,_Focusable),(0,createClass.A)(GdsMenuItem,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;!function chunk_WKIWEQFN_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsMenuItem,"connectedCallback",this,3)([]),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),_this2.click())})),this.addEventListener("click",(0,chunk_SEHSDSX2.S7)(this,_handleOnClick)),chunk_4ZH47R3Q.nD.instance.apply(this,"gds-option")}},{key:"render",value:function render(){return(0,chunk_QK3R23GV.qy)(chunk_WKIWEQFN_t||(chunk_WKIWEQFN_t=chunk_WKIWEQFN_`<div><slot></slot></div>`))}}])}((0,chunk_ZRKILGXZ.z)(chunk_LQSWYCMZ.j));_handleOnClick=new WeakMap,GdsMenuItem.styles=[chunk_ZRKILGXZ.l],GdsMenuItem=(0,chunk_SEHSDSX2.Cc)([(0,chunk_QK3R23GV.Y$)("gds-menu-item")],GdsMenuItem);__webpack_require__("./dist/libs/core/src/chunks/chunk.QXN5BMRZ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.C7PCMQ72.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.AL4NHKAP.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.K6WND5FJ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.LJAKXU3K.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IYBYOHJ2.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.WVKINQII.js");var scoping=__webpack_require__("./dist/libs/core/src/scoping.js");(0,__webpack_require__("./dist/libs/core/src/transitional-styles.js").Y)();var ContextMenu=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-context-menu"),elementClass:GdsContextMenu,events:{onMenuItemClick:"gds-menu-item-click",onUiStateChange:"gds-ui-state"},react}),MenuItem=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-menu-item"),elementClass:GdsMenuItem,events:{onMenuItemClick:"gds-menu-item-click"},react}),CoreMenuHeading=(0,_lit_react.a)({tagName:(0,scoping.Eq)("gds-menu-heading"),elementClass:chunk_DJJ2ZCTZ.A,react})},"./dist/libs/core/src/chunks/chunk.DJJ2ZCTZ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>GdsMenuHeading});var _t,_t2,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunk_4ZH47R3Q_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.4ZH47R3Q.js"),_chunk_LQSWYCMZ_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.LQSWYCMZ.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/index.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var menu_heading_styles_default=(0,lit__WEBPACK_IMPORTED_MODULE_7__.AH)(_t||(_t=_`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      cursor: pointer;
      color: var(--gds-color-l3-content-secondary);
      background-color: var(--gds-color-l3-background-secondary);
      font-size: var(--gds-text-size-label-input-medium);
      line-height: var(--gds-text-line-height-label-input-medium);
      padding-inline: var(--gds-space-m);
      padding-block: var(--gds-space-xs);
    }
  }
`)),GdsMenuHeading=function(_GdsElement){function GdsMenuHeading(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_8__.A)(this,GdsMenuHeading),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,GdsMenuHeading,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_9__.A)(GdsMenuHeading,_GdsElement),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_10__.A)(GdsMenuHeading,[{key:"connectedCallback",value:function connectedCallback(){var _this=this;!function _superPropGet(t,o,e,r){var p=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsMenuHeading,"connectedCallback",this,3)([]),this.setAttribute("inert","true"),this.updateComplete.then((function(){return _chunk_4ZH47R3Q_js__WEBPACK_IMPORTED_MODULE_3__.nD.instance.apply(_this,"gds-menu-heading")}))}},{key:"render",value:function render(){return(0,lit__WEBPACK_IMPORTED_MODULE_7__.qy)(_t2||(_t2=_`<slot></slot>`))}}])}(_chunk_LQSWYCMZ_js__WEBPACK_IMPORTED_MODULE_4__.j);GdsMenuHeading.styles=menu_heading_styles_default,GdsMenuHeading=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.Y$)("gds-menu-heading")],GdsMenuHeading)},"./dist/libs/core/src/chunks/chunk.E62NOHQC.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>unwrap,y:()=>ListboxKbNavController});var _keyboardNavigationHandler,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),ListboxKbNavController=function(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.A)((function ListboxKbNavController(host){var _this=this;(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,ListboxKbNavController),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_keyboardNavigationHandler,(function(e){var _a,_b,targetItem=e.target;if(_this.host.navigableItems.includes(targetItem)){var handled=!1;if("ArrowDown"===e.key){var nextItemIndex=_this.host.navigableItems.indexOf(targetItem)+1,nextItem=_this.host.navigableItems[nextItemIndex];null==nextItem||nextItem.focus(),handled=!0}else if("ArrowUp"===e.key){var prevOptionIndex=_this.host.navigableItems.indexOf(targetItem)-1,prevItem=_this.host.navigableItems[prevOptionIndex];null==prevItem||prevItem.focus(),handled=!0}else if("Home"===e.key)null==(_a=_this.host.navigableItems[0])||_a.focus(),handled=!0;else if("End"===e.key)null==(_b=_this.host.navigableItems[_this.host.navigableItems.length-1])||_b.focus(),handled=!0;else{var key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){var firstMatch=_this.host.navigableItems.find((function(el){var _a2,text=null==(_a2=el.textContent)?void 0:_a2.trim().toLowerCase();return null==text?void 0:text.startsWith(key)}));null==firstMatch||firstMatch.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())}})),(this.host=host).addController(this)}),[{key:"hostConnected",value:function hostConnected(){this.host.addEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}},{key:"hostDisconnected",value:function hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}}])}();function unwrap(slotRef){for(var slot=slotRef;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/chunks/chunk.ZRKILGXZ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{l:()=>option_styles_default,z:()=>Focusable});var _t,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),lit__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/index.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var Focusable=function Focusable(superClass){var HighlightableElement=function(_superClass){function HighlightableElement(){var _this;return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_3__.A)(this,HighlightableElement),(_this=function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,HighlightableElement,arguments)).onblur=function(e){_this.setAttribute("tabindex","-1"),_this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},_this.onfocus=function(e){_this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},_this}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_4__.A)(HighlightableElement,_superClass),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_5__.A)(HighlightableElement,[{key:"focus",value:function focus(options){this.setAttribute("tabindex","0"),function _superPropGet(t,o,e,r){var p=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(HighlightableElement,"focus",this,3)([options])}}])}(superClass);return HighlightableElement},option_styles_default=(0,lit__WEBPACK_IMPORTED_MODULE_6__.AH)(_t||(_t=(function _(t){return t})`
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

    :host([aria-hidden='true']) {
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
`))},"./dist/libs/core/src/transitional-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>_chunks_chunk_4ZH47R3Q_js__WEBPACK_IMPORTED_MODULE_0__.YT});var _chunks_chunk_4ZH47R3Q_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.4ZH47R3Q.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.LJAKXU3K.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.IYBYOHJ2.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.WVKINQII.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js")}}]);
//# sourceMappingURL=7624.e39cd3c6.iframe.bundle.js.map
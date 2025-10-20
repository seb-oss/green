(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3383],{"./dist/libs/core/src/components/alert/alert.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>GdsAlert});var _t,alert_component_t,_t2,_t3,_t4,_t5,_t6,_t7,_timeoutId,_progressIntervalId,_alertRef,_observer,_isVisible,_remaining,_lastTick,_timerController,_GdsAlert_instances,setupObserver_fn,disconnectObserver_fn,startTicking_fn,resumeTimer_fn,pauseTimer_fn,clearTimers_fn,dismiss_fn,handleButtonClick_fn,handleKeyDown_fn,config_get,renderIcon_fn,renderMessage_fn,renderActionButton_fn,renderCloseButton_fn,renderProgressBar_fn,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),static_html=__webpack_require__("./node_modules/lit/static-html.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),card_component=__webpack_require__("./dist/libs/core/src/components/card/card.component.js"),circle_check_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/circle-check.component.js"),circle_info_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/circle-info.component.js"),cross_small_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/cross-small.component.js"),triangle_exclamation_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/triangle-exclamation.component.js"),alert_styles_default=(0,lit.AH)(_t||(_t=(function _(t){return t})`
  :host {
    box-sizing: border-box;
    display: block;
    max-width: 100%;
    container-type: inline-size;
  }

  #alert-message {
    --grid-areas: 'wrapper cta close';

    &.timeout {
      --grid-areas: 'wrapper cta close' 'progress-bar progress-bar progress-bar';
    }

    display: grid;
    grid-template-columns: 1fr auto auto;
    grid-template-areas: var(--grid-areas);
    min-width: fit-content;
    position: relative;
    transition:
      opacity 0.3s ease-out,
      transform 0.3s ease-out;
    gap: 0;
  }

  /* Animation */
  @media (prefers-reduced-motion: no-preference) {
    #alert-message {
      animation: slideIn 0.3s ease-out;
    }
  }

  #alert-message.dismissing {
    opacity: 0;
    transform: translateY(-1rem);
    pointer-events: none;
  }

  @media (prefers-reduced-motion: reduce) {
    #alert-message.dismissing {
      transform: none;
    }
  }

  @keyframes slideIn {
    from {
      opacity: 0;
      transform: translateY(-0.5rem);
    }
  }

  /* Focus styles */
  #alert-message:focus {
    outline: 2px solid var(--gds-focus-color, #000);
    outline-offset: 2px;
  }

  .wrapper {
    grid-area: wrapper;
    display: flex;
    gap: var(--gds-sys-space-xs);

    .message {
      max-width: 80ch;
    }
  }

  .dismissible .wrapper {
    margin-top: var(--gds-sys-space-3xs);
  }

  .has-action {
    padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
  }

  .has-action .wrapper {
    margin-top: var(--gds-sys-space-xs);
  }

  .has-action.dismissible .close {
    margin-top: var(--gds-sys-space-3xs);
  }

  .message {
    font: var(--gds-sys-text-body-regular-m);
    display: flex;
    justify-content: flex-start;
    text-align: left;
    margin-inline-end: auto;
  }

  .message-text {
    display: inline;
    white-space: normal;
    padding-inline-end: var(--gds-sys-space-xs);
  }

  .message-text ::slotted(strong) {
    font-weight: var(--gds-sys-text-weight-book, 450);
  }

  .progress-container {
    --_fill-color: var(--gds-sys-color-border-strong);
    --_container-color: var(--gds-sys-color-l3-information-03);

    &.notice {
      --_fill-color: var(--gds-sys-color-content-notice-01);
      --_container-color: var(--gds-sys-color-l3-notice-03);
    }

    &.warning {
      --_fill-color: var(--gds-sys-color-content-warning-01);
      --_container-color: var(--gds-sys-color-l3-warning-03);
    }

    &.positive {
      --_fill-color: var(--gds-sys-color-content-positive-01);
      --_container-color: var(--gds-sys-color-l3-positive-03);
    }

    &.negative {
      --_fill-color: var(--gds-sys-color-content-negative-01);
      --_container-color: var(--gds-sys-color-l3-negative-03);
    }

    grid-area: progress-bar;
    margin-top: var(--gds-sys-space-m);
    inset: auto var(--gds-sys-space-m) var(--gds-sys-space-m);
    height: 0.25rem;
    background: var(--_container-color);
    border-radius: var(--gds-sys-radius-max);
    overflow: hidden;
  }

  .timer-progress {
    height: 100%;
    transition: width 0.1s linear;
    background: var(--_fill-color);
    will-change: width;
  }

  @media (prefers-reduced-motion: reduce) {
    .timer-progress {
      transition: none;
    }
  }

  @container (max-width: 600px) {
    #alert-message {
      --grid-areas: 'wrapper close' 'cta cta';

      &.timeout {
        --grid-areas: 'wrapper close' 'progress-bar progress-bar';
      }

      .action {
        grid-area: cta;
        margin-top: var(--gds-sys-space-xs);
      }
    }
  }

  /* Medium: inline */
  @container (min-width: 601px) and (max-width: 1024px) {
    #alert-message {
      .close {
        margin-left: var(--gds-sys-space-xs);
      }
    }
  }

  /* Large: centered */
  @container (min-width: 1025px) {
    #alert-message {
      grid-template-columns: auto auto min-content;

      &.dismissible:not(.has-action) {
        grid-template-columns: 1fr auto;
      }

      &.dismissible:not(.has-action) .wrapper {
        margin-inline-start: 0;
      }

      .close {
        margin-left: var(--gds-sys-space-xs);
      }

      .icon {
        margin-inline-start: auto;
      }

      .wrapper {
        margin-left: auto;
      }

      .action {
        margin-right: auto;
      }
    }
  }

  /* High contrast mode support */
  @media (prefers-contrast: high) {
    .icon {
      forced-color-adjust: none;
    }
  }
`)),alert_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var VARIANT_CONFIG={positive:{icon:"circle-check",card:"positive"},warning:{icon:"circle-info",card:"warning"},negative:{icon:"triangle-exclamation",card:"negative"},information:{icon:"circle-info",card:"information"},notice:{icon:"circle-info",card:"notice"}},GdsAlert=function(_GdsElement){function GdsAlert(){var _this;return(0,classCallCheck.A)(this,GdsAlert),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsAlert),(0,chunk_QU3DSPNU.VK)(_this,_GdsAlert_instances),_this.variant="information",_this.label="",_this.role="alert",_this.dismissible=!1,_this.timeout=0,_this.buttonLabel="",_this._progress=100,_this._isClosing=!1,_this._cardHidden=!1,(0,chunk_QU3DSPNU.VK)(_this,_timeoutId),(0,chunk_QU3DSPNU.VK)(_this,_progressIntervalId),(0,chunk_QU3DSPNU.VK)(_this,_alertRef,(0,ref._)()),(0,chunk_QU3DSPNU.VK)(_this,_observer),(0,chunk_QU3DSPNU.VK)(_this,_isVisible,!1),(0,chunk_QU3DSPNU.VK)(_this,_remaining,0),(0,chunk_QU3DSPNU.VK)(_this,_lastTick,0),(0,chunk_QU3DSPNU.VK)(_this,_timerController,{hostConnected:function hostConnected(){_this.timeout>0&&(0,chunk_QU3DSPNU.jq)(_this,_GdsAlert_instances,setupObserver_fn).call(_this)},hostDisconnected:function hostDisconnected(){(0,chunk_QU3DSPNU.jq)(_this,_GdsAlert_instances,disconnectObserver_fn).call(_this),(0,chunk_QU3DSPNU.jq)(_this,_GdsAlert_instances,clearTimers_fn).call(_this)}}),_this.addController((0,chunk_QU3DSPNU.S7)(_this,_timerController)),_this}return(0,inherits.A)(GdsAlert,_GdsElement),(0,createClass.A)(GdsAlert,[{key:"updated",value:function updated(changed){changed.has("timeout")&&((0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,disconnectObserver_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,clearTimers_fn).call(this),(0,chunk_QU3DSPNU.OV)(this,_remaining,Math.max(0,this.timeout)),this._progress=100,this.timeout>0&&(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,setupObserver_fn).call(this))}},{key:"render",value:function render(){if(this._cardHidden)return lit.s6;var classes={dismissing:this._isClosing,dismissible:this.dismissible,"has-action":this.buttonLabel,timeout:this.timeout>0};return(0,custom_element_scoping.qy)(alert_component_t||(alert_component_t=alert_component_`
      <gds-card
        ${0}
        role=${0}
        aria-label=${0}
        variant=${0}
        class=${0}
        @keydown=${0}
        id="alert-message"
        padding="m"
      >
        <div class="wrapper">
          ${0} ${0}
        </div>
        ${0}
        ${0} ${0}
      </gds-card>
    `),(0,ref.K)((0,chunk_QU3DSPNU.S7)(this,_alertRef)),this.role,this.label,(0,chunk_QU3DSPNU.S7)(this,_GdsAlert_instances,config_get).card,(0,class_map.H)(classes),(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,handleKeyDown_fn),(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,renderIcon_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,renderMessage_fn).call(this),!this.timeout&&this.buttonLabel?(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,renderActionButton_fn).call(this,this.buttonLabel):lit.s6,(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,renderCloseButton_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,renderProgressBar_fn).call(this))}}])}(gds_element.j);_timeoutId=new WeakMap,_progressIntervalId=new WeakMap,_alertRef=new WeakMap,_observer=new WeakMap,_isVisible=new WeakMap,_remaining=new WeakMap,_lastTick=new WeakMap,_timerController=new WeakMap,_GdsAlert_instances=new WeakSet,setupObserver_fn=function setupObserver_fn(){var _this2=this;(0,chunk_QU3DSPNU.S7)(this,_observer)||((0,chunk_QU3DSPNU.S7)(this,_remaining)||(0,chunk_QU3DSPNU.OV)(this,_remaining,Math.max(0,this.timeout)),(0,chunk_QU3DSPNU.OV)(this,_observer,new IntersectionObserver((function(entries){var _entry$intersectionRa,entry=entries[0],nowVisible=(null!=(_entry$intersectionRa=null==entry?void 0:entry.intersectionRatio)?_entry$intersectionRa:0)>=.1;nowVisible&&!(0,chunk_QU3DSPNU.S7)(_this2,_isVisible)?((0,chunk_QU3DSPNU.OV)(_this2,_isVisible,!0),(0,chunk_QU3DSPNU.jq)(_this2,_GdsAlert_instances,resumeTimer_fn).call(_this2)):!nowVisible&&(0,chunk_QU3DSPNU.S7)(_this2,_isVisible)&&((0,chunk_QU3DSPNU.OV)(_this2,_isVisible,!1),(0,chunk_QU3DSPNU.jq)(_this2,_GdsAlert_instances,pauseTimer_fn).call(_this2))}),{root:null,threshold:[0,.1,1]})),(0,chunk_QU3DSPNU.S7)(this,_observer).observe(this))},disconnectObserver_fn=function disconnectObserver_fn(){(0,chunk_QU3DSPNU.S7)(this,_observer)&&((0,chunk_QU3DSPNU.S7)(this,_observer).disconnect(),(0,chunk_QU3DSPNU.OV)(this,_observer,void 0)),(0,chunk_QU3DSPNU.OV)(this,_isVisible,!1)},startTicking_fn=function startTicking_fn(){var _this3=this;(0,chunk_QU3DSPNU.OV)(this,_lastTick,Date.now()),(0,chunk_QU3DSPNU.OV)(this,_progressIntervalId,window.setInterval((function(){var now=Date.now(),dt=now-(0,chunk_QU3DSPNU.S7)(_this3,_lastTick);(0,chunk_QU3DSPNU.OV)(_this3,_lastTick,now),(0,chunk_QU3DSPNU.OV)(_this3,_remaining,Math.max(0,(0,chunk_QU3DSPNU.S7)(_this3,_remaining)-dt)),_this3._progress=_this3.timeout>0?Math.max(0,(0,chunk_QU3DSPNU.S7)(_this3,_remaining)/_this3.timeout*100):0,(0,chunk_QU3DSPNU.S7)(_this3,_remaining)<=0&&(0,chunk_QU3DSPNU.jq)(_this3,_GdsAlert_instances,dismiss_fn).call(_this3,"timeout")}),100))},resumeTimer_fn=function resumeTimer_fn(){(0,chunk_QU3DSPNU.S7)(this,_remaining)<=0||(0,chunk_QU3DSPNU.S7)(this,_timeoutId)||(0,chunk_QU3DSPNU.S7)(this,_progressIntervalId)||(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,startTicking_fn).call(this)},pauseTimer_fn=function pauseTimer_fn(){(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,clearTimers_fn).call(this)},clearTimers_fn=function clearTimers_fn(){clearTimeout((0,chunk_QU3DSPNU.S7)(this,_timeoutId)),clearInterval((0,chunk_QU3DSPNU.S7)(this,_progressIntervalId)),(0,chunk_QU3DSPNU.OV)(this,_timeoutId,(0,chunk_QU3DSPNU.OV)(this,_progressIntervalId,void 0))},dismiss_fn=function(){var _ref=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(source){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return this._isClosing=!0,(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,disconnectObserver_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,clearTimers_fn).call(this),_context.next=5,this.updateComplete;case 5:return this.dispatchCustomEvent("gds-close",{detail:{source},bubbles:!0,composed:!0}),_context.next=8,new Promise((function(r){return setTimeout(r,300)}));case 8:this._cardHidden=!0;case 9:case"end":return _context.stop()}}),_callee,this)})));return function dismiss_fn(_x){return _ref.apply(this,arguments)}}(),handleButtonClick_fn=function handleButtonClick_fn(e){this.dispatchCustomEvent("gds-action",{detail:{source:"button",event:e},bubbles:!0,composed:!0})},handleKeyDown_fn=function handleKeyDown_fn(e){"Escape"===e.key&&this.dismissible&&(e.preventDefault(),(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,dismiss_fn).call(this,"escape"))},config_get=function config_get(){return VARIANT_CONFIG[this.variant]},renderIcon_fn=function renderIcon_fn(){var icon="gds-icon-".concat((0,chunk_QU3DSPNU.S7)(this,_GdsAlert_instances,config_get).icon);return(0,custom_element_scoping.qy)(_t2||(_t2=alert_component_`${0}`),(0,static_html.qy)(_t3||(_t3=alert_component_`<${0} class="icon" solid aria-hidden="true" size="24px"></${0}>`),(0,static_html.Bk)((0,custom_element_scoping.Eq)(icon)),(0,static_html.Bk)((0,custom_element_scoping.Eq)(icon))))},renderMessage_fn=function renderMessage_fn(){return(0,custom_element_scoping.qy)(_t4||(_t4=alert_component_`<div class="message">
      <span class="message-text">
        <slot></slot>
      </span>
    </div>`))},renderActionButton_fn=function renderActionButton_fn(label){return(0,custom_element_scoping.qy)(_t5||(_t5=alert_component_`
      <gds-button
        class="action"
        .variant=${0}
        rank="secondary"
        @click=${0}
        aria-describedby="alert-message"
      >
        ${0}
      </gds-button>
    `),this.variant,(0,chunk_QU3DSPNU.jq)(this,_GdsAlert_instances,handleButtonClick_fn),label.trim())},renderCloseButton_fn=function renderCloseButton_fn(){var _this4=this;return this.dismissible?(0,custom_element_scoping.qy)(_t6||(_t6=alert_component_`
          <gds-button
            class="close"
            .variant=${0}
            rank="secondary"
            size="small"
            aria-label=${0}
            @click=${0}
          >
            <gds-icon-cross-small size="20px"></gds-icon-cross-small>
          </gds-button>
        `),this.variant,(0,lit_localize.ab)("Dismiss alert"),(function(){return(0,chunk_QU3DSPNU.jq)(_this4,_GdsAlert_instances,dismiss_fn).call(_this4,"close")})):lit.s6},renderProgressBar_fn=function renderProgressBar_fn(){return this.timeout>0?(0,custom_element_scoping.qy)(_t7||(_t7=alert_component_`
          <div
            class=${0}
            role="timer"
            aria-label=${0}
            aria-valuenow=${0}
            aria-valuemin="0"
            aria-valuemax="100"
          >
            <div class="timer-progress" style="width: ${0}%"></div>
          </div>
        `),(0,class_map.H)((0,defineProperty.A)({"progress-container":!0},this.variant,!0)),(0,lit_localize.ab)("Auto-dismiss timer"),this._progress,this._progress):lit.s6},GdsAlert.styles=[tokens_style.LU,alert_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,reflect:!0})],GdsAlert.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],GdsAlert.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,reflect:!0})],GdsAlert.prototype,"role",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsAlert.prototype,"dismissible",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsAlert.prototype,"timeout",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,attribute:"button-label"})],GdsAlert.prototype,"buttonLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsAlert.prototype,"_progress",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsAlert.prototype,"_isClosing",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsAlert.prototype,"_cardHidden",2),GdsAlert=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-alert",{dependsOn:[button_component.t,card_component.z,circle_check_component.i,triangle_exclamation_component.f,circle_info_component.w,cross_small_component.r]}),(0,lit_localize.cc)()],GdsAlert)},"./dist/libs/core/src/components/context-menu/context-menu.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{Hx:()=>GdsContextMenu});var _t,_slotRef,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),menu_item_component=__webpack_require__("./dist/libs/core/src/primitives/menu/menu-item.component.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),listbox_kb_nav_controller=__webpack_require__("./dist/libs/core/src/utils/controllers/listbox-kb-nav-controller.js"),unwrap_slots=__webpack_require__("./dist/libs/core/src/utils/helpers/unwrap-slots.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsMenu=function(_GdsElement){function GdsMenu(){var _this;return(0,classCallCheck.A)(this,GdsMenu),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsMenu),(0,chunk_QU3DSPNU.VK)(_this,_slotRef,(0,ref._)()),new listbox_kb_nav_controller.y(_this),_this}return(0,inherits.A)(GdsMenu,_GdsElement),(0,createClass.A)(GdsMenu,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsMenu,"connectedCallback",this,3)([]),this.setAttribute("role","menu"),transitional_styles.n.instance.apply(this,"gds-listbox")}},{key:"navigableItems",get:function get(){return(0,chunk_QU3DSPNU.S7)(this,_slotRef).value&&(0,unwrap_slots.o)((0,chunk_QU3DSPNU.S7)(this,_slotRef).value).assignedElements().filter((function(o){return!o.hasAttribute("isplaceholder")&&"gds-menu-item"===o.gdsElementName}))||[]}},{key:"focus",value:function focus(){var _this$navigableItems$;null==(_this$navigableItems$=this.navigableItems[0])||_this$navigableItems$.focus()}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(_t||(_t=_`<slot ${0}></slot>`),(0,ref.K)((0,chunk_QU3DSPNU.S7)(this,_slotRef)))}}])}(gds_element.j);_slotRef=new WeakMap,GdsMenu=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-menu",{dependsOn:[menu_item_component.T]})],GdsMenu);var tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),dot_grid_one_horizontal_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/dot-grid-one-horizontal.component.js");dot_grid_one_horizontal_component.z.define();var context_menu_component_t,_t2,_t3,_t4,_GdsContextMenu_instances,handleSlotChange_fn,_renderPopover,handleItemClick_fn,popover_component=__webpack_require__("./dist/libs/core/src/components/popover/popover.component.js"),context_menu_component_=function _(t){return t};function context_menu_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(context_menu_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsContextMenu=function(_withMarginProps){function GdsContextMenu(){var _this;return(0,classCallCheck.A)(this,GdsContextMenu),_this=function context_menu_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,context_menu_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsContextMenu,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsContextMenu_instances),_this.open=!1,_this.buttonLabel=(0,lit_localize.ab)("Open context menu"),_this.showLabel=!1,_this.label="",_this.placement="bottom-start",(0,chunk_QU3DSPNU.VK)(_this,_renderPopover,(function(){var _this$label;return(0,custom_element_scoping.qy)(context_menu_component_t||(context_menu_component_t=context_menu_component_`<gds-popover
      id="menu"
      autofocus
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
    </gds-popover>`),_this.open,_this.elTriggerBtn,_this.elTriggerBtn,_this.label,_this.placement,(function(e){return _this.open=e.detail.open}),null!=(_this$label=_this.label)?_this$label:_this.buttonLabel,(0,chunk_QU3DSPNU.jq)(_this,_GdsContextMenu_instances,handleItemClick_fn))})),_this}return(0,inherits.A)(GdsContextMenu,_withMarginProps),(0,createClass.A)(GdsContextMenu,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;!function context_menu_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsContextMenu,"connectedCallback",this,3)([]),transitional_styles.n.instance.apply(this,"gds-context-menu"),(0,chunk_QU3DSPNU.jq)(this,_GdsContextMenu_instances,handleSlotChange_fn).call(this),this.addEventListener("keydown",(function(e){_this2.open&&"Tab"==e.key&&(e.preventDefault(),_this2.open=!1,_this2.elTriggerBtn.then((function(el){return el.focus()})))}))}},{key:"render",value:function render(){var _this3=this;return(0,custom_element_scoping.qy)(_t2||(_t2=context_menu_component_`<gds-button
        .rank=${0}
        id="trigger"
        aria-haspopup="menu"
        aria-controls="menu"
        aria-expanded=${0}
        label=${0}
        @click=${0}
      >
        ${0}
      </gds-button>
      ${0}`),"secondary",this.open,this.buttonLabel,(function(){return _this3.open=!0}),this.showLabel?(0,custom_element_scoping.qy)(_t3||(_t3=context_menu_component_`<slot
                name="icon"
                slot="lead"
                @slotchange=${0}
              ></slot
              >${0}`),(0,chunk_QU3DSPNU.jq)(this,_GdsContextMenu_instances,handleSlotChange_fn),this.buttonLabel):(0,custom_element_scoping.qy)(_t4||(_t4=context_menu_component_`<slot
              name="icon"
              @slotchange=${0}
            ></slot>`),(0,chunk_QU3DSPNU.jq)(this,_GdsContextMenu_instances,handleSlotChange_fn)),(0,when.z)(this.open,(0,chunk_QU3DSPNU.S7)(this,_renderPopover)))}}])}((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(gds_element.j)));_GdsContextMenu_instances=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(){var _this4=this;this.elIconSlot.then((function(el){if(!el.assignedNodes({flatten:!0}).some((function(node){return node instanceof Element&&node.tagName.toLowerCase().startsWith("gds-icon")}))){var defaultIcon=document.createElement((0,custom_element_scoping.Eq)("gds-icon-dot-grid-one-horizontal"));el.appendChild(defaultIcon),_this4.requestUpdate()}}))},_renderPopover=new WeakMap,handleItemClick_fn=function handleItemClick_fn(){this.open=!1},GdsContextMenu.styles=[tokens_style.LU],GdsContextMenu.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsContextMenu.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"button-label"})],GdsContextMenu.prototype,"buttonLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-label",type:Boolean})],GdsContextMenu.prototype,"showLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsContextMenu.prototype,"placement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#trigger")],GdsContextMenu.prototype,"elTriggerBtn",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)('slot[name="icon"]')],GdsContextMenu.prototype,"elIconSlot",2),GdsContextMenu=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-context-menu",{dependsOn:[menu_item_component.T,GdsMenu,popover_component.E,button_component.t,dot_grid_one_horizontal_component.z]}),(0,lit_localize.cc)()],GdsContextMenu)},"./dist/libs/core/src/components/filter-chips/filter-chip/filter-chip.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{x:()=>GdsFilterChip});var _t,filter_chip_component_t,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),checkmark_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/checkmark.component.js"),styles=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
  @layer base, reset, transitional-styles;
  @layer base {
    .icon {
      width: 1rem;
    }
  }
`)),filter_chip_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsFilterChip=function(_GdsElement){function GdsFilterChip(){var _this;return(0,classCallCheck.A)(this,GdsFilterChip),(_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFilterChip,arguments)).selected=!1,_this.size="large",_this}return(0,inherits.A)(GdsFilterChip,_GdsElement),(0,createClass.A)(GdsFilterChip,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFilterChip,"connectedCallback",this,3)([]),this.setAttribute("role","none"),transitional_styles.n.instance.apply(this,"gds-filter-chip")}},{key:"render",value:function render(){var btnClasses={"btn-p":!this.selected};return(0,custom_element_scoping.qy)(filter_chip_component_t||(filter_chip_component_t=filter_chip_component_`<gds-button
      class="btn"
      .size=${0}
      .rank=${0}
      variant=${0}
      gds-role="option"
      gds-aria-selected=${0}
    >
      <span class=${0}><slot></slot></span>
      <gds-icon-checkmark
        slot="trail"
        style="display: ${0}"
        size="1rem"
        class="icon"
      ></gds-icon-checkmark>
    </gds-button>`),"large"===this.size?"medium":"small",this.selected?"primary":"secondary",this._isUsingTransitionalStyles?"ghost":"default",this.selected,(0,class_map.H)(btnClasses),this.selected?"contents":"none")}}])}(gds_element.j);GdsFilterChip.styles=[styles],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0,type:Boolean})],GdsFilterChip.prototype,"selected",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFilterChip.prototype,"value",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0,type:String})],GdsFilterChip.prototype,"size",2),GdsFilterChip=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-filter-chip",{dependsOn:[button_component.t,checkmark_component.V]})],GdsFilterChip)},"./dist/libs/core/src/components/filter-chips/filter-chips.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{A:()=>GdsFilterChips});var _t,filter_chips_component_t,_handleChipClick,_collapseThreshold,_collapsedAt,_GdsFilterChips_instances,getChipHeight_fn,handleSlotChange_fn,toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),resize_observer=__webpack_require__("./dist/libs/core/src/utils/decorators/resize-observer.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),attribute_converters=__webpack_require__("./dist/libs/core/src/utils/helpers/attribute-converters.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js"),filter_chip_component=__webpack_require__("./dist/libs/core/src/components/filter-chips/filter-chip/filter-chip.component.js"),filter_chips_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: inline-block;
      max-width: 100%;
    }

    .chips {
      display: flex;
      flex-wrap: wrap;
      gap: 0.5rem;
    }

    .collapse {
      overflow: auto;
      scroll-snap-type: both mandatory;
      overscroll-behavior-x: contain;
      flex-wrap: nowrap;
      padding-bottom: 0.5rem;
      scrollbar-color: rgba(0, 0, 0, 0.5) transparent;
      scrollbar-width: thin;
    }

    ::slotted(*) {
      scroll-snap-align: start;
      scroll-snap-stop: always;
    }
  }
`)),filter_chips_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsFilterChips=function(_GdsFormControlElemen){function GdsFilterChips(){var _this;return(0,classCallCheck.A)(this,GdsFilterChips),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFilterChips,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsFilterChips_instances),_this.multiple=!1,_this.label="",_this.rowCollapse=!1,_this._collapsed=!1,(0,chunk_QU3DSPNU.VK)(_this,_handleChipClick,(function(event){var clickedChip=_this.chips.find((function(s){return s===event.target||s.contains(event.target)}));clickedChip&&(_this.multiple&&Array.isArray(_this.value)?clickedChip.selected?_this.value=_this.value.filter((function(v){return v!==clickedChip.value})):_this.value=[].concat((0,toConsumableArray.A)(_this.value),[clickedChip.value]):_this.value=clickedChip.value===_this.value?void 0:clickedChip.value,_this.dispatchCustomEvent("change",{detail:{clickedChip,value:_this.value},bubbles:!0,composed:!0}))})),(0,chunk_QU3DSPNU.VK)(_this,_collapseThreshold,3),(0,chunk_QU3DSPNU.VK)(_this,_collapsedAt,0),_this}return(0,inherits.A)(GdsFilterChips,_GdsFormControlElemen),(0,createClass.A)(GdsFilterChips,[{key:"value",get:function get(){return this._internalValue},set:function set(value){this._internalValue=value}},{key:"chips",get:function get(){return this._elSlot?this._elSlot.assignedElements():[]}},{key:"render",value:function render(){var layoutClasses={collapse:this._collapsed};return(0,custom_element_scoping.qy)(filter_chips_component_t||(filter_chips_component_t=filter_chips_component_`<div
      class="chips ${0}"
      role="listbox"
      aria-label=${0}
      aria-multiselectable=${0}
    >
      <slot
        @click=${0}
        @slotchange=${0}
        role="none"
      ></slot>
    </div>`),(0,class_map.H)(layoutClasses),this.label,this.multiple,(0,chunk_QU3DSPNU.S7)(this,_handleChipClick),(0,chunk_QU3DSPNU.jq)(this,_GdsFilterChips_instances,handleSlotChange_fn))}},{key:"focus",value:function focus(options){var _this$chips$;null==(_this$chips$=this.chips[0])||_this$chips$.focus(options)}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){var _this$shadowRoot;return null==(_this$shadowRoot=this.shadowRoot)?void 0:_this$shadowRoot.querySelector("div")}},{key:"_handleResize",value:function _handleResize(){if(this.rowCollapse){var chipHeight=(0,chunk_QU3DSPNU.jq)(this,_GdsFilterChips_instances,getChipHeight_fn).call(this),selfHeight=this.offsetHeight,selfWidth=this.offsetWidth;selfHeight>=chipHeight*(0,chunk_QU3DSPNU.S7)(this,_collapseThreshold)&&(this._collapsed=!0,(0,chunk_QU3DSPNU.OV)(this,_collapsedAt,selfWidth)),selfWidth>(0,chunk_QU3DSPNU.S7)(this,_collapsedAt)&&(this._collapsed=!1)}}},{key:"_updateSelectedFromValue",value:function _updateSelectedFromValue(){var _this2=this;this.multiple&&!Array.isArray(this.value)&&(this.value=[this.value]),!this.multiple&&Array.isArray(this.value)&&(this.value=this.value[0]),this.updateComplete.then((function(){_this2.chips.forEach((function(chip){chip.selected=_this2.multiple?_this2.value.includes(chip.value):_this2.value===chip.value}))}))}}])}(form_control.S);_handleChipClick=new WeakMap,_collapseThreshold=new WeakMap,_collapsedAt=new WeakMap,_GdsFilterChips_instances=new WeakSet,getChipHeight_fn=function getChipHeight_fn(){var _this$chips$2;return(null==(_this$chips$2=this.chips[0])?void 0:_this$chips$2.offsetHeight)||0},handleSlotChange_fn=function handleSlotChange_fn(){if(void 0===this.value)if(this.multiple){var selChipValues=this.chips.filter((function(s){return s.selected})).map((function(s){return s.value}));selChipValues.length&&(this.value=selChipValues)}else{var _this$chips$find,selChipValue=null==(_this$chips$find=this.chips.find((function(s){return s.selected})))?void 0:_this$chips$find.value;selChipValue&&(this.value=selChipValue)}else this._updateSelectedFromValue()},GdsFilterChips.styles=[filter_chips_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({converter:attribute_converters.xj})],GdsFilterChips.prototype,"value",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFilterChips.prototype,"multiple",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFilterChips.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"row-collapse"})],GdsFilterChips.prototype,"rowCollapse",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFilterChips.prototype,"_collapsed",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("slot")],GdsFilterChips.prototype,"_elSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,resize_observer.b)()],GdsFilterChips.prototype,"_handleResize",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],GdsFilterChips.prototype,"_updateSelectedFromValue",1),GdsFilterChips=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-filter-chips",{dependsOn:[filter_chip_component.x]})],GdsFilterChips)},"./dist/libs/core/src/components/grouped-list/grouped-list.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{d:()=>GdsGroupedList});var _t,_t2,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/lit-html/directives/when.js"),_gds_element_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/gds-element.js"),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),_utils_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_list_item_component_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/libs/core/src/components/grouped-list/list-item.component.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsGroupedList=function(_GdsElement){function GdsGroupedList(){var _this;return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__.A)(this,GdsGroupedList),(_this=function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,GdsGroupedList,arguments)).label="",_this}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__.A)(GdsGroupedList,_GdsElement),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__.A)(GdsGroupedList,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsGroupedList,"connectedCallback",this,3)([]),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_8__.n.instance.apply(this,"gds-grouped-list")}},{key:"render",value:function render(){var _this2=this;return(0,_utils_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_9__.qy)(_t||(_t=_`${0}
      <div role="list" aria-labelledby="label">
        <slot></slot>
      </div>`),(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(this.label,(function(){return(0,_utils_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_9__.qy)(_t2||(_t2=_`<div class="gds-list-heading" aria-hidden="true" id="label">
            ${0}
          </div>`),_this2.label)})))}}])}(_gds_element_js__WEBPACK_IMPORTED_MODULE_11__.j);(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)()],GdsGroupedList.prototype,"label",2),GdsGroupedList=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_utils_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_9__.Y$)("gds-grouped-list",{dependsOn:[_list_item_component_js__WEBPACK_IMPORTED_MODULE_12__.s]})],GdsGroupedList)},"./dist/libs/core/src/components/grouped-list/list-item.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{s:()=>GdsListItem});var _t,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_gds_element_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/libs/core/src/gds-element.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsListItem=function(_GdsElement){function GdsListItem(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,GdsListItem),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,GdsListItem,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(GdsListItem,_GdsElement),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(GdsListItem,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsListItem,"connectedCallback",this,3)([]),this.setAttribute("role","listitem")}},{key:"render",value:function render(){return(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.qy)(_t||(_t=_`<slot></slot>`))}}])}(_gds_element_js__WEBPACK_IMPORTED_MODULE_8__.j);GdsListItem=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-list-item")],GdsListItem)},"./dist/libs/core/src/generated/react/alert/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{F:()=>GdsAlert});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var _utils_react_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/utils/react.js"),_components_alert_alert_component_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/components/alert/alert.component.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),GdsAlert=function GdsAlert(props){_components_alert_alert_component_js__WEBPACK_IMPORTED_MODULE_2__.F.define();var JSXElement=(0,_utils_react_js__WEBPACK_IMPORTED_MODULE_3__.p)("gds-alert"),propsWithClass=Object.assign({},props,{class:props.className});return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(JSXElement,propsWithClass)};GdsAlert.__docgenInfo={description:"",methods:[],displayName:"GdsAlert"}},"./dist/libs/core/src/generated/react/div/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{o:()=>GdsDiv});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var _utils_react_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/utils/react.js"),_components_div_div_component_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/components/div/div.component.js"),react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react/index.js"),GdsDiv=function GdsDiv(props){_components_div_div_component_js__WEBPACK_IMPORTED_MODULE_2__.o.define();var JSXElement=(0,_utils_react_js__WEBPACK_IMPORTED_MODULE_3__.p)("gds-div"),propsWithClass=Object.assign({},props,{class:props.className});return(0,react__WEBPACK_IMPORTED_MODULE_1__.createElement)(JSXElement,propsWithClass)};GdsDiv.__docgenInfo={description:"",methods:[],displayName:"GdsDiv"}},"./dist/libs/core/src/generated/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{GdsAlert:()=>react_alert.F,GdsBackdrop:()=>GdsBackdrop,GdsBadge:()=>GdsBadge,GdsBlur:()=>GdsBlur,GdsBreadcrumb:()=>GdsBreadcrumb,GdsBreadcrumbs:()=>GdsBreadcrumbs,GdsButton:()=>GdsButton,GdsCalendar:()=>GdsCalendar,GdsCard:()=>GdsCard,GdsCardLinked:()=>GdsCardLinked,GdsCardPattern01:()=>GdsCardPattern01,GdsCheckbox:()=>GdsCheckbox,GdsCheckboxGroup:()=>GdsCheckboxGroup,GdsCoachmark:()=>GdsCoachmark,GdsContextMenu:()=>GdsContextMenu,GdsDatepicker:()=>GdsDatepicker,GdsDetails:()=>GdsDetails,GdsDialog:()=>GdsDialog,GdsDiv:()=>div.o,GdsDivider:()=>GdsDivider,GdsDropdown:()=>GdsDropdown,GdsFab:()=>GdsFab,GdsFilterChip:()=>GdsFilterChip,GdsFilterChips:()=>GdsFilterChips,GdsFlex:()=>GdsFlex,GdsFormControlFooter:()=>GdsFormControlFooter,GdsFormControlHeader:()=>GdsFormControlHeader,GdsFormSummary:()=>GdsFormSummary,GdsFormattedAccount:()=>GdsFormattedAccount,GdsFormattedDate:()=>GdsFormattedDate,GdsFormattedNumber:()=>GdsFormattedNumber,GdsGrid:()=>GdsGrid,GdsGroupedList:()=>GdsGroupedList,GdsIcon:()=>GdsIcon,GdsIconDetails:()=>GdsIconDetails,GdsImg:()=>GdsImg,GdsInput:()=>GdsInput,GdsLink:()=>GdsLink,GdsListItem:()=>GdsListItem,GdsMask:()=>GdsMask,GdsMenuButton:()=>GdsMenuButton,GdsMenuItem:()=>GdsMenuItem,GdsOption:()=>GdsOption,GdsPopover:()=>GdsPopover,GdsRadio:()=>GdsRadio,GdsRadioGroup:()=>GdsRadioGroup,GdsRichText:()=>GdsRichText,GdsSegment:()=>GdsSegment,GdsSegmentedControl:()=>GdsSegmentedControl,GdsSelect:()=>GdsSelect,GdsSensitiveAccount:()=>GdsSensitiveAccount,GdsSensitiveDate:()=>GdsSensitiveDate,GdsSensitiveNumber:()=>GdsSensitiveNumber,GdsSignal:()=>GdsSignal,GdsSpinner:()=>GdsSpinner,GdsText:()=>GdsText,GdsTextarea:()=>GdsTextarea,GdsTheme:()=>theme.G,GdsVideo:()=>GdsVideo,IconAi:()=>icon_ai.c,IconAirplaneUp:()=>icon_airplane_up.T,IconArchive:()=>icon_archive.a,IconArrow:()=>icon_arrow.P,IconArrowBottomTop:()=>icon_arrow_bottom_top.f,IconArrowBoxLeft:()=>icon_arrow_box_left.X,IconArrowBoxRight:()=>icon_arrow_box_right.A,IconArrowDown:()=>icon_arrow_down.R,IconArrowInbox:()=>icon_arrow_inbox.v,IconArrowLeft:()=>icon_arrow_left.G,IconArrowLeftRight:()=>icon_arrow_left_right.m,IconArrowOutOfBox:()=>icon_arrow_out_of_box.z,IconArrowRight:()=>icon_arrow_right.h,IconArrowRightCircle:()=>icon_arrow_right_circle.j,IconArrowRightDownCircle:()=>icon_arrow_right_down_circle.L,IconArrowRightUpCircle:()=>icon_arrow_right_up_circle.a,IconArrowRotateClockwise:()=>icon_arrow_rotate_clockwise.E,IconArrowRotateCounterClockwise:()=>icon_arrow_rotate_counter_clockwise.a,IconArrowRotateLeftRight:()=>icon_arrow_rotate_left_right.P,IconArrowRotateRightLeft:()=>icon_arrow_rotate_right_left.T,IconArrowShareLeft:()=>icon_arrow_share_left.V,IconArrowShareRight:()=>icon_arrow_share_right.w,IconArrowSplit:()=>icon_arrow_split.r,IconArrowUp:()=>icon_arrow_up.U,IconArrowWallDown:()=>icon_arrow_wall_down.x,IconArrowWallLeft:()=>icon_arrow_wall_left.m,IconArrowWallRight:()=>icon_arrow_wall_right.v,IconArrowWallUp:()=>icon_arrow_wall_up.y,IconArrowsRepeat:()=>icon_arrows_repeat.$,IconAt:()=>icon_at.j,IconBack:()=>icon_back.b,IconBackward:()=>icon_backward.T,IconBag:()=>icon_bag.k,IconBank:()=>icon_bank.Q,IconBanknote:()=>icon_banknote.m,IconBanknote2:()=>icon_banknote_2.y,IconBarcode:()=>icon_barcode.I,IconBarsThree:()=>icon_bars_three.s,IconBarsTwo:()=>icon_bars_two.k,IconBasket:()=>icon_basket.c,IconBatteryLoading:()=>icon_battery_loading.t,IconBell:()=>icon_bell.p,IconBlock:()=>icon_block.V,IconBook:()=>icon_book.L,IconBookmark:()=>icon_bookmark.E,IconBookmarkCheck:()=>icon_bookmark_check.a,IconBookmarkDelete:()=>icon_bookmark_delete.x,IconBookmarkPlus:()=>icon_bookmark_plus.I,IconBookmarkRemove:()=>icon_bookmark_remove.E,IconBooks:()=>icon_books.S,IconBrandAppStore:()=>icon_brand_app_store.p,IconBrandAppleMusic:()=>icon_brand_apple_music.C,IconBrandBankid:()=>icon_brand_bankid.q,IconBrandChrome:()=>icon_brand_chrome.R,IconBrandFacebook:()=>icon_brand_facebook.T,IconBrandFigma:()=>icon_brand_figma.J,IconBrandFirefox:()=>icon_brand_firefox.m,IconBrandGithub:()=>icon_brand_github.Y,IconBrandGreen:()=>icon_brand_green.O,IconBrandInstagram:()=>icon_brand_instagram.R,IconBrandLinkedin:()=>icon_brand_linkedin.B,IconBrandPlayStore:()=>icon_brand_play_store.k,IconBrandRssFeed:()=>icon_brand_rss_feed.l,IconBrandSeb:()=>icon_brand_seb.Z,IconBrandSpotify:()=>icon_brand_spotify.N,IconBrandStorybook:()=>icon_brand_storybook.h,IconBrandX:()=>icon_brand_x.D,IconBrush:()=>icon_brush.W,IconBubble:()=>icon_bubble.S,IconBubbleAnnotation:()=>icon_bubble_annotation.f,IconBubbleDots:()=>icon_bubble_dots.y,IconBubbleQuestion:()=>icon_bubble_question.O,IconBubbleQuotes:()=>icon_bubble_quotes.T,IconBubbleText:()=>icon_bubble_text.b,IconBubbleWideAnnotation:()=>icon_bubble_wide_annotation.A,IconBubbles:()=>icon_bubbles.D,IconBuildings:()=>icon_buildings.T,IconBulletList:()=>icon_bullet_list.K,IconCainLink:()=>icon_cain_link.F,IconCalculator:()=>icon_calculator.A,IconCalendar:()=>icon_calendar._,IconCalendarCheck:()=>icon_calendar_check.G,IconCalenderAdd:()=>icon_calender_add.z,IconCall:()=>icon_call.G,IconCar:()=>icon_car.O,IconCarussel:()=>icon_carussel.i,IconChainLink:()=>icon_chain_link.l,IconChainLinkBroken:()=>icon_chain_link_broken.m,IconChargingStation:()=>icon_charging_station.j,IconChartOne:()=>icon_chart_one.W,IconChartPresentation:()=>icon_chart_presentation._,IconChartTwo:()=>icon_chart_two.s,IconChecklist:()=>icon_checklist.K,IconCheckmark:()=>icon_checkmark.V,IconChevronBottom:()=>icon_chevron_bottom.o,IconChevronDoubleDown:()=>icon_chevron_double_down.E,IconChevronDoubleLeft:()=>icon_chevron_double_left.P,IconChevronDoubleRight:()=>icon_chevron_double_right.C,IconChevronDoubleUp:()=>icon_chevron_double_up.t,IconChevronDownSmall:()=>icon_chevron_down_small.o,IconChevronGrabberVertical:()=>icon_chevron_grabber_vertical.a,IconChevronLeft:()=>icon_chevron_left.g,IconChevronRight:()=>icon_chevron_right.V,IconChevronTop:()=>icon_chevron_top.E,IconChevronTopSmall:()=>icon_chevron_top_small.j,IconCircleBan:()=>icon_circle_ban.h,IconCircleCheck:()=>icon_circle_check.i,IconCircleDots:()=>icon_circle_dots.K,IconCircleInfo:()=>icon_circle_info.w,IconCircleMinus:()=>icon_circle_minus.W,IconCirclePlaceholderOn:()=>icon_circle_placeholder_on.W,IconCirclePlus:()=>icon_circle_plus.I,IconCircleQuestionmark:()=>icon_circle_questionmark.r,IconCircleX:()=>icon_circle_x.I,IconCirclesThree:()=>icon_circles_three.b,IconClock:()=>icon_clock._,IconCloudDownload:()=>icon_cloud_download.V,IconCloudUpload:()=>icon_cloud_upload.m,IconCloudySun:()=>icon_cloudy_sun.O,IconCode:()=>icon_code.D,IconCodeBrackets:()=>icon_code_brackets.O,IconCompassRound:()=>icon_compass_round.G,IconCookies:()=>icon_cookies.x,IconCopy:()=>icon_copy.b,IconCreditCard:()=>icon_credit_card.B,IconCrossLarge:()=>icon_cross_large.z,IconCrossSmall:()=>icon_cross_small.r,IconCupHot:()=>icon_cup_hot.b,IconCursor:()=>icon_cursor.E,IconDevices:()=>icon_devices.H,IconDirection:()=>icon_direction.V,IconDollar:()=>icon_dollar.k,IconDotGridOneHorizontal:()=>icon_dot_grid_one_horizontal.z,IconDotGridOneVertical:()=>icon_dot_grid_one_vertical.Z,IconDotGridThree:()=>icon_dot_grid_three.t,IconDotGridTwo:()=>icon_dot_grid_two.z,IconEmail:()=>icon_email.e,IconEmojiAngry:()=>icon_emoji_angry.r,IconEmojiNeutral:()=>icon_emoji_neutral.z,IconEmojiSad:()=>icon_emoji_sad.Y,IconEmojiSmile:()=>icon_emoji_smile.a,IconEmojiSmiley:()=>icon_emoji_smiley.l,IconEuro:()=>icon_euro.R,IconEyeOpen:()=>icon_eye_open.d,IconEyeSlash:()=>icon_eye_slash.K,IconFashion:()=>icon_fashion.E,IconFastForward:()=>icon_fast_forward.j,IconFileBend:()=>icon_file_bend.b,IconFileChart:()=>icon_file_chart.W,IconFileText:()=>icon_file_text.n,IconFiles:()=>icon_files.n,IconFilter:()=>icon_filter.u,IconFlag:()=>icon_flag.W,IconFloppyDisk:()=>icon_floppy_disk.J,IconFocus:()=>icon_focus.a,IconFocusSquare:()=>icon_focus_square.N,IconFolder:()=>icon_folder.A,IconFolderAddRight:()=>icon_folder_add_right.D,IconFolderPaper:()=>icon_folder_paper.m,IconFolderUpload:()=>icon_folder_upload.j,IconFullscreen:()=>icon_fullscreen.L,IconGift:()=>icon_gift.c,IconGlobus:()=>icon_globus.q,IconGraduateCap:()=>icon_graduate_cap.l,IconGreenPower:()=>icon_green_power.U,IconGroup:()=>icon_group.B,IconGrowth:()=>icon_growth.X,IconHeadphones:()=>icon_headphones.r,IconHeart:()=>icon_heart.g,IconHeartBeat:()=>icon_heart_beat.c,IconHistory:()=>icon_history.g,IconHomeEnergyOne:()=>icon_home_energy_one.l,IconHomeEnergyTwo:()=>icon_home_energy_two.X,IconHomeOpen:()=>icon_home_open.z,IconHomeRoof:()=>icon_home_roof.L,IconHorizontalAlignmentBottom:()=>icon_horizontal_alignment_bottom.Y,IconHourglass:()=>icon_hourglass.W,IconImages:()=>icon_images.A,IconInboxEmpty:()=>icon_inbox_empty.b,IconIndustry:()=>icon_industry.e,IconInvite:()=>icon_invite.T,IconJpg:()=>icon_jpg.l,IconKey:()=>icon_key.F,IconKnifeSpoon:()=>icon_knife_spoon.K,IconLab:()=>icon_lab.X,IconLaw:()=>icon_law.c,IconLeisure:()=>icon_leisure.z,IconLightBulb:()=>icon_light_bulb.N,IconLightBulbSimple:()=>icon_light_bulb_simple.r,IconLightning:()=>icon_lightning.K,IconLineChartFour:()=>icon_line_chart_four.g,IconLineChartOne:()=>icon_line_chart_one.Y,IconLineChartThree:()=>icon_line_chart_three.m,IconLineChartTwo:()=>icon_line_chart_two.y,IconLock:()=>icon_lock.X,IconMacbookAir:()=>icon_macbook_air.G,IconMagnifyingGlass:()=>icon_magnifying_glass.l,IconMaintenance:()=>icon_maintenance.P,IconMapPin:()=>icon_map_pin.f,IconMegaphone:()=>icon_megaphone.G,IconMenuSidebar:()=>icon_menu_sidebar.n,IconMicOff:()=>icon_mic_off.I,IconMicOn:()=>icon_mic_on.c,IconMinusLarge:()=>icon_minus_large.f,IconMinusSmall:()=>icon_minus_small.Z,IconMoneyHand:()=>icon_money_hand.n,IconMoneybag:()=>icon_moneybag.Y,IconMoon:()=>icon_moon.l,IconMute:()=>icon_mute.J,IconOffice:()=>icon_office.s,IconOther:()=>icon_other.w,IconPageAdd:()=>icon_page_add.W,IconPageText:()=>icon_page_text.i,IconPaperPlaneTopRight:()=>icon_paper_plane_top_right.p,IconPaperclip:()=>icon_paperclip.E,IconPause:()=>icon_pause._,IconPdf:()=>icon_pdf.A,IconPencelLine:()=>icon_pencel_line.n,IconPencilSign:()=>icon_pencil_sign.e,IconPencilSparkle:()=>icon_pencil_sparkle.$,IconPencilWave:()=>icon_pencil_wave.o,IconPension:()=>icon_pension._,IconPeople:()=>icon_people.$,IconPeopleA11y:()=>icon_people_a11y.V,IconPeopleAdd:()=>icon_people_add.Q,IconPeopleAdded:()=>icon_people_added.P,IconPeopleCircle:()=>icon_people_circle.d,IconPeopleCopy:()=>icon_people_copy.W,IconPeopleProfile:()=>icon_people_profile.c,IconPeopleRemove:()=>icon_people_remove.v,IconPercent:()=>icon_percent.H,IconPhone:()=>icon_phone.s,IconPhoneDynamicIsland:()=>icon_phone_dynamic_island.c,IconPieChart:()=>icon_pie_chart.A,IconPiggyBank:()=>icon_piggy_bank.S,IconPin:()=>icon_pin.z,IconPinch:()=>icon_pinch.a,IconPlay:()=>icon_play.A,IconPlayCircle:()=>icon_play_circle.U,IconPlusLarge:()=>icon_plus_large.r,IconPlusSmall:()=>icon_plus_small.V,IconPng:()=>icon_png.H,IconPoop:()=>icon_poop.I,IconPostcard:()=>icon_postcard.i,IconPound:()=>icon_pound.e,IconPowerPlant:()=>icon_power_plant.U,IconPrinter:()=>icon_printer.m,IconPush:()=>icon_push.A,IconQrCode:()=>icon_qr_code.Q,IconRainy:()=>icon_rainy.j,IconRaisingHand:()=>icon_raising_hand.G,IconReadingList:()=>icon_reading_list.q,IconReceiptBill:()=>icon_receipt_bill.X,IconReceiptionBell:()=>icon_receiption_bell.N,IconRecord:()=>icon_record.V,IconRefund:()=>icon_refund.Y,IconRobot:()=>icon_robot.O,IconRocket:()=>icon_rocket.o,IconRunShortcut:()=>icon_run_shortcut.r,IconSafari:()=>icon_safari.M,IconSchool:()=>icon_school.o,IconScissors:()=>icon_scissors.t,IconSearchMenu:()=>icon_search_menu.j,IconSeb:()=>icon_seb.c,IconSettingsGear:()=>icon_settings_gear.g,IconSettingsSliderHor:()=>icon_settings_slider_hor.l,IconSettingsSliderThree:()=>icon_settings_slider_three.U,IconSettingsSliderVer:()=>icon_settings_slider_ver.j,IconShapes:()=>icon_shapes.S,IconShare:()=>icon_share.V,IconShield:()=>icon_shield.N,IconShieldChecked:()=>icon_shield_checked.Q,IconShieldCrossed:()=>icon_shield_crossed.I,IconShoppingBag:()=>icon_shopping_bag.C,IconSignature:()=>icon_signature.a,IconSmartwatch:()=>icon_smartwatch.g,IconSolar:()=>icon_solar.R,IconSolarPanel:()=>icon_solar_panel.P,IconSort:()=>icon_sort.C,IconSquareArrowTopRight:()=>icon_square_arrow_top_right.v,IconSquareBehindSquare:()=>icon_square_behind_square.k,IconSquareCheck:()=>icon_square_check.L,IconSquareGridCircle:()=>icon_square_grid_circle.x,IconSquareInfo:()=>icon_square_info.l,IconSquareMinus:()=>icon_square_minus.P,IconSquarePlaceholder:()=>icon_square_placeholder.o,IconSquarePlus:()=>icon_square_plus.J,IconSquareX:()=>icon_square_x.z,IconStar:()=>icon_star.a,IconStore:()=>icon_store.z,IconSuitcaseWork:()=>icon_suitcase_work.k,IconSun:()=>icon_sun.m,IconSunsetArrowDown:()=>icon_sunset_arrow_down.n,IconTag:()=>icon_tag.c,IconTargetArrow:()=>icon_target_arrow.E,IconTelevision:()=>icon_television.A,IconTennis:()=>icon_tennis.P,IconTextEdit:()=>icon_text_edit.T,IconThermostat:()=>icon_thermostat.Z,IconThumbsDown:()=>icon_thumbs_down.P,IconThumbsUp:()=>icon_thumbs_up.G,IconTicket:()=>icon_ticket.y,IconTodos:()=>icon_todos.B,IconTradingViewCandles:()=>icon_trading_view_candles.Y,IconTrashCan:()=>icon_trash_can.U,IconTree:()=>icon_tree.M,IconTrendingFour:()=>icon_trending_four.h,IconTrendingOne:()=>icon_trending_one.L,IconTrendingThree:()=>icon_trending_three.$,IconTrendingTwo:()=>icon_trending_two.d,IconTriangleExclamation:()=>icon_triangle_exclamation.f,IconTruck:()=>icon_truck.p,IconUmbrellaSecurity:()=>icon_umbrella_security.w,IconUnlocked:()=>icon_unlocked.N,IconVerticalAlignmentRight:()=>icon_vertical_alignment_right.d,IconVolumeFull:()=>icon_volume_full.X,IconVolumeHalf:()=>icon_volume_half.J,IconVolumeOff:()=>icon_volume_off.X,IconWallet:()=>icon_wallet.n,IconWarningSign:()=>icon_warning_sign.R,IconWifiFull:()=>icon_wifi_full.U,IconYoutube:()=>icon_youtube.D,IconZap:()=>icon_zap.h,IconZoomIn:()=>icon_zoom_in.m,IconZoomOut:()=>icon_zoom_out.N});var react_alert=__webpack_require__("./dist/libs/core/src/generated/react/alert/index.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),react=__webpack_require__("./dist/libs/core/src/utils/react.js"),badge_component=__webpack_require__("./dist/libs/core/src/components/badge/badge.component.js"),node_modules_react=__webpack_require__("./node_modules/react/index.js"),GdsBadge=function GdsBadge(props){badge_component.K.define();var JSXElement=(0,react.p)("gds-badge"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsBadge.__docgenInfo={description:"",methods:[],displayName:"GdsBadge"};var _t,blur_component_t,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),lit=__webpack_require__("./node_modules/lit/index.js"),blur_styles_default=(0,lit.AH)(_t||(_t=(function _(t){return t})`
  :host {
    --_blur: 5px;
  }

  .blur {
    filter: blur(var(--_blur));
  }
`)),blur_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var blur_component_GdsBlur=function(_GdsElement){function GdsBlur(){return(0,classCallCheck.A)(this,GdsBlur),function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsBlur,arguments)}return(0,inherits.A)(GdsBlur,_GdsElement),(0,createClass.A)(GdsBlur,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(blur_component_t||(blur_component_t=blur_component_`<div class="blur"><slot></slot></div>`))}}])}(gds_element.j);blur_component_GdsBlur.styles=blur_styles_default,blur_component_GdsBlur=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-blur")],blur_component_GdsBlur);var GdsBlur=function GdsBlur(props){blur_component_GdsBlur.define();var JSXElement=(0,react.p)("gds-blur"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsBlur.__docgenInfo={description:"",methods:[],displayName:"GdsBlur"};var breadcrumbs_styles_t,breadcrumbs_component_t,lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),chevron_left_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chevron-left.component.js"),breadcrumbs_styles_default=(0,lit.AH)(breadcrumbs_styles_t||(breadcrumbs_styles_t=(function _(t){return t})`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      container-type: inline-size;
      --_gap: var(--gds-sys-space-s);
    }

    nav {
      display: flex;
      align-items: center;
      width: max-content;
      gap: var(--_gap);
      font: var(--gds-sys-text-detail-book-m);
    }

    .size-small {
      font: var(--gds-sys-text-detail-book-s);
      --_gap: var(--gds-sys-space-xs);
    }

    .size-small .list {
      --_gap: var(--gds-sys-space-xs);
    }

    .list {
      display: flex;
      align-items: center;
      gap: var(--_gap);
      list-style: none;
      margin-block-start: 0;
      margin-block-end: 0;
      padding-inline-start: 0;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
    }

    ::slotted(*:not(:last-child))::after {
      content: '/';
      display: block;
    }

    ::slotted(*:not([gds-element='gds-breadcrumb'])) {
      display: contents;
    }

    .mobile-return {
      display: none;
      align-items: center;
      justify-content: center;
    }

    @container (max-width: 400px) {
      .mobile-return {
        display: flex;
      }

      ::slotted(*[return])::after {
        display: none;
      }
    }
  }
`)),breadcrumbs_component_=function _(t){return t};function breadcrumbs_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(breadcrumbs_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var breadcrumbs_component_GdsBreadcrumbs=function(_withLayoutChildProps){function GdsBreadcrumbs(){var _this;return(0,classCallCheck.A)(this,GdsBreadcrumbs),(_this=function breadcrumbs_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,breadcrumbs_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsBreadcrumbs,arguments)).size="large",_this.label=(0,lit_localize.ab)("Breadcrumbs"),_this}return(0,inherits.A)(GdsBreadcrumbs,_withLayoutChildProps),(0,createClass.A)(GdsBreadcrumbs,[{key:"breadcrumbItems",get:function get(){return Array.from(this.querySelectorAll("[gds-element=gds-breadcrumb]"))}},{key:"handleSlotChange",value:function handleSlotChange(){var items=this.breadcrumbItems;items.forEach((function(item,index){index===items.length-2?item.setAttribute("return",""):item.removeAttribute("return")}))}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(breadcrumbs_component_t||(breadcrumbs_component_t=breadcrumbs_component_`
      <nav
        role="navigation"
        aria-label=${0}
        class=${0}
      >
        <div class="mobile-return">
          <gds-icon-chevron-left></gds-icon-chevron-left>
        </div>
        <div role="list" class="list">
          <slot @slotchange=${0}></slot>
        </div>
      </nav>
    `),this.label,(0,class_map.H)({"size-small":"small"===this.size}),this.handleSlotChange)}}])}((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)(gds_element.j))));breadcrumbs_component_GdsBreadcrumbs.styles=[tokens_style.LU,breadcrumbs_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],breadcrumbs_component_GdsBreadcrumbs.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],breadcrumbs_component_GdsBreadcrumbs.prototype,"label",2),breadcrumbs_component_GdsBreadcrumbs=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-breadcrumbs",{dependsOn:[chevron_left_component.g]}),(0,lit_localize.cc)()],breadcrumbs_component_GdsBreadcrumbs);var GdsBreadcrumbs=function GdsBreadcrumbs(props){breadcrumbs_component_GdsBreadcrumbs.define();var JSXElement=(0,react.p)("gds-breadcrumbs"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsBreadcrumbs.__docgenInfo={description:"",methods:[],displayName:"GdsBreadcrumbs"};var button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),GdsButton=function GdsButton(props){button_component.t.define();var JSXElement=(0,react.p)("gds-button"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsButton.__docgenInfo={description:"",methods:[],displayName:"GdsButton"};var calendar_component=__webpack_require__("./dist/libs/core/src/components/calendar/calendar.component.js"),GdsCalendar=function GdsCalendar(props){calendar_component.x.define();var JSXElement=(0,react.p)("gds-calendar"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsCalendar.__docgenInfo={description:"",methods:[],displayName:"GdsCalendar"};var card_component=__webpack_require__("./dist/libs/core/src/components/card/card.component.js"),GdsCard=function GdsCard(props){card_component.z.define();var JSXElement=(0,react.p)("gds-card"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsCard.__docgenInfo={description:"",methods:[],displayName:"GdsCard"};var if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js");function props_link_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(props_link_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function withLinkProps(base){var LinkPropsMixin=function(_base){function LinkPropsMixin(){return(0,classCallCheck.A)(this,LinkPropsMixin),function props_link_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,props_link_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,LinkPropsMixin,arguments)}return(0,inherits.A)(LinkPropsMixin,_base),(0,createClass.A)(LinkPropsMixin,[{key:"rel",get:function get(){return this._rel?this._rel:"_blank"===this.target?"noreferrer noopener":void 0},set:function set(value){this._rel=value}}])}(base);return(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],LinkPropsMixin.prototype,"href",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],LinkPropsMixin.prototype,"target",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],LinkPropsMixin.prototype,"rel",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],LinkPropsMixin.prototype,"download",2),LinkPropsMixin}var card_linked_styles_t,card_linked_component_t,card_linked_styles_default=(0,lit.AH)(card_linked_styles_t||(card_linked_styles_t=(function _(t){return t})`
  :host {
    display: contents;
  }

  a {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-color: var(--_border-color);
    background-color: var(--_background-color);
    color: var(--_color);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    text-decoration: none;
    cursor: pointer;
    outline: solid var(--gds-sys-space-4xs) transparent;
    outline-offset: var(--gds-sys-space-4xs);
    transition-property: all;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-ease-in);

    &:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);
      outline-offset: var(--gds-sys-space-3xs);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      &:hover {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l2-neutral-02),
          var(--gds-sys-color-state-neutral-03)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--gds-sys-color-l2-neutral-02),
        var(--gds-sys-color-state-neutral-04)
      );
    }
  }
`)),card_linked_component_=function _(t){return t};function card_linked_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(card_linked_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var card_linked_component_GdsCardLinked=function(_withLinkProps){function GdsCardLinked(){return(0,classCallCheck.A)(this,GdsCardLinked),function card_linked_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,card_linked_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsCardLinked,arguments)}return(0,inherits.A)(GdsCardLinked,_withLinkProps),(0,createClass.A)(GdsCardLinked,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(card_linked_component_t||(card_linked_component_t=card_linked_component_`<a
      href=${0}
      target=${0}
      rel=${0}
      download=${0}
      tabindex="0"
    >
      <slot></slot>
    </a>`),(0,if_defined.J)(this.href),(0,if_defined.J)(this.target),(0,if_defined.J)(this.rel),(0,if_defined.J)(this.download))}}])}(withLinkProps(card_component.z));card_linked_component_GdsCardLinked.styles=[tokens_style.LU,card_linked_styles_default],card_linked_component_GdsCardLinked.styleExpressionBaseSelector="a",card_linked_component_GdsCardLinked=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-card-linked")],card_linked_component_GdsCardLinked);var GdsCardLinked=function GdsCardLinked(props){card_linked_component_GdsCardLinked.define();var JSXElement=(0,react.p)("gds-card-linked"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsCardLinked.__docgenInfo={description:"",methods:[],displayName:"GdsCardLinked"};var when=__webpack_require__("./node_modules/lit-html/directives/when.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js");function props_card_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(props_card_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function props_image_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(props_image_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function withImageProps(base){var ImagePropsMixin=function(_base){function ImagePropsMixin(){var _this;return(0,classCallCheck.A)(this,ImagePropsMixin),(_this=function props_image_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,props_image_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,ImagePropsMixin,arguments)).loading="lazy",_this.decoding="auto",_this}return(0,inherits.A)(ImagePropsMixin,_base),(0,createClass.A)(ImagePropsMixin)}(base);return(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],ImagePropsMixin.prototype,"src",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],ImagePropsMixin.prototype,"srcset",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],ImagePropsMixin.prototype,"sizes",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],ImagePropsMixin.prototype,"alt",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],ImagePropsMixin.prototype,"loading",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],ImagePropsMixin.prototype,"decoding",2),ImagePropsMixin}var flex_component=__webpack_require__("./dist/libs/core/src/components/flex/flex.component.js"),chain_link_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chain-link.component.js");chain_link_component.l.define();var img_styles_t,img_component_t,style_expression_property=__webpack_require__("./dist/libs/core/src/utils/decorators/style-expression-property.js"),img_styles_default=(0,lit.AH)(img_styles_t||(img_styles_t=(function _(t){return t})`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  img {
    display: flex;
    width: 100%;
    height: 100%;
  }
`)),img_component_=function _(t){return t};function img_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(img_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var img_component_GdsImg=function(_withPositioningProps){function GdsImg(){return(0,classCallCheck.A)(this,GdsImg),function img_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,img_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsImg,arguments)}return(0,inherits.A)(GdsImg,_withPositioningProps),(0,createClass.A)(GdsImg,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(img_component_t||(img_component_t=img_component_`<img
      src="${0}"
      alt="${0}"
      srcset=${0}
      sizes=${0}
    />`),(0,if_defined.J)(this.src),(0,if_defined.J)(this.alt),(0,if_defined.J)(this.srcset),(0,if_defined.J)(this.sizes))}}])}((0,declarative_layout_mixins.qC)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.vi)(withImageProps(gds_element.j))))));img_component_GdsImg.styles=[tokens_style.LU,img_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"img"})],img_component_GdsImg.prototype,"aspect-ratio",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({property:"border-radius",valueTemplate:function valueTemplate(v){return"var(--gds-sys-space-".concat(v,")")}})],img_component_GdsImg.prototype,"border-radius",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"img"})],img_component_GdsImg.prototype,"object-fit",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"img"})],img_component_GdsImg.prototype,"object-position",2),img_component_GdsImg=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-img")],img_component_GdsImg);var default_typography_styles_t,text_styles_t,text_component_t,static_html=__webpack_require__("./node_modules/lit/static-html.js"),div_component=__webpack_require__("./dist/libs/core/src/components/div/div.component.js"),defaultStyles=(0,lit.AH)(default_typography_styles_t||(default_typography_styles_t=(function _(t){return t})`
  @layer defaults {
    a:link {
      color: currentColor;
      text-underline-offset: 0.1lh;
      font-weight: var(--gds-sys-text-weight-book);
    }

    a:visited {
      color: currentColor;
    }

    h1 {
      font: var(--gds-sys-text-heading-xl);
    }

    h2 {
      font: var(--gds-sys-text-heading-l);
    }

    h3 {
      font: var(--gds-sys-text-heading-m);
    }

    h4 {
      font: var(--gds-sys-text-heading-s);
    }

    h5 {
      font: var(--gds-sys-text-heading-xs);
    }

    h6 {
      font: var(--gds-sys-text-heading-2xs);
    }

    p,
    li {
      font: var(--gds-sys-text-body-regular-m);
    }

    strong {
      font: var(--gds-sys-text-body-medium-m);
    }
  }
`)),text_styles_default=(0,lit.AH)(text_styles_t||(text_styles_t=(function _(t){return t})`
  :host {
    display: block;
  }

  [tag] {
    margin: 0;
    padding: 0;
    text-underline-offset: 0.2lh;
  }
`)),text_component_=function _(t){return t};function text_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(text_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var text_component_GdsText=function(_GdsDiv){function GdsText(){var _this;return(0,classCallCheck.A)(this,GdsText),(_this=function text_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,text_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsText,arguments)).tag="span",_this}return(0,inherits.A)(GdsText,_GdsDiv),(0,createClass.A)(GdsText,[{key:"render",value:function render(){var TAG=(0,static_html.Bk)(encodeURI(this.tag));return(0,static_html.qy)(text_component_t||(text_component_t=text_component_`<${0} tag><slot></slot></${0}>`),TAG,TAG)}}])}(div_component.o);text_component_GdsText.styles=[tokens_style.LU,defaultStyles,text_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],text_component_GdsText.prototype,"tag",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"[tag]",styleTemplate:function styleTemplate(_prop,values){var size=values[0];return"font: var(--gds-sys-text-".concat(size,");")}})],text_component_GdsText.prototype,"font",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"[tag]",valueTemplate:function valueTemplate(v){return"var(--gds-sys-text-weight-".concat(v,")")}})],text_component_GdsText.prototype,"font-weight",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],text_component_GdsText.prototype,"text-transform",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"[tag]"})],text_component_GdsText.prototype,"text-decoration",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"[tag]",styleTemplate:function styleTemplate(_prop,values){return"overflow: hidden;\n      text-overflow: ellipsis;\n      display: -webkit-box;\n      -webkit-line-clamp: ".concat(values[0],";\n      -webkit-box-orient: vertical;")}})],text_component_GdsText.prototype,"lines",2),text_component_GdsText=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-text")],text_component_GdsText);var card_pattern_01_styles_t,card_pattern_01_component_t,_t2,_t3,_t4,_t5,_t6,_t7,_t8,_t9,_t10,_t11,_GdsCardPattern01_instances,hasFooterContent_fn,getVariant_fn,renderLinkedCard_fn,renderLinkedFooter_fn,renderStaticCard_fn,renderStaticFooter_fn,renderCardContent_fn,card_pattern_01_styles_default=(0,lit.AH)(card_pattern_01_styles_t||(card_pattern_01_styles_t=(function _(t){return t})`
  :host {
    display: inline-block;
  }
`)),card_pattern_01_component_=function _(t){return t};function card_pattern_01_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(card_pattern_01_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var card_pattern_01_component_GdsCardPattern01=function(_withSizeXProps){function GdsCardPattern01(){var _this;return(0,classCallCheck.A)(this,GdsCardPattern01),_this=function card_pattern_01_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,card_pattern_01_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsCardPattern01,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsCardPattern01_instances),_this}return(0,inherits.A)(GdsCardPattern01,_withSizeXProps),(0,createClass.A)(GdsCardPattern01,[{key:"render",value:function render(){var _this2=this;return(0,when.z)(this.href,(function(){return(0,chunk_QU3DSPNU.jq)(_this2,_GdsCardPattern01_instances,renderLinkedCard_fn).call(_this2)}),(function(){return(0,chunk_QU3DSPNU.jq)(_this2,_GdsCardPattern01_instances,renderStaticCard_fn).call(_this2)}))}}])}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(withLinkProps(withImageProps(function withCardProps(base){var CardPropsMixin=function(_base){function CardPropsMixin(){var _this;return(0,classCallCheck.A)(this,CardPropsMixin),(_this=function props_card_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,props_card_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,CardPropsMixin,arguments)).title="",_this.excerpt="",_this.label="",_this.variant="neutral-01",_this.outlined=!1,_this.ratio="landscape",_this}return(0,inherits.A)(CardPropsMixin,_base),(0,createClass.A)(CardPropsMixin,[{key:"classes",value:function classes(type){return(0,defineProperty.A)((0,defineProperty.A)((0,defineProperty.A)({card:!0,outlined:!0},"card-".concat(type||"base"),!!type),"variant-".concat(this.variant),!0),"ratio-".concat(this.ratio),!0)}}])}(base);return(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!1})],CardPropsMixin.prototype,"title",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!1})],CardPropsMixin.prototype,"excerpt",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!1})],CardPropsMixin.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!1})],CardPropsMixin.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!1})],CardPropsMixin.prototype,"outlined",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!1,attribute:"aspect-ratio"})],CardPropsMixin.prototype,"ratio",2),CardPropsMixin}(gds_element.j)))))));_GdsCardPattern01_instances=new WeakSet,hasFooterContent_fn=function hasFooterContent_fn(){return arguments.length>0&&void 0!==arguments[0]&&arguments[0]&&this.label||this.querySelector('[slot="footer"]')},getVariant_fn=function getVariant_fn(){return"neutral-02"===this.variant?this.outlined?"secondary":"tertiary":"primary"},renderLinkedCard_fn=function renderLinkedCard_fn(){return(0,custom_element_scoping.qy)(card_pattern_01_component_t||(card_pattern_01_component_t=card_pattern_01_component_`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${0}
        target=${0}
        rel=${0}
        variant=${0}
        class="card"
      >
        ${0}
      </gds-card-linked>
    `),(0,if_defined.J)(this.href),(0,if_defined.J)(this.target),(0,if_defined.J)(this.rel),(0,chunk_QU3DSPNU.jq)(this,_GdsCardPattern01_instances,getVariant_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsCardPattern01_instances,renderCardContent_fn).call(this))},renderLinkedFooter_fn=function renderLinkedFooter_fn(){var _this3=this;return(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_GdsCardPattern01_instances,hasFooterContent_fn).call(this,!0),(function(){return(0,custom_element_scoping.qy)(_t2||(_t2=card_pattern_01_component_`
        <gds-flex
          align-items="center"
          gap="m"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${0}
          </slot>
        </gds-flex>
      `),(0,when.z)(_this3.label,(function(){return(0,custom_element_scoping.qy)(_t3||(_t3=card_pattern_01_component_`
                <gds-link href=${0}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${0}
                </gds-link>
              `),(0,if_defined.J)(_this3.href),_this3.label)})))}))},renderStaticCard_fn=function renderStaticCard_fn(){return(0,custom_element_scoping.qy)(_t4||(_t4=card_pattern_01_component_`
      <gds-card padding="0" gap="0" variant=${0}>
        ${0}
      </gds-card>
    `),(0,chunk_QU3DSPNU.jq)(this,_GdsCardPattern01_instances,getVariant_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsCardPattern01_instances,renderCardContent_fn).call(this))},renderStaticFooter_fn=function renderStaticFooter_fn(){return(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_GdsCardPattern01_instances,hasFooterContent_fn).call(this),(function(){return(0,custom_element_scoping.qy)(_t5||(_t5=card_pattern_01_component_`
        <gds-flex align-items="center" gap="m">
          <slot name="footer"></slot>
        </gds-flex>
      `))}))},renderCardContent_fn=function renderCardContent_fn(){var _this4=this;return(0,custom_element_scoping.qy)(_t6||(_t6=card_pattern_01_component_`
      ${0}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${0}
        ${0}
        ${0}
      </gds-flex>
    `),(0,when.z)(this.src,(function(){return(0,custom_element_scoping.qy)(_t7||(_t7=card_pattern_01_component_`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${0}
              srcset=${0}
              sizes=${0}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${0}
            ></gds-img>
          </gds-flex>
        `),(0,if_defined.J)(_this4.src),(0,if_defined.J)(_this4.srcset),(0,if_defined.J)(_this4.sizes),"square"===_this4.ratio?"1/1":"16/9")})),(0,when.z)(!this.src,(function(){return(0,custom_element_scoping.qy)(_t8||(_t8=card_pattern_01_component_`<slot name="header"></slot>`))})),(0,when.z)(this.title||this.excerpt,(function(){return(0,custom_element_scoping.qy)(_t9||(_t9=card_pattern_01_component_`
            <gds-flex flex-direction="column" gap="xs">
              ${0}
              ${0}
            </gds-flex>
          `),(0,when.z)(_this4.title,(function(){return(0,custom_element_scoping.qy)(_t10||(_t10=card_pattern_01_component_`
                  <gds-text tag="h2" font="heading-s">${0}</gds-text>
                `),_this4.title)})),(0,when.z)(_this4.excerpt,(function(){return(0,custom_element_scoping.qy)(_t11||(_t11=card_pattern_01_component_`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${0}
                  </gds-text>
                `),_this4.excerpt)})))})),(0,when.z)(this.href,(function(){return(0,chunk_QU3DSPNU.jq)(_this4,_GdsCardPattern01_instances,renderLinkedFooter_fn).call(_this4)}),(function(){return(0,chunk_QU3DSPNU.jq)(_this4,_GdsCardPattern01_instances,renderStaticFooter_fn).call(_this4)})))},card_pattern_01_component_GdsCardPattern01.styles=[tokens_style.LU,card_pattern_01_styles_default],card_pattern_01_component_GdsCardPattern01=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-card-pattern-01",{dependsOn:[card_component.z,card_linked_component_GdsCardLinked,img_component_GdsImg,text_component_GdsText,flex_component.o,chain_link_component.l]})],card_pattern_01_component_GdsCardPattern01);var GdsCardPattern01=function GdsCardPattern01(props){card_pattern_01_component_GdsCardPattern01.define();var JSXElement=(0,react.p)("gds-card-pattern-01"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsCardPattern01.__docgenInfo={description:"",methods:[],displayName:"GdsCardPattern01"};var toggle_control_base_styles_t,toggle_control_base_component_t,toggle_control_base_styles_default=(0,lit.AH)(toggle_control_base_styles_t||(toggle_control_base_styles_t=(function _(t){return t})`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .container {
      display: flex;
      gap: var(--_container-gap, var(--gds-sys-space-s));
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    slot[name='label']::slotted(*) {
      font: var(--_font-label, var(--gds-sys-text-detail-book-m));
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`)),toggle_control_base_component_=function _(t){return t};function toggle_control_base_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(toggle_control_base_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsToggleControlBase=function(_GdsElement){function GdsToggleControlBase(){var _this;return(0,classCallCheck.A)(this,GdsToggleControlBase),(_this=function toggle_control_base_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,toggle_control_base_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsToggleControlBase)).label="",_this.supportingText="",_this}return(0,inherits.A)(GdsToggleControlBase,_GdsElement),(0,createClass.A)(GdsToggleControlBase,[{key:"render",value:function render(){var classes={label:!0,"has-supporting-text":!!this.supportingText};return(0,custom_element_scoping.qy)(toggle_control_base_component_t||(toggle_control_base_component_t=toggle_control_base_component_`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${0}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `),(0,class_map.H)(classes))}}])}(gds_element.j);GdsToggleControlBase.styles=[tokens_style.LU,toggle_control_base_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsToggleControlBase.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],GdsToggleControlBase.prototype,"supportingText",2),GdsToggleControlBase=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-toggle-control-base"),(0,lit_localize.cc)()],GdsToggleControlBase);var checkbox_styles_t,checkbox_component_t,checkbox_component_t2,_GdsCheckbox_instances,toggleChecked_fn,dispatchChangeEvents_fn,rbcb_toggle_style=__webpack_require__("./dist/libs/core/src/shared-styles/rbcb-toggle.style.js"),rbcb_toggle_template=__webpack_require__("./dist/libs/core/src/shared-styles/rbcb-toggle.template.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js"),checkmark_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/checkmark.component.js"),minus_small_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/minus-small.component.js"),checkbox_styles_default=(0,lit.AH)(checkbox_styles_t||(checkbox_styles_t=(function _(t){return t})`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:invalid) {
    color: var(--gds-sys-color-content-negative-01);
  }

  :host(:focus) {
    outline: none;
  }

  input[type='checkbox'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    pointer-events: none;
  }

  #message {
    display: none;
  }
`)),checkbox_component_=function _(t){return t};function checkbox_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(checkbox_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var checkbox_component_GdsCheckbox=function(_GdsFormControlElemen){function GdsCheckbox(){var _this;return(0,classCallCheck.A)(this,GdsCheckbox),_this=function checkbox_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,checkbox_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsCheckbox,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsCheckbox_instances),_this.label="",_this.supportingText="",_this.checked=!1,_this.indeterminate=!1,_this.disabled=!1,_this}return(0,inherits.A)(GdsCheckbox,_GdsFormControlElemen),(0,createClass.A)(GdsCheckbox,[{key:"value",get:function get(){return this._internalValue||""},set:function set(value){this._internalValue=value}},{key:"_handleIndeterminateChange",value:function _handleIndeterminateChange(){this.indeterminate&&(this.checked=!1)}},{key:"focus",value:function focus(options){this._elCheckbox.focus(options)}},{key:"render",value:function render(){var _this2=this;return(0,custom_element_scoping.qy)(checkbox_component_t||(checkbox_component_t=checkbox_component_`
      <input
        type="checkbox"
        ?checked=${0}
        ?disabled=${0}
        ?indeterminate=${0}
        aria-invalid=${0}
        aria-describedby="message supporting-text"
        id="checkbox-input"
        @change=${0}
      />
      ${0}
      <gds-toggle-control-base type="checkbox" @click=${0}>
        <label for="checkbox-input" slot="label"> ${0} </label>
        <span
          slot="supporting-text"
          class="supporting-text"
          id="supporting-text"
        >
          ${0}
        </span>
        ${0}
      </gds-toggle-control-base>
    `),this.checked,this.disabled,this.indeterminate,this.invalid,(function(){_this2.checked=_this2._elCheckbox.checked,(0,chunk_QU3DSPNU.jq)(_this2,_GdsCheckbox_instances,dispatchChangeEvents_fn).call(_this2)}),(0,when.z)(this.errorMessage,(function(){return(0,custom_element_scoping.qy)(checkbox_component_t2||(checkbox_component_t2=checkbox_component_`<span id="message">${0}</span>`),_this2.errorMessage)})),(0,chunk_QU3DSPNU.jq)(this,_GdsCheckbox_instances,toggleChecked_fn),this.label,this.supportingText,(0,rbcb_toggle_template.o)({checked:this.checked,indeterminate:this.indeterminate,disabled:this.disabled,invalid:this.invalid}))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this._elCheckbox}},{key:"formResetCallback",value:function formResetCallback(){this.checked=!1}}])}(form_control.S);_GdsCheckbox_instances=new WeakSet,toggleChecked_fn=function toggleChecked_fn(e){this.disabled||e.target instanceof HTMLLabelElement||(this.indeterminate?this.indeterminate=!1:this.checked=!this.checked,(0,chunk_QU3DSPNU.jq)(this,_GdsCheckbox_instances,dispatchChangeEvents_fn).call(this))},dispatchChangeEvents_fn=function dispatchChangeEvents_fn(){this.dispatchStandardEvent("change",{bubbles:!0,composed:!0}),this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})},checkbox_component_GdsCheckbox.styles=[tokens_style.LU,rbcb_toggle_style.A,checkbox_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],checkbox_component_GdsCheckbox.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],checkbox_component_GdsCheckbox.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],checkbox_component_GdsCheckbox.prototype,"checked",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],checkbox_component_GdsCheckbox.prototype,"indeterminate",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],checkbox_component_GdsCheckbox.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)('input[type="checkbox"]')],checkbox_component_GdsCheckbox.prototype,"_elCheckbox",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("indeterminate")],checkbox_component_GdsCheckbox.prototype,"_handleIndeterminateChange",1),checkbox_component_GdsCheckbox=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-checkbox",{dependsOn:[GdsToggleControlBase,checkmark_component.V,minus_small_component.Z]})],checkbox_component_GdsCheckbox);var GdsCheckbox=function GdsCheckbox(props){checkbox_component_GdsCheckbox.define();var JSXElement=(0,react.p)("gds-checkbox"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsCheckbox.__docgenInfo={description:"",methods:[],displayName:"GdsCheckbox"};var coachmark_styles_t,coachmark_component_t,coachmark_component_t2,coachmark_component_t3,_cardRef,_arrowRef,_autoUpdateCleanupFn,_GdsCoachmark_instances,closeCoachMark_fn,findTarget_fn,checkBoundingRect_fn,checkOverlap_fn,isElementOutsideView_fn,computeTooltipPosition_fn,shouldTooltipBeVisible_fn,updateCoachmarks_fn,asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),coachmark_styles_default=(0,lit.AH)(coachmark_styles_t||(coachmark_styles_t=(function _(t){return t})`
  #body {
    visibility: hidden;
    position: absolute;
    z-index: 1060;
    box-sizing: border-box;
    padding: var(--gds-sys-space-m);
    width: 20rem;
    border-radius: var(--gds-sys-radius-s);
    background-color: var(--gds-sys-color-l2-neutral-03);
    color: var(--gds-sys-color-content-inversed);
    opacity: 0;
    transition: opacity 0.3s;
  }

  #arrow {
    box-sizing: border-box;
    z-index: -1;
    position: absolute;
    height: var(--gds-sys-space-m);
    width: var(--gds-sys-space-m);
    background-color: var(--gds-sys-color-l2-neutral-03);
    transform: rotate(45deg);
  }

  .arrow-top,
  .arrow-top-start,
  .arrow-top-end {
    bottom: -0.5rem;
  }

  .arrow-bottom,
  .arrow-bottom-start,
  .arrow-bottom-end {
    top: -0.5rem;
  }

  .arrow-left,
  .arrow-left-start,
  .arrow-left-end {
    right: -0.5rem;
  }

  .arrow-right,
  .arrow-right-start,
  .arrow-right-end {
    left: -0.5rem;
  }
`)),coachmark_component_=function _(t){return t};function _createForOfIteratorHelper(r,e){var t="undefined"!=typeof Symbol&&r[Symbol.iterator]||r["@@iterator"];if(!t){if(Array.isArray(r)||(t=function _unsupportedIterableToArray(r,a){if(r){if("string"==typeof r)return _arrayLikeToArray(r,a);var t={}.toString.call(r).slice(8,-1);return"Object"===t&&r.constructor&&(t=r.constructor.name),"Map"===t||"Set"===t?Array.from(r):"Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t)?_arrayLikeToArray(r,a):void 0}}(r))||e&&r&&"number"==typeof r.length){t&&(r=t);var _n=0,F=function F(){};return{s:F,n:function n(){return _n>=r.length?{done:!0}:{done:!1,value:r[_n++]}},e:function e(r){throw r},f:F}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var o,a=!0,u=!1;return{s:function s(){t=t.call(r)},n:function n(){var r=t.next();return a=r.done,r},e:function e(r){u=!0,o=r},f:function f(){try{a||null==t.return||t.return()}finally{if(u)throw o}}}}function _arrayLikeToArray(r,a){(null==a||a>r.length)&&(a=r.length);for(var e=0,n=Array(a);e<a;e++)n[e]=r[e];return n}function coachmark_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(coachmark_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var coachmark_component_GdsCoachmark=function(_GdsElement){function GdsCoachmark(){var _this;return(0,classCallCheck.A)(this,GdsCoachmark),_this=function coachmark_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,coachmark_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsCoachmark,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsCoachmark_instances),_this.placement="bottom",_this.overlappedBy=[],_this.target=[],_this.label="Coachmark",_this.computeVisibility=function(_self,_target,computedVisibility){return computedVisibility},_this.targetElement=void 0,_this._isVisible=!1,_this._preventClose=!1,(0,chunk_QU3DSPNU.VK)(_this,_cardRef,(0,ref._)()),(0,chunk_QU3DSPNU.VK)(_this,_arrowRef,(0,ref._)()),(0,chunk_QU3DSPNU.VK)(_this,_autoUpdateCleanupFn),_this}return(0,inherits.A)(GdsCoachmark,_GdsElement),(0,createClass.A)(GdsCoachmark,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;_superPropGet(GdsCoachmark,"connectedCallback",this,3)([]),document.addEventListener("click",(function(){setTimeout((function(){(0,chunk_QU3DSPNU.jq)(_this2,_GdsCoachmark_instances,updateCoachmarks_fn).call(_this2),(0,chunk_QU3DSPNU.jq)(_this2,_GdsCoachmark_instances,closeCoachMark_fn).call(_this2)}),400)})),document.addEventListener("keydown",(function(event){"Escape"===event.key&&_this2._isVisible&&(0,chunk_QU3DSPNU.jq)(_this2,_GdsCoachmark_instances,closeCoachMark_fn).call(_this2)}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _this3=this;_superPropGet(GdsCoachmark,"disconnectedCallback",this,3)([]),document.removeEventListener("click",(0,chunk_QU3DSPNU.jq)(this,_GdsCoachmark_instances,closeCoachMark_fn)),document.removeEventListener("keydown",(function(event){"Escape"===event.key&&_this3._isVisible&&(0,chunk_QU3DSPNU.jq)(_this3,_GdsCoachmark_instances,closeCoachMark_fn).call(_this3)}))}},{key:"firstUpdated",value:function firstUpdated(){this.target.length>0&&(this.targetElement=(0,chunk_QU3DSPNU.jq)(this,_GdsCoachmark_instances,findTarget_fn).call(this,this.target),(0,chunk_QU3DSPNU.jq)(this,_GdsCoachmark_instances,updateCoachmarks_fn).call(this))}},{key:"setPreventClose",value:function setPreventClose(preventClose){this._preventClose=preventClose}},{key:"render",value:function render(){var _this4=this;return(0,custom_element_scoping.qy)(coachmark_component_t||(coachmark_component_t=coachmark_component_`${0}`),(0,when.z)(this.target.length>0,(function(){return(0,custom_element_scoping.qy)(coachmark_component_t2||(coachmark_component_t2=coachmark_component_`
        <div
          role="dialog"
          id="body"
          aria-label=${0}
          ${0}
        >
          <slot></slot>
          <div id="arrow" ${0}></div>
        </div>
      `),_this4.label,(0,ref.K)((0,chunk_QU3DSPNU.S7)(_this4,_cardRef)),(0,ref.K)((0,chunk_QU3DSPNU.S7)(_this4,_arrowRef)))}),(function(){return(0,custom_element_scoping.qy)(coachmark_component_t3||(coachmark_component_t3=coachmark_component_``))})))}}])}(gds_element.j);_cardRef=new WeakMap,_arrowRef=new WeakMap,_autoUpdateCleanupFn=new WeakMap,_GdsCoachmark_instances=new WeakSet,closeCoachMark_fn=function closeCoachMark_fn(){var _privateGet$value,_a;this._isVisible&&(this._isVisible=!1,null==(_privateGet$value=(0,chunk_QU3DSPNU.S7)(this,_cardRef).value)||_privateGet$value.remove(),null==(_a=(0,chunk_QU3DSPNU.S7)(this,_autoUpdateCleanupFn))||_a.call(this),this.dispatchCustomEvent("gds-ui-state",{detail:{open:this._isVisible,reason:"closed"},bubbles:!1,composed:!1}))},findTarget_fn=function findTarget_fn(selectors){var _step,shadow=!1,el=void 0,_iterator=_createForOfIteratorHelper(selectors);try{for(_iterator.s();!(_step=_iterator.n()).done;){var selector=_step.value;"shadowRoot"!==selector?el?shadow&&el.shadowRoot?(el=el.shadowRoot.querySelector(selector),shadow=!1):el=el.querySelector(selector):el=document.querySelector(selector):shadow=!0}}catch(err){_iterator.e(err)}finally{_iterator.f()}return el},checkBoundingRect_fn=function checkBoundingRect_fn(element,overlappedElement){if(element!=overlappedElement){var elementRect=element.getBoundingClientRect(),overlappedElementRect=overlappedElement.getBoundingClientRect();return elementRect.top<overlappedElementRect.bottom&&elementRect.bottom>overlappedElementRect.top&&elementRect.left<overlappedElementRect.right&&elementRect.right>overlappedElementRect.left}},checkOverlap_fn=function checkOverlap_fn(selectors){if(!selectors)return!1;var _step2,_iterator2=_createForOfIteratorHelper(selectors);try{for(_iterator2.s();!(_step2=_iterator2.n()).done;){var selector=_step2.value,el=document.querySelector(selector);if(el&&"hidden"!==getComputedStyle(el).visibility&&(0,chunk_QU3DSPNU.jq)(this,_GdsCoachmark_instances,checkBoundingRect_fn).call(this,this.targetElement,el))return!0}}catch(err){_iterator2.e(err)}finally{_iterator2.f()}return!1},isElementOutsideView_fn=function isElementOutsideView_fn(element){var elementRect=element.getBoundingClientRect(),windowHeight=window.innerHeight||document.documentElement.clientHeight,windowWidth=window.innerWidth||document.documentElement.clientWidth;return elementRect.top+elementRect.height<0||elementRect.top>windowHeight||elementRect.left+elementRect.width<0||elementRect.left>windowWidth},computeTooltipPosition_fn=function(){var _ref=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee2(targetedEl,componentEl,arrowEl){return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:return _context2.abrupt("return",(0,floating_ui_dom.rD)(targetedEl,componentEl,{placement:this.placement,middleware:[(0,floating_ui_dom.cY)((function(){return{mainAxis:16,alignmentAxis:16}})),{name:"detectOverflow",fn:function fn(positionState){return(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(){var overflow;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,(0,floating_ui_dom.__)(positionState,{boundary:document.body,rootBoundary:"document",altBoundary:!0,padding:{top:167,left:20}});case 2:return overflow=_context.sent,_context.abrupt("return",{data:overflow});case 4:case"end":return _context.stop()}}),_callee)})))()}},(0,floating_ui_dom.BN)({padding:16}),(0,floating_ui_dom.UU)(),(0,floating_ui_dom.jD)(),(0,floating_ui_dom.UE)({padding:16,element:arrowEl})]}));case 1:case"end":return _context2.stop()}}),_callee2,this)})));return function computeTooltipPosition_fn(_x,_x2,_x3){return _ref.apply(this,arguments)}}(),shouldTooltipBeVisible_fn=function shouldTooltipBeVisible_fn(){if(!this.targetElement)return!1;var isOutOfBound=(0,chunk_QU3DSPNU.jq)(this,_GdsCoachmark_instances,isElementOutsideView_fn).call(this,this.targetElement),targetIsVisible=this.targetElement.checkVisibility(),isOverlapping=0!==this.overlappedBy.length&&(0,chunk_QU3DSPNU.jq)(this,_GdsCoachmark_instances,checkOverlap_fn).call(this,this.overlappedBy);return this.computeVisibility(this,this.targetElement,!isOverlapping&&!isOutOfBound&&targetIsVisible)},updateCoachmarks_fn=function(){var _ref2=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee3(){var targetEl,componentEl,arrowEl,_this5=this;return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(targetEl=this.targetElement,componentEl=(0,chunk_QU3DSPNU.S7)(this,_cardRef).value,arrowEl=(0,chunk_QU3DSPNU.S7)(this,_arrowRef).value,targetEl&&componentEl&&arrowEl){_context3.next=5;break}return _context3.abrupt("return");case 5:try{(0,chunk_QU3DSPNU.OV)(this,_autoUpdateCleanupFn,(0,floating_ui_dom.ll)(targetEl,componentEl,(function(){(0,chunk_QU3DSPNU.jq)(_this5,_GdsCoachmark_instances,computeTooltipPosition_fn).call(_this5,targetEl,componentEl,arrowEl).then((function(_ref3){var x=_ref3.x,y=_ref3.y,middlewareData=_ref3.middlewareData,placement=_ref3.placement;if((0,chunk_QU3DSPNU.jq)(_this5,_GdsCoachmark_instances,shouldTooltipBeVisible_fn).call(_this5)){if(_this5._isVisible=!0,Object.assign(componentEl.style,{visibility:"visible",opacity:1,left:"".concat(x,"px"),top:"".concat(y,"px")}),middlewareData.arrow){var _middlewareData$arrow=middlewareData.arrow,x2=_middlewareData$arrow.x,y2=_middlewareData$arrow.y;arrowEl.removeAttribute("class"),arrowEl.classList.add("arrow-"+placement),Object.assign(arrowEl.style,{left:null!=x2?"".concat(x2,"px"):"",top:null!=y2?"".concat(y2,"px"):""})}}else _this5._isVisible=!1,Object.assign(componentEl.style,{visibility:"hidden",opacity:0})}))})))}catch(error){console.warn("failed to render tooltips")}case 6:case"end":return _context3.stop()}}),_callee3,this)})));return function updateCoachmarks_fn(){return _ref2.apply(this,arguments)}}(),coachmark_component_GdsCoachmark.styles=coachmark_styles_default,(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],coachmark_component_GdsCoachmark.prototype,"placement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],coachmark_component_GdsCoachmark.prototype,"overlappedBy",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],coachmark_component_GdsCoachmark.prototype,"target",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],coachmark_component_GdsCoachmark.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],coachmark_component_GdsCoachmark.prototype,"computeVisibility",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],coachmark_component_GdsCoachmark.prototype,"_isVisible",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],coachmark_component_GdsCoachmark.prototype,"_preventClose",2),coachmark_component_GdsCoachmark=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-coachmark")],coachmark_component_GdsCoachmark);var GdsCoachmark=function GdsCoachmark(props){coachmark_component_GdsCoachmark.define();var JSXElement=(0,react.p)("gds-coachmark"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsCoachmark.__docgenInfo={description:"",methods:[],displayName:"GdsCoachmark"};var context_menu_component=__webpack_require__("./dist/libs/core/src/components/context-menu/context-menu.component.js"),GdsContextMenu=function GdsContextMenu(props){context_menu_component.Hx.define();var JSXElement=(0,react.p)("gds-context-menu"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsContextMenu.__docgenInfo={description:"",methods:[],displayName:"GdsContextMenu"};var datepicker_component=__webpack_require__("./dist/libs/core/src/components/datepicker/datepicker.component.js"),GdsDatepicker=function GdsDatepicker(props){datepicker_component.L.define();var JSXElement=(0,react.p)("gds-datepicker"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsDatepicker.__docgenInfo={description:"",methods:[],displayName:"GdsDatepicker"};var details_icon_style_t,details_icon_component_t,styles=(0,lit.AH)(details_icon_style_t||(details_icon_style_t=(function _(t){return t})`
  :host {
    display: contents;
  }
`)),details_icon_component_=function _(t){return t};function details_icon_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(details_icon_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var details_icon_component_GdsIconDetails=function(_GdsElement){function GdsIconDetails(){var _this;return(0,classCallCheck.A)(this,GdsIconDetails),(_this=function details_icon_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,details_icon_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsIconDetails,arguments)).open=!1,_this}return(0,inherits.A)(GdsIconDetails,_GdsElement),(0,createClass.A)(GdsIconDetails,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(details_icon_component_t||(details_icon_component_t=details_icon_component_`
      <svg
        width="20"
        height="20"
        viewBox="0 0 20 20"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        id="plus"
      >
        <line x1="4" y1="10" x2="16" y2="10" />
        <line x1="10" y1="4" x2="10" y2="16">
          <animate
            attributeName="y1"
            dur="240ms"
            from="${0}"
            to="${0}"
            begin="plus.toggle"
            fill="freeze"
          />
          <animate
            attributeName="y2"
            dur="240ms"
            from="${0}"
            to="${0}"
            begin="plus.toggle"
            fill="freeze"
          />
        </line>
      </svg>
    `),this.open?"4":"10",this.open?"10":"4",this.open?"16":"10",this.open?"10":"16")}},{key:"updated",value:function updated(changedProperties){if(changedProperties.has("open")){var _this$shadowRoot,svg=null==(_this$shadowRoot=this.shadowRoot)?void 0:_this$shadowRoot.querySelector("svg");if(svg){var event=new CustomEvent("toggle",{bubbles:!0,composed:!0});svg.dispatchEvent(event)}}}}])}(gds_element.j);details_icon_component_GdsIconDetails.styles=[styles],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],details_icon_component_GdsIconDetails.prototype,"open",2),details_icon_component_GdsIconDetails=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-icon-details")],details_icon_component_GdsIconDetails);var details_styles_t,details_component_t,details_component_t2,details_component_t3,details_component_t4,_handleToggle,_handleKeydown,_syncGroupState,_dispatchStateEvent,_renderHeader,_renderIconButton,_renderContent,details_styles_default=(0,lit.AH)(details_styles_t||(details_styles_t=(function _(t){return t})`
  @layer base, reset;
  @layer base {
    .details {
      border-bottom: solid var(--gds-sys-space-5xs)
        var(--gds-sys-color-border-subtle-01);
      font: var(--gds-sys-text-body-regular-m);
      color: var(--gds-sys-color-content-neutral-01);
      transition: border-color 240ms linear;
    }

    .summary {
      display: flex;
      justify-content: space-between;
      align-items: center;
      list-style: none;
      user-select: none;
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      transition: all 120ms;
      color: var(--gds-sys-color-content-neutral-01);
    }

    .summary-icon {
      border-radius: var(--gds-sys-radius-max);
      background-color: transparent;
      transition: all 280ms;
      aspect-ratio: 1;
      width: max-content;
      height: max-content;
      line-height: 1;
      position: relative;
    }

    .summary-icon::after {
      content: '';
      position: absolute;
      border-radius: var(--gds-sys-radius-max);
      transition: all 280ms;
      inset: 0;
      scale: 0.9;
      opacity: 0;
      pointer-events: none;
    }

    .summary:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }

    @media (pointer: fine) {
      .summary:hover .summary-icon::after,
      .summary:focus-visible .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .summary:active .summary-icon::after {
        opacity: 1;
        scale: 1;
      }

      .details:hover,
      .details:focus-within {
        border-color: var(--gds-sys-color-border-strong);
      }
    }

    .summary-label {
      font: var(--gds-sys-text-heading-xs);
      padding-block: var(--gds-sys-space-m);
      cursor: pointer;
      flex: 1;
      outline: none;
    }

    .details.small .summary-label {
      font: var(--gds-sys-text-heading-2xs);
      padding-block: var(--gds-sys-space-s);
    }

    .details.small .content {
      font: var(--gds-sys-text-heading-2xs);
    }

    .details:focus-visible {
      border-radius: var(--gds-sys-radius-2xs);
    }

    .details.open .content {
      padding-block-end: var(--gds-sys-space-l);
    }

    .details.small.open .content {
      padding-block-end: var(--gds-sys-space-s);
    }

    .content {
      interpolate-size: allow-keywords;
      height: 0;
      transition:
        height 0.35s ease,
        padding-block-end 0.35s ease;
      overflow: hidden;
      outline: none;
      scrollbar-width: none;
    }

    .content.open {
      overflow: auto;
      height: max-content;
      max-height: 100vh;
    }
  }
`)),details_component_=function _(t){return t};function details_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(details_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var details_component_GdsDetails=function(_withSizeXProps){function GdsDetails(){var _this;return(0,classCallCheck.A)(this,GdsDetails),(_this=function details_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,details_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsDetails,arguments)).summary="",_this.name="",_this.open=!1,_this.size="large",(0,chunk_QU3DSPNU.VK)(_this,_handleToggle,(function(){_this.open=!_this.open,(0,chunk_QU3DSPNU.S7)(_this,_dispatchStateEvent).call(_this)})),(0,chunk_QU3DSPNU.VK)(_this,_handleKeydown,(function(event){"Enter"!==event.key&&" "!==event.key||(event.preventDefault(),(0,chunk_QU3DSPNU.S7)(_this,_handleToggle).call(_this))})),(0,chunk_QU3DSPNU.VK)(_this,_syncGroupState,(function(){_this.open&&_this.name&&document.querySelectorAll('[gds-element="gds-details"]').forEach((function(details){var _a;if(details!==_this&&details.name===_this.name){var other=details;other.open=!1,(0,chunk_QU3DSPNU.S7)(_a=other,_dispatchStateEvent).call(_a)}}))})),(0,chunk_QU3DSPNU.VK)(_this,_dispatchStateEvent,(function(){_this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:_this.open})})),(0,chunk_QU3DSPNU.VK)(_this,_renderHeader,(function(){return(0,custom_element_scoping.qy)(details_component_t||(details_component_t=details_component_`
      <div
        class="summary"
        part="summary"
        role="button"
        tabindex="0"
        @click=${0}
        @keydown=${0}
        aria-expanded="${0}"
        aria-controls="content-${0}"
      >
        <div id="summary-${0}" class="summary-label">
          ${0}
        </div>
        ${0}
      </div>
    `),(0,chunk_QU3DSPNU.S7)(_this,_handleToggle),(0,chunk_QU3DSPNU.S7)(_this,_handleKeydown),_this.open,_this.name||"default",_this.name||"default",_this.summary||"Summary",(0,chunk_QU3DSPNU.S7)(_this,_renderIconButton).call(_this))})),(0,chunk_QU3DSPNU.VK)(_this,_renderIconButton,(function(){return(0,custom_element_scoping.qy)(details_component_t2||(details_component_t2=details_component_`
      <div class="summary-icon" role="presentation" aria-hidden="true">
        <gds-button
          rank="tertiary"
          size=${0}
          role="presentation"
          tabindex="-1"
        >
          <gds-icon-details .open=${0}></gds-icon-details>
        </gds-button>
      </div>
    `),"small"===_this.size?"xs":"medium",_this.open)})),(0,chunk_QU3DSPNU.VK)(_this,_renderContent,(function(){return(0,custom_element_scoping.qy)(details_component_t3||(details_component_t3=details_component_`
      <div
        id="content-${0}"
        class=${0}
        aria-hidden="${0}"
        ?inert="${0}"
      >
        <slot></slot>
      </div>
    `),_this.name||"default",(0,class_map.H)({content:!0,open:_this.open,small:"small"===_this.size}),!_this.open,!_this.open)})),_this}return(0,inherits.A)(GdsDetails,_withSizeXProps),(0,createClass.A)(GdsDetails,[{key:"__handleOpenChange",value:function __handleOpenChange(){(0,chunk_QU3DSPNU.S7)(this,_syncGroupState).call(this)}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(details_component_t4||(details_component_t4=details_component_`
      <div
        class=${0}
      >
        ${0} ${0}
      </div>
    `),(0,class_map.H)({details:!0,open:this.open,small:"small"===this.size}),(0,chunk_QU3DSPNU.S7)(this,_renderHeader).call(this),(0,chunk_QU3DSPNU.S7)(this,_renderContent).call(this))}}])}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(gds_element.j))));_handleToggle=new WeakMap,_handleKeydown=new WeakMap,_syncGroupState=new WeakMap,_dispatchStateEvent=new WeakMap,_renderHeader=new WeakMap,_renderIconButton=new WeakMap,_renderContent=new WeakMap,details_component_GdsDetails.styles=[tokens_style.LU,details_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],details_component_GdsDetails.prototype,"summary",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],details_component_GdsDetails.prototype,"name",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],details_component_GdsDetails.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],details_component_GdsDetails.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)(".content")],details_component_GdsDetails.prototype,"_content",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)('slot[name="summary-icon-open"]')],details_component_GdsDetails.prototype,"_openIconSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)('slot[name="summary-icon-closed"]')],details_component_GdsDetails.prototype,"_closedIconSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("open")],details_component_GdsDetails.prototype,"__handleOpenChange",1),details_component_GdsDetails=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-details",{dependsOn:[button_component.t,details_icon_component_GdsIconDetails]})],details_component_GdsDetails);var GdsDetails=function GdsDetails(props){details_component_GdsDetails.define();var JSXElement=(0,react.p)("gds-details"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsDetails.__docgenInfo={description:"",methods:[],displayName:"GdsDetails"};var dialog_styles_t,scroll_lock_t,platform=__webpack_require__("./dist/libs/core/src/utils/helpers/platform.js"),cross_large_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/cross-large.component.js"),dialog_styles_default=(0,lit.AH)(dialog_styles_t||(dialog_styles_t=(function _(t){return t})`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: contents;

      --_margin: var(--gds-sys-space-l);
    }

    dialog {
      transition: transform var(--gds-sys-motion-duration-fast)
        cubic-bezier(var(--gds-sys-motion-easing-ease-out));
      background: transparent;
      padding: 0;
      border-width: 0;
      overflow: visible;
      max-width: calc(100vw - var(--_margin));
      max-height: 100vh;
      display: flex;
      width: 400px;

      @starting-style {
        opacity: 0;
        transform: translateY(-16px);
        &::backdrop {
          opacity: 0;
        }
      }

      &::backdrop {
        transition: all var(--gds-sys-motion-duration-fast)
          cubic-bezier(var(--gds-sys-motion-easing-ease-out));
        background: rgba(100, 100, 100, 0.4);
      }
    }

    dialog > * {
      flex-grow: 1;
    }

    dialog.default.placement-initial {
      margin: auto;
      --_margin: 0px;
    }

    dialog.default.placement-top {
      margin: var(--gds-sys-space-l) auto auto;
    }

    dialog.default.placement-bottom {
      margin: auto auto var(--gds-sys-space-l) auto;
    }

    dialog.default.placement-left {
      margin: auto var(--gds-sys-space-l) auto auto;
    }
    dialog.default.placement-right {
      margin: auto auto auto var(--gds-sys-space-l);
    }

    dialog.slide-out {
      --_in: var(--gds-sys-space-m);
      --_margin: var(--gds-sys-space-l);

      height: auto;

      &.placement-initial,
      &.placement-right {
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) var(--_in) var(--_in) auto;
        }

        @starting-style {
          transform: translateX(var(--gds-sys-space-6xl));
        }
      }

      &.placement-left {
        @starting-style {
          transform: translateX(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in);

        @media (min-width: 648px) {
          --_in: var(--gds-sys-space-l);
          inset: var(--_in) auto var(--_in) var(--_in);
        }
      }

      &.placement-top {
        @starting-style {
          transform: translateY(calc(-1 * var(--gds-sys-space-6xl)));
        }
        inset: var(--_in) var(--_in) auto var(--_in);
      }

      &.placement-bottom {
        @starting-style {
          transform: translateY(calc(var(--gds-sys-space-6xl)));
        }
        inset: auto var(--_in) var(--_in) var(--_in);
      }
    }

    dialog:focus {
      outline: none;
    }

    .card {
      flex-direction: column;
    }

    slot[name='footer'] > *,
    slot[name='footer']::slotted(*) {
      flex: 1;
    }

    h2 {
      margin: 0;
      padding: 0;
      font: var(--gds-sys-text-heading-s);
      margin-block-start: var(--gds-sys-space-4xs);
    }
  }
`)),global_styles=__webpack_require__("./dist/libs/core/src/utils/global-styles.js"),scroll_lock_=function _(t){return t},locks=new Set;function lockBodyScrolling(lockingEl){if(locks.add(lockingEl),!document.documentElement.classList.contains("gds-scroll-lock")){var scrollbarWidth=function getScrollbarWidth(){var documentWidth=document.documentElement.clientWidth;return Math.abs(window.innerWidth-documentWidth)}()+function getExistingBodyPadding(){var padding=Number(getComputedStyle(document.body).paddingRight.replace(/px/,""));if(isNaN(padding)||!padding)return 0;return padding}(),scrollbarGutterProperty=getComputedStyle(document.documentElement).scrollbarGutter;scrollbarGutterProperty&&"auto"!==scrollbarGutterProperty||(scrollbarGutterProperty="stable"),scrollbarWidth<2&&(scrollbarGutterProperty=""),document.documentElement.style.setProperty("--gds-scroll-lock-gutter",scrollbarGutterProperty),document.documentElement.classList.add("gds-scroll-lock"),document.documentElement.style.setProperty("--gds-scroll-lock-size","".concat(scrollbarWidth,"px"))}}function unlockBodyScrolling(lockingEl){locks.delete(lockingEl),0===locks.size&&(document.documentElement.classList.remove("gds-scroll-lock"),document.documentElement.style.removeProperty("--gds-scroll-lock-size"))}var dialog_component_t,dialog_component_t2,_returnValue,_clickStartedInside,_handleNativeClose,_dispatchCloseEvent,_dispatchShowEvent,_dispatchUiStateEvent,_GdsDialog_instances,handleTriggerSlotChange_fn,_handleTriggerClick,_handleClickOutside,dialog_component_=function _(t){return t};function dialog_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(dialog_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}!function registerGlobalScrollLockStyles(){global_styles.J.instance.injectGlobalStyles("dialog-scroll-lock",(0,lit.AH)(scroll_lock_t||(scroll_lock_t=scroll_lock_`
      .gds-scroll-lock body {
        padding-right: var(--gds-scroll-lock-size) !important;
        overflow: hidden !important;
      }
    `)))}();var dialog_component_GdsDialog=function(_withSizeXProps){function GdsDialog(){var _this;return(0,classCallCheck.A)(this,GdsDialog),_this=function dialog_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,dialog_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsDialog,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsDialog_instances),_this.open=!1,_this.variant="default",_this.placement="initial",_this.scrollable=!1,(0,chunk_QU3DSPNU.VK)(_this,_returnValue),(0,chunk_QU3DSPNU.VK)(_this,_clickStartedInside,!1),(0,chunk_QU3DSPNU.VK)(_this,_handleNativeClose,(function(e){var returnValue=e.target.returnValue;if("prop-change"===returnValue)_this.close(returnValue);else{if(returnValue=returnValue||"native-close",!(0,chunk_QU3DSPNU.S7)(_this,_dispatchCloseEvent).call(_this,returnValue))return;_this.close(returnValue)}})),(0,chunk_QU3DSPNU.VK)(_this,_dispatchCloseEvent,(function(reason){return!!(0,chunk_QU3DSPNU.S7)(_this,_dispatchUiStateEvent).call(_this,reason)&&(_this.dispatchCustomEvent("gds-close",{detail:reason}),!0)})),(0,chunk_QU3DSPNU.VK)(_this,_dispatchShowEvent,(function(reason){return!!(0,chunk_QU3DSPNU.S7)(_this,_dispatchUiStateEvent).call(_this,reason)&&(_this.dispatchCustomEvent("gds-show",{detail:reason}),!0)})),(0,chunk_QU3DSPNU.VK)(_this,_dispatchUiStateEvent,(function(reason){return _this.dispatchCustomEvent("gds-ui-state",{detail:{reason,open:_this.open}})})),(0,chunk_QU3DSPNU.VK)(_this,_handleTriggerClick,(function(e){_this.show("slotted-trigger")})),(0,chunk_QU3DSPNU.VK)(_this,_handleClickOutside,(function(evt){var e=evt,dialog=_this._elDialog;if((e.clientX>0||e.clientY>0)&&e.target===_this&&dialog&&_this.open){var rect=dialog.getBoundingClientRect();rect.top<=e.clientY&&e.clientY<=rect.top+rect.height&&rect.left<=e.clientX&&e.clientX<=rect.left+rect.width||(0,chunk_QU3DSPNU.S7)(_this,_clickStartedInside)||!(0,chunk_QU3DSPNU.S7)(_this,_dispatchCloseEvent).call(_this,"click-outside")||_this.close("click-outside")}(0,chunk_QU3DSPNU.OV)(_this,_clickStartedInside,!1)})),_this}return(0,inherits.A)(GdsDialog,_withSizeXProps),(0,createClass.A)(GdsDialog,[{key:"show",value:function show(reason){this.open=!0,reason&&(0,chunk_QU3DSPNU.S7)(this,_dispatchShowEvent).call(this,reason)}},{key:"close",value:function close(reason){(0,chunk_QU3DSPNU.OV)(this,_returnValue,reason),this.open=!1}},{key:"disconnectedCallback",value:function disconnectedCallback(){!function dialog_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsDialog,"disconnectedCallback",this,3)([]),unlockBodyScrolling(this)}},{key:"render",value:function render(){var _this2=this;return(0,custom_element_scoping.qy)(dialog_component_t||(dialog_component_t=dialog_component_`<slot
        name="trigger"
        @slotchange=${0}
      ></slot>
      ${0}`),(0,chunk_QU3DSPNU.jq)(this,_GdsDialog_instances,handleTriggerSlotChange_fn),(0,when.z)(this.open,(function(){return(0,custom_element_scoping.qy)(dialog_component_t2||(dialog_component_t2=dialog_component_`<dialog
            closedby="closerequest"
            @close=${0}
            class=${0}
            aria-label=${0}
          >
            <gds-card
              class="card"
              padding="xl"
              variant="secondary"
              box-shadow="xl"
              border-radius="m"
              max-width="100%"
              border-width="0"
              @mousedown=${0}
            >
              <slot name="dialog">
                <gds-flex justify-content="space-between">
                  <h2 id="heading">${0}</h2>
                  <gds-button
                    id="close-btn"
                    rank="tertiary"
                    size="small"
                    label=${0}
                    @click=${0}
                  >
                    <gds-icon-cross-large
                      size="m"
                      stroke="2"
                    ></gds-icon-cross-large>
                  </gds-button>
                </gds-flex>
                <gds-div
                  id="content"
                  flex="1"
                  overflow=${0}
                >
                  <slot></slot>
                </gds-div>
                <gds-flex
                  class="footer"
                  justify-content="center"
                  gap="s"
                  padding="s 0 0 0"
                  flex-wrap="wrap"
                >
                  <slot name="footer">
                    <gds-button
                      value="cancel"
                      @click=${0}
                      rank="secondary"
                      >${0}</gds-button
                    >
                    <gds-button value="ok" @click=${0}>
                      Ok
                    </gds-button>
                  </slot>
                </gds-flex>
              </slot>
            </gds-card>
          </dialog>`),(0,chunk_QU3DSPNU.S7)(_this2,_handleNativeClose),(0,class_map.H)((0,defineProperty.A)((0,defineProperty.A)({},_this2.variant,!0),"placement-".concat(_this2.placement),!0)),(0,if_defined.J)(_this2.heading),(function(){return(0,chunk_QU3DSPNU.OV)(_this2,_clickStartedInside,!0)}),_this2.heading,(0,lit_localize.ab)("Close"),(function(){return _this2.close("btn-close")}),(0,if_defined.J)(_this2.scrollable)?"auto":lit.s6,(function(){return _this2.close("btn-cancel")}),(0,lit_localize.ab)("Cancel"),(function(){return _this2.close("btn-ok")}))})))}},{key:"_handleOpenChange",value:function _handleOpenChange(){var _this$_elDialog,_this3=this;this.open?((0,chunk_QU3DSPNU.OV)(this,_returnValue,void 0),this.updateComplete.then((function(){var _this3$_elDialog,_this3$_elDialog2;(null==(_this3$_elDialog=_this3._elDialog)||_this3$_elDialog.showModal(),lockBodyScrolling(_this3),_this3.removeEventListener("click",(0,chunk_QU3DSPNU.S7)(_this3,_handleClickOutside)),requestAnimationFrame((function(){return _this3.addEventListener("click",(0,chunk_QU3DSPNU.S7)(_this3,_handleClickOutside))})),platform.u)&&(null==(_this3$_elDialog2=_this3._elDialog)||_this3$_elDialog2.focus())}))):((0,chunk_QU3DSPNU.OV)(this,_returnValue,(0,chunk_QU3DSPNU.S7)(this,_returnValue)||"prop-change"),null==(_this$_elDialog=this._elDialog)||_this$_elDialog.close((0,chunk_QU3DSPNU.S7)(this,_returnValue)),unlockBodyScrolling(this),document.removeEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleClickOutside)),this.requestUpdate("open"))}}])}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.vi)((0,declarative_layout_mixins.Md)(gds_element.j))));_returnValue=new WeakMap,_clickStartedInside=new WeakMap,_handleNativeClose=new WeakMap,_dispatchCloseEvent=new WeakMap,_dispatchShowEvent=new WeakMap,_dispatchUiStateEvent=new WeakMap,_GdsDialog_instances=new WeakSet,handleTriggerSlotChange_fn=function handleTriggerSlotChange_fn(){if(this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]){var trigger=this._elTriggerSlot.assignedElements()[0];null==trigger||trigger.addEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleTriggerClick)),null==trigger||trigger.setAttribute("aria-haspopup","dialog")}},_handleTriggerClick=new WeakMap,_handleClickOutside=new WeakMap,dialog_component_GdsDialog.styles=[dialog_styles_default],dialog_component_GdsDialog.styleExpressionBaseSelector="dialog",(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],dialog_component_GdsDialog.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],dialog_component_GdsDialog.prototype,"heading",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],dialog_component_GdsDialog.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],dialog_component_GdsDialog.prototype,"placement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],dialog_component_GdsDialog.prototype,"scrollable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("dialog")],dialog_component_GdsDialog.prototype,"_elDialog",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)('slot[name="trigger"]')],dialog_component_GdsDialog.prototype,"_elTriggerSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("open")],dialog_component_GdsDialog.prototype,"_handleOpenChange",1),dialog_component_GdsDialog=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-dialog",{dependsOn:[button_component.t,card_component.z,div_component.o,flex_component.o,cross_large_component.z]}),(0,lit_localize.cc)()],dialog_component_GdsDialog);var GdsDialog=function GdsDialog(props){dialog_component_GdsDialog.define();var JSXElement=(0,react.p)("gds-dialog"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsDialog.__docgenInfo={description:"",methods:[],displayName:"GdsDialog"};var divider_styles_t,divider_component_t,div=__webpack_require__("./dist/libs/core/src/generated/react/div/index.js"),style_expression_helpers=__webpack_require__("./dist/libs/core/src/utils/helpers/style-expression-helpers.js"),divider_styles_default=(0,lit.AH)(divider_styles_t||(divider_styles_t=(function _(t){return t})`
  :host {
    display: flex;
    align-items: center;
    width: 100%;
    height: var(--_size);
  }

  hr {
    width: 100%;
    height: 1px;
    min-height: 1px;
    max-height: 1px;
    border: 0;
    margin: 0;
    padding: 0;
    background: var(--_color, currentColor);
    box-sizing: border-box;
  }
`)),divider_component_=function _(t){return t};function divider_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(divider_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var divider_component_GdsDivider=function(_withSizeXProps){function GdsDivider(){var _this;return(0,classCallCheck.A)(this,GdsDivider),(_this=function divider_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,divider_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsDivider,arguments)).role=null,_this}return(0,inherits.A)(GdsDivider,_withSizeXProps),(0,createClass.A)(GdsDivider,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(divider_component_t||(divider_component_t=divider_component_`<hr role=${0} />`),this.role||lit.s6)}}])}((0,declarative_layout_mixins.Q8)(gds_element.j));divider_component_GdsDivider.styles=[tokens_style.LU,divider_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(Object.assign({},(0,style_expression_helpers.T$)("border"),{property:"--_color"}))],divider_component_GdsDivider.prototype,"color",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({property:"--_size",valueTemplate:function valueTemplate(v){return"var(--gds-sys-space-".concat(v,")")}})],divider_component_GdsDivider.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],divider_component_GdsDivider.prototype,"opacity",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],divider_component_GdsDivider.prototype,"role",2),divider_component_GdsDivider=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-divider")],divider_component_GdsDivider);var GdsDivider=function GdsDivider(props){divider_component_GdsDivider.define();var JSXElement=(0,react.p)("gds-divider"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsDivider.__docgenInfo={description:"",methods:[],displayName:"GdsDivider"};var dropdown_component=__webpack_require__("./dist/libs/core/src/components/dropdown/dropdown.component.js"),GdsDropdown=function GdsDropdown(props){dropdown_component.E.define();var JSXElement=(0,react.p)("gds-dropdown"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsDropdown.__docgenInfo={description:"",methods:[],displayName:"GdsDropdown"};var fab_styles_t,fab_styles_default=(0,lit.AH)(fab_styles_t||(fab_styles_t=(function _(t){return t})`
  :host {
    display: flex;
    z-index: 1050;
    position: fixed;
    inset: auto var(--gds-sys-space-3xl) var(--gds-sys-space-3xl) auto;
  }
  .button {
    box-shadow: var(--gds-sys-shadow-m-01), var(--gds-sys-shadow-m-02);
    block-size: calc(var(--_block-size) + var(--gds-sys-space-xs));
    width: max-content;
  }

  ::slotted([gds-element='gds-signal']) {
    margin-left: var(--gds-sys-space-xs);
  }
`));function fab_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(fab_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var fab_component_GdsFab=function(_withPositioningProps){function GdsFab(){return(0,classCallCheck.A)(this,GdsFab),function fab_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,fab_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFab,arguments)}return(0,inherits.A)(GdsFab,_withPositioningProps),(0,createClass.A)(GdsFab,[{key:"connectedCallback",value:function connectedCallback(){!function fab_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFab,"connectedCallback",this,3)([]),this._dynamicStylesController.inject("FAB_styles",fab_styles_default)}}])}((0,declarative_layout_mixins.qC)(button_component.t));fab_component_GdsFab=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-fab")],fab_component_GdsFab);var GdsFab=function GdsFab(props){fab_component_GdsFab.define();var JSXElement=(0,react.p)("gds-fab"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFab.__docgenInfo={description:"",methods:[],displayName:"GdsFab"};var filter_chips_component=__webpack_require__("./dist/libs/core/src/components/filter-chips/filter-chips.component.js"),GdsFilterChips=function GdsFilterChips(props){filter_chips_component.A.define();var JSXElement=(0,react.p)("gds-filter-chips"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFilterChips.__docgenInfo={description:"",methods:[],displayName:"GdsFilterChips"};var GdsFlex=function GdsFlex(props){flex_component.o.define();var JSXElement=(0,react.p)("gds-flex"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFlex.__docgenInfo={description:"",methods:[],displayName:"GdsFlex"};var summary_styles_t,summary_component_t,summary_component_t2,summary_component_t3,summary_component_t4,summary_component_t5,summary_component_t6,summary_component_t7,summary_component_t8,_form,_formObserver,_GdsFormSummary_instances,getFormControls_fn,getErrorControls_fn,renderArrowIcon_fn,until=__webpack_require__("./node_modules/lit/directives/until.js"),arrow_up_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/arrow-up.component.js"),summary_styles_default=(0,lit.AH)(summary_styles_t||(summary_styles_t=(function _(t){return t})`
  :host {
    display: contents;
  }
  ul {
    list-style-type: none;
    margin: 1rem 0 0;
    padding: 0;
  }
  li {
    margin: 0;
    transition:
      max-height 0.3s ease-in-out,
      opacity 0.3s ease-in-out,
      margin 0.3s ease-in-out;
  }
  li[inert] {
    max-height: 0;
    opacity: 0;
  }
  li:not([inert]) {
    max-height: 4rem;
    opacity: 1;
  }
  a {
    color: inherit;
  }
`)),summary_component_=function _(t){return t};function summary_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(summary_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function summary_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var summary_component_GdsFormSummary=function(_GdsElement){function GdsFormSummary(){var _this;return(0,classCallCheck.A)(this,GdsFormSummary),_this=function summary_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,summary_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormSummary,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsFormSummary_instances),_this.hideErrors=!1,_this.reactive=!1,(0,chunk_QU3DSPNU.VK)(_this,_form),(0,chunk_QU3DSPNU.VK)(_this,_formObserver),_this}return(0,inherits.A)(GdsFormSummary,_GdsElement),(0,createClass.A)(GdsFormSummary,[{key:"errorCount",get:function get(){return(0,chunk_QU3DSPNU.jq)(this,_GdsFormSummary_instances,getErrorControls_fn).call(this).length}},{key:"focus",value:function focus(options){this._elRoot.then((function(el){var firstFocusable=el.querySelector('[gds-element="gds-button"]');firstFocusable&&firstFocusable.focus(options)}))}},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;summary_component_superPropGet(GdsFormSummary,"connectedCallback",this,3)([]),(0,chunk_QU3DSPNU.OV)(this,_form,this.closest("form")||void 0),(0,chunk_QU3DSPNU.S7)(this,_form)&&this.reactive&&((0,chunk_QU3DSPNU.OV)(this,_formObserver,new MutationObserver((function(){_this2.refresh()}))),(0,chunk_QU3DSPNU.S7)(this,_formObserver).observe((0,chunk_QU3DSPNU.S7)(this,_form),{attributes:!0,subtree:!0}))}},{key:"disconnectedCallback",value:function disconnectedCallback(){var _privateGet;summary_component_superPropGet(GdsFormSummary,"disconnectedCallback",this,3)([]),null==(_privateGet=(0,chunk_QU3DSPNU.S7)(this,_formObserver))||_privateGet.disconnect()}},{key:"refresh",value:function refresh(){this.requestUpdate()}},{key:"render",value:function render(){var _this3=this,formControls=(0,chunk_QU3DSPNU.jq)(this,_GdsFormSummary_instances,getFormControls_fn).call(this),errorControls=(0,chunk_QU3DSPNU.jq)(this,_GdsFormSummary_instances,getErrorControls_fn).call(this);return(0,when.z)(errorControls.length>0,(function(){return(0,custom_element_scoping.qy)(summary_component_t||(summary_component_t=summary_component_`<gds-card
          id="root"
          role="navigation"
          variant="negative"
          padding="l"
          background="negative-01"
          color="negative-01"
          overflow="hidden"
          aria-describedby="description"
          aria-label=${0}
        >
          <gds-flex gap="0" flex-direction="column">
            <gds-text font="heading-xs" font-weight="book" id="description">
              ${0}
            </gds-text>
            <ul>
              ${0}
            </ul>
          </gds-flex>
        </gds-card>`),(0,lit_localize.ab)("Form error summary"),(0,lit_localize.ab)((0,lit_localize.gx)(summary_component_t2||(summary_component_t2=summary_component_`There are ${0} errors to correct before you can continue:`),errorControls.length)),formControls.map((function(el,idx){return(0,custom_element_scoping.qy)(summary_component_t3||(summary_component_t3=summary_component_`<li ?inert=${0}>
                    <gds-card
                      display="flex"
                      padding="s"
                      flex-direction="row"
                      align-items="center"
                      justify-content="space-between"
                      gap="xs"
                      level="3"
                      color="negative-01"
                      background="transparent; hover: negative-01/.1"
                      style="cursor: pointer"
                      border-width="0"
                      border-radius="xs"
                      margin="0 -xs"
                      @click=${0}
                    >
                      <div id=${0}>
                        <gds-div font-weight="book"
                          >${0}</gds-div
                        >
                        ${0}
                      </div>
                      <gds-button
                        size="small"
                        variant="negative"
                        label=${0}
                      >
                        ${0}
                      </gds-button>
                    </gds-card>
                  </li>`),!("true"===el.ariaInvalid||el.invalid),(function(e){e.preventDefault(),el.focus()}),"error-label-".concat(idx),el.dataset.label||el.label||el.ariaLabel,(0,when.z)(!_this3.hideErrors,(function(){return(0,custom_element_scoping.qy)(summary_component_t4||(summary_component_t4=summary_component_`<gds-div font="body-regular-s">
                              ${0}
                            </gds-div>`),el.dataset.errormessage||el.errorMessage||el.ariaErrorMessage)})),"Move focus to ".concat(el.label," field"),(0,until.T)((0,chunk_QU3DSPNU.jq)(_this3,_GdsFormSummary_instances,renderArrowIcon_fn).call(_this3,el),lit.s6))})))}))}}])}(gds_element.j);_form=new WeakMap,_formObserver=new WeakMap,_GdsFormSummary_instances=new WeakSet,getFormControls_fn=function getFormControls_fn(){var _privateGet2;return Array.from((null==(_privateGet2=(0,chunk_QU3DSPNU.S7)(this,_form))?void 0:_privateGet2.elements)||[]).filter((function(el){return"gds-checkbox"!==el.gdsElementName}))},getErrorControls_fn=function getErrorControls_fn(){return(0,chunk_QU3DSPNU.jq)(this,_GdsFormSummary_instances,getFormControls_fn).call(this).filter((function(el){return"true"===el.ariaInvalid||el.invalid}))},renderArrowIcon_fn=function(){var _ref=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(el){var selfTop,elTop,isAbove;return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,this._elRoot;case 2:return selfTop=_context.sent.getBoundingClientRect().top,elTop=el.getBoundingClientRect().top,isAbove=elTop<selfTop,_context.abrupt("return",isAbove?(0,custom_element_scoping.qy)(summary_component_t5||(summary_component_t5=summary_component_t7||(summary_component_t7=summary_component_`<gds-icon-arrow-up></gds-icon-arrow-up>`))):(0,custom_element_scoping.qy)(summary_component_t6||(summary_component_t6=summary_component_t8||(summary_component_t8=summary_component_`<gds-icon-arrow-up
          style="transform: rotate(180deg)"
        ></gds-icon-arrow-up>`))));case 6:case"end":return _context.stop()}}),_callee,this)})));return function renderArrowIcon_fn(_x){return _ref.apply(this,arguments)}}(),summary_component_GdsFormSummary.styles=[tokens_style.LU,summary_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],summary_component_GdsFormSummary.prototype,"hideErrors",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],summary_component_GdsFormSummary.prototype,"reactive",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#root")],summary_component_GdsFormSummary.prototype,"_elRoot",2),summary_component_GdsFormSummary=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-form-summary",{dependsOn:[card_component.z,flex_component.o,div_component.o,button_component.t,arrow_up_component.U]})],summary_component_GdsFormSummary);var GdsFormSummary=function GdsFormSummary(props){summary_component_GdsFormSummary.define();var JSXElement=(0,react.p)("gds-form-summary"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFormSummary.__docgenInfo={description:"",methods:[],displayName:"GdsFormSummary"};var grid_styles_t,grid_component_t,grid_styles_default=(0,lit.AH)(grid_styles_t||(grid_styles_t=(function _(t){return t})`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    width: 100%;
    display: grid;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
    box-sizing: border-box;
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`)),grid_component_=function _(t){return t};function grid_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(grid_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var grid_component_GdsGrid=function(_GdsDiv){function GdsGrid(){return(0,classCallCheck.A)(this,GdsGrid),function grid_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,grid_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsGrid,arguments)}return(0,inherits.A)(GdsGrid,_GdsDiv),(0,createClass.A)(GdsGrid,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(grid_component_t||(grid_component_t=grid_component_`<slot></slot>`))}}])}(div_component.o);grid_component_GdsGrid.styles=[tokens_style.LU,grid_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({property:"--_c"})],grid_component_GdsGrid.prototype,"columns",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(Object.assign({},style_expression_helpers.MF,{styleTemplate:function styleTemplate(_prop,values){var rowGap=values[0],colGap=values[1]||rowGap;return"--_gap-column: ".concat(colGap,"; --_gap-row: ").concat(rowGap,";")}}))],grid_component_GdsGrid.prototype,"gap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({reflect:!0,property:"--_col-width",valueTemplate:function valueTemplate(v){return"".concat(isNaN(v)?v:"".concat(v,"px"))}})],grid_component_GdsGrid.prototype,"auto-columns",2),grid_component_GdsGrid=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-grid")],grid_component_GdsGrid);var GdsGrid=function GdsGrid(props){grid_component_GdsGrid.define();var JSXElement=(0,react.p)("gds-grid"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsGrid.__docgenInfo={description:"",methods:[],displayName:"GdsGrid"};var grouped_list_component=__webpack_require__("./dist/libs/core/src/components/grouped-list/grouped-list.component.js"),GdsGroupedList=function GdsGroupedList(props){grouped_list_component.d.define();var JSXElement=(0,react.p)("gds-grouped-list"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsGroupedList.__docgenInfo={description:"",methods:[],displayName:"GdsGroupedList"};var list_item_component=__webpack_require__("./dist/libs/core/src/components/grouped-list/list-item.component.js"),GdsListItem=function GdsListItem(props){list_item_component.s.define();var JSXElement=(0,react.p)("gds-list-item"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsListItem.__docgenInfo={description:"",methods:[],displayName:"GdsListItem"};var icon_component=__webpack_require__("./dist/libs/core/src/components/icon/icon.component.js"),GdsIcon=function GdsIcon(props){icon_component.M.define();var JSXElement=(0,react.p)("gds-icon"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsIcon.__docgenInfo={description:"",methods:[],displayName:"GdsIcon"};var GdsImg=function GdsImg(props){img_component_GdsImg.define();var JSXElement=(0,react.p)("gds-img"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsImg.__docgenInfo={description:"",methods:[],displayName:"GdsImg"};var textarea_styles_t,textarea_component_t,textarea_component_t2,textarea_component_t3,textarea_component_t4,textarea_component_t5,textarea_component_t6,textarea_component_t7,textarea_component_t8,_charCounterComputed,_Textarea_instances,shouldShowFooter_fn,_handleOnInput,_handleOnChange,_handleOnPaste,_handleFieldClick,_handleClearBtnClick,renderFieldContents_fn,renderSlotLead_fn,renderSlotTrail_fn,renderNativeTextarea_fn,renderClearButton_fn,html=__webpack_require__("./node_modules/lit/html.js"),field_base_component=__webpack_require__("./dist/libs/core/src/primitives/field-base/field-base.component.js"),form_control_footer_component=__webpack_require__("./dist/libs/core/src/primitives/form-control-footer/form-control-footer.component.js"),form_control_header_component=__webpack_require__("./dist/libs/core/src/primitives/form-control-header/form-control-header.component.js"),form_control_host_style=__webpack_require__("./dist/libs/core/src/shared-styles/form-control-host.style.js"),cross_small_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/cross-small.component.js"),resize_observer=__webpack_require__("./dist/libs/core/src/utils/decorators/resize-observer.js"),textarea_styles_default=(0,lit.AH)(textarea_styles_t||(textarea_styles_t=(function _(t){return t})`
  textarea {
    height: calc(1lh * var(--_lines));
    min-height: calc(1lh * 4);
    max-height: calc(1lh * 20);
    overflow: auto;
    min-width: 20ch;
    padding-inline-end: calc(
      var(--gds-sys-space-xs) + var(--padding-inline-end)
    );

    &.resize-manual {
      resize: vertical;
    }

    &.resize-auto {
      resize: none;
    }

    &.resize-false {
      resize: none;
    }
  }
`)),textarea_component_=function _(t){return t};function textarea_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,textarea_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function textarea_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(textarea_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function textarea_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var Textarea=function(_GdsFormControlElemen){function Textarea(){var _this;return(0,classCallCheck.A)(this,Textarea),_this=textarea_component_callSuper(this,Textarea),(0,chunk_QU3DSPNU.VK)(_this,_Textarea_instances),_this._defaultRows=4,_this.rows=4,_this.supportingText="",_this.clearable=!1,_this.resizable="auto",_this.showExtendedSupportingText=!1,_this.maxlength=Number.MAX_SAFE_INTEGER,_this.size="large",_this.plain=!1,_this.autocapitalize="off",_this.autocorrect=!1,_this.autofocus=!1,_this.spellcheck=!0,_this.charCounterCallback=charCounterCallbackDefault,(0,chunk_QU3DSPNU.VK)(_this,_charCounterComputed,_this.charCounterCallback(_this)),_this._handleSlotChange=function(){requestAnimationFrame((function(){_this._handleResize()}))},(0,chunk_QU3DSPNU.VK)(_this,_handleOnInput,(function(e){var element=e.target;_this.value=element.value})),(0,chunk_QU3DSPNU.VK)(_this,_handleOnChange,(function(e){var element=e.target;_this.value=element.value,_this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})})),(0,chunk_QU3DSPNU.VK)(_this,_handleOnPaste,(function(e){requestAnimationFrame((function(){_this._setAutoHeight()}))})),(0,chunk_QU3DSPNU.VK)(_this,_handleFieldClick,(function(){_this.elTextareaAsync.then((function(el){return el.focus()}))})),(0,chunk_QU3DSPNU.VK)(_this,_handleClearBtnClick,(function(){_this.value="",_this.elTextareaAsync.then((function(element){if("manual"===_this.resizable)element.style.height="";else if("false"===_this.resizable){var _this$_initialRows,rowsToUse=null!=(_this$_initialRows=_this._initialRows)?_this$_initialRows:_this._defaultRows;_this.rows=rowsToUse,element.style.setProperty("--_lines",rowsToUse.toString())}else{var _this$_initialRows2,_rowsToUse=null!=(_this$_initialRows2=_this._initialRows)?_this$_initialRows2:_this._defaultRows;_this.rows=_rowsToUse,element.style.setProperty("--_lines",_rowsToUse.toString()),element.style.height=""}})),_this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),_this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})})),_this.value="",_this}return(0,inherits.A)(Textarea,_GdsFormControlElemen),(0,createClass.A)(Textarea,[{key:"test_getClearButton",value:function test_getClearButton(){var _this$shadowRoot;return null==(_this$shadowRoot=this.shadowRoot)?void 0:_this$shadowRoot.querySelector("#clear-button")}},{key:"test_getFieldElement",value:function test_getFieldElement(){var _this$shadowRoot2;return null==(_this$shadowRoot2=this.shadowRoot)?void 0:_this$shadowRoot2.querySelector("#field")}},{key:"focus",value:function focus(options){var _this$_getValidityAnc;null==(_this$_getValidityAnc=this._getValidityAnchor())||_this$_getValidityAnc.focus(options)}},{key:"_handleResize",value:function _handleResize(){var _this2=this;this.fieldBase&&Promise.resolve().then((function(){var _this2$fieldBase,fieldBaseShadowRoot=null==(_this2$fieldBase=_this2.fieldBase)?void 0:_this2$fieldBase.shadowRoot;if(fieldBaseShadowRoot){var rightDiv=fieldBaseShadowRoot.querySelector(".right");if(rightDiv){var boundingBox=rightDiv.getBoundingClientRect();_this2.elTextarea.style.setProperty("--padding-inline-end","".concat(boundingBox.width,"px"))}else _this2.elTextarea.style.removeProperty("--padding-inline-end")}}))}},{key:"connectedCallback",value:function connectedCallback(){textarea_component_superPropGet(Textarea,"connectedCallback",this,3)([]),this.hasAttribute("rows")&&(this._initialRows=this.rows),this._setAutoHeight(),this.addEventListener("slotchange",this._handleSlotChange)}},{key:"disconnectedCallback",value:function disconnectedCallback(){textarea_component_superPropGet(Textarea,"disconnectedCallback",this,3)([]),this.removeEventListener("slotchange",this._handleSlotChange)}},{key:"render",value:function render(){var _this3=this;return(0,custom_element_scoping.qy)(textarea_component_t||(textarea_component_t=textarea_component_`
      ${0}

      <gds-field-base
        id="field"
        .disabled=${0}
        .invalid=${0}
        @click=${0}
        multiline
      >
        ${0}
      </gds-field-base>

      ${0}
    `),(0,when.z)(!this.plain,(function(){return(0,custom_element_scoping.qy)(textarea_component_t2||(textarea_component_t2=textarea_component_`<gds-form-control-header
            class="size-${0}"
            .showExtendedSupportingText="${0}"
          >
            <label for="input" slot="label">${0}</label>
            <span slot="supporting-text" id="supporting-text">
              ${0}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`),_this3.size,_this3.showExtendedSupportingText,_this3.label,_this3.supportingText)})),this.disabled,this.invalid,(0,chunk_QU3DSPNU.S7)(this,_handleFieldClick),(0,chunk_QU3DSPNU.jq)(this,_Textarea_instances,renderFieldContents_fn).call(this),(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_Textarea_instances,shouldShowFooter_fn).call(this),(function(){return(0,custom_element_scoping.qy)(textarea_component_t3||(textarea_component_t3=textarea_component_`<gds-form-control-footer
            id="footer"
            class="size-${0}"
            .charCounter=${0}
            .errorMessage=${0}
          ></gds-form-control-footer>`),_this3.size,(0,chunk_QU3DSPNU.S7)(_this3,_charCounterComputed),_this3.invalid?_this3.errorMessage:void 0)})))}},{key:"_handleValueChange",value:function _handleValueChange(){(0,chunk_QU3DSPNU.OV)(this,_charCounterComputed,this.charCounterCallback(this))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this.elTextarea}},{key:"_setAutoHeight",value:function _setAutoHeight(){var _this4=this;this.elTextareaAsync.then((function(element){if("false"===_this4.resizable){var _this4$_initialRows,rowsToUse=null!=(_this4$_initialRows=_this4._initialRows)?_this4$_initialRows:_this4._defaultRows;return _this4.rows=rowsToUse,void element.style.setProperty("--_lines",rowsToUse.toString())}if("manual"!==_this4.resizable&&"auto"===_this4.resizable)if(""===element.value){var _this4$_initialRows2,_rowsToUse2=null!=(_this4$_initialRows2=_this4._initialRows)?_this4$_initialRows2:_this4._defaultRows;_this4.rows=_rowsToUse2,element.style.setProperty("--_lines",_rowsToUse2.toString())}else{var _this4$_initialRows3,computedStyle=getComputedStyle(element),lineHeight=parseFloat(computedStyle.lineHeight),contentHeight=element.scrollHeight,requiredRows=Math.ceil(contentHeight/lineHeight),minRows=null!=(_this4$_initialRows3=_this4._initialRows)?_this4$_initialRows3:_this4._defaultRows;_this4.rows=Math.max(minRows,requiredRows),element.style.setProperty("--_lines",_this4.rows.toString())}}))}},{key:"_handleRowsChange",value:function _handleRowsChange(){var _this5=this;this.hasAttribute("rows")&&(this._initialRows=this.rows),this.elTextareaAsync.then((function(element){"false"===_this5.resizable&&element.style.setProperty("--_lines",_this5.rows.toString())}))}}])}(form_control.S);_charCounterComputed=new WeakMap,_Textarea_instances=new WeakSet,shouldShowFooter_fn=function shouldShowFooter_fn(){return!this.plain},_handleOnInput=new WeakMap,_handleOnChange=new WeakMap,_handleOnPaste=new WeakMap,_handleFieldClick=new WeakMap,_handleClearBtnClick=new WeakMap,renderFieldContents_fn=function renderFieldContents_fn(){return[(0,chunk_QU3DSPNU.jq)(this,_Textarea_instances,renderSlotLead_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Textarea_instances,renderNativeTextarea_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Textarea_instances,renderClearButton_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Textarea_instances,renderSlotTrail_fn).call(this)].map((function(element){return(0,custom_element_scoping.qy)(textarea_component_t4||(textarea_component_t4=textarea_component_`${0}`),element)}))},renderSlotLead_fn=function renderSlotLead_fn(){return(0,custom_element_scoping.qy)(textarea_component_t5||(textarea_component_t5=textarea_component_`<slot slot="lead" name="lead"></slot>`))},renderSlotTrail_fn=function renderSlotTrail_fn(){return(0,custom_element_scoping.qy)(textarea_component_t6||(textarea_component_t6=textarea_component_`<slot slot="trail" name="trail"></slot>`))},renderNativeTextarea_fn=function renderNativeTextarea_fn(){return(0,custom_element_scoping.qy)(textarea_component_t7||(textarea_component_t7=textarea_component_`
      <textarea
        @input=${0}
        @change=${0}
        @paste=${0}
        .value=${0}
        id="input"
        class="native-control resize-${0}"
        aria-label=${0}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-errormessage="footer"
        placeholder=" "
        autocapitalize=${0}
        autocomplete=${0}
        autocorrect=${0}
        ?autofocus=${0}
        spellcheck=${0}
        enterkeyhint=${0}
        inputmode=${0}
        wrap=${0}
        ?required=${0}
      ></textarea>
    `),(0,chunk_QU3DSPNU.S7)(this,_handleOnInput),(0,chunk_QU3DSPNU.S7)(this,_handleOnChange),(0,chunk_QU3DSPNU.S7)(this,_handleOnPaste),this.value,this.resizable,this.plain&&this.label||html.s6,(0,if_defined.J)(this.autocapitalize),(0,if_defined.J)(this.autocomplete),(0,if_defined.J)(this.autocorrect),this.autofocus,this.spellcheck,(0,if_defined.J)(this.enterkeyhint),(0,if_defined.J)(this.inputmode),(0,if_defined.J)(this.wrap),this.required)},renderClearButton_fn=function renderClearButton_fn(){var _this$value;return this.clearable&&((null==(_this$value=this.value)?void 0:_this$value.length)||0)>0?(0,custom_element_scoping.qy)(textarea_component_t8||(textarea_component_t8=textarea_component_`
        <gds-button
          size="small"
          rank="tertiary"
          variant="${0}"
          ?disabled="${0}"
          label="${0}"
          @click=${0}
          slot="action"
          id="clear-button"
        >
          <gds-icon-cross-small></gds-icon-cross-small>
        </gds-button>
      `),(0,if_defined.J)(this.invalid?"negative":void 0),this.disabled,(0,lit_localize.ab)("Clear input"),(0,chunk_QU3DSPNU.S7)(this,_handleClearBtnClick)):html.s6},Textarea.styles=[tokens_style.LU,form_control_host_style.A,textarea_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return v},selector:"textarea",styleTemplate:function styleTemplate(_prop,values){var ROWS=values[0];return"min-height: calc(1lh * ".concat(ROWS,");")}})],Textarea.prototype,"rows",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],Textarea.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Textarea.prototype,"clearable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],Textarea.prototype,"resizable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Textarea.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],Textarea.prototype,"maxlength",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],Textarea.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Textarea.prototype,"plain",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Textarea.prototype,"autocapitalize",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Textarea.prototype,"autocorrect",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Textarea.prototype,"autocomplete",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Textarea.prototype,"autofocus",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,converter:{fromAttribute:function fromAttribute(value){return!(!value||"false"===value)},toAttribute:function toAttribute(value){return value?"true":"false"}}})],Textarea.prototype,"spellcheck",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Textarea.prototype,"wrap",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Textarea.prototype,"enterkeyhint",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Textarea.prototype,"inputmode",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],Textarea.prototype,"charCounterCallback",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("textarea")],Textarea.prototype,"elTextareaAsync",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("textarea")],Textarea.prototype,"elTextarea",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("gds-field-base")],Textarea.prototype,"fieldBase",2),(0,chunk_QU3DSPNU.Cc)([(0,resize_observer.b)()],Textarea.prototype,"_handleResize",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],Textarea.prototype,"_handleValueChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],Textarea.prototype,"_setAutoHeight",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("rows")],Textarea.prototype,"_handleRowsChange",1),Textarea=(0,chunk_QU3DSPNU.Cc)([(0,lit_localize.cc)()],Textarea);var textarea_component_GdsTextarea=function(_withLayoutChildProps){function GdsTextarea(){return(0,classCallCheck.A)(this,GdsTextarea),textarea_component_callSuper(this,GdsTextarea,arguments)}return(0,inherits.A)(GdsTextarea,_withLayoutChildProps),(0,createClass.A)(GdsTextarea)}((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)(Textarea))));textarea_component_GdsTextarea=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-textarea",{dependsOn:[form_control_header_component.$,form_control_footer_component.V,button_component.t,field_base_component.w,cross_small_component.r]})],textarea_component_GdsTextarea);var input_styles_t,input_component_t,input_component_t2,input_component_t3,input_component_t4,input_component_t5,input_component_t6,input_component_t7,input_component_t8,input_component_charCounterComputed,_Input_instances,input_component_shouldShowFooter_fn,input_component_handleOnInput,input_component_handleOnChange,input_component_handleFieldClick,input_component_handleClearBtnClick,input_component_renderFieldContents_fn,input_component_renderSlotLead_fn,input_component_renderSlotTrail_fn,renderNativeInput_fn,input_component_renderClearButton_fn,charCounterCallbackDefault=function charCounterCallbackDefault(self){var _self$value,_self$value2,badgeType=((null==(_self$value=self.value)?void 0:_self$value.length)||0)>=self.maxlength?"negative":"positive";return[self.maxlength-((null==(_self$value2=self.value)?void 0:_self$value2.length)||0),self.maxlength<Number.MAX_SAFE_INTEGER&&badgeType]},input_styles_default=(0,lit.AH)(input_styles_t||(input_styles_t=(function _(t){return t})``)),input_component_=function _(t){return t};function input_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,input_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function input_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(input_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var Input=function(_GdsFormControlElemen){function Input(){var _this;return(0,classCallCheck.A)(this,Input),_this=input_component_callSuper(this,Input),(0,chunk_QU3DSPNU.VK)(_this,_Input_instances),_this.supportingText="",_this.showExtendedSupportingText=!1,_this.clearable=!1,_this.maxlength=Number.MAX_SAFE_INTEGER,_this.size="large",_this.plain=!1,_this.type="text",_this.autocapitalize="off",_this.autocorrect=!1,_this.autofocus=!1,_this.spellcheck=!0,_this.charCounterCallback=charCounterCallbackDefault,(0,chunk_QU3DSPNU.VK)(_this,input_component_charCounterComputed,_this.charCounterCallback(_this)),(0,chunk_QU3DSPNU.VK)(_this,input_component_handleOnInput,(function(e){var element=e.target;_this.value=element.value})),(0,chunk_QU3DSPNU.VK)(_this,input_component_handleOnChange,(function(e){var element=e.target;_this.value=element.value,_this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})})),(0,chunk_QU3DSPNU.VK)(_this,input_component_handleFieldClick,(function(){_this.elInputAsync.then((function(el){return el.focus()}))})),(0,chunk_QU3DSPNU.VK)(_this,input_component_handleClearBtnClick,(function(){_this.value="",_this.dispatchCustomEvent("gds-input-cleared",{bubbles:!0,composed:!0}),_this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})})),_this.value="",_this}return(0,inherits.A)(Input,_GdsFormControlElemen),(0,createClass.A)(Input,[{key:"test_getClearButton",value:function test_getClearButton(){var _this$shadowRoot;return null==(_this$shadowRoot=this.shadowRoot)?void 0:_this$shadowRoot.querySelector("#clear-button")}},{key:"test_getFieldElement",value:function test_getFieldElement(){var _this$shadowRoot2;return null==(_this$shadowRoot2=this.shadowRoot)?void 0:_this$shadowRoot2.querySelector("#field")}},{key:"focus",value:function focus(options){var _this$_getValidityAnc;null==(_this$_getValidityAnc=this._getValidityAnchor())||_this$_getValidityAnc.focus(options)}},{key:"render",value:function render(){var _this2=this;return(0,custom_element_scoping.qy)(input_component_t||(input_component_t=input_component_`
      ${0}
      <gds-field-base
        .size=${0}
        .disabled=${0}
        .invalid=${0}
        @click=${0}
        id="field"
      >
        ${0}
      </gds-field-base>
      ${0}
    `),(0,when.z)(!this.plain,(function(){return(0,custom_element_scoping.qy)(input_component_t2||(input_component_t2=input_component_`<gds-form-control-header class="size-${0}">
            <label for="input" slot="label">${0}</label>
            <span slot="supporting-text" id="supporting-text">
              ${0}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`),_this2.size,_this2.label,_this2.supportingText)})),this.size,this.disabled,this.invalid,(0,chunk_QU3DSPNU.S7)(this,input_component_handleFieldClick),(0,chunk_QU3DSPNU.jq)(this,_Input_instances,input_component_renderFieldContents_fn).call(this),(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_Input_instances,input_component_shouldShowFooter_fn).call(this),(function(){return(0,custom_element_scoping.qy)(input_component_t3||(input_component_t3=input_component_` <gds-form-control-footer
            id="message"
            class="size-${0}"
            .charCounter=${0}
            .errorMessage=${0}
          ></gds-form-control-footer>`),_this2.size,(0,chunk_QU3DSPNU.S7)(_this2,input_component_charCounterComputed),_this2.invalid?_this2.errorMessage:void 0)})))}},{key:"_handleValueChange",value:function _handleValueChange(){(0,chunk_QU3DSPNU.OV)(this,input_component_charCounterComputed,this.charCounterCallback(this))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this.elInput}}])}(form_control.S);input_component_charCounterComputed=new WeakMap,_Input_instances=new WeakSet,input_component_shouldShowFooter_fn=function shouldShowFooter_fn(){return!this.plain},input_component_handleOnInput=new WeakMap,input_component_handleOnChange=new WeakMap,input_component_handleFieldClick=new WeakMap,input_component_handleClearBtnClick=new WeakMap,input_component_renderFieldContents_fn=function renderFieldContents_fn(){return[(0,chunk_QU3DSPNU.jq)(this,_Input_instances,input_component_renderSlotLead_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Input_instances,renderNativeInput_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Input_instances,input_component_renderClearButton_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Input_instances,input_component_renderSlotTrail_fn).call(this)].map((function(element){return(0,custom_element_scoping.qy)(input_component_t4||(input_component_t4=input_component_`${0}`),element)}))},input_component_renderSlotLead_fn=function renderSlotLead_fn(){return(0,custom_element_scoping.qy)(input_component_t5||(input_component_t5=input_component_` <slot slot="lead" name="lead"></slot> `))},input_component_renderSlotTrail_fn=function renderSlotTrail_fn(){return(0,custom_element_scoping.qy)(input_component_t6||(input_component_t6=input_component_`<slot slot="trail" name="trail"></slot>`))},renderNativeInput_fn=function renderNativeInput_fn(){return(0,custom_element_scoping.qy)(input_component_t7||(input_component_t7=input_component_`
      <input
        class="native-control"
        @input=${0}
        @change=${0}
        .value=${0}
        id="input"
        ?disabled=${0}
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid=${0}
        aria-errormessage="message"
        aria-label=${0}
        placeholder=" "
        type=${0}
        min=${0}
        max=${0}
        step=${0}
        autocapitalize=${0}
        autocomplete=${0}
        autocorrect=${0}
        ?autofocus=${0}
        spellcheck=${0}
        enterkeyhint=${0}
        inputmode=${0}
        ?required=${0}
      />
    `),(0,chunk_QU3DSPNU.S7)(this,input_component_handleOnInput),(0,chunk_QU3DSPNU.S7)(this,input_component_handleOnChange),this.value,this.disabled,this.invalid,this.plain&&this.label||html.s6,this.type,(0,if_defined.J)(this.min),(0,if_defined.J)(this.max),(0,if_defined.J)(this.step),(0,if_defined.J)(this.autocapitalize),(0,if_defined.J)(this.autocomplete),(0,if_defined.J)(this.autocorrect),this.autofocus,this.spellcheck,(0,if_defined.J)(this.enterkeyhint),(0,if_defined.J)(this.inputmode),this.required)},input_component_renderClearButton_fn=function renderClearButton_fn(){var _this$value;return this.clearable&&((null==(_this$value=this.value)?void 0:_this$value.length)||0)>0?(0,custom_element_scoping.qy)(input_component_t8||(input_component_t8=input_component_`<gds-button
        size="${0}"
        rank="tertiary"
        variant="${0}"
        ?disabled="${0}"
        label="${0}"
        @click=${0}
        id="clear-button"
        slot="action"
      >
        <gds-icon-cross-small></gds-icon-cross-small>
      </gds-button>`),"small"===this.size?"xs":"small",(0,if_defined.J)(this.invalid?"negative":void 0),this.disabled,(0,lit_localize.ab)("Clear input"),(0,chunk_QU3DSPNU.S7)(this,input_component_handleClearBtnClick)):html.s6},Input.styles=[tokens_style.LU,form_control_host_style.A,input_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],Input.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Input.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Input.prototype,"clearable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],Input.prototype,"maxlength",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Input.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Input.prototype,"plain",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Input.prototype,"type",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Input.prototype,"min",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Input.prototype,"max",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Input.prototype,"step",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Input.prototype,"autocapitalize",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Input.prototype,"autocorrect",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Input.prototype,"autocomplete",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Input.prototype,"autofocus",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Input.prototype,"enterkeyhint",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,converter:{fromAttribute:function fromAttribute(value){return!(!value||"false"===value)},toAttribute:function toAttribute(value){return value?"true":"false"}}})],Input.prototype,"spellcheck",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Input.prototype,"inputmode",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],Input.prototype,"charCounterCallback",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("input")],Input.prototype,"elInputAsync",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("input")],Input.prototype,"elInput",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],Input.prototype,"_handleValueChange",1),Input=(0,chunk_QU3DSPNU.Cc)([(0,lit_localize.cc)()],Input);var input_component_GdsInput=function(_withSizeXProps){function GdsInput(){return(0,classCallCheck.A)(this,GdsInput),input_component_callSuper(this,GdsInput,arguments)}return(0,inherits.A)(GdsInput,_withSizeXProps),(0,createClass.A)(GdsInput)}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(Input))));input_component_GdsInput=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-input",{dependsOn:[form_control_header_component.$,form_control_footer_component.V,field_base_component.w,flex_component.o,button_component.t,cross_small_component.r]})],input_component_GdsInput);var GdsInput=function GdsInput(props){input_component_GdsInput.define();var JSXElement=(0,react.p)("gds-input"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsInput.__docgenInfo={description:"",methods:[],displayName:"GdsInput"};var link_styles_t,link_component_t,_GdsLink_instances,defaultRel_get,link_styles_default=(0,lit.AH)(link_styles_t||(link_styles_t=(function _(t){return t})`
  @layer core, link;

  @layer core {
    :host {
      display: inline-block;
      white-space: normal;
    }
  }

  @layer link {
    a {
      display: flex;
      align-items: center;
      gap: 1ch;
      text-decoration: none;
      text-underline-offset: 0.2lh;
      color: currentColor;
      outline-offset: 4px;
      outline-color: currentColor;
      font-weight: var(--gds-sys-text-weight-book);
      transition: all 0.2s ease-in-out;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 0.16lh;

        &:active {
          text-underline-offset: 0.08lh;
        }
      }
    }
  }
`)),link_component_=function _(t){return t};function link_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(link_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var link_component_GdsLink=function(_withMarginProps){function GdsLink(){var _this;return(0,classCallCheck.A)(this,GdsLink),_this=function link_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,link_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsLink,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsLink_instances),_this.label="",_this}return(0,inherits.A)(GdsLink,_withMarginProps),(0,createClass.A)(GdsLink,[{key:"connectedCallback",value:function connectedCallback(){!function link_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsLink,"connectedCallback",this,3)([]),this.setAttribute("role","none")}},{key:"render",value:function render(){return(0,static_html.qy)(link_component_t||(link_component_t=link_component_`
      <a
        href=${0}
        target=${0}
        rel=${0}
        download=${0}
        aria-label=${0}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `),(0,if_defined.J)(this.href),(0,if_defined.J)(this.target),(0,if_defined.J)(this.rel||(0,chunk_QU3DSPNU.S7)(this,_GdsLink_instances,defaultRel_get)),(0,if_defined.J)(this.download),this.label||lit.s6)}}])}((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.lt)(withLinkProps(gds_element.j)))));_GdsLink_instances=new WeakSet,defaultRel_get=function defaultRel_get(){return"_blank"===this.target?"noreferrer noopener":void 0},link_component_GdsLink.styles=[tokens_style.LU,(0,lit.iz)(link_styles_default)],link_component_GdsLink.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],link_component_GdsLink.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return v},selector:"a"})],link_component_GdsLink.prototype,"text-decoration",2),link_component_GdsLink=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-link")],link_component_GdsLink);var GdsLink=function GdsLink(props){link_component_GdsLink.define();var JSXElement=(0,react.p)("gds-link"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsLink.__docgenInfo={description:"",methods:[],displayName:"GdsLink"};var mask_styles_t,mask_component_t,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),mask_styles_default=(0,lit.AH)(mask_styles_t||(mask_styles_t=(function _(t){return t})`
  :host {
    contain: strict;
  }

  [part='mask'] {
    position: absolute;
    inset: 0;
    z-index: -1;
    pointer-events: none;
    mask-composite: intersect;
  }
`)),mask_component_=function _(t){return t};function mask_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(mask_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var mask_component_GdsMask=function(_GdsFlex){function GdsMask(){var _this;return(0,classCallCheck.A)(this,GdsMask),(_this=function mask_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,mask_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsMask))["mask-size"]="cover",_this["mask-repeat"]="no-repeat",_this["mask-position"]="center",_this.position="relative",_this.display="flex",_this.inset="0",_this}return(0,inherits.A)(GdsMask,_GdsFlex),(0,createClass.A)(GdsMask,[{key:"render",value:function render(){return(0,static_html.qy)(mask_component_t||(mask_component_t=mask_component_`<div part="mask"></div>
      <slot></slot>`))}}])}(flex_component.o);mask_component_GdsMask.styles=[tokens_style.LU,mask_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:'[part="mask"]',valueTemplate:function valueTemplate(value){return(0,style_expression_helpers.ol)(value,"background",this.level)}})],mask_component_GdsMask.prototype,"background",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){var _v$split=v.split("/"),direction=(0,slicedToArray.A)(_v$split,1)[0];return"linear-gradient(to ".concat(direction,", rgba(0, 0, 0, 1) 20%, rgba(0, 0, 0, 0) 100%)")},selector:'[part="mask"]'})],mask_component_GdsMask.prototype,"mask-image",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return v},selector:'[part="mask"]'})],mask_component_GdsMask.prototype,"mask-size",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return v},selector:'[part="mask"]'})],mask_component_GdsMask.prototype,"mask-repeat",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return v},selector:'[part="mask"]'})],mask_component_GdsMask.prototype,"mask-position",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return v},selector:'[part="mask"]'})],mask_component_GdsMask.prototype,"backdrop-filter",2),mask_component_GdsMask=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-mask")],mask_component_GdsMask);var GdsMask=function GdsMask(props){mask_component_GdsMask.define();var JSXElement=(0,react.p)("gds-mask"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsMask.__docgenInfo={description:"",methods:[],displayName:"GdsMask"};var menu_button_styles_t,menu_button_component_t,menu_button_component_t2,menu_button_component_t3,_GdsMenuButton_instances,isLink_get,menu_button_component_defaultRel_get,menu_button_styles_default=(0,lit.AH)(menu_button_styles_t||(menu_button_styles_t=(function _(t){return t})`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-sys-space-xs);

      --_padding-inline: var(--gds-sys-space-m);
      --_padding-block: var(--gds-sys-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-sys-color-content-neutral-01);
      --_color-border: transparent;

      --_font-size: 1rem;
      --_font-weight: 400;
      --_line-height: 1.25;

      display: inline-block;
      isolation: isolate;
      max-width: 100%;
      height: 100%;
    }
  }

  @layer core {
    .button {
      align-items: center;
      background-color: var(--_color-bg);
      border-bottom-width: 2px;
      border-style: none;
      border-color: var(--_color-border);
      border-bottom-style: solid;
      box-sizing: border-box;
      color-scheme: dark light;
      color: var(--_color-text);
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      gap: var(--_gap);
      height: 100%;
      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      line-height: var(--_line-height);
      outline-color: transparent;
      outline-offset: -2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      transition-property: color, border-color;
      transition: all var(--gds-sys-motion-duration-fastest);

      &:focus-visible {
        border-color: transparent;
        border-radius: 6px;
        outline-color: currentColor;
        overflow: visible;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
        --_color-border: var(--gds-sys-color-border-interactive);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
        --_color-border: var(--gds-sys-color-border-strong);
      }

      slot:not([name]) {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .compact {
      display: flex;
      flex-direction: column;
      --_padding-inline: var(--gds-sys-space-s);
      --_gap: 1px;
      font-size: 0.875rem;
      height: 56px;
      justify-content: center;

      & > slot[name] {
        order: 0;
      }
      & > slot:not([name]) {
        order: 1;
      }
    }

    a {
      text-decoration: none;
    }
  }

  :disabled {
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`)),menu_button_component_=function _(t){return t};function menu_button_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(menu_button_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var menu_button_component_GdsMenuButton=function(_withSizeXProps){function GdsMenuButton(){var _this;return(0,classCallCheck.A)(this,GdsMenuButton),_this=function menu_button_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,menu_button_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsMenuButton),(0,chunk_QU3DSPNU.VK)(_this,_GdsMenuButton_instances),_this.disabled=!1,_this.label="",_this.href="",_this.compact=!1,_this.selected=!1,_this}return(0,inherits.A)(GdsMenuButton,_withSizeXProps),(0,createClass.A)(GdsMenuButton,[{key:"render",value:function render(){var classes={button:!0,selected:this.selected,compact:this.compact},tag=(0,chunk_QU3DSPNU.S7)(this,_GdsMenuButton_instances,isLink_get)?(0,static_html.eu)(menu_button_component_t||(menu_button_component_t=menu_button_component_`a`)):(0,static_html.eu)(menu_button_component_t2||(menu_button_component_t2=menu_button_component_`button`));return(0,static_html.qy)(menu_button_component_t3||(menu_button_component_t3=menu_button_component_`
      <${0}
        class="${0}"
        ?disabled="${0}"
        aria-label="${0}"
        href=${0}
        target=${0}
        rel=${0}
        download=${0}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${0}>
    `),tag,(0,class_map.H)(classes),this.disabled,this.label,(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_GdsMenuButton_instances,isLink_get)?this.href:void 0),(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_GdsMenuButton_instances,isLink_get)?this.target:void 0),(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_GdsMenuButton_instances,isLink_get)?this.rel||(0,chunk_QU3DSPNU.S7)(this,_GdsMenuButton_instances,menu_button_component_defaultRel_get):void 0),(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_GdsMenuButton_instances,isLink_get)?this.download:void 0),tag)}}])}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.lt)(gds_element.j)));_GdsMenuButton_instances=new WeakSet,isLink_get=function isLink_get(){return this.href.length>0},menu_button_component_defaultRel_get=function defaultRel_get(){return"_blank"===this.target?"noreferrer noopener":void 0},menu_button_component_GdsMenuButton.styles=[tokens_style.LU,menu_button_styles_default],menu_button_component_GdsMenuButton.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],menu_button_component_GdsMenuButton.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],menu_button_component_GdsMenuButton.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],menu_button_component_GdsMenuButton.prototype,"href",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],menu_button_component_GdsMenuButton.prototype,"target",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],menu_button_component_GdsMenuButton.prototype,"rel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],menu_button_component_GdsMenuButton.prototype,"download",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],menu_button_component_GdsMenuButton.prototype,"compact",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],menu_button_component_GdsMenuButton.prototype,"selected",2),menu_button_component_GdsMenuButton=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-menu-button")],menu_button_component_GdsMenuButton);var GdsMenuButton=function GdsMenuButton(props){menu_button_component_GdsMenuButton.define();var JSXElement=(0,react.p)("gds-menu-button"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsMenuButton.__docgenInfo={description:"",methods:[],displayName:"GdsMenuButton"};var backdrop_component_t,backdrop_component_t2,backdrop_component_=function _(t){return t};function backdrop_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(backdrop_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var backdrop_component_GdsBackdrop=function(_GdsElement){function GdsBackdrop(){var _this;return(0,classCallCheck.A)(this,GdsBackdrop),(_this=function backdrop_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,backdrop_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsBackdrop,arguments)).show=!1,_this}return(0,inherits.A)(GdsBackdrop,_GdsElement),(0,createClass.A)(GdsBackdrop,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(backdrop_component_t||(backdrop_component_t=backdrop_component_``))}}])}(gds_element.j);backdrop_component_GdsBackdrop.styles=(0,lit.AH)(backdrop_component_t2||(backdrop_component_t2=backdrop_component_`
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
  `)),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],backdrop_component_GdsBackdrop.prototype,"show",2),backdrop_component_GdsBackdrop=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-backdrop")],backdrop_component_GdsBackdrop);var GdsBackdrop=function GdsBackdrop(props){backdrop_component_GdsBackdrop.define();var JSXElement=(0,react.p)("gds-backdrop"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsBackdrop.__docgenInfo={description:"",methods:[],displayName:"GdsBackdrop"};var popover_component=__webpack_require__("./dist/libs/core/src/components/popover/popover.component.js"),GdsPopover=function GdsPopover(props){popover_component.E.define();var JSXElement=(0,react.p)("gds-popover"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsPopover.__docgenInfo={description:"",methods:[],displayName:"GdsPopover"};var radio_styles_t,radio_component_t,_handleClick,_handleKeyDown,radio_styles_default=(0,lit.AH)(radio_styles_t||(radio_styles_t=(function _(t){return t})`
  :host {
    cursor: pointer;
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    cursor: default;
  }

  :host(:focus) {
    outline: none;
  }
`)),radio_component_=function _(t){return t};function radio_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(radio_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function radio_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var radio_component_GdsRadio=function(_GdsElement){function GdsRadio(){var _this;return(0,classCallCheck.A)(this,GdsRadio),(_this=function radio_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,radio_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsRadio)).label="",_this.supportingText="",_this.value="",_this.checked=!1,_this.disabled=!1,_this.invalid=!1,_this._isFocused=!1,(0,chunk_QU3DSPNU.VK)(_this,_handleClick,(function(e){!_this.disabled&&_this.value&&_this.label&&(e.preventDefault(),_this.checked=!0,_this.focus(),_this.dispatchStandardEvent("input",{bubbles:!0}))})),(0,chunk_QU3DSPNU.VK)(_this,_handleKeyDown,(function(e){_this.disabled||"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),_this.checked=!0,_this.dispatchStandardEvent("input",{bubbles:!0}))})),_this.addEventListener("keydown",(0,chunk_QU3DSPNU.S7)(_this,_handleKeyDown)),_this.addEventListener("focus",(function(){return _this._isFocused=!0})),_this.addEventListener("blur",(function(){return _this._isFocused=!1})),_this}return(0,inherits.A)(GdsRadio,_GdsElement),(0,createClass.A)(GdsRadio,[{key:"connectedCallback",value:function connectedCallback(){radio_component_superPropGet(GdsRadio,"connectedCallback",this,3)([]),this.setAttribute("role","radio"),this._updateAriaState(),this.addEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleClick))}},{key:"_updateAriaState",value:function _updateAriaState(){this.setAttribute("aria-checked",this.checked.toString()),this.setAttribute("aria-disabled",this.disabled.toString()),this.setAttribute("tabindex",this.disabled?"-1":"0"),this.setAttribute("aria-description",this.errorMessage?this.errorMessage:""),this.toggleAttribute("aria-invalid",this.invalid)}},{key:"updated",value:function updated(changedProperties){radio_component_superPropGet(GdsRadio,"updated",this,3)([changedProperties]),(changedProperties.has("checked")||changedProperties.has("disabled")||changedProperties.has("invalid"))&&this._updateAriaState()}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(radio_component_t||(radio_component_t=radio_component_`
      <gds-toggle-control-base type="radio">
        <label slot="label" @click=${0}> ${0} </label>
        <span slot="supporting-text"> ${0} </span>
        ${0}
      </gds-toggle-control-base>
    `),(0,chunk_QU3DSPNU.S7)(this,_handleClick),this.label,this.supportingText,(0,rbcb_toggle_template.U)({checked:this.checked,disabled:this.disabled,indeterminate:!1,invalid:this.invalid}))}}])}(gds_element.j);_handleClick=new WeakMap,_handleKeyDown=new WeakMap,radio_component_GdsRadio.styles=[rbcb_toggle_style.A,radio_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],radio_component_GdsRadio.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],radio_component_GdsRadio.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],radio_component_GdsRadio.prototype,"value",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],radio_component_GdsRadio.prototype,"checked",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],radio_component_GdsRadio.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],radio_component_GdsRadio.prototype,"invalid",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],radio_component_GdsRadio.prototype,"errorMessage",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],radio_component_GdsRadio.prototype,"_isFocused",2),radio_component_GdsRadio=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-radio",{dependsOn:[GdsToggleControlBase]})],radio_component_GdsRadio);var GdsRadio=function GdsRadio(props){radio_component_GdsRadio.define();var JSXElement=(0,react.p)("gds-radio"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsRadio.__docgenInfo={description:"",methods:[],displayName:"GdsRadio"};var rich_text_styles_t,toConsumableArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/toConsumableArray.js"),observe_light_dom=__webpack_require__("./dist/libs/core/src/utils/decorators/observe-light-dom.js"),rich_text_styles_default=(0,lit.AH)(rich_text_styles_t||(rich_text_styles_t=(function _(t){return t})`
  :host {
    font: var(--gds-sys-text-body-regular-m);
    --default-border: 1px solid
      color-mix(in srgb, currentColor, transparent 80%);
    letter-spacing: 0.0125rem;
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-top: var(--gds-sys-space-2xl);
    margin-bottom: var(--gds-sys-space-xs);
  }

  :is(h1, h2, h3, h4, h5, h6):first-child {
    margin-top: unset;
  }

  h1 + h2 {
    margin-top: 0;
  }

  h2 + h3 {
    margin-top: 0;
  }

  h3 + h4 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h4 + h5 {
    margin-top: 0;
  }

  h5 + h6 {
    margin-top: 0;
  }

  p {
    margin: 0;
    margin-bottom: var(--gds-sys-space-m);
    max-width: 80ch;
  }

  blockquote {
    margin: unset;
    margin-block: 2lh;
    border-left: 0.2rem solid currentColor;
    padding-left: 2ch;
    max-width: 40ch;
  }

  code {
    background: var(--gds-sys-color-l3-neutral-02);
    color: var(--gds-sys-color-content-neutral-01);
    border-radius: var(--gds-sys-radius-xs);
    padding: var(--gds-sys-space-3xs);
    font: var(--gds-sys-text-body-book-s);
  }

  hr {
    border: none;
    border-top: var(--default-border);
    margin: var(--gds-sys-space-xl) 0;
  }

  s {
    text-decoration: underline;
    text-decoration-skip-ink: none;
    text-underline-offset: -0.22lh;
  }

  mark {
    color: currentColor;
    background-color: color-mix(in srgb, currentColor, transparent 80%);
  }

  /*
  * lists
  * -----------------------------------------------------------
  */
  ul,
  ol {
    padding-inline-start: 2ch;
    margin: unset;
    margin-bottom: 1lh;
    max-width: 80ch;
  }

  ol {
    list-style-type: none;
    counter-reset: ordered-list;
    margin: unset;
    padding: unset;
  }

  ol li {
    padding-left: 3.6ch;
    position: relative;
  }

  ol li:before {
    counter-increment: ordered-list;
    content: counter(ordered-list) '.';
    left: 0.2rem;
    position: absolute;
  }

  ol:not(:has(li:nth-child(10))) li {
    padding-left: 2.4ch;
  }

  ol:has(li:nth-child(10)) li:nth-child(-n + 9):before {
    left: 1.4ch;
  }

  li {
    padding: 0 0 0.3lh 0;
  }

  ul li:last-child {
    padding: 0;
  }

  ul li::marker {
    content: '– ';
  }

  /*
  * figure and image
  * -----------------------------------------------------------
  */
  img {
    display: block;
    border-radius: var(--gds-sys-radius-xs);
  }

  figure {
    margin: 0;
    padding: 0;
    margin-top: var(--gds-sys-space-xl);
  }

  figcaption {
    font-size: smaller;
    margin-block-start: var(--gds-sys-space-xs);
  }

  /*
  * table
  * -----------------------------------------------------------
  */
  table {
    border-collapse: separate;
    border-spacing: 0;
    width: 100%;
    border: var(--default-border);
    border-radius: var(--gds-sys-radius-s);
    margin-top: var(--gds-sys-space-xl);
  }

  th {
    font-weight: var(--gds-sys-text-weight-book);
    text-align: left;
    border-bottom: var(--default-border);
    border-left: transparent;
    border-right: transparent;
    color: currentColor;
  }

  th:not(:last-child) {
    border-right: var(--default-border);
  }

  th,
  td {
    padding: 0.3lh 2ch;
  }
  td:not(:last-child) {
    border-right: var(--default-border);
  }
  tr:nth-child(even) td {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  /*
  * Details
  * -----------------------------------------------------------
  */
  details {
    border-top: solid var(--gds-sys-space-5xs)
      color-mix(in srgb, currentColor, transparent 90%);
    font: var(--gds-sys-text-body-regular-m);
  }

  summary {
    font-weight: var(--gds-sys-text-weight-regular);
    list-style: none;
    padding: 0.4lh 0.2ch;
    font: var(--gds-sys-text-body-regular-l);
    color: currentColor;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    user-select: none;
    outline-offset: var(--gds-sys-space-3xs);
    outline-color: currentColor;
    padding-inline: var(--gds-sys-space-m);
  }

  details summary::-webkit-details-marker {
    display: none;
  }

  summary:focus-visible {
    border-radius: var(--gds-sys-radius-2xs);
  }

  details:hover summary {
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  summary::after {
    content: '+';
    display: flex;
    align-items: center;
    justify-content: center;
    width: 24px;
    height: 24px;
    font: var(--gds-sys-text-body-regular-l);
  }

  details[open] summary::after {
    content: '-';
  }

  details[open] {
    border-bottom: var(--gds-sys-space-5xs) solid
      color-mix(in srgb, currentColor, transparent 95%);
    padding-bottom: 0.4lh;
    background: color-mix(in srgb, currentColor, transparent 95%);
  }

  details[open] > *:not(summary) {
    margin-left: var(--gds-sys-space-m);
  }

  details[open] summary {
    margin-bottom: 0.4lh;
  }

  details[open] + details {
    border: none;
  }

  details:last-of-type {
    border-bottom: var(--gds-sys-space-5xs) solid
      color-mix(in srgb, currentColor, transparent 90%);
    margin-bottom: var(--gds-sys-space-xl);
  }

  a,
  a:visited {
    color: currentColor;
    text-decoration-color: currentColor;
  }

  /*
  * Iframe
  */
  iframe {
    border: var(--gds-sys-space-5xs) solid var(--gds-sys-color-border-subtle-01);
    border-radius: var(--gds-sys-radius-xs);
    min-width: 100%;
    margin-bottom: var(--gds-sys-space-l);
  }
`));function rich_text_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(rich_text_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var rich_text_component_GdsRichText=function(_withLayoutChildProps){function GdsRichText(){var _this;return(0,classCallCheck.A)(this,GdsRichText),(_this=function rich_text_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,rich_text_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsRichText,arguments)).captureMode="clone",_this}return(0,inherits.A)(GdsRichText,_withLayoutChildProps),(0,createClass.A)(GdsRichText,[{key:"querySelectorAll",value:function querySelectorAll(selector){return this.shadowRoot?this.shadowRoot.querySelectorAll(selector):new NodeList}},{key:"querySelector",value:function querySelector(selector){return this.shadowRoot?this.shadowRoot.querySelector(selector):null}},{key:"innerHTML",get:function get(){var _this$shadowRoot;return(null==(_this$shadowRoot=this.shadowRoot)?void 0:_this$shadowRoot.innerHTML)||""},set:function set(value){this.shadowRoot&&(this.shadowRoot.innerHTML=value)}},{key:"connectedCallback",value:function connectedCallback(){!function rich_text_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsRichText,"connectedCallback",this,3)([]),this._captureDOM()}},{key:"_captureDOM",value:function _captureDOM(){var _this$shadowRoot3;if(this.shadowRoot&&0!==this.childNodes.length)if("move"!==this.captureMode){var cloned=Array.from(this.childNodes).map((function(node){return node.cloneNode(!0)}));(_this$shadowRoot3=this.shadowRoot).replaceChildren.apply(_this$shadowRoot3,(0,toConsumableArray.A)(cloned))}else{var _this$shadowRoot2;(_this$shadowRoot2=this.shadowRoot).replaceChildren.apply(_this$shadowRoot2,(0,toConsumableArray.A)(Array.from(this.childNodes)))}}}])}((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.TM)(gds_element.j)));rich_text_component_GdsRichText.styles=[tokens_style.LU,defaultStyles,rich_text_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],rich_text_component_GdsRichText.prototype,"captureMode",2),(0,chunk_QU3DSPNU.Cc)([(0,observe_light_dom.L)({childList:!0,subtree:!0,attributes:!0,characterData:!0})],rich_text_component_GdsRichText.prototype,"_captureDOM",1),rich_text_component_GdsRichText=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-rich-text")],rich_text_component_GdsRichText);var GdsRichText=function GdsRichText(props){rich_text_component_GdsRichText.define();var JSXElement=(0,react.p)("gds-rich-text"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsRichText.__docgenInfo={description:"",methods:[],displayName:"GdsRichText"};var segmented_control_component=__webpack_require__("./dist/libs/core/src/components/segmented-control/segmented-control.component.js"),GdsSegmentedControl=function GdsSegmentedControl(props){segmented_control_component.Y.define();var JSXElement=(0,react.p)("gds-segmented-control"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSegmentedControl.__docgenInfo={description:"",methods:[],displayName:"GdsSegmentedControl"};var select_styles_t,select_component_t,select_component_t2,select_component_t3,select_component_t4,select_component_t5,select_component_t6,select_component_t7,select_component_t8,_isValueInitialized,_Select_instances,select_component_shouldShowFooter_fn,_handleSelectElementChange,setValueFromSelectElement_fn,select_component_renderFieldContents_fn,select_component_renderSlotLead_fn,renderMainLabel_fn,renderMainSlot_fn,renderChevron_fn,chevron_bottom_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chevron-bottom.component.js"),select_styles_default=(0,lit.AH)(select_styles_t||(select_styles_t=(function _(t){return t})`
  @layer base, reset, transitional-styles;
  @layer base {
    .select-container {
      display: contents;
    }

    select {
      flex: 1;
      height: 100%;
      opacity: 0;
      position: absolute;
      z-index: 1;
      inset: 0;

      &::-ms-expand {
        display: none;
      }
    }

    select[multiple] {
      opacity: 1;
      position: relative;
      width: 100%;
    }

    label {
      flex: 1;
    }
  }
`)),select_component_=function _(t){return t};function select_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,select_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function select_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(select_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var Select=function(_GdsFormControlElemen){function Select(){var _this;return(0,classCallCheck.A)(this,Select),_this=select_component_callSuper(this,Select,arguments),(0,chunk_QU3DSPNU.VK)(_this,_Select_instances),_this.supportingText="",_this.showExtendedSupportingText=!1,_this.size="large",_this.plain=!1,(0,chunk_QU3DSPNU.VK)(_this,_isValueInitialized,!1),(0,chunk_QU3DSPNU.VK)(_this,_handleSelectElementChange,(function(e){e.stopPropagation(),(0,chunk_QU3DSPNU.jq)(_this,_Select_instances,setValueFromSelectElement_fn).call(_this),requestAnimationFrame((function(){_this.dispatchCustomEvent("input",{detail:{value:_this.value},bubbles:!0,composed:!0}),_this.dispatchCustomEvent("change",{detail:{value:_this.value},bubbles:!0,composed:!0})}))})),_this}return(0,inherits.A)(Select,_GdsFormControlElemen),(0,createClass.A)(Select,[{key:"value",get:function get(){return this._internalValue},set:function set(value){(0,chunk_QU3DSPNU.S7)(this,_isValueInitialized)||(0,chunk_QU3DSPNU.OV)(this,_isValueInitialized,!0),this._internalValue=value}},{key:"displayValue",get:function get(){return this.selectElement?Array.from(this.selectElement.selectedOptions).map((function(o){return o.text})).join(", "):""}},{key:"multiple",get:function get(){var _this$selectElement$m,_this$selectElement;return null!=(_this$selectElement$m=null==(_this$selectElement=this.selectElement)?void 0:_this$selectElement.multiple)&&_this$selectElement$m}},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;!function select_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(Select,"connectedCallback",this,3)([]),this.updateComplete.then((function(){_this2._captureDOM(),_this2._handleValueChange()}))}},{key:"focus",value:function focus(options){var _this$_getValidityAnc;null==(_this$_getValidityAnc=this._getValidityAnchor())||_this$_getValidityAnc.focus(options)}},{key:"render",value:function render(){var _this3=this,CLASSES={multiple:this.multiple};return this.selectElement&&(this.selectElement.disabled=this.disabled),(0,custom_element_scoping.qy)(select_component_t||(select_component_t=select_component_`
      ${0}

      <gds-field-base
        .size=${0}
        .disabled=${0}
        .invalid=${0}
        .multiline=${0}
        align-items=${0}
        class=${0}
      >
        ${0}
      </gds-field-base>

      ${0}
    `),(0,when.z)(!this.plain,(function(){return(0,custom_element_scoping.qy)(select_component_t2||(select_component_t2=select_component_`<gds-form-control-header
            class="size-${0}"
            .showExtendedSupportingText=${0}
          >
            <label for="select" slot="label" id="label-text">
              ${0}
            </label>
            <span slot="supporting-text" id="supporting-text">
              ${0}
            </span>
            <slot
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
          </gds-form-control-header>`),_this3.size,_this3.showExtendedSupportingText,_this3.label,_this3.supportingText)})),this.size,this.disabled,this.invalid,this.multiple,this.multiple?"flex-start":"center",(0,class_map.H)(CLASSES),(0,chunk_QU3DSPNU.jq)(this,_Select_instances,select_component_renderFieldContents_fn).call(this),(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_Select_instances,select_component_shouldShowFooter_fn).call(this),(function(){return(0,custom_element_scoping.qy)(select_component_t3||(select_component_t3=select_component_`<gds-form-control-footer
            class="size-${0}"
            .errorMessage=${0}
          ></gds-form-control-footer>`),_this3.size,_this3.invalid?_this3.errorMessage:void 0)})))}},{key:"_captureDOM",value:function _captureDOM(){var _this$_elSelectContai,_this4=this;if(this.shadowRoot&&0!==this.childNodes.length&&this._elSelectContainer){var cloned=Array.from(this.children).filter((function(n){return"SELECT"===n.nodeName})).map((function(node){var clone=node.cloneNode(!0);return clone.addEventListener("change",(0,chunk_QU3DSPNU.S7)(_this4,_handleSelectElementChange)),clone.addEventListener("input",(0,chunk_QU3DSPNU.S7)(_this4,_handleSelectElementChange)),clone.setAttribute("aria-describedby","supporting-text extended-supporting-text sub-label message"),clone.ariaLabel=_this4.label,clone.setAttribute("id","select"),clone.disabled=_this4.disabled,clone.className="native-control",(0,chunk_QU3DSPNU.S7)(_this4,_isValueInitialized)?clone.value=_this4.value:_this4._internalValue=clone.value,clone}));(_this$_elSelectContai=this._elSelectContainer).replaceChildren.apply(_this$_elSelectContai,(0,toConsumableArray.A)(cloned))}}},{key:"formResetCallback",value:function formResetCallback(){if(this.selectElement)if(this.selectElement.multiple)Array.from(this.selectElement.options).forEach((function(option){option.selected=!1})),this.value=[];else{var firstOption=this.selectElement.options[0];firstOption&&(this.value=firstOption.value,this.selectElement.value=firstOption.value)}}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this.selectElement}},{key:"_handleValueChange",value:function _handleValueChange(){if(this.selectElement){if(this.multiple){var valArr=this.value||[];Array.from(this.selectElement.options).forEach((function(option){option.selected=valArr.includes(option.value)}))}else this.selectElement.value=this.value;this.requestUpdate()}}}])}(form_control.S);_isValueInitialized=new WeakMap,_Select_instances=new WeakSet,select_component_shouldShowFooter_fn=function shouldShowFooter_fn(){return!this.plain&&this.invalid},_handleSelectElementChange=new WeakMap,setValueFromSelectElement_fn=function setValueFromSelectElement_fn(){if(this.selectElement)if(this.multiple){var selectedOptions=Array.from(this.selectElement.selectedOptions);this.value=selectedOptions.map((function(o){return o.value}))}else this.value=this.selectElement.value},select_component_renderFieldContents_fn=function renderFieldContents_fn(){return[(0,chunk_QU3DSPNU.jq)(this,_Select_instances,select_component_renderSlotLead_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Select_instances,renderMainSlot_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Select_instances,renderMainLabel_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Select_instances,renderChevron_fn).call(this)].map((function(element){return(0,custom_element_scoping.qy)(select_component_t4||(select_component_t4=select_component_`${0}`),element)}))},select_component_renderSlotLead_fn=function renderSlotLead_fn(){return(0,custom_element_scoping.qy)(select_component_t5||(select_component_t5=select_component_`<slot name="lead" slot="lead"></slot>`))},renderMainLabel_fn=function renderMainLabel_fn(){if(!this.multiple)return(0,custom_element_scoping.qy)(select_component_t6||(select_component_t6=select_component_`<label id="placeholder" class="native-control"
        >${0}</label
      >`),this.displayValue)},renderMainSlot_fn=function renderMainSlot_fn(){return(0,custom_element_scoping.qy)(select_component_t7||(select_component_t7=select_component_`<div class="select-container"></div>`))},renderChevron_fn=function renderChevron_fn(){if(!this.multiple)return(0,custom_element_scoping.qy)(select_component_t8||(select_component_t8=select_component_`
        <gds-icon-chevron-bottom slot="action"></gds-icon-chevron-bottom>
      `))},Select.styles=[tokens_style.LU,form_control_host_style.A,select_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],Select.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Select.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],Select.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Select.prototype,"plain",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("select")],Select.prototype,"selectElement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Select.prototype,"value",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)(".select-container")],Select.prototype,"_elSelectContainer",2),(0,chunk_QU3DSPNU.Cc)([(0,observe_light_dom.L)({childList:!0,subtree:!0,attributes:!0,characterData:!0})],Select.prototype,"_captureDOM",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],Select.prototype,"_handleValueChange",1),Select=(0,chunk_QU3DSPNU.Cc)([(0,lit_localize.cc)()],Select);var select_component_GdsSelect=function(_withLayoutChildProps){function GdsSelect(){return(0,classCallCheck.A)(this,GdsSelect),select_component_callSuper(this,GdsSelect,arguments)}return(0,inherits.A)(GdsSelect,_withLayoutChildProps),(0,createClass.A)(GdsSelect)}((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)(Select))));select_component_GdsSelect=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-select",{dependsOn:[form_control_header_component.$,form_control_footer_component.V,field_base_component.w,chevron_bottom_component.o]})],select_component_GdsSelect);var GdsSelect=function GdsSelect(props){select_component_GdsSelect.define();var JSXElement=(0,react.p)("gds-select"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSelect.__docgenInfo={description:"",methods:[],displayName:"GdsSelect"};var signal_styles_t,signal_component_t,signal_styles_default=(0,lit.AH)(signal_styles_t||(signal_styles_t=(function _(t){return t})`
  :host {
    display: inline-block;
  }

  [part='signal'] {
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 6px;
    height: 6px;
    border-radius: var(--gds-sys-radius-max);
    background-color: currentColor;
    transition: all 0.4s;

    &::before {
      display: flex;
      position: absolute;
      content: '';
      inset: -4px;
      border-radius: inherit;
      background-color: color-mix(in srgb, currentColor, transparent 80%);
      animation: signal 3s ease-in-out infinite;
    }
  }

  @keyframes signal {
    0% {
      transform: scale(2);
      opacity: 0;
    }
    60% {
      transform: scale(1);
      opacity: 1;
    }
    100% {
      transform: scale(3);
      opacity: 0;
    }
  }
`)),signal_component_=function _(t){return t};function signal_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(signal_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var signal_component_GdsSignal=function(_GdsElement){function GdsSignal(){return(0,classCallCheck.A)(this,GdsSignal),function signal_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,signal_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsSignal,arguments)}return(0,inherits.A)(GdsSignal,_GdsElement),(0,createClass.A)(GdsSignal,[{key:"render",value:function render(){return(0,static_html.qy)(signal_component_t||(signal_component_t=signal_component_`<div part="signal"></div>`))}}])}(gds_element.j);signal_component_GdsSignal.styles=[tokens_style.LU,signal_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(Object.assign({},(0,style_expression_helpers.T$)("content"),{selector:'[part="signal"]'}))],signal_component_GdsSignal.prototype,"color",2),signal_component_GdsSignal=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-signal")],signal_component_GdsSignal);var GdsSignal=function GdsSignal(props){signal_component_GdsSignal.define();var JSXElement=(0,react.p)("gds-signal"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSignal.__docgenInfo={description:"",methods:[],displayName:"GdsSignal"};var spinner_styles_t,spinner_component_t,spinner_component_t2,_GdsSpinner_instances,getWrapperClasses_fn,_originalStyles,spinner_styles_default=(0,lit.AH)(spinner_styles_t||(spinner_styles_t=(function _(t){return t})`
  /* Host configuration with core variables */
  :host {
    /* Size variables with indexed access using CSS custom properties */
    --spinner-sizes: 2rem 3.75rem 6rem;
    --spinner-size-sm: 2rem;
    --spinner-size-md: 3.75rem;
    --spinner-size-lg: 6rem;

    --track-widths: 0.1rem 0.2rem 0.3rem;
    --track-width-sm: 0.275rem;
    --track-width-md: 0.375rem;
    --track-width-lg: 0.375rem;

    /* Default to light mode as fallback */
    --spinner-track-color: var(--gds-sys-color-l3-neutral-02);
    --spinner-active-color: var(--gds-sys-color-content-neutral-02);
    --spinner-label-color: currentColor;
    --spinner-backdrop-color: rgba(100, 100, 100, 0.4);

    --spinner-backdrop-blur: 2px;

    /* Base sizing, will be overridden by size-specific variables */
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);

    /* Use CSS variable for color-scheme to avoid minification issues */
    --spinner-color-scheme: light dark;
    color-scheme: var(--spinner-color-scheme);

    display: block;
  }

  /* Size-specific host settings */
  :host([size='sm']) {
    --size: var(--spinner-size-sm);
    --track-width: var(--track-width-sm);
  }

  :host([size='md']),
  :host([size='default']) {
    --size: var(--spinner-size-md);
    --track-width: var(--track-width-md);
  }

  :host([size='lg']) {
    --size: var(--spinner-size-lg);
    --track-width: var(--track-width-lg);
  }

  /* Fullscreen positioning */
  :host([fullscreen]) {
    position: fixed;
    inset: 0;
    width: 100vw;
    height: 100vh;
    z-index: 9999;
  }

  /* Focus styles */
  :host(:focus-visible) {
    outline: 2px solid var(--spinner-active-color);
    outline-offset: 2px;
  }

  /* Spinner component */
  .spinner {
    border-radius: 50%;
    border: var(--track-width, 0.375rem) solid var(--spinner-track-color);
    border-top-color: var(--spinner-active-color);
    height: var(--size, 3.75rem);
    width: var(--size, 3.75rem);
    animation: gdsSpinnerRotation 1s linear infinite;
    aspect-ratio: 1 / 1;
  }

  /* Motion preference adjustments */
  @media (prefers-reduced-motion: reduce) {
    .spinner {
      /* Slower rotation for reduced motion preference */
      animation-duration: 2s;
      /* Smaller rotation to reduce visual intensity */
      animation-name: gdsSpinnerReducedRotation;
    }

    @keyframes gdsSpinnerReducedRotation {
      to {
        transform: rotate(180deg);
      }
    }
  }

  /* Layout components */
  .spinner-wrapper {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .spinner-wrapper.spinner-cover {
    position: absolute;
    inset: 0;
    z-index: 999;
  }

  .spinner-wrapper.spinner-fullscreen {
    position: fixed;
    inset: 0;
    z-index: 9999;
  }

  .spinner-wrapper.spinner-backdrop {
    background-color: var(--spinner-backdrop-color);
    backdrop-filter: blur(var(--spinner-backdrop-blur));
  }

  .spinner-wrapper.spinner-label-top {
    flex-direction: column-reverse;

    & .spinner-label {
      margin: 0 0 1rem;
    }
  }

  .spinner-wrapper.spinner-label-left {
    flex-direction: row-reverse;
    & .spinner-label {
      margin: 0 1rem 0 0;
    }
  }

  .spinner-wrapper.spinner-label-right {
    flex-direction: row;
    & .spinner-label {
      margin: 0 0 0 1rem;
    }
  }

  /* Label styling */
  .spinner-label {
    margin-top: 1rem;
    color: var(--spinner-label-color);
    text-align: center;
  }

  /* Animation keyframes */
  @keyframes gdsSpinnerRotation {
    to {
      transform: rotate(360deg);
    }
  }
`)),spinner_component_=function _(t){return t};function spinner_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(spinner_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function spinner_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var spinner_component_GdsSpinner=function(_withMarginProps){function GdsSpinner(){var _this;return(0,classCallCheck.A)(this,GdsSpinner),_this=function spinner_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,spinner_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsSpinner,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsSpinner_instances),_this.label=(0,lit_localize.ab)("Loading..."),_this.labelPosition="bottom",_this.showLabel=!1,_this.cover=!1,_this.fullscreen=!1,_this.size="md",_this._isAnimating=!1,(0,chunk_QU3DSPNU.VK)(_this,_originalStyles,{overflow:"visible",overscrollBehavior:"auto"}),_this}return(0,inherits.A)(GdsSpinner,_withMarginProps),(0,createClass.A)(GdsSpinner,[{key:"connectedCallback",value:function connectedCallback(){spinner_component_superPropGet(GdsSpinner,"connectedCallback",this,3)([]),this.setAttribute("role","status"),this.setAttribute("aria-live","polite"),this._isAnimating=!0,this.dispatchCustomEvent("gds-spinner-connected")}},{key:"disconnectedCallback",value:function disconnectedCallback(){spinner_component_superPropGet(GdsSpinner,"disconnectedCallback",this,3)([]),this.fullscreen&&(this.fullscreen=!1,this._toggleRootStyles()),this._isAnimating=!1,spinner_component_superPropGet(GdsSpinner,"disconnectedCallback",this,3)([])}},{key:"_updateAriaLabel",value:function _updateAriaLabel(){this.setAttribute("aria-label",this.label)}},{key:"render",value:function render(){var _this2=this;return(0,custom_element_scoping.qy)(spinner_component_t||(spinner_component_t=spinner_component_`
      <div part="wrapper" class=${0}>
        <span part="spinner" class="spinner"></span>
        ${0}
      </div>
    `),(0,class_map.H)((0,chunk_QU3DSPNU.jq)(this,_GdsSpinner_instances,getWrapperClasses_fn).call(this)),(0,when.z)(this.showLabel,(function(){return(0,custom_element_scoping.qy)(spinner_component_t2||(spinner_component_t2=spinner_component_`<span part="label" class="spinner-label">${0}</span>`),_this2.label)})))}},{key:"_toggleRootStyles",value:function _toggleRootStyles(){var style=document.documentElement.style;this.fullscreen?((0,chunk_QU3DSPNU.OV)(this,_originalStyles,{overflow:style.overflow,overscrollBehavior:style.overscrollBehavior}),style.overflow="hidden",style.overscrollBehavior="none"):(style.overflow=(0,chunk_QU3DSPNU.S7)(this,_originalStyles).overflow,style.overscrollBehavior=(0,chunk_QU3DSPNU.S7)(this,_originalStyles).overscrollBehavior)}}])}((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.qC)((0,declarative_layout_mixins.lt)(gds_element.j))));_GdsSpinner_instances=new WeakSet,getWrapperClasses_fn=function getWrapperClasses_fn(){return(0,defineProperty.A)({"spinner-wrapper":!0,"spinner-fullscreen":this.fullscreen,"spinner-cover":this.cover,"spinner-backdrop":this.cover||this.fullscreen,"spinner-animating":this._isAnimating},"spinner-label-".concat(this.labelPosition),this.labelPosition)},_originalStyles=new WeakMap,spinner_component_GdsSpinner.styles=[tokens_style.LU,spinner_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],spinner_component_GdsSpinner.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,reflect:!0,attribute:"label-position"})],spinner_component_GdsSpinner.prototype,"labelPosition",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],spinner_component_GdsSpinner.prototype,"showLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],spinner_component_GdsSpinner.prototype,"cover",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],spinner_component_GdsSpinner.prototype,"fullscreen",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,reflect:!0})],spinner_component_GdsSpinner.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],spinner_component_GdsSpinner.prototype,"_isAnimating",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("label")],spinner_component_GdsSpinner.prototype,"_updateAriaLabel",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("fullscreen")],spinner_component_GdsSpinner.prototype,"_toggleRootStyles",1),spinner_component_GdsSpinner=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-spinner"),(0,lit_localize.cc)()],spinner_component_GdsSpinner);var GdsSpinner=function GdsSpinner(props){spinner_component_GdsSpinner.define();var JSXElement=(0,react.p)("gds-spinner"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSpinner.__docgenInfo={description:"",methods:[],displayName:"GdsSpinner"};var GdsText=function GdsText(props){text_component_GdsText.define();var JSXElement=(0,react.p)("gds-text"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsText.__docgenInfo={description:"",methods:[],displayName:"GdsText"};var GdsTextarea=function GdsTextarea(props){textarea_component_GdsTextarea.define();var JSXElement=(0,react.p)("gds-textarea"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsTextarea.__docgenInfo={description:"",methods:[],displayName:"GdsTextarea"};var video_styles_t,video_component_t,theme=__webpack_require__("./dist/libs/core/src/generated/react/theme/index.js"),video_styles_default=(0,lit.AH)(video_styles_t||(video_styles_t=(function _(t){return t})`
  :host {
    display: block;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-size: 0;
    width: 100%;
    height: auto;
    overflow: hidden;
  }

  video {
    display: flex;
    width: 100%;
    height: 100%;
  }
`)),video_component_=function _(t){return t};function video_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(video_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var video_component_GdsVideo=function(_withSizeXProps){function GdsVideo(){return(0,classCallCheck.A)(this,GdsVideo),function video_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,video_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsVideo,arguments)}return(0,inherits.A)(GdsVideo,_withSizeXProps),(0,createClass.A)(GdsVideo,[{key:"applyVideoSettings",value:function applyVideoSettings(){this.videoElement&&(this.videoElement.src=this.src||"",this.videoElement.poster=this.poster||"",this.videoElement.muted=this.muted||!1,this.videoElement.autoplay=this.autoplay||!1,this.videoElement.loop=this.loop||!1,this.videoElement.playsInline=this.playsinline||!1)}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(video_component_t||(video_component_t=video_component_`<video></video>`))}},{key:"firstUpdated",value:function firstUpdated(){this.applyVideoSettings()}}])}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.vi)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.qC)(gds_element.j))))));video_component_GdsVideo.styles=[tokens_style.LU,video_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],video_component_GdsVideo.prototype,"aspect-ratio",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"video"})],video_component_GdsVideo.prototype,"object-position",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],video_component_GdsVideo.prototype,"opacity",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"video"})],video_component_GdsVideo.prototype,"object-fit",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:"video"})],video_component_GdsVideo.prototype,"pointer-events",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return"var(--gds-sys-space-".concat(v,")")}})],video_component_GdsVideo.prototype,"border-radius",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],video_component_GdsVideo.prototype,"src",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],video_component_GdsVideo.prototype,"poster",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],video_component_GdsVideo.prototype,"muted",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],video_component_GdsVideo.prototype,"playsinline",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],video_component_GdsVideo.prototype,"autoplay",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],video_component_GdsVideo.prototype,"loop",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("video")],video_component_GdsVideo.prototype,"videoElement",2),video_component_GdsVideo=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-video")],video_component_GdsVideo);var GdsVideo=function GdsVideo(props){video_component_GdsVideo.define();var JSXElement=(0,react.p)("gds-video"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsVideo.__docgenInfo={description:"",methods:[],displayName:"GdsVideo"};var GdsFormControlFooter=function GdsFormControlFooter(props){form_control_footer_component.V.define();var JSXElement=(0,react.p)("gds-form-control-footer"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFormControlFooter.__docgenInfo={description:"",methods:[],displayName:"GdsFormControlFooter"};var GdsFormControlHeader=function GdsFormControlHeader(props){form_control_header_component.$.define();var JSXElement=(0,react.p)("gds-form-control-header"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFormControlHeader.__docgenInfo={description:"",methods:[],displayName:"GdsFormControlHeader"};var option_component=__webpack_require__("./dist/libs/core/src/primitives/listbox/option.component.js"),GdsOption=function GdsOption(props){option_component.Y.define();var JSXElement=(0,react.p)("gds-option"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsOption.__docgenInfo={description:"",methods:[],displayName:"GdsOption"};var menu_item_component=__webpack_require__("./dist/libs/core/src/primitives/menu/menu-item.component.js"),GdsMenuItem=function GdsMenuItem(props){menu_item_component.T.define();var JSXElement=(0,react.p)("gds-menu-item"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsMenuItem.__docgenInfo={description:"",methods:[],displayName:"GdsMenuItem"};var breadcrumb_styles_t,breadcrumb_component_t,breadcrumb_component_t2,breadcrumb_component_t3,breadcrumb_component_t4,breadcrumb_component_t5,_GdsBreadcrumb_instances,breadcrumb_component_defaultRel_get,renderContents_fn,renderMainContent_fn,renderOverflowMenu_fn,renderItem_fn,renderCurrent_fn,breadcrumb_styles_default=(0,lit.AH)(breadcrumb_styles_t||(breadcrumb_styles_t=(function _(t){return t})`
  @layer base {
    :host {
      display: contents;
    }

    .list-item {
      display: flex;
      align-items: center;
      justify-content: center;
      list-style: none;
      margin: unset;
      padding: unset;
      height: max-content;
      font-weight: inherit;
      font-size: inherit;
      line-height: inherit;
      gap: var(--_gap);
    }

    @container (max-width: 400px) {
      :host(:not([return])) {
        display: none;
      }

      :host([return]) {
        display: contents;
      }
    }
  }
`)),breadcrumb_component_=function _(t){return t};function breadcrumb_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(breadcrumb_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var breadcrumb_component_GdsBreadcrumb=function(_GdsElement){function GdsBreadcrumb(){var _this;return(0,classCallCheck.A)(this,GdsBreadcrumb),_this=function breadcrumb_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,breadcrumb_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsBreadcrumb,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsBreadcrumb_instances),_this.href="",_this.label="",_this.overflow=!1,_this}return(0,inherits.A)(GdsBreadcrumb,_GdsElement),(0,createClass.A)(GdsBreadcrumb,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(breadcrumb_component_t||(breadcrumb_component_t=breadcrumb_component_`
      <div role="listitem" class="list-item">${0}</div>
    `),(0,chunk_QU3DSPNU.jq)(this,_GdsBreadcrumb_instances,renderContents_fn).call(this))}}])}(gds_element.j);_GdsBreadcrumb_instances=new WeakSet,breadcrumb_component_defaultRel_get=function defaultRel_get(){return"_blank"===this.target?"noreferrer noopener":void 0},renderContents_fn=function renderContents_fn(){return[(0,chunk_QU3DSPNU.jq)(this,_GdsBreadcrumb_instances,renderMainContent_fn).call(this)].map((function(element){return(0,custom_element_scoping.qy)(breadcrumb_component_t2||(breadcrumb_component_t2=breadcrumb_component_`${0}`),element)}))},renderMainContent_fn=function renderMainContent_fn(){return this.overflow?(0,chunk_QU3DSPNU.jq)(this,_GdsBreadcrumb_instances,renderOverflowMenu_fn).call(this):this.href?(0,chunk_QU3DSPNU.jq)(this,_GdsBreadcrumb_instances,renderItem_fn).call(this):(0,chunk_QU3DSPNU.jq)(this,_GdsBreadcrumb_instances,renderCurrent_fn).call(this)},renderOverflowMenu_fn=function renderOverflowMenu_fn(){return(0,custom_element_scoping.qy)(breadcrumb_component_t3||(breadcrumb_component_t3=breadcrumb_component_`<slot></slot>`))},renderItem_fn=function renderItem_fn(){return(0,custom_element_scoping.qy)(breadcrumb_component_t4||(breadcrumb_component_t4=breadcrumb_component_`
      <gds-link
        href=${0}
        target=${0}
        rel=${0}
        aria-label=${0}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </gds-link>
    `),(0,if_defined.J)(this.href),(0,if_defined.J)(this.target),(0,if_defined.J)(this.rel||(0,chunk_QU3DSPNU.S7)(this,_GdsBreadcrumb_instances,breadcrumb_component_defaultRel_get)),this.label||lit.s6)},renderCurrent_fn=function renderCurrent_fn(){return(0,custom_element_scoping.qy)(breadcrumb_component_t5||(breadcrumb_component_t5=breadcrumb_component_`
      <gds-text
        color="neutral-02"
        font-weight="regular"
        aria-current=${0}
      >
        <slot></slot>
      </gds-text>
    `),(0,if_defined.J)(this.href?void 0:"page"))},breadcrumb_component_GdsBreadcrumb.styles=[breadcrumb_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],breadcrumb_component_GdsBreadcrumb.prototype,"href",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],breadcrumb_component_GdsBreadcrumb.prototype,"target",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],breadcrumb_component_GdsBreadcrumb.prototype,"rel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],breadcrumb_component_GdsBreadcrumb.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],breadcrumb_component_GdsBreadcrumb.prototype,"overflow",2),breadcrumb_component_GdsBreadcrumb=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-breadcrumb",{dependsOn:[link_component_GdsLink,text_component_GdsText]})],breadcrumb_component_GdsBreadcrumb);var GdsBreadcrumb=function GdsBreadcrumb(props){breadcrumb_component_GdsBreadcrumb.define();var JSXElement=(0,react.p)("gds-breadcrumb"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsBreadcrumb.__docgenInfo={description:"",methods:[],displayName:"GdsBreadcrumb"};var checkbox_group_styles_t,checkbox_group_component_t,checkbox_group_component_t2,checkbox_group_component_t3,checkbox_group_component_t4,checkbox_group_component_t5,_syncCheckboxes,_CheckboxGroup_instances,renderCheckboxGroupContents_fn,renderFieldControlHeader_fn,renderCheckboxes_fn,handleCheckboxChange_fn,computeValue_fn,dispatchInputEvent_fn,renderFieldControlFooter_fn,checkbox_group_styles_styles=(0,lit.AH)(checkbox_group_styles_t||(checkbox_group_styles_t=(function _(t){return t})`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_checkbox-label-color: var(--gds-sys-color-l3-content-tertiary);

    /* Perimiter */
    --_perimeter-size: var(--gds-sys-space-2xl);
    --_container-gap: var(--gds-sys-space-s);
  }

  :host(:invalid) {
    --_checkbox-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .checkbox-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .checkbox-group {
    gap: var(--gds-sys-space-xs);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_checkbox-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-s) var(--gds-sys-space-xl);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) .direction-column .content {
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) .direction-row .content {
    gap: var(--gds-sys-space-xs) var(--gds-sys-space-m);
  }
`)),checkbox_group_component_=function _(t){return t};function checkbox_group_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,checkbox_group_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function checkbox_group_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(checkbox_group_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var CheckboxGroup=function(_GdsFormControlElemen){function CheckboxGroup(){var _this;return(0,classCallCheck.A)(this,CheckboxGroup),_this=checkbox_group_component_callSuper(this,CheckboxGroup,arguments),(0,chunk_QU3DSPNU.VK)(_this,_CheckboxGroup_instances),_this.size="large",_this.direction="column",_this.supportingText="",_this.showExtendedSupportingText=!1,(0,chunk_QU3DSPNU.VK)(_this,_syncCheckboxes,(function(){_this.checkboxes.forEach((function(checkbox){checkbox.invalid=_this.invalid,checkbox.errorMessage=_this.errorMessage}))})),_this}return(0,inherits.A)(CheckboxGroup,_GdsFormControlElemen),(0,createClass.A)(CheckboxGroup,[{key:"value",get:function get(){return this._internalValue||[]},set:function set(value){this._internalValue=value}},{key:"checkboxes",get:function get(){return Array.from(this.querySelectorAll("[gds-element=gds-checkbox]"))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this._elCheckboxGroup}},{key:"_handleValueChange",value:function _handleValueChange(){var _this2=this;this.checkboxes.forEach((function(checkbox){checkbox.checked=_this2.value.includes(checkbox.value)||!1}))}},{key:"_handleGroupInvalidChange",value:function _handleGroupInvalidChange(){(0,chunk_QU3DSPNU.S7)(this,_syncCheckboxes).call(this)}},{key:"focus",value:function focus(){var _this$checkboxes$;null==(_this$checkboxes$=this.checkboxes[0])||_this$checkboxes$.focus()}},{key:"connectedCallback",value:function connectedCallback(){!function checkbox_group_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(CheckboxGroup,"connectedCallback",this,3)([]),this.addEventListener("gds-validity-state",(0,chunk_QU3DSPNU.S7)(this,_syncCheckboxes))}},{key:"render",value:function render(){var classes={"checkbox-group":!0,"direction-row":"row"===this.direction,"direction-column":"column"===this.direction};return(0,custom_element_scoping.qy)(checkbox_group_component_t||(checkbox_group_component_t=checkbox_group_component_`<div
      role="group"
      id="checkboxgroup"
      class=${0}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${0}
    >
      ${0}
    </div>`),(0,class_map.H)(classes),this.invalid,(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,renderCheckboxGroupContents_fn).call(this))}},{key:"_syncOnDOMChange",value:function _syncOnDOMChange(){(0,chunk_QU3DSPNU.S7)(this,_syncCheckboxes).call(this),(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,computeValue_fn).call(this)}}])}(form_control.S);_syncCheckboxes=new WeakMap,_CheckboxGroup_instances=new WeakSet,renderCheckboxGroupContents_fn=function renderCheckboxGroupContents_fn(){return[(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,renderFieldControlHeader_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,renderCheckboxes_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,renderFieldControlFooter_fn).call(this)].map((function(element){return(0,custom_element_scoping.qy)(checkbox_group_component_t2||(checkbox_group_component_t2=checkbox_group_component_`${0}`),element)}))},renderFieldControlHeader_fn=function renderFieldControlHeader_fn(){if(this.label)return(0,custom_element_scoping.qy)(checkbox_group_component_t3||(checkbox_group_component_t3=checkbox_group_component_`<gds-form-control-header class="size-${0}">
        <label id="group-label" slot="label">${0}</label>
        <span slot="supporting-text" id="supporting-text">
          ${0}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`),this.size,this.label,this.supportingText)},renderCheckboxes_fn=function renderCheckboxes_fn(){return(0,custom_element_scoping.qy)(checkbox_group_component_t4||(checkbox_group_component_t4=checkbox_group_component_`<div class="content">
      <slot @input=${0}></slot>
    </div>`),(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,handleCheckboxChange_fn))},handleCheckboxChange_fn=function handleCheckboxChange_fn(e){e&&e.stopPropagation(),(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,computeValue_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_CheckboxGroup_instances,dispatchInputEvent_fn).call(this)},computeValue_fn=function computeValue_fn(){var newValue=this.checkboxes.filter((function(checkbox){return checkbox.checked})).map((function(checkbox){return checkbox.value}));JSON.stringify(newValue)!==JSON.stringify(this.value)&&(this.value=newValue)},dispatchInputEvent_fn=function dispatchInputEvent_fn(){var _this3=this;this.updateComplete.then((function(){return _this3.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}))},renderFieldControlFooter_fn=function renderFieldControlFooter_fn(){return(0,custom_element_scoping.qy)(checkbox_group_component_t5||(checkbox_group_component_t5=checkbox_group_component_`<gds-form-control-footer
      id="footer"
      class="size-${0}"
      .errorMessage=${0}
    >
    </gds-form-control-footer>`),this.size,this.invalid?this.errorMessage:void 0)},CheckboxGroup.styles=[checkbox_group_styles_styles],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],CheckboxGroup.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],CheckboxGroup.prototype,"direction",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],CheckboxGroup.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],CheckboxGroup.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Array})],CheckboxGroup.prototype,"value",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#checkboxgroup")],CheckboxGroup.prototype,"_elCheckboxGroup",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value",{waitUntilFirstUpdate:!0})],CheckboxGroup.prototype,"_handleValueChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("invalid"),(0,watch.w)("errorMessage")],CheckboxGroup.prototype,"_handleGroupInvalidChange",1),(0,chunk_QU3DSPNU.Cc)([(0,observe_light_dom.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],CheckboxGroup.prototype,"_syncOnDOMChange",1),CheckboxGroup=(0,chunk_QU3DSPNU.Cc)([(0,lit_localize.cc)()],CheckboxGroup);var checkbox_group_component_GdsCheckboxGroup=function(_withLayoutChildProps){function GdsCheckboxGroup(){return(0,classCallCheck.A)(this,GdsCheckboxGroup),checkbox_group_component_callSuper(this,GdsCheckboxGroup,arguments)}return(0,inherits.A)(GdsCheckboxGroup,_withLayoutChildProps),(0,createClass.A)(GdsCheckboxGroup)}((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.Q8)(CheckboxGroup))));checkbox_group_component_GdsCheckboxGroup=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-checkbox-group",{dependsOn:[form_control_header_component.$,form_control_footer_component.V]})],checkbox_group_component_GdsCheckboxGroup);var GdsCheckboxGroup=function GdsCheckboxGroup(props){checkbox_group_component_GdsCheckboxGroup.define();var JSXElement=(0,react.p)("gds-checkbox-group"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsCheckboxGroup.__docgenInfo={description:"",methods:[],displayName:"GdsCheckboxGroup"};var GdsIconDetails=function GdsIconDetails(props){details_icon_component_GdsIconDetails.define();var JSXElement=(0,react.p)("gds-icon-details"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsIconDetails.__docgenInfo={description:"",methods:[],displayName:"GdsIconDetails"};var filter_chip_component=__webpack_require__("./dist/libs/core/src/components/filter-chips/filter-chip/filter-chip.component.js"),GdsFilterChip=function GdsFilterChip(props){filter_chip_component.x.define();var JSXElement=(0,react.p)("gds-filter-chip"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};function formatted_text_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(formatted_text_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}GdsFilterChip.__docgenInfo={description:"",methods:[],displayName:"GdsFilterChip"},text_component_GdsText.define();var GdsFormattedText=function(_GdsText){function GdsFormattedText(){return(0,classCallCheck.A)(this,GdsFormattedText),function formatted_text_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,formatted_text_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormattedText,arguments)}return(0,inherits.A)(GdsFormattedText,_GdsText),(0,createClass.A)(GdsFormattedText,[{key:"updated",value:function updated(changedProperties){!function formatted_text_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFormattedText,"updated",this,3)([changedProperties]),this.element&&(this.element.innerHTML=this.formattedValue)}}])}(text_component_GdsText);(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("[tag]")],GdsFormattedText.prototype,"element",2);var accountsFormats={"seb-account":function sebAccount(value){var _value$toString,account="string"==typeof value?value.replace(" ",""):null!=(_value$toString=null==value?void 0:value.toString())?_value$toString:"";return 11!==account.length?account:"".concat(account.slice(0,4)," ").concat(account.slice(4,6)," ").concat(account.slice(6,9)," ").concat(account.slice(9,11))}};function formatted_account_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(formatted_account_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var formatted_account_component_GdsFormattedAccount=function(_GdsFormattedText){function GdsFormattedAccount(){var _this;return(0,classCallCheck.A)(this,GdsFormattedAccount),(_this=function formatted_account_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,formatted_account_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormattedAccount,arguments)).format="seb-account",_this}return(0,inherits.A)(GdsFormattedAccount,_GdsFormattedText),(0,createClass.A)(GdsFormattedAccount,[{key:"formattedValue",get:function get(){return accountsFormats[this.format](this.account)}},{key:"firstUpdated",value:function firstUpdated(_changedProperties){!function formatted_account_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFormattedAccount,"firstUpdated",this,3)([_changedProperties]),!this.account&&this.textContent&&(this.account=this.textContent)}}])}(GdsFormattedText);(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],formatted_account_component_GdsFormattedAccount.prototype,"account",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],formatted_account_component_GdsFormattedAccount.prototype,"format",2),formatted_account_component_GdsFormattedAccount=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-formatted-account")],formatted_account_component_GdsFormattedAccount);var GdsFormattedAccount=function GdsFormattedAccount(props){formatted_account_component_GdsFormattedAccount.define();var JSXElement=(0,react.p)("gds-formatted-account"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFormattedAccount.__docgenInfo={description:"",methods:[],displayName:"GdsFormattedAccount"};var convertValueToDate=function convertValueToDate(value){return"string"==typeof value?new Date(value):value},dateTimeFormats={dateOnlyNumbers:function dateOnlyNumbers(value,locale){return new Intl.DateTimeFormat(locale,{dateStyle:"short"}).format(convertValueToDate(value))},dateLong:function dateLong(value,locale){return new Intl.DateTimeFormat(locale,{dateStyle:"long"}).format(convertValueToDate(value))},dateLongWithWeekday:function dateLongWithWeekday(value,locale){return new Intl.DateTimeFormat(locale,{dateStyle:"full"}).format(convertValueToDate(value))},dateShort:function dateShort(value,locale){var formatter=new Intl.DateTimeFormat(locale,{dateStyle:"medium"});return"sv-se"===(null==locale?void 0:locale.toLowerCase())?formatter.format(convertValueToDate(value)).replace(".",""):formatter.format(convertValueToDate(value))},dateShortWithWeekday:function dateShortWithWeekday(value,locale){var formatted=new Intl.DateTimeFormat(locale,{weekday:"short",year:"numeric",month:"short",day:"numeric"}).format(convertValueToDate(value));return"sv-se"===(null==locale?void 0:locale.toLowerCase())?formatted.replace(".",""):"en-gb"===(null==locale?void 0:locale.toLowerCase())?formatted.replace(",",""):formatted},timeShort:function timeShort(value,locale){return new Intl.DateTimeFormat(locale,{timeStyle:"short"}).format(convertValueToDate(value))},timeLong:function timeLong(value,locale){return new Intl.DateTimeFormat(locale,{timeStyle:"medium"}).format(convertValueToDate(value))}};function formatted_date_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(formatted_date_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var formatted_date_component_GdsFormattedDate=function(_GdsFormattedText){function GdsFormattedDate(){var _this;return(0,classCallCheck.A)(this,GdsFormattedDate),(_this=function formatted_date_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,formatted_date_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormattedDate,arguments)).format="dateOnlyNumbers",_this}return(0,inherits.A)(GdsFormattedDate,_GdsFormattedText),(0,createClass.A)(GdsFormattedDate,[{key:"formattedValue",get:function get(){var _this$value$toString,_this$value2,_ref,_this$value,_this$element;return this.format&&this.format in dateTimeFormats?dateTimeFormats[this.format](null!=(_ref=null!=(_this$value=this.value)?_this$value:null==(_this$element=this.element)?void 0:_this$element.textContent)?_ref:void 0,this.locale):null!=(_this$value$toString=null==(_this$value2=this.value)?void 0:_this$value2.toString())?_this$value$toString:""}},{key:"firstUpdated",value:function firstUpdated(_changedProperties){!function formatted_date_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFormattedDate,"firstUpdated",this,3)([_changedProperties]),!this.value&&this.textContent&&(this.value=this.textContent)}}])}(GdsFormattedText);(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],formatted_date_component_GdsFormattedDate.prototype,"value",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],formatted_date_component_GdsFormattedDate.prototype,"format",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],formatted_date_component_GdsFormattedDate.prototype,"locale",2),formatted_date_component_GdsFormattedDate=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-formatted-date")],formatted_date_component_GdsFormattedDate);var GdsFormattedDate=function GdsFormattedDate(props){formatted_date_component_GdsFormattedDate.define();var JSXElement=(0,react.p)("gds-formatted-date"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFormattedDate.__docgenInfo={description:"",methods:[],displayName:"GdsFormattedDate"};var numberFormats={decimalsAndThousands:function decimalsAndThousands(value,locale,currency){var options={maximumFractionDigits:2,minimumFractionDigits:2};return currency?new Intl.NumberFormat(locale,Object.assign({},options,{style:"currency",currency})).format(Number(value)):new Intl.NumberFormat(locale,options).format(Number(value))}};function formatted_number_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(formatted_number_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var formatted_number_component_GdsFormattedNumber=function(_GdsFormattedText){function GdsFormattedNumber(){var _this;return(0,classCallCheck.A)(this,GdsFormattedNumber),(_this=function formatted_number_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,formatted_number_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormattedNumber,arguments)).format="decimalsAndThousands",_this}return(0,inherits.A)(GdsFormattedNumber,_GdsFormattedText),(0,createClass.A)(GdsFormattedNumber,[{key:"formattedValue",get:function get(){return numberFormats[this.format](this.value,this.locale,this.currency)}},{key:"firstUpdated",value:function firstUpdated(_changedProperties){!function formatted_number_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFormattedNumber,"firstUpdated",this,3)([_changedProperties]),!this.value&&this.textContent&&(this.value=this.textContent)}}])}(GdsFormattedText);(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],formatted_number_component_GdsFormattedNumber.prototype,"value",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],formatted_number_component_GdsFormattedNumber.prototype,"locale",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],formatted_number_component_GdsFormattedNumber.prototype,"currency",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],formatted_number_component_GdsFormattedNumber.prototype,"format",2),formatted_number_component_GdsFormattedNumber=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-formatted-number")],formatted_number_component_GdsFormattedNumber);var GdsFormattedNumber=function GdsFormattedNumber(props){formatted_number_component_GdsFormattedNumber.define();var JSXElement=(0,react.p)("gds-formatted-number"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsFormattedNumber.__docgenInfo={description:"",methods:[],displayName:"GdsFormattedNumber"};var radio_group_styles_t,radio_group_component_t,radio_group_component_t2,radio_group_component_t3,radio_group_component_t4,radio_group_component_t5,_RadioGroup_instances,initializeFocusable_fn,handleFocus_fn,radio_group_component_dispatchChangeEvents_fn,handleRadioChange_fn,handleKeyDown_fn,focusAndSelectRadio_fn,renderRadioGroupContents_fn,radio_group_component_renderFieldControlHeader_fn,renderRadios_fn,radio_group_component_renderFieldControlFooter_fn,radio_group_styles_styles=(0,lit.AH)(radio_group_styles_t||(radio_group_styles_t=(function _(t){return t})`
  :host {
    /* Font Sizes */
    --_font-label: var(--gds-sys-text-detail-book-m);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-s);
    font: var(--_font-label);

    /* Color */
    --_radio-label-color: var(--gds-sys-color-l3-content-tertiary);
  }

  :host(:invalid) {
    --_radio-label-color: var(--gds-sys-color-content-negative-01);
  }

  :host([size='small']) {
    --_font-label: var(--gds-sys-text-detail-book-s);
    --_font-supporting-text: var(--gds-sys-text-detail-regular-xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_container-gap: var(--gds-sys-space-xs);
  }

  .radio-group {
    display: flex;
    flex-direction: column;
    gap: var(--gds-sys-space-m);
  }

  :host([size='small']) .radio-group {
    gap: var(--gds-sys-space-xs);
  }

  .content {
    display: flex;
    position: relative;
    max-width: max-content;
    color: var(--_radio-label-color);
  }

  .direction-row .content {
    flex-direction: row;
    flex-wrap: wrap;
    gap: var(--gds-sys-space-s) var(--gds-sys-space-xl);
  }

  .direction-column .content {
    flex-direction: column;
    gap: var(--gds-sys-space-s);
  }

  :host([size='small']) .direction-column .content {
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) .direction-row .content {
    gap: var(--gds-sys-space-xs) var(--gds-sys-space-m);
  }
`)),radio_group_component_=function _(t){return t};function radio_group_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,radio_group_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function radio_group_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(radio_group_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function radio_group_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var RadioGroup=function(_GdsFormControlElemen){function RadioGroup(){var _this;return(0,classCallCheck.A)(this,RadioGroup),_this=radio_group_component_callSuper(this,RadioGroup,arguments),(0,chunk_QU3DSPNU.VK)(_this,_RadioGroup_instances),_this.size="large",_this.direction="column",_this.supportingText="",_this.showExtendedSupportingText=!1,_this._isConnected=!1,_this}return(0,inherits.A)(RadioGroup,_GdsFormControlElemen),(0,createClass.A)(RadioGroup,[{key:"radios",get:function get(){return Array.from(this.querySelectorAll("[gds-element=gds-radio]"))}},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;radio_group_component_superPropGet(RadioGroup,"connectedCallback",this,3)([]),this._isConnected=!0,this.updateComplete.then((function(){_this2._syncRadioStates(),(0,chunk_QU3DSPNU.jq)(_this2,_RadioGroup_instances,initializeFocusable_fn).call(_this2)})),this.addEventListener("invalid",this._syncRadioStates)}},{key:"disconnectedCallback",value:function disconnectedCallback(){radio_group_component_superPropGet(RadioGroup,"disconnectedCallback",this,3)([]),this._isConnected=!1,this.removeEventListener("invalid",this._syncRadioStates)}},{key:"focus",value:function focus(options){var _this$_getValidityAnc;null==(_this$_getValidityAnc=this._getValidityAnchor())||_this$_getValidityAnc.focus(options)}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this._contentElement}},{key:"_handleValueChange",value:function _handleValueChange(){var _this3=this;this._isConnected&&(this._syncRadioStates(),this.updateComplete.then((function(){(0,chunk_QU3DSPNU.jq)(_this3,_RadioGroup_instances,initializeFocusable_fn).call(_this3)})))}},{key:"_syncRadioStates",value:function _syncRadioStates(){var _this4=this;this._isConnected&&this.radios.forEach((function(radio){radio.checked=radio.value===_this4.value,radio.size=_this4.size,radio.invalid=_this4.invalid,radio.errorMessage=_this4.errorMessage}))}},{key:"render",value:function render(){var classes={"radio-group":!0,"direction-row":"row"===this.direction,"direction-column":"column"===this.direction};return(0,custom_element_scoping.qy)(radio_group_component_t||(radio_group_component_t=radio_group_component_`<div
      role="radiogroup"
      id="radiogroup"
      class=${0}
      aria-labelledby="group-label"
      aria-describedby="supporting-text extended-supporting-text footer"
      aria-invalid=${0}
    >
      ${0}
    </div>`),(0,class_map.H)(classes),this.invalid,(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,renderRadioGroupContents_fn).call(this))}}])}(form_control.S);_RadioGroup_instances=new WeakSet,initializeFocusable_fn=function initializeFocusable_fn(){if(this._contentElement&&this._isConnected){var selectedRadio=this.radios.find((function(radio){return radio.checked}));selectedRadio?(selectedRadio.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")):this._contentElement.setAttribute("tabindex","0"),this.radios.filter((function(radio){return!radio.checked})).forEach((function(radio){return radio.setAttribute("tabindex","-1")}))}},handleFocus_fn=function handleFocus_fn(){if(this._contentElement&&this._isConnected){var selectedRadio=this.radios.find((function(radio){return radio.checked})),radioToFocus=selectedRadio||this.radios[0];radioToFocus&&(radioToFocus.focus(),selectedRadio||(this.radios.forEach((function(radio){return radio.setAttribute("tabindex","-1")})),radioToFocus.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1")))}},radio_group_component_dispatchChangeEvents_fn=function dispatchChangeEvents_fn(){var _this5=this;this.updateComplete.then((function(){return _this5.dispatchStandardEvent("change",{composed:!0,bubbles:!0})})),this.updateComplete.then((function(){return _this5.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}))},handleRadioChange_fn=function handleRadioChange_fn(e){e.stopPropagation();var radio=e.target;this.value=radio.value,this._syncRadioStates(),(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,radio_group_component_dispatchChangeEvents_fn).call(this)},handleKeyDown_fn=function handleKeyDown_fn(e){if(this._isConnected){var radios=this.radios.filter((function(radio){return!radio.disabled}));if(0!==radios.length){var currentIndex=radios.findIndex((function(radio){return document.activeElement===radio}));switch(-1===currentIndex&&-1===(currentIndex=radios.findIndex((function(radio){return radio.checked})))&&(currentIndex=0),e.key){case"ArrowDown":case"ArrowRight":e.preventDefault();var nextIndex=(currentIndex+1)%radios.length;(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,focusAndSelectRadio_fn).call(this,radios[nextIndex]);break;case"ArrowUp":case"ArrowLeft":e.preventDefault();var _nextIndex=(currentIndex-1+radios.length)%radios.length;(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,focusAndSelectRadio_fn).call(this,radios[_nextIndex]);break;default:return}}}},focusAndSelectRadio_fn=function focusAndSelectRadio_fn(radio){this._contentElement&&this._isConnected&&(this.radios.forEach((function(r){return r.setAttribute("tabindex","-1")})),radio.setAttribute("tabindex","0"),this._contentElement.setAttribute("tabindex","-1"),radio.checked=!0,radio.focus(),this.value=radio.value,this._syncRadioStates(),(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,radio_group_component_dispatchChangeEvents_fn).call(this))},renderRadioGroupContents_fn=function renderRadioGroupContents_fn(){return[(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,radio_group_component_renderFieldControlHeader_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,renderRadios_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,radio_group_component_renderFieldControlFooter_fn).call(this)].map((function(element){return(0,custom_element_scoping.qy)(radio_group_component_t2||(radio_group_component_t2=radio_group_component_`${0}`),element)}))},radio_group_component_renderFieldControlHeader_fn=function renderFieldControlHeader_fn(){if(this.label)return(0,custom_element_scoping.qy)(radio_group_component_t3||(radio_group_component_t3=radio_group_component_` <gds-form-control-header
        class="size-${0}"
        .showExtendedSupportingText="${0}"
      >
        <label id="group-label" slot="label">${0}</label>
        <span slot="supporting-text" id="supporting-text">
          ${0}
        </span>
        <slot
          id="extended-supporting-text"
          name="extended-supporting-text"
          slot="extended-supporting-text"
        ></slot>
      </gds-form-control-header>`),this.size,this.showExtendedSupportingText,this.label,this.supportingText)},renderRadios_fn=function renderRadios_fn(){return(0,custom_element_scoping.qy)(radio_group_component_t4||(radio_group_component_t4=radio_group_component_` <div
      class="content"
      @keydown=${0}
      @focus=${0}
    >
      <slot @input=${0}></slot>
    </div>`),(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,handleKeyDown_fn),(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,handleFocus_fn),(0,chunk_QU3DSPNU.jq)(this,_RadioGroup_instances,handleRadioChange_fn))},radio_group_component_renderFieldControlFooter_fn=function renderFieldControlFooter_fn(){return(0,custom_element_scoping.qy)(radio_group_component_t5||(radio_group_component_t5=radio_group_component_` <gds-form-control-footer
      id="footer"
      class="size-${0}"
      .errorMessage=${0}
    >
    </gds-form-control-footer>`),this.size,this.invalid?this.errorMessage:void 0)},RadioGroup.styles=[tokens_style.LU,radio_group_styles_styles],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],RadioGroup.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],RadioGroup.prototype,"direction",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],RadioGroup.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],RadioGroup.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)(".content")],RadioGroup.prototype,"_contentElement",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],RadioGroup.prototype,"_handleValueChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("invalid"),(0,watch.w)("errorMessage")],RadioGroup.prototype,"_syncRadioStates",1),RadioGroup=(0,chunk_QU3DSPNU.Cc)([(0,lit_localize.cc)()],RadioGroup);var radio_group_component_GdsRadioGroup=function(_withLayoutChildProps){function GdsRadioGroup(){return(0,classCallCheck.A)(this,GdsRadioGroup),radio_group_component_callSuper(this,GdsRadioGroup,arguments)}return(0,inherits.A)(GdsRadioGroup,_withLayoutChildProps),(0,createClass.A)(GdsRadioGroup)}((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.Q8)(RadioGroup))));radio_group_component_GdsRadioGroup=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-radio-group",{dependsOn:[form_control_header_component.$,form_control_footer_component.V]})],radio_group_component_GdsRadioGroup);var GdsRadioGroup=function GdsRadioGroup(props){radio_group_component_GdsRadioGroup.define();var JSXElement=(0,react.p)("gds-radio-group"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsRadioGroup.__docgenInfo={description:"",methods:[],displayName:"GdsRadioGroup"};var segment_component=__webpack_require__("./dist/libs/core/src/components/segmented-control/segment/segment.component.js"),GdsSegment=function GdsSegment(props){segment_component.m.define();var JSXElement=(0,react.p)("gds-segment"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSegment.__docgenInfo={description:"",methods:[],displayName:"GdsSegment"};var sensitive_account_component_t,sensitive_account_component_=function _(t){return t};function sensitive_account_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(sensitive_account_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function sensitive_account_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var sensitive_account_component_GdsSensitiveAccount=function(_GdsFormattedAccount){function GdsSensitiveAccount(){var _this;return(0,classCallCheck.A)(this,GdsSensitiveAccount),(_this=function sensitive_account_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,sensitive_account_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsSensitiveAccount,arguments)).hide=!1,_this}return(0,inherits.A)(GdsSensitiveAccount,_GdsFormattedAccount),(0,createClass.A)(GdsSensitiveAccount,[{key:"render",value:function render(){var _this2=this;return(0,when.z)(this.hide,(function(){return(0,custom_element_scoping.qy)(sensitive_account_component_t||(sensitive_account_component_t=sensitive_account_component_`<gds-blur>${0}</gds-blur>`),sensitive_account_component_superPropGet(GdsSensitiveAccount,"render",_this2,3)([]))}),(function(){return sensitive_account_component_superPropGet(GdsSensitiveAccount,"render",_this2,3)([])}))}}])}(formatted_account_component_GdsFormattedAccount);(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],sensitive_account_component_GdsSensitiveAccount.prototype,"hide",2),sensitive_account_component_GdsSensitiveAccount=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-sensitive-account",{dependsOn:[blur_component_GdsBlur]})],sensitive_account_component_GdsSensitiveAccount);var GdsSensitiveAccount=function GdsSensitiveAccount(props){sensitive_account_component_GdsSensitiveAccount.define();var JSXElement=(0,react.p)("gds-sensitive-account"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSensitiveAccount.__docgenInfo={description:"",methods:[],displayName:"GdsSensitiveAccount"};var sensitive_date_component_t,sensitive_date_component_=function _(t){return t};function sensitive_date_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(sensitive_date_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function sensitive_date_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var sensitive_date_component_GdsSensitiveDate=function(_GdsFormattedDate){function GdsSensitiveDate(){var _this;return(0,classCallCheck.A)(this,GdsSensitiveDate),(_this=function sensitive_date_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,sensitive_date_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsSensitiveDate,arguments)).hide=!1,_this}return(0,inherits.A)(GdsSensitiveDate,_GdsFormattedDate),(0,createClass.A)(GdsSensitiveDate,[{key:"render",value:function render(){var _this2=this;return(0,when.z)(this.hide,(function(){return(0,custom_element_scoping.qy)(sensitive_date_component_t||(sensitive_date_component_t=sensitive_date_component_`<gds-blur>${0}</gds-blur>`),sensitive_date_component_superPropGet(GdsSensitiveDate,"render",_this2,3)([]))}),(function(){return sensitive_date_component_superPropGet(GdsSensitiveDate,"render",_this2,3)([])}))}}])}(formatted_date_component_GdsFormattedDate);(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],sensitive_date_component_GdsSensitiveDate.prototype,"hide",2),sensitive_date_component_GdsSensitiveDate=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-sensitive-date",{dependsOn:[blur_component_GdsBlur]})],sensitive_date_component_GdsSensitiveDate);var GdsSensitiveDate=function GdsSensitiveDate(props){sensitive_date_component_GdsSensitiveDate.define();var JSXElement=(0,react.p)("gds-sensitive-date"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSensitiveDate.__docgenInfo={description:"",methods:[],displayName:"GdsSensitiveDate"},formatted_account_component_GdsFormattedAccount.define(),formatted_date_component_GdsFormattedDate.define(),formatted_number_component_GdsFormattedNumber.define();var sensitive_number_component_t,sensitive_number_component_=function _(t){return t};function sensitive_number_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(sensitive_number_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function sensitive_number_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var sensitive_number_component_GdsSensitiveNumber=function(_GdsFormattedNumber){function GdsSensitiveNumber(){var _this;return(0,classCallCheck.A)(this,GdsSensitiveNumber),(_this=function sensitive_number_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,sensitive_number_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsSensitiveNumber,arguments)).hide=!1,_this}return(0,inherits.A)(GdsSensitiveNumber,_GdsFormattedNumber),(0,createClass.A)(GdsSensitiveNumber,[{key:"formattedValue",get:function get(){return this.hide?numberFormats[this.format](0,this.locale,this.currency):sensitive_number_component_superPropGet(GdsSensitiveNumber,"formattedValue",this,1)}},{key:"render",value:function render(){var _this2=this;return(0,when.z)(this.hide,(function(){return(0,custom_element_scoping.qy)(sensitive_number_component_t||(sensitive_number_component_t=sensitive_number_component_`<gds-blur>${0}</gds-blur>`),sensitive_number_component_superPropGet(GdsSensitiveNumber,"render",_this2,3)([]))}),(function(){return sensitive_number_component_superPropGet(GdsSensitiveNumber,"render",_this2,3)([])}))}},{key:"updated",value:function updated(changedProperties){sensitive_number_component_superPropGet(GdsSensitiveNumber,"updated",this,3)([changedProperties]),this.element&&(this.element.ariaLabel=sensitive_number_component_superPropGet(GdsSensitiveNumber,"formattedValue",this,1))}}])}(formatted_number_component_GdsFormattedNumber);(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],sensitive_number_component_GdsSensitiveNumber.prototype,"hide",2),sensitive_number_component_GdsSensitiveNumber=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-sensitive-number",{dependsOn:[blur_component_GdsBlur]})],sensitive_number_component_GdsSensitiveNumber);var GdsSensitiveNumber=function GdsSensitiveNumber(props){sensitive_number_component_GdsSensitiveNumber.define();var JSXElement=(0,react.p)("gds-sensitive-number"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsSensitiveNumber.__docgenInfo={description:"",methods:[],displayName:"GdsSensitiveNumber"};var icon_ai=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-ai/index.js"),icon_airplane_up=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-airplane-up/index.js"),icon_archive=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-archive/index.js"),icon_arrow_bottom_top=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-bottom-top/index.js"),icon_arrow_box_left=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-box-left/index.js"),icon_arrow_box_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-box-right/index.js"),icon_arrow_down=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-down/index.js"),icon_arrow_inbox=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-inbox/index.js"),icon_arrow_left_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-left-right/index.js"),icon_arrow_left=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-left/index.js"),icon_arrow_out_of_box=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-out-of-box/index.js"),icon_arrow_right_circle=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-right-circle/index.js"),icon_arrow_right_down_circle=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-right-down-circle/index.js"),icon_arrow_right_up_circle=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-right-up-circle/index.js"),icon_arrow_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-right/index.js"),icon_arrow_rotate_clockwise=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-rotate-clockwise/index.js"),icon_arrow_rotate_counter_clockwise=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-rotate-counter-clockwise/index.js"),icon_arrow_rotate_left_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-rotate-left-right/index.js"),icon_arrow_rotate_right_left=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-rotate-right-left/index.js"),icon_arrow_share_left=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-share-left/index.js"),icon_arrow_share_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-share-right/index.js"),icon_arrow_split=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-split/index.js"),icon_arrow_up=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-up/index.js"),icon_arrow_wall_down=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-wall-down/index.js"),icon_arrow_wall_left=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-wall-left/index.js"),icon_arrow_wall_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-wall-right/index.js"),icon_arrow_wall_up=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow-wall-up/index.js"),icon_arrow=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrow/index.js"),icon_arrows_repeat=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-arrows-repeat/index.js"),icon_at=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-at/index.js"),icon_back=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-back/index.js"),icon_backward=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-backward/index.js"),icon_bag=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bag/index.js"),icon_bank=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bank/index.js"),icon_banknote_2=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-banknote-2/index.js"),icon_banknote=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-banknote/index.js"),icon_barcode=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-barcode/index.js"),icon_bars_three=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bars-three/index.js"),icon_bars_two=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bars-two/index.js"),icon_basket=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-basket/index.js"),icon_battery_loading=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-battery-loading/index.js"),icon_bell=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bell/index.js"),icon_block=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-block/index.js"),icon_book=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-book/index.js"),icon_bookmark_check=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bookmark-check/index.js"),icon_bookmark_delete=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bookmark-delete/index.js"),icon_bookmark_plus=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bookmark-plus/index.js"),icon_bookmark_remove=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bookmark-remove/index.js"),icon_bookmark=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bookmark/index.js"),icon_books=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-books/index.js"),icon_brand_app_store=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-app-store/index.js"),icon_brand_apple_music=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-apple-music/index.js"),icon_brand_bankid=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-bankid/index.js"),icon_brand_chrome=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-chrome/index.js"),icon_brand_facebook=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-facebook/index.js"),icon_brand_figma=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-figma/index.js"),icon_brand_firefox=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-firefox/index.js"),icon_brand_github=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-github/index.js"),icon_brand_green=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-green/index.js"),icon_brand_instagram=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-instagram/index.js"),icon_brand_linkedin=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-linkedin/index.js"),icon_brand_play_store=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-play-store/index.js"),icon_brand_rss_feed=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-rss-feed/index.js"),icon_brand_seb=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-seb/index.js"),icon_brand_spotify=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-spotify/index.js"),icon_brand_storybook=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-storybook/index.js"),icon_brand_x=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brand-x/index.js"),icon_brush=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-brush/index.js"),icon_bubble_annotation=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubble-annotation/index.js"),icon_bubble_dots=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubble-dots/index.js"),icon_bubble_question=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubble-question/index.js"),icon_bubble_quotes=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubble-quotes/index.js"),icon_bubble_text=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubble-text/index.js"),icon_bubble_wide_annotation=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubble-wide-annotation/index.js"),icon_bubble=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubble/index.js"),icon_bubbles=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bubbles/index.js"),icon_buildings=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-buildings/index.js"),icon_bullet_list=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-bullet-list/index.js"),icon_cain_link=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cain-link/index.js"),icon_calculator=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-calculator/index.js"),icon_calendar_check=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-calendar-check/index.js"),icon_calendar=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-calendar/index.js"),icon_calender_add=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-calender-add/index.js"),icon_call=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-call/index.js"),icon_car=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-car/index.js"),icon_carussel=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-carussel/index.js"),icon_chain_link_broken=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chain-link-broken/index.js"),icon_chain_link=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chain-link/index.js"),icon_charging_station=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-charging-station/index.js"),icon_chart_one=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chart-one/index.js"),icon_chart_presentation=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chart-presentation/index.js"),icon_chart_two=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chart-two/index.js"),icon_checklist=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-checklist/index.js"),icon_checkmark=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-checkmark/index.js"),icon_chevron_bottom=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-bottom/index.js"),icon_chevron_double_down=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-double-down/index.js"),icon_chevron_double_left=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-double-left/index.js"),icon_chevron_double_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-double-right/index.js"),icon_chevron_double_up=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-double-up/index.js"),icon_chevron_down_small=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-down-small/index.js"),icon_chevron_grabber_vertical=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-grabber-vertical/index.js"),icon_chevron_left=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-left/index.js"),icon_chevron_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-right/index.js"),icon_chevron_top_small=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-top-small/index.js"),icon_chevron_top=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-chevron-top/index.js"),icon_circle_ban=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-ban/index.js"),icon_circle_check=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-check/index.js"),icon_circle_dots=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-dots/index.js"),icon_circle_info=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-info/index.js"),icon_circle_minus=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-minus/index.js"),icon_circle_placeholder_on=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-placeholder-on/index.js"),icon_circle_plus=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-plus/index.js"),icon_circle_questionmark=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-questionmark/index.js"),icon_circle_x=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circle-x/index.js"),icon_circles_three=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-circles-three/index.js"),icon_clock=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-clock/index.js"),icon_cloud_download=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cloud-download/index.js"),icon_cloud_upload=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cloud-upload/index.js"),icon_cloudy_sun=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cloudy-sun/index.js"),icon_code_brackets=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-code-brackets/index.js"),icon_code=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-code/index.js"),icon_compass_round=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-compass-round/index.js"),icon_cookies=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cookies/index.js"),icon_copy=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-copy/index.js"),icon_credit_card=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-credit-card/index.js"),icon_cross_large=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cross-large/index.js"),icon_cross_small=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cross-small/index.js"),icon_cup_hot=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cup-hot/index.js"),icon_cursor=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-cursor/index.js"),icon_devices=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-devices/index.js"),icon_direction=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-direction/index.js"),icon_dollar=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-dollar/index.js"),icon_dot_grid_one_horizontal=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-dot-grid-one-horizontal/index.js"),icon_dot_grid_one_vertical=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-dot-grid-one-vertical/index.js"),icon_dot_grid_three=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-dot-grid-three/index.js"),icon_dot_grid_two=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-dot-grid-two/index.js"),icon_email=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-email/index.js"),icon_emoji_angry=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-emoji-angry/index.js"),icon_emoji_neutral=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-emoji-neutral/index.js"),icon_emoji_sad=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-emoji-sad/index.js"),icon_emoji_smile=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-emoji-smile/index.js"),icon_emoji_smiley=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-emoji-smiley/index.js"),icon_euro=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-euro/index.js"),icon_eye_open=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-eye-open/index.js"),icon_eye_slash=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-eye-slash/index.js"),icon_fashion=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-fashion/index.js"),icon_fast_forward=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-fast-forward/index.js"),icon_file_bend=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-file-bend/index.js"),icon_file_chart=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-file-chart/index.js"),icon_file_text=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-file-text/index.js"),icon_files=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-files/index.js"),icon_filter=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-filter/index.js"),icon_flag=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-flag/index.js"),icon_floppy_disk=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-floppy-disk/index.js"),icon_focus_square=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-focus-square/index.js"),icon_focus=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-focus/index.js"),icon_folder_add_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-folder-add-right/index.js"),icon_folder_paper=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-folder-paper/index.js"),icon_folder_upload=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-folder-upload/index.js"),icon_folder=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-folder/index.js"),icon_fullscreen=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-fullscreen/index.js"),icon_gift=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-gift/index.js"),icon_globus=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-globus/index.js"),icon_graduate_cap=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-graduate-cap/index.js"),icon_green_power=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-green-power/index.js"),icon_group=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-group/index.js"),icon_growth=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-growth/index.js"),icon_headphones=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-headphones/index.js"),icon_heart_beat=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-heart-beat/index.js"),icon_heart=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-heart/index.js"),icon_history=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-history/index.js"),icon_home_energy_one=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-home-energy-one/index.js"),icon_home_energy_two=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-home-energy-two/index.js"),icon_home_open=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-home-open/index.js"),icon_home_roof=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-home-roof/index.js"),icon_horizontal_alignment_bottom=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-horizontal-alignment-bottom/index.js"),icon_hourglass=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-hourglass/index.js"),icon_images=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-images/index.js"),icon_inbox_empty=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-inbox-empty/index.js"),icon_industry=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-industry/index.js"),icon_invite=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-invite/index.js"),icon_jpg=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-jpg/index.js"),icon_key=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-key/index.js"),icon_knife_spoon=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-knife-spoon/index.js"),icon_lab=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-lab/index.js"),icon_law=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-law/index.js"),icon_leisure=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-leisure/index.js"),icon_light_bulb_simple=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-light-bulb-simple/index.js"),icon_light_bulb=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-light-bulb/index.js"),icon_lightning=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-lightning/index.js"),icon_line_chart_four=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-line-chart-four/index.js"),icon_line_chart_one=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-line-chart-one/index.js"),icon_line_chart_three=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-line-chart-three/index.js"),icon_line_chart_two=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-line-chart-two/index.js"),icon_lock=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-lock/index.js"),icon_macbook_air=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-macbook-air/index.js"),icon_magnifying_glass=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-magnifying-glass/index.js"),icon_maintenance=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-maintenance/index.js"),icon_map_pin=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-map-pin/index.js"),icon_megaphone=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-megaphone/index.js"),icon_menu_sidebar=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-menu-sidebar/index.js"),icon_mic_off=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-mic-off/index.js"),icon_mic_on=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-mic-on/index.js"),icon_minus_large=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-minus-large/index.js"),icon_minus_small=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-minus-small/index.js"),icon_money_hand=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-money-hand/index.js"),icon_moneybag=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-moneybag/index.js"),icon_moon=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-moon/index.js"),icon_mute=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-mute/index.js"),icon_office=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-office/index.js"),icon_other=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-other/index.js"),icon_page_add=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-page-add/index.js"),icon_page_text=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-page-text/index.js"),icon_paper_plane_top_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-paper-plane-top-right/index.js"),icon_paperclip=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-paperclip/index.js"),icon_pause=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pause/index.js"),icon_pdf=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pdf/index.js"),icon_pencel_line=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pencel-line/index.js"),icon_pencil_sign=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pencil-sign/index.js"),icon_pencil_sparkle=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pencil-sparkle/index.js"),icon_pencil_wave=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pencil-wave/index.js"),icon_pension=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pension/index.js"),icon_people_a11y=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people-a11y/index.js"),icon_people_add=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people-add/index.js"),icon_people_added=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people-added/index.js"),icon_people_circle=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people-circle/index.js"),icon_people_copy=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people-copy/index.js"),icon_people_profile=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people-profile/index.js"),icon_people_remove=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people-remove/index.js"),icon_people=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-people/index.js"),icon_percent=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-percent/index.js"),icon_phone_dynamic_island=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-phone-dynamic-island/index.js"),icon_phone=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-phone/index.js"),icon_pie_chart=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pie-chart/index.js"),icon_piggy_bank=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-piggy-bank/index.js"),icon_pin=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pin/index.js"),icon_pinch=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pinch/index.js"),icon_play_circle=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-play-circle/index.js"),icon_play=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-play/index.js"),icon_plus_large=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-plus-large/index.js"),icon_plus_small=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-plus-small/index.js"),icon_png=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-png/index.js"),icon_poop=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-poop/index.js"),icon_postcard=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-postcard/index.js"),icon_pound=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-pound/index.js"),icon_power_plant=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-power-plant/index.js"),icon_printer=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-printer/index.js"),icon_push=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-push/index.js"),icon_qr_code=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-qr-code/index.js"),icon_rainy=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-rainy/index.js"),icon_raising_hand=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-raising-hand/index.js"),icon_reading_list=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-reading-list/index.js"),icon_receipt_bill=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-receipt-bill/index.js"),icon_receiption_bell=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-receiption-bell/index.js"),icon_record=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-record/index.js"),icon_refund=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-refund/index.js"),icon_robot=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-robot/index.js"),icon_rocket=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-rocket/index.js"),icon_run_shortcut=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-run-shortcut/index.js"),icon_safari=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-safari/index.js"),icon_school=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-school/index.js"),icon_scissors=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-scissors/index.js"),icon_search_menu=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-search-menu/index.js"),icon_seb=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-seb/index.js"),icon_settings_gear=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-settings-gear/index.js"),icon_settings_slider_hor=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-settings-slider-hor/index.js"),icon_settings_slider_three=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-settings-slider-three/index.js"),icon_settings_slider_ver=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-settings-slider-ver/index.js"),icon_shapes=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-shapes/index.js"),icon_share=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-share/index.js"),icon_shield_checked=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-shield-checked/index.js"),icon_shield_crossed=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-shield-crossed/index.js"),icon_shield=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-shield/index.js"),icon_shopping_bag=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-shopping-bag/index.js"),icon_signature=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-signature/index.js"),icon_smartwatch=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-smartwatch/index.js"),icon_solar_panel=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-solar-panel/index.js"),icon_solar=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-solar/index.js"),icon_sort=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-sort/index.js"),icon_square_arrow_top_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-arrow-top-right/index.js"),icon_square_behind_square=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-behind-square/index.js"),icon_square_check=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-check/index.js"),icon_square_grid_circle=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-grid-circle/index.js"),icon_square_info=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-info/index.js"),icon_square_minus=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-minus/index.js"),icon_square_placeholder=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-placeholder/index.js"),icon_square_plus=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-plus/index.js"),icon_square_x=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-square-x/index.js"),icon_star=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-star/index.js"),icon_store=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-store/index.js"),icon_suitcase_work=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-suitcase-work/index.js"),icon_sun=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-sun/index.js"),icon_sunset_arrow_down=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-sunset-arrow-down/index.js"),icon_tag=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-tag/index.js"),icon_target_arrow=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-target-arrow/index.js"),icon_television=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-television/index.js"),icon_tennis=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-tennis/index.js"),icon_text_edit=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-text-edit/index.js"),icon_thermostat=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-thermostat/index.js"),icon_thumbs_down=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-thumbs-down/index.js"),icon_thumbs_up=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-thumbs-up/index.js"),icon_ticket=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-ticket/index.js"),icon_todos=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-todos/index.js"),icon_trading_view_candles=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-trading-view-candles/index.js"),icon_trash_can=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-trash-can/index.js"),icon_tree=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-tree/index.js"),icon_trending_four=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-trending-four/index.js"),icon_trending_one=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-trending-one/index.js"),icon_trending_three=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-trending-three/index.js"),icon_trending_two=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-trending-two/index.js"),icon_triangle_exclamation=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-triangle-exclamation/index.js"),icon_truck=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-truck/index.js"),icon_umbrella_security=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-umbrella-security/index.js"),icon_unlocked=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-unlocked/index.js"),icon_vertical_alignment_right=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-vertical-alignment-right/index.js"),icon_volume_full=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-volume-full/index.js"),icon_volume_half=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-volume-half/index.js"),icon_volume_off=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-volume-off/index.js"),icon_wallet=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-wallet/index.js"),icon_warning_sign=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-warning-sign/index.js"),icon_wifi_full=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-wifi-full/index.js"),icon_youtube=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-youtube/index.js"),icon_zap=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-zap/index.js"),icon_zoom_in=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-zoom-in/index.js"),icon_zoom_out=__webpack_require__("./dist/libs/core/src/generated/react/icons/icon-zoom-out/index.js")},"./dist/libs/core/src/generated/react/theme/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{G:()=>GdsTheme});var _t,_t2,chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),react=__webpack_require__("./dist/libs/core/src/utils/react.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),variables_dark_css=__webpack_require__("./dist/libs/core/src/tokens/variables.dark.css.js"),variables_light_css=__webpack_require__("./dist/libs/core/src/tokens/variables.light.css.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var theme_component_GdsTheme=function(_GdsElement){function GdsTheme(){var _this;return(0,classCallCheck.A)(this,GdsTheme),(_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsTheme,arguments)).colorScheme="light",_this.designVersion="2023",_this}return(0,inherits.A)(GdsTheme,_GdsElement),(0,createClass.A)(GdsTheme,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsTheme,"connectedCallback",this,3)([]),transitional_styles.n.instance.apply(this,"gds-theme"),this._dynamicStylesController.inject("dark",(0,lit.iz)(":host {".concat(variables_dark_css.A,"}")))}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(_t||(_t=_`<slot></slot>`))}},{key:"_onColorSchemeChange",value:function _onColorSchemeChange(){switch(this.colorScheme){case"dark":this._dynamicStylesController.inject("color-scheme",(0,lit.iz)(":host { ".concat(variables_dark_css.A,"}")));break;case"light":default:this._dynamicStylesController.inject("color-scheme",(0,lit.iz)(":host { ".concat(variables_light_css.A,"}")));break;case"auto":this._dynamicStylesController.inject("color-scheme",(0,lit.iz)(":host { ".concat(variables_light_css.A,"} @media (prefers-color-scheme: dark) { :host { ").concat(variables_dark_css.A," } }")))}this.dispatchCustomEvent("gds-color-scheme-changed",{detail:{colorScheme:this.colorScheme}})}},{key:"_onDesignVersionChange",value:function _onDesignVersionChange(){this.dispatchCustomEvent("gds-design-version-changed",{detail:{designVersion:this.designVersion}})}}])}(gds_element.j);theme_component_GdsTheme.styles=[tokens_style.LU,(0,lit.AH)(_t2||(_t2=_`
      :host {
        display: contents;
        color: var(--gds-sys-color-content-neutral-01);
        font-family: var(--gds-sys-text-family);
      }
    `))],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0,attribute:"color-scheme"})],theme_component_GdsTheme.prototype,"colorScheme",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0,attribute:"design-version"})],theme_component_GdsTheme.prototype,"designVersion",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("colorScheme")],theme_component_GdsTheme.prototype,"_onColorSchemeChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("designVersion")],theme_component_GdsTheme.prototype,"_onDesignVersionChange",1),theme_component_GdsTheme=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-theme")],theme_component_GdsTheme);var node_modules_react=__webpack_require__("./node_modules/react/index.js"),GdsTheme=function GdsTheme(props){theme_component_GdsTheme.define();var JSXElement=(0,react.p)("gds-theme"),propsWithClass=Object.assign({},props,{class:props.className});return(0,node_modules_react.createElement)(JSXElement,propsWithClass)};GdsTheme.__docgenInfo={description:"",methods:[],displayName:"GdsTheme"}},"./dist/libs/core/src/primitives/menu/menu-item.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{T:()=>GdsMenuItem});var _t,_handleOnClick,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_gds_element_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/libs/core/src/gds-element.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),_utils_mixins_focusable_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/libs/core/src/utils/mixins/focusable.js"),_listbox_option_styles_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/primitives/listbox/option.styles.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsMenuItem=function(_Focusable){function GdsMenuItem(){var _this;return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,GdsMenuItem),_this=function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,GdsMenuItem,arguments),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.VK)(_this,_handleOnClick,(function(){_this.dispatchCustomEvent("gds-menu-item-click",{bubbles:!0,composed:!0})})),_this}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(GdsMenuItem,_Focusable),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(GdsMenuItem,[{key:"connectedCallback",value:function connectedCallback(){var _this2=this;!function _superPropGet(t,o,e,r){var p=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsMenuItem,"connectedCallback",this,3)([]),this.setAttribute("role","menuitem"),this.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),_this2.click())})),this.addEventListener("click",(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.S7)(this,_handleOnClick)),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_7__.n.instance.apply(this,"gds-option")}},{key:"render",value:function render(){return(0,_scoping_js__WEBPACK_IMPORTED_MODULE_8__.qy)(_t||(_t=_`<div class="item"><slot></slot></div>`))}}])}((0,_utils_mixins_focusable_js__WEBPACK_IMPORTED_MODULE_9__.z)(_gds_element_js__WEBPACK_IMPORTED_MODULE_10__.j));_handleOnClick=new WeakMap,GdsMenuItem.styles=[_listbox_option_styles_js__WEBPACK_IMPORTED_MODULE_11__.A],GdsMenuItem=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_8__.Y$)("gds-menu-item")],GdsMenuItem)},"./node_modules/@storybook/core/dist/components sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/components sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/core/dist/theming sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/@storybook/core/dist/theming sync recursive",module.exports=webpackEmptyContext},"./node_modules/memoizerific sync recursive":module=>{function webpackEmptyContext(req){var e=new Error("Cannot find module '"+req+"'");throw e.code="MODULE_NOT_FOUND",e}webpackEmptyContext.keys=()=>[],webpackEmptyContext.resolve=webpackEmptyContext,webpackEmptyContext.id="./node_modules/memoizerific sync recursive",module.exports=webpackEmptyContext},"./node_modules/@storybook/addon-docs/node_modules/@mdx-js/react/lib/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{"use strict";__webpack_require__.d(__webpack_exports__,{R:()=>useMDXComponents,x:()=>MDXProvider});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js");const emptyComponents={},MDXContext=react__WEBPACK_IMPORTED_MODULE_0__.createContext(emptyComponents);function useMDXComponents(components){const contextComponents=react__WEBPACK_IMPORTED_MODULE_0__.useContext(MDXContext);return react__WEBPACK_IMPORTED_MODULE_0__.useMemo((function(){return"function"==typeof components?components(contextComponents):{...contextComponents,...components}}),[contextComponents,components])}function MDXProvider(properties){let allComponents;return allComponents=properties.disableParentContext?"function"==typeof properties.components?properties.components(emptyComponents):properties.components||emptyComponents:useMDXComponents(properties.components),react__WEBPACK_IMPORTED_MODULE_0__.createElement(MDXContext.Provider,{value:allComponents},properties.children)}}}]);
//# sourceMappingURL=3383.7e5b3c87.iframe.bundle.js.map
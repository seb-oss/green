/*! For license information please see src-lib-datepicker-datepicker-stories.2bf14b44.iframe.bundle.js.LICENSE.txt */
"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7755],{"./libs/react/src/lib/datepicker/datepicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>__WEBPACK_DEFAULT_EXPORT__});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_lit_react__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@lit/react/index.js"),_sebgroup_green_core_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/components/datepicker/datepicker.component.js"),_sebgroup_green_core_scoping__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_sebgroup_green_core_transitional_styles__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","onChange","minDate","maxDate","value","showWeeks","testId","validator","size","selectedDate","currentDate"];_sebgroup_green_core_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__.L.define(),(0,_sebgroup_green_core_transitional_styles__WEBPACK_IMPORTED_MODULE_4__.Y)();var CoreDatepicker=(0,_lit_react__WEBPACK_IMPORTED_MODULE_1__.a)({tagName:(0,_sebgroup_green_core_scoping__WEBPACK_IMPORTED_MODULE_5__.Eq)("gds-datepicker"),elementClass:_sebgroup_green_core_components_datepicker_datepicker_component__WEBPACK_IMPORTED_MODULE_3__.L,events:{onchange:"change"},react:react__WEBPACK_IMPORTED_MODULE_0__}),Datepicker=(0,react__WEBPACK_IMPORTED_MODULE_0__.forwardRef)((function(_ref2,ref){var _ref2$label=_ref2.label,label=void 0===_ref2$label?"Date":_ref2$label,onChange=_ref2.onChange,minDate=_ref2.minDate,maxDate=_ref2.maxDate,value=_ref2.value,showWeeks=_ref2.showWeeks,testId=_ref2.testId,validator=_ref2.validator,size=_ref2.size,selectedDate=_ref2.selectedDate,currentDate=_ref2.currentDate,props=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_objectWithoutProperties_js__WEBPACK_IMPORTED_MODULE_6__.A)(_ref2,_excluded);currentDate&&!value&&(value=currentDate),selectedDate&&!value&&(value=selectedDate);var min=minDate||new Date((new Date).getFullYear()-10,0,1),max=maxDate||new Date((new Date).getFullYear()+10,0,1),_ref=(0,react__WEBPACK_IMPORTED_MODULE_0__.useRef)(null);return(0,react__WEBPACK_IMPORTED_MODULE_0__.useImperativeHandle)(ref,(function(){return _ref.current}),[_ref]),(0,react__WEBPACK_IMPORTED_MODULE_0__.useEffect)((function(){null!=_ref&&_ref.current&&(_ref.current.validator=validator)}),[validator]),(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{className:"form-group",children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(CoreDatepicker,Object.assign({"data-testid":testId,label,min,max,showWeekNumbers:showWeeks,onchange:function onChangeHandler(e){onChange&&onChange(e.target.value)},value,ref:_ref,size:"small"===size?"small":"large"},props))})}));const __WEBPACK_DEFAULT_EXPORT__=Datepicker;Datepicker.__docgenInfo={description:"@deprecated Please use the `gds-datepicker` web component from green-core instead",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:"The Date value of the datepicker. This can be set to undefined to clear the datepicker.\nThis can be a string if set via the value attribute in markup, or via the setAttribute DOM API."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}}},"./dist/libs/core/src/components/alert/alert.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>GdsAlert});var _t,alert_component_t,_t2,_t3,_t4,_t5,_t6,_t7,_timeoutId,_progressIntervalId,_alertRef,_observer,_isVisible,_remaining,_lastTick,_timerController,_GdsAlert_instances,setupObserver_fn,disconnectObserver_fn,startTicking_fn,resumeTimer_fn,pauseTimer_fn,clearTimers_fn,dismiss_fn,handleButtonClick_fn,handleKeyDown_fn,config_get,renderIcon_fn,renderMessage_fn,renderActionButton_fn,renderCloseButton_fn,renderProgressBar_fn,defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),static_html=__webpack_require__("./node_modules/lit/static-html.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),card_component=__webpack_require__("./dist/libs/core/src/components/card/card.component.js"),circle_check_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/circle-check.component.js"),circle_info_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/circle-info.component.js"),cross_small_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/cross-small.component.js"),triangle_exclamation_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/triangle-exclamation.component.js"),alert_styles_default=(0,lit.AH)(_t||(_t=(function _(t){return t})`
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
    gap: var(--gds-sys-space-s);

    .message {
      max-width: 80ch;
    }
  }

  .dismissible .wrapper {
    margin-top: var(--gds-sys-space-2xs);
  }

  .has-action {
    padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
  }

  .has-action .wrapper {
    margin-top: var(--gds-sys-space-xs);
  }

  .has-action.dismissible .close {
    margin-top: var(--gds-sys-space-2xs);
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
        `),(0,class_map.H)((0,defineProperty.A)({"progress-container":!0},this.variant,!0)),(0,lit_localize.ab)("Auto-dismiss timer"),this._progress,this._progress):lit.s6},GdsAlert.styles=[tokens_style.LU,alert_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,reflect:!0})],GdsAlert.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],GdsAlert.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,reflect:!0})],GdsAlert.prototype,"role",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsAlert.prototype,"dismissible",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsAlert.prototype,"timeout",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String,attribute:"button-label"})],GdsAlert.prototype,"buttonLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsAlert.prototype,"_progress",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsAlert.prototype,"_isClosing",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsAlert.prototype,"_cardHidden",2),GdsAlert=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-alert",{dependsOn:[button_component.t,card_component.z,circle_check_component.i,triangle_exclamation_component.f,circle_info_component.w,cross_small_component.r]}),(0,lit_localize.cc)()],GdsAlert)},"./dist/libs/core/src/components/icon/icons/circle-check.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>IconCircleCheck});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconCircleCheck=function(_GdsIcon){function IconCircleCheck(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconCircleCheck),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconCircleCheck,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconCircleCheck,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconCircleCheck)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconCircleCheck._regularSVG='<path d="M15 9.5L10.5 15L8.5 13M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCircleCheck._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM15.5805 9.97493C15.8428 9.65434 15.7955 9.18183 15.4749 8.91953C15.1543 8.65724 14.6818 8.70449 14.4195 9.02507L10.4443 13.8837L9.03033 12.4697C8.73744 12.1768 8.26256 12.1768 7.96967 12.4697C7.67678 12.7626 7.67678 13.2374 7.96967 13.5303L9.96967 15.5303C10.1195 15.6802 10.3257 15.7596 10.5374 15.7491C10.749 15.7385 10.9463 15.6389 11.0805 15.4749L15.5805 9.97493Z" fill="currentColor"/>',IconCircleCheck._name="circle-check",IconCircleCheck._width=24,IconCircleCheck._height=24,IconCircleCheck._viewBox="0 0 24 24",IconCircleCheck=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-circle-check")],IconCircleCheck)},"./libs/react/src/lib/datepicker/datepicker.stories.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,Validation:()=>Validation,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var react__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/react/index.js"),_dist_libs_core_src_components_alert_alert_component_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/components/alert/alert.component.js"),_datepicker__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./libs/react/src/lib/datepicker/datepicker.tsx"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");try{window.customElements.define("gds-alert",_dist_libs_core_src_components_alert_alert_component_js__WEBPACK_IMPORTED_MODULE_3__.F)}catch(e){}const __WEBPACK_DEFAULT_EXPORT__={title:"Components/Datepicker",component:_datepicker__WEBPACK_IMPORTED_MODULE_1__.Ay,argTypes:{},parameters:{componentIds:["component-datepicker"],docs:{description:{component:'<gds-alert variant="notice">**Note:** This version of Datepicker is deprecated. Please use the `gds-datepicker` web component from green-core instead.</gds-alert>\n\nDate pickers are used when users need to enter a date. The user can enter the date as text, but the date picker also allows the user to select the date in a visual representation of a calendar.'}}},tags:["autodocs"]};var Default={args:{label:"Choose date"}},Validation={args:{label:"Choose date",validator:{validate:function validate(el){if("correctValue"!==el.value)return[{badInput:!0,customError:!0,patternMismatch:!0,rangeOverflow:!0,rangeUnderflow:!0,stepMismatch:!0,tooLong:!0,tooShort:!0,typeMismatch:!0,valid:!1,valueMissing:!0},"My custom validation message"]},disabled:!0},value:new Date,testId:"test",ref:react__WEBPACK_IMPORTED_MODULE_0__.createRef()},render:function render(args){return(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(_datepicker__WEBPACK_IMPORTED_MODULE_1__.Ay,Object.assign({},args))}};const __namedExportsOrder=["Default","Validation"];Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Choose date'\n  }\n}",...Default.parameters?.docs?.source}}},Validation.parameters={...Validation.parameters,docs:{...Validation.parameters?.docs,source:{originalSource:"{\n  args: {\n    label: 'Choose date',\n    validator: {\n      validate: (el: GdsDatePicker) => {\n        /** Put your custom validation logic */\n        if (el.value !== 'correctValue') {\n          /** And return a validator array */\n          return [{\n            badInput: true,\n            customError: true,\n            patternMismatch: true,\n            rangeOverflow: true,\n            rangeUnderflow: true,\n            stepMismatch: true,\n            tooLong: true,\n            tooShort: true,\n            typeMismatch: true,\n            valid: false,\n            valueMissing: true\n          }, 'My custom validation message'];\n        }\n      },\n      disabled: true\n    },\n    value: new Date(),\n    testId: 'test',\n    ref: React.createRef()\n  },\n  render: args => <Datepicker {...args} />\n}",...Validation.parameters?.docs?.source},description:{story:"To handle validation of the `Datepicker`, you can pass a `validator` object to the `Datepicker` component. The `validator` object should have a `validate` function that takes the `Datepicker` element as an argument and returns an array of the validity state and an optional validation message.\n\n```tsx\n<Datepicker validator={{ validator: (el: GdsDatepicker) => {\n    // Put your custom validation logic\n     if (el.value !== 'correctValue') {\n       // And return a validator array\n       return [\n           {\n             badInput: true,\n             customError: true,\n             patternMismatch: true,\n             rangeOverflow: true,\n             rangeUnderflow: true,\n             stepMismatch: true,\n             tooLong: true,\n             tooShort: true,\n             typeMismatch: true,\n             valid: false,\n             valueMissing: true,\n           },\n           'My custom validation message',\n     ] : [ValidityState, string]\n}}} />\n\n\n```\n\nFor more information on validation in Green Core, see the [Form Validation](https://storybook.seb.io/latest/core/?path=/docs/docs-form-validation-documentation--docs) example.",...Validation.parameters?.docs?.description}}}},"./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{function _objectWithoutProperties(e,t){if(null==e)return{};var o,r,i=function _objectWithoutPropertiesLoose(r,e){if(null==r)return{};var t={};for(var n in r)if({}.hasOwnProperty.call(r,n)){if(e.includes(n))continue;t[n]=r[n]}return t}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)o=s[r],t.includes(o)||{}.propertyIsEnumerable.call(e,o)&&(i[o]=e[o])}return i}__webpack_require__.d(__webpack_exports__,{A:()=>_objectWithoutProperties})},"./node_modules/@lit/react/index.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{a:()=>o});const e=new Set(["children","localName","ref","style","className"]),n=new WeakMap,t=(e,t,o,l,a)=>{const s=a?.[t];void 0===s?(e[t]=o,null==o&&t in HTMLElement.prototype&&e.removeAttribute(t)):o!==l&&((e,t,o)=>{let l=n.get(e);void 0===l&&n.set(e,l=new Map);let a=l.get(t);void 0!==o?void 0===a?(l.set(t,a={handleEvent:o}),e.addEventListener(t,a)):a.handleEvent=o:void 0!==a&&(l.delete(t),e.removeEventListener(t,a))})(e,s,o)},o=({react:n,tagName:o,elementClass:l,events:a,displayName:s})=>{const c=new Set(Object.keys(a??{})),r=n.forwardRef(((s,r)=>{const i=n.useRef(new Map),d=n.useRef(null),f={},u={};for(const[n,t]of Object.entries(s))e.has(n)?f["className"===n?"class":n]=t:c.has(n)||n in l.prototype?u[n]=t:f[n]=t;return n.useLayoutEffect((()=>{if(null===d.current)return;const e=new Map;for(const n in u)t(d.current,n,s[n],i.current.get(n),a),i.current.delete(n),e.set(n,s[n]);for(const[e,n]of i.current)t(d.current,e,void 0,n,a);i.current=e})),n.useLayoutEffect((()=>{d.current?.removeAttribute("defer-hydration")}),[]),f.suppressHydrationWarning=!0,n.createElement(o,{...f,ref:n.useCallback((e=>{d.current=e,"function"==typeof r?r(e):null!==r&&(r.current=e)}),[r])})}));return r.displayName=s??l.name,r}}}]);
//# sourceMappingURL=src-lib-datepicker-datepicker-stories.2bf14b44.iframe.bundle.js.map
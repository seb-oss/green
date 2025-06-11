"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[606],{"./libs/react/src/lib/datepicker/datepicker.tsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Ay:()=>datepicker});var _t,functions_t,objectWithoutProperties=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/objectWithoutProperties.js"),react=__webpack_require__("./node_modules/react/index.js"),_lit_react=__webpack_require__("./node_modules/@lit/react/index.js"),defineProperty=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/defineProperty.js"),asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),set=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/set.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_QTSIPXV3=__webpack_require__("./dist/libs/core/src/chunks/chunk.QTSIPXV3.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),join=__webpack_require__("./node_modules/lit-html/directives/join.js"),map=__webpack_require__("./node_modules/lit-html/directives/map.js"),repeat=__webpack_require__("./node_modules/lit/directives/repeat.js"),until=__webpack_require__("./node_modules/lit/directives/until.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),isSameDay=__webpack_require__("./node_modules/date-fns/isSameDay.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),dropdown_component=__webpack_require__("./dist/libs/core/src/components/dropdown/dropdown.component.js"),flex_component=__webpack_require__("./dist/libs/core/src/components/flex/flex.component.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),form_control_host_style=__webpack_require__("./dist/libs/core/src/shared-styles/form-control-host.style.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),attribute_converters=__webpack_require__("./dist/libs/core/src/utils/helpers/attribute-converters.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lastDayOfMonth=__webpack_require__("./node_modules/date-fns/lastDayOfMonth.js"),getWeek=__webpack_require__("./node_modules/date-fns/getWeek.js"),isSameMonth=__webpack_require__("./node_modules/date-fns/isSameMonth.js"),setHours=__webpack_require__("./node_modules/date-fns/setHours.js"),addDays=__webpack_require__("./node_modules/date-fns/addDays.js"),subMonths=__webpack_require__("./node_modules/date-fns/subMonths.js"),addMonths=__webpack_require__("./node_modules/date-fns/addMonths.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),calendar_styles_default=(0,lit.AH)(_t||(_t=(function _(t){return t})`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-sys-space-4xs) 0 0
        var(--gds-sys-color-l2-border-primary);
      th {
        height: var(--gds-sys-space-2xl);
        width: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-sys-space-3xl);
        width: var(--gds-sys-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-space-2xs);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-l2-background-tertiary);
          cursor: pointer;
          color: var(--gds-sys-color-l2-content-tertiary);
        }

        &.today {
          border-color: var(--gds-sys-color-l2-background-tertiary);
        }

        &.disabled {
          color: var(--gds-sys-color-l3-content-disabled);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-l2-content-primary);
          outline-width: var(--gds-sys-space-3xs);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-2xs);
        height: var(--gds-sys-space-2xs);
        border-radius: var(--gds-sys-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-sys-space-2xs) var(--gds-sys-space-2xs) auto auto;
      }
    }
  }
`)),startOfMonth=__webpack_require__("./node_modules/date-fns/startOfMonth.js"),endOfMonth=__webpack_require__("./node_modules/date-fns/endOfMonth.js"),eachWeekOfInterval=__webpack_require__("./node_modules/date-fns/eachWeekOfInterval.js"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/eachDayOfInterval.js"),functions_=function _(t){return t};var calendar_component_t,_t2,_t3,_t4,_t5,_t6,_t7,_t8,_t9,_setSelectedDate,setSelectedDate_fn,_handleKeyDown,handleKeyDown_fn,calendar_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var GdsCalendar=function(_GdsElement){function GdsCalendar(){var _this;return(0,classCallCheck.A)(this,GdsCalendar),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsCalendar,arguments),(0,chunk_QTSIPXV3.VK)(_this,_setSelectedDate),(0,chunk_QTSIPXV3.VK)(_this,_handleKeyDown),_this.min=new Date((new Date).getFullYear()-10,0,1),_this.max=new Date((new Date).getFullYear()+10,0,1),_this.focusedDate=new Date,_this.disabledWeekends=!1,_this.showWeekNumbers=!1,_this.hideExtraneousDays=!1,_this.hideDayNames=!1,_this.dateLabelTemplate=function(date){return date.toLocaleDateString(_this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"})},_this._currentLocale=navigator.language,_this}return(0,inherits.A)(GdsCalendar,_GdsElement),(0,createClass.A)(GdsCalendar,[{key:"focusedMonth",get:function get(){return this.focusedDate.getMonth()},set:function set(month){var lastOfSelectedMonth=(0,lastDayOfMonth.W)(new Date(this.focusedYear,month,1)),newFocusedDate=new Date(this.focusedDate);newFocusedDate.setDate(Math.min(this.focusedDate.getDate(),lastOfSelectedMonth.getDate())),newFocusedDate.setMonth(month),newFocusedDate.setHours(12,0,0,0),this.focusedDate=newFocusedDate}},{key:"focusedYear",get:function get(){return this.focusedDate.getFullYear()},set:function set(year){this.focusedDate=new Date(this.focusedDate.setFullYear(year))}},{key:"getDateCell",value:function getDateCell(dayNumber){var _this$shadowRoot;return null==(_this$shadowRoot=this.shadowRoot)?void 0:_this$shadowRoot.querySelector("#dateCell-".concat(dayNumber))}},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;_superPropGet(GdsCalendar,"connectedCallback",this,3)([]),transitional_styles.n.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",(0,chunk_QTSIPXV3.jq)(this,_handleKeyDown,handleKeyDown_fn)),window.addEventListener("lit-localize-status",(function(e){"ready"===e.detail.status&&(_this2._currentLocale=e.detail.readyLocale)}))}},{key:"focus",value:function focus(){var _this$_elFocusedCell;_superPropGet(GdsCalendar,"focus",this,3)([]),null==(_this$_elFocusedCell=this._elFocusedCell)||_this$_elFocusedCell.focus()}},{key:"render",value:function render(){var _this3=this,currentDate=new Date;return(0,lit.qy)(calendar_component_t||(calendar_component_t=calendar_component_`<table role="grid" aria-label="${0}">
      ${0}
      <tbody role="rowgroup">
        ${0}
      </tbody>
    </table>`),(0,if_defined.J)(this.label),(0,when.z)(!this.hideDayNames,(function(){return(0,lit.qy)(_t2||(_t2=calendar_component_`<thead role="rowgroup">
            <tr role="row">
              ${0}
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
              <th>${0}</th>
            </tr>
          </thead>`),(0,when.z)(_this3.showWeekNumbers,(function(){return(0,lit.qy)(_t3||(_t3=calendar_component_`<th></th>`))})),(0,lit_localize.ab)("Mon"),(0,lit_localize.ab)("Tue"),(0,lit_localize.ab)("Wed"),(0,lit_localize.ab)("Thu"),(0,lit_localize.ab)("Fri"),(0,lit_localize.ab)("Sat"),(0,lit_localize.ab)("Sun"))})),function renderMonthGridView(date,template){for(var monthStart=(0,startOfMonth.w)(date),monthEnd=(0,endOfMonth.p)(date),weeks=(0,eachWeekOfInterval.Y)({start:monthStart,end:monthEnd},{weekStartsOn:1});weeks.length<6;)weeks.push((0,addDays.f)(weeks[weeks.length-1],7));return(0,lit.qy)(functions_t||(functions_t=functions_`${0}`),template(weeks.map((function(weekStartDay){return{days:(0,eachDayOfInterval.k)({start:weekStartDay,end:(0,addDays.f)(weekStartDay,6)})}}))))}(this.focusedDate,(function(weeks){return(0,lit.qy)(_t4||(_t4=calendar_component_`
            ${0}
          `),weeks.map((function(week){return(0,lit.qy)(_t5||(_t5=calendar_component_`
                <tr role="row">
                  ${0}
                  ${0}
                </tr>
              `),(0,when.z)(_this3.showWeekNumbers,(function(){return(0,lit.qy)(_t6||(_t6=calendar_component_`<td class="week-number" scope="row">
                        ${0}
                      </td>`),(0,getWeek.N)(week.days[0]))})),week.days.map((function(day){var customization=_this3.customizedDates&&_this3.customizedDates.find((function(d){return(0,isSameDay.r)(d.date,day)})),displayOptions=Object.assign({color:"currentColor",disabled:Boolean(_this3.disabledDates&&_this3.disabledDates.some((function(d){return(0,isSameDay.r)(d,day)})))},customization),isOutsideCurrentMonth=!(0,isSameMonth.t)(_this3.focusedDate,day),isOutsideMinMax=(day<_this3.min||day>_this3.max)&&!(0,isSameDay.r)(day,_this3.min)&&!(0,isSameDay.r)(day,_this3.max),isWeekend=0===day.getDay()||6===day.getDay(),isDisabled=displayOptions.disabled||isOutsideCurrentMonth||isOutsideMinMax||_this3.disabledWeekends&&isWeekend;return _this3.hideExtraneousDays&&isOutsideCurrentMonth?(0,lit.qy)(_t7||(_t7=calendar_component_`<td inert></td>`)):(0,lit.qy)(_t8||(_t8=calendar_component_`
                          <td
                            role="${0}"
                            class="${0}"
                            ?disabled=${0}
                            tabindex="${0}"
                            aria-selected="${0}"
                            aria-label="${0}"
                            @click=${0}
                            id="dateCell-${0}"
                          >
                            <span
                              class="number"
                              style="--_color: ${0}"
                              >${0}</span
                            >

                            ${0}
                          </td>
                        `),(0,if_defined.J)(isDisabled?void 0:"gridcell"),(0,class_map.H)({"custom-date":Boolean(customization),disabled:Boolean(isDisabled),today:(0,isSameDay.r)(currentDate,day)}),isDisabled,(0,isSameDay.r)(_this3.focusedDate,day)?0:-1,_this3.value&&(0,isSameDay.r)(_this3.value,day)?"true":"false",_this3.dateLabelTemplate(day),(function(){return isDisabled?null:(0,chunk_QTSIPXV3.jq)(_this3,_setSelectedDate,setSelectedDate_fn).call(_this3,day)}),day.getDate(),displayOptions?null==displayOptions?void 0:displayOptions.color:"",day.getDate(),(0,when.z)(displayOptions.indicator,(function(){return(0,lit.qy)(_t9||(_t9=calendar_component_`<span
                                  class="indicator-${0}"
                                  style="--_color: ${0}"
                                ></span>`),null==displayOptions?void 0:displayOptions.indicator,null==displayOptions?void 0:displayOptions.color)})))})))})))})))}},{key:"_valueChanged",value:function _valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}}])}(gds_element.j);_setSelectedDate=new WeakSet,setSelectedDate_fn=function setSelectedDate_fn(date){var dateOnMidDay=(0,setHours.a)(date,12);this.value=dateOnMidDay,this.dispatchEvent(new CustomEvent("change",{detail:dateOnMidDay,bubbles:!1,composed:!1}))},_handleKeyDown=new WeakSet,handleKeyDown_fn=function handleKeyDown_fn(e){var _this4=this,handled=!1,newFocusedDate=new Date(this.focusedDate);if("ArrowLeft"===e.key)newFocusedDate=(0,addDays.f)(this.focusedDate,-1),handled=!0;else if("ArrowRight"===e.key)newFocusedDate=(0,addDays.f)(this.focusedDate,1),handled=!0;else if("ArrowUp"===e.key)newFocusedDate=(0,addDays.f)(this.focusedDate,-7),handled=!0;else if("ArrowDown"===e.key)newFocusedDate=(0,addDays.f)(this.focusedDate,7),handled=!0;else if("Enter"===e.key||" "===e.key){var _this$_elFocusedCell2;null!=(_this$_elFocusedCell2=this._elFocusedCell)&&_this$_elFocusedCell2.hasAttribute("disabled")||(0,chunk_QTSIPXV3.jq)(this,_setSelectedDate,setSelectedDate_fn).call(this,this.focusedDate),handled=!0}else"Home"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth,1),handled=!0):"End"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth+1,0),handled=!0):"PageUp"===e.key?(newFocusedDate=(0,subMonths.a)(this.focusedDate,1),handled=!0):"PageDown"===e.key&&(newFocusedDate=(0,addMonths.P)(this.focusedDate,1),handled=!0);newFocusedDate.getFullYear()>=this.min.getFullYear()&&newFocusedDate.getFullYear()<=this.max.getFullYear()&&(this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:newFocusedDate,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=newFocusedDate));handled&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((function(){var _this4$_elFocusedCell;null==(_this4$_elFocusedCell=_this4._elFocusedCell)||_this4$_elFocusedCell.focus()})))},GdsCalendar.styles=[tokens_style.LU,calendar_styles_default],GdsCalendar.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"value",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"min",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"max",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"focusedDate",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],GdsCalendar.prototype,"disabledWeekends",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Array,attribute:"disabled-dates"})],GdsCalendar.prototype,"disabledDates",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedMonth",1),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedYear",1),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"showWeekNumbers",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideExtraneousDays",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideDayNames",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"customizedDates",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"label",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"dateLabelTemplate",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],GdsCalendar.prototype,"_currentLocale",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.P)('td[tabindex="0"]')],GdsCalendar.prototype,"_elFocusedCell",2),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("value")],GdsCalendar.prototype,"_valueChanged",1),GdsCalendar=(0,chunk_QTSIPXV3.Cc)([(0,custom_element_scoping.Y$)("gds-calendar"),(0,lit_localize.cc)()],GdsCalendar);var date_part_spinner_t,_inputBuffer,_increment,_decrement,_handleClick,_handleFocus,_handleBlur,_handleWheel,date_part_spinner_handleKeyDown,_focusNextSpinner,focusNextSpinner_fn,_dispatchChangeEvent,dispatchChangeEvent_fn,_formatNumber,formatNumber_fn,_clamp,clamp_fn,_clearInputBuffer,clearInputBuffer_fn,form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js"),calendar_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/calendar.component.js"),calender_add_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/calender-add.component.js"),chevron_left_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chevron-left.component.js"),chevron_right_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chevron-right.component.js"),popover_component=__webpack_require__("./dist/libs/core/src/components/popover/popover.component.js"),date_part_spinner_=function _(t){return t};function date_part_spinner_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(date_part_spinner_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function date_part_spinner_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var GdsDatePartSpinner=function(_GdsElement){function GdsDatePartSpinner(){var _this;return(0,classCallCheck.A)(this,GdsDatePartSpinner),_this=function date_part_spinner_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,date_part_spinner_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsDatePartSpinner,arguments),(0,chunk_QTSIPXV3.VK)(_this,_focusNextSpinner),(0,chunk_QTSIPXV3.VK)(_this,_dispatchChangeEvent),(0,chunk_QTSIPXV3.VK)(_this,_formatNumber),(0,chunk_QTSIPXV3.VK)(_this,_clamp),(0,chunk_QTSIPXV3.VK)(_this,_clearInputBuffer),_this.value=0,_this.length=2,_this.min=0,_this.max=Number.MAX_SAFE_INTEGER,_this.displayValue=(0,chunk_QTSIPXV3.jq)(_this,_formatNumber,formatNumber_fn).call(_this,_this.value,_this.length),(0,chunk_QTSIPXV3.VK)(_this,_inputBuffer,""),(0,chunk_QTSIPXV3.VK)(_this,_increment,(function(){var current=parseInt(_this.value.toString());Number.isNaN(current)&&(current=2===_this.length?_this.min:(new Date).getFullYear()-1),_this.value=(0,chunk_QTSIPXV3.jq)(_this,_clamp,clamp_fn).call(_this,current+1),(0,chunk_QTSIPXV3.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this)})),(0,chunk_QTSIPXV3.VK)(_this,_decrement,(function(){var current=parseInt(_this.value.toString());Number.isNaN(current)&&(current=2===_this.length?_this.max:(new Date).getFullYear()+1),_this.value=(0,chunk_QTSIPXV3.jq)(_this,_clamp,clamp_fn).call(_this,current-1),(0,chunk_QTSIPXV3.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this)})),(0,chunk_QTSIPXV3.VK)(_this,_handleClick,(function(e){e.stopPropagation(),e.preventDefault(),_this.focus()})),(0,chunk_QTSIPXV3.VK)(_this,_handleFocus,(function(){(0,chunk_QTSIPXV3.jq)(_this,_clearInputBuffer,clearInputBuffer_fn).call(_this)})),(0,chunk_QTSIPXV3.VK)(_this,_handleBlur,(function(){""!==(0,chunk_QTSIPXV3.S7)(_this,_inputBuffer)&&((0,chunk_QTSIPXV3.jq)(_this,_clearInputBuffer,clearInputBuffer_fn).call(_this),_this.value=(0,chunk_QTSIPXV3.jq)(_this,_clamp,clamp_fn).call(_this,parseInt(_this.value.toString())),(0,chunk_QTSIPXV3.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this))})),(0,chunk_QTSIPXV3.VK)(_this,_handleWheel,(function(e){e.stopPropagation(),e.preventDefault(),e.deltaY>0?(0,chunk_QTSIPXV3.S7)(_this,_decrement).call(_this):(0,chunk_QTSIPXV3.S7)(_this,_increment).call(_this)})),(0,chunk_QTSIPXV3.VK)(_this,date_part_spinner_handleKeyDown,(function(e){var handled=!1;if("ArrowUp"===e.key)(0,chunk_QTSIPXV3.S7)(_this,_increment).call(_this),handled=!0;else if("ArrowDown"===e.key)(0,chunk_QTSIPXV3.S7)(_this,_decrement).call(_this),handled=!0;else{var key=parseInt(e.key);isNaN(key)||((0,chunk_QTSIPXV3.S7)(_this,_inputBuffer).length<_this.length&&((0,chunk_QTSIPXV3.OV)(_this,_inputBuffer,(0,chunk_QTSIPXV3.S7)(_this,_inputBuffer)+key.toString()),_this.value=parseInt((0,chunk_QTSIPXV3.S7)(_this,_inputBuffer))),(0,chunk_QTSIPXV3.S7)(_this,_inputBuffer).length===_this.length&&(_this.value=(0,chunk_QTSIPXV3.jq)(_this,_clamp,clamp_fn).call(_this,_this.value),(0,chunk_QTSIPXV3.jq)(_this,_clearInputBuffer,clearInputBuffer_fn).call(_this),(0,chunk_QTSIPXV3.jq)(_this,_focusNextSpinner,focusNextSpinner_fn).call(_this),(0,chunk_QTSIPXV3.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this)),handled=!0)}handled&&(e.preventDefault(),e.stopPropagation())})),_this}return(0,inherits.A)(GdsDatePartSpinner,_GdsElement),(0,createClass.A)(GdsDatePartSpinner,[{key:"createRenderRoot",value:function createRenderRoot(){return this}},{key:"connectedCallback",value:function connectedCallback(){date_part_spinner_superPropGet(GdsDatePartSpinner,"connectedCallback",this,3)([]),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",(0,chunk_QTSIPXV3.S7)(this,_handleWheel)),this.addEventListener("keydown",(0,chunk_QTSIPXV3.S7)(this,date_part_spinner_handleKeyDown)),this.addEventListener("blur",(0,chunk_QTSIPXV3.S7)(this,_handleBlur)),this.addEventListener("focus",(0,chunk_QTSIPXV3.S7)(this,_handleFocus)),this.addEventListener("click",(0,chunk_QTSIPXV3.S7)(this,_handleClick)),this.addEventListener("mousedown",(0,chunk_QTSIPXV3.S7)(this,_handleClick))}},{key:"focus",value:function focus(options){date_part_spinner_superPropGet(GdsDatePartSpinner,"focus",this,3)([options]),(0,chunk_QTSIPXV3.S7)(this,_handleFocus).call(this)}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(date_part_spinner_t||(date_part_spinner_t=date_part_spinner_`${0}`),this.displayValue)}},{key:"_refreshDisplayValue",value:function _refreshDisplayValue(){this.displayValue=(0,chunk_QTSIPXV3.jq)(this,_formatNumber,formatNumber_fn).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}}])}(gds_element.j);_inputBuffer=new WeakMap,_increment=new WeakMap,_decrement=new WeakMap,_handleClick=new WeakMap,_handleFocus=new WeakMap,_handleBlur=new WeakMap,_handleWheel=new WeakMap,date_part_spinner_handleKeyDown=new WeakMap,_focusNextSpinner=new WeakSet,focusNextSpinner_fn=function focusNextSpinner_fn(){for(var nextSpinner=this.nextElementSibling;nextSpinner;){if(nextSpinner instanceof GdsDatePartSpinner){nextSpinner.focus();break}nextSpinner=nextSpinner.nextElementSibling}},_dispatchChangeEvent=new WeakSet,dispatchChangeEvent_fn=function dispatchChangeEvent_fn(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},_formatNumber=new WeakSet,formatNumber_fn=function formatNumber_fn(num,padZeros){return String(num).padStart(padZeros,"0")},_clamp=new WeakSet,clamp_fn=function clamp_fn(value){return Math.max(this.min,Math.min(this.max,value))},_clearInputBuffer=new WeakSet,clearInputBuffer_fn=function clearInputBuffer_fn(){(0,chunk_QTSIPXV3.OV)(this,_inputBuffer,"")},GdsDatePartSpinner.formAssociated=!0,(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"value",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"length",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemin"})],GdsDatePartSpinner.prototype,"min",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemax"})],GdsDatePartSpinner.prototype,"max",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],GdsDatePartSpinner.prototype,"displayValue",2),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("value")],GdsDatePartSpinner.prototype,"_refreshDisplayValue",1),GdsDatePartSpinner=(0,chunk_QTSIPXV3.Cc)([(0,custom_element_scoping.Y$)("gds-date-part-spinner")],GdsDatePartSpinner);var datepicker_styles_t,datepicker_component_t,datepicker_component_t2,datepicker_component_t3,datepicker_component_t4,datepicker_component_t5,datepicker_component_t6,datepicker_component_t7,datepicker_component_t8,datepicker_component_t9,_t10,_t11,_t12,_t13,_t14,_t15,_t16,_valueOnOpen,_shouldShowFooter,shouldShowFooter_fn,_renderBackToValidRangeButton,renderBackToValidRangeButton_fn,_focusDate,focusDate_fn,_getSpinnerLabel,getSpinnerLabel_fn,_getMinSpinnerValue,getMinSpinnerValue_fn,_getMaxSpinnerValue,getMaxSpinnerValue_fn,datepicker_component_dispatchChangeEvent,datepicker_component_dispatchChangeEvent_fn,_dispatchInputEvent,dispatchInputEvent_fn,_handleFieldFocusOut,_handleSpinnerFocus,_handleClipboardCopy,_handleClipboardPaste,_handleFieldClick,_handleCalendarChange,_handleMonthChange,_handleYearChange,_handleIncrementFocusedMonth,_handleDecrementFocusedMonth,_handleCalendarFocusChange,_handlePopoverStateChange,_handleSpinnerKeydown,_parseDateFormat,parseDateFormat_fn,_handleSpinnerChange,_spinnerState,_years,years_get,_isValueOutsideRange,isValueOutsideRange_get,styles=(0,lit.AH)(datepicker_styles_t||(datepicker_styles_t=(function _(t){return t})`
  @layer base, reset;

  @layer base {
    ::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 11ch;
      gap: var(--gds-sys-space-4xs);
      font-size: var(--gds-sys-text-size-detail-s);
      font-weight: var(--gds-sys-text-weight-regular);
    }

    :host([size='small']) .spinners {
      font-size: var(--gds-sys-text-size-detail-s);
      line-height: var(--gds-sys-text-line-height-detail-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      /* border-radius: var(--gds-sys-space-2xs); */
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;

      &:focus {
        background-color: var(--gds-sys-color-l2-background-tertiary);
        color: var(--gds-sys-color-l2-content-tertiary);
      }
    }
  }
`)),_2=function _2(t){return t};function datepicker_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,datepicker_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function datepicker_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(datepicker_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropSet(t,e,o,r,p,f){return(0,set.A)((0,getPrototypeOf.A)(f?t.prototype:t),e,o,r,p)}function datepicker_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var Datepicker=function(_GdsFormControlElemen){function Datepicker(){var _this;return(0,classCallCheck.A)(this,Datepicker),_this=datepicker_component_callSuper(this,Datepicker),(0,chunk_QTSIPXV3.VK)(_this,_shouldShowFooter),(0,chunk_QTSIPXV3.VK)(_this,_renderBackToValidRangeButton),(0,chunk_QTSIPXV3.VK)(_this,_focusDate),(0,chunk_QTSIPXV3.VK)(_this,_getSpinnerLabel),(0,chunk_QTSIPXV3.VK)(_this,_getMinSpinnerValue),(0,chunk_QTSIPXV3.VK)(_this,_getMaxSpinnerValue),(0,chunk_QTSIPXV3.VK)(_this,datepicker_component_dispatchChangeEvent),(0,chunk_QTSIPXV3.VK)(_this,_dispatchInputEvent),(0,chunk_QTSIPXV3.VK)(_this,_parseDateFormat),(0,chunk_QTSIPXV3.VK)(_this,_years),(0,chunk_QTSIPXV3.VK)(_this,_isValueOutsideRange),_this.min=new Date((new Date).getFullYear()-10,0,1),_this.max=new Date((new Date).getFullYear()+10,0,1),_this.open=!1,_this.supportingText="",_this.size="large",_this.plain=!1,_this.showWeekNumbers=!1,_this.hideLabel=!1,_this.clearable=!1,_this.hideTodayButton=!1,_this.disabledWeekends=!1,_this.showExtendedSupportingText=!1,_this._focusedMonth=(new Date).getMonth(),_this._focusedYear=(new Date).getFullYear(),_this._dateFormatLayout=(0,chunk_QTSIPXV3.jq)(_this,_parseDateFormat,parseDateFormat_fn).call(_this,"y-m-d"),(0,chunk_QTSIPXV3.VK)(_this,_valueOnOpen,void 0),(0,chunk_QTSIPXV3.VK)(_this,_handleFieldFocusOut,(function(e){_this._elTrigger.then((function(_){var _e$relatedTarget,_document$getSelectio;(null==(_e$relatedTarget=e.relatedTarget)?void 0:_e$relatedTarget.parentElement)!==e.target&&(null==(_document$getSelectio=document.getSelection())||_document$getSelectio.removeAllRanges())}))})),(0,chunk_QTSIPXV3.VK)(_this,_handleSpinnerFocus,(function(e){_this._elTrigger.then((function(field){var _document$getSelectio2,_document$getSelectio3;null==(_document$getSelectio2=document.getSelection())||_document$getSelectio2.removeAllRanges();var range=new Range;range.setStart(field.firstChild,0),range.setEnd(field.lastChild,4),null==(_document$getSelectio3=document.getSelection())||_document$getSelectio3.addRange(range)}))})),(0,chunk_QTSIPXV3.VK)(_this,_handleClipboardCopy,(function(e){_this._elFieldAsync.then((function(field){var _e$clipboardData;e.currentTarget===field&&(e.preventDefault(),null==(_e$clipboardData=e.clipboardData)||_e$clipboardData.setData("text/plain",_this.displayValue))}))})),(0,chunk_QTSIPXV3.VK)(_this,_handleClipboardPaste,(function(e){_this._elFieldAsync.then((function(field){var _e$clipboardData2;if(e.currentTarget===field){e.preventDefault();var pasted=null==(_e$clipboardData2=e.clipboardData)?void 0:_e$clipboardData2.getData("text/plain");if(pasted){var pastedDate=new Date("-"),parts=pasted.split(_this._dateFormatLayout.delimiter);if(3===parts.length){var layout=_this._dateFormatLayout.layout,year=parseInt(parts[layout.findIndex((function(f){return"y"===f.token}))]),month=parseInt(parts[layout.findIndex((function(f){return"m"===f.token}))])-1,day=parseInt(parts[layout.findIndex((function(f){return"d"===f.token}))]);isNaN(year)||isNaN(month)||isNaN(day)||(pastedDate=new Date("".concat(year,"-").concat(month+1,"-").concat(day)))}"Invalid Date"===pastedDate.toString()&&"Invalid Date"===(pastedDate=new Date(pasted)).toString()||(_this.value=pastedDate,(0,chunk_QTSIPXV3.jq)(_this,datepicker_component_dispatchChangeEvent,datepicker_component_dispatchChangeEvent_fn).call(_this))}}}))})),(0,chunk_QTSIPXV3.VK)(_this,_handleFieldClick,(function(e){var _this$_elSpinners$;null==(_this$_elSpinners$=_this._elSpinners[0])||_this$_elSpinners$.focus()})),(0,chunk_QTSIPXV3.VK)(_this,_handleCalendarChange,(function(e){e.stopPropagation(),_this.value=new Date(e.detail),_this.open=!1,(0,chunk_QTSIPXV3.jq)(_this,datepicker_component_dispatchChangeEvent,datepicker_component_dispatchChangeEvent_fn).call(_this),(0,chunk_QTSIPXV3.jq)(_this,_dispatchInputEvent,dispatchInputEvent_fn).call(_this)})),(0,chunk_QTSIPXV3.VK)(_this,_handleMonthChange,(function(e){var _e$target;e.stopPropagation(),_this._focusedMonth=null==(_e$target=e.target)?void 0:_e$target.value})),(0,chunk_QTSIPXV3.VK)(_this,_handleYearChange,(function(e){var _e$target2;e.stopPropagation(),_this._focusedYear=null==(_e$target2=e.target)?void 0:_e$target2.value})),(0,chunk_QTSIPXV3.VK)(_this,_handleIncrementFocusedMonth,(function(_e){_this._focusedMonth<11?_this._focusedMonth++:11==_this._focusedMonth&&_this._focusedYear!=_this.max.getFullYear()&&(_this._focusedMonth=0,_this._focusedYear++)})),(0,chunk_QTSIPXV3.VK)(_this,_handleDecrementFocusedMonth,(function(_e){_this._focusedMonth>0?_this._focusedMonth--:0==_this._focusedMonth&&_this._focusedYear!=_this.min.getFullYear()&&(_this._focusedMonth=11,_this._focusedYear--)})),(0,chunk_QTSIPXV3.VK)(_this,_handleCalendarFocusChange,(0,asyncToGenerator.A)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this._elCalendar;case 2:return _this._focusedMonth=_context.sent.focusedMonth,_context.next=5,_this._elCalendar;case 5:return _this._focusedYear=_context.sent.focusedYear,_context.t0=Date,_context.next=9,_this._elCalendar;case 9:_context.t1=_context.sent.focusedDate,_this.value=new _context.t0(_context.t1),_this.requestUpdate(),(0,chunk_QTSIPXV3.jq)(_this,_dispatchInputEvent,dispatchInputEvent_fn).call(_this);case 13:case"end":return _context.stop()}}),_callee)})))),(0,chunk_QTSIPXV3.VK)(_this,_handlePopoverStateChange,function(){var _ref2=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee2(e){var calValue;return regenerator_default().wrap((function _callee2$(_context2){for(;;)switch(_context2.prev=_context2.next){case 0:if(e.target===e.currentTarget){_context2.next=2;break}return _context2.abrupt("return");case 2:if(_this.open=e.detail.open,"close"!==e.detail.reason){_context2.next=14;break}return _context2.next=6,_this._elCalendar;case 6:if(calValue=_context2.sent.value){_context2.next=11;break}return _this.value=void 0,(0,chunk_QTSIPXV3.jq)(_this,datepicker_component_dispatchChangeEvent,datepicker_component_dispatchChangeEvent_fn).call(_this),_context2.abrupt("return");case 11:!(0,isSameDay.r)(calValue||new Date(0),(0,chunk_QTSIPXV3.S7)(_this,_valueOnOpen)||new Date(0))&&(_this.value=new Date(calValue),(0,chunk_QTSIPXV3.jq)(_this,datepicker_component_dispatchChangeEvent,datepicker_component_dispatchChangeEvent_fn).call(_this)),_this.value&&(_this._focusedMonth=_this.value.getMonth(),_this._focusedYear=_this.value.getFullYear());case 14:"cancel"===e.detail.reason&&(_this.value=(0,chunk_QTSIPXV3.S7)(_this,_valueOnOpen),(0,chunk_QTSIPXV3.jq)(_this,_dispatchInputEvent,dispatchInputEvent_fn).call(_this));case 15:case"end":return _context2.stop()}}),_callee2)})));return function(_x){return _ref2.apply(this,arguments)}}()),(0,chunk_QTSIPXV3.VK)(_this,_handleSpinnerKeydown,(function(e){var index=Array.from(_this._elSpinners).findIndex((function(spinner){return spinner===e.target}));if("ArrowRight"===e.key){var next=_this._elSpinners[index+1];next&&next.focus()}if("ArrowLeft"===e.key){var prev=_this._elSpinners[index-1];prev&&prev.focus()}})),(0,chunk_QTSIPXV3.VK)(_this,_handleSpinnerChange,(function(val,name){(0,chunk_QTSIPXV3.S7)(_this,_spinnerState)[name]=val;var newDate=new Date;newDate.setFullYear(parseInt((0,chunk_QTSIPXV3.S7)(_this,_spinnerState).year)),newDate.setMonth(parseInt((0,chunk_QTSIPXV3.S7)(_this,_spinnerState).month)-1),newDate.setDate(parseInt((0,chunk_QTSIPXV3.S7)(_this,_spinnerState).day)),newDate.setHours(12,0,0,0),"Invalid Date"!==newDate.toString()&&(_this.value=newDate,(0,chunk_QTSIPXV3.jq)(_this,datepicker_component_dispatchChangeEvent,datepicker_component_dispatchChangeEvent_fn).call(_this),(0,chunk_QTSIPXV3.jq)(_this,_dispatchInputEvent,dispatchInputEvent_fn).call(_this))})),(0,chunk_QTSIPXV3.VK)(_this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"}),GdsDatePartSpinner.define(),_this}return(0,inherits.A)(Datepicker,_GdsFormControlElemen),(0,createClass.A)(Datepicker,[{key:"type",get:function get(){return"gds-datepicker"}},{key:"value",get:function get(){return datepicker_component_superPropGet(Datepicker,"value",this,1)},set:function set(value){_superPropSet(Datepicker,"value",value,this,1,1)}},{key:"dateformat",get:function get(){return this._dateFormatLayout.layout.map((function(f){return f.token})).join(this._dateFormatLayout.delimiter)},set:function set(dateformat){this._dateFormatLayout=(0,chunk_QTSIPXV3.jq)(this,_parseDateFormat,parseDateFormat_fn).call(this,dateformat)}},{key:"getFocusedDate",value:(_getFocusedDate=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee3(){return regenerator_default().wrap((function _callee3$(_context3){for(;;)switch(_context3.prev=_context3.next){case 0:if(!this.open){_context3.next=4;break}return _context3.abrupt("return",this._elCalendar.then((function(el){return el.focusedDate})));case 4:return _context3.abrupt("return",void 0);case 5:case"end":return _context3.stop()}}),_callee3,this)}))),function getFocusedDate(){return _getFocusedDate.apply(this,arguments)})},{key:"displayValue",get:function get(){return this._elField.innerText.replace(/\s+/g,"")}},{key:"test_getDateCell",value:(_test_getDateCell=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee4(dayNumber){return regenerator_default().wrap((function _callee4$(_context4){for(;;)switch(_context4.prev=_context4.next){case 0:return _context4.abrupt("return",this._elCalendar.then((function(el){return el.getDateCell(dayNumber)})));case 1:case"end":return _context4.stop()}}),_callee4,this)}))),function test_getDateCell(_x2){return _test_getDateCell.apply(this,arguments)})},{key:"connectedCallback",value:function connectedCallback(){datepicker_component_superPropGet(Datepicker,"connectedCallback",this,3)([]),transitional_styles.n.instance.apply(this,"gds-datepicker")}},{key:"render",value:function render(){var _this2=this;return(0,custom_element_scoping.qy)(datepicker_component_t||(datepicker_component_t=_2`
      ${0}
      <gds-field-base
        .size=${0}
        .disabled=${0}
        .invalid=${0}
        @click=${0}
        @copy=${0}
        @paste=${0}
        id="field"
      >
        <div class="spinners">
          ${0}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${0}"
          rank="tertiary"
          variant=${0}
          aria-label="${0}"
          aria-haspopup="menu"
          aria-expanded=${0}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${0}
        >
          ${0}
        </gds-button>
      </gds-field-base>

      ${0}

      <gds-popover
        autofocus
        .triggerRef=${0}
        .anchorRef=${0}
        .open=${0}
        @gds-ui-state=${0}
        label=${0}
        id="calendar-popover"
        .placement=${0}
        .calcMinWidth=${0}
        .useModalInMobileView=${0}
        @focusin=${0}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="s"
            padding="m m 0 m"
          >
            <gds-button
              @click=${0}
              aria-label=${0}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${0}
              @change=${0}
              .maxHeight=${0}
              label="${0}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${0}</gds-option>
              <gds-option value="1">${0}</gds-option>
              <gds-option value="2">${0}</gds-option>
              <gds-option value="3">${0}</gds-option>
              <gds-option value="4">${0}</gds-option>
              <gds-option value="5">${0}</gds-option>
              <gds-option value="6">${0}</gds-option>
              <gds-option value="7">${0}</gds-option>
              <gds-option value="8">${0}</gds-option>
              <gds-option value="9">${0}</gds-option>
              <gds-option value="10">${0}</gds-option>
              <gds-option value="11">${0}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${0}
              @change=${0}
              .maxHeight=${0}
              label="${0}"
              size="small"
              class="year"
              hide-label
            >
              ${0}
            </gds-dropdown>
            <gds-button
              @click=${0}
              aria-label=${0}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${0}
            @gds-date-focused=${0}
            .focusedMonth=${0}
            .focusedYear=${0}
            .value=${0}
            .min=${0}
            .max=${0}
            .showWeekNumbers=${0}
            .disabledWeekends=${0}
            .disabledDates=${0}
          ></gds-calendar>

          ${0}
        </gds-div>
      </gds-popover>
    `),(0,when.z)(!this.plain,(function(){return(0,custom_element_scoping.qy)(datepicker_component_t2||(datepicker_component_t2=_2`<gds-form-control-header
            class="size-${0}"
            .showExtendedSupportingText="${0}"
          >
            <label id="label" for="spinner-0" slot="label">${0}</label>
            ${0}
            <slot
              id="supporting-text-slot"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot
              id="sub-label-slot"
              name="sub-label"
              slot="supporting-text"
            ></slot>
          </gds-form-control-header>`),_this2.size,_this2.showExtendedSupportingText,_this2.label,(0,when.z)(_this2.supportingText.length>0,(function(){return(0,custom_element_scoping.qy)(datepicker_component_t3||(datepicker_component_t3=_2`<span slot="supporting-text" id="supporting-text">
                  ${0}
                </span>`),_this2.supportingText)})))})),this.size,this.disabled,this.invalid,(0,chunk_QTSIPXV3.S7)(this,_handleFieldClick),(0,chunk_QTSIPXV3.S7)(this,_handleClipboardCopy),(0,chunk_QTSIPXV3.S7)(this,_handleClipboardPaste),(0,join.f)((0,map.T)(this._dateFormatLayout.layout,(function(f,i){return(0,custom_element_scoping.qy)(datepicker_component_t4||(datepicker_component_t4=_2`<gds-date-part-spinner
                  id="spinner-${0}"
                  aria-invalid="${0}"
                  class="spinner"
                  .length=${0}
                  .value=${0}
                  aria-valuemin=${0}
                  aria-valuemax=${0}
                  aria-label=${0}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${0}
                  @keydown=${0}
                  @change=${0}
                  @focus=${0}
                  @touchend=${0}
                ></gds-date-part-spinner>`),i,_this2.invalid,"y"===f.token?4:2,(0,chunk_QTSIPXV3.S7)(_this2,_spinnerState)[f.name],(0,chunk_QTSIPXV3.jq)(_this2,_getMinSpinnerValue,getMinSpinnerValue_fn).call(_this2,f.name),(0,chunk_QTSIPXV3.jq)(_this2,_getMaxSpinnerValue,getMaxSpinnerValue_fn).call(_this2,f.name),(0,chunk_QTSIPXV3.jq)(_this2,_getSpinnerLabel,getSpinnerLabel_fn).call(_this2,f.name),(0,chunk_QTSIPXV3.jq)(_this2,_getMaxSpinnerValue,getMaxSpinnerValue_fn).call(_this2,f.name).toString().length,(0,chunk_QTSIPXV3.S7)(_this2,_handleSpinnerKeydown),(function(e){return(0,chunk_QTSIPXV3.S7)(_this2,_handleSpinnerChange).call(_this2,e.detail.value,f.name)}),(0,chunk_QTSIPXV3.S7)(_this2,_handleSpinnerFocus),(function(e){_this2.open=!0,e.preventDefault()}))})),(0,custom_element_scoping.qy)(datepicker_component_t5||(datepicker_component_t5=_2`<span class="separator"
              >${0}</span
            >`),this._dateFormatLayout.delimiter)),"small"===this.size?"xs":"small",this.invalid?"negative":"",(0,lit_localize.ab)("Open calendar modal"),this.open,this.disabled,(0,when.z)("small"===this.size,(function(){return(0,custom_element_scoping.qy)(datepicker_component_t6||(datepicker_component_t6=_2`<gds-icon-calender-add
                height="16"
                stroke="2"
              ></gds-icon-calender-add>`))}),(function(){return(0,custom_element_scoping.qy)(datepicker_component_t7||(datepicker_component_t7=_2`<gds-icon-calender-add></gds-icon-calender-add>`))})),(0,when.z)((0,chunk_QTSIPXV3.jq)(this,_shouldShowFooter,shouldShowFooter_fn).call(this),(function(){return(0,custom_element_scoping.qy)(datepicker_component_t8||(datepicker_component_t8=_2`<gds-form-control-footer
            class="size-${0}"
            .errorMessage=${0}
          >
            ${0}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${0}
            </slot>
          </gds-form-control-footer>`),_this2.size,_this2.invalid?_this2.errorMessage:void 0,"",_this2.errorMessage)})),this._elTrigger,this._elFieldAsync,this.open,(0,chunk_QTSIPXV3.S7)(this,_handlePopoverStateChange),this.label,"bottom-end",(function(){return _this2.showWeekNumbers?"350px":"305px"}),!0,function(){var _ref3=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee5(e){var _e$target3;return regenerator_default().wrap((function _callee5$(_context5){for(;;)switch(_context5.prev=_context5.next){case 0:if("calendar-popover"===(null==(_e$target3=e.target)?void 0:_e$target3.id)){_context5.next=3;break}return _context5.abrupt("return");case 3:_this2._elCalendar.then((function(cal){return cal.focus()}));case 4:case"end":return _context5.stop()}}),_callee5)})));return function(_x3){return _ref3.apply(this,arguments)}}(),(0,chunk_QTSIPXV3.S7)(this,_handleDecrementFocusedMonth),(0,lit_localize.ab)("Previous month"),this._focusedMonth.toString(),(0,chunk_QTSIPXV3.S7)(this,_handleMonthChange),300,(0,lit_localize.ab)("Month"),(0,lit_localize.ab)("January"),(0,lit_localize.ab)("February"),(0,lit_localize.ab)("March"),(0,lit_localize.ab)("April"),(0,lit_localize.ab)("May"),(0,lit_localize.ab)("June"),(0,lit_localize.ab)("July"),(0,lit_localize.ab)("August"),(0,lit_localize.ab)("September"),(0,lit_localize.ab)("October"),(0,lit_localize.ab)("November"),(0,lit_localize.ab)("December"),this._focusedYear.toString(),(0,chunk_QTSIPXV3.S7)(this,_handleYearChange),300,(0,lit_localize.ab)("Year"),(0,repeat.u)((0,chunk_QTSIPXV3.S7)(this,_years,years_get),(function(year){return year}),(function(year){return(0,custom_element_scoping.qy)(datepicker_component_t9||(datepicker_component_t9=_2`<gds-option value=${0}>${0}</gds-option>`),year,year)})),(0,chunk_QTSIPXV3.S7)(this,_handleIncrementFocusedMonth),(0,lit_localize.ab)("Next month"),(0,chunk_QTSIPXV3.S7)(this,_handleCalendarChange),(0,chunk_QTSIPXV3.S7)(this,_handleCalendarFocusChange),this._focusedMonth,this._focusedYear,this.value,this.min,this.max,this.showWeekNumbers,this.disabledWeekends,this.disabledDates,(0,when.z)(this.clearable||!this.hideTodayButton,(function(){return(0,custom_element_scoping.qy)(_t10||(_t10=_2`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="0 m m m"
              >
                ${0}
                ${0}
                ${0}
              </gds-flex>
            `),(0,when.z)(_this2.clearable,(function(){return(0,custom_element_scoping.qy)(_t11||(_t11=_2` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${0}
                    >
                      ${0}
                    </gds-button>`),(function(e){e.stopPropagation(),_this2.value=void 0,_this2.open=!1,(0,chunk_QTSIPXV3.jq)(_this2,_dispatchInputEvent,dispatchInputEvent_fn).call(_this2),(0,chunk_QTSIPXV3.jq)(_this2,datepicker_component_dispatchChangeEvent,datepicker_component_dispatchChangeEvent_fn).call(_this2)}),(0,lit_localize.ab)("Clear"))})),(0,until.T)((0,chunk_QTSIPXV3.jq)(_this2,_renderBackToValidRangeButton,renderBackToValidRangeButton_fn).call(_this2),lit.s6),(0,when.z)(!_this2.hideTodayButton,(function(){return(0,custom_element_scoping.qy)(_t12||(_t12=_2` <gds-button
                      id="today-button"
                      rank="tertiary"
                      size="small"
                      @click=${0}
                    >
                      ${0}
                    </gds-button>`),(function(e){e.stopPropagation(),(0,chunk_QTSIPXV3.jq)(_this2,_focusDate,focusDate_fn).call(_this2,new Date)}),(0,lit_localize.ab)("Today"))})))})))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this._elSpinners[0]}},{key:"_handleValueChange",value:function _handleValueChange(){if(""===this.value&&(this.value=void 0),this.value){var date=this.value;this._focusedMonth=date.getMonth(),this._focusedYear=date.getFullYear();var year=date.getFullYear().toString(),month=(date.getMonth()+1).toString().padStart(2,"0"),day=date.getDate().toString().padStart(2,"0");(0,chunk_QTSIPXV3.OV)(this,_spinnerState,{year,month,day})}else(0,chunk_QTSIPXV3.OV)(this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"})}},{key:"_handleOpenChange",value:function _handleOpenChange(){this.open&&((0,chunk_QTSIPXV3.OV)(this,_valueOnOpen,this.value),this._elCalendar.then((function(el){return el.focus()})))}}]);var _test_getDateCell,_getFocusedDate}(form_control.S);_valueOnOpen=new WeakMap,_shouldShowFooter=new WeakSet,shouldShowFooter_fn=function shouldShowFooter_fn(){return!this.plain},_renderBackToValidRangeButton=new WeakSet,renderBackToValidRangeButton_fn=function(){var _ref4=(0,asyncToGenerator.A)(regenerator_default().mark((function _callee6(){var focusedDate,buttonTxt,buttonAction,_this3=this;return regenerator_default().wrap((function _callee6$(_context6){for(;;)switch(_context6.prev=_context6.next){case 0:return _context6.next=2,this.getFocusedDate();case 2:return focusedDate=_context6.sent,buttonTxt="",focusedDate&&focusedDate>this.max?(buttonTxt=(0,lit_localize.ab)("Last available date"),buttonAction=function buttonAction(e){e.stopPropagation(),(0,chunk_QTSIPXV3.jq)(_this3,_focusDate,focusDate_fn).call(_this3,_this3.max)}):focusedDate&&focusedDate<this.min&&(buttonTxt=(0,lit_localize.ab)("First available date"),buttonAction=function buttonAction(e){e.stopPropagation(),(0,chunk_QTSIPXV3.jq)(_this3,_focusDate,focusDate_fn).call(_this3,_this3.min)}),_context6.abrupt("return",(0,custom_element_scoping.qy)(_t13||(_t13=_t15||(_t15=_2`${0}`)),(0,when.z)(buttonTxt.length>0,(function(){return(0,custom_element_scoping.qy)(_t14||(_t14=_t16||(_t16=_2`<gds-button rank="tertiary" size="small" @click=${0}>
          ${0}
        </gds-button>`)),buttonAction,buttonTxt)}),(function(){return lit.s6}))));case 6:case"end":return _context6.stop()}}),_callee6,this)})));return function renderBackToValidRangeButton_fn(){return _ref4.apply(this,arguments)}}(),_focusDate=new WeakSet,focusDate_fn=function focusDate_fn(d){var focusDate=new Date(d);this._elCalendar.then((function(el){return el.focusedDate=focusDate})).then((0,chunk_QTSIPXV3.S7)(this,_handleCalendarFocusChange))},_getSpinnerLabel=new WeakSet,getSpinnerLabel_fn=function getSpinnerLabel_fn(name){var labels={year:(0,lit_localize.ab)("Year"),month:(0,lit_localize.ab)("Month"),day:(0,lit_localize.ab)("Day")};return"".concat(labels[name]," ").concat(this.label)},_getMinSpinnerValue=new WeakSet,getMinSpinnerValue_fn=function getMinSpinnerValue_fn(name){return{year:1900,month:1,day:1}[name]},_getMaxSpinnerValue=new WeakSet,getMaxSpinnerValue_fn=function getMaxSpinnerValue_fn(name){return{year:9999,month:12,day:31}[name]},datepicker_component_dispatchChangeEvent=new WeakSet,datepicker_component_dispatchChangeEvent_fn=function dispatchChangeEvent_fn(){var _this4=this;this.updateComplete.then((function(){return _this4.dispatchEvent(new Event("change",{bubbles:!0,composed:!0}))}))},_dispatchInputEvent=new WeakSet,dispatchInputEvent_fn=function dispatchInputEvent_fn(){var _this5=this;this.updateComplete.then((function(){return _this5.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))}))},_handleFieldFocusOut=new WeakMap,_handleSpinnerFocus=new WeakMap,_handleClipboardCopy=new WeakMap,_handleClipboardPaste=new WeakMap,_handleFieldClick=new WeakMap,_handleCalendarChange=new WeakMap,_handleMonthChange=new WeakMap,_handleYearChange=new WeakMap,_handleIncrementFocusedMonth=new WeakMap,_handleDecrementFocusedMonth=new WeakMap,_handleCalendarFocusChange=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleSpinnerKeydown=new WeakMap,_parseDateFormat=new WeakSet,parseDateFormat_fn=function parseDateFormat_fn(dateformat){var delimiter=dateformat.replace(/[a-z0-9]/gi,"")[0],format=dateformat.split(delimiter),year=format.findIndex((function(f){return"y"===f})),month=format.findIndex((function(f){return"m"===f})),day=format.findIndex((function(f){return"d"===f}));if(-1===year||-1===month||-1===day)throw new Error("Invalid date format for <gds-datepicker>");return{delimiter,layout:[year,month,day].sort((function(a,b){return a-b})).map((function(i){return format[i]})).map((function(f){return{token:f,name:"y"===f?"year":"m"===f?"month":"day"}}))}},_handleSpinnerChange=new WeakMap,_spinnerState=new WeakMap,_years=new WeakSet,years_get=function years_get(){var _this$value,minYear=this.min.getFullYear(),maxYear=this.max.getFullYear(),isOutsideRange=(0,chunk_QTSIPXV3.S7)(this,_isValueOutsideRange,isValueOutsideRange_get),valueYear=null==(_this$value=this.value)?void 0:_this$value.getFullYear();return(0,defineProperty.A)({},Symbol.iterator,regenerator_default().mark((function _callee7(){var i;return regenerator_default().wrap((function _callee7$(_context7){for(;;)switch(_context7.prev=_context7.next){case 0:if(!isOutsideRange){_context7.next=3;break}return _context7.next=3,valueYear;case 3:i=minYear;case 4:if(!(i<=maxYear)){_context7.next=10;break}return _context7.next=7,i;case 7:i++,_context7.next=4;break;case 10:case"end":return _context7.stop()}}),_callee7)})))},_isValueOutsideRange=new WeakSet,isValueOutsideRange_get=function isValueOutsideRange_get(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},Datepicker.styles=[tokens_style.LU,form_control_host_style.A,styles],(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({converter:attribute_converters.JD})],Datepicker.prototype,"value",1),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({converter:attribute_converters.JD})],Datepicker.prototype,"min",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({converter:attribute_converters.JD})],Datepicker.prototype,"max",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean})],Datepicker.prototype,"open",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],Datepicker.prototype,"supportingText",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:String})],Datepicker.prototype,"size",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean})],Datepicker.prototype,"plain",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"show-week-numbers"})],Datepicker.prototype,"showWeekNumbers",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-label"})],Datepicker.prototype,"hideLabel",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"clearable"})],Datepicker.prototype,"clearable",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-today-button"})],Datepicker.prototype,"hideTodayButton",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)()],Datepicker.prototype,"dateformat",1),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],Datepicker.prototype,"disabledWeekends",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({converter:attribute_converters._h,attribute:"disabled-dates"})],Datepicker.prototype,"disabledDates",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Datepicker.prototype,"showExtendedSupportingText",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.nJ)("#calendar-button")],Datepicker.prototype,"test_calendarButton",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.P)("#clear-button")],Datepicker.prototype,"test_clearButton",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.P)("#today-button")],Datepicker.prototype,"test_todayButton",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],Datepicker.prototype,"_focusedMonth",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],Datepicker.prototype,"_focusedYear",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.wk)()],Datepicker.prototype,"_dateFormatLayout",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.nJ)("#calendar")],Datepicker.prototype,"_elCalendar",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.nJ)("#calendar-button")],Datepicker.prototype,"_elTrigger",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.nJ)("#field")],Datepicker.prototype,"_elFieldAsync",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.YG)("[role=spinbutton]")],Datepicker.prototype,"_elSpinners",2),(0,chunk_QTSIPXV3.Cc)([(0,decorators.P)("#field")],Datepicker.prototype,"_elField",2),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("value")],Datepicker.prototype,"_handleValueChange",1),(0,chunk_QTSIPXV3.Cc)([(0,watch.w)("open")],Datepicker.prototype,"_handleOpenChange",1),Datepicker=(0,chunk_QTSIPXV3.Cc)([(0,lit_localize.cc)()],Datepicker);var GdsDatepicker=function(_withSizeXProps){function GdsDatepicker(){return(0,classCallCheck.A)(this,GdsDatepicker),datepicker_component_callSuper(this,GdsDatepicker,arguments)}return(0,inherits.A)(GdsDatepicker,_withSizeXProps),(0,createClass.A)(GdsDatepicker)}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(Datepicker))));GdsDatepicker=(0,chunk_QTSIPXV3.Cc)([(0,custom_element_scoping.Y$)("gds-datepicker",{dependsOn:[flex_component.o,button_component.t,dropdown_component.E,GdsCalendar,popover_component.E,calendar_component._,calender_add_component.z,chevron_left_component.g,chevron_right_component.V]})],GdsDatepicker);var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js"),_excluded=["label","onChange","minDate","maxDate","value","showWeeks","testId","validator","size","selectedDate","currentDate"];GdsDatepicker.define(),(0,transitional_styles.Y)();var CoreDatepicker=(0,_lit_react.a)({tagName:(0,custom_element_scoping.Eq)("gds-datepicker"),elementClass:GdsDatepicker,events:{onchange:"change"},react}),datepicker_Datepicker=(0,react.forwardRef)((function(_ref2,ref){var _ref2$label=_ref2.label,label=void 0===_ref2$label?"Date":_ref2$label,onChange=_ref2.onChange,minDate=_ref2.minDate,maxDate=_ref2.maxDate,value=_ref2.value,showWeeks=_ref2.showWeeks,testId=_ref2.testId,validator=_ref2.validator,size=_ref2.size,selectedDate=_ref2.selectedDate,currentDate=_ref2.currentDate,props=(0,objectWithoutProperties.A)(_ref2,_excluded);currentDate&&!value&&(value=currentDate),selectedDate&&!value&&(value=selectedDate);var min=minDate||new Date((new Date).getFullYear()-10,0,1),max=maxDate||new Date((new Date).getFullYear()+10,0,1),_ref=(0,react.useRef)(null);return(0,react.useImperativeHandle)(ref,(function(){return _ref.current}),[_ref]),(0,react.useEffect)((function(){null!=_ref&&_ref.current&&(_ref.current.validator=validator)}),[validator]),(0,jsx_runtime.jsx)("div",{className:"form-group",children:(0,jsx_runtime.jsx)(CoreDatepicker,Object.assign({"data-testid":testId,label,min,max,showWeekNumbers:showWeeks,onchange:function onChangeHandler(e){onChange&&onChange(e.target.value)},value,ref:_ref,size:"small"===size?"small":"large"},props))})}));const datepicker=datepicker_Datepicker;datepicker_Datepicker.__docgenInfo={description:"",methods:[],displayName:"Datepicker",props:{disabledDates:{required:!1,tsType:{name:"Array",elements:[{name:"Date"}],raw:"Date[]"},description:"An array of dates that should be disabled in the calendar."},disabledWeekends:{required:!1,tsType:{name:"boolean"},description:"Whether to disable weekends in the calendar."},hideLabel:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the label above the input field."},invalid:{required:!1,tsType:{name:"boolean"},description:"Validation state of the form control. Setting this to true triggers the invalid state of the control."},validator:{required:!1,tsType:{name:"GdsValidator"},description:"Validate the form control element. Should return the validity state and an optional validation message."},label:{required:!1,tsType:{name:"string"},description:"The label text displayed above the datepicker. This should always be set to a descriptive label.",defaultValue:{value:"'Date'",computed:!1}},maxDate:{required:!1,tsType:{name:"Date"},description:"The maximum date that can be selected."},minDate:{required:!1,tsType:{name:"Date"},description:"The minimum date that can be selected."},open:{required:!1,tsType:{name:"boolean"},description:"Controls whether the datepicker popover is open."},onChange:{required:!1,tsType:{name:"signature",type:"function",raw:"(value: any) => void",signature:{arguments:[{type:{name:"any"},name:"value"}],return:{name:"void"}}},description:"Callback function that is called when the value of the Datepicker changes."},required:{required:!1,tsType:{name:"boolean"},description:"Sets the datepicker as a required field for forms."},showWeeks:{required:!1,tsType:{name:"boolean"},description:"Whether to show a column of week numbers in the calendar."},size:{required:!1,tsType:{name:"union",raw:"'small' | 'medium'",elements:[{name:"literal",value:"'small'"},{name:"literal",value:"'medium'"}]},description:"Whether to use the small variant of the datepicker field."},testId:{required:!1,tsType:{name:"string"},description:"The test ID used for testing."},value:{required:!1,tsType:{name:"Date"},description:"The Date value of the datepicker. This can be set to undefined to clear the datepicker.\nThis can be a string if set via the value attribute in markup, or via the setAttribute DOM API."},ref:{required:!1,tsType:{name:"ReactRef",raw:"React.Ref<GdsDatepicker>",elements:[{name:"GdsDatepicker"}]},description:"The ref to the datepicker element."},children:{required:!1,tsType:{name:"ReactReactNode",raw:"React.ReactNode"},description:"The children of the datepicker."},clearable:{required:!1,tsType:{name:"boolean"},description:"If the it will be possible to clear the selected date."},hideTodayButton:{required:!1,tsType:{name:"boolean"},description:"Whether to hide the today button under the calendar."},selectedDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."},currentDate:{required:!1,tsType:{name:"Date"},description:"@deprecated Use `value` instead."}}}},"./dist/libs/core/src/components/icon/icons/calendar.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>IconCalendar});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QTSIPXV3.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconCalendar=function(_GdsIcon){function IconCalendar(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconCalendar),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconCalendar,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconCalendar,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconCalendar)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconCalendar._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCalendar._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',IconCalendar._name="calendar",IconCalendar._width=24,IconCalendar._height=24,IconCalendar._viewBox="0 0 24 24",IconCalendar=(0,_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-calendar")],IconCalendar)},"./dist/libs/core/src/components/icon/icons/calender-add.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>IconCalenderAdd});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QTSIPXV3.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconCalenderAdd=function(_GdsIcon){function IconCalenderAdd(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconCalenderAdd),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconCalenderAdd,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconCalenderAdd,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconCalenderAdd)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconCalenderAdd._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCalenderAdd._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>',IconCalenderAdd._name="calender-add",IconCalenderAdd._width=24,IconCalenderAdd._height=24,IconCalenderAdd._viewBox="0 0 24 24",IconCalenderAdd=(0,_chunks_chunk_QTSIPXV3_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-calender-add")],IconCalenderAdd)},"./dist/libs/core/src/utils/helpers/attribute-converters.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});__webpack_require__("./dist/libs/core/src/chunks/chunk.QTSIPXV3.js");var dateConverter={fromAttribute:function fromAttribute(value){return new Date(value)},toAttribute:function toAttribute(value){return value.toISOString()}},dateArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",").map((function(d){return new Date(d.trim())}))},toAttribute:function toAttribute(value){return JSON.stringify(value.map((function(d){return d.toISOString()})))}},stringArrayConverter={fromAttribute:function fromAttribute(value){return value.split(",")},toAttribute:function toAttribute(value){return Array.isArray(value)?value.join(","):value}}}}]);
//# sourceMappingURL=606.ba253735.iframe.bundle.js.map
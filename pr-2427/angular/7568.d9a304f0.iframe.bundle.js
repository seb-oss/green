"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7568],{"./dist/libs/core/src/components/calendar/calendar.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{x:()=>GdsCalendar});var chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),lastDayOfMonth=__webpack_require__("./node_modules/date-fns/lastDayOfMonth.js"),getWeek=__webpack_require__("./node_modules/date-fns/getWeek.js"),isSameDay=__webpack_require__("./node_modules/date-fns/isSameDay.js"),isSameMonth=__webpack_require__("./node_modules/date-fns/isSameMonth.js"),setHours=__webpack_require__("./node_modules/date-fns/setHours.js"),addDays=__webpack_require__("./node_modules/date-fns/addDays.js"),subMonths=__webpack_require__("./node_modules/date-fns/subMonths.js"),addMonths=__webpack_require__("./node_modules/date-fns/addMonths.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js");var _GdsCalendar_instances,setSelectedDate_fn,handleKeyDown_fn,calendar_styles_default=lit.AH`
  @layer base, reset;

  @layer base {
    .controls {
      padding-bottom: 0.25rem;
      margin: 0.5rem 1rem -0.5rem 1rem;
    }

    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-sys-space-xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;

      &.small {
        border-spacing: var(--gds-sys-space-2xs);

        thead th {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
        }

        tbody tr .week-number {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);
        }

        &.indicators {
          border-spacing: var(--gds-sys-space-xs) var(--gds-sys-space-l);
        }
      }
    }

    thead {
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
        width: var(--gds-sys-space-2xl);
        height: var(--gds-sys-space-2xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-sys-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-sys-radius-max);
        transition: background 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-sys-space-3xs);

        &.short {
          width: var(--gds-sys-space-4xl);
        }

        &.wide {
          width: var(--gds-sys-space-5xl);
        }

        &.long {
          width: var(--gds-sys-space-7xl);
        }

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          cursor: pointer;
        }

        &[aria-selected='true'] {
          color: var(--gds-sys-color-content-neutral-03);
          background: var(--gds-sys-color-l3-neutral-01);
        }

        &:not(.disabled):hover {
          background: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-05)
          );
        }

        &[aria-selected='true']:not(.disabled):hover {
          background: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }

        &.today {
          border-color: var(--gds-sys-color-border-strong);
        }

        &.disabled:not(.week-number) {
          background: var(--gds-sys-color-l3-disabled-01);
          color: var(--gds-sys-color-content-disabled-01);
          cursor: not-allowed;
        }

        &.disabled.week-number {
          color: var(--gds-sys-color-content-neutral-02);
          cursor: default;
        }

        &[aria-selected='false']:active:not(.disabled) {
          background: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-06)
          );
        }

        &[aria-selected='true']:active:not(.disabled) {
          background: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-01),
            var(--gds-sys-color-state-neutral-02)
          );
        }

        &:focus-visible {
          outline-color: var(--gds-sys-color-content-neutral-01);
          outline-width: var(--gds-sys-space-3xs);
        }

        &.small {
          width: var(--gds-sys-space-xl);
          height: var(--gds-sys-space-xl);
          font: var(--gds-sys-text-body-book-s);
          line-height: var(--gds-sys-text-line-height-detail-s);

          &.short {
            width: var(--gds-sys-space-2xl);
          }

          &.wide {
            width: var(--gds-sys-space-3xl);
          }

          &.long {
            width: var(--gds-sys-space-6xl);
          }
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-sys-space-xs);
        height: var(--gds-sys-space-xs);
        border-radius: var(--gds-sys-radius-max);
        background: var(--gds-sys-color-l3-neutral-01);
        inset: calc(100% + var(--gds-sys-space-xs))
          calc(50% - var(--gds-sys-space-xs) / 2) auto auto;
      }
    }
  }
`,startOfMonth=__webpack_require__("./node_modules/date-fns/startOfMonth.js"),endOfMonth=__webpack_require__("./node_modules/date-fns/endOfMonth.js"),eachWeekOfInterval=__webpack_require__("./node_modules/date-fns/eachWeekOfInterval.js"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/eachDayOfInterval.js");let GdsCalendar=class extends gds_element.j{constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsCalendar_instances),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.size="large",this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=date=>date.toLocaleDateString(this._currentLocale,{weekday:"long",year:"numeric",month:"long",day:"numeric"}),this._currentLocale=navigator.language}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(month){const lastOfSelectedMonth=(0,lastDayOfMonth.W)(new Date(this.focusedYear,month,1)),newFocusedDate=new Date(this.focusedDate);newFocusedDate.setDate(Math.min(this.focusedDate.getDate(),lastOfSelectedMonth.getDate())),newFocusedDate.setMonth(month),newFocusedDate.setHours(12,0,0,0),this.focusedDate=newFocusedDate}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(year){this.focusedDate=new Date(this.focusedDate.setFullYear(year))}getDateCell(dayNumber){return this.shadowRoot?.querySelector(`#dateCell-${dayNumber}`)}connectedCallback(){super.connectedCallback(),transitional_styles.n.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",(0,chunk_QU3DSPNU.jq)(this,_GdsCalendar_instances,handleKeyDown_fn)),window.addEventListener("lit-localize-status",(e=>{"ready"===e.detail.status&&(this._currentLocale=e.detail.readyLocale)}))}focus(){super.focus(),this._elFocusedCell?.focus()}render(){const currentDate=new Date;return lit.qy`<table
      role="grid"
      aria-label="${(0,if_defined.J)(this.label)}"
      class="${(0,class_map.H)({small:Boolean("small"===this.size),indicators:Boolean(this.customizedDates)})}"
    >
      ${(0,when.z)(!this.hideDayNames,(()=>lit.qy`<thead role="rowgroup">
            <tr role="row">
              ${(0,when.z)(this.showWeekNumbers,(()=>lit.qy`<th></th>`))}
              <th>${(0,lit_localize.ab)("Mon").substring(0,1)}</th>
              <th>${(0,lit_localize.ab)("Tue").substring(0,1)}</th>
              <th>${(0,lit_localize.ab)("Wed").substring(0,1)}</th>
              <th>${(0,lit_localize.ab)("Thu").substring(0,1)}</th>
              <th>${(0,lit_localize.ab)("Fri").substring(0,1)}</th>
              <th>${(0,lit_localize.ab)("Sat").substring(0,1)}</th>
              <th>${(0,lit_localize.ab)("Sun").substring(0,1)}</th>
            </tr>
          </thead>`))}
      <tbody role="rowgroup">
        ${function renderMonthGridView(date,template){const monthStart=(0,startOfMonth.w)(date),monthEnd=(0,endOfMonth.p)(date),weeks=(0,eachWeekOfInterval.Y)({start:monthStart,end:monthEnd},{weekStartsOn:1});for(;weeks.length<6;)weeks.push((0,addDays.f)(weeks[weeks.length-1],7));return lit.qy`${template(weeks.map((weekStartDay=>({days:(0,eachDayOfInterval.k)({start:weekStartDay,end:(0,addDays.f)(weekStartDay,6)})}))))}`}(this.focusedDate,(weeks=>lit.qy`
            ${weeks.map((week=>lit.qy`
                <tr role="row">
                  ${(0,when.z)(this.showWeekNumbers,(()=>lit.qy`<td
                        class="week-number disabled"
                        disabled
                        scope="row"
                      >
                        ${(0,getWeek.N)(week.days[0])}
                      </td>`))}
                  ${week.days.map((day=>{const customization=this.customizedDates&&this.customizedDates.find((d=>(0,isSameDay.r)(d.date,day))),displayOptions={color:"currentColor",disabled:Boolean(this.disabledDates&&this.disabledDates.some((d=>(0,isSameDay.r)(d,day)))),...customization},isOutsideCurrentMonth=!(0,isSameMonth.t)(this.focusedDate,day),isOutsideMinMax=(day<this.min||day>this.max)&&!(0,isSameDay.r)(day,this.min)&&!(0,isSameDay.r)(day,this.max),isWeekend=0===day.getDay()||6===day.getDay(),isDisabled=displayOptions.disabled||isOutsideCurrentMonth||isOutsideMinMax||this.disabledWeekends&&isWeekend;return this.hideExtraneousDays&&isOutsideCurrentMonth?lit.qy`<td inert></td>`:lit.qy`
                          <td
                            role="${(0,if_defined.J)(isDisabled?void 0:"gridcell")}"
                            class="${(0,class_map.H)({small:Boolean("small"===this.size),"custom-date":Boolean(customization),disabled:Boolean(isDisabled),today:(0,isSameDay.r)(currentDate,day)})}"
                            ?disabled=${isDisabled}
                            tabindex="${(0,isSameDay.r)(this.focusedDate,day)?0:-1}"
                            aria-selected="${this.value&&(0,isSameDay.r)(this.value,day)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(day)}"
                            @click=${()=>isDisabled?null:(0,chunk_QU3DSPNU.jq)(this,_GdsCalendar_instances,setSelectedDate_fn).call(this,day)}
                            id="dateCell-${day.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${displayOptions?displayOptions?.color:""}"
                              >${day.getDate()}</span
                            >

                            ${(0,when.z)(displayOptions.indicator,(()=>lit.qy`<span
                                  class="indicator-${displayOptions?.indicator}"
                                  style="--_color: ${displayOptions?.color}"
                                ></span>`))}
                          </td>
                        `}))}
                </tr>
              `))}
          `))}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=new Date(this.value))}};_GdsCalendar_instances=new WeakSet,setSelectedDate_fn=function(date){const dateOnMidDay=(0,setHours.a)(date,12);this.value=dateOnMidDay,this.dispatchCustomEvent("change",{detail:dateOnMidDay,bubbles:!1,composed:!1})},handleKeyDown_fn=function(e){let handled=!1,newFocusedDate=new Date(this.focusedDate);if("ArrowLeft"===e.key?(newFocusedDate=(0,addDays.f)(this.focusedDate,-1),handled=!0):"ArrowRight"===e.key?(newFocusedDate=(0,addDays.f)(this.focusedDate,1),handled=!0):"ArrowUp"===e.key?(newFocusedDate=(0,addDays.f)(this.focusedDate,-7),handled=!0):"ArrowDown"===e.key?(newFocusedDate=(0,addDays.f)(this.focusedDate,7),handled=!0):"Enter"===e.key||" "===e.key?(this._elFocusedCell?.hasAttribute("disabled")||(0,chunk_QU3DSPNU.jq)(this,_GdsCalendar_instances,setSelectedDate_fn).call(this,this.focusedDate),handled=!0):"Home"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth,1),handled=!0):"End"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth+1,0),handled=!0):"PageUp"===e.key?(newFocusedDate=(0,subMonths.a)(this.focusedDate,1),handled=!0):"PageDown"===e.key&&(newFocusedDate=(0,addMonths.P)(this.focusedDate,1),handled=!0),newFocusedDate.getFullYear()>=this.min.getFullYear()&&newFocusedDate.getFullYear()<=this.max.getFullYear()){this.dispatchCustomEvent("gds-date-focused",{detail:newFocusedDate,bubbles:!1,composed:!1})&&(this.focusedDate=newFocusedDate)}handled&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((()=>{this._elFocusedCell?.focus()})))},GdsCalendar.styles=[tokens_style.LU,calendar_styles_default],GdsCalendar.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"value",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"min",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"max",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"focusedDate",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],GdsCalendar.prototype,"disabledWeekends",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Array,attribute:"disabled-dates"})],GdsCalendar.prototype,"disabledDates",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedMonth",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedYear",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],GdsCalendar.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"showWeekNumbers",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideExtraneousDays",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideDayNames",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"customizedDates",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"dateLabelTemplate",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsCalendar.prototype,"_currentLocale",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)('td[tabindex="0"]')],GdsCalendar.prototype,"_elFocusedCell",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],GdsCalendar.prototype,"_valueChanged",1),GdsCalendar=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-calendar"),(0,lit_localize.cc)()],GdsCalendar)},"./dist/libs/core/src/components/datepicker/datepicker.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>GdsDatepicker});var _inputBuffer,_increment,_decrement,_handleClick,_handleFocus,_handleBlur,_handleWheel,_handleKeyDown,_GdsDatePartSpinner_instances,focusNextSpinner_fn,dispatchChangeEvent_fn,formatNumber_fn,clamp_fn,clearInputBuffer_fn,asyncToGenerator=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),join=__webpack_require__("./node_modules/lit-html/directives/join.js"),map=__webpack_require__("./node_modules/lit-html/directives/map.js"),repeat=__webpack_require__("./node_modules/lit/directives/repeat.js"),until=__webpack_require__("./node_modules/lit/directives/until.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),isSameDay=__webpack_require__("./node_modules/date-fns/isSameDay.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),dropdown_component=__webpack_require__("./dist/libs/core/src/components/dropdown/dropdown.component.js"),flex_component=__webpack_require__("./dist/libs/core/src/components/flex/flex.component.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),form_control_host_style=__webpack_require__("./dist/libs/core/src/shared-styles/form-control-host.style.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),attribute_converters=__webpack_require__("./dist/libs/core/src/utils/helpers/attribute-converters.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),calendar_component=__webpack_require__("./dist/libs/core/src/components/calendar/calendar.component.js"),form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js"),icons_calendar_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/calendar.component.js"),calender_add_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/calender-add.component.js"),chevron_left_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chevron-left.component.js"),chevron_right_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chevron-right.component.js"),popover_component=__webpack_require__("./dist/libs/core/src/components/popover/popover.component.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js");let GdsDatePartSpinner=class extends gds_element.j{constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsDatePartSpinner_instances),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,formatNumber_fn).call(this,this.value,this.length),(0,chunk_QU3DSPNU.VK)(this,_inputBuffer,""),(0,chunk_QU3DSPNU.VK)(this,_increment,(()=>{let current=parseInt(this.value.toString());Number.isNaN(current)&&(current=2===this.length?this.min:(new Date).getFullYear()-1),this.value=(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,clamp_fn).call(this,current+1),(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,dispatchChangeEvent_fn).call(this)})),(0,chunk_QU3DSPNU.VK)(this,_decrement,(()=>{let current=parseInt(this.value.toString());Number.isNaN(current)&&(current=2===this.length?this.max:(new Date).getFullYear()+1),this.value=(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,clamp_fn).call(this,current-1),(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,dispatchChangeEvent_fn).call(this)})),(0,chunk_QU3DSPNU.VK)(this,_handleClick,(e=>{e.stopPropagation(),e.preventDefault(),this.focus()})),(0,chunk_QU3DSPNU.VK)(this,_handleFocus,(()=>{(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,clearInputBuffer_fn).call(this)})),(0,chunk_QU3DSPNU.VK)(this,_handleBlur,(()=>{""!==(0,chunk_QU3DSPNU.S7)(this,_inputBuffer)&&((0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,clearInputBuffer_fn).call(this),this.value=(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,clamp_fn).call(this,parseInt(this.value.toString())),(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,dispatchChangeEvent_fn).call(this))})),(0,chunk_QU3DSPNU.VK)(this,_handleWheel,(e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?(0,chunk_QU3DSPNU.S7)(this,_decrement).call(this):(0,chunk_QU3DSPNU.S7)(this,_increment).call(this)})),(0,chunk_QU3DSPNU.VK)(this,_handleKeyDown,(e=>{let handled=!1;if("ArrowUp"===e.key)(0,chunk_QU3DSPNU.S7)(this,_increment).call(this),handled=!0;else if("ArrowDown"===e.key)(0,chunk_QU3DSPNU.S7)(this,_decrement).call(this),handled=!0;else{const key=parseInt(e.key);isNaN(key)||((0,chunk_QU3DSPNU.S7)(this,_inputBuffer).length<this.length&&((0,chunk_QU3DSPNU.OV)(this,_inputBuffer,(0,chunk_QU3DSPNU.S7)(this,_inputBuffer)+key.toString()),this.value=parseInt((0,chunk_QU3DSPNU.S7)(this,_inputBuffer))),(0,chunk_QU3DSPNU.S7)(this,_inputBuffer).length===this.length&&(this.value=(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,clamp_fn).call(this,this.value),(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,clearInputBuffer_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,focusNextSpinner_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,dispatchChangeEvent_fn).call(this)),handled=!0)}handled&&(e.preventDefault(),e.stopPropagation())}))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",(0,chunk_QU3DSPNU.S7)(this,_handleWheel)),this.addEventListener("keydown",(0,chunk_QU3DSPNU.S7)(this,_handleKeyDown)),this.addEventListener("blur",(0,chunk_QU3DSPNU.S7)(this,_handleBlur)),this.addEventListener("focus",(0,chunk_QU3DSPNU.S7)(this,_handleFocus)),this.addEventListener("click",(0,chunk_QU3DSPNU.S7)(this,_handleClick)),this.addEventListener("mousedown",(0,chunk_QU3DSPNU.S7)(this,_handleClick))}focus(options){super.focus(options),(0,chunk_QU3DSPNU.S7)(this,_handleFocus).call(this)}render(){return custom_element_scoping.qy`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=(0,chunk_QU3DSPNU.jq)(this,_GdsDatePartSpinner_instances,formatNumber_fn).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};_inputBuffer=new WeakMap,_increment=new WeakMap,_decrement=new WeakMap,_handleClick=new WeakMap,_handleFocus=new WeakMap,_handleBlur=new WeakMap,_handleWheel=new WeakMap,_handleKeyDown=new WeakMap,_GdsDatePartSpinner_instances=new WeakSet,focusNextSpinner_fn=function(){let nextSpinner=this.nextElementSibling;for(;nextSpinner;){if(nextSpinner instanceof GdsDatePartSpinner){nextSpinner.focus();break}nextSpinner=nextSpinner.nextElementSibling}},dispatchChangeEvent_fn=function(){this.dispatchCustomEvent("change",{detail:{value:this.value.toString()}})},formatNumber_fn=function(num,padZeros){return String(num).padStart(padZeros,"0")},clamp_fn=function(value){return Math.max(this.min,Math.min(this.max,value))},clearInputBuffer_fn=function(){(0,chunk_QU3DSPNU.OV)(this,_inputBuffer,"")},GdsDatePartSpinner.formAssociated=!0,(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"value",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"length",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemin"})],GdsDatePartSpinner.prototype,"min",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemax"})],GdsDatePartSpinner.prototype,"max",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsDatePartSpinner.prototype,"displayValue",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],GdsDatePartSpinner.prototype,"_refreshDisplayValue",1),GdsDatePartSpinner=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-date-part-spinner")],GdsDatePartSpinner);var _valueOnOpen,_Datepicker_instances,shouldShowFooter_fn,renderBackToValidRangeButton_fn,focusDate_fn,getSpinnerLabel_fn,getMinSpinnerValue_fn,getMaxSpinnerValue_fn,datepicker_component_dispatchChangeEvent_fn,dispatchInputEvent_fn,_handleFieldFocusOut,_handleSpinnerFocus,_handleClipboardCopy,_handleClipboardPaste,_handleFieldClick,_handleCalendarChange,_handleMonthChange,_handleYearChange,_handleIncrementFocusedMonth,_handleDecrementFocusedMonth,_handleCalendarFocusChange,_handlePopoverStateChange,_handleSpinnerKeydown,parseDateFormat_fn,_handleSpinnerChange,_spinnerState,years_get,isValueOutsideRange_get,datepicker_styles_default=lit.AH`
  @layer base, reset;

  @layer base {
    #calendar-button::part(_button) {
      outline-offset: -1px;
    }

    .spinners {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      inline-size: 12ch;
      gap: var(--gds-sys-space-4xs);
      font: var(--gds-sys-text-detail-regular-m);
    }

    :host([size='small']) .spinners {
      font: var(--gds-sys-text-detail-regular-s);
    }

    .spinner {
      display: flex;
      align-items: center;
      justify-content: center;
      text-align: center;
      height: 100%;
      box-sizing: border-box;
      outline: none;
      padding-block: var(--gds-sys-space-3xs);
      text-transform: uppercase;
      line-height: 1;
      text-align: center;
      padding: var(--gds-sys-space-3xs);
      margin: calc(-1 * var(--gds-sys-space-3xs));
      border-radius: var(--gds-sys-radius-2xs);

      &:focus-visible {
        background-color: var(--gds-sys-color-l3-neutral-01);
        color: var(--gds-sys-color-content-inversed);
      }
    }
  }
`;let Datepicker=class extends form_control.S{constructor(){var _this;super(),_this=this,(0,chunk_QU3DSPNU.VK)(this,_Datepicker_instances),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.open=!1,this.supportingText="",this.size="large",this.plain=!1,this.showWeekNumbers=!1,this.hideLabel=!1,this.clearable=!1,this.hideTodayButton=!1,this.disabledWeekends=!1,this.showExtendedSupportingText=!1,this._focusedMonth=(new Date).getMonth(),this._focusedYear=(new Date).getFullYear(),this._dateFormatLayout=(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,parseDateFormat_fn).call(this,"y-m-d"),(0,chunk_QU3DSPNU.VK)(this,_valueOnOpen),(0,chunk_QU3DSPNU.VK)(this,_handleFieldFocusOut,(e=>{this._elTrigger.then((_=>{const parent=e.relatedTarget?.parentElement;parent!==e.target&&document.getSelection()?.removeAllRanges()}))})),(0,chunk_QU3DSPNU.VK)(this,_handleSpinnerFocus,(e=>{this._elTrigger.then((field=>{document.getSelection()?.removeAllRanges();const range=new Range;range.setStart(field.firstChild,0),range.setEnd(field.lastChild,4),document.getSelection()?.addRange(range)}))})),(0,chunk_QU3DSPNU.VK)(this,_handleClipboardCopy,(e=>{this._elFieldAsync.then((field=>{e.currentTarget===field&&(e.preventDefault(),e.clipboardData?.setData("text/plain",this.displayValue))}))})),(0,chunk_QU3DSPNU.VK)(this,_handleClipboardPaste,(e=>{this._elFieldAsync.then((field=>{if(e.currentTarget!==field)return;e.preventDefault();const pasted=e.clipboardData?.getData("text/plain");if(!pasted)return;let pastedDate=new Date("-");const parts=pasted.split(this._dateFormatLayout.delimiter);if(3===parts.length){const layout=this._dateFormatLayout.layout,year=parseInt(parts[layout.findIndex((f=>"y"===f.token))]),month=parseInt(parts[layout.findIndex((f=>"m"===f.token))])-1,day=parseInt(parts[layout.findIndex((f=>"d"===f.token))]);isNaN(year)||isNaN(month)||isNaN(day)||(pastedDate=new Date(`${year}-${month+1}-${day}`))}"Invalid Date"===pastedDate.toString()&&(pastedDate=new Date(pasted),"Invalid Date"===pastedDate.toString())||(this.value=pastedDate,(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,datepicker_component_dispatchChangeEvent_fn).call(this))}))})),(0,chunk_QU3DSPNU.VK)(this,_handleFieldClick,(e=>{this._elSpinners[0]?.focus()})),(0,chunk_QU3DSPNU.VK)(this,_handleCalendarChange,(e=>{e.stopPropagation(),this.value=new Date(e.detail),this.open=!1,(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,datepicker_component_dispatchChangeEvent_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,dispatchInputEvent_fn).call(this)})),(0,chunk_QU3DSPNU.VK)(this,_handleMonthChange,(e=>{e.stopPropagation(),this._focusedMonth=e.target?.value})),(0,chunk_QU3DSPNU.VK)(this,_handleYearChange,(e=>{e.stopPropagation(),this._focusedYear=e.target?.value})),(0,chunk_QU3DSPNU.VK)(this,_handleIncrementFocusedMonth,(_e=>{this._focusedMonth<11?this._focusedMonth++:11==this._focusedMonth&&this._focusedYear!=this.max.getFullYear()&&(this._focusedMonth=0,this._focusedYear++)})),(0,chunk_QU3DSPNU.VK)(this,_handleDecrementFocusedMonth,(_e=>{this._focusedMonth>0?this._focusedMonth--:0==this._focusedMonth&&this._focusedYear!=this.min.getFullYear()&&(this._focusedMonth=11,this._focusedYear--)})),(0,chunk_QU3DSPNU.VK)(this,_handleCalendarFocusChange,(0,asyncToGenerator.A)((function*(){_this._focusedMonth=(yield _this._elCalendar).focusedMonth,_this._focusedYear=(yield _this._elCalendar).focusedYear,_this.value=new Date((yield _this._elCalendar).focusedDate),_this.requestUpdate(),(0,chunk_QU3DSPNU.jq)(_this,_Datepicker_instances,dispatchInputEvent_fn).call(_this)}))),(0,chunk_QU3DSPNU.VK)(this,_handlePopoverStateChange,function(){var _ref2=(0,asyncToGenerator.A)((function*(e){if(e.target===e.currentTarget){if(_this.open=e.detail.open,"close"===e.detail.reason){const calValue=(yield _this._elCalendar).value;if(!calValue)return _this.value=void 0,void(0,chunk_QU3DSPNU.jq)(_this,_Datepicker_instances,datepicker_component_dispatchChangeEvent_fn).call(_this);!(0,isSameDay.r)(calValue||new Date(0),(0,chunk_QU3DSPNU.S7)(_this,_valueOnOpen)||new Date(0))&&(_this.value=new Date(calValue),(0,chunk_QU3DSPNU.jq)(_this,_Datepicker_instances,datepicker_component_dispatchChangeEvent_fn).call(_this)),_this.value&&(_this._focusedMonth=_this.value.getMonth(),_this._focusedYear=_this.value.getFullYear())}"cancel"===e.detail.reason&&(_this.value=(0,chunk_QU3DSPNU.S7)(_this,_valueOnOpen),(0,chunk_QU3DSPNU.jq)(_this,_Datepicker_instances,dispatchInputEvent_fn).call(_this))}}));return function(_x){return _ref2.apply(this,arguments)}}()),(0,chunk_QU3DSPNU.VK)(this,_handleSpinnerKeydown,(e=>{const index=Array.from(this._elSpinners).findIndex((spinner=>spinner===e.target));if("ArrowRight"===e.key){const next=this._elSpinners[index+1];next&&next.focus()}if("ArrowLeft"===e.key){const prev=this._elSpinners[index-1];prev&&prev.focus()}})),(0,chunk_QU3DSPNU.VK)(this,_handleSpinnerChange,((val,name)=>{(0,chunk_QU3DSPNU.S7)(this,_spinnerState)[name]=val;const newDate=new Date;newDate.setFullYear(parseInt((0,chunk_QU3DSPNU.S7)(this,_spinnerState).year)),newDate.setMonth(parseInt((0,chunk_QU3DSPNU.S7)(this,_spinnerState).month)-1),newDate.setDate(parseInt((0,chunk_QU3DSPNU.S7)(this,_spinnerState).day)),newDate.setHours(12,0,0,0),"Invalid Date"!==newDate.toString()&&(this.value=newDate,(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,datepicker_component_dispatchChangeEvent_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,dispatchInputEvent_fn).call(this))})),(0,chunk_QU3DSPNU.VK)(this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"}),GdsDatePartSpinner.define()}get type(){return"gds-datepicker"}get value(){return super.value}set value(value){super.value=value}get dateformat(){return this._dateFormatLayout.layout.map((f=>f.token)).join(this._dateFormatLayout.delimiter)}set dateformat(dateformat){this._dateFormatLayout=(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,parseDateFormat_fn).call(this,dateformat)}getFocusedDate(){var _this2=this;return(0,asyncToGenerator.A)((function*(){return _this2.open?_this2._elCalendar.then((el=>el.focusedDate)):void 0}))()}get displayValue(){return this._elField.innerText.replace(/\s+/g,"")}test_getDateCell(dayNumber){var _this3=this;return(0,asyncToGenerator.A)((function*(){return _this3._elCalendar.then((el=>el.getDateCell(dayNumber)))}))()}connectedCallback(){super.connectedCallback(),transitional_styles.n.instance.apply(this,"gds-datepicker")}focus(options){this._getValidityAnchor()?.focus(options)}render(){var _this4=this;return custom_element_scoping.qy`
      ${(0,when.z)(!this.plain,(()=>custom_element_scoping.qy`<gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="spinner-0" slot="label">${this.label}</label>
            ${(0,when.z)(this.supportingText.length>0,(()=>custom_element_scoping.qy`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`))}
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
          </gds-form-control-header>`))}
      <gds-field-base
        .size=${this.size}
        .disabled=${this.disabled}
        .invalid=${this.invalid}
        @click=${(0,chunk_QU3DSPNU.S7)(this,_handleFieldClick)}
        @copy=${(0,chunk_QU3DSPNU.S7)(this,_handleClipboardCopy)}
        @paste=${(0,chunk_QU3DSPNU.S7)(this,_handleClipboardPaste)}
        id="field"
      >
        <div class="spinners">
          ${(0,join.f)((0,map.T)(this._dateFormatLayout.layout,((f,i)=>custom_element_scoping.qy`<gds-date-part-spinner
                  id="spinner-${i}"
                  aria-invalid="${this.invalid}"
                  class="spinner"
                  .length=${"y"===f.token?4:2}
                  .value=${(0,chunk_QU3DSPNU.S7)(this,_spinnerState)[f.name]}
                  aria-valuemin=${(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,getMinSpinnerValue_fn).call(this,f.name)}
                  aria-valuemax=${(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,getMaxSpinnerValue_fn).call(this,f.name)}
                  aria-label=${(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,getSpinnerLabel_fn).call(this,f.name)}
                  aria-describedby="supporting-text supporting-text-slot sub-label-slot message"
                  data-max-width=${(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,getMaxSpinnerValue_fn).call(this,f.name).toString().length}
                  @keydown=${(0,chunk_QU3DSPNU.S7)(this,_handleSpinnerKeydown)}
                  @change=${e=>(0,chunk_QU3DSPNU.S7)(this,_handleSpinnerChange).call(this,e.detail.value,f.name)}
                  @focus=${(0,chunk_QU3DSPNU.S7)(this,_handleSpinnerFocus)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`)),custom_element_scoping.qy`<span class="separator"
              >${this._dateFormatLayout.delimiter}</span
            >`)}
        </div>
        <gds-button
          id="calendar-button"
          slot="action"
          size="${"small"===this.size?"xs":"small"}"
          rank="tertiary"
          variant=${this.invalid?"negative":""}
          aria-label="${(0,lit_localize.ab)("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          .disabled=${this.disabled}
        >
          ${(0,when.z)("small"===this.size,(()=>custom_element_scoping.qy`<gds-icon-calender-add
                stroke="1.6"
                style="line-height: 16px"
              ></gds-icon-calender-add>`),(()=>custom_element_scoping.qy`<gds-icon-calender-add></gds-icon-calender-add>`))}
        </gds-button>
      </gds-field-base>

      ${(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,shouldShowFooter_fn).call(this),(()=>custom_element_scoping.qy`<gds-form-control-footer
            class="size-${this.size}"
            .errorMessage=${this.invalid?this.errorMessage:void 0}
          >
            ${""}
            <slot id="message" name="message" slot="message">
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            </slot>
          </gds-form-control-footer>`))}

      <gds-popover
        autofocus
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elFieldAsync}
        .open=${this.open}
        @gds-ui-state=${(0,chunk_QU3DSPNU.S7)(this,_handlePopoverStateChange)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${function(){var _ref3=(0,asyncToGenerator.A)((function*(e){"calendar-popover"===e.target?.id&&_this4._elCalendar.then((cal=>cal.focus()))}));return function(_x2){return _ref3.apply(this,arguments)}}()}
      >
        <gds-div overflow="auto">
          <gds-flex
            align-items="center"
            justify-content="space-between"
            gap="s"
            padding="m m 0 m"
          >
            <gds-button
              @click=${(0,chunk_QU3DSPNU.S7)(this,_handleDecrementFocusedMonth)}
              aria-label=${(0,lit_localize.ab)("Switch to previous month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-left></gds-icon-chevron-left>
            </gds-button>
            <gds-dropdown
              .value=${this._focusedMonth.toString()}
              @change=${(0,chunk_QU3DSPNU.S7)(this,_handleMonthChange)}
              .maxHeight=${300}
              label="${(0,lit_localize.ab)("Month")}"
              size="small"
              class="month"
              hide-label
            >
              <gds-option value="0">${(0,lit_localize.ab)("January")}</gds-option>
              <gds-option value="1">${(0,lit_localize.ab)("February")}</gds-option>
              <gds-option value="2">${(0,lit_localize.ab)("March")}</gds-option>
              <gds-option value="3">${(0,lit_localize.ab)("April")}</gds-option>
              <gds-option value="4">${(0,lit_localize.ab)("May")}</gds-option>
              <gds-option value="5">${(0,lit_localize.ab)("June")}</gds-option>
              <gds-option value="6">${(0,lit_localize.ab)("July")}</gds-option>
              <gds-option value="7">${(0,lit_localize.ab)("August")}</gds-option>
              <gds-option value="8">${(0,lit_localize.ab)("September")}</gds-option>
              <gds-option value="9">${(0,lit_localize.ab)("October")}</gds-option>
              <gds-option value="10">${(0,lit_localize.ab)("November")}</gds-option>
              <gds-option value="11">${(0,lit_localize.ab)("December")}</gds-option>
            </gds-dropdown>
            <gds-dropdown
              .value=${this._focusedYear.toString()}
              @change=${(0,chunk_QU3DSPNU.S7)(this,_handleYearChange)}
              .maxHeight=${300}
              label="${(0,lit_localize.ab)("Year")}"
              size="small"
              class="year"
              hide-label
            >
              ${(0,repeat.u)((0,chunk_QU3DSPNU.S7)(this,_Datepicker_instances,years_get),(year=>year),(year=>custom_element_scoping.qy`<gds-option value=${year}>${year}</gds-option>`))}
            </gds-dropdown>
            <gds-button
              @click=${(0,chunk_QU3DSPNU.S7)(this,_handleIncrementFocusedMonth)}
              aria-label=${(0,lit_localize.ab)("Switch to next month")}
              rank="tertiary"
              size="small"
            >
              <gds-icon-chevron-right></gds-icon-chevron-right>
            </gds-button>
          </gds-flex>

          <gds-calendar
            id="calendar"
            @change=${(0,chunk_QU3DSPNU.S7)(this,_handleCalendarChange)}
            @gds-date-focused=${(0,chunk_QU3DSPNU.S7)(this,_handleCalendarFocusChange)}
            .focusedMonth=${this._focusedMonth}
            .focusedYear=${this._focusedYear}
            .value=${this.value}
            .min=${this.min}
            .max=${this.max}
            .showWeekNumbers=${this.showWeekNumbers}
            .disabledWeekends=${this.disabledWeekends}
            .disabledDates=${this.disabledDates}
          ></gds-calendar>

          ${(0,when.z)(this.clearable||!this.hideTodayButton,(()=>custom_element_scoping.qy`
              <gds-flex
                align-items="center"
                justify-content="space-between"
                padding="m m m m"
              >
                ${(0,when.z)(this.clearable,(()=>custom_element_scoping.qy` <gds-button
                      id="clear-button"
                      rank="tertiary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,dispatchInputEvent_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,datepicker_component_dispatchChangeEvent_fn).call(this)}}
                      aria-label=${(0,lit_localize.ab)("Clear selected date")}
                    >
                      ${(0,lit_localize.ab)("Clear")}
                    </gds-button>`))}
                ${(0,until.T)((0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,renderBackToValidRangeButton_fn).call(this),lit.s6)}
                ${(0,when.z)(!this.hideTodayButton,(()=>custom_element_scoping.qy` <gds-button
                      id="today-button"
                      rank="primary"
                      size="small"
                      @click=${e=>{e.stopPropagation(),(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,focusDate_fn).call(this,new Date)}}
                      aria-label=${(0,lit_localize.ab)("Select today's date")}
                    >
                      ${(0,lit_localize.ab)("Today")}
                    </gds-button>`))}
              </gds-flex>
            `))}
        </gds-div>
      </gds-popover>
    `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(""===this.value&&(this.value=void 0),!this.value)return void(0,chunk_QU3DSPNU.OV)(this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"});const date=this.value;this._focusedMonth=date.getMonth(),this._focusedYear=date.getFullYear();const year=date.getFullYear().toString(),month=(date.getMonth()+1).toString().padStart(2,"0"),day=date.getDate().toString().padStart(2,"0");(0,chunk_QU3DSPNU.OV)(this,_spinnerState,{year,month,day})}_handleOpenChange(){this.open&&((0,chunk_QU3DSPNU.OV)(this,_valueOnOpen,this.value),this._elCalendar.then((el=>el.focus())))}};_valueOnOpen=new WeakMap,_Datepicker_instances=new WeakSet,shouldShowFooter_fn=function(){return!this.plain},renderBackToValidRangeButton_fn=function(){var _ref4=(0,asyncToGenerator.A)((function*(){const focusedDate=yield this.getFocusedDate();let buttonAction,buttonTxt="";return focusedDate&&focusedDate>this.max?(buttonTxt=(0,lit_localize.ab)("Last available date"),buttonAction=e=>{e.stopPropagation(),(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,focusDate_fn).call(this,this.max)}):focusedDate&&focusedDate<this.min&&(buttonTxt=(0,lit_localize.ab)("First available date"),buttonAction=e=>{e.stopPropagation(),(0,chunk_QU3DSPNU.jq)(this,_Datepicker_instances,focusDate_fn).call(this,this.min)}),custom_element_scoping.qy`${(0,when.z)(buttonTxt.length>0,(()=>custom_element_scoping.qy`<gds-button rank="tertiary" size="small" @click=${buttonAction}>
          ${buttonTxt}
        </gds-button>`),(()=>lit.s6))}`}));return function renderBackToValidRangeButton_fn(){return _ref4.apply(this,arguments)}}(),focusDate_fn=function(d){const focusDate=new Date(d);this._elCalendar.then((el=>el.focusedDate=focusDate)).then((0,chunk_QU3DSPNU.S7)(this,_handleCalendarFocusChange))},getSpinnerLabel_fn=function(name){return`${{year:(0,lit_localize.ab)("Year"),month:(0,lit_localize.ab)("Month"),day:(0,lit_localize.ab)("Day")}[name]} ${this.label}`},getMinSpinnerValue_fn=function(name){return{year:1900,month:1,day:1}[name]},getMaxSpinnerValue_fn=function(name){return{year:9999,month:12,day:31}[name]},datepicker_component_dispatchChangeEvent_fn=function(){this.updateComplete.then((()=>this.dispatchStandardEvent("change",{bubbles:!0,composed:!0})))},dispatchInputEvent_fn=function(){this.updateComplete.then((()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})))},_handleFieldFocusOut=new WeakMap,_handleSpinnerFocus=new WeakMap,_handleClipboardCopy=new WeakMap,_handleClipboardPaste=new WeakMap,_handleFieldClick=new WeakMap,_handleCalendarChange=new WeakMap,_handleMonthChange=new WeakMap,_handleYearChange=new WeakMap,_handleIncrementFocusedMonth=new WeakMap,_handleDecrementFocusedMonth=new WeakMap,_handleCalendarFocusChange=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleSpinnerKeydown=new WeakMap,parseDateFormat_fn=function(dateformat){const delimiter=dateformat.replace(/[a-z0-9]/gi,"")[0],format=dateformat.split(delimiter),year=format.findIndex((f=>"y"===f)),month=format.findIndex((f=>"m"===f)),day=format.findIndex((f=>"d"===f));if(-1===year||-1===month||-1===day)throw new Error("Invalid date format for <gds-datepicker>");return{delimiter,layout:[year,month,day].sort(((a,b)=>a-b)).map((i=>format[i])).map((f=>({token:f,name:"y"===f?"year":"m"===f?"month":"day"})))}},_handleSpinnerChange=new WeakMap,_spinnerState=new WeakMap,years_get=function(){const minYear=this.min.getFullYear(),maxYear=this.max.getFullYear(),isOutsideRange=(0,chunk_QU3DSPNU.S7)(this,_Datepicker_instances,isValueOutsideRange_get),valueYear=this.value?.getFullYear();return{*[Symbol.iterator](){isOutsideRange&&(yield valueYear);for(let i=minYear;i<=maxYear;i++)yield i}}},isValueOutsideRange_get=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},Datepicker.styles=[tokens_style.LU,form_control_host_style.A,datepicker_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({converter:attribute_converters.JD})],Datepicker.prototype,"value",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({converter:attribute_converters.JD})],Datepicker.prototype,"min",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({converter:attribute_converters.JD})],Datepicker.prototype,"max",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Datepicker.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],Datepicker.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],Datepicker.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],Datepicker.prototype,"plain",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"show-week-numbers"})],Datepicker.prototype,"showWeekNumbers",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-label"})],Datepicker.prototype,"hideLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"clearable"})],Datepicker.prototype,"clearable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-today-button"})],Datepicker.prototype,"hideTodayButton",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Datepicker.prototype,"dateformat",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],Datepicker.prototype,"disabledWeekends",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({converter:attribute_converters._h,attribute:"disabled-dates"})],Datepicker.prototype,"disabledDates",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],Datepicker.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#calendar-button")],Datepicker.prototype,"test_calendarButton",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#clear-button")],Datepicker.prototype,"test_clearButton",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#today-button")],Datepicker.prototype,"test_todayButton",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],Datepicker.prototype,"_focusedMonth",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],Datepicker.prototype,"_focusedYear",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],Datepicker.prototype,"_dateFormatLayout",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#calendar")],Datepicker.prototype,"_elCalendar",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#calendar-button")],Datepicker.prototype,"_elTrigger",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#field")],Datepicker.prototype,"_elFieldAsync",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.YG)("[role=spinbutton]")],Datepicker.prototype,"_elSpinners",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#field")],Datepicker.prototype,"_elField",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],Datepicker.prototype,"_handleValueChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("open")],Datepicker.prototype,"_handleOpenChange",1),Datepicker=(0,chunk_QU3DSPNU.Cc)([(0,lit_localize.cc)()],Datepicker);let GdsDatepicker=class extends((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(Datepicker)))){};GdsDatepicker=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-datepicker",{dependsOn:[flex_component.o,button_component.t,dropdown_component.E,calendar_component.x,popover_component.E,icons_calendar_component._,calender_add_component.z,chevron_left_component.g,chevron_right_component.V]})],GdsDatepicker)},"./dist/libs/core/src/components/icon/icons/calendar.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{_:()=>IconCalendar});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconCalendar=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconCalendar._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCalendar._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',IconCalendar._name="calendar",IconCalendar._width=24,IconCalendar._height=24,IconCalendar._viewBox="0 0 24 24",IconCalendar=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-calendar")],IconCalendar)},"./dist/libs/core/src/components/icon/icons/calender-add.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>IconCalenderAdd});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconCalenderAdd=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconCalenderAdd._regularSVG='<path d="M7.75 4.75H3.75V9.25M7.75 4.75H16.25M7.75 4.75V2.75M16.25 4.75H20.25V9.25M16.25 4.75V2.75M11.25 20.25H3.75V9.25M3.75 9.25H20.25M20.25 9.25V11.25M17.75 14.75V18M17.75 18V21.25M17.75 18H14.5M17.75 18H21" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCalenderAdd._solidSVG='<path d="M8.5 2.75C8.5 2.33579 8.16421 2 7.75 2C7.33579 2 7 2.33579 7 2.75V4H3.75C3.33579 4 3 4.33579 3 4.75V20.25C3 20.6642 3.33579 21 3.75 21H11.25C11.6642 21 12 20.6642 12 20.25C12 19.8358 11.6642 19.5 11.25 19.5H4.5V10H19.5V11.25C19.5 11.6642 19.8358 12 20.25 12C20.6642 12 21 11.6642 21 11.25V4.75C21 4.33579 20.6642 4 20.25 4H17V2.75C17 2.33579 16.6642 2 16.25 2C15.8358 2 15.5 2.33579 15.5 2.75V4H8.5V2.75Z" fill="currentColor"/><path d="M18.5 14.75C18.5 14.3358 18.1642 14 17.75 14C17.3358 14 17 14.3358 17 14.75V17.25H14.5C14.0858 17.25 13.75 17.5858 13.75 18C13.75 18.4142 14.0858 18.75 14.5 18.75H17V21.25C17 21.6642 17.3358 22 17.75 22C18.1642 22 18.5 21.6642 18.5 21.25V18.75H21C21.4142 18.75 21.75 18.4142 21.75 18C21.75 17.5858 21.4142 17.25 21 17.25H18.5V14.75Z" fill="currentColor"/>',IconCalenderAdd._name="calender-add",IconCalenderAdd._width=24,IconCalenderAdd._height=24,IconCalenderAdd._viewBox="0 0 24 24",IconCalenderAdd=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-calender-add")],IconCalenderAdd)},"./dist/libs/core/src/components/icon/icons/chevron-left.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{g:()=>IconChevronLeft});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconChevronLeft=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconChevronLeft._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronLeft._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',IconChevronLeft._name="chevron-left",IconChevronLeft._width=24,IconChevronLeft._height=24,IconChevronLeft._viewBox="0 0 24 24",IconChevronLeft=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-chevron-left")],IconChevronLeft)},"./dist/libs/core/src/components/icon/icons/chevron-right.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>IconChevronRight});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconChevronRight=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconChevronRight._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronRight._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',IconChevronRight._name="chevron-right",IconChevronRight._width=24,IconChevronRight._height=24,IconChevronRight._viewBox="0 0 24 24",IconChevronRight=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-chevron-right")],IconChevronRight)},"./dist/libs/core/src/utils/helpers/attribute-converters.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");const dateConverter={fromAttribute:value=>new Date(value),toAttribute:value=>value.toISOString()},dateArrayConverter={fromAttribute:value=>value.split(",").map((d=>new Date(d.trim()))),toAttribute:value=>JSON.stringify(value.map((d=>d.toISOString())))},stringArrayConverter={fromAttribute:value=>value.split(","),toAttribute:value=>Array.isArray(value)?value.join(","):value}}}]);
//# sourceMappingURL=7568.d9a304f0.iframe.bundle.js.map
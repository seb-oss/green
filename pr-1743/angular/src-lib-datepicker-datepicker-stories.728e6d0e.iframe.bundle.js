"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7755],{"./dist/libs/core/src/chunks/chunk.C3ECHGX7.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{JD:()=>dateConverter,_h:()=>dateArrayConverter,xj:()=>stringArrayConverter});var dateConverter={fromAttribute:value=>new Date(value),toAttribute:value=>value.toISOString()},dateArrayConverter={fromAttribute:value=>value.split(",").map((d=>new Date(d.trim()))),toAttribute:value=>JSON.stringify(value.map((d=>d.toISOString())))},stringArrayConverter={fromAttribute:value=>value.split(","),toAttribute:value=>Array.isArray(value)?value.join(","):value}},"./libs/extract/src/index.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{pS:()=>PaginationI18n,Ud:()=>calculateDegrees,jz:()=>getSliderTrackBackground,zE:()=>randomId,SE:()=>sliderColors});const randomId=()=>"gds-"+Math.random().toString(36).substring(2,9),PaginationI18n={paginationLabel:"Pagination",nextPageLabel:"Next page",previousPageLabel:"Previous page",firstPageLabel:"First page",lastPageLabel:"Last page",jumpToPageLabel:"Go to page",getPageLabel:index=>`Page ${index+1}`},calculateDegrees=percent=>percent>100?180:percent<0?0:1.8*percent,sliderColors={primary:"#007ac7",disabled:"#dedede"},getSliderTrackBackground=val=>`linear-gradient(\n        to right,\n        ${sliderColors.primary} 0%,\n        ${sliderColors.primary} ${val}%,\n        ${sliderColors.disabled} ${val}%,\n        ${sliderColors.disabled} 100%\n      )`},"./libs/angular/src/lib/datepicker/datepicker.stories.ts":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{CustomOptions:()=>CustomOptions,Form:()=>Form,Simple:()=>Simple,__namedExportsOrder:()=>__namedExportsOrder,default:()=>datepicker_stories});var fesm2022_forms=__webpack_require__("./node_modules/@angular/forms/fesm2022/forms.mjs"),dist=__webpack_require__("./node_modules/@storybook/angular/dist/index.mjs"),startOfYear=__webpack_require__("./node_modules/date-fns/esm/startOfYear/index.js"),subYears=__webpack_require__("./node_modules/date-fns/esm/subYears/index.js"),tslib_es6=__webpack_require__("./node_modules/tslib/tslib.es6.mjs");var _valueOnOpen,_renderBackToValidRangeButton,renderBackToValidRangeButton_fn,_focusDate,focusDate_fn,_getSpinnerLabel,getSpinnerLabel_fn,_getMinSpinnerValue,getMinSpinnerValue_fn,_getMaxSpinnerValue,getMaxSpinnerValue_fn,_dispatchChangeEvent,dispatchChangeEvent_fn,_dispatchInputEvent,dispatchInputEvent_fn,_handleFieldFocusOut,_handleSpinnerFocus,_handleClipboardCopy,_handleClipboardPaste,_handleFieldClick,_handleCalendarChange,_handleMonthChange,_handleYearChange,_handleIncrementFocusedMonth,_handleDecrementFocusedMonth,_handleCalendarFocusChange,_handlePopoverStateChange,_handleSpinnerKeydown,_parseDateFormat,parseDateFormat_fn,_handleSpinnerChange,_spinnerState,_years,years_get,_isValueOutsideRange,isValueOutsideRange_get,core=__webpack_require__("./node_modules/@angular/core/fesm2022/core.mjs"),startOfDay=__webpack_require__("./node_modules/date-fns/esm/startOfDay/index.js"),endOfDay=__webpack_require__("./node_modules/date-fns/esm/endOfDay/index.js"),src=__webpack_require__("./libs/extract/src/index.ts"),asyncToGenerator=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),chunk_C3ECHGX7=__webpack_require__("./dist/libs/core/src/chunks/chunk.C3ECHGX7.js"),chunk_JPBBNSKG=__webpack_require__("./dist/libs/core/src/chunks/chunk.JPBBNSKG.js"),chunk_JMP5YJFE=__webpack_require__("./dist/libs/core/src/chunks/chunk.JMP5YJFE.js"),chunk_TYGMNHNO=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),chunk_BNRQOOG2=__webpack_require__("./dist/libs/core/src/chunks/chunk.BNRQOOG2.js"),chunk_MLXMQIEV=__webpack_require__("./dist/libs/core/src/chunks/chunk.MLXMQIEV.js"),chunk_SEHSDSX2=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),join=__webpack_require__("./node_modules/lit-html/directives/join.js"),map=__webpack_require__("./node_modules/lit-html/directives/map.js"),repeat=__webpack_require__("./node_modules/lit/directives/repeat.js"),until=__webpack_require__("./node_modules/lit/directives/until.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),isSameDay=__webpack_require__("./node_modules/date-fns/esm/isSameDay/index.js"),styles=lit.AH`
  @layer base, reset;

  @layer base {
    :host {
      font-family: inherit;
      display: flex;
      flex-direction: column;
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      width: 100%;
      padding-inline: var(--gds-space-s);
      padding-block-start: var(--gds-space-m);
      gap: var(--gds-space-xs);
      box-sizing: border-box;
    }

    .header gds-dropdown.month {
      min-width: 140px;
      flex: 1;
    }

    .header gds-dropdown.year {
      width: 110px;
    }

    .footer {
      display: flex;
      justify-content: space-between;
      padding-inline: var(--gds-space-s);
      padding-block-end: var(--gds-space-s);
    }

    label {
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-book);
      font-family: inherit;
    }

    .form-info {
      font-size: var(--gds-text-size-detail-s);
      line-height: var(--gds-text-line-height-detail-s);
      font-weight: var(--gds-text-weight-regular);
    }

    .field {
      display: flex;
      justify-content: space-between;
      gap: var(--gds-space-2xs);
      padding: var(--gds-space-2xs);
      border-radius: var(--gds-space-xs);
      font-size: var(--gds-text-size-detail-m);
      line-height: var(--gds-text-line-height-detail-m);
      font-weight: var(--gds-text-weight-regular);
      font-family: inherit;
      overflow: hidden;
      margin-block: var(--gds-space-xs);
      max-width: 100%;
      cursor: pointer;
      color: currentColor;
      height: var(--gds-space-3xl);
      box-sizing: border-box;
      border-width: var(--gds-space-4xs);
      border-style: solid;

      // TODO: Update colors with tokens
      border-color: #6f6f6f;
      color: #1b1b1b;
      background-color: #e2e2e2;

      &:hover {
        background-color: #cecece;
      }

      .input {
        display: flex;
        align-items: center;
        flex-direction: row;
        max-width: max-content;
        text-transform: uppercase;
        flex: 1;
        font-variant-numeric: tabular-nums;

        &:focus-within span {
          opacity: 0;
        }

        .spinner {
          display: flex;
          align-items: center;
          justify-content: center;
          text-align: center;
          height: 100%;
          outline-color: currentcolor;
          outline-offset: -4px;
          outline-width: var(--gds-space-3xs);
          box-sizing: border-box;
          border-radius: var(--gds-space-xs);
          padding-inline: 1ch;

          &:focus-visible {
            outline-style: solid;
          }
        }
      }

      button {
        appearance: none;
        background: transparent;
        border: 0;
        box-sizing: border-box;
        color: currentColor;
        cursor: pointer;
        aspect-ratio: 1;
        margin: 0;
        padding: 0;
        outline-color: inherit;
        outline-offset: -4px;
        border-radius: var(--gds-space-xs);
        padding-top: var(--gds-space-3xs);
        font-family: inherit;

        &:focus-visible,
        &:hover {
          outline: var(--gds-space-3xs) solid currentcolor;
        }
      }

      &.small {
        height: var(--gds-space-xl);
        font-size: var(--gds-text-size-detail-s);
        padding: 0;

        button {
          outline-offset: -4px;
          border-radius: var(--gds-space-xs);
          padding-top: 3px;
        }
      }
    }
  }
`,GdsDatepicker=class extends chunk_JPBBNSKG.S{constructor(){var _this;super(...arguments),_this=this,(0,chunk_SEHSDSX2.VK)(this,_renderBackToValidRangeButton),(0,chunk_SEHSDSX2.VK)(this,_focusDate),(0,chunk_SEHSDSX2.VK)(this,_getSpinnerLabel),(0,chunk_SEHSDSX2.VK)(this,_getMinSpinnerValue),(0,chunk_SEHSDSX2.VK)(this,_getMaxSpinnerValue),(0,chunk_SEHSDSX2.VK)(this,_dispatchChangeEvent),(0,chunk_SEHSDSX2.VK)(this,_dispatchInputEvent),(0,chunk_SEHSDSX2.VK)(this,_parseDateFormat),(0,chunk_SEHSDSX2.VK)(this,_years),(0,chunk_SEHSDSX2.VK)(this,_isValueOutsideRange),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.open=!1,this.label="",this.showWeekNumbers=!1,this.size="medium",this.hideLabel=!1,this.disabledWeekends=!1,this._focusedMonth=(new Date).getMonth(),this._focusedYear=(new Date).getFullYear(),this._dateFormatLayout=(0,chunk_SEHSDSX2.jq)(this,_parseDateFormat,parseDateFormat_fn).call(this,"y-m-d"),(0,chunk_SEHSDSX2.VK)(this,_valueOnOpen,void 0),(0,chunk_SEHSDSX2.VK)(this,_handleFieldFocusOut,(e=>{this._elTrigger.then((_=>{var _a,_b;(null==(_a=e.relatedTarget)?void 0:_a.parentElement)!==e.target&&(null==(_b=document.getSelection())||_b.removeAllRanges())}))})),(0,chunk_SEHSDSX2.VK)(this,_handleSpinnerFocus,(e=>{this._elTrigger.then((field=>{var _a,_b;null==(_a=document.getSelection())||_a.removeAllRanges();const range=new Range;range.setStart(field.firstChild,0),range.setEnd(field.lastChild,4),null==(_b=document.getSelection())||_b.addRange(range)}))})),(0,chunk_SEHSDSX2.VK)(this,_handleClipboardCopy,(e=>{this._elField.then((field=>{var _a;e.currentTarget===field&&(e.preventDefault(),null==(_a=e.clipboardData)||_a.setData("text/plain",this.displayValue))}))})),(0,chunk_SEHSDSX2.VK)(this,_handleClipboardPaste,(e=>{this._elField.then((field=>{var _a;if(e.currentTarget!==field)return;e.preventDefault();const pasted=null==(_a=e.clipboardData)?void 0:_a.getData("text/plain");if(!pasted)return;let pastedDate=new Date("-");const parts=pasted.split(this._dateFormatLayout.delimiter);if(3===parts.length){const layout=this._dateFormatLayout.layout,year=parseInt(parts[layout.findIndex((f=>"y"===f.token))]),month=parseInt(parts[layout.findIndex((f=>"m"===f.token))])-1,day=parseInt(parts[layout.findIndex((f=>"d"===f.token))]);isNaN(year)||isNaN(month)||isNaN(day)||(pastedDate=new Date(`${year}-${month+1}-${day}`))}"Invalid Date"===pastedDate.toString()&&(pastedDate=new Date(pasted),"Invalid Date"===pastedDate.toString())||(this.value=pastedDate,(0,chunk_SEHSDSX2.jq)(this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(this))}))})),(0,chunk_SEHSDSX2.VK)(this,_handleFieldClick,(e=>{var _a;null==(_a=this._elSpinners[0])||_a.focus()})),(0,chunk_SEHSDSX2.VK)(this,_handleCalendarChange,(e=>{e.stopPropagation(),this.value=e.detail,this.open=!1,(0,chunk_SEHSDSX2.jq)(this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(this)})),(0,chunk_SEHSDSX2.VK)(this,_handleMonthChange,(e=>{var _a;e.stopPropagation(),this._focusedMonth=null==(_a=e.target)?void 0:_a.value})),(0,chunk_SEHSDSX2.VK)(this,_handleYearChange,(e=>{var _a;e.stopPropagation(),this._focusedYear=null==(_a=e.target)?void 0:_a.value})),(0,chunk_SEHSDSX2.VK)(this,_handleIncrementFocusedMonth,(_e=>{this._focusedMonth++,this._focusedMonth>11&&(this._focusedMonth=0,this._focusedYear++)})),(0,chunk_SEHSDSX2.VK)(this,_handleDecrementFocusedMonth,(_e=>{this._focusedMonth--,this._focusedMonth<0&&(this._focusedMonth=11,this._focusedYear--)})),(0,chunk_SEHSDSX2.VK)(this,_handleCalendarFocusChange,(0,asyncToGenerator.A)((function*(){_this._focusedMonth=(yield _this._elCalendar).focusedMonth,_this._focusedYear=(yield _this._elCalendar).focusedYear,_this.value=(yield _this._elCalendar).focusedDate,_this.requestUpdate(),(0,chunk_SEHSDSX2.jq)(_this,_dispatchInputEvent,dispatchInputEvent_fn).call(_this)}))),(0,chunk_SEHSDSX2.VK)(this,_handlePopoverStateChange,function(){var _ref2=(0,asyncToGenerator.A)((function*(e){if(e.target===e.currentTarget){if(_this.open=e.detail.open,"close"===e.detail.reason){const calValue=(yield _this._elCalendar).value;!(0,isSameDay.A)(calValue||new Date(0),(0,chunk_SEHSDSX2.S7)(_this,_valueOnOpen)||new Date(0))&&(_this.value=calValue,(0,chunk_SEHSDSX2.jq)(_this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(_this)),_this.value&&(_this._focusedMonth=_this.value.getMonth(),_this._focusedYear=_this.value.getFullYear())}"cancel"===e.detail.reason&&(_this.value=(0,chunk_SEHSDSX2.S7)(_this,_valueOnOpen))}}));return function(_x){return _ref2.apply(this,arguments)}}()),(0,chunk_SEHSDSX2.VK)(this,_handleSpinnerKeydown,(e=>{const index=Array.from(this._elSpinners).findIndex((spinner=>spinner===e.target));if("ArrowRight"===e.key){const next=this._elSpinners[index+1];next&&next.focus()}if("ArrowLeft"===e.key){const prev=this._elSpinners[index-1];prev&&prev.focus()}})),(0,chunk_SEHSDSX2.VK)(this,_handleSpinnerChange,((val,name)=>{(0,chunk_SEHSDSX2.S7)(this,_spinnerState)[name]=val;const newDate=new Date;newDate.setFullYear(parseInt((0,chunk_SEHSDSX2.S7)(this,_spinnerState).year)),newDate.setMonth(parseInt((0,chunk_SEHSDSX2.S7)(this,_spinnerState).month)-1),newDate.setDate(parseInt((0,chunk_SEHSDSX2.S7)(this,_spinnerState).day)),newDate.setHours(12,0,0,0),"Invalid Date"!==newDate.toString()&&(this.value=newDate,(0,chunk_SEHSDSX2.jq)(this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(this))})),(0,chunk_SEHSDSX2.VK)(this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"})}get type(){return"gds-datepicker"}get dateformat(){return this._dateFormatLayout.layout.map((f=>f.token)).join(this._dateFormatLayout.delimiter)}set dateformat(dateformat){this._dateFormatLayout=(0,chunk_SEHSDSX2.jq)(this,_parseDateFormat,parseDateFormat_fn).call(this,dateformat)}getFocusedDate(){var _this2=this;return(0,asyncToGenerator.A)((function*(){return _this2.open?_this2._elCalendar.then((el=>el.focusedDate)):void 0}))()}get displayValue(){return this._elInput.innerText.replace(/\s+/g,"")}test_getDateCell(dayNumber){var _this3=this;return(0,asyncToGenerator.A)((function*(){return _this3._elCalendar.then((el=>el.getDateCell(dayNumber)))}))()}connectedCallback(){super.connectedCallback(),chunk_JMP5YJFE.nD.instance.apply(this,"gds-datepicker")}render(){var _this4=this;return chunk_MLXMQIEV.qy`${(0,when.z)(this.label&&!this.hideLabel,(()=>chunk_MLXMQIEV.qy`<label for="spinner-0" id="label">${this.label}</label>`))}

      <div class="form-info"><slot name="sub-label"></slot></div>

      <div
        class=${(0,class_map.H)({field:!0,small:"small"===this.size})}
        id="field"
        @click=${(0,chunk_SEHSDSX2.S7)(this,_handleFieldClick)}
        @copy=${(0,chunk_SEHSDSX2.S7)(this,_handleClipboardCopy)}
        @paste=${(0,chunk_SEHSDSX2.S7)(this,_handleClipboardPaste)}
      >
        <div
          class=${(0,class_map.H)({input:!0,"is-placeholder":!this.value})}
          @focusout=${(0,chunk_SEHSDSX2.S7)(this,_handleFieldFocusOut)}
        >
          ${(0,join.f)((0,map.T)(this._dateFormatLayout.layout,((f,i)=>chunk_MLXMQIEV.qy`<gds-date-part-spinner
                  id="spinner-${i}"
                  class="spinner"
                  .length=${"y"===f.token?4:2}
                  .value=${(0,chunk_SEHSDSX2.S7)(this,_spinnerState)[f.name]}
                  aria-valuemin=${(0,chunk_SEHSDSX2.jq)(this,_getMinSpinnerValue,getMinSpinnerValue_fn).call(this,f.name)}
                  aria-valuemax=${(0,chunk_SEHSDSX2.jq)(this,_getMaxSpinnerValue,getMaxSpinnerValue_fn).call(this,f.name)}
                  aria-label=${(0,chunk_SEHSDSX2.jq)(this,_getSpinnerLabel,getSpinnerLabel_fn).call(this,f.name)}
                  aria-describedby="label"
                  @keydown=${(0,chunk_SEHSDSX2.S7)(this,_handleSpinnerKeydown)}
                  @change=${e=>(0,chunk_SEHSDSX2.S7)(this,_handleSpinnerChange).call(this,e.detail.value,f.name)}
                  @focus=${(0,chunk_SEHSDSX2.S7)(this,_handleSpinnerFocus)}
                  @touchend=${e=>{this.open=!0,e.preventDefault()}}
                ></gds-date-part-spinner>`)),chunk_MLXMQIEV.qy`<span>${this._dateFormatLayout.delimiter}</span>`)}
        </div>
        <button
          id="calendar-button"
          aria-label="${(0,lit_localize.ab)("Open calendar modal")}"
          aria-haspopup="menu"
          aria-expanded=${this.open}
          aria-controls="calendar-popover"
          aria-describedby="label"
          size=${this.size}
        >
          <gds-icon-calendar></gds-icon-calendar>
        </button>
      </div>

      <div class="form-info">
        <slot name="message">${this.validationMessage}</slot>
      </div>

      <gds-popover
        .triggerRef=${this._elTrigger}
        .anchorRef=${this._elField}
        .open=${this.open}
        @gds-ui-state=${(0,chunk_SEHSDSX2.S7)(this,_handlePopoverStateChange)}
        label=${this.label}
        id="calendar-popover"
        .placement=${"bottom-end"}
        .calcMinWidth=${()=>this.showWeekNumbers?"350px":"305px"}
        .useModalInMobileView=${!0}
        @focusin=${function(){var _ref3=(0,asyncToGenerator.A)((function*(e){var _a;"calendar-popover"===(null==(_a=e.target)?void 0:_a.id)&&_this4._elCalendar.then((cal=>cal.focus()))}));return function(_x2){return _ref3.apply(this,arguments)}}()}
      >
        <div class="header">
          <gds-button
            @click=${(0,chunk_SEHSDSX2.S7)(this,_handleDecrementFocusedMonth)}
            aria-label=${(0,lit_localize.ab)("Previous month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-left></gds-icon-chevron-left>
          </gds-button>
          <gds-dropdown
            .value=${this._focusedMonth.toString()}
            @change=${(0,chunk_SEHSDSX2.S7)(this,_handleMonthChange)}
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
            @change=${(0,chunk_SEHSDSX2.S7)(this,_handleYearChange)}
            .maxHeight=${300}
            label="${(0,lit_localize.ab)("Year")}"
            size="small"
            class="year"
            hide-label
          >
            ${(0,repeat.u)((0,chunk_SEHSDSX2.S7)(this,_years,years_get),(year=>year),(year=>chunk_MLXMQIEV.qy`<gds-option value=${year}>${year}</gds-option>`))}
          </gds-dropdown>
          <gds-button
            @click=${(0,chunk_SEHSDSX2.S7)(this,_handleIncrementFocusedMonth)}
            aria-label=${(0,lit_localize.ab)("Next month")}
            rank="tertiary"
            size="small"
          >
            <gds-icon-chevron-right></gds-icon-chevron-right>
          </gds-button>
        </div>

        <gds-calendar
          id="calendar"
          @change=${(0,chunk_SEHSDSX2.S7)(this,_handleCalendarChange)}
          @gds-date-focused=${(0,chunk_SEHSDSX2.S7)(this,_handleCalendarFocusChange)}
          .focusedMonth=${this._focusedMonth}
          .focusedYear=${this._focusedYear}
          .value=${this.value}
          .min=${this.min}
          .max=${this.max}
          .showWeekNumbers=${this.showWeekNumbers}
          .disabledWeekends=${this.disabledWeekends}
          .disabledDates=${this.disabledDates}
        ></gds-calendar>

        <div class="footer">
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),this.value=void 0,this.open=!1,(0,chunk_SEHSDSX2.jq)(this,_dispatchChangeEvent,dispatchChangeEvent_fn).call(this)}}
          >
            ${(0,lit_localize.ab)("Clear")}
          </gds-button>
          ${(0,until.T)((0,chunk_SEHSDSX2.jq)(this,_renderBackToValidRangeButton,renderBackToValidRangeButton_fn).call(this),lit.s6)}
          <gds-button
            rank="tertiary"
            size="small"
            @click=${e=>{e.stopPropagation(),(0,chunk_SEHSDSX2.jq)(this,_focusDate,focusDate_fn).call(this,new Date)}}
          >
            ${(0,lit_localize.ab)("Today")}
          </gds-button>
        </div>
      </gds-popover> `}_getValidityAnchor(){return this._elSpinners[0]}_handleValueChange(){if(!this.value)return void(0,chunk_SEHSDSX2.OV)(this,_spinnerState,{year:"yyyy",month:"mm",day:"dd"});const date=this.value;this._focusedMonth=date.getMonth(),this._focusedYear=date.getFullYear();const year=date.getFullYear().toString(),month=(date.getMonth()+1).toString().padStart(2,"0"),day=date.getDate().toString().padStart(2,"0");(0,chunk_SEHSDSX2.OV)(this,_spinnerState,{year,month,day})}_handleOpenChange(){this.open&&((0,chunk_SEHSDSX2.OV)(this,_valueOnOpen,this.value),this._elCalendar.then((el=>el.focus())))}};_valueOnOpen=new WeakMap,_renderBackToValidRangeButton=new WeakSet,renderBackToValidRangeButton_fn=function(){var _ref4=(0,asyncToGenerator.A)((function*(){const focusedDate=yield this.getFocusedDate();let buttonAction,buttonTxt="";return focusedDate&&focusedDate>this.max?(buttonTxt=(0,lit_localize.ab)("Last available date"),buttonAction=e=>{e.stopPropagation(),(0,chunk_SEHSDSX2.jq)(this,_focusDate,focusDate_fn).call(this,this.max)}):focusedDate&&focusedDate<this.min&&(buttonTxt=(0,lit_localize.ab)("First available date"),buttonAction=e=>{e.stopPropagation(),(0,chunk_SEHSDSX2.jq)(this,_focusDate,focusDate_fn).call(this,this.min)}),chunk_MLXMQIEV.qy`${(0,when.z)(buttonTxt.length>0,(()=>chunk_MLXMQIEV.qy`<gds-button rank="tertiary" size="small" @click=${buttonAction}>
          ${buttonTxt}
        </gds-button>`),(()=>lit.s6))}`}));return function renderBackToValidRangeButton_fn(){return _ref4.apply(this,arguments)}}(),_focusDate=new WeakSet,focusDate_fn=function(d){const focusDate=new Date(d);this._elCalendar.then((el=>el.focusedDate=focusDate)).then((0,chunk_SEHSDSX2.S7)(this,_handleCalendarFocusChange))},_getSpinnerLabel=new WeakSet,getSpinnerLabel_fn=function(name){return{year:(0,lit_localize.ab)("Year"),month:(0,lit_localize.ab)("Month"),day:(0,lit_localize.ab)("Day")}[name]},_getMinSpinnerValue=new WeakSet,getMinSpinnerValue_fn=function(name){return{year:1900,month:1,day:1}[name]},_getMaxSpinnerValue=new WeakSet,getMaxSpinnerValue_fn=function(name){return{year:9999,month:12,day:31}[name]},_dispatchChangeEvent=new WeakSet,dispatchChangeEvent_fn=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value}}))},_dispatchInputEvent=new WeakSet,dispatchInputEvent_fn=function(){this.dispatchEvent(new CustomEvent("input",{detail:{value:this.value}}))},_handleFieldFocusOut=new WeakMap,_handleSpinnerFocus=new WeakMap,_handleClipboardCopy=new WeakMap,_handleClipboardPaste=new WeakMap,_handleFieldClick=new WeakMap,_handleCalendarChange=new WeakMap,_handleMonthChange=new WeakMap,_handleYearChange=new WeakMap,_handleIncrementFocusedMonth=new WeakMap,_handleDecrementFocusedMonth=new WeakMap,_handleCalendarFocusChange=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleSpinnerKeydown=new WeakMap,_parseDateFormat=new WeakSet,parseDateFormat_fn=function(dateformat){const delimiter=dateformat.replace(/[a-z0-9]/gi,"")[0],format=dateformat.split(delimiter),year=format.findIndex((f=>"y"===f)),month=format.findIndex((f=>"m"===f)),day=format.findIndex((f=>"d"===f));if(-1===year||-1===month||-1===day)throw new Error("Invalid date format for <gds-datepicker>");return{delimiter,layout:[year,month,day].sort(((a,b)=>a-b)).map((i=>format[i])).map((f=>({token:f,name:"y"===f?"year":"m"===f?"month":"day"})))}},_handleSpinnerChange=new WeakMap,_spinnerState=new WeakMap,_years=new WeakSet,years_get=function(){var _a;const minYear=this.min.getFullYear(),maxYear=this.max.getFullYear(),isOutsideRange=(0,chunk_SEHSDSX2.S7)(this,_isValueOutsideRange,isValueOutsideRange_get),valueYear=null==(_a=this.value)?void 0:_a.getFullYear();return{*[Symbol.iterator](){isOutsideRange&&(yield valueYear);for(let i=minYear;i<=maxYear;i++)yield i}}},_isValueOutsideRange=new WeakSet,isValueOutsideRange_get=function(){return!!this.value&&(this.value.getFullYear()<this.min.getFullYear()||this.value.getFullYear()>this.max.getFullYear())},GdsDatepicker.styles=[chunk_BNRQOOG2.LU,styles],GdsDatepicker.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.JD})],GdsDatepicker.prototype,"value",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.JD})],GdsDatepicker.prototype,"min",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7.JD})],GdsDatepicker.prototype,"max",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean})],GdsDatepicker.prototype,"open",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsDatepicker.prototype,"label",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"show-week-numbers"})],GdsDatepicker.prototype,"showWeekNumbers",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsDatepicker.prototype,"size",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-label"})],GdsDatepicker.prototype,"hideLabel",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsDatepicker.prototype,"dateformat",1),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],GdsDatepicker.prototype,"disabledWeekends",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({converter:chunk_C3ECHGX7._h,attribute:"disabled-dates"})],GdsDatepicker.prototype,"disabledDates",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.nJ)("#calendar-button")],GdsDatepicker.prototype,"test_calendarButton",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.wk)()],GdsDatepicker.prototype,"_focusedMonth",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.wk)()],GdsDatepicker.prototype,"_focusedYear",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.wk)()],GdsDatepicker.prototype,"_dateFormatLayout",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.nJ)("#calendar")],GdsDatepicker.prototype,"_elCalendar",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.nJ)("#calendar-button")],GdsDatepicker.prototype,"_elTrigger",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.nJ)("#field")],GdsDatepicker.prototype,"_elField",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.YG)("[role=spinbutton]")],GdsDatepicker.prototype,"_elSpinners",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.P)(".input")],GdsDatepicker.prototype,"_elInput",2),(0,chunk_SEHSDSX2.Cc)([(0,chunk_TYGMNHNO.w)("value")],GdsDatepicker.prototype,"_handleValueChange",1),(0,chunk_SEHSDSX2.Cc)([(0,chunk_TYGMNHNO.w)("open")],GdsDatepicker.prototype,"_handleOpenChange",1),GdsDatepicker=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-datepicker")],GdsDatepicker);var chunk_RSYDOUXG=__webpack_require__("./dist/libs/core/src/chunks/chunk.RSYDOUXG.js"),IconChevronLeft=class extends chunk_RSYDOUXG.M{};IconChevronLeft._regularSVG='<path d="M15 20L7 12L15 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronLeft._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M15.5303 3.46967C15.8232 3.76256 15.8232 4.23744 15.5303 4.53033L8.06066 12L15.5303 19.4697C15.8232 19.7626 15.8232 20.2374 15.5303 20.5303C15.2374 20.8232 14.7626 20.8232 14.4697 20.5303L6.46967 12.5303C6.32902 12.3897 6.25 12.1989 6.25 12C6.25 11.8011 6.32902 11.6103 6.46967 11.4697L14.4697 3.46967C14.7626 3.17678 15.2374 3.17678 15.5303 3.46967Z" fill="currentColor"/>',IconChevronLeft._name="chevron-left",IconChevronLeft=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-icon-chevron-left")],IconChevronLeft);var IconChevronRight=class extends chunk_RSYDOUXG.M{};IconChevronRight._regularSVG='<path d="M9 4L17 12L9 20" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronRight._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 3.46967C8.76256 3.17678 9.23744 3.17678 9.53033 3.46967L17.5303 11.4697C17.671 11.6103 17.75 11.8011 17.75 12C17.75 12.1989 17.671 12.3897 17.5303 12.5303L9.53033 20.5303C9.23744 20.8232 8.76256 20.8232 8.46967 20.5303C8.17678 20.2374 8.17678 19.7626 8.46967 19.4697L15.9393 12L8.46967 4.53033C8.17678 4.23744 8.17678 3.76256 8.46967 3.46967Z" fill="currentColor"/>',IconChevronRight._name="chevron-right",IconChevronRight=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-icon-chevron-right")],IconChevronRight);var IconCalendar=class extends chunk_RSYDOUXG.M{};IconCalendar._regularSVG='<path d="M3.75 9.75H20.25M7.75 4.75V2.75M16.25 4.75V2.75M3.75 4.75H20.25V20.25H3.75V4.75Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCalendar._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.75 2C8.16421 2 8.5 2.33579 8.5 2.75V4H15.5V2.75C15.5 2.33579 15.8358 2 16.25 2C16.6642 2 17 2.33579 17 2.75V4H20.25C20.6642 4 21 4.33579 21 4.75V20.25C21 20.6642 20.6642 21 20.25 21H3.75C3.33579 21 3 20.6642 3 20.25V4.75C3 4.33579 3.33579 4 3.75 4H7V2.75C7 2.33579 7.33579 2 7.75 2ZM4.5 10.5V19.5H19.5V10.5H4.5Z" fill="currentColor"/>',IconCalendar._name="calendar",IconCalendar=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-icon-calendar")],IconCalendar);__webpack_require__("./dist/libs/core/src/chunks/chunk.NKE7A45Z.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.Z4W7ROA4.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.KYOV44HH.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.TE6VF64L.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.6ONS3YSQ.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.V7N5SWVK.js");var _inputBuffer,_increment,_decrement,_handleClick,_handleFocus,_handleBlur,_handleWheel,_handleKeyDown,_focusNextSpinner,focusNextSpinner_fn,chunk_ZAV6NFUL_dispatchChangeEvent,chunk_ZAV6NFUL_dispatchChangeEvent_fn,_formatNumber,formatNumber_fn,_clamp,clamp_fn,_clearInputBuffer,clearInputBuffer_fn,GdsDatePartSpinner=class extends lit.WF{constructor(){super(...arguments),(0,chunk_SEHSDSX2.VK)(this,_focusNextSpinner),(0,chunk_SEHSDSX2.VK)(this,chunk_ZAV6NFUL_dispatchChangeEvent),(0,chunk_SEHSDSX2.VK)(this,_formatNumber),(0,chunk_SEHSDSX2.VK)(this,_clamp),(0,chunk_SEHSDSX2.VK)(this,_clearInputBuffer),this.value=0,this.length=2,this.min=0,this.max=Number.MAX_SAFE_INTEGER,this.displayValue=(0,chunk_SEHSDSX2.jq)(this,_formatNumber,formatNumber_fn).call(this,this.value,this.length),(0,chunk_SEHSDSX2.VK)(this,_inputBuffer,""),(0,chunk_SEHSDSX2.VK)(this,_increment,(()=>{let current=parseInt(this.value.toString());Number.isNaN(current)&&(current=2===this.length?this.min:(new Date).getFullYear()-1),this.value=(0,chunk_SEHSDSX2.jq)(this,_clamp,clamp_fn).call(this,current+1),(0,chunk_SEHSDSX2.jq)(this,chunk_ZAV6NFUL_dispatchChangeEvent,chunk_ZAV6NFUL_dispatchChangeEvent_fn).call(this)})),(0,chunk_SEHSDSX2.VK)(this,_decrement,(()=>{let current=parseInt(this.value.toString());Number.isNaN(current)&&(current=2===this.length?this.max:(new Date).getFullYear()+1),this.value=(0,chunk_SEHSDSX2.jq)(this,_clamp,clamp_fn).call(this,current-1),(0,chunk_SEHSDSX2.jq)(this,chunk_ZAV6NFUL_dispatchChangeEvent,chunk_ZAV6NFUL_dispatchChangeEvent_fn).call(this)})),(0,chunk_SEHSDSX2.VK)(this,_handleClick,(e=>{e.stopPropagation(),e.preventDefault(),this.focus()})),(0,chunk_SEHSDSX2.VK)(this,_handleFocus,(()=>{(0,chunk_SEHSDSX2.jq)(this,_clearInputBuffer,clearInputBuffer_fn).call(this)})),(0,chunk_SEHSDSX2.VK)(this,_handleBlur,(()=>{""!==(0,chunk_SEHSDSX2.S7)(this,_inputBuffer)&&((0,chunk_SEHSDSX2.jq)(this,_clearInputBuffer,clearInputBuffer_fn).call(this),this.value=(0,chunk_SEHSDSX2.jq)(this,_clamp,clamp_fn).call(this,parseInt(this.value.toString())),(0,chunk_SEHSDSX2.jq)(this,chunk_ZAV6NFUL_dispatchChangeEvent,chunk_ZAV6NFUL_dispatchChangeEvent_fn).call(this))})),(0,chunk_SEHSDSX2.VK)(this,_handleWheel,(e=>{e.stopPropagation(),e.preventDefault(),e.deltaY>0?(0,chunk_SEHSDSX2.S7)(this,_decrement).call(this):(0,chunk_SEHSDSX2.S7)(this,_increment).call(this)})),(0,chunk_SEHSDSX2.VK)(this,_handleKeyDown,(e=>{let handled=!1;if("ArrowUp"===e.key)(0,chunk_SEHSDSX2.S7)(this,_increment).call(this),handled=!0;else if("ArrowDown"===e.key)(0,chunk_SEHSDSX2.S7)(this,_decrement).call(this),handled=!0;else{const key=parseInt(e.key);isNaN(key)||((0,chunk_SEHSDSX2.S7)(this,_inputBuffer).length<this.length&&((0,chunk_SEHSDSX2.OV)(this,_inputBuffer,(0,chunk_SEHSDSX2.S7)(this,_inputBuffer)+key.toString()),this.value=parseInt((0,chunk_SEHSDSX2.S7)(this,_inputBuffer))),(0,chunk_SEHSDSX2.S7)(this,_inputBuffer).length===this.length&&(this.value=(0,chunk_SEHSDSX2.jq)(this,_clamp,clamp_fn).call(this,this.value),(0,chunk_SEHSDSX2.jq)(this,_clearInputBuffer,clearInputBuffer_fn).call(this),(0,chunk_SEHSDSX2.jq)(this,_focusNextSpinner,focusNextSpinner_fn).call(this),(0,chunk_SEHSDSX2.jq)(this,chunk_ZAV6NFUL_dispatchChangeEvent,chunk_ZAV6NFUL_dispatchChangeEvent_fn).call(this)),handled=!0)}handled&&(e.preventDefault(),e.stopPropagation())}))}createRenderRoot(){return this}connectedCallback(){super.connectedCallback(),this.setAttribute("role","spinbutton"),this.setAttribute("tabindex","0"),this.addEventListener("wheel",(0,chunk_SEHSDSX2.S7)(this,_handleWheel)),this.addEventListener("keydown",(0,chunk_SEHSDSX2.S7)(this,_handleKeyDown)),this.addEventListener("blur",(0,chunk_SEHSDSX2.S7)(this,_handleBlur)),this.addEventListener("focus",(0,chunk_SEHSDSX2.S7)(this,_handleFocus)),this.addEventListener("click",(0,chunk_SEHSDSX2.S7)(this,_handleClick)),this.addEventListener("mousedown",(0,chunk_SEHSDSX2.S7)(this,_handleClick))}focus(options){super.focus(options),(0,chunk_SEHSDSX2.S7)(this,_handleFocus).call(this)}render(){return chunk_MLXMQIEV.qy`${this.displayValue}`}_refreshDisplayValue(){this.displayValue=(0,chunk_SEHSDSX2.jq)(this,_formatNumber,formatNumber_fn).call(this,this.value,this.length),this.setAttribute("aria-valuetext",this.value.toString())}};_inputBuffer=new WeakMap,_increment=new WeakMap,_decrement=new WeakMap,_handleClick=new WeakMap,_handleFocus=new WeakMap,_handleBlur=new WeakMap,_handleWheel=new WeakMap,_handleKeyDown=new WeakMap,_focusNextSpinner=new WeakSet,focusNextSpinner_fn=function(){let nextSpinner=this.nextElementSibling;for(;nextSpinner;){if(nextSpinner instanceof GdsDatePartSpinner){nextSpinner.focus();break}nextSpinner=nextSpinner.nextElementSibling}},chunk_ZAV6NFUL_dispatchChangeEvent=new WeakSet,chunk_ZAV6NFUL_dispatchChangeEvent_fn=function(){this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value.toString()}}))},_formatNumber=new WeakSet,formatNumber_fn=function(num,padZeros){return String(num).padStart(padZeros,"0")},_clamp=new WeakSet,clamp_fn=function(value){return Math.max(this.min,Math.min(this.max,value))},_clearInputBuffer=new WeakSet,clearInputBuffer_fn=function(){(0,chunk_SEHSDSX2.OV)(this,_inputBuffer,"")},GdsDatePartSpinner.formAssociated=!0,(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"value",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Number})],GdsDatePartSpinner.prototype,"length",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemin"})],GdsDatePartSpinner.prototype,"min",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Number,attribute:"aria-valuemax"})],GdsDatePartSpinner.prototype,"max",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.wk)()],GdsDatePartSpinner.prototype,"displayValue",2),(0,chunk_SEHSDSX2.Cc)([(0,chunk_TYGMNHNO.w)("value")],GdsDatePartSpinner.prototype,"_refreshDisplayValue",1),GdsDatePartSpinner=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-date-part-spinner")],GdsDatePartSpinner);__webpack_require__("./dist/libs/core/src/chunks/chunk.67DBEXTS.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.U53LM7EE.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.XTEHIKET.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.V7EJYOZX.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.4RW2G7ML.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.6AIJESQO.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.6GHLIX4F.js");var chunk_6X2WDWO3=__webpack_require__("./dist/libs/core/src/chunks/chunk.6X2WDWO3.js"),startOfMonth=__webpack_require__("./node_modules/date-fns/esm/startOfMonth/index.js"),endOfMonth=__webpack_require__("./node_modules/date-fns/esm/endOfMonth/index.js"),eachWeekOfInterval=__webpack_require__("./node_modules/date-fns/esm/eachWeekOfInterval/index.js"),addDays=__webpack_require__("./node_modules/date-fns/esm/addDays/index.js"),eachDayOfInterval=__webpack_require__("./node_modules/date-fns/esm/eachDayOfInterval/index.js");var _setSelectedDate,setSelectedDate_fn,chunk_G4GPO2HV_handleKeyDown,handleKeyDown_fn,if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lastDayOfMonth=__webpack_require__("./node_modules/date-fns/esm/lastDayOfMonth/index.js"),getWeek=__webpack_require__("./node_modules/date-fns/esm/getWeek/index.js"),isSameMonth=__webpack_require__("./node_modules/date-fns/esm/isSameMonth/index.js"),setHours=__webpack_require__("./node_modules/date-fns/esm/setHours/index.js"),subMonths=__webpack_require__("./node_modules/date-fns/esm/subMonths/index.js"),addMonths=__webpack_require__("./node_modules/date-fns/esm/addMonths/index.js"),calendar_styles_default=lit.AH`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      justify-content: center;
    }

    :host table {
      border-spacing: var(--gds-space-2xs);
      flex-grow: 1;
      width: 100%;
      padding: 1ch;
    }

    thead {
      box-shadow: 0 var(--gds-space-4xs) 0 0 var(--gds-color-l2-border-primary);
      th {
        height: var(--gds-space-2xl);
        width: var(--gds-space-2xl);
        background: var(--gds-sys-color-container-container-bright);
        box-sizing: border-box;
        text-align: center;
        font-weight: normal;
      }
    }

    tbody {
      td {
        position: relative;
        height: var(--gds-space-3xl);
        width: var(--gds-space-3xl);
        box-sizing: border-box;
        text-align: center;
        user-select: none;
        border-width: var(--gds-space-3xs);
        border-style: solid;
        border-color: transparent;
        border-radius: var(--gds-space-2xs);
        transition: all 0.2s;
        outline-style: solid;
        outline-color: transparent;
        outline-width: 0px;
        outline-offset: var(--gds-space-3xs);

        &:not(.disabled):hover,
        &[aria-selected='true'] {
          background: var(--gds-sys-color-base800);
          cursor: pointer;
          color: var(--gds-sys-color-base-white);
        }

        &.today {
          border-color: var(--gds-sys-color-base800);
        }

        &.disabled {
          background-color: var(--gds-sys-color-base100);
          color: var(--gds-sys-color-base500);
          cursor: not-allowed;
        }

        &:active:not(.disabled) {
          scale: 0.96;
        }

        &:focus-visible {
          outline-color: color-mix(in srgb, currentColor, transparent 50%);
        }
      }

      .indicator-dot {
        display: flex;
        position: absolute;
        width: var(--gds-space-2xs);
        height: var(--gds-space-2xs);
        border-radius: var(--gds-space-max);
        background-color: var(--_color, currentColor);
        inset: var(--gds-space-2xs) var(--gds-space-2xs) auto auto;
      }
    }
  }
`,GdsCalendar=class extends chunk_6X2WDWO3.j{constructor(){super(...arguments),(0,chunk_SEHSDSX2.VK)(this,_setSelectedDate),(0,chunk_SEHSDSX2.VK)(this,chunk_G4GPO2HV_handleKeyDown),this.min=new Date((new Date).getFullYear()-10,0,1),this.max=new Date((new Date).getFullYear()+10,0,1),this.focusedDate=new Date,this.disabledWeekends=!1,this.showWeekNumbers=!1,this.hideExtraneousDays=!1,this.hideDayNames=!1,this.dateLabelTemplate=date=>date.toDateString()}get focusedMonth(){return this.focusedDate.getMonth()}set focusedMonth(month){const lastOfSelectedMonth=(0,lastDayOfMonth.A)(new Date(this.focusedYear,month,1)),newFocusedDate=new Date(this.focusedDate);newFocusedDate.setDate(Math.min(this.focusedDate.getDate(),lastOfSelectedMonth.getDate())),newFocusedDate.setMonth(month),newFocusedDate.setHours(12,0,0,0),this.focusedDate=newFocusedDate}get focusedYear(){return this.focusedDate.getFullYear()}set focusedYear(year){this.focusedDate=new Date(this.focusedDate.setFullYear(year))}getDateCell(dayNumber){var _a;return null==(_a=this.shadowRoot)?void 0:_a.querySelector(`#dateCell-${dayNumber}`)}connectedCallback(){super.connectedCallback(),chunk_JMP5YJFE.nD.instance.apply(this,"gds-calendar"),this.addEventListener("keydown",(0,chunk_SEHSDSX2.jq)(this,chunk_G4GPO2HV_handleKeyDown,handleKeyDown_fn))}focus(){var _a;super.focus(),null==(_a=this._elFocusedCell)||_a.focus()}render(){const currentDate=new Date;return lit.qy`<table role="grid" aria-label="${(0,if_defined.J)(this.label)}">
      ${(0,when.z)(!this.hideDayNames,(()=>lit.qy`<thead role="rowgroup">
            <tr role="row">
              ${(0,when.z)(this.showWeekNumbers,(()=>lit.qy`<th></th>`))}
              <th>${(0,lit_localize.ab)("Mon")}</th>
              <th>${(0,lit_localize.ab)("Tue")}</th>
              <th>${(0,lit_localize.ab)("Wed")}</th>
              <th>${(0,lit_localize.ab)("Thu")}</th>
              <th>${(0,lit_localize.ab)("Fri")}</th>
              <th>${(0,lit_localize.ab)("Sat")}</th>
              <th>${(0,lit_localize.ab)("Sun")}</th>
            </tr>
          </thead>`))}
      <tbody role="rowgroup">
        ${function renderMonthGridView(date,template){const monthStart=(0,startOfMonth.A)(date),monthEnd=(0,endOfMonth.A)(date),weeks=(0,eachWeekOfInterval.A)({start:monthStart,end:monthEnd},{weekStartsOn:1});for(;weeks.length<6;)weeks.push((0,addDays.A)(weeks[weeks.length-1],7));return lit.qy`${template(weeks.map((weekStartDay=>({days:(0,eachDayOfInterval.A)({start:weekStartDay,end:(0,addDays.A)(weekStartDay,6)})}))))}`}(this.focusedDate,(weeks=>lit.qy`
            ${weeks.map((week=>lit.qy`
                <tr role="row">
                  ${(0,when.z)(this.showWeekNumbers,(()=>lit.qy`<td class="week-number" scope="row">
                        ${(0,getWeek.A)(week.days[0])}
                      </td>`))}
                  ${week.days.map((day=>{const customization=this.customizedDates&&this.customizedDates.find((d=>(0,isSameDay.A)(d.date,day))),displayOptions=(0,chunk_SEHSDSX2.IA)({color:"currentColor",disabled:Boolean(this.disabledDates&&this.disabledDates.some((d=>(0,isSameDay.A)(d,day))))},customization),isOutsideCurrentMonth=!(0,isSameMonth.A)(this.focusedDate,day),isOutsideMinMax=(day<this.min||day>this.max)&&!(0,isSameDay.A)(day,this.min)&&!(0,isSameDay.A)(day,this.max),isWeekend=0===day.getDay()||6===day.getDay(),isDisabled=displayOptions.disabled||isOutsideCurrentMonth||isOutsideMinMax||this.disabledWeekends&&isWeekend;return this.hideExtraneousDays&&isOutsideCurrentMonth?lit.qy`<td inert></td>`:lit.qy`
                          <td
                            role="${(0,if_defined.J)(isDisabled?void 0:"gridcell")}"
                            class="${(0,class_map.H)({"custom-date":Boolean(customization),disabled:Boolean(isDisabled),today:(0,isSameDay.A)(currentDate,day)})}"
                            ?disabled=${isDisabled}
                            tabindex="${(0,isSameDay.A)(this.focusedDate,day)?0:-1}"
                            aria-selected="${this.value&&(0,isSameDay.A)(this.value,day)?"true":"false"}"
                            aria-label="${this.dateLabelTemplate(day)}"
                            @click=${()=>isDisabled?null:(0,chunk_SEHSDSX2.jq)(this,_setSelectedDate,setSelectedDate_fn).call(this,day)}
                            id="dateCell-${day.getDate()}"
                          >
                            <span
                              class="number"
                              style="--_color: ${displayOptions?null==displayOptions?void 0:displayOptions.color:""}"
                              >${day.getDate()}</span
                            >

                            ${(0,when.z)(displayOptions.indicator,(()=>lit.qy`<span
                                  class="indicator-${null==displayOptions?void 0:displayOptions.indicator}"
                                  style="--_color: ${null==displayOptions?void 0:displayOptions.color}"
                                ></span>`))}
                          </td>
                        `}))}
                </tr>
              `))}
          `))}
      </tbody>
    </table>`}_valueChanged(){this.value&&(this.focusedDate=this.value)}};_setSelectedDate=new WeakSet,setSelectedDate_fn=function(date){const dateOnMidDay=(0,setHours.A)(date,12);this.value=dateOnMidDay,this.dispatchEvent(new CustomEvent("change",{detail:dateOnMidDay,bubbles:!1,composed:!1}))},chunk_G4GPO2HV_handleKeyDown=new WeakSet,handleKeyDown_fn=function(e){var _a;let handled=!1,newFocusedDate=new Date(this.focusedDate);if("ArrowLeft"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,-1),handled=!0):"ArrowRight"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,1),handled=!0):"ArrowUp"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,-7),handled=!0):"ArrowDown"===e.key?(newFocusedDate=(0,addDays.A)(this.focusedDate,7),handled=!0):"Enter"===e.key||" "===e.key?((null==(_a=this._elFocusedCell)?void 0:_a.hasAttribute("disabled"))||(0,chunk_SEHSDSX2.jq)(this,_setSelectedDate,setSelectedDate_fn).call(this,this.focusedDate),handled=!0):"Home"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth,1),handled=!0):"End"===e.key?(newFocusedDate=new Date(this.focusedYear,this.focusedMonth+1,0),handled=!0):"PageUp"===e.key?(newFocusedDate=(0,subMonths.A)(this.focusedDate,1),handled=!0):"PageDown"===e.key&&(newFocusedDate=(0,addMonths.A)(this.focusedDate,1),handled=!0),newFocusedDate.getFullYear()>=this.min.getFullYear()&&newFocusedDate.getFullYear()<=this.max.getFullYear()){this.dispatchEvent(new CustomEvent("gds-date-focused",{detail:newFocusedDate,bubbles:!1,composed:!1,cancelable:!0}))&&(this.focusedDate=newFocusedDate)}handled&&(e.preventDefault(),e.stopPropagation(),this.updateComplete.then((()=>{var _a2;null==(_a2=this._elFocusedCell)||_a2.focus()})))},GdsCalendar.styles=[chunk_BNRQOOG2.LU,calendar_styles_default],GdsCalendar.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"value",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"min",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Date})],GdsCalendar.prototype,"max",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"focusedDate",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"disabled-weekends"})],GdsCalendar.prototype,"disabledWeekends",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Array,attribute:"disabled-dates"})],GdsCalendar.prototype,"disabledDates",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedMonth",1),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Number})],GdsCalendar.prototype,"focusedYear",1),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"showWeekNumbers",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideExtraneousDays",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({type:Boolean})],GdsCalendar.prototype,"hideDayNames",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"customizedDates",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)()],GdsCalendar.prototype,"label",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.MZ)({attribute:!1})],GdsCalendar.prototype,"dateLabelTemplate",2),(0,chunk_SEHSDSX2.Cc)([(0,decorators.P)('td[tabindex="0"]')],GdsCalendar.prototype,"_elFocusedCell",2),(0,chunk_SEHSDSX2.Cc)([(0,chunk_TYGMNHNO.w)("value")],GdsCalendar.prototype,"_valueChanged",1),GdsCalendar=(0,chunk_SEHSDSX2.Cc)([(0,chunk_MLXMQIEV.Y$)("gds-calendar")],GdsCalendar);var NggDatepickerComponent_1;__webpack_require__("./dist/libs/core/src/chunks/chunk.OHOWIVVP.js"),__webpack_require__("./dist/libs/core/src/chunks/chunk.JY3EKAVI.js");let NggDatepickerComponent=class NggDatepickerComponent{static{NggDatepickerComponent_1=this}get options(){return this._options}set options(value){this._options=value}get showWeekNumbers(){return this.options?.showWeeks??!1}get dateFormat(){return this.options?.dateFormat??"y-m-d"}get value(){return this._value}set value(newValue){"string"==typeof newValue&&(newValue=new Date(newValue)),newValue!==this._value&&(this._value=newValue||void 0)}get min(){const minDate=this.options?.minDate;return minDate||new Date((new Date).getFullYear()-10,0,1)}get max(){const maxDate=this.options?.maxDate;return maxDate||new Date((new Date).getFullYear()+10,0,1)}constructor(_cdr){this._cdr=_cdr,this.id=(0,src.zE)(),this.isValid=null,this.valueChange=new core.EventEmitter,chunk_JMP5YJFE._Z()}writeValue(value){this.value=value,this._cdr.detectChanges()}registerOnChange(fn){this.onChangeFn=fn}registerOnTouched(fn){this.onTouchedFn=fn}onDateChange(evt){const e=evt;this.value=e.detail.value,this.valueChange.emit(e.detail.value),this.onChangeFn&&this.onChangeFn(e.detail.value)}ngAfterViewInit(){this._cdr.detectChanges()}static{this.ctorParameters=()=>[{type:core.ChangeDetectorRef}]}static{this.propDecorators={size:[{type:core.Input}],hideLabel:[{type:core.Input}],disabledWeekends:[{type:core.Input}],disabledDates:[{type:core.Input}],options:[{type:core.Input}],value:[{type:core.Input}],id:[{type:core.Input}],label:[{type:core.Input}],isValid:[{type:core.Input}],valueChange:[{type:core.Output}]}}};NggDatepickerComponent=NggDatepickerComponent_1=(0,tslib_es6.Cg)([(0,core.Component)({selector:"ngg-datepicker",template:'<div class="form-group">\n  <gds-datepicker\n    *nggCoreElement\n    [attr.id]="id"\n    [label]="label"\n    [value]="value"\n    (change)="onDateChange($event)"\n    [invalid]="isValid === false"\n    [min]="min"\n    [max]="max"\n    [showWeekNumbers]="showWeekNumbers"\n    [dateformat]="dateFormat"\n    [size]="size"\n    [hideLabel]="hideLabel"\n    [disabledWeekends]="disabledWeekends"\n    [disabledDates]="disabledDates"\n  >\n    <span slot="message">\n      <ng-content select="[data-form-info]"></ng-content>\n    </span>\n  </gds-datepicker>\n</div>\n',providers:[{provide:fesm2022_forms.kq,useExisting:NggDatepickerComponent_1,multi:!0}],changeDetection:core.ChangeDetectionStrategy.OnPush}),(0,tslib_es6.Sn)("design:paramtypes",[core.ChangeDetectorRef])],NggDatepickerComponent);var common=__webpack_require__("./node_modules/@angular/common/fesm2022/common.mjs"),shared=__webpack_require__("./libs/angular/src/lib/shared/index.ts");let NggDatepickerModule=class NggDatepickerModule{};NggDatepickerModule=(0,tslib_es6.Cg)([(0,core.NgModule)({declarations:[NggDatepickerComponent],imports:[common.CommonModule,shared.$M],exports:[NggDatepickerComponent],schemas:[core.CUSTOM_ELEMENTS_SCHEMA]})],NggDatepickerModule);const datepicker_stories={title:"Components/Datepicker",component:NggDatepickerComponent,decorators:[(0,dist.moduleMetadata)({imports:[fesm2022_forms.YN,fesm2022_forms.X1,NggDatepickerModule]})],parameters:{componentIds:["component-datepicker"]},argTypes:{value:{control:"date"},options:{control:{type:"object"}}}},Template=args=>({props:args}),Simple=Template.bind({});Simple.args={value:"10/10/2021",label:"Date"};const CustomOptions=Template.bind({});CustomOptions.args={label:"Birthday",disabledWeekends:!0,disabledDates:[new Date(2024,1,6),new Date(2023,12,4)],options:{minDate:(0,startOfYear.A)((0,subYears.A)(new Date,100)),maxDate:new Date,showWeeks:!0,dateFormat:"d/m/y"}};const Form=(args=>{const validationForm=new fesm2022_forms.gE({date:new fesm2022_forms.MJ(void 0,[fesm2022_forms.k0.required,(dates={min:args.options?.minDate,max:args.options?.maxDate},control=>{const value=control.value;if(!value)return null;const newDate=new Date(value);if(isNaN(newDate.getTime()))return{validDate:!0};const validMinDate=!dates?.min||newDate>=(0,startOfDay.A)(dates.min),validMaxDate=!dates?.max||newDate<=(0,endOfDay.A)(dates.max);return!validMinDate&&dates?.min?{validDate:{minDate:(0,startOfDay.A)(dates.min),actualDate:newDate}}:!validMaxDate&&dates?.max?{validDate:{maxDate:(0,endOfDay.A)(dates.max),actualDate:newDate}}:null})])});var dates;return{component:NggDatepickerComponent,template:'\n<form [formGroup]="validationForm" #ngForm="ngForm" (submit)="save(validationForm.value)">\n  <ng-container *ngIf="validationForm.get(\'date\') as date">\n    <ngg-datepicker\n      formControlName="date"\n      label="Date"\n      [isValid]="ngForm.submitted ? date.valid : null"\n      [options]="options"\n    >\n      \x3c!-- Hint text when not submitted --\x3e\n      <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n        >Select date</ng-container\n      >\n      <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n        \x3c!-- Text when form control contains one or more errors --\x3e\n        <ng-container *ngIf="date.errors as errors">\n          \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n          <ng-container *ngIf="errors[\'required\']">Select a date</ng-container>\n          <ng-container *ngIf="errors[\'validDate\'] === true"\n            >Enter valid date</ng-container\n          >\n          <ng-container\n            *ngIf="errors[\'validDate\'] && errors[\'validDate\'][\'minDate\']"\n            >Enter date after\n            {{\n              errors[\'validDate\'][\'minDate\'] | date: \'shortDate\'\n            }}</ng-container>\n          <ng-container\n            *ngIf="errors[\'validDate\'] && errors[\'validDate\'][\'maxDate\']"\n            >Enter date before\n            {{\n              errors[\'validDate\'][\'maxDate\'] | date: \'shortDate\'\n            }}</ng-container>\n        </ng-container>\n      </ng-container>\n    </ngg-datepicker>\n  </ng-container>\n  <button type="reset" (click)="ngForm.reset()">Reset</button>\n  <button class="ms-3" type="submit" [disabled]="ngForm.submitted && validationForm.invalid">\n    Save\n  </button>\n  <br/>\n  <code>{{validationForm.value | json}}</code>\n  <h5 class="mb-0">Errors</h5>\n  <code>\n    <div *ngFor="let f of validationForm?.controls | keyvalue">\n      {{ f.key }}:{{ f.value.errors | json }}\n    </div>\n  </code>\n</form>\n    ',props:{...args,validationForm,save:form=>{console.log("Saved!",form)}}}}).bind({});Form.args={label:"Birthday",options:{minDate:(0,startOfYear.A)((0,subYears.A)(new Date,100)),maxDate:new Date,showWeeks:!0}};const __namedExportsOrder=["Simple","CustomOptions","Form"];Simple.parameters={...Simple.parameters,docs:{...Simple.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...Simple.parameters?.docs?.source}}},CustomOptions.parameters={...CustomOptions.parameters,docs:{...CustomOptions.parameters?.docs,source:{originalSource:"args => ({\n  props: args\n})",...CustomOptions.parameters?.docs?.source}}},Form.parameters={...Form.parameters,docs:{...Form.parameters?.docs,source:{originalSource:'args => {\n  const validationForm = new FormGroup({\n    date: new FormControl(undefined, [Validators.required, dateValidator({\n      min: args.options?.minDate,\n      max: args.options?.maxDate\n    })])\n  });\n  const save = (form: any) => {\n    console.log(\'Saved!\', form);\n  };\n  return {\n    component: NggDatepickerComponent,\n    template: `\n<form [formGroup]="validationForm" #ngForm="ngForm" (submit)="save(validationForm.value)">\n  <ng-container *ngIf="validationForm.get(\'date\') as date">\n    <ngg-datepicker\n      formControlName="date"\n      label="Date"\n      [isValid]="ngForm.submitted ? date.valid : null"\n      [options]="options"\n    >\n      \x3c!-- Hint text when not submitted --\x3e\n      <ng-container data-form-info *ngIf="!ngForm[\'submitted\']"\n        >Select date</ng-container\n      >\n      <ng-container data-form-info *ngIf="ngForm[\'submitted\']">\n        \x3c!-- Text when form control contains one or more errors --\x3e\n        <ng-container *ngIf="date.errors as errors">\n          \x3c!-- Text for each error (only one will be displayed at a time) --\x3e\n          <ng-container *ngIf="errors[\'required\']">Select a date</ng-container>\n          <ng-container *ngIf="errors[\'validDate\'] === true"\n            >Enter valid date</ng-container\n          >\n          <ng-container\n            *ngIf="errors[\'validDate\'] && errors[\'validDate\'][\'minDate\']"\n            >Enter date after\n            {{\n              errors[\'validDate\'][\'minDate\'] | date: \'shortDate\'\n            }}</ng-container>\n          <ng-container\n            *ngIf="errors[\'validDate\'] && errors[\'validDate\'][\'maxDate\']"\n            >Enter date before\n            {{\n              errors[\'validDate\'][\'maxDate\'] | date: \'shortDate\'\n            }}</ng-container>\n        </ng-container>\n      </ng-container>\n    </ngg-datepicker>\n  </ng-container>\n  <button type="reset" (click)="ngForm.reset()">Reset</button>\n  <button class="ms-3" type="submit" [disabled]="ngForm.submitted && validationForm.invalid">\n    Save\n  </button>\n  <br/>\n  <code>{{validationForm.value | json}}</code>\n  <h5 class="mb-0">Errors</h5>\n  <code>\n    <div *ngFor="let f of validationForm?.controls | keyvalue">\n      {{ f.key }}:{{ f.value.errors | json }}\n    </div>\n  </code>\n</form>\n    `,\n    props: {\n      ...args,\n      validationForm,\n      save\n    }\n  };\n}',...Form.parameters?.docs?.source}}}}}]);
//# sourceMappingURL=src-lib-datepicker-datepicker-stories.728e6d0e.iframe.bundle.js.map
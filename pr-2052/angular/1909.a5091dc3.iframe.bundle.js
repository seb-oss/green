"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1909],{"./dist/libs/core/src/chunks/chunk.67LOWXIO.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GdsDropdown});var _optionElements,_renderCombobox,_renderTriggerButton,_calcMaxHeight,_dispatchUISateEvent,_handlePopoverStateChange,_handleSearchFieldInput,_handleSearchFieldKeyDown,_handleListboxKeyDown,_handleOptionFocusChange,_handleSelectionChange,handleSelectionChange_fn,_dispatchInputEvent,_dispatchChangeEvent,_registerAutoCloseListener,registerAutoCloseListener_fn,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn,_blurCloseListener,_tabCloseListener,_home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_chunk_N3HNQKO4_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.N3HNQKO4.js"),_chunk_QAI5WQIV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QAI5WQIV.js"),_chunk_EE47OSHY_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EE47OSHY.js"),_chunk_IJLBIJ5M_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.IJLBIJ5M.js"),_chunk_IKEM2YEF_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.IKEM2YEF.js"),_chunk_UTLPB46Z_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.UTLPB46Z.js"),_chunk_5FHEJLB5_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5FHEJLB5.js"),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_19__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZE5LXBMJ.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./node_modules/lit-html/directives/when.js"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),dropdown_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      --_transition: all 368ms cubic-bezier(0.4, 0, 0.2, 1);
    }

    #field::part(_base) {
      cursor: pointer;
    }

    button {
      appearance: none;
      background: transparent;
      border-width: 0;
      font-family: inherit;
      font-size: inherit;
      line-height: inherit;
      color: currentColor;
      cursor: pointer;
      padding: 0;
      text-align: left;
      flex: 0 1 100%;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    button:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-color-l3-content-disabled);
      border-color: var(--gds-color-l3-border-tertiary);
      border-width: 0 0 var(--gds-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-space-m);
      font-weight: var(--gds-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-color-l3-border-secondary);
        color: var(--gds-color-l3-content-tertiary);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-text-weight-book);
        color: var(--gds-color-l3-content-disabled);
      }
    }

    input[role='combobox'] {
      appearance: none;
      background: transparent;
      border: none;
      font-size: inherit;
      outline: none;
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`,GdsDropdown=class extends _chunk_5FHEJLB5_js__WEBPACK_IMPORTED_MODULE_6__.S{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_handleSelectionChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_registerAutoCloseListener),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_unregisterAutoCloseListener),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(a,b)=>a===b,this.searchFilter=(q,o)=>o.innerHTML.toLowerCase().includes(q.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_optionElements,void 0),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_renderCombobox,(()=>{var _a;return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`
      <input
        id="trigger"
        role="combobox"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${null==(_a=this.placeholder)?void 0:_a.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${e=>{e.stopImmediatePropagation()}}
        @input=${e=>{this.value=e.target.value,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchInputEvent).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_handleSearchFieldInput).call(this,e),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchUISateEvent).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{"ArrowDown"===e.key&&(e.preventDefault(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchUISateEvent).call(this,!0,"show")&&(this.open=!0),this._elListbox.then((listbox=>listbox.focus()))),"Enter"===e.key&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchChangeEvent).call(this)}}
      />
    `})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_renderTriggerButton,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`
      <button
        id="trigger"
        role="combobox"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
      >
        <slot name="trigger">
          <span>${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_14__._)(this.displayValue)}</span>
        </slot>
      </button>
    `)),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_calcMaxHeight,(trigger=>{if(this.combobox){const triggerRect=trigger.getBoundingClientRect(),bottomSpace=window.innerHeight-triggerRect.bottom,topSpace=triggerRect.top;let height2=Math.min(topSpace,this.maxHeight);return bottomSpace>topSpace&&(height2=Math.min(bottomSpace,this.maxHeight)),height2-16+"px"}return Math.min(window.innerHeight,this.maxHeight)-16+"px"})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_dispatchUISateEvent,((toState,reason)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason,open:toState},bubbles:!1,composed:!1,cancelable:!0})))),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_handlePopoverStateChange,(e=>{(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchUISateEvent).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_handleSearchFieldInput,(e=>{if(!e.currentTarget)return;e.stopPropagation();if(!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0})))return;const input=e.currentTarget;if(this.options.forEach((o=>o.hidden=!1)),!input.value)return;this.options.filter((o=>!this.searchFilter(input.value,o))).forEach((o=>o.hidden=!0))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_handleSearchFieldKeyDown,(e=>{var _a;null==(_a=this._elListbox)||_a.then((listbox=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void listbox.focus()}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_handleListboxKeyDown,(e=>{var _a;if("Tab"===e.key&&this.searchable)return e.preventDefault(),void(null==(_a=this._elSearchInput)||_a.focus())})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_handleOptionFocusChange,(e=>{const triggerButton=this._elTriggerBtn;triggerButton&&(triggerButton.ariaActiveDescendantElement=e.target)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_dispatchInputEvent,(()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_dispatchChangeEvent,(()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_blurCloseListener,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(this.open=!1)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.VK)(this,_tabCloseListener,(e=>{var _a;"Tab"===e.key&&!this.searchable&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,null==(_a=this._elTriggerBtn)||_a.focus())}))}get type(){return"gds-dropdown"}get options(){return(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_optionElements)?Array.from((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_optionElements)).filter((o=>!o.hasAttribute("isplaceholder"))):[]}get placeholder(){if((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_optionElements))return Array.from((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_optionElements)).find((o=>o.hasAttribute("isplaceholder")))}get displayValue(){var _a,_b;let displayValue;return displayValue=Array.isArray(this.value)?this.value.length>2?(0,_lit_localize__WEBPACK_IMPORTED_MODULE_11__.ab)(_lit_localize__WEBPACK_IMPORTED_MODULE_11__.gx`${this.value.length} selected`):this.value.reduce(((acc,cur)=>{var _a2;return acc+(null==(_a2=this.options.find((v=>v.value===cur)))?void 0:_a2.innerHTML)+", "}),"").slice(0,-2):null==(_a=this.options.find((v=>v.selected)))?void 0:_a.innerHTML,displayValue||(null==(_b=this.placeholder)?void 0:_b.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var _a;return null==(_a=this.shadowRoot)?void 0:_a.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()}))}render(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`
      ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_16__.z)(!this.hideLabel,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_16__.z)(this.supportingText.length>0,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`<span slot="supporting-text" id="supporting-text">
                  ${this.supportingText}
                </span>`))}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `))}
      <gds-popover
        .autofocus=${!this.combobox}
        .label=${this.label}
        .open=${this.open}
        .calcMaxWidth=${trigger=>this.syncPopoverWidth?`${trigger.offsetWidth}px`:"auto"}
        .calcMaxHeight=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_calcMaxHeight)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_17__.cY)(8),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_17__.UU)()]:_chunk_UTLPB46Z_js__WEBPACK_IMPORTED_MODULE_5__.E.DefaultMiddleware}
        @gds-ui-state=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_handlePopoverStateChange)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_renderCombobox).call(this):(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_renderTriggerButton).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_16__.z)(this.searchable,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`<input
              id="searchinput"
              type="text"
              aria-label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_11__.ab)("Filter available options")}"
              placeholder="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_11__.ab)("Search")}"
              @keydown=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_handleSearchFieldKeyDown)}
              @input=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_handleSearchFieldInput)}
            />`))}
        <gds-listbox
          id="listbox"
          .multiple="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_13__.J)(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.jq)(this,_handleSelectionChange,handleSelectionChange_fn)}"
          @gds-focus="${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_handleOptionFocusChange)}"
          @keydown=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_handleListboxKeyDown)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_16__.z)(!this.hideLabel,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`
          <gds-form-control-footer class="size-${this.size}">
            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_16__.z)(this.invalid,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.qy`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `))}
          </gds-form-control-footer>
        `))}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var _a,_b;this.requestUpdate(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.OV)(this,_optionElements,this.querySelectorAll("[gds-element=gds-option]")),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=null==(_a=this.options[0])?void 0:_a.value:this.combobox||this.placeholder||void 0!==this.options.find((o=>this.compareWith(o.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=null==(_b=this.options[0])?void 0:_b.value)}_handleValueChange(){this._elListbox.then((listbox=>{listbox&&(Array.isArray(this.value)?listbox.selection=this.value:listbox.selection=[this.value])}))}_handleOpenChange(){var _this=this;const open=this.open;this.options.forEach((o=>o.hidden=!open)),open?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.jq)(this,_registerAutoCloseListener,registerAutoCloseListener_fn).call(this):((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.jq)(this,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const selectedOption=this.options.find((option=>option.selected));requestAnimationFrame((0,_home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_18__.A)((function*(){yield _this.updateComplete,null==selectedOption||selectedOption.scrollIntoView({block:"center"})})))}};_optionElements=new WeakMap,_renderCombobox=new WeakMap,_renderTriggerButton=new WeakMap,_calcMaxHeight=new WeakMap,_dispatchUISateEvent=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleSearchFieldInput=new WeakMap,_handleSearchFieldKeyDown=new WeakMap,_handleListboxKeyDown=new WeakMap,_handleOptionFocusChange=new WeakMap,_handleSelectionChange=new WeakSet,handleSelectionChange_fn=function(){this._elListbox.then((listbox=>{var _a;this.multiple?this.value=listbox.selection.map((s=>s.value)):(this.value=null==(_a=listbox.selection[0])?void 0:_a.value,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(this.open=!1,setTimeout((()=>{var _a2;return null==(_a2=this._elTriggerBtn)?void 0:_a2.focus()}),0))),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchInputEvent).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_dispatchChangeEvent).call(this)}))},_dispatchInputEvent=new WeakMap,_dispatchChangeEvent=new WeakMap,_registerAutoCloseListener=new WeakSet,registerAutoCloseListener_fn=function(){this.addEventListener("blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_blurCloseListener)),this.addEventListener("gds-blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_blurCloseListener)),this.addEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_tabCloseListener))},_unregisterAutoCloseListener=new WeakSet,unregisterAutoCloseListener_fn=function(){this.removeEventListener("blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_blurCloseListener)),this.removeEventListener("gds-blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_blurCloseListener)),this.removeEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.S7)(this,_tabCloseListener))},_blurCloseListener=new WeakMap,_tabCloseListener=new WeakMap,GdsDropdown.styles=[_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_8__.LU,dropdown_styles_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({attribute:"supporting-text"})],GdsDropdown.prototype,"supportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"open",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"searchable",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"multiple",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"combobox",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)()],GdsDropdown.prototype,"compareWith",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)()],GdsDropdown.prototype,"searchFilter",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({type:Boolean,attribute:"sync-popover-width"})],GdsDropdown.prototype,"syncPopoverWidth",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({type:Number,attribute:"max-height"})],GdsDropdown.prototype,"maxHeight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)()],GdsDropdown.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)({type:Boolean,attribute:"hide-label"})],GdsDropdown.prototype,"hideLabel",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.MZ)()],GdsDropdown.prototype,"disableMobileStyles",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.P)("#trigger")],GdsDropdown.prototype,"_elTriggerBtn",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.nJ)("#listbox")],GdsDropdown.prototype,"_elListbox",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_12__.P)("#searchinput")],GdsDropdown.prototype,"_elSearchInput",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_19__.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],GdsDropdown.prototype,"_handleLightDOMChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_7__.w)("value")],GdsDropdown.prototype,"_handleValueChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_7__.w)("open")],GdsDropdown.prototype,"_handleOpenChange",1),GdsDropdown=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_10__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_9__.Y$)("gds-dropdown",{dependsOn:[_chunk_EE47OSHY_js__WEBPACK_IMPORTED_MODULE_2__.$,_chunk_QAI5WQIV_js__WEBPACK_IMPORTED_MODULE_1__.V,_chunk_N3HNQKO4_js__WEBPACK_IMPORTED_MODULE_0__.w,_chunk_IKEM2YEF_js__WEBPACK_IMPORTED_MODULE_4__.V,_chunk_IJLBIJ5M_js__WEBPACK_IMPORTED_MODULE_3__.o]}),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_11__.cc)()],GdsDropdown)},"./dist/libs/core/src/chunks/chunk.DTC6C6H4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>GdsCard});var _chunk_ZKTN3NWR_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZKTN3NWR.js"),_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NUUST5OZ.js"),_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZE5LXBMJ.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/index.js"),GdsCard=class extends _chunk_ZKTN3NWR_js__WEBPACK_IMPORTED_MODULE_0__.o{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot></slot>`}};GdsCard.styles=[_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_2__.LU,lit__WEBPACK_IMPORTED_MODULE_5__.AH`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_1__.F)({property:"box-shadow",valueTemplate:v=>`var(--gds-shadow-${v})`})],GdsCard.prototype,"shadow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_1__.F)({styleTemplate:function(_prop,v){return`\n      --_border-color: var(--gds-color-l${this.level}-background-${v});\n      --_background-color: var(--gds-color-l${this.level}-background-${v});\n      --_color: var(--gds-color-l${this.level}-content-${v});\n      `}})],GdsCard.prototype,"variant",2),GdsCard=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-card")],GdsCard)},"./dist/libs/core/src/chunks/chunk.EE47OSHY.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>GdsFormControlHeader});var _handleExtSupTxtSlotChange,handleExtSupTxtSlotChange_fn,_renderExtSupTxtButton,_handleExtSupTxtBtnClick,_renderExtSupTxt,renderExtSupTxt_fn,_chunk_SUTM4B2O_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SUTM4B2O.js"),_chunk_DTC6C6H4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.DTC6C6H4.js"),_chunk_AS6VRCJQ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.AS6VRCJQ.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NAGWK5F6.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit-html/directives/when.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      line-height: var(--gds-text-line-height-detail-m);

      & > div {
        display: flex;
        flex-direction: column;
      }
    }

    ::slotted(label) {
      font-weight: var(--gds-text-weight-book);
    }

    :host(.size-small) {
      & slot[name='supporting-text'],
      & ::slotted(label) {
        font-size: var(--gds-text-size-detail-s);
        line-height: var(--gds-text-line-height-detail-s);
      }
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font-size: var(--gds-text-size-body-s);
      line-height: var(--gds-text-line-height-body-s);
      border-radius: var(--gds-space-xs);
      background-color: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      max-height: var(--_max-height);

      &[aria-hidden='false'] {
        margin: var(--gds-space-2xs) 0 0 0;
        padding: var(--gds-space-s) var(--gds-space-m);
      }

      &[aria-hidden='true'] {
        max-height: 0;
        opacity: 0;
        translate: 0 2px;
        padding: 0 var(--gds-space-m);
        margin: 0;
        overflow: hidden;
      }
    }
  }
`,GdsFormControlHeader=class extends _chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_4__.j{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleExtSupTxtSlotChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_renderExtSupTxt),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_renderExtSupTxtButton,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      <gds-button
        size="small"
        rank="tertiary"
        label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.ab)("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleExtSupTxtBtnClick)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `)),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleExtSupTxtBtnClick,(()=>{var _a;this.showExtendedSupportingText=!this.showExtendedSupportingText,null==(_a=this._extendedSupportingText)||_a.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}))}render(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__.z)(this._hasExtendedSupportingText,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_renderExtSupTxtButton))}
      </div>

      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_renderExtSupTxt,renderExtSupTxt_fn).call(this)}
    `}};_handleExtSupTxtSlotChange=new WeakSet,handleExtSupTxtSlotChange_fn=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},_renderExtSupTxtButton=new WeakMap,_handleExtSupTxtBtnClick=new WeakMap,_renderExtSupTxt=new WeakSet,renderExtSupTxt_fn=function(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_handleExtSupTxtSlotChange,handleExtSupTxtSlotChange_fn)}
        ></slot>
      </div>
    `},GdsFormControlHeader.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsFormControlHeader.prototype,"showExtendedSupportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.wk)()],GdsFormControlHeader.prototype,"_hasExtendedSupportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.P)("#extended-supporting-text")],GdsFormControlHeader.prototype,"_extendedSupportingText",2),GdsFormControlHeader=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-form-control-header",{dependsOn:[_chunk_AS6VRCJQ_js__WEBPACK_IMPORTED_MODULE_2__.t,_chunk_DTC6C6H4_js__WEBPACK_IMPORTED_MODULE_1__.z,_chunk_SUTM4B2O_js__WEBPACK_IMPORTED_MODULE_0__.w]}),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.cc)()],GdsFormControlHeader)},"./dist/libs/core/src/chunks/chunk.HDMA2Q3X.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>GdsBadge});var _renderLeadSlot,renderLeadSlot_fn,_renderMainSlot,renderMainSlot_fn,_handleSlotChange,handleSlotChange_fn,_renderTrailSlot,renderTrailSlot_fn,_chunk_S67HS4CR_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.S67HS4CR.js"),_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TWXTKG4B.js"),_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZE5LXBMJ.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NAGWK5F6.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),badge_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    display: inline-block;
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-space-s);
  }
`,GdsBadge=class extends((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_1__.Q8)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_1__.TM)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_1__.lt)(_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_4__.j)))){constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_renderLeadSlot),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_renderMainSlot),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSlotChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_renderTrailSlot),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const background=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",color=this.disabled?"disabled":this.notification?"primary":this.variant,padding="small"===this.size||this.notification?"2xs":"xs",blockSize=this.mainSlotOccupied?"small"===this.size||this.notification?"m":"l":"xs";return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`<gds-flex
      level="3"
      background=${background}
      color=${color}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${padding}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${blockSize}"
      width="100%"
      font-size="${"small"===this.size||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_renderLeadSlot,renderLeadSlot_fn).call(this)} ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_renderMainSlot,renderMainSlot_fn).call(this)}
      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_renderTrailSlot,renderTrailSlot_fn).call(this)}
    </gds-flex>`}};_renderLeadSlot=new WeakSet,renderLeadSlot_fn=function(){if("small"!==this.size||!this.notification)return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot name="lead"></slot>`},_renderMainSlot=new WeakSet,renderMainSlot_fn=function(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot @slotchange=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_handleSlotChange,handleSlotChange_fn)}></slot>`},_handleSlotChange=new WeakSet,handleSlotChange_fn=function(event){const assignedNodes=event.target.assignedNodes({flatten:!0});this.mainSlotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>{var _a;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_a=node.textContent)?void 0:_a.trim())}))},_renderTrailSlot=new WeakSet,renderTrailSlot_fn=function(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot name="trail"></slot>`},GdsBadge.styles=[_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_2__.LU,badge_style_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsBadge.prototype,"variant",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:String})],GdsBadge.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({attribute:"disabled",type:Boolean,reflect:!0})],GdsBadge.prototype,"disabled",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({attribute:"notification",type:Boolean,reflect:!0})],GdsBadge.prototype,"notification",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({attribute:"rounded",type:Boolean,reflect:!0})],GdsBadge.prototype,"rounded",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsBadge.prototype,"mainSlotOccupied",2),GdsBadge=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-badge",{dependsOn:[_chunk_S67HS4CR_js__WEBPACK_IMPORTED_MODULE_0__.o]})],GdsBadge)},"./dist/libs/core/src/chunks/chunk.IJLBIJ5M.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>IconChevronBottom});var _chunk_GZOA3K7L_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GZOA3K7L.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconChevronBottom=class extends _chunk_GZOA3K7L_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconChevronBottom._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronBottom._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',IconChevronBottom._name="chevron-bottom",IconChevronBottom=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-chevron-bottom")],IconChevronBottom)},"./dist/libs/core/src/chunks/chunk.N3HNQKO4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>GdsFieldBase});var _handleSlotChange,_renderFieldContents,renderFieldContents_fn,_renderSlotLead,renderSlotLead_fn,_renderSlotMain,renderSlotMain_fn,_renderSlotAction,renderSlotAction_fn,_renderSlotTrail,renderSlotTrail_fn,_chunk_GRK6I5M6_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GRK6I5M6.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NAGWK5F6.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_directives_map_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit-html/directives/map.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .field {
      display: flex;
      position: relative;
      align-items: center;
      justify-content: space-between;
      gap: var(--gds-space-xs);
      padding-block: var(--gds-space-xs);
      padding-inline: var(--gds-space-m) var(--gds-space-s);
      min-block-size: var(--gds-space-3xl);
      block-size: var(--gds-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-space-xs);
      background: var(--gds-color-l3-background-secondary);
      color: var(--gds-color-l3-content-tertiary);
      border: var(--gds-space-4xs) solid var(--gds-color-l3-border-secondary);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color;

      .right {
        display: flex;
        position: absolute;
        gap: var(--gds-space-xs);
        right: var(--gds-space-s);
        top: var(--gds-space-xs);
        block-size: max-content;
      }
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-space-s);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-space-s);

      &.small {
        padding-inline-end: var(--gds-space-xs);
      }
    }

    .field:focus-within {
      outline-width: var(--gds-space-3xs);
      outline-offset: var(--gds-space-3xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-space-2xs);
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs);
      min-block-size: var(--gds-space-xl);
      block-size: var(--gds-space-xl);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-space-s);
      padding-inline-start: var(--gds-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-color-l3-background-disabled);
      color: var(--gds-color-l3-content-disabled);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-color-l3-background-negative-secondary);
      border-color: var(--gds-color-l3-border-negative);
      color: var(--gds-color-l3-content-negative);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-space-xs);
      flex: 1;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-secondary),
          var(--gds-color-l3-states-light-hover)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-color-l3-background-negative-secondary),
          var(--gds-color-l3-states-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-space-l);
      block-size: var(--gds-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`,GdsFieldBase=class extends _chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_3__.j{constructor(){super(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderFieldContents),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotLead),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotMain),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotAction),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotTrail),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSlotChange,((slotName,event)=>{const assignedNodes=event.target.assignedNodes({flatten:!0}),slotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>{var _a;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_a=node.textContent)?void 0:_a.trim())}));"lead"===slotName?this._leadSlotOccupied=slotOccupied:"trail"===slotName?this._trailSlotOccupied=slotOccupied:"action"===slotName&&(this._actionSlotOccupied=slotOccupied)}))}connectedCallback(){super.connectedCallback(),_chunk_GRK6I5M6_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-field-base")}render(){var _a;const classes={invalid:null!=(_a=this.invalid)&&_a,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:"small"===this.size};return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`
      <div class="field ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__.H)(classes)}" part="_base">
        ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderFieldContents,renderFieldContents_fn).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};_handleSlotChange=new WeakMap,_renderFieldContents=new WeakSet,renderFieldContents_fn=function(){if(this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied))return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`
        ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotLead,renderSlotLead_fn).call(this)} ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotMain,renderSlotMain_fn).call(this)}
        <div class="right">
          ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotAction,renderSlotAction_fn).call(this)} ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotTrail,renderSlotTrail_fn).call(this)}
        </div>
      `;{const elements=[(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotLead,renderSlotLead_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotMain,renderSlotMain_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotAction,renderSlotAction_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotTrail,renderSlotTrail_fn).call(this)];return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`${(0,lit_directives_map_js__WEBPACK_IMPORTED_MODULE_9__.T)(elements,(el=>el))}`}},_renderSlotLead=new WeakSet,renderSlotLead_fn=function(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy` <slot
      name="lead"
      @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"lead",e)}
    ></slot>`},_renderSlotMain=new WeakSet,renderSlotMain_fn=function(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`<div
      class="main-slot-wrap ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__.H)({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"main",e)}
      ></slot>
    </div>`},_renderSlotAction=new WeakSet,renderSlotAction_fn=function(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`
      <slot
        name="action"
        @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"action",e)}
      ></slot>
    `},_renderSlotTrail=new WeakSet,renderSlotTrail_fn=function(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`
      <slot
        name="trail"
        @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"trail",e)}
      ></slot>
    `},GdsFieldBase.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsFieldBase.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean})],GdsFieldBase.prototype,"multiline",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsFieldBase.prototype,"disabled",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean})],GdsFieldBase.prototype,"invalid",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.P)("slot:not([name])")],GdsFieldBase.prototype,"_mainSlotElement",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_leadSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_trailSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_actionSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("disabled")],GdsFieldBase.prototype,"_handleDisabledChange",1),GdsFieldBase=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-field-base"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.cc)()],GdsFieldBase)},"./dist/libs/core/src/chunks/chunk.QAI5WQIV.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>GdsFormControlFooter});var _renderRemainingCharsBadge,renderRemainingCharsBadge_fn,_chunk_BI77AYZN_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.BI77AYZN.js"),_chunk_HDMA2Q3X_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.HDMA2Q3X.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NAGWK5F6.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit-html/directives/when.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-space-xs);
      margin-top: var(--gds-space-2xs);
      font-weight: var(--gds-text-weight-book);
      font-size: var(--gds-text-size-detail-s);
      color: var(--gds-color-l3-content-negative);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font-size: var(--gds-text-size-detail-xs);
        line-height: var(--gds-text-line-height-detail-s);
        gap: var(--gds-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`,GdsFormControlFooter=class extends _chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_3__.j{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderRemainingCharsBadge)}render(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_7__.z)(this.validationMessage,(()=>_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `))}</slot
        >
      </div>
      <div class="char-counter">
        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_7__.z)(Number.isInteger(this.charCounter),(()=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderRemainingCharsBadge,renderRemainingCharsBadge_fn).call(this,this.charCounter)))}
      </div>
    </div>`}};_renderRemainingCharsBadge=new WeakSet,renderRemainingCharsBadge_fn=function(remaining){let variant;return variant=remaining<0?"negative":remaining<20?"warning":"positive",_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`<gds-badge variant="${variant}">${remaining}</gds-badge>`},GdsFormControlFooter.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:Number})],GdsFormControlFooter.prototype,"charCounter",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)()],GdsFormControlFooter.prototype,"validationMessage",2),GdsFormControlFooter=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-form-control-footer",{dependsOn:[_chunk_HDMA2Q3X_js__WEBPACK_IMPORTED_MODULE_1__.K,_chunk_BI77AYZN_js__WEBPACK_IMPORTED_MODULE_0__.f]})],GdsFormControlFooter)},"./dist/libs/core/src/chunks/chunk.R7U3H5BL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{r:()=>IconCrossSmall});var _chunk_GZOA3K7L_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GZOA3K7L.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconCrossSmall=class extends _chunk_GZOA3K7L_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconCrossSmall._regularSVG='<path d="M7.75 7.75L16.25 16.25M16.25 7.75L7.75 16.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',IconCrossSmall._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M7.11612 7.11612C7.60427 6.62796 8.39573 6.62796 8.88388 7.11612L12 10.2322L15.1161 7.11612C15.6043 6.62796 16.3957 6.62796 16.8839 7.11612C17.372 7.60427 17.372 8.39573 16.8839 8.88388L13.7678 12L16.8839 15.1161C17.372 15.6043 17.372 16.3957 16.8839 16.8839C16.3957 17.372 15.6043 17.372 15.1161 16.8839L12 13.7678L8.88388 16.8839C8.39573 17.372 7.60427 17.372 7.11612 16.8839C6.62796 16.3957 6.62796 15.6043 7.11612 15.1161L10.2322 12L7.11612 8.88388C6.62796 8.39573 6.62796 7.60427 7.11612 7.11612Z" fill="currentColor"/>',IconCrossSmall._name="cross-small",IconCrossSmall=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-cross-small")],IconCrossSmall)},"./dist/libs/core/src/chunks/chunk.S67HS4CR.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>GdsFlex});var _chunk_ZKTN3NWR_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZKTN3NWR.js"),_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZE5LXBMJ.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),flex_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-color-l2-border-primary);
  }
`,GdsFlex=class extends _chunk_ZKTN3NWR_js__WEBPACK_IMPORTED_MODULE_0__.o{render(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.qy`<slot></slot>`}};GdsFlex.styles=[_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_1__.LU,flex_styles_default],GdsFlex=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-flex")],GdsFlex)},"./dist/libs/core/src/chunks/chunk.SUTM4B2O.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>IconCircleInfo});var _chunk_GZOA3K7L_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GZOA3K7L.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconCircleInfo=class extends _chunk_GZOA3K7L_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconCircleInfo._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',IconCircleInfo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',IconCircleInfo._name="circle-info",IconCircleInfo=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-circle-info")],IconCircleInfo)},"./dist/libs/core/src/chunks/chunk.U5O4X5G6.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./dist/libs/core/src/chunks/chunk.QAI5WQIV.js").V.define()},"./dist/libs/core/src/chunks/chunk.UTLPB46Z.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GdsPopover});var _handleTriggerSlotChange,handleTriggerSlotChange_fn,_autoPositionCleanupFn,_isMobileViewport,_backdropEl,_handleCancel,_dispatchUiStateEvent,_handleCloseButton,_registerTriggerEvents,registerTriggerEvents_fn,_unregisterTriggerEvents,unregisterTriggerEvents_fn,_setupTriggerAttributes,setupTriggerAttributes_fn,_registerAutoPositioning,registerAutoPositioning_fn,_handleTriggerKeyDown,_handleTriggerClick,_focusFirstSlottedChild,_handleClickOutside,_chunk_R7U3H5BL_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.R7U3H5BL.js"),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_GRK6I5M6_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GRK6I5M6.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NAGWK5F6.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit/directives/class-map.js"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),popover_styles_default=lit__WEBPACK_IMPORTED_MODULE_7__.AH`
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
`,GdsPopover=class extends _chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_4__.j{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleTriggerSlotChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_registerTriggerEvents),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_unregisterTriggerEvents),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_setupTriggerAttributes),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_registerAutoPositioning),this.open=!1,this.popupRole="dialog",this.label=void 0,this.placement="bottom-start",this.disableMobileStyles=!1,this.autofocus=!1,this.calcMinWidth=referenceEl=>`${referenceEl.offsetWidth}px`,this.calcMaxWidth=_referenceEl=>"auto",this.calcMinHeight=_referenceEl=>"auto",this.calcMaxHeight=_referenceEl=>window.innerHeight-16+"px",this.nonmodal=!1,this.floatingUIMiddleware=GdsPopover.DefaultMiddleware,this._trigger=void 0,this._anchor=void 0,this._isVirtKbVisible=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_autoPositionCleanupFn,void 0),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_isMobileViewport,!1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_backdropEl,void 0),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleCancel,(()=>{(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUiStateEvent).call(this,"cancel")&&(this.open=!1)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_dispatchUiStateEvent,(reason=>{const toState="show"===reason;return this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open:toState,reason},bubbles:!1,composed:!1,cancelable:!0}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleCloseButton,(e=>{e.stopPropagation(),e.preventDefault(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUiStateEvent).call(this,"close")&&(this.open=!1,setTimeout((()=>{var _a;return null==(_a=this._trigger)?void 0:_a.focus()}),250))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleTriggerKeyDown,(e=>{"ArrowDown"!==e.key&&"ArrowUp"!==e.key||(e.preventDefault(),this.open=!0,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUiStateEvent).call(this,"show")),"Escape"===e.key&&this.open&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleCancel).call(this)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleTriggerClick,(e=>{e.preventDefault(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUiStateEvent).call(this,this.open?"close":"show")&&(this.open=!this.open)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_focusFirstSlottedChild,(()=>{var _a;const firstSlottedChild=null==(_a=this._elDefaultSlot)?void 0:_a.assignedElements()[0];this.updateComplete.then((()=>{null==firstSlottedChild||firstSlottedChild.focus()}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleClickOutside,(evt=>{const e=evt,dialog=this._elDialog;if((e.clientX>0||e.clientY>0)&&dialog&&this.open){const rect=dialog.getBoundingClientRect();!(rect.top<=e.clientY&&e.clientY<=rect.top+rect.height&&rect.left<=e.clientX&&e.clientX<=rect.left+rect.width)&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUiStateEvent).call(this,"close")&&(this.open=!1)}}))}_handleTriggerRefChanged(){var _a;null==(_a=this.triggerRef)||_a.then((el=>{el&&(this._trigger=el)}))}_handleAnchorRefChanged(){var _a;null==(_a=this.anchorRef)||_a.then((el=>{el&&(this._anchor=el)}))}_handleTriggerChanged(){(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_setupTriggerAttributes,setupTriggerAttributes_fn).call(this)}_handleAnchorChanged(){(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}connectedCallback(){super.connectedCallback(),_chunk_GRK6I5M6_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-popover"),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_registerTriggerEvents,registerTriggerEvents_fn).call(this),this._handleOpenChange(),this.addEventListener("keydown",(e=>{"Escape"===e.key&&this.open&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleCancel).call(this),e.stopPropagation(),e.preventDefault())})),this.addEventListener("focusin",(e=>{const t=e.target;"INPUT"===t.tagName||"TEXTAREA"===t.tagName?this._isVirtKbVisible=!0:this._isVirtKbVisible=!1})),this.addEventListener("blurin",(_=>{this._isVirtKbVisible=!1}))}disconnectedCallback(){super.disconnectedCallback(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_unregisterTriggerEvents,unregisterTriggerEvents_fn).call(this)}render(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot
        name="trigger"
        @slotchange=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_handleTriggerSlotChange,handleTriggerSlotChange_fn)}
      ></slot>
      <div ?hidden="${!this.open}">
        <dialog
          class="${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_9__.H)({"v-kb-visible":this._isVirtKbVisible,"use-modal-in-mobile":!this.disableMobileStyles,"has-backdrop":Boolean(this.backdrop&&"true"===this.backdrop)})}"
          ?inert="${!this.open}"
          @close=${()=>this.open&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleCancel).call(this)}
        >
          <header>
            <h2>${this.label}</h2>
            <gds-button
              @click=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleCloseButton)}
              class="close"
              label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.ab)("Close")}"
              size="small"
              rank="tertiary"
            >
              <gds-icon-cross-small></gds-icon-cross-small>
            </gds-button>
          </header>
          <slot></slot>
        </dialog>
      </div>`}_handleOpenChange(){const clickOutsideTarget=(this.nonmodal?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_backdropEl):this._elDialog)||document;this.updateComplete.then((()=>{var _a,_b,_c,_d;null==(_a=this._trigger)||_a.setAttribute("aria-expanded",String(this.open)),this.open?(this.nonmodal?null==(_c=this._elDialog)||_c.setAttribute("open","true"):null==(_b=this._elDialog)||_b.showModal(),this.autofocus&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_focusFirstSlottedChild).call(this),setTimeout((()=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_focusFirstSlottedChild).call(this)),250)),requestAnimationFrame((()=>{(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_backdropEl)&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_backdropEl).show=!0)})),setTimeout((()=>clickOutsideTarget.addEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleClickOutside))),0)):(null==(_d=this._elDialog)||_d.close(),clickOutsideTarget.removeEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleClickOutside)),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_backdropEl)&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_backdropEl).show=!1))}))}_handleBackdropChange(){var _a;const parentRoot=null==(_a=this.parentElement)?void 0:_a.getRootNode();this.backdrop&&parentRoot&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_backdropEl,parentRoot.querySelector(this.backdrop))}_handleMobileLayout(matches){var _a,_b,_c,_d;(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_isMobileViewport,matches),matches&&!this.disableMobileStyles?(null==(_a=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_autoPositionCleanupFn))||_a.call(this),null==(_b=this._elDialog)||_b.style.removeProperty("left"),null==(_c=this._elDialog)||_c.style.removeProperty("top"),null==(_d=this._elDialog)||_d.style.removeProperty("minWidth"),this.updateComplete.then((()=>{var _a2;this.open&&(null==(_a2=this._elDialog)||_a2.showModal())}))):this.updateComplete.then((()=>{(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_registerAutoPositioning,registerAutoPositioning_fn).call(this)}))}};_handleTriggerSlotChange=new WeakSet,handleTriggerSlotChange_fn=function(){this._elTriggerSlot&&this._elTriggerSlot.assignedElements()[0]&&(this._trigger=this._elTriggerSlot.assignedElements()[0],this._anchor=this._elTriggerSlot.assignedElements()[0])},_autoPositionCleanupFn=new WeakMap,_isMobileViewport=new WeakMap,_backdropEl=new WeakMap,_handleCancel=new WeakMap,_dispatchUiStateEvent=new WeakMap,_handleCloseButton=new WeakMap,_registerTriggerEvents=new WeakSet,registerTriggerEvents_fn=function(){var _a,_b;null==(_a=this._trigger)||_a.addEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleTriggerKeyDown)),null==(_b=this._trigger)||_b.addEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleTriggerClick))},_unregisterTriggerEvents=new WeakSet,unregisterTriggerEvents_fn=function(){var _a,_b,_c;null==(_a=this._trigger)||_a.removeEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleTriggerKeyDown)),null==(_b=this._trigger)||_b.removeEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleTriggerClick)),null==(_c=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_autoPositionCleanupFn))||_c.call(this)},_setupTriggerAttributes=new WeakSet,setupTriggerAttributes_fn=function(){var _a;if(this._trigger){null==(_a=this._trigger)||_a.setAttribute("aria-expanded",String(this.open));const focusableNodeNames=["A","BUTTON","INPUT","TEXTAREA"];this._trigger.nodeName.startsWith("GDS-")||focusableNodeNames.includes(this._trigger.nodeName)||(this._trigger.setAttribute("tabindex","0"),this._trigger.setAttribute("role","button"));const ariaHasPopupAttr=this._trigger.nodeName.startsWith("GDS-")?"gds-aria-haspopup":"aria-haspopup";null===this._trigger.getAttribute(ariaHasPopupAttr)&&this._trigger.setAttribute(ariaHasPopupAttr,this.popupRole)}},_registerAutoPositioning=new WeakSet,registerAutoPositioning_fn=function(){if(!this._anchor||!this._elDialog)return;const referenceEl=this._anchor,floatingEl=this._elDialog;referenceEl&&floatingEl&&(!(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_isMobileViewport)||this.disableMobileStyles)&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_autoPositionCleanupFn)&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_autoPositionCleanupFn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_autoPositionCleanupFn,(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__.ll)(referenceEl,floatingEl,(()=>{Object.assign(floatingEl.style,{minWidth:this.calcMinWidth(referenceEl),maxWidth:this.calcMaxWidth(referenceEl),minHeight:this.calcMinHeight(referenceEl),maxHeight:this.calcMaxHeight(referenceEl)}),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__.rD)(referenceEl,floatingEl,{placement:this.placement,middleware:this.floatingUIMiddleware,strategy:"fixed"}).then((({x,y})=>Object.assign(floatingEl.style,{left:`${x}px`,top:`${y}px`})))}))))},_handleTriggerKeyDown=new WeakMap,_handleTriggerClick=new WeakMap,_focusFirstSlottedChild=new WeakMap,_handleClickOutside=new WeakMap,GdsPopover.styles=(0,lit__WEBPACK_IMPORTED_MODULE_7__.iz)(popover_styles_default),GdsPopover.DefaultMiddleware=[(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__.cY)(8),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_10__.BN)({crossAxis:!0,padding:8})],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"open",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:"popup-role"})],GdsPopover.prototype,"popupRole",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:!1})],GdsPopover.prototype,"triggerRef",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:!1})],GdsPopover.prototype,"anchorRef",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],GdsPopover.prototype,"label",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],GdsPopover.prototype,"placement",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean})],GdsPopover.prototype,"disableMobileStyles",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean})],GdsPopover.prototype,"autofocus",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinWidth",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxWidth",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMinHeight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:!1})],GdsPopover.prototype,"calcMaxHeight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({type:Boolean,reflect:!0})],GdsPopover.prototype,"nonmodal",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)()],GdsPopover.prototype,"backdrop",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.MZ)({attribute:!1})],GdsPopover.prototype,"floatingUIMiddleware",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.wk)()],GdsPopover.prototype,"_trigger",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.wk)()],GdsPopover.prototype,"_anchor",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.wk)()],GdsPopover.prototype,"_isVirtKbVisible",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.P)("slot:not([name])")],GdsPopover.prototype,"_elDefaultSlot",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.P)('slot[name="trigger"]')],GdsPopover.prototype,"_elTriggerSlot",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_8__.P)("dialog")],GdsPopover.prototype,"_elDialog",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("triggerRef")],GdsPopover.prototype,"_handleTriggerRefChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("anchorRef")],GdsPopover.prototype,"_handleAnchorRefChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("_trigger")],GdsPopover.prototype,"_handleTriggerChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("_anchor")],GdsPopover.prototype,"_handleAnchorChanged",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("open")],GdsPopover.prototype,"_handleOpenChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("backdrop")],GdsPopover.prototype,"_handleBackdropChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_11__.M)("(max-width: 576px)")],GdsPopover.prototype,"_handleMobileLayout",1),GdsPopover=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-popover",{dependsOn:[_chunk_R7U3H5BL_js__WEBPACK_IMPORTED_MODULE_0__.r]}),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.cc)()],GdsPopover)},"./dist/libs/core/src/chunks/chunk.VZ4GIVMX.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./dist/libs/core/src/chunks/chunk.N3HNQKO4.js").w.define()},"./dist/libs/core/src/chunks/chunk.XGO2NC7O.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./dist/libs/core/src/chunks/chunk.EE47OSHY.js").$.define()},"./dist/libs/core/src/chunks/chunk.YQZ3Y2QT.js":(__unused_webpack_module,__unused_webpack___webpack_exports__,__webpack_require__)=>{__webpack_require__("./dist/libs/core/src/chunks/chunk.ZKTN3NWR.js").o.define()},"./dist/libs/core/src/chunks/chunk.ZKTN3NWR.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>GdsDiv});var _chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TWXTKG4B.js"),_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.76QWARGM.js"),_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NUUST5OZ.js"),_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZE5LXBMJ.js"),_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.EGTIV5MO.js"),_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NAGWK5F6.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),div_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-color-l2-border-primary);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`,GdsDiv=class extends((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.Q8)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.vi)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.TM)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.Md)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.lt)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.qC)(_chunk_NAGWK5F6_js__WEBPACK_IMPORTED_MODULE_5__.j))))))){constructor(){super(...arguments),this.level="2"}render(){return _chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_4__.qy`<slot></slot>`}};GdsDiv.styles=[_chunk_ZE5LXBMJ_js__WEBPACK_IMPORTED_MODULE_3__.LU,div_style_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"display",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsDiv.prototype,"level",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.T$)("content"))],GdsDiv.prototype,"color",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.T$)("background"))],GdsDiv.prototype,"background",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({styleTemplate:function(_prop,values){const this_=this,[size,style2=this_["border-style"]||"solid",color=this_["border-color"]||"primary"]=values;return`border: ${`var(--gds-space-${size})`} ${style2} ${(0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.ol)(color,"border",this_.level)};`}})],GdsDiv.prototype,"border",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.T$)("border"))],GdsDiv.prototype,"border-color",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)(_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.MF)],GdsDiv.prototype,"border-width",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"border-style",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)(_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.MF)],GdsDiv.prototype,"border-radius",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({valueTemplate:v=>`var(--gds-shadow-${v})`})],GdsDiv.prototype,"box-shadow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"opacity",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"overflow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"box-sizing",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"z-index",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({styleTemplate:(_prop,values)=>{const size=values[0];return`font-size: var(--gds-text-size-${size});`+`line-height: var(--gds-text-line-height-${size});`}})],GdsDiv.prototype,"font-size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({valueTemplate:v=>`var(--gds-text-weight-${v})`})],GdsDiv.prototype,"font-weight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"text-align",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"text-wrap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"overflow-wrap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.ko)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.IA)({},_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.MF),{styleTemplate:(_prop,values)=>{const colGap=values[0];return`gap: ${colGap} ${values[1]||colGap};`},cacheOverrideKey:"flex"}))],GdsDiv.prototype,"gap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"align-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"align-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"justify-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"justify-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"flex-direction",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"flex-wrap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"place-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"place-content",2),GdsDiv=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_EGTIV5MO_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-div")],GdsDiv)}}]);
//# sourceMappingURL=1909.a5091dc3.iframe.bundle.js.map
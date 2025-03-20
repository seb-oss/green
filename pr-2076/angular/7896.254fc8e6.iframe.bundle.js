"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7896],{"./dist/libs/core/src/chunks/chunk.2BJVQ5WE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _handleExtSupTxtSlotChange,handleExtSupTxtSlotChange_fn,_renderExtSupTxtButton,_handleExtSupTxtBtnClick,_renderExtSupTxt,renderExtSupTxt_fn,_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit-html/directives/when.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,GdsFormControlHeader=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_0__.j{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.VK)(this,_handleExtSupTxtSlotChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.VK)(this,_renderExtSupTxt),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.VK)(this,_renderExtSupTxtButton,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.qy`
      <gds-button
        size="small"
        rank="tertiary"
        label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_3__.ab)("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_handleExtSupTxtBtnClick)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `)),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.VK)(this,_handleExtSupTxtBtnClick,(()=>{var _a;this.showExtendedSupportingText=!this.showExtendedSupportingText,null==(_a=this._extendedSupportingText)||_a.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchEvent(new CustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText}))}))}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.qy`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_6__.z)(this._hasExtendedSupportingText,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.S7)(this,_renderExtSupTxtButton))}
      </div>

      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.jq)(this,_renderExtSupTxt,renderExtSupTxt_fn).call(this)}
    `}};_handleExtSupTxtSlotChange=new WeakSet,handleExtSupTxtSlotChange_fn=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},_renderExtSupTxtButton=new WeakMap,_handleExtSupTxtBtnClick=new WeakMap,_renderExtSupTxt=new WeakSet,renderExtSupTxt_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.qy`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.jq)(this,_handleExtSupTxtSlotChange,handleExtSupTxtSlotChange_fn)}
        ></slot>
      </div>
    `},GdsFormControlHeader.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean,reflect:!0})],GdsFormControlHeader.prototype,"showExtendedSupportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.wk)()],GdsFormControlHeader.prototype,"_hasExtendedSupportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.P)("#extended-supporting-text")],GdsFormControlHeader.prototype,"_extendedSupportingText",2),GdsFormControlHeader=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-form-control-header"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_3__.cc)()],GdsFormControlHeader)},"./dist/libs/core/src/chunks/chunk.BCODSKO4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _handleSlotChange,_renderFieldContents,renderFieldContents_fn,_renderSlotLead,renderSlotLead_fn,_renderSlotMain,renderSlotMain_fn,_renderSlotAction,renderSlotAction_fn,_renderSlotTrail,renderSlotTrail_fn,_chunk_QL3FGWKY_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QL3FGWKY.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_directives_map_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit-html/directives/map.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,GdsFieldBase=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__.j{constructor(){super(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderFieldContents),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotLead),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotMain),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotAction),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotTrail),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSlotChange,((slotName,event)=>{const assignedNodes=event.target.assignedNodes({flatten:!0}),slotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>{var _a;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_a=node.textContent)?void 0:_a.trim())}));"lead"===slotName?this._leadSlotOccupied=slotOccupied:"trail"===slotName?this._trailSlotOccupied=slotOccupied:"action"===slotName&&(this._actionSlotOccupied=slotOccupied)}))}connectedCallback(){super.connectedCallback(),_chunk_QL3FGWKY_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-field-base")}render(){var _a;const classes={invalid:null!=(_a=this.invalid)&&_a,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:"small"===this.size};return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      <div class="field ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__.H)(classes)}" part="_base">
        ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderFieldContents,renderFieldContents_fn).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};_handleSlotChange=new WeakMap,_renderFieldContents=new WeakSet,renderFieldContents_fn=function(){if(this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied))return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
        ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotLead,renderSlotLead_fn).call(this)} ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotMain,renderSlotMain_fn).call(this)}
        <div class="right">
          ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotAction,renderSlotAction_fn).call(this)} ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotTrail,renderSlotTrail_fn).call(this)}
        </div>
      `;{const elements=[(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotLead,renderSlotLead_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotMain,renderSlotMain_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotAction,renderSlotAction_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotTrail,renderSlotTrail_fn).call(this)];return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`${(0,lit_directives_map_js__WEBPACK_IMPORTED_MODULE_9__.T)(elements,(el=>el))}`}},_renderSlotLead=new WeakSet,renderSlotLead_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy` <slot
      name="lead"
      @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"lead",e)}
    ></slot>`},_renderSlotMain=new WeakSet,renderSlotMain_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<div
      class="main-slot-wrap ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__.H)({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"main",e)}
      ></slot>
    </div>`},_renderSlotAction=new WeakSet,renderSlotAction_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      <slot
        name="action"
        @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"action",e)}
      ></slot>
    `},_renderSlotTrail=new WeakSet,renderSlotTrail_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      <slot
        name="trail"
        @slotchange=${e=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSlotChange).call(this,"trail",e)}
      ></slot>
    `},GdsFieldBase.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsFieldBase.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean})],GdsFieldBase.prototype,"multiline",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsFieldBase.prototype,"disabled",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean})],GdsFieldBase.prototype,"invalid",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.P)("slot:not([name])")],GdsFieldBase.prototype,"_mainSlotElement",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_leadSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_trailSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_actionSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("disabled")],GdsFieldBase.prototype,"_handleDisabledChange",1),GdsFieldBase=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-field-base"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.cc)()],GdsFieldBase)},"./dist/libs/core/src/chunks/chunk.BK2SJQPM.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_GUAH7AIO_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GUAH7AIO.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconChevronBottom=class extends _chunk_GUAH7AIO_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconChevronBottom._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronBottom._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',IconChevronBottom._name="chevron-bottom",IconChevronBottom=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-chevron-bottom")],IconChevronBottom)},"./dist/libs/core/src/chunks/chunk.H4QXCNY2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_GUAH7AIO_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GUAH7AIO.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconCircleInfo=class extends _chunk_GUAH7AIO_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconCircleInfo._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',IconCircleInfo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',IconCircleInfo._name="circle-info",IconCircleInfo=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-circle-info")],IconCircleInfo)},"./dist/libs/core/src/chunks/chunk.HO2KZJXR.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _renderRemainingCharsBadge,renderRemainingCharsBadge_fn,_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit-html/directives/when.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,GdsFormControlFooter=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_0__.j{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.VK)(this,_renderRemainingCharsBadge)}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.qy`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_5__.z)(this.validationMessage,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.qy`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.validationMessage}
            `))}</slot
        >
      </div>
      <div class="char-counter">
        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_5__.z)(Number.isInteger(this.charCounter),(()=>(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.jq)(this,_renderRemainingCharsBadge,renderRemainingCharsBadge_fn).call(this,this.charCounter)))}
      </div>
    </div>`}};_renderRemainingCharsBadge=new WeakSet,renderRemainingCharsBadge_fn=function(remaining){let variant;return variant=remaining<0?"negative":remaining<20?"warning":"positive",_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.qy`<gds-badge variant="${variant}">${remaining}</gds-badge>`},GdsFormControlFooter.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.MZ)({type:Number})],GdsFormControlFooter.prototype,"charCounter",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.MZ)()],GdsFormControlFooter.prototype,"validationMessage",2),GdsFormControlFooter=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-form-control-footer")],GdsFormControlFooter)},"./dist/libs/core/src/chunks/chunk.JFR2QEWN.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_NWZOJ7GA_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NWZOJ7GA.js"),_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NUUST5OZ.js"),_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5SQWF4ZG.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/index.js"),GdsCard=class extends _chunk_NWZOJ7GA_js__WEBPACK_IMPORTED_MODULE_0__.o{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot></slot>`}};GdsCard.styles=[_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_2__.LU,lit__WEBPACK_IMPORTED_MODULE_5__.AH`
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
    `],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_1__.F)({property:"box-shadow",valueTemplate:v=>`var(--gds-shadow-${v})`})],GdsCard.prototype,"shadow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_1__.F)({styleTemplate:function(_prop,v){return`\n      --_border-color: var(--gds-color-l${this.level}-background-${v});\n      --_background-color: var(--gds-color-l${this.level}-background-${v});\n      --_color: var(--gds-color-l${this.level}-content-${v});\n      `}})],GdsCard.prototype,"variant",2),GdsCard=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-card")],GdsCard)},"./dist/libs/core/src/chunks/chunk.KVVF2JT2.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _hidden,_emitSelect,emitSelect_fn,_chunk_YSAE26FD_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.YSAE26FD.js"),_chunk_QL3FGWKY_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QL3FGWKY.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5SQWF4ZG.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit-html/directives/when.js"),GdsOption=class extends((0,_chunk_YSAE26FD_js__WEBPACK_IMPORTED_MODULE_0__.z)(_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_4__.j)){constructor(){super(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.VK)(this,_emitSelect),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.VK)(this,_hidden,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.jq)(this,_emitSelect,emitSelect_fn)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.jq)(this,_emitSelect,emitSelect_fn).call(this,e))}))}get hidden(){return(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.S7)(this,_hidden)}set hidden(value){const strValue=value.toString();(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,"true"===strValue),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.S7)(this,_hidden)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then((()=>{this.isPlaceholder&&(this.hidden=!0),_chunk_QL3FGWKY_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-option")}))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){var _a;const isMultiple=null==(_a=this.parentElement)?void 0:_a.multiple,checkbox=_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.qy`
      <span class="checkbox ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__.H)({checked:this.selected})}">
        ${this.selected?_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.qy`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return isMultiple||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.qy`<div>${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__.z)(isMultiple,(()=>checkbox))} <slot></slot></div>`}};_hidden=new WeakMap,_emitSelect=new WeakSet,emitSelect_fn=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},GdsOption.styles=[_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_3__.LU,_chunk_YSAE26FD_js__WEBPACK_IMPORTED_MODULE_0__.l],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsOption.prototype,"value",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"hidden",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:"aria-selected",reflect:!0})],GdsOption.prototype,"selected",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"isPlaceholder",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("isPlaceholder")],GdsOption.prototype,"_handlePlaceholderStatusChange",1),GdsOption=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.Y$)("gds-option")],GdsOption)},"./dist/libs/core/src/chunks/chunk.NWZOJ7GA.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>GdsDiv});var _chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TWXTKG4B.js"),_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.76QWARGM.js"),_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NUUST5OZ.js"),_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5SQWF4ZG.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),div_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,GdsDiv=class extends((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.Q8)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.vi)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.TM)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.Md)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.lt)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.qC)(_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_4__.j))))))){constructor(){super(...arguments),this.level="2"}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.qy`<slot></slot>`}};GdsDiv.styles=[_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_3__.LU,div_style_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"display",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsDiv.prototype,"level",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.T$)("content"))],GdsDiv.prototype,"color",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.T$)("background"))],GdsDiv.prototype,"background",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({styleTemplate:function(_prop,values){const this_=this,[size,style2=this_["border-style"]||"solid",color=this_["border-color"]||"primary"]=values;return`border: ${`var(--gds-space-${size})`} ${style2} ${(0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.ol)(color,"border",this_.level)};`}})],GdsDiv.prototype,"border",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.T$)("border"))],GdsDiv.prototype,"border-color",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)(_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.MF)],GdsDiv.prototype,"border-width",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"border-style",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)(_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.MF)],GdsDiv.prototype,"border-radius",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({valueTemplate:v=>`var(--gds-shadow-${v})`})],GdsDiv.prototype,"box-shadow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"opacity",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"overflow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"box-sizing",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"z-index",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({styleTemplate:(_prop,values)=>{const size=values[0];return`font-size: var(--gds-text-size-${size});`+`line-height: var(--gds-text-line-height-${size});`}})],GdsDiv.prototype,"font-size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)({valueTemplate:v=>`var(--gds-text-weight-${v})`})],GdsDiv.prototype,"font-weight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"text-align",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"text-wrap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"overflow-wrap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.ko)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.IA)({},_chunk_76QWARGM_js__WEBPACK_IMPORTED_MODULE_1__.MF),{styleTemplate:(_prop,values)=>{const colGap=values[0];return`gap: ${colGap} ${values[1]||colGap};`},cacheOverrideKey:"flex"}))],GdsDiv.prototype,"gap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"align-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"align-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"justify-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"justify-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"flex-direction",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"flex-wrap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"place-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_NUUST5OZ_js__WEBPACK_IMPORTED_MODULE_2__.F)()],GdsDiv.prototype,"place-content",2),GdsDiv=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.Y$)("gds-div")],GdsDiv)},"./dist/libs/core/src/chunks/chunk.S3FBHJYG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_GUAH7AIO_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.GUAH7AIO.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconTriangleExclamation=class extends _chunk_GUAH7AIO_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconTriangleExclamation._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM11.3543 2.36845L1.60431 18.8685L2.89569 19.6315L12.6457 3.13155L11.3543 2.36845ZM2.25 20H21.75V18.5H2.25V20ZM22.3957 18.8685L12.6457 2.36845L11.3543 3.13155L21.1043 19.6315L22.3957 18.8685ZM11.25 9.75V13.25H12.75V9.75H11.25ZM11.5 15.75C11.5 15.4739 11.7239 15.25 12 15.25V16.75C12.5523 16.75 13 16.3023 13 15.75H11.5ZM12 15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11C11 16.3023 11.4477 16.75 12 16.75V15.25ZM12.5 15.75C12.5 16.0261 12.2761 16.25 12 16.25V14.75C11.4477 14.75 11 15.1977 11 15.75H12.5ZM12 16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H13C13 15.1977 12.5523 14.75 12 14.75V16.25ZM12.75 15.75V15.74H11.25V15.75H12.75Z" fill="currentColor"/>',IconTriangleExclamation._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>',IconTriangleExclamation._name="triangle-exclamation",IconTriangleExclamation=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-triangle-exclamation")],IconTriangleExclamation)},"./dist/libs/core/src/chunks/chunk.TPC4MJKQ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _slotRef,_handleSelect,_chunk_E62NOHQC_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.E62NOHQC.js"),_chunk_QL3FGWKY_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QL3FGWKY.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/ref.js"),listbox_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,GdsListbox=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_3__.j{constructor(){super(),this.multiple=!1,this.compareWith=(a,b)=>a===b,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_slotRef,(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__._)()),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSelect,(e=>{const option=e.target;this.multiple?option.selected=!option.selected:(option.selected=!0,Array.from(this.options).forEach((el=>{el!==option&&(el.selected=!1)}))),this.ariaActiveDescendantElement=option,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))})),new _chunk_E62NOHQC_js__WEBPACK_IMPORTED_MODULE_0__.y(this)}get navigableItems(){return this.visibleOptionElements}get options(){return(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value&&(0,_chunk_E62NOHQC_js__WEBPACK_IMPORTED_MODULE_0__.o)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value).assignedElements().filter((o=>!o.hasAttribute("isplaceholder")&&"gds-option"===o.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((el=>!el.hidden))}get visibleSelectedOptionElements(){return this.options.filter((el=>el.selected&&!el.hidden))}get selection(){return this.options.filter((el=>el.selected))}set selection(values){this.options.forEach((el=>{el.selected=values.some((v=>this.compareWith(v,el.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),_chunk_QL3FGWKY_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSelect))}focus(){var _a;null==(_a=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])||_a.focus()}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`<slot ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__.K)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef))}></slot>`}_rerenderOptions(){this.options.forEach((el=>{el.requestUpdate()}))}};_slotRef=new WeakMap,_handleSelect=new WeakMap,GdsListbox.styles=listbox_styles_default,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:value=>value.toString()}})],GdsListbox.prototype,"multiple",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsListbox.prototype,"compareWith",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("multiple")],GdsListbox.prototype,"_rerenderOptions",1),GdsListbox=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-listbox")],GdsListbox)},"./dist/libs/core/src/chunks/chunk.XHRGEZLB.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _optionElements,_renderCombobox,_renderTriggerButton,_calcMaxHeight,_dispatchUISateEvent,_handlePopoverStateChange,_handleSearchFieldInput,_handleSearchFieldKeyDown,_handleListboxKeyDown,_handleOptionFocusChange,_handleSelectionChange,handleSelectionChange_fn,_dispatchInputEvent,_dispatchChangeEvent,_registerAutoCloseListener,registerAutoCloseListener_fn,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn,_blurCloseListener,_tabCloseListener,_home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),_chunk_LUBJNTGE_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.LUBJNTGE.js"),_chunk_VA6TUMR2_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.VA6TUMR2.js"),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5SQWF4ZG.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./node_modules/lit-html/directives/when.js"),_floating_ui_dom__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),dropdown_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,GdsDropdown=class extends _chunk_VA6TUMR2_js__WEBPACK_IMPORTED_MODULE_1__.S{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSelectionChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_registerAutoCloseListener),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_unregisterAutoCloseListener),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(a,b)=>a===b,this.searchFilter=(q,o)=>o.innerHTML.toLowerCase().includes(q.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_optionElements,void 0),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_renderCombobox,(()=>{var _a;return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`
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
        @input=${e=>{this.value=e.target.value,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchInputEvent).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSearchFieldInput).call(this,e),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUISateEvent).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{"ArrowDown"===e.key&&(e.preventDefault(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUISateEvent).call(this,!0,"show")&&(this.open=!0),this._elListbox.then((listbox=>listbox.focus()))),"Enter"===e.key&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchChangeEvent).call(this)}}
      />
    `})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_renderTriggerButton,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`
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
          <span>${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_9__._)(this.displayValue)}</span>
        </slot>
      </button>
    `)),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_calcMaxHeight,(trigger=>{if(this.combobox){const triggerRect=trigger.getBoundingClientRect(),bottomSpace=window.innerHeight-triggerRect.bottom,topSpace=triggerRect.top;let height2=Math.min(topSpace,this.maxHeight);return bottomSpace>topSpace&&(height2=Math.min(bottomSpace,this.maxHeight)),height2-16+"px"}return Math.min(window.innerHeight,this.maxHeight)-16+"px"})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_dispatchUISateEvent,((toState,reason)=>this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{reason,open:toState},bubbles:!1,composed:!1,cancelable:!0})))),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handlePopoverStateChange,(e=>{(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUISateEvent).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSearchFieldInput,(e=>{if(!e.currentTarget)return;e.stopPropagation();if(!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0})))return;const input=e.currentTarget;if(this.options.forEach((o=>o.hidden=!1)),!input.value)return;this.options.filter((o=>!this.searchFilter(input.value,o))).forEach((o=>o.hidden=!0))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSearchFieldKeyDown,(e=>{var _a;null==(_a=this._elListbox)||_a.then((listbox=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void listbox.focus()}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleListboxKeyDown,(e=>{var _a;if("Tab"===e.key&&this.searchable)return e.preventDefault(),void(null==(_a=this._elSearchInput)||_a.focus())})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleOptionFocusChange,(e=>{const triggerButton=this._elTriggerBtn;triggerButton&&(triggerButton.ariaActiveDescendantElement=e.target)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_dispatchInputEvent,(()=>{this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_dispatchChangeEvent,(()=>{this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_blurCloseListener,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(this.open=!1)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_tabCloseListener,(e=>{var _a;"Tab"===e.key&&!this.searchable&&(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,null==(_a=this._elTriggerBtn)||_a.focus())}))}get type(){return"gds-dropdown"}get options(){return(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements)?Array.from((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements)).filter((o=>!o.hasAttribute("isplaceholder"))):[]}get placeholder(){if((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements))return Array.from((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_optionElements)).find((o=>o.hasAttribute("isplaceholder")))}get displayValue(){var _a,_b;let displayValue;return displayValue=Array.isArray(this.value)?this.value.length>2?(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.ab)(_lit_localize__WEBPACK_IMPORTED_MODULE_6__.gx`${this.value.length} selected`):this.value.reduce(((acc,cur)=>{var _a2;return acc+(null==(_a2=this.options.find((v=>v.value===cur)))?void 0:_a2.innerHTML)+", "}),"").slice(0,-2):null==(_a=this.options.find((v=>v.selected)))?void 0:_a.innerHTML,displayValue||(null==(_b=this.placeholder)?void 0:_b.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var _a;return null==(_a=this.shadowRoot)?void 0:_a.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()}))}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`
      ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__.z)(!this.hideLabel,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__.z)(this.supportingText.length>0,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_calcMaxHeight)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_12__.cY)(8),(0,_floating_ui_dom__WEBPACK_IMPORTED_MODULE_12__.UU)()]:_chunk_LUBJNTGE_js__WEBPACK_IMPORTED_MODULE_0__.E.DefaultMiddleware}
        @gds-ui-state=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handlePopoverStateChange)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_renderCombobox).call(this):(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_renderTriggerButton).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__.z)(this.searchable,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`<input
              id="searchinput"
              type="text"
              aria-label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.ab)("Filter available options")}"
              placeholder="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.ab)("Search")}"
              @keydown=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSearchFieldKeyDown)}
              @input=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSearchFieldInput)}
            />`))}
        <gds-listbox
          id="listbox"
          .multiple="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_8__.J)(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_handleSelectionChange,handleSelectionChange_fn)}"
          @gds-focus="${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleOptionFocusChange)}"
          @keydown=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleListboxKeyDown)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__.z)(!this.hideLabel,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`
          <gds-form-control-footer class="size-${this.size}">
            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_11__.z)(this.invalid,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `))}
          </gds-form-control-footer>
        `))}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var _a,_b;this.requestUpdate(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.OV)(this,_optionElements,this.querySelectorAll("[gds-element=gds-option]")),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=null==(_a=this.options[0])?void 0:_a.value:this.combobox||this.placeholder||void 0!==this.options.find((o=>this.compareWith(o.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=null==(_b=this.options[0])?void 0:_b.value)}_handleValueChange(){this._elListbox.then((listbox=>{listbox&&(Array.isArray(this.value)?listbox.selection=this.value:listbox.selection=[this.value])}))}_handleOpenChange(){var _this=this;const open=this.open;this.options.forEach((o=>o.hidden=!open)),open?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_registerAutoCloseListener,registerAutoCloseListener_fn).call(this):((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.jq)(this,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const selectedOption=this.options.find((option=>option.selected));requestAnimationFrame((0,_home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_13__.A)((function*(){yield _this.updateComplete,null==selectedOption||selectedOption.scrollIntoView({block:"center"})})))}};_optionElements=new WeakMap,_renderCombobox=new WeakMap,_renderTriggerButton=new WeakMap,_calcMaxHeight=new WeakMap,_dispatchUISateEvent=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleSearchFieldInput=new WeakMap,_handleSearchFieldKeyDown=new WeakMap,_handleListboxKeyDown=new WeakMap,_handleOptionFocusChange=new WeakMap,_handleSelectionChange=new WeakSet,handleSelectionChange_fn=function(){this._elListbox.then((listbox=>{var _a;this.multiple?this.value=listbox.selection.map((s=>s.value)):(this.value=null==(_a=listbox.selection[0])?void 0:_a.value,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(this.open=!1,setTimeout((()=>{var _a2;return null==(_a2=this._elTriggerBtn)?void 0:_a2.focus()}),0))),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchInputEvent).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_dispatchChangeEvent).call(this)}))},_dispatchInputEvent=new WeakMap,_dispatchChangeEvent=new WeakMap,_registerAutoCloseListener=new WeakSet,registerAutoCloseListener_fn=function(){this.addEventListener("blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.addEventListener("gds-blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.addEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_tabCloseListener))},_unregisterAutoCloseListener=new WeakSet,unregisterAutoCloseListener_fn=function(){this.removeEventListener("blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.removeEventListener("gds-blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_blurCloseListener)),this.removeEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_tabCloseListener))},_blurCloseListener=new WeakMap,_tabCloseListener=new WeakMap,GdsDropdown.styles=[_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_3__.LU,dropdown_styles_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:"supporting-text"})],GdsDropdown.prototype,"supportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"open",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"searchable",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"multiple",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"combobox",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsDropdown.prototype,"compareWith",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsDropdown.prototype,"searchFilter",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,attribute:"sync-popover-width"})],GdsDropdown.prototype,"syncPopoverWidth",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Number,attribute:"max-height"})],GdsDropdown.prototype,"maxHeight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsDropdown.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,attribute:"hide-label"})],GdsDropdown.prototype,"hideLabel",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsDropdown.prototype,"disableMobileStyles",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.P)("#trigger")],GdsDropdown.prototype,"_elTriggerBtn",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.nJ)("#listbox")],GdsDropdown.prototype,"_elListbox",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.P)("#searchinput")],GdsDropdown.prototype,"_elSearchInput",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_14__.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],GdsDropdown.prototype,"_handleLightDOMChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("value")],GdsDropdown.prototype,"_handleValueChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("open")],GdsDropdown.prototype,"_handleOpenChange",1),GdsDropdown=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-dropdown"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_6__.cc)()],GdsDropdown)},"./dist/libs/core/src/chunks/chunk.XU2XODEJ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_NWZOJ7GA_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NWZOJ7GA.js"),_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5SQWF4ZG.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),flex_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-color-l2-border-primary);
  }
`,GdsFlex=class extends _chunk_NWZOJ7GA_js__WEBPACK_IMPORTED_MODULE_0__.o{render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__.qy`<slot></slot>`}};GdsFlex.styles=[_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_1__.LU,flex_styles_default],GdsFlex=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-flex")],GdsFlex)},"./dist/libs/core/src/chunks/chunk.ZHBW2DFG.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _renderLeadSlot,renderLeadSlot_fn,_renderMainSlot,renderMainSlot_fn,_handleSlotChange,handleSlotChange_fn,_renderTrailSlot,renderTrailSlot_fn,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TWXTKG4B.js"),_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.5SQWF4ZG.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/decorators.js"),badge_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,GdsBadge=class extends((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.Q8)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.TM)((0,_chunk_TWXTKG4B_js__WEBPACK_IMPORTED_MODULE_0__.lt)(_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__.j)))){constructor(){super(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderLeadSlot),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderMainSlot),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSlotChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderTrailSlot),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const background=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",color=this.disabled?"disabled":this.notification?"primary":this.variant,padding="small"===this.size||this.notification?"2xs":"xs",blockSize=this.mainSlotOccupied?"small"===this.size||this.notification?"m":"l":"xs";return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<gds-flex
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
      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderLeadSlot,renderLeadSlot_fn).call(this)} ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderMainSlot,renderMainSlot_fn).call(this)}
      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderTrailSlot,renderTrailSlot_fn).call(this)}
    </gds-flex>`}};_renderLeadSlot=new WeakSet,renderLeadSlot_fn=function(){if("small"!==this.size||!this.notification)return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot name="lead"></slot>`},_renderMainSlot=new WeakSet,renderMainSlot_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot @slotchange=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_handleSlotChange,handleSlotChange_fn)}></slot>`},_handleSlotChange=new WeakSet,handleSlotChange_fn=function(event){const assignedNodes=event.target.assignedNodes({flatten:!0});this.mainSlotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>{var _a;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_a=node.textContent)?void 0:_a.trim())}))},_renderTrailSlot=new WeakSet,renderTrailSlot_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot name="trail"></slot>`},GdsBadge.styles=[_chunk_5SQWF4ZG_js__WEBPACK_IMPORTED_MODULE_1__.LU,badge_style_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)()],GdsBadge.prototype,"variant",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({type:String})],GdsBadge.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({attribute:"disabled",type:Boolean,reflect:!0})],GdsBadge.prototype,"disabled",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({attribute:"notification",type:Boolean,reflect:!0})],GdsBadge.prototype,"notification",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)({attribute:"rounded",type:Boolean,reflect:!0})],GdsBadge.prototype,"rounded",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.wk)()],GdsBadge.prototype,"mainSlotOccupied",2),GdsBadge=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-badge")],GdsBadge)}}]);
//# sourceMappingURL=7896.254fc8e6.iframe.bundle.js.map
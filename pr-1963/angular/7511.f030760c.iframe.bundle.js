"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7511],{"./dist/libs/core/src/chunks/chunk.2BJVQ5WE.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _handleExtSupTxtSlotChange,handleExtSupTxtSlotChange_fn,_renderExtSupTxtButton,_handleExtSupTxtBtnClick,_renderExtSupTxt,renderExtSupTxt_fn,_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit-html/directives/when.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
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
    `},GdsFormControlHeader.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean,reflect:!0})],GdsFormControlHeader.prototype,"showExtendedSupportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.wk)()],GdsFormControlHeader.prototype,"_hasExtendedSupportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.P)("#extended-supporting-text")],GdsFormControlHeader.prototype,"_extendedSupportingText",2),GdsFormControlHeader=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-form-control-header"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_3__.cc)()],GdsFormControlHeader)},"./dist/libs/core/src/chunks/chunk.2BVCGM5H.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_NWYQ4TQ5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NWYQ4TQ5.js"),_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.K4KPKUH4.js"),_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7JEDOWF.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),flex_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    box-sizing: border-box;
  }
`,GdsFlex=class extends _chunk_NWYQ4TQ5_js__WEBPACK_IMPORTED_MODULE_0__.i{connectedCallback(){super.connectedCallback(),this.display="flex"}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot></slot>`}};GdsFlex.styles=[_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_2__.LU,flex_styles_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({styleTemplate:(_prop,values)=>{const colGap=values[0];return`gap: ${colGap} ${values[1]||colGap};`},cacheOverrideKey:"flex"})],GdsFlex.prototype,"gap",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"flex",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"align-self",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"align-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"align-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"justify-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"place-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"justify-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v})],GdsFlex.prototype,"justify-self",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({property:"flex-direction",valueTemplate:v=>v})],GdsFlex.prototype,"flex-direction",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({property:"flex-wrap",valueTemplate:v=>v})],GdsFlex.prototype,"flex-wrap",2),GdsFlex=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-flex")],GdsFlex)},"./dist/libs/core/src/chunks/chunk.4SO2J5UN.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _handleSlotChange,_renderFieldContents,renderFieldContents_fn,_renderSlotLead,renderSlotLead_fn,_renderSlotMain,renderSlotMain_fn,_renderSlotAction,renderSlotAction_fn,_renderSlotTrail,renderSlotTrail_fn,_chunk_SURO3TGF_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SURO3TGF.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_directives_map_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit-html/directives/map.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
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
      /* In Figma, the border overlaps with the padding, so we need to
         subtract 1px to replicate this in CSS */
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-xs)
        calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
      min-block-size: var(--gds-space-3xl);
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
    }

    /* In Figma, the icon button overlaps 4px with the padding. The rule
       below is there to replicate that so the field doesn't change height
       when the action button appears */
    .field.small slot[name='action']::slotted(*) {
      margin: calc(var(--gds-space-xs) / -0.5) 0;
    }

    .field.multiline {
      align-items: flex-start;
      padding: calc(var(--gds-space-s) - 1px) var(--gds-space-s)
        calc(var(--gds-space-s) - 1px) var(--gds-space-m);
      height: max-content;
    }

    .field.trail-slot-occupied,
    .field:not(.action-slot-occupied):not(.small) {
      padding: calc(var(--gds-space-xs) - 1px) var(--gds-space-m);
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
      min-width: var(--gds-space-l);
    }
  }
`,GdsFieldBase=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__.j{constructor(){super(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderFieldContents),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotLead),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotMain),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotAction),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderSlotTrail),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSlotChange,((slotName,event)=>{const assignedNodes=event.target.assignedNodes({flatten:!0}),slotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>{var _a;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_a=node.textContent)?void 0:_a.trim())}));"lead"===slotName?this._leadSlotOccupied=slotOccupied:"trail"===slotName?this._trailSlotOccupied=slotOccupied:"action"===slotName&&(this._actionSlotOccupied=slotOccupied)}))}connectedCallback(){super.connectedCallback(),_chunk_SURO3TGF_js__WEBPACK_IMPORTED_MODULE_0__.nD.instance.apply(this,"gds-field-base")}render(){var _a;const classes={invalid:null!=(_a=this.invalid)&&_a,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:"small"===this.size};return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      <div class="field ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_7__.H)(classes)}" part="_base">
        ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderFieldContents,renderFieldContents_fn).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};_handleSlotChange=new WeakMap,_renderFieldContents=new WeakSet,renderFieldContents_fn=function(){const elements=[(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotLead,renderSlotLead_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotMain,renderSlotMain_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotAction,renderSlotAction_fn).call(this),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_renderSlotTrail,renderSlotTrail_fn).call(this)];return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`${(0,lit_directives_map_js__WEBPACK_IMPORTED_MODULE_9__.T)(elements,(el=>el))}`},_renderSlotLead=new WeakSet,renderSlotLead_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy` <slot
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
    `},GdsFieldBase.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsFieldBase.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean})],GdsFieldBase.prototype,"multiline",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsFieldBase.prototype,"disabled",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean})],GdsFieldBase.prototype,"invalid",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.P)("slot:not([name])")],GdsFieldBase.prototype,"_mainSlotElement",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_leadSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_trailSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.wk)()],GdsFieldBase.prototype,"_actionSlotOccupied",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("disabled")],GdsFieldBase.prototype,"_handleDisabledChange",1),GdsFieldBase=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-field-base"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.cc)()],GdsFieldBase)},"./dist/libs/core/src/chunks/chunk.DK3CX7UL.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _renderLeadSlot,renderLeadSlot_fn,_renderMainSlot,renderMainSlot_fn,_handleSlotChange,handleSlotChange_fn,_renderTrailSlot,renderTrailSlot_fn,_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7JEDOWF.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),badge_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
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
`,GdsBadge=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_1__.j{constructor(){super(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.VK)(this,_renderLeadSlot),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.VK)(this,_renderMainSlot),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.VK)(this,_handleSlotChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.VK)(this,_renderTrailSlot),this.variant="information",this.size="default",this.disabled=!1,this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){const background=this.disabled?"disabled":this.notification?this.variant:this.variant+"-badge",color=this.disabled?"disabled":this.notification?"primary":this.variant,padding="small"===this.size||this.notification?"2xs":"xs",blockSize=this.mainSlotOccupied?"small"===this.size||this.notification?"m":"l":"xs";return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__.qy`<gds-flex
      level="3"
      background=${background}
      color=${color}
      gap="${this.notification?"":"2xs"}"
      align-items="center"
      justify-content="flex-start"
      padding-inline="${padding}"
      border-radius="${this.notification||this.rounded?"max":"2xs"}"
      block-size="${blockSize}"
      width="max-content"
      font-size="${"small"===this.size||this.notification?"detail-xs":"detail-s"}"
      pointer-events=${this.disabled?"none":"auto"}
      user-select="${this.disabled?"none":"auto"}"
    >
      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.jq)(this,_renderLeadSlot,renderLeadSlot_fn).call(this)} ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.jq)(this,_renderMainSlot,renderMainSlot_fn).call(this)}
      ${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.jq)(this,_renderTrailSlot,renderTrailSlot_fn).call(this)}
    </gds-flex>`}};_renderLeadSlot=new WeakSet,renderLeadSlot_fn=function(){if("small"!==this.size||!this.notification)return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__.qy`<slot name="lead"></slot>`},_renderMainSlot=new WeakSet,renderMainSlot_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__.qy`<slot @slotchange=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.jq)(this,_handleSlotChange,handleSlotChange_fn)}></slot>`},_handleSlotChange=new WeakSet,handleSlotChange_fn=function(event){const assignedNodes=event.target.assignedNodes({flatten:!0});this.mainSlotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>{var _a;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_a=node.textContent)?void 0:_a.trim())}))},_renderTrailSlot=new WeakSet,renderTrailSlot_fn=function(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__.qy`<slot name="trail"></slot>`},GdsBadge.styles=[_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_0__.LU,badge_style_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)()],GdsBadge.prototype,"variant",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:String})],GdsBadge.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({attribute:"disabled",type:Boolean,reflect:!0})],GdsBadge.prototype,"disabled",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({attribute:"notification",type:Boolean,reflect:!0})],GdsBadge.prototype,"notification",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({attribute:"rounded",type:Boolean,reflect:!0})],GdsBadge.prototype,"rounded",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.wk)()],GdsBadge.prototype,"mainSlotOccupied",2),GdsBadge=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-badge")],GdsBadge)},"./dist/libs/core/src/chunks/chunk.HL56GMWA.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_QUP23LSY_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QUP23LSY.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconChevronBottom=class extends _chunk_QUP23LSY_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconChevronBottom._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronBottom._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',IconChevronBottom._name="chevron-bottom",IconChevronBottom=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-chevron-bottom")],IconChevronBottom)},"./dist/libs/core/src/chunks/chunk.HO2KZJXR.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _renderRemainingCharsBadge,renderRemainingCharsBadge_fn,_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit-html/directives/when.js"),styles=__webpack_require__("./node_modules/lit/index.js").AH`
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
    </div>`}};_renderRemainingCharsBadge=new WeakSet,renderRemainingCharsBadge_fn=function(remaining){let variant;return variant=remaining<0?"negative":remaining<20?"warning":"positive",_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.qy`<gds-badge variant="${variant}">${remaining}</gds-badge>`},GdsFormControlFooter.styles=[styles],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.MZ)({type:Number})],GdsFormControlFooter.prototype,"charCounter",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_3__.MZ)()],GdsFormControlFooter.prototype,"validationMessage",2),GdsFormControlFooter=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-form-control-footer")],GdsFormControlFooter)},"./dist/libs/core/src/chunks/chunk.K4KPKUH4.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{F:()=>styleExpressionProperty});var _home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),lit__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/lit/index.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/decorators.js"),viewportBreakpoints={0:"0px","2xs":"320px",xs:"425px",s:"768px",m:"1024px",l:"1280px",xl:"1440px","2xl":"2560px","3xl":"3840px","4xl":"4320px","5xl":"6016px","6xl":"7680px"},breakpointValueRegex=/^([<|>]=?)?([0-9a-z]+)/,controlTokens=["{","}",";",":",","],whitespace=[" ","/n"];function parseBreakpoint(bp){return bp.split(",").map((b=>{const match=b.trim().match(breakpointValueRegex);if(!match)throw new Error(`Invalid breakpoint specifier: ${b}`);return{condition:match[1],value:match[2]}}))}var styleCache=new Map;function styleExpressionProperty(options){return(proto,descriptor)=>{var _a,_b,_c,_d;const sel=null!=(_a=null==options?void 0:options.selector)?_a:String(":host"),prop=null!=(_b=null==options?void 0:options.property)?_b:String(descriptor),valueTemplate=null!=(_c=null==options?void 0:options.valueTemplate)?_c:v=>`var(--gds-space-${v}, 0)`,styleTemplate=null==options?void 0:options.styleTemplate,cacheKey=null!=(_d=null==options?void 0:options.cacheOverrideKey)?_d:"0";var _ref;(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_1__.MZ)({attribute:null==options?void 0:options.attribute,noAccessor:!0})(proto,descriptor),Object.defineProperty(proto,descriptor,{get:function(){return this["__"+String(descriptor)]},set:(_ref=(0,_home_runner_work_green_green_node_modules_angular_devkit_build_angular_node_modules_babel_runtime_helpers_esm_asyncToGenerator_js__WEBPACK_IMPORTED_MODULE_2__.A)((function*(newValue){var _a2;if(!newValue)return;this["__"+String(descriptor)]=newValue,yield this.updateComplete;const lvl=null!=(_a2=this.level)?_a2:"0",styleKey=sel+prop+newValue+lvl+cacheKey;if(styleCache.has(styleKey))return void this._dynamicStylesController.inject(`sep_${String(descriptor)}`,styleCache.get(styleKey));const ast=function parse(tokens){var _a;const tree=[];let bpScope={breakpoint:"-",values:[]},valueBucket={sel:"",values:[]};for(const t of tokens)if(controlTokens.includes(t)){if("{"===t&&(bpScope={breakpoint:valueBucket.values.join(","),values:[]},valueBucket={sel:"",values:[]}),";"===t&&(0===tree.length&&tree.push(bpScope),valueBucket.values.length>0&&(bpScope.values.push(valueBucket),valueBucket={sel:"",values:[]})),":"===t){const sel=null!=(_a=valueBucket.values.pop())?_a:"";valueBucket.sel=sel}bpScope&&"}"===t&&(bpScope.values.push(valueBucket),valueBucket={sel:"",values:[]},tree.push(bpScope))}else valueBucket.values.push(t);return valueBucket.values.length>0&&bpScope.values.push(valueBucket),0===tree.length&&tree.push(bpScope),tree}(function tokenize(source=""){const lexemes=[];let scanned="";for(let i=0;i<source.length;i++){const c=source[i];whitespace.includes(c)||(scanned+=c),controlTokens.includes(c)?(lexemes.push(scanned.slice(0,-1)),lexemes.push(c),scanned=""):(whitespace.includes(c)||i===source.length-1)&&(lexemes.push(scanned),scanned="")}return lexemes.filter((l=>""!==l))}(newValue)),css=function toCss(selector,property2,tree,valueTemplate=v=>v,styleTemplate=(p,vs)=>`${p}: ${vs.join(" ")};`){let css="";for(const bp of tree)css+=`@media ${("-"===bp.breakpoint?[{condition:">=",value:"0"}]:parseBreakpoint(bp.breakpoint)).map((b=>{var _a,_b;return`(${(null==(_a=b.condition)?void 0:_a.includes("<"))?"max-width":"min-width"}: ${null!=(_b=viewportBreakpoints[b.value])?_b:b.value})`})).join(" and ")} {${bp.values.map((bpValues=>{let sel=selector;bpValues.sel.length>0&&(sel=":host"===selector?`:host(:${bpValues.sel})`:`${selector}:${bpValues.sel}`);const style=styleTemplate(property2,bpValues.values.map(valueTemplate));return"hover"===bpValues.sel?`@media (hover: hover) {${sel}{${style}}}`:`${sel}{${style}}`})).join("")}}`;return css}(sel,prop,ast,valueTemplate.bind(this),null==styleTemplate?void 0:styleTemplate.bind(this)),style=(0,lit__WEBPACK_IMPORTED_MODULE_0__.iz)(css);styleCache.set(styleKey,style),this._dynamicStylesController.inject(`sep_${String(descriptor)}`,style)})),function set(_x){return _ref.apply(this,arguments)})})}}},"./dist/libs/core/src/chunks/chunk.LLOKBUWQ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _slotRef,_handleSelect,_chunk_E62NOHQC_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.E62NOHQC.js"),_chunk_SURO3TGF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SURO3TGF.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/ref.js"),listbox_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,GdsListbox=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_3__.j{constructor(){super(),this.multiple=!1,this.compareWith=(a,b)=>a===b,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_slotRef,(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__._)()),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.VK)(this,_handleSelect,(e=>{const option=e.target;this.multiple?option.selected=!option.selected:(option.selected=!0,Array.from(this.options).forEach((el=>{el!==option&&(el.selected=!1)}))),this.ariaActiveDescendantElement=option,this.dispatchEvent(new CustomEvent("change",{bubbles:!1,composed:!1}))})),new _chunk_E62NOHQC_js__WEBPACK_IMPORTED_MODULE_0__.y(this)}get navigableItems(){return this.visibleOptionElements}get options(){return(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value&&(0,_chunk_E62NOHQC_js__WEBPACK_IMPORTED_MODULE_0__.o)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef).value).assignedElements().filter((o=>!o.hasAttribute("isplaceholder")&&"gds-option"===o.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((el=>!el.hidden))}get visibleSelectedOptionElements(){return this.options.filter((el=>el.selected&&!el.hidden))}get selection(){return this.options.filter((el=>el.selected))}set selection(values){this.options.forEach((el=>{el.selected=values.some((v=>this.compareWith(v,el.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),_chunk_SURO3TGF_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_handleSelect))}focus(){var _a;null==(_a=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])||_a.focus()}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.qy`<slot ${(0,lit_directives_ref_js__WEBPACK_IMPORTED_MODULE_7__.K)((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.S7)(this,_slotRef))}></slot>`}_rerenderOptions(){this.options.forEach((el=>{el.requestUpdate()}))}};_slotRef=new WeakMap,_handleSelect=new WeakMap,GdsListbox.styles=listbox_styles_default,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:value=>value.toString()}})],GdsListbox.prototype,"multiple",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsListbox.prototype,"compareWith",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("multiple")],GdsListbox.prototype,"_rerenderOptions",1),GdsListbox=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_5__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_4__.Y$)("gds-listbox")],GdsListbox)},"./dist/libs/core/src/chunks/chunk.LMQLGWWJ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _hidden,_emitSelect,emitSelect_fn,_chunk_ZRKILGXZ_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.ZRKILGXZ.js"),_chunk_SURO3TGF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SURO3TGF.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7JEDOWF.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./node_modules/lit-html/directives/when.js"),GdsOption=class extends((0,_chunk_ZRKILGXZ_js__WEBPACK_IMPORTED_MODULE_0__.z)(_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_4__.j)){constructor(){super(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.VK)(this,_emitSelect),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.VK)(this,_hidden,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.jq)(this,_emitSelect,emitSelect_fn)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.jq)(this,_emitSelect,emitSelect_fn).call(this,e))}))}get hidden(){return(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.S7)(this,_hidden)}set hidden(value){this.isPlaceholder||((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,"true"===value||!0===value),this.setAttribute("aria-hidden",value.toString()))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.isPlaceholder&&((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,!0),this.setAttribute("aria-hidden","true")),this.updateComplete.then((()=>_chunk_SURO3TGF_js__WEBPACK_IMPORTED_MODULE_1__.nD.instance.apply(this,"gds-option")))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,!0),this.setAttribute("aria-hidden","true")):((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.OV)(this,_hidden,!1),this.setAttribute("aria-hidden","false"))}render(){var _a;const isMultiple=null==(_a=this.parentElement)?void 0:_a.multiple,checkbox=_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.qy`
      <span class="checkbox ${(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_8__.H)({checked:this.selected})}">
        ${this.selected?_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.qy`<gds-icon-checkmark
              width="10"
              height="10"
              stroke="4"
            ></gds-icon-checkmark>`:""}
      </span>
    `;return isMultiple||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.qy`<div>${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_9__.z)(isMultiple,(()=>checkbox))} <slot></slot></div>`}};_hidden=new WeakMap,_emitSelect=new WeakSet,emitSelect_fn=function(e){e.stopPropagation(),this.dispatchEvent(new CustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}}))},GdsOption.styles=[_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_3__.LU,_chunk_ZRKILGXZ_js__WEBPACK_IMPORTED_MODULE_0__.l],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)()],GdsOption.prototype,"value",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:"aria-hidden",reflect:!0})],GdsOption.prototype,"hidden",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({attribute:"aria-selected",reflect:!0})],GdsOption.prototype,"selected",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_7__.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"isPlaceholder",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_2__.w)("isplaceholder")],GdsOption.prototype,"_handlePlaceholderStatusChange",1),GdsOption=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_6__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_5__.Y$)("gds-option")],GdsOption)},"./dist/libs/core/src/chunks/chunk.NWYQ4TQ5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{i:()=>GdsContainer});var _chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.K4KPKUH4.js"),_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7JEDOWF.js"),_chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TMEWQZER.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/decorators.js"),container_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    box-sizing: border-box;
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-space-3xs);
  }
`,GdsContainer=class extends _chunk_TMEWQZER_js__WEBPACK_IMPORTED_MODULE_2__.j{constructor(){super(...arguments),this.display="block",this.level="2"}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot></slot>`}};GdsContainer.styles=[_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_1__.LU,container_style_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"display",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_5__.MZ)()],GdsContainer.prototype,"level",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"place-items",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"place-content",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:function(v){const[colorInput,transparency]=v.split("/");return((color,transparency2)=>(color=>{const trimmedColor=color.trim();return trimmedColor.startsWith("#")||trimmedColor.startsWith("rgb(")||trimmedColor.startsWith("rgba(")||trimmedColor.startsWith("hsl(")||trimmedColor.startsWith("hsla(")})(color)?transparency2?`color-mix(in srgb, ${color} ${100*parseFloat(transparency2)}%, transparent 0%)`:color:`var(--gds-color-l${this.level}-content-${color})`)(colorInput,transparency)}})],GdsContainer.prototype,"color",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:function(v){const[colorInput,transparency]=v.split("/");return((color,transparency2)=>(color=>{const trimmedColor=color.trim();return trimmedColor.startsWith("#")||trimmedColor.startsWith("rgb(")||trimmedColor.startsWith("rgba(")||trimmedColor.startsWith("hsl(")||trimmedColor.startsWith("hsla(")})(color)?transparency2?`color-mix(in srgb, ${color} ${100*parseFloat(transparency2)}%, transparent 0%)`:color:((level,color)=>`var(--gds-color-l${level}-background-${color})`)(this.level,color))(colorInput,transparency)}})],GdsContainer.prototype,"background",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:function(v){const[size,color]=v.split("/");return`var(--gds-space-${size}) solid ${color?(color2=>(color2=>{const trimmedColor=color2.trim();return trimmedColor.startsWith("#")||trimmedColor.startsWith("rgb(")||trimmedColor.startsWith("rgba(")||trimmedColor.startsWith("hsl(")||trimmedColor.startsWith("hsla(")})(color2)?color2:((level,color2)=>`var(--gds-color-l${level}-border-${color2})`)(this.level,color2))(color):"currentColor"}`},styleTemplate:(_prop,values)=>{const top=values[0];return`\n        border-top: ${top};\n        border-right: ${values.length>1?values[1]:top};\n        border-bottom: ${values.length>2?values[2]:top};\n        border-left: ${values.length>3?values[3]:top};\n      `}})],GdsContainer.prototype,"border",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:function(v){const[color]=v.split("/");return color?(color2=>(color2=>{const trimmedColor=color2.trim();return trimmedColor.startsWith("#")||trimmedColor.startsWith("rgb(")||trimmedColor.startsWith("rgba(")||trimmedColor.startsWith("hsl(")||trimmedColor.startsWith("hsla(")})(color2)?color2:((level,color2)=>`var(--gds-color-l${level}-border-${color2})`)(this.level,color2))(color):"currentColor"},styleTemplate:(_prop,values)=>{const top=values[0];return`\n        border-top-color: ${top};\n        border-right-color: ${values.length>1?values[1]:top};\n        border-bottom-color: ${values.length>2?values[2]:top};\n        border-left-color: ${values.length>3?values[3]:top};\n      `}})],GdsContainer.prototype,"border-color",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({styleTemplate:(_prop,values)=>{const top=values[0];return`\n        border-top-width: ${top};\n        border-right-width: ${values.length>1?values[1]:top};\n        border-bottom-width: ${values.length>2?values[2]:top};\n        border-left-width: ${values.length>3?values[3]:top};\n        border-style: solid;\n      `}})],GdsContainer.prototype,"border-width",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>`var(--gds-space-${v})`})],GdsContainer.prototype,"border-radius",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"opacity",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)()],GdsContainer.prototype,"padding",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)()],GdsContainer.prototype,"padding-inline",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)()],GdsContainer.prototype,"padding-block",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>{const val="pos"==(v.startsWith("-")?"neg":"pos")?`var(--gds-space-${v})`:`calc(var(--gds-space-${v.substring(1)}) * -1)`;return"auto"===v?"auto":val},styleTemplate:(_prop,values)=>{const transformValue=v=>"auto"===v?"auto":`${v}`,top=transformValue(values[0]),right=values.length>1?transformValue(values[1]):top;return`margin: ${top} ${right} ${values.length>2?transformValue(values[2]):top} ${values.length>3?transformValue(values[3]):right};`}})],GdsContainer.prototype,"margin",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"position",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"inset",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"overflow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"height",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"max-height",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"min-height",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)()],GdsContainer.prototype,"block-size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)()],GdsContainer.prototype,"min-block-size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"width",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"max-width",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"min-width",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)()],GdsContainer.prototype,"inline-size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"box-sizing",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"cursor",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"pointer-events",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"user-select",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"z-index",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"transform",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"transform-style",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"transition",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"transition-behavior",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>v})],GdsContainer.prototype,"animation",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>`${v}`,styleTemplate:(prop,values)=>{const size=values[0];return`font-size: var(--gds-text-size-${size});`+`line-height: var(--gds-text-line-height-${size});`}})],GdsContainer.prototype,"font-size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({property:"font-weight",valueTemplate:v=>`var(--gds-text-weight-${v})`})],GdsContainer.prototype,"font-weight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>`${v}`})],GdsContainer.prototype,"grid-column",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>`${v}`})],GdsContainer.prototype,"grid-row",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_0__.F)({valueTemplate:v=>`${v}`})],GdsContainer.prototype,"flex",2),GdsContainer=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-container")],GdsContainer)},"./dist/libs/core/src/chunks/chunk.X6D73CNZ.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_QUP23LSY_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QUP23LSY.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),IconCircleInfo=class extends _chunk_QUP23LSY_js__WEBPACK_IMPORTED_MODULE_0__.M{};IconCircleInfo._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M11.375 8C11.375 8.34518 11.6548 8.625 12 8.625C12.3452 8.625 12.625 8.34518 12.625 8C12.625 7.65482 12.3452 7.375 12 7.375C11.6548 7.375 11.375 7.65482 11.375 8Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',IconCircleInfo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',IconCircleInfo._name="circle-info",IconCircleInfo=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_1__.Y$)("gds-icon-circle-info")],IconCircleInfo)},"./dist/libs/core/src/chunks/chunk.Z5WOVZ5B.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _optionElements,_renderCombobox,_renderTriggerButton,_calcMaxHeight,_handleSearchFieldInput,_handleSearchFieldKeyDown,_handleListboxKeyDown,_handleOptionFocusChange,_handleSelectionChange,handleSelectionChange_fn,_registerAutoCloseListener,registerAutoCloseListener_fn,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn,_blurCloseListener,_tabCloseListener,_chunk_TURR45PB_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TURR45PB.js"),_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/chunks/chunk.WM7HBMMV.js"),_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.TYGMNHNO.js"),_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7JEDOWF.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),_lit_localize__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/lit/directives/if-defined.js"),lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/lit-html/directives/when.js"),dropdown_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  @layer base, reset;

  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: var(--gds-space-xs);
      contain: layout;
      isolation: isolate;
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
`,GdsDropdown=class extends _chunk_TURR45PB_js__WEBPACK_IMPORTED_MODULE_0__.S{constructor(){super(...arguments),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSelectionChange),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_registerAutoCloseListener),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_unregisterAutoCloseListener),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(a,b)=>a===b,this.searchFilter=(q,o)=>o.innerHTML.toLowerCase().includes(q.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.disableMobileStyles=!1,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_optionElements,void 0),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderCombobox,(()=>{var _a;return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
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
        @input=${e=>{this.value=e.target.value,(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSearchFieldInput).call(this,e),this.open=!0}}
        @keydown=${e=>{"ArrowDown"===e.key&&(e.preventDefault(),this.open=!0,this._elListbox.then((listbox=>listbox.focus())))}}
      />
    `})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_renderTriggerButton,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
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
          <span>${(0,lit_directives_unsafe_html_js__WEBPACK_IMPORTED_MODULE_8__._)(this.displayValue)}</span>
        </slot>
      </button>
    `)),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_calcMaxHeight,(trigger=>{const triggerRect=trigger.getBoundingClientRect(),bottomSpace=window.innerHeight-triggerRect.bottom,topSpace=triggerRect.top;let height=Math.min(topSpace,this.maxHeight);return bottomSpace>topSpace&&(height=Math.min(bottomSpace,this.maxHeight)),height-16+"px"})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSearchFieldInput,(e=>{if(!e.currentTarget)return;e.stopPropagation();if(!this.dispatchEvent(new CustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value},cancelable:!0})))return;const input=e.currentTarget;if(this.options.forEach((o=>o.hidden=!1)),!input.value)return;this.options.filter((o=>!this.searchFilter(input.value,o))).forEach((o=>o.hidden=!0))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleSearchFieldKeyDown,(e=>{var _a;null==(_a=this._elListbox)||_a.then((listbox=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void listbox.focus()}))})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleListboxKeyDown,(e=>{var _a;if("Tab"===e.key&&this.searchable)return e.preventDefault(),void(null==(_a=this._elSearchInput)||_a.focus())})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_handleOptionFocusChange,(e=>{const triggerButton=this._elTriggerBtn;triggerButton&&(triggerButton.ariaActiveDescendantElement=e.target)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_blurCloseListener,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(this.open=!1)})),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.VK)(this,_tabCloseListener,(e=>{var _a;"Tab"!==e.key||this.searchable||(e.preventDefault(),this.open=!1,null==(_a=this._elTriggerBtn)||_a.focus())}))}get type(){return"gds-dropdown"}get options(){return(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements)?Array.from((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements)).filter((o=>!o.hasAttribute("isplaceholder"))):[]}get placeholder(){if((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements))return Array.from((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements)).find((o=>o.hasAttribute("isplaceholder")))}get displayValue(){var _a,_b;let displayValue;return displayValue=Array.isArray(this.value)?this.value.length>2?(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.ab)(_lit_localize__WEBPACK_IMPORTED_MODULE_5__.gx`${this.value.length} selected`):this.value.reduce(((acc,cur)=>{var _a2;return acc+(null==(_a2=this.options.find((v=>v.value===cur)))?void 0:_a2.innerHTML)+", "}),"").slice(0,-2):null==(_a=this.options.find((v=>v.selected)))?void 0:_a.innerHTML,displayValue||(null==(_b=this.placeholder)?void 0:_b.innerHTML)||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){var _a;return null==(_a=this.shadowRoot)?void 0:_a.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange()}))}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
      ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(!this.hideLabel,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
          <gds-form-control-header class="size-${this.size}">
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(this.supportingText.length>0,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_calcMaxHeight)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        @gds-ui-state=${e=>this.open=e.detail.open}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_renderCombobox).call(this):(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_renderTriggerButton).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(this.searchable,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<input
              id="searchinput"
              type="text"
              aria-label="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.ab)("Filter available options")}"
              placeholder="${(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.ab)("Search")}"
              @keydown=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSearchFieldKeyDown)}
              @input=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleSearchFieldInput)}
            />`))}
        <gds-listbox
          id="listbox"
          .multiple="${(0,lit_directives_if_defined_js__WEBPACK_IMPORTED_MODULE_7__.J)(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_handleSelectionChange,handleSelectionChange_fn)}"
          @gds-focus="${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleOptionFocusChange)}"
          @keydown=${(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_handleListboxKeyDown)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(!this.hideLabel,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
          <gds-form-control-footer class="size-${this.size}">
            ${(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(this.invalid,(()=>_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`
                <slot id="message" name="message" slot="message">
                  <gds-icon-triangle-exclamation
                    solid
                  ></gds-icon-triangle-exclamation>
                  ${this.errorMessage||this.validationMessage}
                </slot>
              `))}
          </gds-form-control-footer>
        `))}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){var _a,_b;this.requestUpdate(),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.OV)(this,_optionElements,this.querySelectorAll("[gds-element=gds-option]")),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=null==(_a=this.options[0])?void 0:_a.value:this.placeholder||void 0!==this.options.find((o=>this.compareWith(o.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=null==(_b=this.options[0])?void 0:_b.value)}_handleValueChange(){this._elListbox.then((listbox=>{listbox&&(Array.isArray(this.value)?listbox.selection=this.value:listbox.selection=[this.value])}))}_onOpenChange(){var _a;const open=this.open;null==(_a=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_optionElements))||_a.forEach((o=>o.hidden=!open)),open?(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_registerAutoCloseListener,registerAutoCloseListener_fn).call(this):((0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.jq)(this,_unregisterAutoCloseListener,unregisterAutoCloseListener_fn).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const selectedOption=this.options.find((option=>option.selected));this.updateComplete.then((()=>null==selectedOption?void 0:selectedOption.scrollIntoView())),this.dispatchEvent(new CustomEvent("gds-ui-state",{detail:{open},bubbles:!0,composed:!0}))}};_optionElements=new WeakMap,_renderCombobox=new WeakMap,_renderTriggerButton=new WeakMap,_calcMaxHeight=new WeakMap,_handleSearchFieldInput=new WeakMap,_handleSearchFieldKeyDown=new WeakMap,_handleListboxKeyDown=new WeakMap,_handleOptionFocusChange=new WeakMap,_handleSelectionChange=new WeakSet,handleSelectionChange_fn=function(){this._elListbox.then((listbox=>{var _a;this.multiple?this.value=listbox.selection.map((s=>s.value)):(this.value=null==(_a=listbox.selection[0])?void 0:_a.value,this.open=!1,this.dispatchEvent(new Event("input",{bubbles:!0,composed:!0})),setTimeout((()=>{var _a2;return null==(_a2=this._elTriggerBtn)?void 0:_a2.focus()}),0)),this.dispatchEvent(new CustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0}))}))},_registerAutoCloseListener=new WeakSet,registerAutoCloseListener_fn=function(){this.addEventListener("blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.addEventListener("gds-blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.addEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_tabCloseListener))},_unregisterAutoCloseListener=new WeakSet,unregisterAutoCloseListener_fn=function(){this.removeEventListener("blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.removeEventListener("gds-blur",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_blurCloseListener)),this.removeEventListener("keydown",(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.S7)(this,_tabCloseListener))},_blurCloseListener=new WeakMap,_tabCloseListener=new WeakMap,GdsDropdown.styles=[_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_2__.LU,dropdown_styles_default],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({attribute:"supporting-text"})],GdsDropdown.prototype,"supportingText",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"open",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"searchable",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"multiple",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"combobox",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"compareWith",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"searchFilter",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,attribute:"sync-popover-width"})],GdsDropdown.prototype,"syncPopoverWidth",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Number,attribute:"max-height"})],GdsDropdown.prototype,"maxHeight",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"size",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)({type:Boolean,attribute:"hide-label"})],GdsDropdown.prototype,"hideLabel",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.MZ)()],GdsDropdown.prototype,"disableMobileStyles",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.P)("#trigger")],GdsDropdown.prototype,"_elTriggerBtn",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.nJ)("#listbox")],GdsDropdown.prototype,"_elListbox",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_6__.P)("#searchinput")],GdsDropdown.prototype,"_elSearchInput",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_WM7HBMMV_js__WEBPACK_IMPORTED_MODULE_11__.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],GdsDropdown.prototype,"_handleLightDOMChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("value")],GdsDropdown.prototype,"_handleValueChange",1),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_TYGMNHNO_js__WEBPACK_IMPORTED_MODULE_1__.w)("open")],GdsDropdown.prototype,"_onOpenChange",1),GdsDropdown=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-dropdown"),(0,_lit_localize__WEBPACK_IMPORTED_MODULE_5__.cc)()],GdsDropdown)},"./dist/libs/core/src/chunks/chunk.ZCWE5MT5.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{var _chunk_NWYQ4TQ5_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.NWYQ4TQ5.js"),_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/chunks/chunk.K4KPKUH4.js"),_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.W7JEDOWF.js"),_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QK3R23GV.js"),_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./dist/libs/core/src/chunks/chunk.SEHSDSX2.js"),lit__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/lit/index.js"),GdsCard=class extends _chunk_NWYQ4TQ5_js__WEBPACK_IMPORTED_MODULE_0__.i{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return _chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.qy`<slot></slot>`}};GdsCard.styles=[_chunk_W7JEDOWF_js__WEBPACK_IMPORTED_MODULE_2__.LU,lit__WEBPACK_IMPORTED_MODULE_5__.AH`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `],(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({property:"box-shadow",valueTemplate:v=>`var(--gds-shadow-${v})`})],GdsCard.prototype,"shadow",2),(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_K4KPKUH4_js__WEBPACK_IMPORTED_MODULE_1__.F)({valueTemplate:v=>v,styleTemplate:function(_prop,v){return`\n      --_border-color: var(--gds-color-l${this.level}-background-${v});\n      --_background-color: var(--gds-color-l${this.level}-background-${v});\n      --_color: var(--gds-color-l${this.level}-content-${v});\n      `}})],GdsCard.prototype,"variant",2),GdsCard=(0,_chunk_SEHSDSX2_js__WEBPACK_IMPORTED_MODULE_4__.Cc)([(0,_chunk_QK3R23GV_js__WEBPACK_IMPORTED_MODULE_3__.Y$)("gds-card")],GdsCard)}}]);
//# sourceMappingURL=7511.f030760c.iframe.bundle.js.map
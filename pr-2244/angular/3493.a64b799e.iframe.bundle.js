"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[3493],{"./dist/libs/core/src/components/div/div.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>GdsDiv});var chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),style_expression_property=__webpack_require__("./dist/libs/core/src/utils/decorators/style-expression-property.js"),style_expression_helpers=__webpack_require__("./dist/libs/core/src/utils/helpers/style-expression-helpers.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js");var div_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    display: block;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
  :host(:focus-visible) {
    outline-color: color-mix(in srgb, currentcolor, #000 100%);
    outline-offset: var(--gds-sys-space-3xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-3xs);
  }
`;let GdsDiv=class extends((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.vi)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.Md)((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.qC)(gds_element.j))))))){constructor(){super(...arguments),this.level="2"}render(){return custom_element_scoping.qy`<slot></slot>`}};GdsDiv.styles=[tokens_style.LU,div_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"display",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsDiv.prototype,"level",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)((0,style_expression_helpers.T$)("content"))],GdsDiv.prototype,"color",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)((0,style_expression_helpers.T$)("background"))],GdsDiv.prototype,"background",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({styleTemplate:function(_prop,values){const this_=this,[size,style=this_["border-style"]||"solid",color=this_["border-color"]||"subtle-01"]=values;return`border: ${`var(--gds-sys-space-${size})`} ${style} ${(0,style_expression_helpers.ol)(color,"border",this_.level)};`}})],GdsDiv.prototype,"border",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)((0,style_expression_helpers.T$)("border"))],GdsDiv.prototype,"border-color",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(style_expression_helpers.MF)],GdsDiv.prototype,"border-width",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"border-style",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(style_expression_helpers.MF)],GdsDiv.prototype,"border-radius",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:v=>`var(--gds-sys-shadow-${v}-01), var(--gds-sys-shadow-${v}-02)`})],GdsDiv.prototype,"box-shadow",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"opacity",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"overflow",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"box-sizing",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"z-index",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({styleTemplate:(_prop,values)=>`font: var(--gds-sys-text-${values[0]});`})],GdsDiv.prototype,"font",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:v=>`var(--gds-sys-text-weight-${v})`})],GdsDiv.prototype,"font-weight",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"text-align",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"text-wrap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"overflow-wrap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"white-space",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({...style_expression_helpers.MF,styleTemplate:(_prop,values)=>{const colGap=values[0];return`gap: ${colGap} ${values[1]||colGap};`},cacheOverrideKey:"flex"})],GdsDiv.prototype,"gap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"align-items",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"align-content",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"justify-content",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"justify-items",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"flex-direction",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"flex-wrap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"place-items",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"place-content",2),GdsDiv=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-div")],GdsDiv)},"./dist/libs/core/src/components/dropdown/dropdown.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GdsDropdown});var asyncToGenerator=__webpack_require__("./node_modules/@angular-devkit/build-angular/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),unsafe_html=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),lit=__webpack_require__("./node_modules/lit/index.js");var _handleSlotChange,_GdsFieldBase_instances,renderFieldContents_fn,renderSlotLead_fn,renderSlotMain_fn,renderSlotAction_fn,renderSlotTrail_fn,field_base_styles_default=lit.AH`
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
      gap: var(--gds-sys-space-xs);
      padding-block: var(--gds-sys-space-xs);
      padding-inline: var(--gds-sys-space-m) var(--gds-sys-space-s);
      min-block-size: var(--gds-sys-space-3xl);
      block-size: var(--gds-sys-space-3xl);
      outline-style: solid;
      outline-width: 0;
      border-radius: var(--gds-sys-space-xs);
      background: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      border: var(--gds-sys-space-4xs) solid
        var(--gds-sys-color-border-interactive);
      cursor: text;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: background-color;

      .right {
        display: contents;
      }

      .right.as-flex {
        display: flex;
        position: absolute;
        gap: var(--gds-sys-space-xs);
        right: var(--gds-sys-space-s);
        top: var(--gds-sys-space-xs);
        block-size: max-content;
      }
    }

    .field.lead-slot-occupied {
      padding-inline-start: var(--gds-sys-space-s);
    }

    .field.action-slot-occupied:not(.trail-slot-occupied) {
      padding-inline-end: var(--gds-sys-space-s);

      &.small {
        padding-inline-end: var(--gds-sys-space-xs);
      }
    }

    .field:focus-within {
      outline-width: var(--gds-sys-space-3xs);
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      border-color: currentColor;
    }

    .field.small {
      gap: var(--gds-sys-space-2xs);
      padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-xs);
      min-block-size: var(--gds-sys-space-xl);
      block-size: var(--gds-sys-space-xl);
    }

    .field.multiline {
      align-items: flex-start;
      padding: var(--gds-sys-space-s);
      padding-inline-start: var(--gds-sys-space-m);
      height: max-content;
    }

    .field.disabled {
      background: var(--gds-sys-color-l3-disabled-01);
      color: var(--gds-sys-color-content-disabled-01);
      border-color: transparent;
      pointer-events: none;
    }

    .field.invalid {
      background: var(--gds-sys-color-l3-negative-02);
      border-color: var(--gds-sys-color-border-negative-01);
      color: var(--gds-sys-color-content-negative-01);
    }

    slot:not([name])::slotted(*) {
      color: currentColor;
    }

    .main-slot-wrap {
      display: flex;
      gap: var(--gds-sys-space-xs);
      flex: 1;
      align-self: stretch;
    }

    .main-slot-wrap.multiline {
      height: max-content;
    }

    @media (hover: hover) {
      .field:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-03)
        );
      }

      .field.invalid:hover {
        background: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-02),
          var(--gds-sys-color-state-negative-hover)
        );
      }
    }

    slot[name='lead']::slotted([gds-element^='gds-icon-']) {
      align-items: center;
      justify-content: center;
      display: flex;
      inline-size: var(--gds-sys-space-l);
      block-size: var(--gds-sys-space-l);
    }

    .multiline slot[name='action']::slotted([gds-element]) {
      margin-top: -4px;
    }
  }
`;let GdsFieldBase=class extends gds_element.j{constructor(){super(),(0,chunk_QU3DSPNU.VK)(this,_GdsFieldBase_instances),this.size="large",this.multiline=!1,this.disabled=!1,this.invalid=!1,this._leadSlotOccupied=!1,this._trailSlotOccupied=!1,this._actionSlotOccupied=!1,(0,chunk_QU3DSPNU.VK)(this,_handleSlotChange,((slotName,event)=>{const assignedNodes=event.target.assignedNodes({flatten:!0}),slotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==node.textContent?.trim()));"lead"===slotName?this._leadSlotOccupied=slotOccupied:"trail"===slotName?this._trailSlotOccupied=slotOccupied:"action"===slotName&&(this._actionSlotOccupied=slotOccupied)}))}connectedCallback(){super.connectedCallback(),transitional_styles.n.instance.apply(this,"gds-field-base")}render(){const classes={invalid:this.invalid??!1,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:"small"===this.size};return custom_element_scoping.qy`
      <div class="field ${(0,class_map.H)(classes)}" part="_base">
        ${(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderFieldContents_fn).call(this)}
      </div>
    `}_handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}};_handleSlotChange=new WeakMap,_GdsFieldBase_instances=new WeakSet,renderFieldContents_fn=function(){const rightSlotsWrapClasses={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return custom_element_scoping.qy`
      ${(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotLead_fn).call(this)} ${(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotMain_fn).call(this)}
      <div class="${(0,class_map.H)(rightSlotsWrapClasses)}">
        ${(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotAction_fn).call(this)} ${(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotTrail_fn).call(this)}
      </div>
    `},renderSlotLead_fn=function(){return custom_element_scoping.qy` <slot
      name="lead"
      @slotchange=${e=>(0,chunk_QU3DSPNU.S7)(this,_handleSlotChange).call(this,"lead",e)}
    ></slot>`},renderSlotMain_fn=function(){return custom_element_scoping.qy`<div
      class="main-slot-wrap ${(0,class_map.H)({multiline:this.multiline})}"
    >
      <slot
        @slotchange=${e=>(0,chunk_QU3DSPNU.S7)(this,_handleSlotChange).call(this,"main",e)}
      ></slot>
    </div>`},renderSlotAction_fn=function(){return custom_element_scoping.qy`
      <slot
        name="action"
        @slotchange=${e=>(0,chunk_QU3DSPNU.S7)(this,_handleSlotChange).call(this,"action",e)}
      ></slot>
    `},renderSlotTrail_fn=function(){return custom_element_scoping.qy`
      <slot
        name="trail"
        @slotchange=${e=>(0,chunk_QU3DSPNU.S7)(this,_handleSlotChange).call(this,"trail",e)}
      ></slot>
    `},GdsFieldBase.styles=[field_base_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFieldBase.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFieldBase.prototype,"multiline",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFieldBase.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFieldBase.prototype,"invalid",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("slot:not([name])")],GdsFieldBase.prototype,"_mainSlotElement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFieldBase.prototype,"_leadSlotOccupied",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFieldBase.prototype,"_trailSlotOccupied",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFieldBase.prototype,"_actionSlotOccupied",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("disabled")],GdsFieldBase.prototype,"_handleDisabledChange",1),GdsFieldBase=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-field-base"),(0,lit_localize.cc)()],GdsFieldBase);var tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),flex_component=__webpack_require__("./dist/libs/core/src/components/flex/flex.component.js");var _GdsBadge_instances,renderLeadSlot_fn,renderMainSlot_fn,handleSlotChange_fn,renderTrailSlot_fn,badge_styles_default=lit.AH`
  :host {
    display: inline-block;
  }

  slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-m);
  }

  :host([notification]) slot[name='trail']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }

  :host([notification]) slot[name='lead']::slotted(*) {
    line-height: var(--gds-sys-space-s);
  }
`;let GdsBadge=class extends((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(gds_element.j)))){constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsBadge_instances),this.variant="information",this.size="default",this.notification=!1,this.rounded=!1,this.mainSlotOccupied=!1}render(){let background,color;if(this.notification)background="negative-01",color="inversed";else switch(this.variant){case"information":default:background="information-03",color="information-01";break;case"notice":background="notice-03",color="notice-01";break;case"positive":background="positive-03",color="positive-01";break;case"warning":background="warning-03",color="warning-01";break;case"negative":background="negative-03",color="negative-01";break;case"disabled":background="disabled-03",color="disabled-01"}const padding="small"===this.size||this.notification?"2xs":"xs",blockSize=this.mainSlotOccupied?"small"===this.size||this.notification?"m":"l":"xs";return custom_element_scoping.qy`<gds-flex
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
      font="${"small"===this.size||this.notification?"detail-regular-xs":"detail-regular-s"}"
    >
      ${(0,chunk_QU3DSPNU.jq)(this,_GdsBadge_instances,renderLeadSlot_fn).call(this)} ${(0,chunk_QU3DSPNU.jq)(this,_GdsBadge_instances,renderMainSlot_fn).call(this)}
      ${(0,chunk_QU3DSPNU.jq)(this,_GdsBadge_instances,renderTrailSlot_fn).call(this)}
    </gds-flex>`}};_GdsBadge_instances=new WeakSet,renderLeadSlot_fn=function(){if("small"!==this.size||!this.notification)return custom_element_scoping.qy`<slot name="lead"></slot>`},renderMainSlot_fn=function(){return custom_element_scoping.qy`<slot @slotchange=${(0,chunk_QU3DSPNU.jq)(this,_GdsBadge_instances,handleSlotChange_fn)}></slot>`},handleSlotChange_fn=function(event){const assignedNodes=event.target.assignedNodes({flatten:!0});this.mainSlotOccupied=assignedNodes.length>0&&assignedNodes.some((node=>node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==node.textContent?.trim()))},renderTrailSlot_fn=function(){return custom_element_scoping.qy`<slot name="trail"></slot>`},GdsBadge.styles=[tokens_style.LU,badge_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsBadge.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],GdsBadge.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"notification",type:Boolean,reflect:!0})],GdsBadge.prototype,"notification",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"rounded",type:Boolean,reflect:!0})],GdsBadge.prototype,"rounded",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsBadge.prototype,"mainSlotOccupied",2),GdsBadge=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-badge",{dependsOn:[flex_component.o]})],GdsBadge);var triangle_exclamation_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/triangle-exclamation.component.js");var _GdsFormControlFooter_instances,renderRemainingCharsBadge_fn,form_control_footer_styles_default=lit.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host(.visually-hidden) {
      position: absolute;
      clip: rect(0 0 0 0);
      width: 0px;
      height: 0px;
      overflow: hidden;
    }

    :host > *:not(style) {
      display: flex;
      justify-content: space-between;
      align-items: center;
      gap: var(--gds-sys-space-xl);
    }

    .error-message {
      display: flex;
      align-items: flex-start;
      gap: var(--gds-sys-space-xs);
      margin-top: var(--gds-sys-space-2xs);
      font: var(--gds-sys-text-detail-regular-s);
      color: var(--gds-sys-color-content-negative-01);
    }

    [gds-element^='gds-icon'] {
      width: 18px;
      height: 18px;
    }

    :host(.size-small) {
      & .error-message {
        font: var(--gds-sys-text-detail-xs);
        gap: var(--gds-sys-space-2xs);
      }
      & [gds-element^='gds-icon'] {
        width: 16px;
        height: 16px;
        line-height: 16px;
        margin-right: 2px;
      }
    }
  }
`;let GdsFormControlFooter=class extends gds_element.j{constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsFormControlFooter_instances)}_handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}connectedCallback(){super.connectedCallback(),this._handleVisibilityChange()}render(){return custom_element_scoping.qy`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${(0,when.z)(this.errorMessage,(()=>custom_element_scoping.qy`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${this.errorMessage}
            `))}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${(0,when.z)(Number.isInteger(this.charCounter),(()=>(0,chunk_QU3DSPNU.jq)(this,_GdsFormControlFooter_instances,renderRemainingCharsBadge_fn).call(this,this.charCounter)))}
      </div>
    </div>`}};_GdsFormControlFooter_instances=new WeakSet,renderRemainingCharsBadge_fn=function(remaining){let variant;return variant=remaining<0?"negative":remaining<20?"warning":"positive",custom_element_scoping.qy`<gds-badge variant="${variant}">${remaining}</gds-badge>`},GdsFormControlFooter.styles=[form_control_footer_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsFormControlFooter.prototype,"charCounter",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFormControlFooter.prototype,"errorMessage",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("charCounter"),(0,watch.w)("errorMessage")],GdsFormControlFooter.prototype,"_handleVisibilityChange",1),GdsFormControlFooter=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-form-control-footer",{dependsOn:[GdsBadge,triangle_exclamation_component.f]})],GdsFormControlFooter);var button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),style_expression_property=__webpack_require__("./dist/libs/core/src/utils/decorators/style-expression-property.js"),div_component=__webpack_require__("./dist/libs/core/src/components/div/div.component.js");let GdsCard=class extends div_component.o{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return custom_element_scoping.qy`<slot></slot>`}};GdsCard.styles=[tokens_style.LU,lit.AH`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({styleTemplate:function(_prop,variant){let border,background,color;switch(variant[0]){case"primary":default:border="transparent",background=`var(--gds-sys-color-l${this.level}-neutral-01)`,color="var(--gds-sys-color-content-neutral-01)";break;case"secondary":border="var(--gds-sys-color-border-subtle-01)",background=`var(--gds-sys-color-l${this.level}-neutral-02)`,color="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":border="transparent",background=`var(--gds-sys-color-l${this.level}-brand-01)`,color="var(--gds-sys-color-content-inversed)";break;case"brand-02":border="transparent",background=`var(--gds-sys-color-l${this.level}-brand-02)`,color="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":border=`var(--gds-sys-color-border-${variant[0]}-02)`,background=`var(--gds-sys-color-l${this.level}-${variant[0]}-01)`,color=`var(--gds-sys-color-content-${variant[0]}-01)`}return`\n      --_border-color: ${border};\n      --_background-color: ${background};\n      --_color: ${color};\n      `}})],GdsCard.prototype,"variant",2),GdsCard=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-card")],GdsCard);var circle_info_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/circle-info.component.js");var _GdsFormControlHeader_instances,handleExtSupTxtSlotChange_fn,_renderExtSupTxtButton,_handleExtSupTxtBtnClick,_handleResize,renderExtSupTxt_fn,form_control_header_styles_default=lit.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    #label-row {
      display: flex;
      justify-content: space-between;
      align-items: center;
      color: var(--gds-sys-color-content-neutral-01);
    }

    #label-row > div {
      display: flex;
      flex-direction: column;
    }

    slot[name='label']::slotted(*) {
      font: var(--gds-sys-text-detail-book-m);
    }
    slot[name='supporting-text']::slotted(*) {
      font: var(--gds-sys-text-detail-regular-s);
    }

    :host(.size-small) slot[name='supporting-text'],
    :host(.size-small) ::slotted(label) {
      font: var(--gds-sys-text-detail-s);
    }

    #extended-supporting-text {
      opacity: 1;
      transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
      transition-duration: 368ms;
      transition-property: all;
      font: var(--gds-sys-text-detail-regular-s);
      border-radius: var(--gds-sys-space-xs);
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);
      max-height: var(--_max-height);
    }

    #extended-supporting-text[aria-hidden='false'] {
      margin: var(--gds-sys-space-2xs) 0 0 0;
      padding: var(--gds-sys-space-s) var(--gds-sys-space-m);
    }

    #extended-supporting-text[aria-hidden='true'] {
      max-height: 0;
      opacity: 0;
      translate: 0 2px;
      padding: 0 var(--gds-sys-space-m);
      margin: 0;
      overflow: hidden;
    }
  }
`;let GdsFormControlHeader=class extends gds_element.j{constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsFormControlHeader_instances),this.showExtendedSupportingText=!1,this._hasExtendedSupportingText=!1,(0,chunk_QU3DSPNU.VK)(this,_renderExtSupTxtButton,(()=>custom_element_scoping.qy`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${(0,lit_localize.ab)("Show more information")}"
        gds-aria-expanded="${this.showExtendedSupportingText}"
        @click=${(0,chunk_QU3DSPNU.S7)(this,_handleExtSupTxtBtnClick)}
      >
        <gds-icon-circle-info ?solid=${this.showExtendedSupportingText} />
      </gds-button>
    `)),(0,chunk_QU3DSPNU.VK)(this,_handleExtSupTxtBtnClick,(()=>{this.showExtendedSupportingText=!this.showExtendedSupportingText,this._extendedSupportingText?.style.setProperty("--_max-height",this.showExtendedSupportingText?`${this._extendedSupportingText.scrollHeight}px`:"0"),this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:this.showExtendedSupportingText})})),(0,chunk_QU3DSPNU.VK)(this,_handleResize,(()=>{this.showExtendedSupportingText&&this._extendedSupportingText?.style.setProperty("--_max-height",`${this._extendedSupportingText.scrollHeight}px`)}))}render(){return custom_element_scoping.qy`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${(0,when.z)(this._hasExtendedSupportingText,(0,chunk_QU3DSPNU.S7)(this,_renderExtSupTxtButton))}
      </div>

      ${(0,chunk_QU3DSPNU.jq)(this,_GdsFormControlHeader_instances,renderExtSupTxt_fn).call(this)}
    `}connectedCallback(){super.connectedCallback(),window.addEventListener("resize",(0,chunk_QU3DSPNU.S7)(this,_handleResize))}disconnectedCallback(){super.disconnectedCallback(),window.removeEventListener("resize",(0,chunk_QU3DSPNU.S7)(this,_handleResize))}};_GdsFormControlHeader_instances=new WeakSet,handleExtSupTxtSlotChange_fn=function(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},_renderExtSupTxtButton=new WeakMap,_handleExtSupTxtBtnClick=new WeakMap,_handleResize=new WeakMap,renderExtSupTxt_fn=function(){return custom_element_scoping.qy`
      <div
        id="extended-supporting-text"
        aria-hidden="${this.showExtendedSupportingText?"false":"true"}"
        ?inert=${!this.showExtendedSupportingText}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${(0,chunk_QU3DSPNU.jq)(this,_GdsFormControlHeader_instances,handleExtSupTxtSlotChange_fn)}
        ></slot>
      </div>
    `},GdsFormControlHeader.styles=[form_control_header_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFormControlHeader.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFormControlHeader.prototype,"_hasExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#extended-supporting-text")],GdsFormControlHeader.prototype,"_extendedSupportingText",2),GdsFormControlHeader=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-form-control-header",{dependsOn:[button_component.t,GdsCard,circle_info_component.w]}),(0,lit_localize.cc)()],GdsFormControlHeader);var ref=__webpack_require__("./node_modules/lit/directives/ref.js"),listbox_kb_nav_controller=__webpack_require__("./dist/libs/core/src/utils/controllers/listbox-kb-nav-controller.js"),unwrap_slots=__webpack_require__("./dist/libs/core/src/utils/helpers/unwrap-slots.js");var listbox_styles_default=lit.AH`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
    }
  }
`,checkmark_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/checkmark.component.js"),rbcb_toggle_style_default=lit.AH`
  .rbcb {
    --_toggle-size: var(--gds-sys-space-m);
    --_toggle-radius: var(--gds-sys-space-2xs);
    --_perimeter-size: var(--gds-sys-space-xl);
    --_toggle-border-width-checked: var(--gds-sys-space-s);

    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-03)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-neutral-02),
      var(--gds-sys-color-state-neutral-04)
    );

    /* -- */

    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    margin-block-start: calc(var(--gds-sys-space-4xs) * 2);
    cursor: pointer;
  }

  .rbcb--radio {
    --_toggle-radius: var(--gds-sys-space-max);
    --_toggle-border-width-checked: var(--gds-sys-space-2xs);
  }

  .rbcb__toggle {
    width: var(--_toggle-size);
    height: var(--_toggle-size);
    border-radius: var(--_toggle-radius);
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-neutral-01);
    background-color: var(--gds-sys-color-l1-neutral-01);
    box-sizing: border-box;
    transition-property: box-shadow;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    will-change: box-shadow;
    position: absolute;
    inset: 0;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .rbcb__icon {
    line-height: 10px;
    transition: scale 150ms;
    will-change: scale;
    scale: 1;
    color: var(--gds-sys-color-content-neutral-03);
  }

  .rbcb__perimeter {
    display: flex;
    box-sizing: border-box;
    backface-visibility: hidden;
    transition-property: background-color, scale, outline-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    outline-style: solid;
    outline-offset: calc(-1 * var(--gds-sys-space-3xs));
    outline-width: 0;
    outline-color: var(--gds-sys-color-content-neutral-01);
    border-radius: calc(var(--_toggle-radius) + 4px);
    min-width: var(--_perimeter-size);
    min-height: var(--_perimeter-size);
    position: absolute;
    left: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    top: calc(1 - calc((var(--_perimeter-size) - var(--_toggle-size)) / 2));
    scale: 0.8;
  }

  /**
   * Modifiers
   */

  .--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-l3-neutral-01);
  }

  .--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--_toggle-border-width-checked)
      var(--gds-sys-color-border-interactive);
  }

  .--invalid.--indeterminate .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-border-negative-01);
  }

  .--disabled {
    cursor: default;
  }

  .--disabled .rbcb__toggle {
    box-shadow: none;
    background-color: var(--gds-sys-color-l3-disabled-02);
  }

  .--invalid .rbcb__toggle {
    background-color: var(--gds-sys-color-l3-negative-02);
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-border-negative-01);
  }

  .--invalid.--checked .rbcb__toggle {
    box-shadow: inset 0 0 0 var(--gds-sys-space-4xs)
      var(--gds-sys-color-l3-negative-01);
  }

  .--invalid .rbcb__perimeter {
    outline-color: var(--gds-sys-color-border-negative-01);
    --_perimeter-bg-mix: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-state-negative-hover)
    );
    --_perimeter-bg-mix-active: color-mix(
      in srgb,
      var(--gds-sys-color-l3-negative-02),
      var(--gds-sys-color-l3-states-negative-pressed)
    );
  }

  .--invalid .rbcb__icon {
    color: var(--gds-sys-color-content-negative-01);
  }

  /*
   * When using the checkbox in a listbox, we need to remove the outline
   * from the checkbox since it exsist on the list item
   */
  :host([gds-element='gds-option']) .rbcb__perimeter {
    outline: none;
  }

  :host(:focus-visible) .rbcb__perimeter,
  :host(:focus-within) .rbcb__perimeter {
    outline-width: var(--gds-sys-space-3xs);
    scale: 1;
  }

  @media (hover: hover) {
    .rbcb:hover:not(.--disabled) .rbcb__perimeter,
    :host(:hover) .rbcb:not(.--disabled) .rbcb__perimeter {
      background-color: var(--_perimeter-bg-mix);
      scale: 1;
    }
  }

  @media (prefers-reduced-motion: reduce) {
    .rbcb__toggle {
      transition: none;
    }
  }

  .rbcb:active:not(.--disabled) .rbcb__perimeter,
  :host(:active) .rbcb:not(.--disabled) .rbcb__perimeter {
    background-color: var(--_perimeter-bg-mix-active);
    scale: 0.9;
  }
`;const template=props=>{const{type,checked,indeterminate,disabled,invalid}=props,modifiers={"rbcb--checkbox":"checkbox"===type,"rbcb--radio":"radio"===type,"--checked":checked,"--indeterminate":indeterminate,"--disabled":disabled,"--invalid":invalid};return custom_element_scoping.qy`
    <div class="rbcb ${(0,class_map.H)(modifiers)}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${(0,when.z)("checkbox"===type,(()=>custom_element_scoping.qy`
            ${(0,when.z)(indeterminate,(()=>custom_element_scoping.qy`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`),(()=>(0,when.z)(checked,(()=>custom_element_scoping.qy`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))))}
          `))}
      </div>
    </div>
  `};var _hidden,_GdsOption_instances,emitSelect_fn,focusable=__webpack_require__("./dist/libs/core/src/utils/mixins/focusable.js"),option_styles=__webpack_require__("./dist/libs/core/src/primitives/listbox/option.styles.js");let GdsOption=class extends((0,focusable.z)(gds_element.j)){constructor(){super(),(0,chunk_QU3DSPNU.VK)(this,_GdsOption_instances),(0,chunk_QU3DSPNU.VK)(this,_hidden,!1),this.selected=!1,this.isPlaceholder=!1,this.addEventListener("click",(0,chunk_QU3DSPNU.jq)(this,_GdsOption_instances,emitSelect_fn)),this.addEventListener("keydown",(e=>{"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,chunk_QU3DSPNU.jq)(this,_GdsOption_instances,emitSelect_fn).call(this,e))}))}get hidden(){return(0,chunk_QU3DSPNU.S7)(this,_hidden)}set hidden(value){const strValue=value.toString();(0,chunk_QU3DSPNU.OV)(this,_hidden,"true"===strValue),(0,chunk_QU3DSPNU.S7)(this,_hidden)?this.setAttribute("inert",""):this.removeAttribute("inert")}connectedCallback(){super.connectedCallback(),this.setAttribute("role","option"),this.updateComplete.then((()=>{this.isPlaceholder&&(this.hidden=!0),transitional_styles.n.instance.apply(this,"gds-option")}))}get parentElement(){return super.parentElement}_handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}render(){const isMultiple=this.parentElement?.multiple;return isMultiple||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),custom_element_scoping.qy`<div class="item">
      ${(0,when.z)(isMultiple,(()=>{return props={checked:this.selected,indeterminate:!1,disabled:!1,invalid:!1},template({...props,type:"checkbox"});var props}))} <slot></slot>
    </div>`}};var _slotRef,_handleSelect;_hidden=new WeakMap,_GdsOption_instances=new WeakSet,emitSelect_fn=function(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})},GdsOption.styles=[tokens_style.LU,rbcb_toggle_style_default,option_styles.A],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsOption.prototype,"value",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"hidden",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"aria-selected",reflect:!0})],GdsOption.prototype,"selected",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"isPlaceholder",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("isPlaceholder")],GdsOption.prototype,"_handlePlaceholderStatusChange",1),GdsOption=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-option",{dependsOn:[checkmark_component.V]})],GdsOption);let GdsListbox=class extends gds_element.j{constructor(){super(),this.multiple=!1,this.compareWith=(a,b)=>a===b,(0,chunk_QU3DSPNU.VK)(this,_slotRef,(0,ref._)()),(0,chunk_QU3DSPNU.VK)(this,_handleSelect,(e=>{const option=e.target;this.multiple?option.selected=!option.selected:(option.selected=!0,Array.from(this.options).forEach((el=>{el!==option&&(el.selected=!1)}))),this.ariaActiveDescendantElement=option,this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})})),new listbox_kb_nav_controller.y(this)}get navigableItems(){return this.visibleOptionElements}get options(){return(0,chunk_QU3DSPNU.S7)(this,_slotRef).value&&(0,unwrap_slots.o)((0,chunk_QU3DSPNU.S7)(this,_slotRef).value).assignedElements().filter((o=>!o.hasAttribute("isplaceholder")&&"gds-option"===o.gdsElementName))||[]}get visibleOptionElements(){return this.options.filter((el=>!el.hidden))}get visibleSelectedOptionElements(){return this.options.filter((el=>el.selected&&!el.hidden))}get selection(){return this.options.filter((el=>el.selected))}set selection(values){this.options.forEach((el=>{el.selected=values.some((v=>this.compareWith(v,el.value)))}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","listbox"),transitional_styles.n.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",(0,chunk_QU3DSPNU.S7)(this,_handleSelect))}focus(){(this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])?.focus()}render(){return custom_element_scoping.qy`<slot ${(0,ref.K)((0,chunk_QU3DSPNU.S7)(this,_slotRef))}></slot>`}_rerenderOptions(){this.options.forEach((el=>{el.requestUpdate()}))}};_slotRef=new WeakMap,_handleSelect=new WeakMap,GdsListbox.styles=listbox_styles_default,(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:value=>value.toString()}})],GdsListbox.prototype,"multiple",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsListbox.prototype,"compareWith",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("multiple")],GdsListbox.prototype,"_rerenderOptions",1),GdsListbox=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-listbox",{dependsOn:[GdsOption]})],GdsListbox);var form_control_host_style=__webpack_require__("./dist/libs/core/src/shared-styles/form-control-host.style.js"),observe_light_dom=__webpack_require__("./dist/libs/core/src/utils/decorators/observe-light-dom.js"),form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js"),icon=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconChevronBottom=class extends icon.M{};IconChevronBottom._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronBottom._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',IconChevronBottom._name="chevron-bottom",IconChevronBottom._width=24,IconChevronBottom._height=24,IconChevronBottom._viewBox="0 0 24 24",IconChevronBottom=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-icon-chevron-bottom")],IconChevronBottom);var popover_component=__webpack_require__("./dist/libs/core/src/components/popover/popover.component.js");var _optionElements,_GdsDropdown_instances,shouldShowFooter_fn,_renderCombobox,_renderTriggerButton,_calcMaxHeight,_dispatchUISateEvent,_handlePopoverStateChange,_handleSearchFieldInput,_handleSearchFieldKeyDown,_handleListboxKeyDown,_handleOptionFocusChange,handleSelectionChange_fn,_dispatchInputEvent,_dispatchChangeEvent,registerAutoCloseListener_fn,unregisterAutoCloseListener_fn,_blurCloseListener,_tabCloseListener,dropdown_styles_default=lit.AH`
  @layer base, reset;

  @layer base {
    :host {
      isolation: auto;
      contain: none;
    }

    #field::part(_base) {
      cursor: pointer;
    }

    button#trigger {
      flex: 0 1 100%;
      cursor: pointer;

      /* This prevents overflow when the text is too long */
      display: grid;
    }

    #trigger:focus {
      outline: none;
    }

    slot[name='trigger'] > span {
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }

    input[type='text'] {
      border-radius: var(--gds-sys-space-xs);
      border-bottom-left-radius: 0;
      border-bottom-right-radius: 0;
      font-size: inherit;
      line-height: inherit;
      border: none;
      outline: none;
      color: var(--gds-sys-color-content-disabled-01);
      border-color: var(--gds-sys-color-border-interactive);
      border-width: 0 0 var(--gds-sys-space-4xs) 0;
      border-style: solid;
      width: 100%;
      padding: var(--gds-sys-space-m);
      font-weight: var(--gds-sys-text-weight-regular);
      flex: 1;
      box-sizing: border-box;
      font-family: inherit;

      &:focus {
        border-color: var(--gds-sys-color-border-interactive);
        color: var(--gds-sys-color-content-neutral-01);
      }

      &::placeholder {
        font-family: inherit;
        font-weight: var(--gds-sys-text-weight-book);
        color: var(--gds-sys-color-content-disabled-01);
      }
    }

    [aria-expanded='true'] [slot='trail'] {
      transform: scaleY(-1);
    }
  }
`;let GdsDropdown=class extends form_control.S{constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_GdsDropdown_instances),this.supportingText="",this.open=!1,this.searchable=!1,this.multiple=!1,this.combobox=!1,this.compareWith=(a,b)=>a===b,this.searchFilter=(q,o)=>o.innerHTML.toLowerCase().includes(q.toLowerCase()),this.syncPopoverWidth=!1,this.maxHeight=500,this.size="medium",this.hideLabel=!1,this.plain=!1,this.disableMobileStyles=!1,this.showExtendedSupportingText=!1,(0,chunk_QU3DSPNU.VK)(this,_optionElements),(0,chunk_QU3DSPNU.VK)(this,_renderCombobox,(()=>custom_element_scoping.qy`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${this.open}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${this.placeholder?.innerHTML}"
        name="trigger"
        aria-label="${this.label} ${this.displayValue}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${this.invalid}"
        aria-required="${this.required}"
        aria-disabled="${this.disabled}"
        .value=${this.value}
        @click=${e=>{e.stopImmediatePropagation()}}
        @input=${e=>{this.value=e.target.value,(0,chunk_QU3DSPNU.S7)(this,_dispatchInputEvent).call(this),(0,chunk_QU3DSPNU.S7)(this,_handleSearchFieldInput).call(this,e),(0,chunk_QU3DSPNU.S7)(this,_dispatchUISateEvent).call(this,!0,"show")&&(this.open=!0)}}
        @keydown=${e=>{"ArrowDown"===e.key&&(e.preventDefault(),(0,chunk_QU3DSPNU.S7)(this,_dispatchUISateEvent).call(this,!0,"show")&&(this.open=!0),this._elListbox.then((listbox=>listbox.focus()))),"Enter"===e.key&&(0,chunk_QU3DSPNU.S7)(this,_dispatchChangeEvent).call(this)}}
      />
    `)),(0,chunk_QU3DSPNU.VK)(this,_renderTriggerButton,(()=>custom_element_scoping.qy`
      <button
        id="trigger"
        role="combobox"
        class="native-control"
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
          <span>${(0,unsafe_html._)(this.displayValue)}</span>
        </slot>
      </button>
    `)),(0,chunk_QU3DSPNU.VK)(this,_calcMaxHeight,(trigger=>{if(this.combobox){const triggerRect=trigger.getBoundingClientRect(),bottomSpace=window.innerHeight-triggerRect.bottom,topSpace=triggerRect.top;let height2=Math.min(topSpace,this.maxHeight);return bottomSpace>topSpace&&(height2=Math.min(bottomSpace,this.maxHeight)),height2-16+"px"}return Math.min(window.innerHeight,this.maxHeight)-16+"px"})),(0,chunk_QU3DSPNU.VK)(this,_dispatchUISateEvent,((toState,reason)=>this.dispatchCustomEvent("gds-ui-state",{detail:{reason,open:toState},bubbles:!1,composed:!1}))),(0,chunk_QU3DSPNU.VK)(this,_handlePopoverStateChange,(e=>{(0,chunk_QU3DSPNU.S7)(this,_dispatchUISateEvent).call(this,e.detail.open,e.detail.reason)&&(this.open=e.detail.open)})),(0,chunk_QU3DSPNU.VK)(this,_handleSearchFieldInput,(e=>{if(!e.currentTarget)return;e.stopPropagation();if(!this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}}))return;const input=e.currentTarget;if(this.options.forEach((o=>o.hidden=!1)),!input.value)return;this.options.filter((o=>!this.searchFilter(input.value,o))).forEach((o=>o.hidden=!0))})),(0,chunk_QU3DSPNU.VK)(this,_handleSearchFieldKeyDown,(e=>{this._elListbox?.then((listbox=>{if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void listbox.focus()}))})),(0,chunk_QU3DSPNU.VK)(this,_handleListboxKeyDown,(e=>{if("Tab"===e.key&&this.searchable)return e.preventDefault(),void this._elSearchInput?.focus()})),(0,chunk_QU3DSPNU.VK)(this,_handleOptionFocusChange,(e=>{const triggerButton=this._elTriggerBtn;triggerButton&&(triggerButton.ariaActiveDescendantElement=e.target)})),(0,chunk_QU3DSPNU.VK)(this,_dispatchInputEvent,(()=>{this.updateComplete.then((()=>this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})))})),(0,chunk_QU3DSPNU.VK)(this,_dispatchChangeEvent,(()=>{this.updateComplete.then((()=>this.dispatchCustomEvent("change",{detail:{value:this.value},bubbles:!0,composed:!0})))})),(0,chunk_QU3DSPNU.VK)(this,_blurCloseListener,(e=>{e instanceof FocusEvent&&e.relatedTarget&&!this.contains(e.relatedTarget)&&(0,chunk_QU3DSPNU.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(this.open=!1)})),(0,chunk_QU3DSPNU.VK)(this,_tabCloseListener,(e=>{"Tab"===e.key&&!this.searchable&&(0,chunk_QU3DSPNU.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(e.preventDefault(),this.open=!1,this._elTriggerBtn?.focus())}))}get type(){return"gds-dropdown"}get options(){return(0,chunk_QU3DSPNU.S7)(this,_optionElements)?Array.from((0,chunk_QU3DSPNU.S7)(this,_optionElements)).filter((o=>!o.hasAttribute("isplaceholder"))):[]}get placeholder(){if((0,chunk_QU3DSPNU.S7)(this,_optionElements))return Array.from((0,chunk_QU3DSPNU.S7)(this,_optionElements)).find((o=>o.hasAttribute("isplaceholder")))}get displayValue(){let displayValue;return displayValue=Array.isArray(this.value)?this.value.length>2?(0,lit_localize.ab)(lit_localize.gx`${this.value.length} selected`):this.value.reduce(((acc,cur)=>acc+this.options.find((v=>v.value===cur))?.innerText+", "),"").slice(0,-2):this.options.find((v=>v.selected))?.innerText,displayValue||this.placeholder?.innerText||""}focus(){this._getValidityAnchor().focus()}test_getFieldElement(){return this.shadowRoot?.querySelector("#field")}connectedCallback(){super.connectedCallback(),this.updateComplete.then((()=>{this._handleLightDOMChange(),this._handleValueChange(),this._handleOpenChange()}))}render(){return custom_element_scoping.qy`
      ${(0,when.z)(!this.plain&&!this.hideLabel,(()=>custom_element_scoping.qy`
          <gds-form-control-header
            class="size-${this.size}"
            .showExtendedSupportingText="${this.showExtendedSupportingText}"
          >
            <label id="label" for="trigger" slot="label">${this.label}</label>
            ${(0,when.z)(this.supportingText.length>0,(()=>custom_element_scoping.qy`<span slot="supporting-text" id="supporting-text">
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
        .calcMaxHeight=${(0,chunk_QU3DSPNU.S7)(this,_calcMaxHeight)}
        .disableMobileStyles=${this.disableMobileStyles||this.combobox}
        .nonmodal=${this.combobox}
        .floatingUIMiddleware=${this.combobox?[(0,floating_ui_dom.cY)(8),(0,floating_ui_dom.UU)()]:popover_component.E.DefaultMiddleware}
        @gds-ui-state=${(0,chunk_QU3DSPNU.S7)(this,_handlePopoverStateChange)}
      >
        <gds-field-base
          .size=${this.size}
          .disabled=${this.disabled}
          .invalid=${this.invalid}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${this.combobox&&!this.multiple?(0,chunk_QU3DSPNU.S7)(this,_renderCombobox).call(this):(0,chunk_QU3DSPNU.S7)(this,_renderTriggerButton).call(this)}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${(0,when.z)(this.searchable,(()=>custom_element_scoping.qy`<input
              id="searchinput"
              type="text"
              aria-label="${(0,lit_localize.ab)("Filter available options")}"
              placeholder="${(0,lit_localize.ab)("Search")}"
              @keydown=${(0,chunk_QU3DSPNU.S7)(this,_handleSearchFieldKeyDown)}
              @input=${(0,chunk_QU3DSPNU.S7)(this,_handleSearchFieldInput)}
            />`))}
        <gds-listbox
          id="listbox"
          .multiple="${(0,if_defined.J)(this.multiple)}"
          .compareWith="${this.compareWith}"
          @change="${(0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,handleSelectionChange_fn)}"
          @gds-focus="${(0,chunk_QU3DSPNU.S7)(this,_handleOptionFocusChange)}"
          @keydown=${(0,chunk_QU3DSPNU.S7)(this,_handleListboxKeyDown)}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,shouldShowFooter_fn).call(this),(()=>custom_element_scoping.qy`
          <gds-form-control-footer
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
          </gds-form-control-footer>
        `))}
    `}_getValidityAnchor(){return this._elTriggerBtn}_handleLightDOMChange(){this.requestUpdate(),(0,chunk_QU3DSPNU.OV)(this,_optionElements,this.querySelectorAll("[gds-element=gds-option]")),this.multiple?this._handleValueChange():void 0===this.value?this.placeholder?this.value=this.placeholder.value:this.value=this.options[0]?.value:this.combobox||this.placeholder||void 0!==this.options.find((o=>this.compareWith(o.value,this.value)))||(this.options[0]&&(this.options[0].selected=!0),this.value=this.options[0]?.value)}_handleValueChange(){this._elListbox.then((listbox=>{listbox&&(Array.isArray(this.value)?listbox.selection=this.value:listbox.selection=[this.value])}))}_handleOpenChange(){var _this=this;const open=this.open;this.options.forEach((o=>o.hidden=!open)),open?(0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,registerAutoCloseListener_fn).call(this):((0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,unregisterAutoCloseListener_fn).call(this),this._elSearchInput&&(this._elSearchInput.value=""));const selectedOption=this.options.find((option=>option.selected));requestAnimationFrame((0,asyncToGenerator.A)((function*(){yield _this.updateComplete,selectedOption?.scrollIntoView({block:"center"})})))}};_optionElements=new WeakMap,_GdsDropdown_instances=new WeakSet,shouldShowFooter_fn=function(){return!this.plain},_renderCombobox=new WeakMap,_renderTriggerButton=new WeakMap,_calcMaxHeight=new WeakMap,_dispatchUISateEvent=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleSearchFieldInput=new WeakMap,_handleSearchFieldKeyDown=new WeakMap,_handleListboxKeyDown=new WeakMap,_handleOptionFocusChange=new WeakMap,handleSelectionChange_fn=function(){this._elListbox.then((listbox=>{this.multiple?this.value=listbox.selection.map((s=>s.value)):(this.value=listbox.selection[0]?.value,(0,chunk_QU3DSPNU.S7)(this,_dispatchUISateEvent).call(this,!1,"close")&&(this.open=!1,setTimeout((()=>this._elTriggerBtn?.focus()),0))),(0,chunk_QU3DSPNU.S7)(this,_dispatchInputEvent).call(this),(0,chunk_QU3DSPNU.S7)(this,_dispatchChangeEvent).call(this)}))},_dispatchInputEvent=new WeakMap,_dispatchChangeEvent=new WeakMap,registerAutoCloseListener_fn=function(){this.addEventListener("blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.addEventListener("gds-blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.addEventListener("keydown",(0,chunk_QU3DSPNU.S7)(this,_tabCloseListener))},unregisterAutoCloseListener_fn=function(){this.removeEventListener("blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.removeEventListener("gds-blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.removeEventListener("keydown",(0,chunk_QU3DSPNU.S7)(this,_tabCloseListener))},_blurCloseListener=new WeakMap,_tabCloseListener=new WeakMap,GdsDropdown.styles=[tokens_style.LU,form_control_host_style.A,dropdown_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],GdsDropdown.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"searchable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"multiple",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"combobox",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsDropdown.prototype,"compareWith",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsDropdown.prototype,"searchFilter",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"sync-popover-width"})],GdsDropdown.prototype,"syncPopoverWidth",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number,attribute:"max-height"})],GdsDropdown.prototype,"maxHeight",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsDropdown.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-label"})],GdsDropdown.prototype,"hideLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsDropdown.prototype,"plain",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsDropdown.prototype,"disableMobileStyles",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],GdsDropdown.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#trigger")],GdsDropdown.prototype,"_elTriggerBtn",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#listbox")],GdsDropdown.prototype,"_elListbox",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#searchinput")],GdsDropdown.prototype,"_elSearchInput",2),(0,chunk_QU3DSPNU.Cc)([(0,observe_light_dom.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],GdsDropdown.prototype,"_handleLightDOMChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],GdsDropdown.prototype,"_handleValueChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("open")],GdsDropdown.prototype,"_handleOpenChange",1),GdsDropdown=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-dropdown",{dependsOn:[GdsFormControlHeader,GdsFormControlFooter,GdsFieldBase,GdsListbox,popover_component.E,checkmark_component.V,IconChevronBottom]}),(0,lit_localize.cc)()],GdsDropdown)},"./dist/libs/core/src/components/dropdown/dropdown.trans.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{k:()=>dropdown_trans_styles_register});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js");const field_base_trans_styles_scss="/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\n@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  .field {\n    border-radius: var(--sg-border-radius);\n    border: solid var(--sg-border-width) var(--sg-border-color);\n    --border-color: var(--sg-border-color);\n    align-items: stretch;\n    gap: var(--gds-sys-space-xs);\n    background-color: var(--gds-sys-color-background-primary);\n    box-sizing: border-box;\n    color: var(--gds-sys-color-text-primary);\n    cursor: text;\n    display: flex;\n    justify-content: space-between;\n    align-items: center;\n    padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-xs) calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-m);\n    min-block-size: 44px;\n  }\n  .field:focus:not(:focus-visible) {\n    box-shadow: none;\n    outline: 0;\n  }\n  .field:focus, .field:focus-within {\n    outline-color: var(--gds-sys-color-focus-outline);\n    outline-style: solid;\n    outline-width: 0.125rem;\n    outline-offset: 0.125rem;\n  }\n  .field:hover {\n    background-color: var(--grey-200);\n  }\n  .field.small {\n    font-size: 0.875rem;\n    min-height: 2rem;\n  }\n  .field.multiline {\n    align-items: flex-start;\n    padding: calc(var(--gds-sys-space-s) - 1px) var(--gds-sys-space-s) calc(var(--gds-sys-space-s) - 1px) var(--gds-sys-space-m);\n    height: -moz-max-content;\n    height: max-content;\n  }\n  .field.action-slot-occupied:not(.trail-slot-occupied) {\n    padding-right: var(--gds-sys-space-xs);\n  }\n  .field.lead-slot-occupied {\n    padding-left: var(--gds-sys-space-xs);\n  }\n  .field.trail-slot-occupied {\n    padding: calc(var(--gds-sys-space-xs) - 1px) var(--gds-sys-space-m);\n  }\n  .field slot[name=action]::slotted(*) {\n    margin: -3px 0 -3px -3px;\n  }\n  .field:focus-within {\n    outline-color: currentColor;\n  }\n  .field.invalid {\n    border-color: var(--gds-sys-color-border-negative-01);\n    color: var(--gds-sys-color-content-negative-01);\n    border-bottom-width: 2px;\n  }\n  .field.disabled {\n    background: var(--gds-sys-color-l3-disabled-01);\n    color: var(--gds-sys-color-content-disabled-01);\n    border-color: transparent;\n    pointer-events: none;\n  }\n  .main-slot-wrap {\n    display: flex;\n    flex: 1;\n  }\n  slot:not([name])::slotted(*) {\n    color: currentColor;\n  }\n  slot[name=lead]::slotted([gds-element^=gds-icon-]) {\n    align-items: center;\n    justify-content: center;\n    display: flex;\n    min-width: var(--gds-sys-space-l);\n  }\n}";function register(){transitional_styles.n.instance.register("gds-field-base",field_base_trans_styles_scss.toString())}var listbox_trans_styles=__webpack_require__("./dist/libs/core/src/primitives/listbox/listbox.trans.styles.js");const button_trans_styles_scss="/* stylelint-disable max-nesting-depth */\n/* stylelint-enable max-nesting-depth */\n/**\n * Calculate the luminance for a color.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/**\n * Calculate the contrast ratio between two colors.\n * See https://www.w3.org/TR/WCAG20-TECHS/G17.html#G17-tests\n */\n/* stylelint-disable */\n/* stylelint-enable */\n/* stylelint-disable */\n/**\n* @deprecated\n* Use `add-focus` instead\n*/\n/** add background color, color and border-color to element when it has focus-visible i.e. tab focus */\ni.sg-icon {\n  font-size: 0;\n  width: 1rem;\n  height: 1rem;\n  display: inline-block;\n}\ni.sg-icon::before {\n  content: \"\";\n  display: inline-block;\n  background: var(--color);\n  width: 100%;\n  height: 100%;\n  -webkit-mask-repeat: no-repeat;\n          mask-repeat: no-repeat;\n}\ni.sg-icon.sg-icon-calendar::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--%3E%3Cpath d='M152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 248h80v-56H48v56zm0 48v64h80v-64H48zm128 0v64h96v-64h-96zm144 0v64h80v-64h-80zm80-104h-80v56h80v-56zm0 216h-80v56h64c8.8 0 16-7.2 16-16v-40zm-128 0h-96v56h96v-56zm-144 0H48v40c0 8.8 7.16 16 16 16h64v-56zm144-216h-96v56h96v-56z '/%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--%3E%3Cpath d='M152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 248h80v-56H48v56zm0 48v64h80v-64H48zm128 0v64h96v-64h-96zm144 0v64h80v-64h-80zm80-104h-80v56h80v-56zm0 216h-80v56h64c8.8 0 16-7.2 16-16v-40zm-128 0h-96v56h96v-56zm-144 0H48v40c0 8.8 7.16 16 16 16h64v-56zm144-216h-96v56h96v-56z '/%3E%3C/svg%3E\");\n}\ni.sg-icon.sg-icon-calendar-range::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--%3E%3Cpath d='M96 288c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm224 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-128-64c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24zm40 72c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h112zM152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 448c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V192H48v256z'/%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--%3E%3Cpath d='M96 288c0-17.7 14.3-32 32-32s32 14.3 32 32-14.3 32-32 32-32-14.3-32-32zm224 64c17.7 0 32 14.3 32 32s-14.3 32-32 32-32-14.3-32-32 14.3-32 32-32zm-128-64c0-13.3 10.7-24 24-24h112c13.3 0 24 10.7 24 24s-10.7 24-24 24H216c-13.3 0-24-10.7-24-24zm40 72c13.3 0 24 10.7 24 24s-10.7 24-24 24H120c-13.3 0-24-10.7-24-24s10.7-24 24-24h112zM152 64h144V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40h40c35.3 0 64 28.65 64 64v320c0 35.3-28.7 64-64 64H64c-35.35 0-64-28.7-64-64V128c0-35.35 28.65-64 64-64h40V24c0-13.25 10.7-24 24-24s24 10.75 24 24v40zM48 448c0 8.8 7.16 16 16 16h320c8.8 0 16-7.2 16-16V192H48v256z'/%3E%3C/svg%3E\");\n}\ni.sg-icon.sg-icon-ellipsis::before {\n  -webkit-mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--%3E%3Cpath d='M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z'/%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 448 512'%3E%3C!--! Font Awesome Pro 6.1.0 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc.--%3E%3Cpath d='M8 256a56 56 0 1 1 112 0A56 56 0 1 1 8 256zm160 0a56 56 0 1 1 112 0 56 56 0 1 1 -112 0zm216-56a56 56 0 1 1 0 112 56 56 0 1 1 0-112z'/%3E%3C/svg%3E\");\n}\ni.sg-icon.sg-icon-grip-vertical::before {\n  -webkit-mask-image: url(\"data:image/svg+xml, %3Csvg height='1em' viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z' /%3E%3C/svg%3E\");\n          mask-image: url(\"data:image/svg+xml, %3Csvg height='1em' viewBox='0 0 320 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M40 352l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zm192 0l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 320c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 192l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40zM40 160c-22.1 0-40-17.9-40-40L0 72C0 49.9 17.9 32 40 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0zM232 32l48 0c22.1 0 40 17.9 40 40l0 48c0 22.1-17.9 40-40 40l-48 0c-22.1 0-40-17.9-40-40l0-48c0-22.1 17.9-40 40-40z' /%3E%3C/svg%3E\");\n}\ni.sg-icon.sg-icon-next::before {\n  background: none;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n  content: \"\";\n  display: block;\n  height: 12px;\n  margin-left: -10px;\n  margin-top: 2px;\n  transform: translate(75%) rotate(-135deg) scaleZ(-1);\n  transition: transform 0.3s ease-in;\n  width: 12px;\n}\ni.sg-icon.sg-icon-previous::before {\n  background: none;\n  border-bottom: 2px solid;\n  border-left: 2px solid;\n  content: \"\";\n  display: block;\n  height: 12px;\n  margin-left: -4px;\n  margin-top: 2px;\n  transform: translate(75%) rotate(45deg) scaleZ(-1);\n  transition: transform 0.3s ease-in;\n  width: 12px;\n}\ni.sg-icon.sg-icon-ellipsis::before {\n  margin-right: -2px;\n}\n\n@layer base, reset, transitional-styles;\n@layer transitional-styles {\n  @layer _base, _ranks, _overrides;\n  :host {\n    display: inline-block;\n  }\n  @layer _base {\n    .button {\n      background-color: transparent;\n      border: 0;\n      cursor: pointer;\n      font-family: inherit;\n      padding: 0;\n      padding-left: 1rem;\n      padding-right: 1rem;\n      padding-bottom: 0.75rem;\n      padding-top: 0.75rem;\n      border-radius: var(--sg-border-radius);\n      border: solid var(--sg-border-width) var(--sg-border-color);\n      font-weight: 500;\n      min-height: 2.75rem;\n      align-items: center;\n      display: inline-flex;\n      justify-content: center;\n      box-sizing: border-box;\n      font-size: inherit;\n      overflow: hidden;\n      display: flex;\n      gap: 0.5rem;\n      text-decoration: none;\n      width: 100%;\n    }\n    .button:focus:not(:focus-visible) {\n      box-shadow: none;\n      outline: 0;\n    }\n    .button:focus, .button:focus-visible {\n      outline-color: var(--gds-sys-color-focus-outline);\n      outline-style: solid;\n      outline-width: 0.125rem;\n      outline-offset: 0.125rem;\n    }\n    @media (max-width: 35.98em) {\n      .button {\n        min-width: 100%;\n      }\n    }\n    @media screen and (-ms-high-contrast: active) {\n      .button {\n        border: 2px solid currentcolor;\n      }\n    }\n    .button.small {\n      min-height: 2rem;\n      padding: 0.4375rem 0.75rem;\n      line-height: 1rem;\n    }\n    .button.large {\n      min-height: 4rem;\n      padding: 1rem 1.5rem;\n      font-size: 1.5rem;\n      line-height: 2rem;\n    }\n    .button slot:not([name]) {\n      display: inline-block;\n      overflow: hidden;\n      text-overflow: ellipsis;\n      white-space: nowrap;\n    }\n    :host(:not([variant=ghost])) .button {\n      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n      background: rgb(0, 122, 199);\n      border-color: rgb(0, 122, 199);\n      color: #fff;\n      --color: #fff;\n    }\n    :host(:not([variant=ghost])) .button:not(:disabled, .disabled, [aria-disabled]):hover {\n      background-color: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      color: rgb(255, 255, 255);\n      --background: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(25.4035777564, 154.8940067842, 227.221994169);\n    }\n    :host(:not([variant=ghost])) .button[aria-selected=true], :host(:not([variant=ghost])) .button:active, :host(:not([variant=ghost])) .button.active, :host(:not([variant=ghost])) .button.active:hover, :host(:not([variant=ghost])) .button:active:hover {\n      background-color: rgb(0, 122, 199);\n      color: rgb(255, 255, 255);\n      --background: rgb(0, 122, 199);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(0, 122, 199);\n    }\n    :host(:not([variant=ghost])) .button:focus-visible {\n      background-color: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      color: rgb(255, 255, 255);\n      --background: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(25.4035777564, 154.8940067842, 227.221994169) !important;\n    }\n    :host(:not([variant=ghost])) .button:disabled, :host(:not([variant=ghost])) .button.disabled, :host(:not([variant=ghost])) .button[aria-disabled=true] {\n      background: var(--form-control-primary-bg-disabled) !important;\n      color: var(--text-primary-disabled-color) !important;\n      border-color: var(--border-primary-disabled-color) !important;\n      cursor: not-allowed;\n    }\n    :host(:not([variant=ghost])) .button:disabled::-moz-placeholder, :host(:not([variant=ghost])) .button.disabled::-moz-placeholder, :host(:not([variant=ghost])) .button[aria-disabled=true]::-moz-placeholder {\n      color: var(--text-disabled-color);\n    }\n    :host(:not([variant=ghost])) .button:disabled::placeholder, :host(:not([variant=ghost])) .button.disabled::placeholder, :host(:not([variant=ghost])) .button[aria-disabled=true]::placeholder {\n      color: var(--text-disabled-color);\n    }\n    :host([rank*=secondary]) .button {\n      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n      background: transparent;\n      border-color: rgb(0, 122, 199);\n      color: rgb(0, 122, 199);\n      --color: rgb(0, 122, 199);\n    }\n    :host([rank*=secondary]) .button:focus:not(:focus-visible) {\n      box-shadow: none;\n      outline: 0;\n    }\n    :host([rank*=secondary]) .button:focus, :host([rank*=secondary]) .button:focus-visible {\n      outline-color: var(--gds-sys-color-focus-outline);\n      outline-style: solid;\n      outline-width: 0.125rem;\n      outline-offset: 0.125rem;\n    }\n    :host([rank*=secondary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {\n      background-color: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      color: rgb(255, 255, 255);\n      --background: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(25.4035777564, 154.8940067842, 227.221994169);\n    }\n    :host([rank*=secondary]) .button[aria-selected=true], :host([rank*=secondary]) .button:active, :host([rank*=secondary]) .button.active, :host([rank*=secondary]) .button.active:hover, :host([rank*=secondary]) .button:active:hover {\n      background-color: rgb(0, 122, 199);\n      color: rgb(255, 255, 255);\n      --background: rgb(0, 122, 199);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(0, 122, 199);\n    }\n    :host([rank*=secondary]) .button:disabled, :host([rank*=secondary]) .button.disabled, :host([rank*=secondary]) .button[aria-disabled=true] {\n      background: var(--sg-form-control-bg-disabled) !important;\n      color: var(--text-disabled-color) !important;\n      border-color: var(--border-disabled-color) !important;\n      cursor: not-allowed;\n    }\n    :host([rank*=secondary]) .button:disabled::-moz-placeholder, :host([rank*=secondary]) .button.disabled::-moz-placeholder, :host([rank*=secondary]) .button[aria-disabled=true]::-moz-placeholder {\n      color: var(--text-disabled-color);\n    }\n    :host([rank*=secondary]) .button:disabled::placeholder, :host([rank*=secondary]) .button.disabled::placeholder, :host([rank*=secondary]) .button[aria-disabled=true]::placeholder {\n      color: var(--text-disabled-color);\n    }\n    :host([rank*=tertiary]) .button {\n      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n      background: transparent;\n      border-color: transparent;\n      color: rgb(0, 122, 199);\n      --color: rgb(0, 122, 199);\n    }\n    :host([rank*=tertiary]) .button:focus:not(:focus-visible) {\n      box-shadow: none;\n      outline: 0;\n    }\n    :host([rank*=tertiary]) .button:focus, :host([rank*=tertiary]) .button:focus-visible {\n      outline-color: var(--gds-sys-color-focus-outline);\n      outline-style: solid;\n      outline-width: 0.125rem;\n      outline-offset: 0.125rem;\n    }\n    :host([rank*=tertiary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {\n      background-color: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      color: rgb(255, 255, 255);\n      --background: rgb(25.4035777564, 154.8940067842, 227.221994169);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(25.4035777564, 154.8940067842, 227.221994169);\n    }\n    :host([rank*=tertiary]) .button[aria-selected=true], :host([rank*=tertiary]) .button:active, :host([rank*=tertiary]) .button.active, :host([rank*=tertiary]) .button.active:hover, :host([rank*=tertiary]) .button:active:hover {\n      background-color: rgb(0, 122, 199);\n      color: rgb(255, 255, 255);\n      --background: rgb(0, 122, 199);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(0, 122, 199);\n    }\n    :host([rank*=tertiary]) .button:disabled, :host([rank*=tertiary]) .button.disabled, :host([rank*=tertiary]) .button[aria-disabled=true] {\n      background: var(--sg-form-control-bg-disabled) !important;\n      color: var(--text-disabled-color) !important;\n      border-color: var(--border-disabled-color) !important;\n      cursor: not-allowed;\n    }\n    :host([rank*=tertiary]) .button:disabled::-moz-placeholder, :host([rank*=tertiary]) .button.disabled::-moz-placeholder, :host([rank*=tertiary]) .button[aria-disabled=true]::-moz-placeholder {\n      color: var(--text-disabled-color);\n    }\n    :host([rank*=tertiary]) .button:disabled::placeholder, :host([rank*=tertiary]) .button.disabled::placeholder, :host([rank*=tertiary]) .button[aria-disabled=true]::placeholder {\n      color: var(--text-disabled-color);\n    }\n    /* stylelint-disable */\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button,\n    :host([variant=negative][rank=primary]) .button {\n      background: rgb(187, 0, 12);\n      border-color: rgb(187, 0, 12);\n      color: #fff;\n      --color: #fff;\n      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:not(:disabled, .disabled, [aria-disabled]):hover,\n    :host([variant=negative][rank=primary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {\n      background-color: rgb(216, 26, 26);\n      color: rgb(255, 255, 255);\n      --background: rgb(216, 26, 26);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(216, 26, 26);\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-selected=true], :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:active, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.active, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.active:hover, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:active:hover,\n    :host([variant=negative][rank=primary]) .button[aria-selected=true],\n    :host([variant=negative][rank=primary]) .button:active,\n    :host([variant=negative][rank=primary]) .button.active,\n    :host([variant=negative][rank=primary]) .button.active:hover,\n    :host([variant=negative][rank=primary]) .button:active:hover {\n      background-color: rgb(187, 0, 12);\n      color: rgb(255, 255, 255);\n      --background: rgb(187, 0, 12);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(187, 0, 12);\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-selected]:hover, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.active:hover, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:active:hover,\n    :host([variant=negative][rank=primary]) .button[aria-selected]:hover,\n    :host([variant=negative][rank=primary]) .button.active:hover,\n    :host([variant=negative][rank=primary]) .button:active:hover {\n      opacity: 0.9;\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:focus:not(:focus-visible),\n    :host([variant=negative][rank=primary]) .button:focus:not(:focus-visible) {\n      box-shadow: none;\n      outline: 0;\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:focus, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:focus-visible,\n    :host([variant=negative][rank=primary]) .button:focus,\n    :host([variant=negative][rank=primary]) .button:focus-visible {\n      outline-color: var(--gds-sys-color-focus-outline);\n      outline-style: solid;\n      outline-width: 0.125rem;\n      outline-offset: 0.125rem;\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:disabled, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.disabled, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-disabled=true],\n    :host([variant=negative][rank=primary]) .button:disabled,\n    :host([variant=negative][rank=primary]) .button.disabled,\n    :host([variant=negative][rank=primary]) .button[aria-disabled=true] {\n      background: var(--form-control-primary-bg-disabled) !important;\n      color: var(--text-primary-disabled-color) !important;\n      border-color: var(--border-primary-disabled-color) !important;\n      cursor: not-allowed;\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:disabled::-moz-placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.disabled::-moz-placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-disabled=true]::-moz-placeholder, :host([variant=negative][rank=primary]) .button:disabled::-moz-placeholder, :host([variant=negative][rank=primary]) .button.disabled::-moz-placeholder, :host([variant=negative][rank=primary]) .button[aria-disabled=true]::-moz-placeholder {\n      color: var(--text-disabled-color);\n    }\n    :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button:disabled::placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button.disabled::placeholder, :host([variant=negative]:not([rank=secondary], [rank=tertiary])) .button[aria-disabled=true]::placeholder,\n    :host([variant=negative][rank=primary]) .button:disabled::placeholder,\n    :host([variant=negative][rank=primary]) .button.disabled::placeholder,\n    :host([variant=negative][rank=primary]) .button[aria-disabled=true]::placeholder {\n      color: var(--text-disabled-color);\n    }\n    /* stylelint-enable */\n    :host([variant=negative][rank=secondary]) .button,\n    :host([variant=negative][rank=tertiary]) .button {\n      color: rgb(187, 0, 12);\n      --color: rgb(187, 0, 12);\n      border-color: transparent;\n      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n    }\n    :host([variant=negative][rank=secondary]) .button:not(:disabled, .disabled, [aria-disabled]):hover,\n    :host([variant=negative][rank=tertiary]) .button:not(:disabled, .disabled, [aria-disabled]):hover {\n      background-color: rgb(216, 26, 26);\n      color: rgb(255, 255, 255);\n      --background: rgb(216, 26, 26);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(216, 26, 26);\n    }\n    :host([variant=negative][rank=secondary]) .button[aria-selected=true], :host([variant=negative][rank=secondary]) .button:active, :host([variant=negative][rank=secondary]) .button.active, :host([variant=negative][rank=secondary]) .button.active:hover, :host([variant=negative][rank=secondary]) .button:active:hover,\n    :host([variant=negative][rank=tertiary]) .button[aria-selected=true],\n    :host([variant=negative][rank=tertiary]) .button:active,\n    :host([variant=negative][rank=tertiary]) .button.active,\n    :host([variant=negative][rank=tertiary]) .button.active:hover,\n    :host([variant=negative][rank=tertiary]) .button:active:hover {\n      background-color: rgb(187, 0, 12);\n      color: rgb(255, 255, 255);\n      --background: rgb(187, 0, 12);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(187, 0, 12);\n    }\n    :host([variant=negative][rank=secondary]) .button[aria-selected]:hover, :host([variant=negative][rank=secondary]) .button.active:hover, :host([variant=negative][rank=secondary]) .button:active:hover,\n    :host([variant=negative][rank=tertiary]) .button[aria-selected]:hover,\n    :host([variant=negative][rank=tertiary]) .button.active:hover,\n    :host([variant=negative][rank=tertiary]) .button:active:hover {\n      opacity: 0.9;\n    }\n    :host([variant=negative][rank=secondary]) .button:focus:not(:focus-visible),\n    :host([variant=negative][rank=tertiary]) .button:focus:not(:focus-visible) {\n      box-shadow: none;\n      outline: 0;\n    }\n    :host([variant=negative][rank=secondary]) .button:focus, :host([variant=negative][rank=secondary]) .button:focus-visible,\n    :host([variant=negative][rank=tertiary]) .button:focus,\n    :host([variant=negative][rank=tertiary]) .button:focus-visible {\n      outline-color: var(--gds-sys-color-focus-outline);\n      outline-style: solid;\n      outline-width: 0.125rem;\n      outline-offset: 0.125rem;\n    }\n    :host([variant=negative][rank=secondary]) .button {\n      border-color: rgb(187, 0, 12);\n    }\n    :host([variant=ghost]) .button {\n      transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1), outline-offset 0s, outline-width 0s;\n      border-color: rgb(51, 51, 51);\n      color: rgb(51, 51, 51);\n      --color: rgb(51, 51, 51);\n    }\n    :host([variant=ghost]) .button:not(:disabled, .disabled, [aria-disabled]):hover {\n      background-color: rgb(51, 51, 51);\n      color: rgb(255, 255, 255);\n      --background: rgb(51, 51, 51);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(51, 51, 51);\n    }\n    :host([variant=ghost]) .button[aria-selected=true], :host([variant=ghost]) .button:active, :host([variant=ghost]) .button.active, :host([variant=ghost]) .button.active:hover, :host([variant=ghost]) .button:active:hover {\n      background-color: rgb(51, 51, 51);\n      color: rgb(255, 255, 255);\n      --background: rgb(51, 51, 51);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(51, 51, 51);\n    }\n    :host([variant=ghost]) .button[aria-selected]:hover, :host([variant=ghost]) .button.active:hover, :host([variant=ghost]) .button:active:hover {\n      opacity: 0.9;\n    }\n    :host([variant=ghost]) .button:focus-visible {\n      background-color: rgb(51, 51, 51);\n      color: rgb(255, 255, 255);\n      --background: rgb(51, 51, 51);\n      --color: rgb(255, 255, 255);\n      border-color: rgb(51, 51, 51) !important;\n    }\n    :host([variant=ghost]) .button:disabled, :host([variant=ghost]) .button.disabled, :host([variant=ghost]) .button[aria-disabled=true] {\n      color: var(--text-disabled-color) !important;\n      border-color: var(--border-disabled-color) !important;\n      cursor: not-allowed;\n    }\n    :host([variant=ghost]) .button:disabled::-moz-placeholder, :host([variant=ghost]) .button.disabled::-moz-placeholder, :host([variant=ghost]) .button[aria-disabled=true]::-moz-placeholder {\n      color: var(--text-disabled-color);\n    }\n    :host([variant=ghost]) .button:disabled::placeholder, :host([variant=ghost]) .button.disabled::placeholder, :host([variant=ghost]) .button[aria-disabled=true]::placeholder {\n      color: var(--text-disabled-color);\n    }\n  }\n  @layer _overrides {\n    :host .button.icon {\n      padding: 0.75rem;\n      background: transparent;\n      border-width: 0px;\n      color: currentColor;\n    }\n    :host .button.icon:hover {\n      color: currentColor;\n      background: var(--grey-500);\n    }\n    :host .button.icon slot {\n      display: contents;\n    }\n    .button.icon.xs {\n      min-height: 1.5rem;\n      line-height: 0.75rem;\n      padding: 0.25rem;\n    }\n    .button.icon.small {\n      padding: 0.5rem;\n    }\n    .button.icon.large {\n      padding: 1rem;\n    }\n  }\n}";function button_trans_styles_register(){transitional_styles.n.instance.register("gds-button",button_trans_styles_scss.toString())}var popover_trans_styles=__webpack_require__("./dist/libs/core/src/components/popover/popover.trans.styles.js");function dropdown_trans_styles_register(){listbox_trans_styles.k(),popover_trans_styles.k(),button_trans_styles_register(),register()}},"./dist/libs/core/src/components/flex/flex.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>GdsFlex});var chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),div_component=__webpack_require__("./dist/libs/core/src/components/div/div.component.js");var flex_styles_default=__webpack_require__("./node_modules/lit/index.js").AH`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`;let GdsFlex=class extends div_component.o{render(){return custom_element_scoping.qy`<slot></slot>`}};GdsFlex.styles=[tokens_style.LU,flex_styles_default],GdsFlex=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-flex")],GdsFlex)},"./dist/libs/core/src/components/icon/icons/checkmark.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>IconCheckmark});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconCheckmark=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconCheckmark._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCheckmark._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>',IconCheckmark._name="checkmark",IconCheckmark._width=24,IconCheckmark._height=24,IconCheckmark._viewBox="0 0 24 24",IconCheckmark=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-checkmark")],IconCheckmark)},"./dist/libs/core/src/components/icon/icons/circle-info.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>IconCircleInfo});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconCircleInfo=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconCircleInfo._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',IconCircleInfo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',IconCircleInfo._name="circle-info",IconCircleInfo._width=24,IconCircleInfo._height=24,IconCircleInfo._viewBox="0 0 24 24",IconCircleInfo=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-circle-info")],IconCircleInfo)},"./dist/libs/core/src/components/icon/icons/triangle-exclamation.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>IconTriangleExclamation});var _chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_icon_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./dist/libs/core/src/components/icon/icon.js");let IconTriangleExclamation=class extends _icon_js__WEBPACK_IMPORTED_MODULE_1__.M{};IconTriangleExclamation._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM12 2.75L11.3543 2.36845L1.60431 18.8685L2.25 19.25L2.89569 19.6315L12.6457 3.13155L12 2.75ZM2.25 19.25V20H21.75V19.25V18.5H2.25V19.25ZM21.75 19.25L22.3957 18.8685L12.6457 2.36845L12 2.75L11.3543 3.13155L21.1043 19.6315L21.75 19.25ZM12 9.75H11.25V13.25H12H12.75V9.75H12ZM12.25 15.75H11.5C11.5 15.4739 11.7239 15.25 12 15.25V16V16.75C12.5523 16.75 13 16.3023 13 15.75H12.25ZM12 16V15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11.75H11C11 16.3023 11.4477 16.75 12 16.75V16ZM11.75 15.75H12.5C12.5 16.0261 12.2761 16.25 12 16.25V15.5V14.75C11.4477 14.75 11 15.1977 11 15.75H11.75ZM12 15.5V16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H12.25H13C13 15.1977 12.5523 14.75 12 14.75V15.5ZM12 15.75H12.75V15.74H12H11.25V15.75H12Z" fill="currentColor"/>',IconTriangleExclamation._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>',IconTriangleExclamation._name="triangle-exclamation",IconTriangleExclamation._width=24,IconTriangleExclamation._height=24,IconTriangleExclamation._viewBox="0 0 24 24",IconTriangleExclamation=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.Y$)("gds-icon-triangle-exclamation")],IconTriangleExclamation)},"./dist/libs/core/src/shared-styles/form-control-host.style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>form_control_host_style_default});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var form_control_host_style_default=__webpack_require__("./node_modules/lit/index.js").AH`
  * {
    box-sizing: border-box;
  }

  :host {
    display: flex;
    flex-direction: column;
    width: 100%;
    contain: layout;
    isolation: isolate;
    gap: var(--gds-sys-space-xs);
  }

  :host([size='small']) {
    gap: var(--gds-sys-space-2xs);
  }

  :host([size='small']) .native-control {
    font: var(--gds-sys-text-detail-regular-s);
  }

  :host([disabled]) {
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  .native-control {
    font: var(--gds-sys-text-detail-regular-m);
    align-items: center;
    align-self: center;
    appearance: none;
    background-color: transparent;
    border: 0;
    font-family: inherit;
    margin: unset;
    outline: none;
    overflow: hidden;
    padding: unset;
    width: 100%;
    color: currentColor;
    text-align: left;
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    line-height: 18px;
    width: var(--gds-sys-space-m);
  }

  :host([size='small']) slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-m);
    max-width: var(--gds-sys-space-m);
    display: flex;
  }

  slot[name='lead']::slotted(*) {
    min-width: var(--gds-sys-space-l);
    display: flex;
  }
`}}]);
//# sourceMappingURL=3493.a64b799e.iframe.bundle.js.map
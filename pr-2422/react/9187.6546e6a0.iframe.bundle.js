"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[9187],{"./dist/libs/core/src/components/badge/badge.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{K:()=>GdsBadge});var _t,badge_component_t,_t2,_t3,_t4,_GdsBadge_instances,handleSlotChange_fn,renderLeadSlot_fn,renderMainSlot_fn,renderTrailSlot_fn,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),flex_component=__webpack_require__("./dist/libs/core/src/components/flex/flex.component.js"),badge_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
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
`)),badge_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsBadge=function(_withSizeXProps){function GdsBadge(){var _this;return(0,classCallCheck.A)(this,GdsBadge),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsBadge,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsBadge_instances),_this.variant="information",_this.size="default",_this.notification=!1,_this.rounded=!1,_this.mainSlotOccupied=!1,_this.leadSlotOccupied=!1,_this}return(0,inherits.A)(GdsBadge,_withSizeXProps),(0,createClass.A)(GdsBadge,[{key:"render",value:function render(){var background,color,_this2=this;if(this.notification)background="negative-01",color="inversed";else switch(this.variant){case"information":default:background="information-03",color="information-01";break;case"notice":background="notice-03",color="notice-01";break;case"positive":background="positive-03",color="positive-03";break;case"warning":background="warning-03",color="warning-01";break;case"negative":background="negative-03",color="negative-01";break;case"disabled":background="disabled-03",color="disabled-01"}var paddings,sizes,padding=(paddings={notification:{occupied:"3xs xs",default:"3xs 2xs"},small:{occupied:"3xs 2xs 3xs xs",default:"3xs 2xs"},default:{occupied:"3xs xs 3xs 2xs",default:"3xs xs"}},_this2.notification?paddings.notification[_this2.mainSlotOccupied?"occupied":"default"]:paddings["small"===_this2.size?"small":"default"][_this2.leadSlotOccupied?"occupied":"default"]),blockSize=(sizes={occupied:{small:"m",default:"l"},default:"xs"},_this2.mainSlotOccupied?sizes.occupied["small"===_this2.size||_this2.notification?"small":"default"]:sizes.default),inlineSize=function(){var sizes={notification:{occupied:"l",default:"0"},default:"l"};return _this2.notification?sizes.notification[_this2.mainSlotOccupied?"occupied":"default"]:sizes.default}();return(0,custom_element_scoping.qy)(badge_component_t||(badge_component_t=badge_component_`<gds-flex
      level="3"
      background=${0}
      color=${0}
      gap="${0}"
      align-items="center"
      justify-content="${0}"
      padding="${0}"
      min-height="${0}"
      border-radius="${0}"
      width="100%"
      min-width="${0}"
      font="${0}"
    >
      ${0} ${0}
      ${0}
    </gds-flex>`),background,color,this.notification?"":"2xs",this.notification?"center":"flex-start",padding,blockSize,this.notification||this.rounded?"max":"2xs",inlineSize,"small"===this.size||this.notification?"detail-book-xs":"detail-book-s",(0,chunk_QU3DSPNU.jq)(this,_GdsBadge_instances,renderLeadSlot_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsBadge_instances,renderMainSlot_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsBadge_instances,renderTrailSlot_fn).call(this))}}])}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(gds_element.j))));_GdsBadge_instances=new WeakSet,handleSlotChange_fn=function handleSlotChange_fn(event,stateProperty){var assignedNodes=event.target.assignedNodes({flatten:!0});this[stateProperty]=assignedNodes.length>0&&assignedNodes.some((function(node){var _node$textContent;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_node$textContent=node.textContent)?void 0:_node$textContent.trim())}))},renderLeadSlot_fn=function renderLeadSlot_fn(){var _this3=this;if("small"!==this.size||!this.notification)return(0,custom_element_scoping.qy)(_t2||(_t2=badge_component_`<slot
        name="lead"
        @slotchange=${0}
      ></slot>`),(function(e){return(0,chunk_QU3DSPNU.jq)(_this3,_GdsBadge_instances,handleSlotChange_fn).call(_this3,e,"leadSlotOccupied")}))},renderMainSlot_fn=function renderMainSlot_fn(){var _this4=this;return(0,custom_element_scoping.qy)(_t3||(_t3=badge_component_`<slot
      @slotchange=${0}
    ></slot>`),(function(e){return(0,chunk_QU3DSPNU.jq)(_this4,_GdsBadge_instances,handleSlotChange_fn).call(_this4,e,"mainSlotOccupied")}))},renderTrailSlot_fn=function renderTrailSlot_fn(){return(0,custom_element_scoping.qy)(_t4||(_t4=badge_component_`<slot name="trail"></slot>`))},GdsBadge.styles=[tokens_style.LU,badge_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsBadge.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:String})],GdsBadge.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"notification",type:Boolean,reflect:!0})],GdsBadge.prototype,"notification",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"rounded",type:Boolean,reflect:!0})],GdsBadge.prototype,"rounded",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsBadge.prototype,"mainSlotOccupied",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsBadge.prototype,"leadSlotOccupied",2),GdsBadge=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-badge",{dependsOn:[flex_component.o]})],GdsBadge)},"./dist/libs/core/src/components/card/card.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>GdsCard});var _t,_t2,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit/index.js"),_tokens_style_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/libs/core/src/tokens.style.js"),_utils_decorators_style_expression_property_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./dist/libs/core/src/utils/decorators/style-expression-property.js"),_utils_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_div_div_component_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/libs/core/src/components/div/div.component.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsCard=function(_GdsDiv){function GdsCard(){var _this;return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,GdsCard),(_this=function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,GdsCard)).variant="primary",_this.padding="m;m{l}",_this["border-radius"]="s",_this.gap="m;m{l}",_this}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(GdsCard,_GdsDiv),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(GdsCard,[{key:"render",value:function render(){return(0,_utils_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_7__.qy)(_t||(_t=_`<slot></slot>`))}}])}(_div_div_component_js__WEBPACK_IMPORTED_MODULE_8__.o);GdsCard.styles=[_tokens_style_js__WEBPACK_IMPORTED_MODULE_9__.LU,(0,lit__WEBPACK_IMPORTED_MODULE_3__.AH)(_t2||(_t2=_`
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
    `))],(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_utils_decorators_style_expression_property_js__WEBPACK_IMPORTED_MODULE_10__.F)({styleTemplate:function styleTemplate(_prop,variant){var border,background,color;switch(variant[0]){case"primary":default:border="transparent",background="var(--gds-sys-color-l".concat(this.level,"-neutral-01)"),color="var(--gds-sys-color-content-neutral-01)";break;case"secondary":border="var(--gds-sys-color-border-subtle-01)",background="var(--gds-sys-color-l".concat(this.level,"-neutral-02)"),color="var(--gds-sys-color-content-neutral-01)";break;case"brand-01":border="transparent",background="var(--gds-sys-color-l".concat(this.level,"-brand-01)"),color="var(--gds-sys-color-content-inversed)";break;case"brand-02":border="transparent",background="var(--gds-sys-color-l".concat(this.level,"-brand-02)"),color="var(--gds-sys-color-content-brand-02)";break;case"positive":case"negative":case"warning":case"information":case"notice":border="var(--gds-sys-color-border-".concat(variant[0],"-02)"),background="var(--gds-sys-color-l".concat(this.level,"-").concat(variant[0],"-01)"),color="var(--gds-sys-color-content-".concat(variant[0],"-01)")}return"\n      --_border-color: ".concat(border,";\n      --_background-color: ").concat(background,";\n      --_color: ").concat(color,";\n      ")}})],GdsCard.prototype,"variant",2),GdsCard=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_utils_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-card")],GdsCard)},"./dist/libs/core/src/components/div/div.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>GdsDiv});var _t,div_component_t,slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),style_expression_property=__webpack_require__("./dist/libs/core/src/utils/decorators/style-expression-property.js"),style_expression_helpers=__webpack_require__("./dist/libs/core/src/utils/helpers/style-expression-helpers.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),div_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
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
`)),div_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsDiv=function(_withSizeXProps){function GdsDiv(){var _this;return(0,classCallCheck.A)(this,GdsDiv),(_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsDiv,arguments)).level="2",_this}return(0,inherits.A)(GdsDiv,_withSizeXProps),(0,createClass.A)(GdsDiv,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(div_component_t||(div_component_t=div_component_`<slot></slot>`))}}])}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.vi)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.Md)((0,declarative_layout_mixins.lt)((0,declarative_layout_mixins.qC)(gds_element.j)))))));GdsDiv.styles=[tokens_style.LU,div_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"display",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsDiv.prototype,"level",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)((0,style_expression_helpers.T$)("content"))],GdsDiv.prototype,"color",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)((0,style_expression_helpers.T$)("background"))],GdsDiv.prototype,"background",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({styleTemplate:function styleTemplate(_prop,values){var _values=(0,slicedToArray.A)(values,3),size=_values[0],_values$=_values[1],style=void 0===_values$?this["border-style"]||"solid":_values$,_values$2=_values[2],color=void 0===_values$2?this["border-color"]||"subtle-01":_values$2,sizeCss="var(--gds-sys-space-".concat(size,")"),colorCss=(0,style_expression_helpers.ol)(color,"border",this.level);return"border: ".concat(sizeCss," ").concat(style," ").concat(colorCss,";")}})],GdsDiv.prototype,"border",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)((0,style_expression_helpers.T$)("border"))],GdsDiv.prototype,"border-color",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(style_expression_helpers.MF)],GdsDiv.prototype,"border-width",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"border-style",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(style_expression_helpers.SE)],GdsDiv.prototype,"border-radius",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return"var(--gds-sys-shadow-".concat(v,"-01), var(--gds-sys-shadow-").concat(v,"-02)")}})],GdsDiv.prototype,"box-shadow",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"opacity",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"overflow",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"box-sizing",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"z-index",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({styleTemplate:function styleTemplate(_prop,values){var size=values[0];return"font: var(--gds-sys-text-".concat(size,");")}})],GdsDiv.prototype,"font",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({valueTemplate:function valueTemplate(v){return"var(--gds-sys-text-weight-".concat(v,")")}})],GdsDiv.prototype,"font-weight",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"text-align",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"text-wrap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"overflow-wrap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"white-space",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)(Object.assign({},style_expression_helpers.MF,{styleTemplate:function styleTemplate(_prop,values){var colGap=values[0],rowGap=values[1]||colGap;return"gap: ".concat(colGap," ").concat(rowGap,";")},cacheOverrideKey:"flex"}))],GdsDiv.prototype,"gap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"align-items",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"align-content",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"justify-content",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"justify-items",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"flex-direction",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"flex-wrap",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"place-items",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)()],GdsDiv.prototype,"place-content",2),GdsDiv=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-div")],GdsDiv)},"./dist/libs/core/src/components/dropdown/dropdown.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{E:()=>GdsDropdown});var _t,listbox_component_t,_slotRef,_handleSelect,asyncToGenerator=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js"),classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),regenerator=__webpack_require__("./node_modules/@babel/runtime/regenerator/index.js"),regenerator_default=__webpack_require__.n(regenerator),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),unsafe_html=__webpack_require__("./node_modules/lit/directives/unsafe-html.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),floating_ui_dom=__webpack_require__("./node_modules/@floating-ui/dom/dist/floating-ui.dom.mjs"),field_base_component=__webpack_require__("./dist/libs/core/src/primitives/field-base/field-base.component.js"),form_control_footer_component=__webpack_require__("./dist/libs/core/src/primitives/form-control-footer/form-control-footer.component.js"),form_control_header_component=__webpack_require__("./dist/libs/core/src/primitives/form-control-header/form-control-header.component.js"),ref=__webpack_require__("./node_modules/lit/directives/ref.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),listbox_kb_nav_controller=__webpack_require__("./dist/libs/core/src/utils/controllers/listbox-kb-nav-controller.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),unwrap_slots=__webpack_require__("./dist/libs/core/src/utils/helpers/unwrap-slots.js"),lit=__webpack_require__("./node_modules/lit/index.js"),listbox_styles_default=(0,lit.AH)(_t||(_t=(function _(t){return t})`
  @layer base, reset, transitional-styles;
  @layer base {
    :host {
      display: flex;
      flex-direction: column;
      overflow: auto;
      overscroll-behavior: contain;
    }
  }
`)),option_component=__webpack_require__("./dist/libs/core/src/primitives/listbox/option.component.js"),listbox_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsListbox=function(_GdsElement){function GdsListbox(){var _this;return(0,classCallCheck.A)(this,GdsListbox),(_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsListbox)).multiple=!1,_this.compareWith=function(a,b){return a===b},(0,chunk_QU3DSPNU.VK)(_this,_slotRef,(0,ref._)()),(0,chunk_QU3DSPNU.VK)(_this,_handleSelect,(function(e){var option=e.target;_this.multiple?option.selected=!option.selected:(option.selected=!0,Array.from(_this.options).forEach((function(el){el!==option&&(el.selected=!1)}))),_this.ariaActiveDescendantElement=option,_this.dispatchCustomEvent("change",{bubbles:!1,composed:!1})})),new listbox_kb_nav_controller.y(_this),_this}return(0,inherits.A)(GdsListbox,_GdsElement),(0,createClass.A)(GdsListbox,[{key:"navigableItems",get:function get(){return this.visibleOptionElements}},{key:"options",get:function get(){return(0,chunk_QU3DSPNU.S7)(this,_slotRef).value&&(0,unwrap_slots.o)((0,chunk_QU3DSPNU.S7)(this,_slotRef).value).assignedElements().filter((function(o){return!o.hasAttribute("isplaceholder")&&"gds-option"===o.gdsElementName}))||[]}},{key:"visibleOptionElements",get:function get(){return this.options.filter((function(el){return!el.hidden}))}},{key:"visibleSelectedOptionElements",get:function get(){return this.options.filter((function(el){return el.selected&&!el.hidden}))}},{key:"selection",get:function get(){return this.options.filter((function(el){return el.selected}))},set:function set(values){var _this2=this;this.options.forEach((function(el){el.selected=values.some((function(v){return _this2.compareWith(v,el.value)}))}))}},{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsListbox,"connectedCallback",this,3)([]),this.setAttribute("role","listbox"),transitional_styles.n.instance.apply(this,"gds-listbox"),this.addEventListener("gds-select",(0,chunk_QU3DSPNU.S7)(this,_handleSelect))}},{key:"focus",value:function focus(){var _ref;null==(_ref=this.visibleSelectedOptionElements[0]||this.visibleOptionElements[0])||_ref.focus()}},{key:"render",value:function render(){return(0,custom_element_scoping.qy)(listbox_component_t||(listbox_component_t=listbox_component_`<slot ${0}></slot>`),(0,ref.K)((0,chunk_QU3DSPNU.S7)(this,_slotRef)))}},{key:"_rerenderOptions",value:function _rerenderOptions(){this.options.forEach((function(el){el.requestUpdate()}))}}])}(gds_element.j);_slotRef=new WeakMap,_handleSelect=new WeakMap,GdsListbox.styles=listbox_styles_default,(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0,attribute:"aria-multiselectable",converter:{fromAttribute:Boolean,toAttribute:function toAttribute(value){return value.toString()}}})],GdsListbox.prototype,"multiple",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsListbox.prototype,"compareWith",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("multiple")],GdsListbox.prototype,"_rerenderOptions",1),GdsListbox=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-listbox",{dependsOn:[option_component.Y]})],GdsListbox);var dropdown_styles_t,dropdown_component_t,_t2,_t3,_t4,_t5,_t6,_t7,_t8,_t9,_t10,_optionElements,_GdsDropdown_instances,shouldShowFooter_fn,_renderCombobox,_renderTriggerButton,_calcMaxHeight,_dispatchUISateEvent,_handlePopoverStateChange,_handleClearButton,_handleSearchFieldInput,_handleSearchFieldKeyDown,_handleListboxKeyDown,_handleOptionFocusChange,handleSelectionChange_fn,_dispatchInputEvent,_dispatchChangeEvent,registerAutoCloseListener_fn,unregisterAutoCloseListener_fn,_blurCloseListener,_tabCloseListener,form_control_host_style=__webpack_require__("./dist/libs/core/src/shared-styles/form-control-host.style.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),observe_light_dom=__webpack_require__("./dist/libs/core/src/utils/decorators/observe-light-dom.js"),form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js"),checkmark_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/checkmark.component.js"),chevron_bottom_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/chevron-bottom.component.js"),cross_large_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/cross-large.component.js"),popover_component=__webpack_require__("./dist/libs/core/src/components/popover/popover.component.js"),dropdown_styles_default=(0,lit.AH)(dropdown_styles_t||(dropdown_styles_t=(function _(t){return t})`
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
      border-radius: var(--gds-sys-radius-xs);
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
`)),dropdown_component_=function _(t){return t};function dropdown_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(dropdown_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsDropdown=function(_GdsFormControlElemen){function GdsDropdown(){var _this;return(0,classCallCheck.A)(this,GdsDropdown),_this=function dropdown_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,dropdown_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsDropdown,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsDropdown_instances),_this.supportingText="",_this.open=!1,_this.searchable=!1,_this.multiple=!1,_this.clearable=!1,_this.combobox=!1,_this.compareWith=function(a,b){return a===b},_this.searchFilter=function(q,o){return o.innerHTML.toLowerCase().includes(q.toLowerCase())},_this.syncPopoverWidth=!1,_this.maxHeight=500,_this.size="medium",_this.hideLabel=!1,_this.plain=!1,_this.disableMobileStyles=!1,_this.showExtendedSupportingText=!1,(0,chunk_QU3DSPNU.VK)(_this,_optionElements),(0,chunk_QU3DSPNU.VK)(_this,_renderCombobox,(function(){var _this$placeholder;return(0,custom_element_scoping.qy)(dropdown_component_t||(dropdown_component_t=dropdown_component_`
      <input
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${0}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        placeholder="${0}"
        name="trigger"
        aria-label="${0} ${0}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${0}"
        aria-required="${0}"
        aria-disabled="${0}"
        .value=${0}
        @click=${0}
        @input=${0}
        @keydown=${0}
      />
    `),_this.open,null==(_this$placeholder=_this.placeholder)?void 0:_this$placeholder.innerHTML,_this.label,_this.displayValue,_this.invalid,_this.required,_this.disabled,_this.value,(function(e){e.stopImmediatePropagation()}),(function(e){_this.value=e.target.value,(0,chunk_QU3DSPNU.S7)(_this,_dispatchInputEvent).call(_this),(0,chunk_QU3DSPNU.S7)(_this,_handleSearchFieldInput).call(_this,e),(0,chunk_QU3DSPNU.S7)(_this,_dispatchUISateEvent).call(_this,!0,"show")&&(_this.open=!0)}),(function(e){"ArrowDown"===e.key&&(e.preventDefault(),(0,chunk_QU3DSPNU.S7)(_this,_dispatchUISateEvent).call(_this,!0,"show")&&(_this.open=!0),_this._elListbox.then((function(listbox){return listbox.focus()}))),"Enter"===e.key&&(0,chunk_QU3DSPNU.S7)(_this,_dispatchChangeEvent).call(_this)}))})),(0,chunk_QU3DSPNU.VK)(_this,_renderTriggerButton,(function(){return(0,custom_element_scoping.qy)(_t2||(_t2=dropdown_component_`
      <button
        id="trigger"
        role="combobox"
        class="native-control"
        aria-expanded="${0}"
        aria-owns="listbox"
        aria-haspopup="listbox"
        aria-controls="listbox"
        name="trigger"
        aria-label="${0} ${0}"
        aria-describedby="supporting-text extended-supporting-text sub-label message"
        aria-invalid="${0}"
        aria-required="${0}"
        aria-disabled="${0}"
      >
        <slot name="trigger">
          <span>${0}</span>
        </slot>
      </button>
    `),_this.open,_this.label,_this.displayValue,_this.invalid,_this.required,_this.disabled,(0,unsafe_html._)(_this.displayValue))})),(0,chunk_QU3DSPNU.VK)(_this,_calcMaxHeight,(function(trigger){if(_this.combobox){var triggerRect=trigger.getBoundingClientRect(),bottomSpace=window.innerHeight-triggerRect.bottom,topSpace=triggerRect.top,height2=Math.min(topSpace,_this.maxHeight);return bottomSpace>topSpace&&(height2=Math.min(bottomSpace,_this.maxHeight)),"".concat(height2-16,"px")}var height=Math.min(window.innerHeight,_this.maxHeight);return"".concat(height-16,"px")})),(0,chunk_QU3DSPNU.VK)(_this,_dispatchUISateEvent,(function(toState,reason){return _this.dispatchCustomEvent("gds-ui-state",{detail:{reason,open:toState},bubbles:!1,composed:!1})})),(0,chunk_QU3DSPNU.VK)(_this,_handlePopoverStateChange,(function(e){(0,chunk_QU3DSPNU.S7)(_this,_dispatchUISateEvent).call(_this,e.detail.open,e.detail.reason)&&(_this.open=e.detail.open)})),(0,chunk_QU3DSPNU.VK)(_this,_handleClearButton,(function(e){e.preventDefault(),e.stopPropagation(),_this.value=void 0})),(0,chunk_QU3DSPNU.VK)(_this,_handleSearchFieldInput,(function(e){if(e.currentTarget&&(e.stopPropagation(),!!_this.dispatchCustomEvent("gds-filter-input",{detail:{value:e.currentTarget.value}}))){var input=e.currentTarget;if(_this.options.forEach((function(o){return o.hidden=!1})),input.value)_this.options.filter((function(o){return!_this.searchFilter(input.value,o)})).forEach((function(o){return o.hidden=!0}))}})),(0,chunk_QU3DSPNU.VK)(_this,_handleSearchFieldKeyDown,(function(e){var _this$_elListbox;null==(_this$_elListbox=_this._elListbox)||_this$_elListbox.then((function(listbox){if("ArrowDown"===e.key||"Tab"===e.key)return e.preventDefault(),void listbox.focus()}))})),(0,chunk_QU3DSPNU.VK)(_this,_handleListboxKeyDown,(function(e){var _this$_elSearchInput;if("Tab"===e.key&&_this.searchable)return e.preventDefault(),void(null==(_this$_elSearchInput=_this._elSearchInput)||_this$_elSearchInput.focus())})),(0,chunk_QU3DSPNU.VK)(_this,_handleOptionFocusChange,(function(e){var triggerButton=_this._elTriggerBtn;triggerButton&&(triggerButton.ariaActiveDescendantElement=e.target)})),(0,chunk_QU3DSPNU.VK)(_this,_dispatchInputEvent,(function(){_this.updateComplete.then((function(){return _this.dispatchStandardEvent("input",{bubbles:!0,composed:!0})}))})),(0,chunk_QU3DSPNU.VK)(_this,_dispatchChangeEvent,(function(){_this.updateComplete.then((function(){return _this.dispatchCustomEvent("change",{detail:{value:_this.value},bubbles:!0,composed:!0})}))})),(0,chunk_QU3DSPNU.VK)(_this,_blurCloseListener,(function(e){e instanceof FocusEvent&&e.relatedTarget&&!_this.contains(e.relatedTarget)&&(0,chunk_QU3DSPNU.S7)(_this,_dispatchUISateEvent).call(_this,!1,"close")&&(_this.open=!1)})),(0,chunk_QU3DSPNU.VK)(_this,_tabCloseListener,(function(e){var _this$_elTriggerBtn;"Tab"===e.key&&!_this.searchable&&(0,chunk_QU3DSPNU.S7)(_this,_dispatchUISateEvent).call(_this,!1,"close")&&(e.preventDefault(),_this.open=!1,null==(_this$_elTriggerBtn=_this._elTriggerBtn)||_this$_elTriggerBtn.focus())})),_this}return(0,inherits.A)(GdsDropdown,_GdsFormControlElemen),(0,createClass.A)(GdsDropdown,[{key:"type",get:function get(){return"gds-dropdown"}},{key:"options",get:function get(){return(0,chunk_QU3DSPNU.S7)(this,_optionElements)?Array.from((0,chunk_QU3DSPNU.S7)(this,_optionElements)).filter((function(o){return!o.hasAttribute("isplaceholder")})):[]}},{key:"placeholder",get:function get(){if((0,chunk_QU3DSPNU.S7)(this,_optionElements))return Array.from((0,chunk_QU3DSPNU.S7)(this,_optionElements)).find((function(o){return o.hasAttribute("isplaceholder")}))}},{key:"displayValue",get:function get(){var _this$placeholder2,displayValue,_this$options$find,_this2=this;Array.isArray(this.value)?displayValue=this.value.slice(0,5).reduce((function(acc,cur){var _this2$options$find;return acc+(null==(_this2$options$find=_this2.options.find((function(v){return v.value===cur})))?void 0:_this2$options$find.innerText)+", "}),"").slice(0,-2).replace(/(.{25})(.*)/,"$1..."):displayValue=null==(_this$options$find=this.options.find((function(v){return v.selected})))?void 0:_this$options$find.innerText;return displayValue||(null==(_this$placeholder2=this.placeholder)?void 0:_this$placeholder2.innerText)||""}},{key:"focus",value:function focus(){this._getValidityAnchor().focus()}},{key:"test_getFieldElement",value:function test_getFieldElement(){var _this$shadowRoot;return null==(_this$shadowRoot=this.shadowRoot)?void 0:_this$shadowRoot.querySelector("#field")}},{key:"connectedCallback",value:function connectedCallback(){var _this3=this;!function dropdown_component_superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsDropdown,"connectedCallback",this,3)([]),this.updateComplete.then((function(){_this3._handleLightDOMChange(),_this3._handleValueChange(),_this3._handleOpenChange()}))}},{key:"render",value:function render(){var _this4=this;return(0,custom_element_scoping.qy)(_t3||(_t3=dropdown_component_`
      ${0}
      <gds-popover
        .autofocus=${0}
        .label=${0}
        .open=${0}
        .calcMaxWidth=${0}
        .calcMaxHeight=${0}
        .disableMobileStyles=${0}
        .nonmodal=${0}
        .floatingUIMiddleware=${0}
        @gds-ui-state=${0}
      >
        <gds-field-base
          .size=${0}
          .disabled=${0}
          .invalid=${0}
          slot="trigger"
          id="field"
        >
          <slot name="lead" slot="lead"></slot>
          ${0}
          ${0}
          ${0}
          ${0}
          <gds-icon-chevron-bottom slot="trail"></gds-icon-chevron-bottom>
        </gds-field-base>

        ${0}
        <gds-listbox
          id="listbox"
          .multiple="${0}"
          .compareWith="${0}"
          @change="${0}"
          @gds-focus="${0}"
          @keydown=${0}
        >
          <slot></slot>
        </gds-listbox>
      </gds-popover>

      ${0}
    `),(0,when.z)(!this.plain&&!this.hideLabel,(function(){return(0,custom_element_scoping.qy)(_t4||(_t4=dropdown_component_`
          <gds-form-control-header
            class="size-${0}"
            .showExtendedSupportingText="${0}"
          >
            <label id="label" for="trigger" slot="label">${0}</label>
            ${0}
            <slot
              id="extended-supporting-text"
              name="extended-supporting-text"
              slot="extended-supporting-text"
            ></slot>
            <!-- @deprecated: use 'supporting-text' slot instead. Remove in 2.0 release. -->
            <slot id="sub-label" name="sub-label" slot="supporting-text"></slot>
          </gds-form-control-header>
        `),_this4.size,_this4.showExtendedSupportingText,_this4.label,(0,when.z)(_this4.supportingText.length>0,(function(){return(0,custom_element_scoping.qy)(_t5||(_t5=dropdown_component_`<span slot="supporting-text" id="supporting-text">
                  ${0}
                </span>`),_this4.supportingText)})))})),!this.combobox,this.label,this.open,(function(trigger){return _this4.syncPopoverWidth?"".concat(trigger.offsetWidth,"px"):"auto"}),(0,chunk_QU3DSPNU.S7)(this,_calcMaxHeight),this.disableMobileStyles||this.combobox,this.combobox,this.combobox?[(0,floating_ui_dom.cY)(8),(0,floating_ui_dom.UU)()]:popover_component.E.DefaultMiddleware,(0,chunk_QU3DSPNU.S7)(this,_handlePopoverStateChange),this.size,this.disabled,this.invalid,(0,when.z)(this.value&&this.multiple&&this.value.length>0,(function(){return(0,custom_element_scoping.qy)(_t6||(_t6=dropdown_component_`<gds-badge
                rounded
                size=${0}
                slot="lead"
                aria-label=${0}
              >
                ${0}</gds-badge
              >`),"small"===_this4.size?"small":"default",(0,lit_localize.ab)((0,lit_localize.gx)(_t7||(_t7=dropdown_component_`${0} options selected`),_this4.value.length)),_this4.value.length)})),(0,when.z)(this.clearable&&this.value&&!this.disabled,(function(){return(0,custom_element_scoping.qy)(_t8||(_t8=dropdown_component_`<gds-button
                id="clear-btn"
                rank="tertiary"
                size=${0}
                label="${0}"
                @click=${0}
                slot="trail"
              >
                <gds-icon-cross-large></gds-icon-cross-large>
              </gds-button>`),"small"===_this4.size?"xs":"small",(0,lit_localize.ab)("Clear selection"),(0,chunk_QU3DSPNU.S7)(_this4,_handleClearButton))})),(0,when.z)(this.combobox&&!this.multiple,(function(){return(0,chunk_QU3DSPNU.S7)(_this4,_renderCombobox).call(_this4)})),(0,when.z)(!this.combobox||this.multiple,(function(){return(0,chunk_QU3DSPNU.S7)(_this4,_renderTriggerButton).call(_this4)})),(0,when.z)(this.searchable,(function(){return(0,custom_element_scoping.qy)(_t9||(_t9=dropdown_component_`<input
              id="searchinput"
              type="text"
              aria-label="${0}"
              placeholder="${0}"
              @keydown=${0}
              @input=${0}
            />`),(0,lit_localize.ab)("Filter available options"),(0,lit_localize.ab)("Search"),(0,chunk_QU3DSPNU.S7)(_this4,_handleSearchFieldKeyDown),(0,chunk_QU3DSPNU.S7)(_this4,_handleSearchFieldInput))})),(0,if_defined.J)(this.multiple),this.compareWith,(0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,handleSelectionChange_fn),(0,chunk_QU3DSPNU.S7)(this,_handleOptionFocusChange),(0,chunk_QU3DSPNU.S7)(this,_handleListboxKeyDown),(0,when.z)((0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,shouldShowFooter_fn).call(this),(function(){return(0,custom_element_scoping.qy)(_t10||(_t10=dropdown_component_`
          <gds-form-control-footer
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
          </gds-form-control-footer>
        `),_this4.size,_this4.invalid?_this4.errorMessage:void 0,"",_this4.errorMessage)})))}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this._elTriggerBtn}},{key:"_handleLightDOMChange",value:function _handleLightDOMChange(){var _this$options$,_this5=this;if(this.requestUpdate(),(0,chunk_QU3DSPNU.OV)(this,_optionElements,this.querySelectorAll("[gds-element=gds-option]")),this.multiple)this._handleValueChange();else if(void 0===this.value)this.placeholder?this.value=this.placeholder.value:this.value=null==(_this$options$=this.options[0])?void 0:_this$options$.value;else if(!this.combobox&&!this.placeholder&&void 0===this.options.find((function(o){return _this5.compareWith(o.value,_this5.value)}))){var _this$options$2;this.options[0]&&(this.options[0].selected=!0),this.value=null==(_this$options$2=this.options[0])?void 0:_this$options$2.value}}},{key:"_handleValueChange",value:function _handleValueChange(){var _this6=this;this._elListbox.then((function(listbox){listbox&&(Array.isArray(_this6.value)?listbox.selection=_this6.value:listbox.selection=[_this6.value])}))}},{key:"_handleOpenChange",value:function _handleOpenChange(){var _this7=this,open=this.open;this.options.forEach((function(o){return o.hidden=!open})),open?(0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,registerAutoCloseListener_fn).call(this):((0,chunk_QU3DSPNU.jq)(this,_GdsDropdown_instances,unregisterAutoCloseListener_fn).call(this),this._elSearchInput&&(this._elSearchInput.value=""));var selectedOption=this.options.find((function(option){return option.selected}));requestAnimationFrame((0,asyncToGenerator.A)(regenerator_default().mark((function _callee(){return regenerator_default().wrap((function _callee$(_context){for(;;)switch(_context.prev=_context.next){case 0:return _context.next=2,_this7.updateComplete;case 2:null==selectedOption||selectedOption.scrollIntoView({block:"center"});case 3:case"end":return _context.stop()}}),_callee)}))))}}])}(form_control.S);_optionElements=new WeakMap,_GdsDropdown_instances=new WeakSet,shouldShowFooter_fn=function shouldShowFooter_fn(){return!this.plain},_renderCombobox=new WeakMap,_renderTriggerButton=new WeakMap,_calcMaxHeight=new WeakMap,_dispatchUISateEvent=new WeakMap,_handlePopoverStateChange=new WeakMap,_handleClearButton=new WeakMap,_handleSearchFieldInput=new WeakMap,_handleSearchFieldKeyDown=new WeakMap,_handleListboxKeyDown=new WeakMap,_handleOptionFocusChange=new WeakMap,handleSelectionChange_fn=function handleSelectionChange_fn(){var _this8=this;this._elListbox.then((function(listbox){var _listbox$selection$;_this8.multiple?_this8.value=listbox.selection.map((function(s){return s.value})):(_this8.value=null==(_listbox$selection$=listbox.selection[0])?void 0:_listbox$selection$.value,(0,chunk_QU3DSPNU.S7)(_this8,_dispatchUISateEvent).call(_this8,!1,"close")&&(_this8.open=!1,setTimeout((function(){var _this8$_elTriggerBtn;return null==(_this8$_elTriggerBtn=_this8._elTriggerBtn)?void 0:_this8$_elTriggerBtn.focus()}),0)));(0,chunk_QU3DSPNU.S7)(_this8,_dispatchInputEvent).call(_this8),(0,chunk_QU3DSPNU.S7)(_this8,_dispatchChangeEvent).call(_this8)}))},_dispatchInputEvent=new WeakMap,_dispatchChangeEvent=new WeakMap,registerAutoCloseListener_fn=function registerAutoCloseListener_fn(){this.addEventListener("blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.addEventListener("gds-blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.addEventListener("keydown",(0,chunk_QU3DSPNU.S7)(this,_tabCloseListener))},unregisterAutoCloseListener_fn=function unregisterAutoCloseListener_fn(){this.removeEventListener("blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.removeEventListener("gds-blur",(0,chunk_QU3DSPNU.S7)(this,_blurCloseListener)),this.removeEventListener("keydown",(0,chunk_QU3DSPNU.S7)(this,_tabCloseListener))},_blurCloseListener=new WeakMap,_tabCloseListener=new WeakMap,GdsDropdown.styles=[tokens_style.LU,form_control_host_style.A,dropdown_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"supporting-text"})],GdsDropdown.prototype,"supportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"open",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"searchable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"multiple",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"clearable",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsDropdown.prototype,"combobox",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsDropdown.prototype,"compareWith",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsDropdown.prototype,"searchFilter",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"sync-popover-width"})],GdsDropdown.prototype,"syncPopoverWidth",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number,attribute:"max-height"})],GdsDropdown.prototype,"maxHeight",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],GdsDropdown.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,attribute:"hide-label"})],GdsDropdown.prototype,"hideLabel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsDropdown.prototype,"plain",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsDropdown.prototype,"disableMobileStyles",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"show-extended-supporting-text",type:Boolean,reflect:!0})],GdsDropdown.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#trigger")],GdsDropdown.prototype,"_elTriggerBtn",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.nJ)("#listbox")],GdsDropdown.prototype,"_elListbox",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#searchinput")],GdsDropdown.prototype,"_elSearchInput",2),(0,chunk_QU3DSPNU.Cc)([(0,observe_light_dom.L)({attributes:!0,childList:!0,subtree:!0,characterData:!0})],GdsDropdown.prototype,"_handleLightDOMChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value")],GdsDropdown.prototype,"_handleValueChange",1),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("open")],GdsDropdown.prototype,"_handleOpenChange",1),GdsDropdown=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-dropdown",{dependsOn:[form_control_header_component.$,form_control_footer_component.V,field_base_component.w,GdsListbox,popover_component.E,checkmark_component.V,chevron_bottom_component.o,cross_large_component.z]}),(0,lit_localize.cc)()],GdsDropdown)},"./dist/libs/core/src/components/flex/flex.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>GdsFlex});var _t,flex_component_t,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),div_component=__webpack_require__("./dist/libs/core/src/components/div/div.component.js"),flex_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
  :host {
    display: flex;
    box-sizing: border-box;
    border-style: solid;
    border-width: 0;
    border-color: var(--gds-sys-color-border-subtle-01);
  }
`)),flex_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsFlex=function(_GdsDiv){function GdsFlex(){return(0,classCallCheck.A)(this,GdsFlex),function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFlex,arguments)}return(0,inherits.A)(GdsFlex,_GdsDiv),(0,createClass.A)(GdsFlex,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(flex_component_t||(flex_component_t=flex_component_`<slot></slot>`))}}])}(div_component.o);GdsFlex.styles=[tokens_style.LU,flex_styles_default],GdsFlex=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-flex")],GdsFlex)},"./dist/libs/core/src/components/icon/icons/checkmark.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>IconCheckmark});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconCheckmark=function(_GdsIcon){function IconCheckmark(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconCheckmark),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconCheckmark,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconCheckmark,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconCheckmark)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconCheckmark._regularSVG='<path d="M2.75 15.0938L9 20.25L21.25 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconCheckmark._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M21.7425 2.99442C22.2979 3.40452 22.4156 4.18717 22.0055 4.74251L10.0055 20.9925C9.80427 21.2651 9.501 21.4442 9.16518 21.489C8.82936 21.5338 8.48974 21.4403 8.22411 21.23L2.22411 16.48C1.68284 16.0515 1.59143 15.2654 2.01993 14.7241C2.44844 14.1828 3.2346 14.0914 3.77587 14.5199L8.76235 18.4675L19.9944 3.2574C20.4045 2.70206 21.1872 2.58432 21.7425 2.99442Z" fill="currentColor"/>',IconCheckmark._name="checkmark",IconCheckmark._width=24,IconCheckmark._height=24,IconCheckmark._viewBox="0 0 24 24",IconCheckmark=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-checkmark")],IconCheckmark)},"./dist/libs/core/src/components/icon/icons/chevron-bottom.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>IconChevronBottom});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconChevronBottom=function(_GdsIcon){function IconChevronBottom(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconChevronBottom),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconChevronBottom,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconChevronBottom,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconChevronBottom)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconChevronBottom._regularSVG='<path d="M20 9L12 17L4 9" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>',IconChevronBottom._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M3.46967 8.46967C3.76256 8.17678 4.23744 8.17678 4.53033 8.46967L12 15.9393L19.4697 8.46967C19.7626 8.17678 20.2374 8.17678 20.5303 8.46967C20.8232 8.76256 20.8232 9.23744 20.5303 9.53033L12.5303 17.5303C12.3897 17.671 12.1989 17.75 12 17.75C11.8011 17.75 11.6103 17.671 11.4697 17.5303L3.46967 9.53033C3.17678 9.23744 3.17678 8.76256 3.46967 8.46967Z" fill="currentColor"/>',IconChevronBottom._name="chevron-bottom",IconChevronBottom._width=24,IconChevronBottom._height=24,IconChevronBottom._viewBox="0 0 24 24",IconChevronBottom=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-chevron-bottom")],IconChevronBottom)},"./dist/libs/core/src/components/icon/icons/circle-info.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>IconCircleInfo});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconCircleInfo=function(_GdsIcon){function IconCircleInfo(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconCircleInfo),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconCircleInfo,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconCircleInfo,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconCircleInfo)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconCircleInfo._regularSVG='<path d="M10.75 11H12L12 16.25M21.25 12C21.25 17.1086 17.1086 21.25 12 21.25C6.89137 21.25 2.75 17.1086 2.75 12C2.75 6.89137 6.89137 2.75 12 2.75C17.1086 2.75 21.25 6.89137 21.25 12Z" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/><path d="M12 7.375C12.3452 7.375 12.625 7.65482 12.625 8C12.625 8.34518 12.3452 8.625 12 8.625C11.6548 8.625 11.375 8.34518 11.375 8C11.375 7.65482 11.6548 7.375 12 7.375Z" fill="currentColor" stroke="currentColor" stroke-width="0.25"/>',IconCircleInfo._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2ZM10 11C10 10.5858 10.3358 10.25 10.75 10.25H12C12.4142 10.25 12.75 10.5858 12.75 11L12.75 16.25C12.75 16.6642 12.4142 17 12 17C11.5858 17 11.25 16.6642 11.25 16.25L11.25 11.75H10.75C10.3358 11.75 10 11.4142 10 11ZM12 7.25C11.5858 7.25 11.25 7.58579 11.25 8C11.25 8.41421 11.5858 8.75 12 8.75C12.4142 8.75 12.75 8.41421 12.75 8C12.75 7.58579 12.4142 7.25 12 7.25Z" fill="currentColor"/>',IconCircleInfo._name="circle-info",IconCircleInfo._width=24,IconCircleInfo._height=24,IconCircleInfo._viewBox="0 0 24 24",IconCircleInfo=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-circle-info")],IconCircleInfo)},"./dist/libs/core/src/components/icon/icons/cross-large.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>IconCrossLarge});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconCrossLarge=function(_GdsIcon){function IconCrossLarge(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconCrossLarge),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconCrossLarge,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconCrossLarge,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconCrossLarge)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconCrossLarge._regularSVG='<path d="M4.75 4.75L19.25 19.25M19.25 4.75L4.75 19.25" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>',IconCrossLarge._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M4.11612 4.11612C4.60427 3.62796 5.39573 3.62796 5.88388 4.11612L12 10.2322L18.1161 4.11612C18.6043 3.62796 19.3957 3.62796 19.8839 4.11612C20.372 4.60427 20.372 5.39573 19.8839 5.88388L13.7678 12L19.8839 18.1161C20.372 18.6043 20.372 19.3957 19.8839 19.8839C19.3957 20.372 18.6043 20.372 18.1161 19.8839L12 13.7678L5.88388 19.8839C5.39573 20.372 4.60427 20.372 4.11612 19.8839C3.62796 19.3957 3.62796 18.6043 4.11612 18.1161L10.2322 12L4.11612 5.88388C3.62796 5.39573 3.62796 4.60427 4.11612 4.11612Z" fill="currentColor"/>',IconCrossLarge._name="cross-large",IconCrossLarge._width=24,IconCrossLarge._height=24,IconCrossLarge._viewBox="0 0 24 24",IconCrossLarge=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-cross-large")],IconCrossLarge)},"./dist/libs/core/src/components/icon/icons/triangle-exclamation.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{f:()=>IconTriangleExclamation});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var IconTriangleExclamation=function(_GdsIcon){function IconTriangleExclamation(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,IconTriangleExclamation),function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,IconTriangleExclamation,arguments)}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(IconTriangleExclamation,_GdsIcon),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(IconTriangleExclamation)}(__webpack_require__("./dist/libs/core/src/components/icon/icon.js").M);IconTriangleExclamation._regularSVG='<path d="M12 2.75L12.6457 2.36845C12.5108 2.1401 12.2652 2 12 2C11.7348 2 11.4892 2.1401 11.3543 2.36845L12 2.75ZM2.25 19.25L1.60431 18.8685C1.4673 19.1003 1.46512 19.3878 1.59859 19.6217C1.73207 19.8556 1.9807 20 2.25 20V19.25ZM21.75 19.25V20C22.0193 20 22.2679 19.8556 22.4014 19.6217C22.5349 19.3878 22.5327 19.1003 22.3957 18.8685L21.75 19.25ZM12.75 9.75C12.75 9.33579 12.4142 9 12 9C11.5858 9 11.25 9.33579 11.25 9.75H12.75ZM11.25 13.25C11.25 13.6642 11.5858 14 12 14C12.4142 14 12.75 13.6642 12.75 13.25H11.25ZM11.25 15.75C11.25 16.1642 11.5858 16.5 12 16.5C12.4142 16.5 12.75 16.1642 12.75 15.75H11.25ZM12.75 15.74C12.75 15.3258 12.4142 14.99 12 14.99C11.5858 14.99 11.25 15.3258 11.25 15.74H12.75ZM12 2.75L11.3543 2.36845L1.60431 18.8685L2.25 19.25L2.89569 19.6315L12.6457 3.13155L12 2.75ZM2.25 19.25V20H21.75V19.25V18.5H2.25V19.25ZM21.75 19.25L22.3957 18.8685L12.6457 2.36845L12 2.75L11.3543 3.13155L21.1043 19.6315L21.75 19.25ZM12 9.75H11.25V13.25H12H12.75V9.75H12ZM12.25 15.75H11.5C11.5 15.4739 11.7239 15.25 12 15.25V16V16.75C12.5523 16.75 13 16.3023 13 15.75H12.25ZM12 16V15.25C12.2761 15.25 12.5 15.4739 12.5 15.75H11.75H11C11 16.3023 11.4477 16.75 12 16.75V16ZM11.75 15.75H12.5C12.5 16.0261 12.2761 16.25 12 16.25V15.5V14.75C11.4477 14.75 11 15.1977 11 15.75H11.75ZM12 15.5V16.25C11.7239 16.25 11.5 16.0261 11.5 15.75H12.25H13C13 15.1977 12.5523 14.75 12 14.75V15.5ZM12 15.75H12.75V15.74H12H11.25V15.75H12Z" fill="currentColor"/>',IconTriangleExclamation._solidSVG='<path fill-rule="evenodd" clip-rule="evenodd" d="M12 2C12.2652 2 12.5108 2.1401 12.6457 2.36845L22.3957 18.8685C22.5327 19.1003 22.5349 19.3878 22.4014 19.6217C22.2679 19.8556 22.0193 20 21.75 20H2.25C1.9807 20 1.73207 19.8556 1.59859 19.6217C1.46512 19.3878 1.4673 19.1003 1.60431 18.8685L11.3543 2.36845C11.4892 2.1401 11.7348 2 12 2ZM12 9C12.4142 9 12.75 9.33579 12.75 9.75V13.25C12.75 13.6642 12.4142 14 12 14C11.5858 14 11.25 13.6642 11.25 13.25V9.75C11.25 9.33579 11.5858 9 12 9ZM13 15.75C13 16.3023 12.5523 16.75 12 16.75C11.4477 16.75 11 16.3023 11 15.75C11 15.1977 11.4477 14.75 12 14.75C12.5523 14.75 13 15.1977 13 15.75Z" fill="currentColor"/>',IconTriangleExclamation._name="triangle-exclamation",IconTriangleExclamation._width=24,IconTriangleExclamation._height=24,IconTriangleExclamation._viewBox="0 0 24 24",IconTriangleExclamation=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_2__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_7__.Y$)("gds-icon-triangle-exclamation")],IconTriangleExclamation)},"./dist/libs/core/src/primitives/field-base/field-base.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>GdsFieldBase});var _t,field_base_component_t,_t2,_t3,_t4,_t5,_t6,_handleSlotChange,_GdsFieldBase_instances,renderFieldContents_fn,renderSlotLead_fn,renderSlotMain_fn,renderSlotAction_fn,renderSlotTrail_fn,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),field_base_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
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
`)),field_base_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsFieldBase=function(_GdsElement){function GdsFieldBase(){var _this;return(0,classCallCheck.A)(this,GdsFieldBase),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFieldBase),(0,chunk_QU3DSPNU.VK)(_this,_GdsFieldBase_instances),_this.size="large",_this.multiline=!1,_this.disabled=!1,_this.invalid=!1,_this._leadSlotOccupied=!1,_this._trailSlotOccupied=!1,_this._actionSlotOccupied=!1,(0,chunk_QU3DSPNU.VK)(_this,_handleSlotChange,(function(slotName,event){var assignedNodes=event.target.assignedNodes({flatten:!0}),slotOccupied=assignedNodes.length>0&&assignedNodes.some((function(node){var _node$textContent;return node.nodeType===Node.ELEMENT_NODE||node.nodeType===Node.TEXT_NODE&&""!==(null==(_node$textContent=node.textContent)?void 0:_node$textContent.trim())}));"lead"===slotName?_this._leadSlotOccupied=slotOccupied:"trail"===slotName?_this._trailSlotOccupied=slotOccupied:"action"===slotName&&(_this._actionSlotOccupied=slotOccupied)})),_this}return(0,inherits.A)(GdsFieldBase,_GdsElement),(0,createClass.A)(GdsFieldBase,[{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFieldBase,"connectedCallback",this,3)([]),transitional_styles.n.instance.apply(this,"gds-field-base")}},{key:"render",value:function render(){var _this$invalid,classes={invalid:null!=(_this$invalid=this.invalid)&&_this$invalid,multiline:this.multiline,disabled:this.disabled,"lead-slot-occupied":this._leadSlotOccupied,"trail-slot-occupied":this._trailSlotOccupied,"action-slot-occupied":this._actionSlotOccupied,small:"small"===this.size};return(0,custom_element_scoping.qy)(field_base_component_t||(field_base_component_t=field_base_component_`
      <div class="field ${0}" part="_base">
        ${0}
      </div>
    `),(0,class_map.H)(classes),(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderFieldContents_fn).call(this))}},{key:"_handleDisabledChange",value:function _handleDisabledChange(){this.disabled?this.setAttribute("inert",""):this.removeAttribute("inert")}}])}(gds_element.j);_handleSlotChange=new WeakMap,_GdsFieldBase_instances=new WeakSet,renderFieldContents_fn=function renderFieldContents_fn(){var rightSlotsWrapClasses={right:!0,"as-flex":this.multiline&&(this._trailSlotOccupied||this._actionSlotOccupied)};return(0,custom_element_scoping.qy)(_t2||(_t2=field_base_component_`
      ${0} ${0}
      <div class="${0}">
        ${0} ${0}
      </div>
    `),(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotLead_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotMain_fn).call(this),(0,class_map.H)(rightSlotsWrapClasses),(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotAction_fn).call(this),(0,chunk_QU3DSPNU.jq)(this,_GdsFieldBase_instances,renderSlotTrail_fn).call(this))},renderSlotLead_fn=function renderSlotLead_fn(){var _this2=this;return(0,custom_element_scoping.qy)(_t3||(_t3=field_base_component_` <slot
      name="lead"
      @slotchange=${0}
    ></slot>`),(function(e){return(0,chunk_QU3DSPNU.S7)(_this2,_handleSlotChange).call(_this2,"lead",e)}))},renderSlotMain_fn=function renderSlotMain_fn(){var _this3=this;return(0,custom_element_scoping.qy)(_t4||(_t4=field_base_component_`<div
      class="main-slot-wrap ${0}"
    >
      <slot
        @slotchange=${0}
      ></slot>
    </div>`),(0,class_map.H)({multiline:this.multiline}),(function(e){return(0,chunk_QU3DSPNU.S7)(_this3,_handleSlotChange).call(_this3,"main",e)}))},renderSlotAction_fn=function renderSlotAction_fn(){var _this4=this;return(0,custom_element_scoping.qy)(_t5||(_t5=field_base_component_`
      <slot
        name="action"
        @slotchange=${0}
      ></slot>
    `),(function(e){return(0,chunk_QU3DSPNU.S7)(_this4,_handleSlotChange).call(_this4,"action",e)}))},renderSlotTrail_fn=function renderSlotTrail_fn(){var _this5=this;return(0,custom_element_scoping.qy)(_t6||(_t6=field_base_component_`
      <slot
        name="trail"
        @slotchange=${0}
      ></slot>
    `),(function(e){return(0,chunk_QU3DSPNU.S7)(_this5,_handleSlotChange).call(_this5,"trail",e)}))},GdsFieldBase.styles=[field_base_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFieldBase.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFieldBase.prototype,"multiline",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFieldBase.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFieldBase.prototype,"invalid",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("slot:not([name])")],GdsFieldBase.prototype,"_mainSlotElement",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFieldBase.prototype,"_leadSlotOccupied",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFieldBase.prototype,"_trailSlotOccupied",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFieldBase.prototype,"_actionSlotOccupied",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("disabled")],GdsFieldBase.prototype,"_handleDisabledChange",1),GdsFieldBase=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-field-base"),(0,lit_localize.cc)()],GdsFieldBase)},"./dist/libs/core/src/primitives/form-control-footer/form-control-footer.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{V:()=>GdsFormControlFooter});var _t,form_control_footer_component_t,_t2,_t3,_GdsFormControlFooter_instances,renderRemainingCharsBadge_fn,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),badge_component=__webpack_require__("./dist/libs/core/src/components/badge/badge.component.js"),triangle_exclamation_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/triangle-exclamation.component.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),form_control_footer_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
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
`)),form_control_footer_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsFormControlFooter=function(_GdsElement){function GdsFormControlFooter(){var _this;return(0,classCallCheck.A)(this,GdsFormControlFooter),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormControlFooter,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsFormControlFooter_instances),_this}return(0,inherits.A)(GdsFormControlFooter,_GdsElement),(0,createClass.A)(GdsFormControlFooter,[{key:"_handleVisibilityChange",value:function _handleVisibilityChange(){this.classList.toggle("visually-hidden",!this.errorMessage&&!this.charCounter)}},{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFormControlFooter,"connectedCallback",this,3)([]),this._handleVisibilityChange()}},{key:"render",value:function render(){var _this2=this;return(0,custom_element_scoping.qy)(form_control_footer_component_t||(form_control_footer_component_t=form_control_footer_component_`<div aria-live="polite">
      <div class="error-message">
        <slot name="message"
          >${0}</slot
        >
      </div>
      <div class="char-counter" aria-hidden="true">
        ${0}
      </div>
    </div>`),(0,when.z)(this.errorMessage,(function(){return(0,custom_element_scoping.qy)(_t2||(_t2=form_control_footer_component_`
              <gds-icon-triangle-exclamation
                solid
              ></gds-icon-triangle-exclamation>
              ${0}
            `),_this2.errorMessage)})),(0,when.z)(Number.isInteger(this.charCounter),(function(){return(0,chunk_QU3DSPNU.jq)(_this2,_GdsFormControlFooter_instances,renderRemainingCharsBadge_fn).call(_this2,_this2.charCounter)})))}}])}(gds_element.j);_GdsFormControlFooter_instances=new WeakSet,renderRemainingCharsBadge_fn=function renderRemainingCharsBadge_fn(remaining){var variant;return variant=remaining<0?"negative":remaining<20?"warning":"positive",(0,custom_element_scoping.qy)(_t3||(_t3=form_control_footer_component_`<gds-badge variant="${0}">${0}</gds-badge>`),variant,remaining)},GdsFormControlFooter.styles=[form_control_footer_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Number})],GdsFormControlFooter.prototype,"charCounter",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFormControlFooter.prototype,"errorMessage",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("charCounter"),(0,watch.w)("errorMessage")],GdsFormControlFooter.prototype,"_handleVisibilityChange",1),GdsFormControlFooter=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-form-control-footer",{dependsOn:[badge_component.K,triangle_exclamation_component.f]})],GdsFormControlFooter)},"./dist/libs/core/src/primitives/form-control-header/form-control-header.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{$:()=>GdsFormControlHeader});var _t,form_control_header_component_t,_t2,_t3,_GdsFormControlHeader_instances,handleExtSupTxtSlotChange_fn,_renderExtSupTxtButton,_handleExtSupTxtBtnClick,_handleResize,renderExtSupTxt_fn,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_localize=__webpack_require__("./node_modules/@lit/localize/lit-localize.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),button_component=__webpack_require__("./dist/libs/core/src/components/button/button.component.js"),card_component=__webpack_require__("./dist/libs/core/src/components/card/card.component.js"),circle_info_component=__webpack_require__("./dist/libs/core/src/components/icon/icons/circle-info.component.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),form_control_header_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
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
      font: var(--_font-supporting-text, var(--gds-sys-text-detail-regular-s));
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
`)),form_control_header_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var GdsFormControlHeader=function(_GdsElement){function GdsFormControlHeader(){var _this;return(0,classCallCheck.A)(this,GdsFormControlHeader),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormControlHeader,arguments),(0,chunk_QU3DSPNU.VK)(_this,_GdsFormControlHeader_instances),_this.showExtendedSupportingText=!1,_this._hasExtendedSupportingText=!1,(0,chunk_QU3DSPNU.VK)(_this,_renderExtSupTxtButton,(function(){return(0,custom_element_scoping.qy)(form_control_header_component_t||(form_control_header_component_t=form_control_header_component_`
      <gds-button
        size="small"
        rank="tertiary"
        margin="-xs 0"
        label="${0}"
        gds-aria-expanded="${0}"
        @click=${0}
      >
        <gds-icon-circle-info ?solid=${0} />
      </gds-button>
    `),(0,lit_localize.ab)("Show more information"),_this.showExtendedSupportingText,(0,chunk_QU3DSPNU.S7)(_this,_handleExtSupTxtBtnClick),_this.showExtendedSupportingText)})),(0,chunk_QU3DSPNU.VK)(_this,_handleExtSupTxtBtnClick,(function(){var _this$_extendedSuppor;_this.showExtendedSupportingText=!_this.showExtendedSupportingText,null==(_this$_extendedSuppor=_this._extendedSupportingText)||_this$_extendedSuppor.style.setProperty("--_max-height",_this.showExtendedSupportingText?"".concat(_this._extendedSupportingText.scrollHeight,"px"):"0"),_this.dispatchCustomEvent("gds-ui-state",{bubbles:!0,composed:!0,detail:_this.showExtendedSupportingText})})),(0,chunk_QU3DSPNU.VK)(_this,_handleResize,(function(){var _this$_extendedSuppor2;_this.showExtendedSupportingText&&(null==(_this$_extendedSuppor2=_this._extendedSupportingText)||_this$_extendedSuppor2.style.setProperty("--_max-height","".concat(_this._extendedSupportingText.scrollHeight,"px")))})),_this}return(0,inherits.A)(GdsFormControlHeader,_GdsElement),(0,createClass.A)(GdsFormControlHeader,[{key:"render",value:function render(){return(0,custom_element_scoping.qy)(_t2||(_t2=form_control_header_component_`
      <div id="label-row">
        <div>
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
        ${0}
      </div>

      ${0}
    `),(0,when.z)(this._hasExtendedSupportingText,(0,chunk_QU3DSPNU.S7)(this,_renderExtSupTxtButton)),(0,chunk_QU3DSPNU.jq)(this,_GdsFormControlHeader_instances,renderExtSupTxt_fn).call(this))}},{key:"connectedCallback",value:function connectedCallback(){_superPropGet(GdsFormControlHeader,"connectedCallback",this,3)([]),window.addEventListener("resize",(0,chunk_QU3DSPNU.S7)(this,_handleResize))}},{key:"disconnectedCallback",value:function disconnectedCallback(){_superPropGet(GdsFormControlHeader,"disconnectedCallback",this,3)([]),window.removeEventListener("resize",(0,chunk_QU3DSPNU.S7)(this,_handleResize))}}])}(gds_element.j);_GdsFormControlHeader_instances=new WeakSet,handleExtSupTxtSlotChange_fn=function handleExtSupTxtSlotChange_fn(e){this._hasExtendedSupportingText=e.target.assignedElements({flatten:!0}).length>0},_renderExtSupTxtButton=new WeakMap,_handleExtSupTxtBtnClick=new WeakMap,_handleResize=new WeakMap,renderExtSupTxt_fn=function renderExtSupTxt_fn(){return(0,custom_element_scoping.qy)(_t3||(_t3=form_control_header_component_`
      <div
        id="extended-supporting-text"
        aria-hidden="${0}"
        ?inert=${0}
      >
        <slot
          name="extended-supporting-text"
          @slotchange=${0}
        ></slot>
      </div>
    `),this.showExtendedSupportingText?"false":"true",!this.showExtendedSupportingText,(0,chunk_QU3DSPNU.jq)(this,_GdsFormControlHeader_instances,handleExtSupTxtSlotChange_fn))},GdsFormControlHeader.styles=[form_control_header_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFormControlHeader.prototype,"showExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.wk)()],GdsFormControlHeader.prototype,"_hasExtendedSupportingText",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("#extended-supporting-text")],GdsFormControlHeader.prototype,"_extendedSupportingText",2),GdsFormControlHeader=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-form-control-header",{dependsOn:[button_component.t,card_component.z,circle_info_component.w]}),(0,lit_localize.cc)()],GdsFormControlHeader)},"./dist/libs/core/src/primitives/listbox/option.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{Y:()=>GdsOption});var _t,_hidden,_GdsOption_instances,emitSelect_fn,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/lit/decorators.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__=__webpack_require__("./node_modules/lit-html/directives/when.js"),_components_icon_icons_checkmark_component_js__WEBPACK_IMPORTED_MODULE_18__=__webpack_require__("./dist/libs/core/src/components/icon/icons/checkmark.component.js"),_gds_element_js__WEBPACK_IMPORTED_MODULE_13__=__webpack_require__("./dist/libs/core/src/gds-element.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_9__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_shared_styles_rbcb_toggle_style_js__WEBPACK_IMPORTED_MODULE_15__=__webpack_require__("./dist/libs/core/src/shared-styles/rbcb-toggle.style.js"),_shared_styles_rbcb_toggle_template_js__WEBPACK_IMPORTED_MODULE_11__=__webpack_require__("./dist/libs/core/src/shared-styles/rbcb-toggle.template.js"),_tokens_style_js__WEBPACK_IMPORTED_MODULE_14__=__webpack_require__("./dist/libs/core/src/tokens.style.js"),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),_utils_decorators_index_js__WEBPACK_IMPORTED_MODULE_17__=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js"),_utils_mixins_focusable_js__WEBPACK_IMPORTED_MODULE_12__=__webpack_require__("./dist/libs/core/src/utils/mixins/focusable.js"),_option_styles_js__WEBPACK_IMPORTED_MODULE_16__=__webpack_require__("./dist/libs/core/src/primitives/listbox/option.styles.js"),_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}function _superPropGet(t,o,e,r){var p=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}var GdsOption=function(_Focusable){function GdsOption(){var _this;return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_5__.A)(this,GdsOption),_this=function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,GdsOption),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.VK)(_this,_GdsOption_instances),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.VK)(_this,_hidden,!1),_this.selected=!1,_this.isPlaceholder=!1,_this.addEventListener("click",(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.jq)(_this,_GdsOption_instances,emitSelect_fn)),_this.addEventListener("keydown",(function(e){"Enter"!==e.key&&" "!==e.key||(e.preventDefault(),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.jq)(_this,_GdsOption_instances,emitSelect_fn).call(_this,e))})),_this}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_6__.A)(GdsOption,_Focusable),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_7__.A)(GdsOption,[{key:"hidden",get:function get(){return(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.S7)(this,_hidden)},set:function set(value){var strValue=value.toString();(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.OV)(this,_hidden,"true"===strValue),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.S7)(this,_hidden)?this.setAttribute("inert",""):this.removeAttribute("inert")}},{key:"connectedCallback",value:function connectedCallback(){var _this2=this;_superPropGet(GdsOption,"connectedCallback",this,3)([]),this.setAttribute("role","option"),this.updateComplete.then((function(){_this2.isPlaceholder&&(_this2.hidden=!0),_transitional_styles_js__WEBPACK_IMPORTED_MODULE_8__.n.instance.apply(_this2,"gds-option")}))}},{key:"parentElement",get:function get(){return _superPropGet(GdsOption,"parentElement",this,1)}},{key:"_handlePlaceholderStatusChange",value:function _handlePlaceholderStatusChange(){this.isPlaceholder?this.hidden=!0:this.hidden=!1}},{key:"render",value:function render(){var _this$parentElement,_this3=this,isMultiple=null==(_this$parentElement=this.parentElement)?void 0:_this$parentElement.multiple;return isMultiple||(this.selected?this.setAttribute("highlighted",""):this.removeAttribute("highlighted")),(0,_scoping_js__WEBPACK_IMPORTED_MODULE_9__.qy)(_t||(_t=_`<div class="item">
      ${0} <slot></slot>
    </div>`),(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_10__.z)(isMultiple,(function(){return(0,_shared_styles_rbcb_toggle_template_js__WEBPACK_IMPORTED_MODULE_11__.o)({checked:_this3.selected,indeterminate:!1,disabled:!1,invalid:!1})})))}}])}((0,_utils_mixins_focusable_js__WEBPACK_IMPORTED_MODULE_12__.z)(_gds_element_js__WEBPACK_IMPORTED_MODULE_13__.j));_hidden=new WeakMap,_GdsOption_instances=new WeakSet,emitSelect_fn=function emitSelect_fn(e){e.stopPropagation(),this.dispatchCustomEvent("gds-select",{bubbles:!0,composed:!0,detail:{value:this.value}})},GdsOption.styles=[_tokens_style_js__WEBPACK_IMPORTED_MODULE_14__.LU,_shared_styles_rbcb_toggle_style_js__WEBPACK_IMPORTED_MODULE_15__.A,_option_styles_js__WEBPACK_IMPORTED_MODULE_16__.A],(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)()],GdsOption.prototype,"value",2),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"hidden",1),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({attribute:"aria-selected",reflect:!0})],GdsOption.prototype,"selected",2),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,lit_decorators_js__WEBPACK_IMPORTED_MODULE_4__.MZ)({type:Boolean,reflect:!0})],GdsOption.prototype,"isPlaceholder",2),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_utils_decorators_index_js__WEBPACK_IMPORTED_MODULE_17__.w)("isPlaceholder")],GdsOption.prototype,"_handlePlaceholderStatusChange",1),GdsOption=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_3__.Cc)([(0,_scoping_js__WEBPACK_IMPORTED_MODULE_9__.Y$)("gds-option",{dependsOn:[_components_icon_icons_checkmark_component_js__WEBPACK_IMPORTED_MODULE_18__.V]})],GdsOption)},"./dist/libs/core/src/primitives/listbox/option.styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>option_styles_default});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var _t,option_styles_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
  @layer base, reset;

  @layer base {
    :host(:not(:last-child)) {
      border-bottom: 1px solid var(--gds-sys-color-border-subtle-01);
    }

    :host .item {
      display: flex;
      align-items: center;
      user-select: none;
      padding-inline: var(--gds-sys-space-m);
      padding-block: var(--gds-sys-space-s);
      cursor: pointer;
      font: var(--gds-sys-text-detail-regular-m);
      gap: 1ch;
      max-width: 100%;
      box-sizing: border-box;
      position: relative;

      &::before {
        content: ' ';
        display: flex;
        inset: var(--gds-sys-space-2xs);
        position: absolute;
        border: var(--gds-sys-space-3xs) solid currentColor;
        border-radius: var(--gds-sys-space-xs);
        opacity: 0;
        visitility: hidden;
        pointer-events: none;
      }
    }

    :host([highlighted]) {
      background-color: var(--gds-sys-color-l3-neutral-01);
      color: var(--gds-sys-color-content-inversed);
    }

    :host(:hover:not([highlighted])) .item {
      background-color: color-mix(
        in srgb,
        transparent,
        var(--gds-sys-color-state-neutral-05)
      );
    }

    :host(:focus-visible) {
      outline: none;
    }

    :host(:focus-visible) div::before {
      inset: var(--gds-sys-space-2xs);
      opacity: 1;
      visivility: visible;
    }

    :host([inert]) {
      display: none;
    }
  }
`))},"./dist/libs/core/src/shared-styles/form-control-host.style.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>form_control_host_style_default});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var _t,form_control_host_style_default=(0,__webpack_require__("./node_modules/lit/index.js").AH)(_t||(_t=(function _(t){return t})`
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
`))},"./dist/libs/core/src/shared-styles/rbcb-toggle.template.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{U:()=>radioToggle,o:()=>checkboxToggle});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");var _t,_t2,_t3,_t4,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/directives/class-map.js"),lit_directives_when_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./node_modules/lit-html/directives/when.js"),_scoping_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),_=function _(t){return t},checkboxToggle=function checkboxToggle(props){return template(Object.assign({},props,{type:"checkbox"}))},radioToggle=function radioToggle(props){return template(Object.assign({},props,{type:"radio"}))},template=function template(props){var type=props.type,checked=props.checked,indeterminate=props.indeterminate,disabled=props.disabled,invalid=props.invalid,modifiers={"rbcb--checkbox":"checkbox"===type,"rbcb--radio":"radio"===type,"--checked":checked,"--indeterminate":indeterminate,"--disabled":disabled,"--invalid":invalid};return(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.qy)(_t||(_t=_`
    <div class="rbcb ${0}">
      <div class="rbcb__perimeter"></div>
      <div class="rbcb__toggle">
        ${0}
      </div>
    </div>
  `),(0,lit_directives_class_map_js__WEBPACK_IMPORTED_MODULE_1__.H)(modifiers),(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_3__.z)("checkbox"===type,(function(){return(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.qy)(_t2||(_t2=_`
            ${0}
          `),(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_3__.z)(indeterminate,(function(){return(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.qy)(_t3||(_t3=_`<gds-icon-minus-small
                  class="rbcb__icon"
                  stroke="4"
                ></gds-icon-minus-small>`))}),(function(){return(0,lit_directives_when_js__WEBPACK_IMPORTED_MODULE_3__.z)(checked,(function(){return(0,_scoping_js__WEBPACK_IMPORTED_MODULE_2__.qy)(_t4||(_t4=_`<gds-icon-checkmark
                      class="rbcb__icon"
                      stroke="4"
                    ></gds-icon-checkmark>`))}))})))})))}},"./dist/libs/core/src/utils/controllers/listbox-kb-nav-controller.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{y:()=>ListboxKbNavController});var _keyboardNavigationHandler,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),ListboxKbNavController=function(){return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_2__.A)((function ListboxKbNavController(host){var _this=this;(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_1__.A)(this,ListboxKbNavController),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_keyboardNavigationHandler,(function(e){var targetItem=e.target;if(_this.host.navigableItems.includes(targetItem)){var handled=!1;if("ArrowDown"===e.key){var nextItemIndex=_this.host.navigableItems.indexOf(targetItem)+1,nextItem=_this.host.navigableItems[nextItemIndex];null==nextItem||nextItem.focus(),handled=!0}else if("ArrowUp"===e.key){var prevOptionIndex=_this.host.navigableItems.indexOf(targetItem)-1,prevItem=_this.host.navigableItems[prevOptionIndex];null==prevItem||prevItem.focus(),handled=!0}else if("Home"===e.key){var _this$host$navigableI;null==(_this$host$navigableI=_this.host.navigableItems[0])||_this$host$navigableI.focus(),handled=!0}else if("End"===e.key){var _this$host$navigableI2;null==(_this$host$navigableI2=_this.host.navigableItems[_this.host.navigableItems.length-1])||_this$host$navigableI2.focus(),handled=!0}else{var key=e.key.toLowerCase();if(1!==key.length)return;if(key>="a"&&key<="z"||key>="0"&&key<="9"){var firstMatch=_this.host.navigableItems.find((function(el){var _el$textContent,text=null==(_el$textContent=el.textContent)?void 0:_el$textContent.trim().toLowerCase();return null==text?void 0:text.startsWith(key)}));null==firstMatch||firstMatch.focus(),handled=!0}}handled&&(e.preventDefault(),e.stopPropagation())}})),(this.host=host).addController(this)}),[{key:"hostConnected",value:function hostConnected(){this.host.addEventListener("keydown",(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}},{key:"hostDisconnected",value:function hostDisconnected(){this.host.removeEventListener("keydown",(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_keyboardNavigationHandler))}}])}();_keyboardNavigationHandler=new WeakMap},"./dist/libs/core/src/utils/helpers/unwrap-slots.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{o:()=>unwrap});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");function unwrap(slotRef){for(var slot=slotRef;slot.assignedElements().length>0&&"SLOT"===slot.assignedElements()[0].nodeName;)slot=slot.assignedElements()[0];return slot}},"./dist/libs/core/src/utils/mixins/focusable.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{z:()=>Focusable});var _home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js");__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var Focusable=function Focusable(superClass){var HighlightableElement=function(_superClass){function HighlightableElement(){var _this;return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_classCallCheck_js__WEBPACK_IMPORTED_MODULE_4__.A)(this,HighlightableElement),(_this=function _callSuper(t,o,e){return o=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(o),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_possibleConstructorReturn_js__WEBPACK_IMPORTED_MODULE_1__.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(t).constructor):o.apply(t,e))}(this,HighlightableElement,arguments)).onblur=function(e){_this.setAttribute("tabindex","-1"),_this.dispatchEvent(new FocusEvent("gds-blur",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},_this.onfocus=function(e){_this.dispatchEvent(new FocusEvent("gds-focus",{bubbles:!0,composed:!0,relatedTarget:e.relatedTarget}))},_this}return(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_inherits_js__WEBPACK_IMPORTED_MODULE_5__.A)(HighlightableElement,_superClass),(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_createClass_js__WEBPACK_IMPORTED_MODULE_6__.A)(HighlightableElement,[{key:"focus",value:function focus(options){this.setAttribute("tabindex","0"),function _superPropGet(t,o,e,r){var p=(0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_get_js__WEBPACK_IMPORTED_MODULE_2__.A)((0,_home_runner_work_green_green_node_modules_babel_runtime_helpers_esm_getPrototypeOf_js__WEBPACK_IMPORTED_MODULE_0__.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(HighlightableElement,"focus",this,3)([options])}}])}(superClass);return HighlightableElement}}}]);
//# sourceMappingURL=9187.6546e6a0.iframe.bundle.js.map
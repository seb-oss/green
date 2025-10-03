"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[156],{"./dist/libs/core/src/components/button/button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>GdsButton});var _t,ripple_component_t,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),static_html=__webpack_require__("./node_modules/lit/static-html.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js"),ripple_styles_default=(0,lit.AH)(_t||(_t=(function _(t){return t})`
  :host {
    --gds-ripple-motion-name: ripple;
    --gds-ripple-motion: var(--gds-ripple-motion-name) 1.25s
      cubic-bezier(0.16, 1, 0.3, 1) 0s 1 normal none running;
    border-radius: var(--gds-sys-space-max);
    contain: strict;
    display: grid;
    place-content: center;
    height: 100%;
    inset: 0;
    overflow: hidden;
    position: absolute;
    width: 100%;
  }

  div {
    background-color: currentColor;
    border-radius: var(--gds-sys-space-max);
    display: flex;
    height: 100%;
    left: calc((-50% + var(--gds-ripple-left)) / 4);
    opacity: 0;
    pointer-events: none;
    position: absolute;
    top: 0;
    width: 100%;
    will-change: transform;
  }

  div.gds-ripple-effect {
    animation: var(--gds-ripple-motion);
  }

  @keyframes ripple {
    from {
      opacity: 0.2;
      transform: scale(0.6, 1);
    }

    to {
      opacity: 0;
      transform: scale(1.25);
    }
  }

  @media (prefers-reduced-motion: reduce) {
    :host {
      --gds-ripple-motion-name: none !important;
    }
  }
`)),ripple_component_=function _(t){return t};function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var GdsRipple=function(_GdsElement){function GdsRipple(){var _this;return(0,classCallCheck.A)(this,GdsRipple),(_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsRipple,arguments)).onmousedown=function(e){var rect=e.target.getBoundingClientRect(),rippleEl=_this._rippleEl;rippleEl&&(rippleEl.classList.remove("gds-ripple-effect"),_this.style.setProperty("--gds-ripple-top","".concat(e.clientY-rect.top,"px")),_this.style.setProperty("--gds-ripple-left","".concat(e.clientX-rect.left,"px")),setTimeout((function(){rippleEl.classList.add("gds-ripple-effect")}),20))},_this}return(0,inherits.A)(GdsRipple,_GdsElement),(0,createClass.A)(GdsRipple,[{key:"render",value:function render(){return(0,lit.qy)(ripple_component_t||(ripple_component_t=ripple_component_`<div></div>`))}}])}(gds_element.j);GdsRipple.styles=[tokens_style.LU,ripple_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("div")],GdsRipple.prototype,"_rippleEl",2),GdsRipple=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-ripple")],GdsRipple);var transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),observe_light_dom=__webpack_require__("./dist/libs/core/src/utils/decorators/observe-light-dom.js"),style_expression_property=__webpack_require__("./dist/libs/core/src/utils/decorators/style-expression-property.js"),slicedToArray=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/slicedToArray.js"),directive=__webpack_require__("./node_modules/lit/directive.js"),html=__webpack_require__("./node_modules/lit/html.js");function forward_attributes_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(forward_attributes_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var ForwardAttributesDirective=function(_Directive){function ForwardAttributesDirective(partInfo){var _this;if((0,classCallCheck.A)(this,ForwardAttributesDirective),_this=function forward_attributes_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,forward_attributes_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,ForwardAttributesDirective,[partInfo]),partInfo.type!==directive.OA.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings");return _this}return(0,inherits.A)(ForwardAttributesDirective,_Directive),(0,createClass.A)(ForwardAttributesDirective,[{key:"render",value:function render(_filter){return html.s6}},{key:"update",value:function update(part,_ref){var _part$options,filter=(0,slicedToArray.A)(_ref,1)[0],element=part.element,host=null==(_part$options=part.options)?void 0:_part$options.host;Array.from(host.attributes).forEach((function(attr){filter(attr)&&element.setAttribute(attr.name.replace("gds-",""),attr.value)}))}}])}(directive.WL),forwardAttributes=(0,directive.u$)(ForwardAttributesDirective);ForwardAttributesDirective.__docgenInfo={description:"",methods:[{name:"update",docblock:null,modifiers:[],params:[{name:"part",optional:!1,type:null},{name:"[filter]",optional:!1,type:null}],returns:null}],displayName:"ForwardAttributesDirective"};var templateCache=new WeakMap;var button_styles_t,button_component_t,_t2,_t3,_t4,_isIconButton,_Button_instances,isLink_get,defaultRel_get,_mainSlotChange,_handleClick,declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js"),button_styles_default=(0,lit.AH)(button_styles_t||(button_styles_t=(function _(t){return t})`
  @layer tokens, core, a11y, ranks, sizes, variants, disabled;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }

  @layer core {
    :host {
      display: inline-flex;
      max-width: 100%;
    }

    .button {
      --_block-size: var(--gds-sys-space-4xl);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
      block-size: var(--_block-size);
      background-color: var(--gds-sys-color-l3-neutral-01);
      color: var(--gds-sys-color-content-neutral-03);
      border-radius: var(--gds-sys-radius-max);
      font-family: inherit;
      font: var(--gds-sys-text-detail-book-m);
      gap: var(--gds-sys-space-xs);
      outline-color: transparent;
      outline-offset: var(--gds-sys-space-4xs);
      outline-style: solid;
      outline-width: var(--gds-sys-space-4xs);
      padding-block: var(--gds-sys-space-s);
      padding-inline: var(--gds-sys-space-xl);
      position: relative;
      text-decoration: none;
      transition-property: color, border-colorm, background;
      transition-duration: 0.2s;
      flex: 1;

      &:focus {
        outline-color: var(--gds-sys-color-content-neutral-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-01),
          var(--gds-sys-color-state-neutral-02)
        );
      }

      &:not(.circle) slot:not([name]) {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
  }

  .button.circle {
    aspect-ratio: 1 / 1;
    padding: 0;
    min-block-size: var(--_block-size);
    min-inline-size: var(--_block-size);
  }

  .button:disabled {
    pointer-events: none;
    background-color: var(--gds-sys-color-l3-disabled-01);
    color: var(--gds-sys-color-content-disabled-01);
  }

  @layer ranks {
    :host([rank*='secondary']) .button {
      background-color: var(--gds-sys-color-l3-neutral-02);
      color: var(--gds-sys-color-content-neutral-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-02),
          var(--gds-sys-color-state-neutral-04)
        );
      }
    }

    :host([rank*='tertiary']) .button {
      background-color: transparent;
      color: var(--gds-sys-color-content-neutral-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-neutral-05)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
      }
    }
  }

  @layer sizes {
    :host([size='xs']) .button {
      --_block-size: var(--gds-sys-space-xl);
      gap: var(--gds-sys-space-3xs);
      font: var(--gds-sys-text-detail-book-xs);
      padding-inline: var(--gds-sys-space-s);
    }

    :host([size='small']) .button {
      --_block-size: var(--gds-sys-space-2xl);
      font: var(--gds-sys-text-detail-book-s);
      gap: var(--gds-sys-space-3xs);
      padding-block: var(--gds-sys-space-3xs);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='medium']) .button {
      --_block-size: var(--gds-sys-space-3xl);
      gap: var(--gds-sys-space-2xs);
      font: var(--gds-sys-text-detail-book-m);
      padding-inline: var(--gds-sys-space-l);
    }
  }

  @layer variants {
    .brand {
      background-color: var(--gds-sys-color-l3-brand-01);

      &:focus {
        outline-color: var(--gds-sys-color-content-brand-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-brand-01),
            var(--gds-sys-color-state-brand-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-brand-01),
          var(--gds-sys-color-state-brand-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-neutral-02);
        color: var(--gds-sys-color-content-neutral-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-neutral-02),
              var(--gds-sys-color-state-brand-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-neutral-02),
            var(--gds-sys-color-state-brand-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-neutral-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-brand-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-brand-06)
          );
        }
      }
    }

    .positive {
      background-color: var(--gds-sys-color-l3-positive-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-positive-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-positive-01),
            var(--gds-sys-color-state-positive-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-positive-01),
          var(--gds-sys-color-state-positive-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-positive-02);
        color: var(--gds-sys-color-content-positive-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-positive-02),
              var(--gds-sys-color-state-positive-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-positive-02),
            var(--gds-sys-color-state-positive-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-positive-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-positive-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-positive-06)
          );
        }
      }
    }

    .negative {
      background-color: var(--gds-sys-color-l3-negative-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-negative-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-negative-01),
            var(--gds-sys-color-state-negative-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-negative-01),
          var(--gds-sys-color-state-negative-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-negative-02);
        color: var(--gds-sys-color-content-negative-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-negative-02),
              var(--gds-sys-color-state-negative-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-negative-02),
            var(--gds-sys-color-state-negative-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-negative-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-negative-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-negative-06)
          );
        }
      }
    }

    .notice {
      background-color: var(--gds-sys-color-l3-notice-01);
      color: var(--gds-sys-color-content-inversed);

      &:focus {
        outline-color: var(--gds-sys-color-content-notice-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-notice-01),
            var(--gds-sys-color-state-notice-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-notice-01),
          var(--gds-sys-color-state-notice-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-notice-02);
        color: var(--gds-sys-color-content-notice-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-notice-02),
              var(--gds-sys-color-state-notice-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-notice-02),
            var(--gds-sys-color-state-notice-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-notice-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-notice-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-notice-06)
          );
        }
      }
    }

    .warning {
      background-color: var(--gds-sys-color-l3-warning-01);
      color: var(--gds-sys-color-content-neutral-03);

      &:focus {
        outline-color: var(--gds-sys-color-content-warning-01);
        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-warning-01),
            var(--gds-sys-color-state-warning-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-warning-01),
          var(--gds-sys-color-state-warning-02)
        );
      }

      &.secondary {
        background-color: var(--gds-sys-color-l3-warning-02);
        color: var(--gds-sys-color-content-warning-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-warning-02),
              var(--gds-sys-color-state-warning-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-warning-02),
            var(--gds-sys-color-state-warning-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-warning-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              transparent,
              var(--gds-sys-color-state-warning-05)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            transparent,
            var(--gds-sys-color-state-warning-06)
          );
        }
      }
    }
  }
`)),button_component_=function _(t){return t};function button_component_callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,button_component_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}function button_component_isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(button_component_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}var ariaForwards=["aria-label","aria-haspopup","aria-expanded"],button_component_html=function stripWhitespace(extendedTag){return function(strings){var modstrings=templateCache.get(strings);modstrings||((modstrings=strings.map((function(s){return s.replace(/\n[\s]+</gm,"<")}))).raw=strings.raw,templateCache.set(strings,modstrings));for(var _len=arguments.length,values=new Array(_len>1?_len-1:0),_key=1;_key<_len;_key++)values[_key-1]=arguments[_key];return extendedTag.apply(void 0,[modstrings].concat(values))}}(custom_element_scoping.qy),Button=function(_GdsFormControlElemen){function Button(){var _this;return(0,classCallCheck.A)(this,Button),_this=button_component_callSuper(this,Button,arguments),(0,chunk_QU3DSPNU.VK)(_this,_Button_instances),_this.disabled=!1,_this.rank="primary",_this.variant="neutral",_this.size="medium",_this.label="",_this.href="",(0,chunk_QU3DSPNU.VK)(_this,_isIconButton,!1),(0,chunk_QU3DSPNU.VK)(_this,_mainSlotChange,(function(){var _this$_mainSlot$assig,_this$_mainSlot,assignedElements=null!=(_this$_mainSlot$assig=null==(_this$_mainSlot=_this._mainSlot)?void 0:_this$_mainSlot.assignedElements())?_this$_mainSlot$assig:[];(0,chunk_QU3DSPNU.OV)(_this,_isIconButton,1===assignedElements.length&&(assignedElements[0].tagName.toLowerCase().startsWith("gds-icon")||"icon"===assignedElements[0].getAttribute("name"))),_this.requestUpdate()})),(0,chunk_QU3DSPNU.VK)(_this,_handleClick,(function(e){_this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e}),_this.form&&!(0,chunk_QU3DSPNU.S7)(_this,_Button_instances,isLink_get)&&("submit"===_this.type?_this.form.requestSubmit():"reset"===_this.type&&_this.form.reset())})),_this}return(0,inherits.A)(Button,_GdsFormControlElemen),(0,createClass.A)(Button,[{key:"focus",value:function focus(options){var _this$_getValidityAnc;null==(_this$_getValidityAnc=this._getValidityAnchor())||_this$_getValidityAnc.focus(options)}},{key:"click",value:function click(){var _this$_getValidityAnc2;null==(_this$_getValidityAnc2=this._getValidityAnchor())||_this$_getValidityAnc2.click()}},{key:"connectedCallback",value:function connectedCallback(){!function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(Button,"connectedCallback",this,3)([]),this.setAttribute("role","none"),transitional_styles.n.instance.apply(this,"gds-button")}},{key:"render",value:function render(){var buttonClasses={button:!0,circle:(0,chunk_QU3DSPNU.S7)(this,_isIconButton),icon:(0,chunk_QU3DSPNU.S7)(this,_isIconButton),xs:"xs"===this.size,small:"small"===this.size,large:"large"===this.size,brand:"brand"===this.variant,positive:"positive"===this.variant,negative:"negative"===this.variant,notice:"notice"===this.variant,warning:"warning"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},tag=(0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?(0,static_html.eu)(button_component_t||(button_component_t=button_component_`a`)):(0,static_html.eu)(_t2||(_t2=button_component_`button`));return(0,static_html.qy)(_t3||(_t3=button_component_`
      <${0}
        class=${0}
        type="${0}"
        ?disabled="${0}"
        aria-label=${0}
        href=${0}
        target=${0}
        rel=${0}
        download=${0}
        part="_button"
        @click="${0}"
        ${0}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${0}></slot>
        <slot name="trail"></slot>
        ${0}
        </${0}>
        `),tag,(0,class_map.H)(buttonClasses),(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?void 0:this.type),this.disabled,this.label||lit.s6,(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.href:void 0),(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.target:void 0),(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.rel||(0,chunk_QU3DSPNU.S7)(this,_Button_instances,defaultRel_get):void 0),(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.download:void 0),(0,chunk_QU3DSPNU.S7)(this,_handleClick),forwardAttributes((function(attr){return attr.name.startsWith("gds-aria")||"gds-role"===attr.name||ariaForwards.includes(attr.name)})),(0,chunk_QU3DSPNU.S7)(this,_mainSlotChange),(0,when.z)(!this._isUsingTransitionalStyles,(function(){return button_component_html(_t4||(_t4=button_component_`<gds-ripple part="_ripple"></gds-ripple>`))})),tag)}},{key:"_getValidityAnchor",value:function _getValidityAnchor(){return this._button}},{key:"_attributeChanged",value:function _attributeChanged(){this.requestUpdate()}}])}(form_control.S);_isIconButton=new WeakMap,_Button_instances=new WeakSet,isLink_get=function isLink_get(){return this.href.length>0},defaultRel_get=function defaultRel_get(){return"_blank"===this.target?"noreferrer noopener":void 0},_mainSlotChange=new WeakMap,_handleClick=new WeakMap,Button.styles=[tokens_style.LU,button_styles_default],Button.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],Button.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:".button"})],Button.prototype,"justify-content",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"type",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"rank",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"href",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"target",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"rel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"download",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("slot:not([name])")],Button.prototype,"_mainSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)(".button")],Button.prototype,"_button",2),(0,chunk_QU3DSPNU.Cc)([(0,observe_light_dom.L)({attributes:!0,childList:!1,subtree:!1,characterData:!1})],Button.prototype,"_attributeChanged",1);var GdsButton=function(_withSizeXProps){function GdsButton(){return(0,classCallCheck.A)(this,GdsButton),button_component_callSuper(this,GdsButton,arguments)}return(0,inherits.A)(GdsButton,_withSizeXProps),(0,createClass.A)(GdsButton)}((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(Button))));GdsButton=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-button",{dependsOn:[GdsRipple]})],GdsButton)},"./dist/libs/core/src/components/form/form-control.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>GdsFormControlElement});var _internals,classCallCheck=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/classCallCheck.js"),createClass=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/createClass.js"),possibleConstructorReturn=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/possibleConstructorReturn.js"),getPrototypeOf=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/getPrototypeOf.js"),get=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/get.js"),inherits=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/inherits.js"),chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js");function _isNativeReflectConstruct(){try{var t=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){})))}catch(t){}return(_isNativeReflectConstruct=function _isNativeReflectConstruct(){return!!t})()}__webpack_require__("./dist/libs/core/src/utils/helpers/platform.js").S||function(prototype){function raise(errorConstructor,message){throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+message+".",arguments.length>2&&void 0!==arguments[2]?arguments[2]:"Error")}"function"!=typeof prototype.requestSubmit&&(prototype.requestSubmit=function(){var submitter=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;submitter?(!function validateSubmitter(submitter,form){submitter instanceof HTMLElement||raise(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==submitter.type||raise(TypeError,"The specified element is not a submit button"),submitter.form==form||raise(DOMException,"The specified element is not owned by this form element","NotFoundError")}(submitter,this),submitter.click()):((submitter=document.createElement("input")).type="submit",submitter.hidden=!0,this.appendChild(submitter),submitter.click(),this.removeChild(submitter))})}(HTMLFormElement.prototype);var GdsFormControlElement=function(_GdsElement){function GdsFormControlElement(){var _this;(0,classCallCheck.A)(this,GdsFormControlElement),_this=function _callSuper(t,o,e){return o=(0,getPrototypeOf.A)(o),(0,possibleConstructorReturn.A)(t,_isNativeReflectConstruct()?Reflect.construct(o,e||[],(0,getPrototypeOf.A)(t).constructor):o.apply(t,e))}(this,GdsFormControlElement),(0,chunk_QU3DSPNU.VK)(_this,_internals),_this.required=!1,_this.errorMessage="",_this.label="",_this.name="",_this.disabled=!1;try{(0,chunk_QU3DSPNU.OV)(_this,_internals,_this.attachInternals())}catch(e){(0,chunk_QU3DSPNU.OV)(_this,_internals,{form:_this.closest("form"),setFormValue:function setFormValue(value){_this._internalValue=value},setValidity:function setValidity(validity,validationMessage){(0,chunk_QU3DSPNU.S7)(_this,_internals).validity=validity,_this.errorMessage=validationMessage||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:_this.checkValidity.bind(_this),reportValidity:_this.reportValidity.bind(_this)})}return _this}return(0,inherits.A)(GdsFormControlElement,_GdsElement),(0,createClass.A)(GdsFormControlElement,[{key:"connectedCallback",value:function connectedCallback(){if(function _superPropGet(t,o,e,r){var p=(0,get.A)((0,getPrototypeOf.A)(1&r?t.prototype:t),o,e);return 2&r&&"function"==typeof p?function(t){return p.apply(e,t)}:p}(GdsFormControlElement,"connectedCallback",this,3)([]),"function"!=typeof this.attachInternals){var form=this.closest("form");form&&(form.addEventListener("submit",this._handleFormSubmit.bind(this)),form.addEventListener("reset",this.formResetCallback.bind(this)))}}},{key:"invalid",get:function get(){return!(0,chunk_QU3DSPNU.S7)(this,_internals).validity.valid},set:function set(value){var oldValue=this.invalid;(0,chunk_QU3DSPNU.S7)(this,_internals).setValidity(Object.assign({},(0,chunk_QU3DSPNU.S7)(this,_internals).validity,{customError:value,valid:!value}),this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",oldValue),(0,chunk_QU3DSPNU.S7)(this,_internals).checkValidity()}},{key:"value",get:function get(){return this._internalValue},set:function set(value){this._internalValue=value,(0,chunk_QU3DSPNU.S7)(this,_internals).setFormValue(value)}},{key:"form",get:function get(){return(0,chunk_QU3DSPNU.S7)(this,_internals).form}},{key:"validity",get:function get(){return(0,chunk_QU3DSPNU.S7)(this,_internals).validity}},{key:"validationMessage",get:function get(){return(0,chunk_QU3DSPNU.S7)(this,_internals).validationMessage}},{key:"willValidate",get:function get(){return(0,chunk_QU3DSPNU.S7)(this,_internals).willValidate}},{key:"checkValidity",value:function checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;var oldValue=this.invalid,validity=this.validator.validate(this)||[Object.assign({},this.validity,{valid:!0}),""];return this.errorMessage=validity[1]||this.errorMessage,(0,chunk_QU3DSPNU.S7)(this,_internals).setValidity(validity[0],validity[1],this._getValidityAnchor()),oldValue!==this.invalid&&(this.requestUpdate("invalid",oldValue),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),(0,chunk_QU3DSPNU.S7)(this,_internals).checkValidity()}},{key:"reportValidity",value:function reportValidity(){return(0,chunk_QU3DSPNU.S7)(this,_internals).reportValidity()}},{key:"__handleValueChange",value:function __handleValueChange(){this.checkValidity()}},{key:"formResetCallback",value:function formResetCallback(){"string"==typeof this.value?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}},{key:"formAssociatedCallback",value:function formAssociatedCallback(form){null==form||form.addEventListener("submit",this._handleFormSubmit.bind(this))}},{key:"_handleFormSubmit",value:function _handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}}])}(gds_element.j);_internals=new WeakMap,GdsFormControlElement.formAssociated=!0,(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsFormControlElement.prototype,"validator",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFormControlElement.prototype,"required",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"error-message"})],GdsFormControlElement.prototype,"errorMessage",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFormControlElement.prototype,"invalid",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFormControlElement.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFormControlElement.prototype,"value",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],GdsFormControlElement.prototype,"name",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFormControlElement.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value",{waitUntilFirstUpdate:!0})],GdsFormControlElement.prototype,"__handleValueChange",1)},"./dist/libs/core/src/utils/decorators/observe-light-dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>observeLightDOM});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");function observeLightDOM(){var observerConfig=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{attributes:!0,childList:!0,subtree:!1,characterData:!0};return function(proto,_propertyKey,descriptor){var observer,connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){var _this=this;null==connectedCallback||connectedCallback.call(this);(observer=new MutationObserver((function callback(_mutationList,_observer){var _descriptor$value;null==(_descriptor$value=descriptor.value)||_descriptor$value.call(_this)}))).observe(this,observerConfig)},proto.disconnectedCallback=function(){null==disconnectedCallback||disconnectedCallback.call(this),observer.disconnect()}}}},"./dist/libs/core/src/utils/decorators/watch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watch});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");function watch(propertyName,options){var resolvedOptions=Object.assign({waitUntilFirstUpdate:!1},options);return function(proto,propertyKey,descriptor){var update=proto.update,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){var _this=this;watchedProperties.forEach((function(property){var key=property;if(changedProps.has(key)){var _descriptor$value,oldValue=changedProps.get(key),newValue=_this[key];if(oldValue!==newValue)if(!resolvedOptions.waitUntilFirstUpdate||_this.hasUpdated)null==(_descriptor$value=descriptor.value)||_descriptor$value.call(_this,oldValue,newValue)}})),update.call(this,changedProps)}}}}}]);
//# sourceMappingURL=156.dab877e5.iframe.bundle.js.map
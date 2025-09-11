"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7595],{"./dist/libs/core/src/components/button/button.component.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{t:()=>GdsButton});var chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit=__webpack_require__("./node_modules/lit/index.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),class_map=__webpack_require__("./node_modules/lit/directives/class-map.js"),if_defined=__webpack_require__("./node_modules/lit/directives/if-defined.js"),when=__webpack_require__("./node_modules/lit-html/directives/when.js"),static_html=__webpack_require__("./node_modules/lit/static-html.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),custom_element_scoping=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js"),tokens_style=__webpack_require__("./dist/libs/core/src/tokens.style.js");var ripple_styles_default=lit.AH`
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
`;let GdsRipple=class extends gds_element.j{constructor(){super(...arguments),this.onmousedown=e=>{const rect=e.target.getBoundingClientRect(),rippleEl=this._rippleEl;rippleEl&&(rippleEl.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",e.clientY-rect.top+"px"),this.style.setProperty("--gds-ripple-left",e.clientX-rect.left+"px"),setTimeout((()=>{rippleEl.classList.add("gds-ripple-effect")}),20))}}render(){return lit.qy`<div></div>`}};GdsRipple.styles=[tokens_style.LU,ripple_styles_default],(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("div")],GdsRipple.prototype,"_rippleEl",2),GdsRipple=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-ripple")],GdsRipple);var transitional_styles=__webpack_require__("./dist/libs/core/src/utils/transitional-styles/transitional-styles.js"),observe_light_dom=__webpack_require__("./dist/libs/core/src/utils/decorators/observe-light-dom.js"),style_expression_property=__webpack_require__("./dist/libs/core/src/utils/decorators/style-expression-property.js"),directive=__webpack_require__("./node_modules/lit/directive.js"),html=__webpack_require__("./node_modules/lit/html.js");class ForwardAttributesDirective extends directive.WL{constructor(partInfo){if(super(partInfo),partInfo.type!==directive.OA.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(_filter){return html.s6}update(part,[filter]){const element=part.element,host=part.options?.host;Array.from(host.attributes).forEach((attr=>{filter(attr)&&element.setAttribute(attr.name.replace("gds-",""),attr.value)}))}}const forwardAttributes=(0,directive.u$)(ForwardAttributesDirective),templateCache=new WeakMap;var declarative_layout_mixins=__webpack_require__("./dist/libs/core/src/utils/mixins/declarative-layout-mixins.js"),form_control=__webpack_require__("./dist/libs/core/src/components/form/form-control.js");var _isIconButton,_Button_instances,isLink_get,defaultRel_get,_mainSlotChange,_handleClick,button_styles_default=lit.AH`
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
      --_block-size: var(--gds-sys-space-3xl);
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
      gap: var(--gds-sys-space-s);
      outline-color: transparent;
      outline-offset: var(--gds-sys-space-3xs);
      outline-style: solid;
      outline-width: var(--gds-sys-space-3xs);
      padding-block: var(--gds-sys-space-s);
      padding-inline: var(--gds-sys-space-l);
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
      --_block-size: var(--gds-sys-space-l);
      font: var(--gds-sys-text-detail-book-s);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='small']) .button {
      --_block-size: var(--gds-sys-space-xl);
      font: var(--gds-sys-text-detail-book-s);
      padding-block: var(--gds-sys-space-2xs);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='medium']) .button {
      --_block-size: var(--gds-sys-space-2xl);
      font: var(--gds-sys-text-detail-book-m);
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
`;const ariaForwards=["aria-label","aria-haspopup","aria-expanded"],button_component_html=function stripWhitespace(extendedTag){return(strings,...values)=>{let modstrings=templateCache.get(strings);return modstrings||(modstrings=strings.map((s=>s.replace(/\n[\s]+</gm,"<"))),modstrings.raw=strings.raw,templateCache.set(strings,modstrings)),extendedTag(modstrings,...values)}}(custom_element_scoping.qy);class Button extends form_control.S{constructor(){super(...arguments),(0,chunk_QU3DSPNU.VK)(this,_Button_instances),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",(0,chunk_QU3DSPNU.VK)(this,_isIconButton,!1),(0,chunk_QU3DSPNU.VK)(this,_mainSlotChange,(()=>{const assignedElements=this._mainSlot?.assignedElements()??[];(0,chunk_QU3DSPNU.OV)(this,_isIconButton,1===assignedElements.length&&(assignedElements[0].tagName.toLowerCase().startsWith("gds-icon")||"icon"===assignedElements[0].getAttribute("name"))),this.requestUpdate()})),(0,chunk_QU3DSPNU.VK)(this,_handleClick,(e=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:e}),this.form&&!(0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}))}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),transitional_styles.n.instance.apply(this,"gds-button")}focus(options){this._getValidityAnchor()?.focus(options)}render(){const buttonClasses={button:!0,circle:(0,chunk_QU3DSPNU.S7)(this,_isIconButton),icon:(0,chunk_QU3DSPNU.S7)(this,_isIconButton),xs:"xs"===this.size,small:"small"===this.size,large:"large"===this.size,brand:"brand"===this.variant,positive:"positive"===this.variant,negative:"negative"===this.variant,notice:"notice"===this.variant,warning:"warning"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},tag=(0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?static_html.eu`a`:static_html.eu`button`;return static_html.qy`
      <${tag}
        class=${(0,class_map.H)(buttonClasses)}
        type="${(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||lit.s6}
        href=${(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.href:void 0)}
        target=${(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.target:void 0)}
        rel=${(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.rel||(0,chunk_QU3DSPNU.S7)(this,_Button_instances,defaultRel_get):void 0)}
        download=${(0,if_defined.J)((0,chunk_QU3DSPNU.S7)(this,_Button_instances,isLink_get)?this.download:void 0)}
        part="_button"
        @click="${(0,chunk_QU3DSPNU.S7)(this,_handleClick)}"
        ${forwardAttributes((attr=>attr.name.startsWith("gds-aria")||"gds-role"===attr.name||ariaForwards.includes(attr.name)))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${(0,chunk_QU3DSPNU.S7)(this,_mainSlotChange)}></slot>
        <slot name="trail"></slot>
        ${(0,when.z)(!this._isUsingTransitionalStyles,(()=>button_component_html`<gds-ripple part="_ripple"></gds-ripple>`))}
        </${tag}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}_isIconButton=new WeakMap,_Button_instances=new WeakSet,isLink_get=function(){return this.href.length>0},defaultRel_get=function(){return"_blank"===this.target?"noreferrer noopener":void 0},_mainSlotChange=new WeakMap,_handleClick=new WeakMap,Button.styles=[tokens_style.LU,button_styles_default],Button.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],Button.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,style_expression_property.F)({selector:".button"})],Button.prototype,"justify-content",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"type",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"rank",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"variant",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],Button.prototype,"size",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"href",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"target",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"rel",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],Button.prototype,"download",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)("slot:not([name])")],Button.prototype,"_mainSlot",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.P)(".button")],Button.prototype,"_button",2),(0,chunk_QU3DSPNU.Cc)([(0,observe_light_dom.L)({attributes:!0,childList:!1,subtree:!1,characterData:!1})],Button.prototype,"_attributeChanged",1);let GdsButton=class extends((0,declarative_layout_mixins.Q8)((0,declarative_layout_mixins.TM)((0,declarative_layout_mixins.lt)(Button)))){};GdsButton=(0,chunk_QU3DSPNU.Cc)([(0,custom_element_scoping.Y$)("gds-button",{dependsOn:[GdsRipple]})],GdsButton)},"./dist/libs/core/src/components/form/form-control.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{S:()=>GdsFormControlElement});var _internals,chunk_QU3DSPNU=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),decorators=__webpack_require__("./node_modules/lit/decorators.js"),gds_element=__webpack_require__("./dist/libs/core/src/gds-element.js"),watch=__webpack_require__("./dist/libs/core/src/utils/decorators/watch.js");__webpack_require__("./dist/libs/core/src/utils/helpers/platform.js").S||function(prototype){function raise(errorConstructor,message,name="Error"){throw new errorConstructor("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+message+".",name)}"function"!=typeof prototype.requestSubmit&&(prototype.requestSubmit=function(submitter=null){submitter?(!function validateSubmitter(submitter,form){submitter instanceof HTMLElement||raise(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==submitter.type||raise(TypeError,"The specified element is not a submit button"),submitter.form==form||raise(DOMException,"The specified element is not owned by this form element","NotFoundError")}(submitter,this),submitter.click()):((submitter=document.createElement("input")).type="submit",submitter.hidden=!0,this.appendChild(submitter),submitter.click(),this.removeChild(submitter))})}(HTMLFormElement.prototype);class GdsFormControlElement extends gds_element.j{constructor(){super(),(0,chunk_QU3DSPNU.VK)(this,_internals),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{(0,chunk_QU3DSPNU.OV)(this,_internals,this.attachInternals())}catch(e){(0,chunk_QU3DSPNU.OV)(this,_internals,{form:this.closest("form"),setFormValue:value=>{this._internalValue=value},setValidity:(validity,validationMessage)=>{(0,chunk_QU3DSPNU.S7)(this,_internals).validity=validity,this.errorMessage=validationMessage||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),"function"!=typeof this.attachInternals){const form=this.closest("form");form&&(form.addEventListener("submit",this._handleFormSubmit.bind(this)),form.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(value){const oldValue=this.invalid;(0,chunk_QU3DSPNU.S7)(this,_internals).setValidity({...(0,chunk_QU3DSPNU.S7)(this,_internals).validity,customError:value,valid:!value},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",oldValue),(0,chunk_QU3DSPNU.S7)(this,_internals).checkValidity()}get invalid(){return!(0,chunk_QU3DSPNU.S7)(this,_internals).validity.valid}get value(){return this._internalValue}set value(value){this._internalValue=value,(0,chunk_QU3DSPNU.S7)(this,_internals).setFormValue(value)}get form(){return(0,chunk_QU3DSPNU.S7)(this,_internals).form}get validity(){return(0,chunk_QU3DSPNU.S7)(this,_internals).validity}get validationMessage(){return(0,chunk_QU3DSPNU.S7)(this,_internals).validationMessage}get willValidate(){return(0,chunk_QU3DSPNU.S7)(this,_internals).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const oldValue=this.invalid,validity=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=validity[1]||this.errorMessage,(0,chunk_QU3DSPNU.S7)(this,_internals).setValidity(validity[0],validity[1],this._getValidityAnchor()),oldValue!==this.invalid&&(this.requestUpdate("invalid",oldValue),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),(0,chunk_QU3DSPNU.S7)(this,_internals).checkValidity()}reportValidity(){return(0,chunk_QU3DSPNU.S7)(this,_internals).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){"string"==typeof this.value?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(form){form?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(e){this.checkValidity(),this.validity.valid||e.preventDefault()}}_internals=new WeakMap,GdsFormControlElement.formAssociated=!0,(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:!1})],GdsFormControlElement.prototype,"validator",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean})],GdsFormControlElement.prototype,"required",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({attribute:"error-message"})],GdsFormControlElement.prototype,"errorMessage",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFormControlElement.prototype,"invalid",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFormControlElement.prototype,"label",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)()],GdsFormControlElement.prototype,"value",1),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({reflect:!0})],GdsFormControlElement.prototype,"name",2),(0,chunk_QU3DSPNU.Cc)([(0,decorators.MZ)({type:Boolean,reflect:!0})],GdsFormControlElement.prototype,"disabled",2),(0,chunk_QU3DSPNU.Cc)([(0,watch.w)("value",{waitUntilFirstUpdate:!0})],GdsFormControlElement.prototype,"__handleValueChange",1)},"./dist/libs/core/src/utils/decorators/observe-light-dom.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{L:()=>observeLightDOM});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");function observeLightDOM(observerConfig={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(proto,_propertyKey,descriptor)=>{let observer;const connectedCallback=proto.connectedCallback,disconnectedCallback=proto.disconnectedCallback;proto.connectedCallback=function(){connectedCallback?.call(this);observer=new MutationObserver(((_mutationList,_observer)=>{descriptor.value?.call(this)})),observer.observe(this,observerConfig)},proto.disconnectedCallback=function(){disconnectedCallback?.call(this),observer.disconnect()}}}},"./dist/libs/core/src/utils/decorators/watch.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{w:()=>watch});__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js");function watch(propertyName,options){const resolvedOptions={waitUntilFirstUpdate:!1,...options};return(proto,propertyKey,descriptor)=>{const{update}=proto,watchedProperties=Array.isArray(propertyName)?propertyName:[propertyName];proto.update=function(changedProps){watchedProperties.forEach((property=>{const key=property;if(changedProps.has(key)){const oldValue=changedProps.get(key),newValue=this[key];oldValue!==newValue&&(resolvedOptions.waitUntilFirstUpdate&&!this.hasUpdated||descriptor.value?.call(this,oldValue,newValue))}})),update.call(this,changedProps)}}}},"./dist/libs/core/src/utils/transitional-styles/transitional-styles.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{n:()=>TransitionalStyles});var _styles,_elements,_useLegacyStylesheets,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./dist/libs/core/src/chunks/chunk.QU3DSPNU.js"),lit__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/lit/index.js"),_utils_controllers_dynamic_styles_controller_js__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./dist/libs/core/src/utils/controllers/dynamic-styles-controller.js"),_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__("./dist/libs/core/src/utils/helpers/custom-element-scoping.js");_styles=new WeakMap,_elements=new WeakMap,_useLegacyStylesheets=new WeakMap;let TransitionalStyles=class _TransitionalStyles{constructor(){(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_styles,new Map),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_elements,new Map),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.VK)(this,_useLegacyStylesheets,!(0,_utils_controllers_dynamic_styles_controller_js__WEBPACK_IMPORTED_MODULE_2__.k)())}static get instance(){return globalThis.__gdsTransitionalStyles?.[_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_3__.M]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_3__.M]:new _TransitionalStyles}),globalThis.__gdsTransitionalStyles[_helpers_custom_element_scoping_js__WEBPACK_IMPORTED_MODULE_3__.M]}apply(element,styleKey){if(!element.shadowRoot)return;const style=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_styles).get(styleKey);style&&((0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_elements).set(styleKey,element),this.applyToElement(styleKey,style))}applyToElement(styleKey,sheet){const element=(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_elements).get(styleKey);if(!element||!element.shadowRoot)return;const applyTransitional=()=>{element._dynamicStylesController.clearInitial(),element._dynamicStylesController.inject("t-styles",(0,lit__WEBPACK_IMPORTED_MODULE_1__.iz)(sheet)),element._isUsingTransitionalStyles=!0},clearTransitional=()=>{element._isUsingTransitionalStyles=!1,element._dynamicStylesController.clear("t-styles"),element._dynamicStylesController.restoreInitial()};let currentRoot=element.getRootNode(),closestGdsTheme=element.closest("[gds-element=gds-theme]");for(;null===closestGdsTheme&&currentRoot!==document;)closestGdsTheme=currentRoot.host?.closest("[gds-element=gds-theme]"),currentRoot=currentRoot.host?.getRootNode();if(closestGdsTheme){const theme=closestGdsTheme,updateStyles=()=>{"2023"===theme.designVersion?clearTransitional():applyTransitional()};if(theme.addEventListener("gds-design-version-changed",updateStyles),element.addEventListener("gds-element-disconnected",(()=>theme.removeEventListener("gds-design-version-changed",updateStyles))),"2023"===theme.designVersion)return void clearTransitional()}applyTransitional()}register(name,styles){let preparedStyle=styles;(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_useLegacyStylesheets)&&(preparedStyle=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${styles}`),(0,_chunks_chunk_QU3DSPNU_js__WEBPACK_IMPORTED_MODULE_0__.S7)(this,_styles).set(name,preparedStyle),this.applyToElement(name,preparedStyle)}}}}]);
//# sourceMappingURL=7595.0abf59c6.iframe.bundle.js.map
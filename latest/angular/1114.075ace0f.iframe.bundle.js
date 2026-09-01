"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1114],{7595(t,e,r){r.d(e,{t:()=>q});var o=r(745),s=r(9443),i=r(4367),a=r(3578),n=r(4652),l=r(505),c=r(911),d=r(3539),g=r(7526),p=r(5073),u=s.AH`
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
`;let y=class extends d.j{constructor(){super(...arguments),this.onmousedown=t=>{this.triggerRipple(t.clientX,t.clientY)}}render(){return s.qy`<div></div>`}triggerRipple(t,e){const r=this._rippleEl,o=this.getBoundingClientRect(),s=void 0!==t?t-o.left:o.width/2,i=void 0!==e?e-o.top:o.height/2;r&&(r.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${i}px`),this.style.setProperty("--gds-ripple-left",`${s}px`),setTimeout(()=>{r.classList.add("gds-ripple-effect")},20))}};y.styles=[p.LU,u],(0,o.Cc)([(0,i.P)("div")],y.prototype,"_rippleEl",2),y=(0,o.Cc)([(0,g.Y$)("gds-ripple")],y);var h=r(4457),v=r(685),b=r(1239),m=r(9399),f=r(4469),k=r(9295);class w extends f.WL{constructor(t){if(super(t),t.type!==f.OA.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return k.s6}update(t,[e]){const r=t.element,o=t.options?.host;Array.from(o.attributes).forEach(t=>{if(e(t)){const e=t.name.replace("gds-","");r.setAttribute(e,t.value),"tabindex"===e&&(r.tabIndex=Number(t.value))}})}}const x=(0,f.u$)(w),C=new WeakMap;var S,M,_,A,V,E,$,O,z=r(4987),T=r(8558),L=s.AH`
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
      --_radius: calc((var(--_block-size) + var(--gds-sys-space-xs)) / 1.8);
      display: flex;
      align-items: center;
      justify-content: center;
      box-sizing: border-box;
      border: none;
      cursor: pointer;
      min-width: 0;
      background-color: var(--gds-sys-color-l3-neutral-03);
      color: var(--gds-sys-color-content-neutral-03);
      border-radius: var(--_radius);
      font-family: inherit;
      font: var(--gds-sys-text-detail-m-book);
      gap: var(--gds-sys-space-xs);
      outline-color: transparent;
      outline-offset: var(--gds-sys-space-4xs);
      outline-style: solid;
      outline-width: var(--gds-sys-space-4xs);
      padding-block: var(--gds-sys-space-s);
      padding-inline: var(--gds-sys-space-xl);
      position: relative;
      text-decoration: none;
      transition-property: color, border-color, background;
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
            var(--gds-sys-color-l3-neutral-03),
            var(--gds-sys-color-state-neutral-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-neutral-03),
          var(--gds-sys-color-state-neutral-02)
        );
      }

      &:not(.circle, .wrapped) slot:not([name]) {
        display: block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        min-width: 0;
      }

      &:not(.wrapped) {
        block-size: var(--_block-size);
      }

      &.wrapped {
        min-block-size: var(--_block-size);
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
      font: var(--gds-sys-text-detail-xs-book);
      padding-inline: var(--gds-sys-space-s);
      padding-block: 0;
    }

    :host([size='small']) .button {
      --_block-size: var(--gds-sys-space-2xl);
      font: var(--gds-sys-text-detail-s-book);
      gap: var(--gds-sys-space-3xs);
      padding-block: var(--gds-sys-space-3xs);
      padding-inline: var(--gds-sys-space-m);
    }

    :host([size='medium']) .button {
      --_block-size: var(--gds-sys-space-3xl);
      gap: var(--gds-sys-space-2xs);
      font: var(--gds-sys-text-detail-m-book);
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
      color: var(--gds-sys-color-content-neutral-05);

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
      color: var(--gds-sys-color-content-neutral-05);

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
      color: var(--gds-sys-color-content-neutral-05);

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
`;const Z=["aria-label","aria-haspopup","aria-expanded","gds-tabindex"],j=(F=g.qy,(t,...e)=>{let r=C.get(t);return r||(r=t.map(t=>t.replace(/\n[\s]+</gm,"<")),r.raw=t.raw,C.set(t,r)),F(r,...e)});var F;let U=class extends T.S{constructor(){super(...arguments),(0,o.VK)(this,M),(0,o.VK)(this,A),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.wrapped=!1,this.href="",(0,o.VK)(this,S,!1),(0,o.VK)(this,E,()=>{const t=this._mainSlot?.assignedElements()??[];(0,o.OV)(this,S,1===t.length&&(t[0].tagName.toLowerCase().startsWith("gds-icon")||"icon"===t[0].getAttribute("name"))),this.requestUpdate()}),(0,o.VK)(this,$,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!(0,o.S7)(this,M,_)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),(0,o.VK)(this,O,t=>{if(!(this.disabled||"Space"!==t.code&&"Enter"!==t.key||t.repeat)){const t=this._ripple;t&&t.triggerRipple()}})}focus(t){this._getValidityAnchor()?.focus(t)}click(){this._getValidityAnchor()?.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),h.n.instance.apply(this,"gds-button")}render(){const t={button:!0,circle:(0,o.S7)(this,S),icon:(0,o.S7)(this,S),xs:"xs"===this.size,small:"small"===this.size,large:"large"===this.size,brand:"brand"===this.variant,positive:"positive"===this.variant,negative:"negative"===this.variant,notice:"notice"===this.variant,warning:"warning"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank,wrapped:this.wrapped},e=(0,o.S7)(this,M,_)?c.eu`a`:c.eu`button`;return c.qy`
      <${e}
        class=${(0,a.H)(t)}
        type="${(0,n.J)((0,o.S7)(this,M,_)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||s.s6}
        href=${(0,n.J)((0,o.S7)(this,M,_)?this.href:void 0)}
        target=${(0,n.J)((0,o.S7)(this,M,_)?this.target:void 0)}
        rel=${(0,n.J)((0,o.S7)(this,M,_)?this.rel||(0,o.S7)(this,A,V):void 0)}
        download=${(0,n.J)((0,o.S7)(this,M,_)?this.download:void 0)}
        part="_button"
        @click="${(0,o.S7)(this,$)}"
        @keydown="${(0,o.S7)(this,O)}"
        ${x(t=>"gds-role"===t.name||Z.includes(t.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${(0,o.S7)(this,E)}></slot>
        <slot name="trail"></slot>
        ${(0,l.z)(!this._isUsingTransitionalStyles,()=>j`<gds-ripple part="_ripple"></gds-ripple>`)}
      </${e}>
      `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};S=new WeakMap,M=new WeakSet,_=function(){return this.href.length>0},A=new WeakSet,V=function(){return"_blank"===this.target?"noreferrer noopener":void 0},E=new WeakMap,$=new WeakMap,O=new WeakMap,U.styles=[p.LU,L],U.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,o.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],U.prototype,"disabled",2),(0,o.Cc)([(0,m.F)({selector:".button"})],U.prototype,"justify-content",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],U.prototype,"type",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],U.prototype,"rank",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],U.prototype,"variant",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],U.prototype,"size",2),(0,o.Cc)([(0,i.MZ)()],U.prototype,"label",2),(0,o.Cc)([(0,i.MZ)({attribute:"wrapped",type:Boolean,reflect:!0})],U.prototype,"wrapped",2),(0,o.Cc)([(0,i.MZ)()],U.prototype,"href",2),(0,o.Cc)([(0,i.MZ)()],U.prototype,"target",2),(0,o.Cc)([(0,i.MZ)()],U.prototype,"rel",2),(0,o.Cc)([(0,i.MZ)()],U.prototype,"download",2),(0,o.Cc)([(0,i.P)("slot:not([name])")],U.prototype,"_mainSlot",2),(0,o.Cc)([(0,i.P)(".button")],U.prototype,"_button",2),(0,o.Cc)([(0,i.P)("gds-ripple")],U.prototype,"_ripple",2),(0,o.Cc)([(0,v.L)({attributes:!0,childList:!1,subtree:!1,characterData:!1})],U.prototype,"_attributeChanged",1),U=(0,o.Cc)([(0,b.J)({labelledBy:".button",describedBy:".button",controls:".button"})],U);let q=class extends((0,z.Q8)((0,z.TM)((0,z.lt)(U)))){};q=(0,o.Cc)([(0,g.Y$)("gds-button",{dependsOn:[y]})],q)},8558(t,e,r){r.d(e,{S:()=>l});var o,s=r(745),i=r(4367),a=r(3539),n=r(1374);r(8337).S||function(t){function e(t,e,r="Error"){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",r)}"function"!=typeof t.requestSubmit&&(t.requestSubmit=function(t=null){t?(function(t,r){t instanceof HTMLElement||e(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==t.type||e(TypeError,"The specified element is not a submit button"),t.form==r||e(DOMException,"The specified element is not owned by this form element","NotFoundError")}(t,this),t.click()):((t=document.createElement("input")).type="submit",t.hidden=!0,this.appendChild(t),t.click(),this.removeChild(t))})}(HTMLFormElement.prototype);class l extends a.j{constructor(){super(),(0,s.VK)(this,o,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{(0,s.OV)(this,o,this.attachInternals())}catch(t){(0,s.OV)(this,o,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,e)=>{(0,s.S7)(this,o).validity=t,this.errorMessage=e||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),"function"!=typeof this.attachInternals){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const e=this.invalid;(0,s.S7)(this,o).setValidity({...(0,s.S7)(this,o).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",e),(0,s.S7)(this,o).checkValidity()}get invalid(){return!(0,s.S7)(this,o).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,(0,s.S7)(this,o).setFormValue(t)}get form(){return(0,s.S7)(this,o).form}get validity(){return(0,s.S7)(this,o).validity}get validationMessage(){return(0,s.S7)(this,o).validationMessage}get willValidate(){return(0,s.S7)(this,o).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,e=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=e[1]||this.errorMessage,(0,s.S7)(this,o).setValidity(e[0],e[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),(0,s.S7)(this,o).checkValidity()}reportValidity(){return(0,s.S7)(this,o).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){"string"==typeof this.value?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}_setFormValue(t){(0,s.S7)(this,o).setFormValue(t)}}o=new WeakMap,l.formAssociated=!0,(0,s.Cc)([(0,i.MZ)({attribute:!1})],l.prototype,"validator",2),(0,s.Cc)([(0,i.MZ)({type:Boolean})],l.prototype,"required",2),(0,s.Cc)([(0,i.MZ)({attribute:"error-message"})],l.prototype,"errorMessage",2),(0,s.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],l.prototype,"invalid",1),(0,s.Cc)([(0,i.MZ)()],l.prototype,"label",2),(0,s.Cc)([(0,i.MZ)()],l.prototype,"value",1),(0,s.Cc)([(0,i.MZ)({reflect:!0})],l.prototype,"name",2),(0,s.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],l.prototype,"disabled",2),(0,s.Cc)([(0,n.w)("value",{waitUntilFirstUpdate:!0})],l.prototype,"__handleValueChange",1)},3832(t,e,r){r.d(e,{M:()=>u});var o=r(745),s=r(9443),i=r(4367),a=r(7639),n=r(3539),l=r(5073),c=r(9399),d=r(4508),g=r(4987),p=s.AH`
  @layer icon;

  @layer icon {
    :host {
      display: inline-block;
    }

    svg {
      display: block;
      height: 1lh;
      width: auto;
    }
  }
`;class u extends((0,g.TM)((0,g.lt)(n.j))){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([t,e])=>void 0!==e).map(([t,e])=>`${t}="${e}"`).join("\n      ")}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const r=`\n      <svg ${this.generateAttributesString(t)}>\n        ${e}\n      </svg>\n    `;return s.qy`${(0,a._)(r)}`}}u.styles=[l.LU,p],(0,o.Cc)([(0,c.F)({...d.Sc,property:"height",selector:"svg"})],u.prototype,"size",2),(0,o.Cc)([(0,i.MZ)({type:Boolean})],u.prototype,"solid",2),(0,o.Cc)([(0,i.MZ)({type:Number})],u.prototype,"stroke",2),(0,o.Cc)([(0,i.MZ)()],u.prototype,"level",2),(0,o.Cc)([(0,c.F)((0,d.T$)("content"))],u.prototype,"color",2),(0,o.Cc)([(0,i.MZ)({type:String})],u.prototype,"label",2)},1239(t,e,r){r.d(e,{J:()=>d}),r(745);const o=["label"],s=Symbol("observeAttrHandlers"),i=Symbol("observeAttrPatched");function a(t){const e="activeDescendant"===t,r=t.toLowerCase(),o=e?"Element":"Elements";return{ariaAttr:`aria-${r}`,gdsAriaAttr:`gds-aria-${r}`,property:`aria${t.charAt(0).toUpperCase()}${t.slice(1)}${o}`,type:e?"single":"list"}}const n=Symbol("ariaForwardingStore"),l=Symbol("ariaForwardingInit");function c(t,e,r,o="list"){const s=t;if(null===r)return void(s[e]=null);if("single"===o)return void(s[e]=Array.isArray(r)?r[0]??null:r);const i=s[e],a=null===i?[]:Array.isArray(i)?i:[i],n=Array.isArray(r)?r:[r],l=Array.from(new Set([...a,...n]));s[e]=l.length>0?l:null}function d(t){const e=[],r=[];for(const[s,i]of Object.entries(t))i&&(o.includes(s)?r.push({key:s,selector:i}):e.push({key:s,selector:i}));return function(o){const d=o.prototype.connectedCallback;class g extends o{connectedCallback(){d?.call(this),function(t){if(!t[l]){t[l]=!0,t[n]={};for(const{key:t}of e){const e=a(t).property;Object.getOwnPropertyDescriptor(g.prototype,e)||Object.defineProperty(g.prototype,e,{get(){return this[n]?.[e]??null},set(r){this[n]||(this[n]={}),this[n][e]=r,y(this,t,r)},configurable:!0,enumerable:!0})}t.updateComplete.then(()=>{for(const{key:r}of e){const e=a(r),o=t.getAttribute(e.gdsAriaAttr),s=t.getAttribute(e.ariaAttr),i=o??s;i&&u(t,r,i)}for(const{key:e}of r){const r=t.getAttribute(`gds-aria-${e}`),o=t.getAttribute(`aria-${e}`),s=r??o;s&&h(t,e,s)}})}}(this)}}const p={};for(const{key:t}of e){const e=a(t),r=(e,r,o)=>{u(e,t,o)};p[e.ariaAttr]=r,p[e.gdsAriaAttr]=r}for(const{key:t}of r){const e=`gds-aria-${t}`,r=(e,r,o)=>{h(e,t,o)};p[`aria-${t}`]=r,p[e]=r}function u(e,r,o){const s=a(r),i=t[r];i&&e.updateComplete.then(()=>{const t=e.shadowRoot?.querySelectorAll(i);if(!t||0===t.length)return;if(!o)return void t.forEach(t=>c(t,s.property,null,s.type));const r=o.trim().split(/\s+/).map(t=>e.ownerDocument.getElementById(t)).filter(t=>null!==t),a="single"===s.type?r[0]??null:r.length>0?r:null;t.forEach(t=>c(t,s.property,a,s.type))})}function y(e,r,o){const s=t[r];if(!s)return;const i=a(r);e.updateComplete.then(()=>{const t=e.shadowRoot?.querySelectorAll(s);t&&0!==t.length&&t.forEach(t=>c(t,i.property,o,i.type))})}function h(e,r,o){const s=t[r];if(!s)return;const i=`aria-${r}`;e.updateComplete.then(()=>{const t=e.shadowRoot?.querySelectorAll(s);t&&0!==t.length&&t.forEach(t=>{o?t.setAttribute(i,o):t.removeAttribute(i)})})}return function(t,e){if(!Object.prototype.hasOwnProperty.call(t,s)){const e=Object.getPrototypeOf(t)?.[s];t[s]=new Map(e)}for(const[r,o]of Object.entries(e))t[s].set(r,o);if(t[i])return;t[i]=!0;const r=Object.getPrototypeOf(t);Object.defineProperty(t,"observedAttributes",{get(){let t=[],e=r;for(;e;){const r=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(r?.get){t=r.get.call(this);break}e=Object.getPrototypeOf(e)}const o=this[s],i=Array.from(o?.keys()??[]);return[...t,...i]},configurable:!0,enumerable:!0});const o=Object.getPrototypeOf(t.prototype);Object.defineProperty(t.prototype,"attributeChangedCallback",{value:function(t,e,r){const i=this.constructor[s]?.get(t);i?i(this,e,r):o.attributeChangedCallback?.call(this,t,e,r)},configurable:!0,writable:!0})}(g,p),g}}},685(t,e,r){function o(t={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(e,r,o)=>{let s;const i=e.connectedCallback,a=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),s=new MutationObserver((t,e)=>{o.value?.call(this)}),s.observe(this,t)},e.disconnectedCallback=function(){a?.call(this),s.disconnect()}}}r.d(e,{L:()=>o}),r(745)},1374(t,e,r){function o(t,e){const r={waitUntilFirstUpdate:!1,...e};return(e,o,s)=>{const{update:i}=e,a=Array.isArray(t)?t:[t];e.update=function(t){a.forEach(e=>{const o=e;if(t.has(o)){const e=t.get(o),i=this[o];e!==i&&(r.waitUntilFirstUpdate&&!this.hasUpdated||s.value?.call(this,e,i))}}),i.call(this,t)}}}r.d(e,{w:()=>o}),r(745)},4457(t,e,r){r.d(e,{n:()=>d});var o,s,i,a=r(745),n=r(9443),l=r(1569),c=r(7526);o=new WeakMap,s=new WeakMap,i=new WeakMap;let d=class t{constructor(){(0,a.VK)(this,o,new Map),(0,a.VK)(this,s,new Map),(0,a.VK)(this,i,!(0,l.k)())}static get instance(){return globalThis.__gdsTransitionalStyles?.[c.M]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[c.M]:new t}),globalThis.__gdsTransitionalStyles[c.M]}apply(t,e){if(!t.shadowRoot)return;const r=(0,a.S7)(this,o).get(e);r&&((0,a.S7)(this,s).set(e,t),this.applyToElement(e,r))}applyToElement(t,e){const r=(0,a.S7)(this,s).get(t);if(!r||!r.shadowRoot)return;const o=()=>{r._dynamicStylesController.clearInitial(),r._dynamicStylesController.inject("t-styles",(0,n.iz)(e)),r._isUsingTransitionalStyles=!0},i=()=>{r._isUsingTransitionalStyles=!1,r._dynamicStylesController.clear("t-styles"),r._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let c=r.getRootNode(),d=r.closest(l);for(;null===d&&c!==document;)d=c.host?.closest(l),c=c.host?.getRootNode();if(d){const t=d,e=()=>{"2023"===t.designVersion?i():o()};if(t.addEventListener("gds-design-version-changed",e),r.addEventListener("gds-element-disconnected",()=>t.removeEventListener("gds-design-version-changed",e)),"2023"===t.designVersion)return void i()}o()}register(t,e){let r=e;(0,a.S7)(this,i)&&(r=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${e}`),(0,a.S7)(this,o).set(t,r),this.applyToElement(t,r)}}}}]);
//# sourceMappingURL=1114.075ace0f.iframe.bundle.js.map
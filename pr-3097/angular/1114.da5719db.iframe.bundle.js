"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[1114],{7595(t,e,o){o.d(e,{t:()=>U});var r=o(745),s=o(9443),i=o(4367),a=o(3578),n=o(4652),l=o(505),c=o(911),d=o(3539),g=o(7526),p=o(5073),u=s.AH`
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
`;let y=class extends d.j{constructor(){super(...arguments),this.onmousedown=t=>{this.triggerRipple(t.clientX,t.clientY)}}render(){return s.qy`<div></div>`}triggerRipple(t,e){const o=this._rippleEl,r=this.getBoundingClientRect(),s=void 0!==t?t-r.left:r.width/2,i=void 0!==e?e-r.top:r.height/2;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${i}px`),this.style.setProperty("--gds-ripple-left",`${s}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}};y.styles=[p.LU,u],(0,r.Cc)([(0,i.P)("div")],y.prototype,"_rippleEl",2),y=(0,r.Cc)([(0,g.Y$)("gds-ripple")],y);var h=o(4457),v=o(685),b=o(1239),m=o(9399),f=o(4469),k=o(9295);class w extends f.WL{constructor(t){if(super(t),t.type!==f.OA.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return k.s6}update(t,[e]){const o=t.element,r=t.options?.host;Array.from(r.attributes).forEach(t=>{if(e(t)){const e=t.name.replace("gds-","");o.setAttribute(e,t.value),"tabindex"===e&&(o.tabIndex=Number(t.value))}})}}const x=(0,f.u$)(w),S=new WeakMap;var C,M,_,A,V,E,$,T,z=o(4987),O=o(8558),j=s.AH`
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
`;const L=["aria-label","aria-haspopup","aria-expanded","gds-tabindex"],Z=(F=g.qy,(t,...e)=>{let o=S.get(t);return o||(o=t.map(t=>t.replace(/\n[\s]+</gm,"<")),o.raw=t.raw,S.set(t,o)),F(o,...e)});var F;let q=class extends O.S{constructor(){super(...arguments),(0,r.VK)(this,M),(0,r.VK)(this,A),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.wrapped=!1,this.href="",(0,r.VK)(this,C,!1),(0,r.VK)(this,E,()=>{const t=this._mainSlot?.assignedElements()??[];(0,r.OV)(this,C,1===t.length&&(t[0].tagName.toLowerCase().startsWith("gds-icon")||"icon"===t[0].getAttribute("name"))),this.requestUpdate()}),(0,r.VK)(this,$,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!(0,r.S7)(this,M,_)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),(0,r.VK)(this,T,t=>{if(!(this.disabled||"Space"!==t.code&&"Enter"!==t.key||t.repeat)){const t=this._ripple;t&&t.triggerRipple()}})}focus(t){this._getValidityAnchor()?.focus(t)}click(){this._getValidityAnchor()?.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),h.n.instance.apply(this,"gds-button")}render(){const t={button:!0,circle:(0,r.S7)(this,C),icon:(0,r.S7)(this,C),xs:"xs"===this.size,small:"small"===this.size,large:"large"===this.size,brand:"brand"===this.variant,positive:"positive"===this.variant,negative:"negative"===this.variant,notice:"notice"===this.variant,warning:"warning"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank,wrapped:this.wrapped},e=(0,r.S7)(this,M,_)?c.eu`a`:c.eu`button`;return c.qy`
      <${e}
        class=${(0,a.H)(t)}
        type="${(0,n.J)((0,r.S7)(this,M,_)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||s.s6}
        href=${(0,n.J)((0,r.S7)(this,M,_)?this.href:void 0)}
        target=${(0,n.J)((0,r.S7)(this,M,_)?this.target:void 0)}
        rel=${(0,n.J)((0,r.S7)(this,M,_)?this.rel||(0,r.S7)(this,A,V):void 0)}
        download=${(0,n.J)((0,r.S7)(this,M,_)?this.download:void 0)}
        part="_button"
        @click="${(0,r.S7)(this,$)}"
        @keydown="${(0,r.S7)(this,T)}"
        ${x(t=>"gds-role"===t.name||L.includes(t.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${(0,r.S7)(this,E)}></slot>
        <slot name="trail"></slot>
        ${(0,l.z)(!this._isUsingTransitionalStyles,()=>Z`<gds-ripple part="_ripple"></gds-ripple>`)}
      </${e}>
      `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};C=new WeakMap,M=new WeakSet,_=function(){return this.href.length>0},A=new WeakSet,V=function(){return"_blank"===this.target?"noreferrer noopener":void 0},E=new WeakMap,$=new WeakMap,T=new WeakMap,q.styles=[p.LU,j],q.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,r.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],q.prototype,"disabled",2),(0,r.Cc)([(0,m.F)({selector:".button"})],q.prototype,"justify-content",2),(0,r.Cc)([(0,i.MZ)({reflect:!0})],q.prototype,"type",2),(0,r.Cc)([(0,i.MZ)({reflect:!0})],q.prototype,"rank",2),(0,r.Cc)([(0,i.MZ)({reflect:!0})],q.prototype,"variant",2),(0,r.Cc)([(0,i.MZ)({reflect:!0})],q.prototype,"size",2),(0,r.Cc)([(0,i.MZ)()],q.prototype,"label",2),(0,r.Cc)([(0,i.MZ)({attribute:"wrapped",type:Boolean,reflect:!0})],q.prototype,"wrapped",2),(0,r.Cc)([(0,i.MZ)()],q.prototype,"href",2),(0,r.Cc)([(0,i.MZ)()],q.prototype,"target",2),(0,r.Cc)([(0,i.MZ)()],q.prototype,"rel",2),(0,r.Cc)([(0,i.MZ)()],q.prototype,"download",2),(0,r.Cc)([(0,i.P)("slot:not([name])")],q.prototype,"_mainSlot",2),(0,r.Cc)([(0,i.P)(".button")],q.prototype,"_button",2),(0,r.Cc)([(0,i.P)("gds-ripple")],q.prototype,"_ripple",2),(0,r.Cc)([(0,v.L)({attributes:!0,childList:!1,subtree:!1,characterData:!1})],q.prototype,"_attributeChanged",1),q=(0,r.Cc)([(0,b.J)({labelledBy:".button",describedBy:".button",controls:".button"})],q);let U=class extends((0,z.Q8)((0,z.TM)((0,z.lt)(q)))){};U=(0,r.Cc)([(0,g.Y$)("gds-button",{dependsOn:[y]})],U)},8558(t,e,o){o.d(e,{S:()=>l});var r,s=o(745),i=o(4367),a=o(3539),n=o(1374);o(8337).S||function(t){function e(t,e,o="Error"){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",o)}"function"!=typeof t.requestSubmit&&(t.requestSubmit=function(t=null){t?(function(t,o){t instanceof HTMLElement||e(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==t.type||e(TypeError,"The specified element is not a submit button"),t.form==o||e(DOMException,"The specified element is not owned by this form element","NotFoundError")}(t,this),t.click()):((t=document.createElement("input")).type="submit",t.hidden=!0,this.appendChild(t),t.click(),this.removeChild(t))})}(HTMLFormElement.prototype);class l extends a.j{constructor(){super(),(0,s.VK)(this,r,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{(0,s.OV)(this,r,this.attachInternals())}catch(t){(0,s.OV)(this,r,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,e)=>{(0,s.S7)(this,r).validity=t,this.errorMessage=e||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),"function"!=typeof this.attachInternals){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const e=this.invalid;(0,s.S7)(this,r).setValidity({...(0,s.S7)(this,r).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",e),(0,s.S7)(this,r).checkValidity()}get invalid(){return!(0,s.S7)(this,r).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,(0,s.S7)(this,r).setFormValue(t)}get form(){return(0,s.S7)(this,r).form}get validity(){return(0,s.S7)(this,r).validity}get validationMessage(){return(0,s.S7)(this,r).validationMessage}get willValidate(){return(0,s.S7)(this,r).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,e=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=e[1]||this.errorMessage,(0,s.S7)(this,r).setValidity(e[0],e[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),(0,s.S7)(this,r).checkValidity()}reportValidity(){return(0,s.S7)(this,r).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){"string"==typeof this.value?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}_setFormValue(t){(0,s.S7)(this,r).setFormValue(t)}}r=new WeakMap,l.formAssociated=!0,(0,s.Cc)([(0,i.MZ)({attribute:!1})],l.prototype,"validator",2),(0,s.Cc)([(0,i.MZ)({type:Boolean})],l.prototype,"required",2),(0,s.Cc)([(0,i.MZ)({attribute:"error-message"})],l.prototype,"errorMessage",2),(0,s.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],l.prototype,"invalid",1),(0,s.Cc)([(0,i.MZ)()],l.prototype,"label",2),(0,s.Cc)([(0,i.MZ)()],l.prototype,"value",1),(0,s.Cc)([(0,i.MZ)({reflect:!0})],l.prototype,"name",2),(0,s.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],l.prototype,"disabled",2),(0,s.Cc)([(0,n.w)("value",{waitUntilFirstUpdate:!0})],l.prototype,"__handleValueChange",1)},3832(t,e,o){o.d(e,{M:()=>u});var r=o(745),s=o(9443),i=o(4367),a=o(7639),n=o(3539),l=o(5073),c=o(9399),d=o(4508),g=o(4987),p=s.AH`
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
`;class u extends((0,g.TM)((0,g.lt)(n.j))){constructor(){super(...arguments),this.solid=!1,this.level="2",this.label=""}get svgAttributes(){const t={fill:"none",xmlns:"http://www.w3.org/2000/svg",viewBox:this.constructor._viewBox,part:"icon"};return this.label?{...t,"aria-label":this.label}:{...t,role:"presentation"}}get svgContent(){const t=this.constructor;return this.solid?t._solidSVG:t._regularSVG}applyStroke(t){return this.stroke?t.replace(/<(path|rect|circle|ellipse|line|polyline|polygon)/g,`<$1 stroke-width="${this.stroke}"`):t}generateAttributesString(t){return Object.entries(t).filter(([t,e])=>void 0!==e).map(([t,e])=>`${t}="${e}"`).join("\n      ")}render(){const t=this.svgAttributes;let e=this.svgContent||"";this.stroke&&(e=this.applyStroke(e));const o=`\n      <svg ${this.generateAttributesString(t)}>\n        ${e}\n      </svg>\n    `;return s.qy`${(0,a._)(o)}`}}u.styles=[l.LU,p],(0,r.Cc)([(0,c.F)({...d.Sc,property:"height",selector:"svg"})],u.prototype,"size",2),(0,r.Cc)([(0,i.MZ)({type:Boolean})],u.prototype,"solid",2),(0,r.Cc)([(0,i.MZ)({type:Number})],u.prototype,"stroke",2),(0,r.Cc)([(0,i.MZ)()],u.prototype,"level",2),(0,r.Cc)([(0,c.F)((0,d.T$)("content"))],u.prototype,"color",2),(0,r.Cc)([(0,i.MZ)({type:String})],u.prototype,"label",2)},1239(t,e,o){o.d(e,{J:()=>d}),o(745);const r=["label"],s=Symbol("observeAttrHandlers"),i=Symbol("observeAttrPatched");function a(t){const e="activeDescendant"===t,o=t.toLowerCase(),r=e?"Element":"Elements";return{ariaAttr:`aria-${o}`,gdsAriaAttr:`gds-aria-${o}`,property:`aria${t.charAt(0).toUpperCase()}${t.slice(1)}${r}`,type:e?"single":"list"}}const n=Symbol("ariaForwardingStore"),l=Symbol("ariaForwardingInit");function c(t,e,o,r="list"){const s=t;if(null===o)return void(s[e]=null);if("single"===r)return void(s[e]=Array.isArray(o)?o[0]??null:o);const i=s[e],a=null===i?[]:Array.isArray(i)?i:[i],n=Array.isArray(o)?o:[o],l=Array.from(new Set([...a,...n]));s[e]=l.length>0?l:null}function d(t){const e=[],o=[];for(const[s,i]of Object.entries(t))i&&(r.includes(s)?o.push({key:s,selector:i}):e.push({key:s,selector:i}));return function(r){const d=r.prototype.connectedCallback;class g extends r{connectedCallback(){d?.call(this),function(t){if(!t[l]){t[l]=!0,t[n]={};for(const{key:t}of e){const e=a(t).property;Object.getOwnPropertyDescriptor(g.prototype,e)||Object.defineProperty(g.prototype,e,{get(){return this[n]?.[e]??null},set(o){this[n]||(this[n]={}),this[n][e]=o,y(this,t,o)},configurable:!0,enumerable:!0})}t.updateComplete.then(()=>{for(const{key:o}of e){const e=a(o),r=t.getAttribute(e.gdsAriaAttr),s=t.getAttribute(e.ariaAttr),i=r??s;i&&u(t,o,i)}for(const{key:e}of o){const o=t.getAttribute(`gds-aria-${e}`),r=t.getAttribute(`aria-${e}`),s=o??r;s&&h(t,e,s)}})}}(this)}}const p={};for(const{key:t}of e){const e=a(t),o=(e,o,r)=>{u(e,t,r)};p[e.ariaAttr]=o,p[e.gdsAriaAttr]=o}for(const{key:t}of o){const e=`gds-aria-${t}`,o=(e,o,r)=>{h(e,t,r)};p[`aria-${t}`]=o,p[e]=o}function u(e,o,r){const s=a(o),i=t[o];i&&e.updateComplete.then(()=>{const t=e.shadowRoot?.querySelectorAll(i);if(!t||0===t.length)return;if(!r)return void t.forEach(t=>c(t,s.property,null,s.type));const o=r.trim().split(/\s+/).map(t=>e.ownerDocument.getElementById(t)).filter(t=>null!==t),a="single"===s.type?o[0]??null:o.length>0?o:null;t.forEach(t=>c(t,s.property,a,s.type))})}function y(e,o,r){const s=t[o];if(!s)return;const i=a(o);e.updateComplete.then(()=>{const t=e.shadowRoot?.querySelectorAll(s);t&&0!==t.length&&t.forEach(t=>c(t,i.property,r,i.type))})}function h(e,o,r){const s=t[o];if(!s)return;const i=`aria-${o}`;e.updateComplete.then(()=>{const t=e.shadowRoot?.querySelectorAll(s);t&&0!==t.length&&t.forEach(t=>{r?t.setAttribute(i,r):t.removeAttribute(i)})})}return function(t,e){if(!Object.prototype.hasOwnProperty.call(t,s)){const e=Object.getPrototypeOf(t)?.[s];t[s]=new Map(e)}for(const[o,r]of Object.entries(e))t[s].set(o,r);if(t[i])return;t[i]=!0;const o=Object.getPrototypeOf(t);Object.defineProperty(t,"observedAttributes",{get(){let t=[],e=o;for(;e;){const o=Object.getOwnPropertyDescriptor(e,"observedAttributes");if(o?.get){t=o.get.call(this);break}e=Object.getPrototypeOf(e)}const r=this[s],i=Array.from(r?.keys()??[]);return[...t,...i]},configurable:!0,enumerable:!0});const r=Object.getPrototypeOf(t.prototype);Object.defineProperty(t.prototype,"attributeChangedCallback",{value:function(t,e,o){const i=this.constructor[s]?.get(t);i?i(this,e,o):r.attributeChangedCallback?.call(this,t,e,o)},configurable:!0,writable:!0})}(g,p),g}}},685(t,e,o){function r(t={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(e,o,r)=>{let s;const i=e.connectedCallback,a=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),s=new MutationObserver((t,e)=>{r.value?.call(this)}),s.observe(this,t)},e.disconnectedCallback=function(){a?.call(this),s.disconnect()}}}o.d(e,{L:()=>r}),o(745)},1374(t,e,o){function r(t,e){const o={waitUntilFirstUpdate:!1,...e};return(e,r,s)=>{const{update:i}=e,a=Array.isArray(t)?t:[t];e.update=function(t){a.forEach(e=>{const r=e;if(t.has(r)){const e=t.get(r),i=this[r];e!==i&&(o.waitUntilFirstUpdate&&!this.hasUpdated||s.value?.call(this,e,i))}}),i.call(this,t)}}}o.d(e,{w:()=>r}),o(745)},4457(t,e,o){o.d(e,{n:()=>u});var r,s,i,a,n,l,c=o(745),d=o(9443),g=o(1569),p=o(7526);r=new WeakMap,s=new WeakMap,i=new WeakMap,a=new WeakMap,n=new WeakSet,l=function(t,e,o){const r="[gds-element=gds-theme]";let s=t.getRootNode(),i=t.closest(r);for(;null===i&&s!==document;)i=s.host?.closest(r),s=s.host?.getRootNode();if(i){const r=i,s=()=>{"2023"===r.designVersion?o():e()};if(r.addEventListener("gds-design-version-changed",s),t.addEventListener("gds-element-disconnected",()=>r.removeEventListener("gds-design-version-changed",s)),"2023"===r.designVersion)return void o()}e()};let u=class t{constructor(){(0,c.VK)(this,n),(0,c.VK)(this,r,new Map),(0,c.VK)(this,s,new Map),(0,c.VK)(this,i,new Map),(0,c.VK)(this,a,!(0,g.k)())}static get instance(){return globalThis.__gdsTransitionalStyles?.[p.M]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[p.M]:new t}),globalThis.__gdsTransitionalStyles[p.M]}apply(t,e){if(!t.shadowRoot)return;const o=(0,c.S7)(this,r).get(e);o&&((0,c.S7)(this,s).set(e,t),this.applyToElement(e,o))}applyScoped(t,e,o){if(!t.shadowRoot)return;const s=(0,c.S7)(this,r).get(e);s&&((0,c.S7)(this,i).set(e,{element:t,injectKey:o}),this.applyScopedToElement(e,s))}applyScopedToElement(t,e){const o=(0,c.S7)(this,i).get(t);if(!o||!o.element.shadowRoot)return;const{element:r,injectKey:s}=o;(0,c.jq)(this,n,l).call(this,r,()=>r._dynamicStylesController.inject(s,(0,d.iz)(e)),()=>r._dynamicStylesController.clear(s))}applyToElement(t,e){const o=(0,c.S7)(this,s).get(t);o&&o.shadowRoot&&(0,c.jq)(this,n,l).call(this,o,()=>{o._dynamicStylesController.clearInitial(),o._dynamicStylesController.inject("t-styles",(0,d.iz)(e)),o._isUsingTransitionalStyles=!0},()=>{o._isUsingTransitionalStyles=!1,o._dynamicStylesController.clear("t-styles"),o._dynamicStylesController.restoreInitial()})}register(t,e){let o=e;(0,c.S7)(this,a)&&(o=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${e}`),(0,c.S7)(this,r).set(t,o),this.applyToElement(t,o),this.applyScopedToElement(t,o)}}}}]);
//# sourceMappingURL=1114.da5719db.iframe.bundle.js.map
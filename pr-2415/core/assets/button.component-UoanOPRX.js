var $=e=>{throw TypeError(e)};var C=(e,o,r)=>o.has(e)||$("Cannot "+r);var i=(e,o,r)=>(C(e,o,"read from private field"),r?r.call(e):o.get(e)),m=(e,o,r)=>o.has(e)?$("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(e):o.set(e,r),h=(e,o,r,t)=>(C(e,o,"write to private field"),t?t.call(e,r):o.set(e,r),r);import{i as A,x as q,E as O}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{a as V}from"./query-p8xgzTDt.js";import{e as j,o as f}from"./if-defined-BAXgs-ZI.js";import{n as U}from"./when-BR7zwNJC.js";import{i as M,u as R}from"./static-B8S6DEnV.js";import{G as L,g as S,h as B}from"./gds-element-DTROifYq.js";import{t as T,i as H}from"./tokens.style-DPGnhRAf.js";import{T as W}from"./transitional-styles-sTtbTfzJ.js";import{o as G}from"./observe-light-dom-CmJPHUQ4.js";import{w as I,b as N,d as X,s as Y}from"./declarative-layout-mixins-DFPXvh_g.js";import{e as J,i as K,t as Q}from"./directive-CF8sV3Lr.js";import{w as Z}from"./watch-tFciLXSI.js";const rr=A`
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
`;var tr=Object.defineProperty,or=Object.getOwnPropertyDescriptor,D=(e,o,r,t)=>{for(var s=t>1?void 0:t?or(o,r):o,c=e.length-1,d;c>=0;c--)(d=e[c])&&(s=(t?d(o,r,s):d(s))||s);return t&&s&&tr(o,r,s),s};let k=class extends L{constructor(){super(...arguments),this.onmousedown=e=>{const r=e.target.getBoundingClientRect(),t=this._rippleEl;t&&(t.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-r.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-r.left}px`),setTimeout(()=>{t.classList.add("gds-ripple-effect")},20))}}render(){return q`<div></div>`}};k.styles=[T,rr];D([V("div")],k.prototype,"_rippleEl",2);k=D([S("gds-ripple")],k);class sr extends K{constructor(o){if(super(o),o.type!==Q.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(o){return O}update(o,[r]){var c;const t=o.element,s=(c=o.options)==null?void 0:c.host;Array.from(s.attributes).forEach(d=>{r(d)&&t.setAttribute(d.name.replace("gds-",""),d.value)})}}const er=J(sr),z=new WeakMap;function ir(e){return(o,...r)=>{let t=z.get(o);return t||(t=o.map(s=>s.replace(/\n[\s]+</gm,"<")),t.raw=o.raw,z.set(o,t)),e(t,...r)}}H||function(e){if(typeof e.requestSubmit=="function")return;e.requestSubmit=function(t=null){t?(o(t,this),t.click()):(t=document.createElement("input"),t.type="submit",t.hidden=!0,this.appendChild(t),t.click(),this.removeChild(t))};function o(t,s){t instanceof HTMLElement||r(TypeError,"parameter 1 is not of type 'HTMLElement'"),t.type=="submit"||r(TypeError,"The specified element is not a submit button"),t.form==s||r(DOMException,"The specified element is not owned by this form element","NotFoundError")}function r(t,s,c="Error"){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+s+".",c)}}(HTMLFormElement.prototype);var ar=Object.defineProperty,nr=Object.getOwnPropertyDescriptor,u=(e,o,r,t)=>{for(var s=t>1?void 0:t?nr(o,r):o,c=e.length-1,d;c>=0;c--)(d=e[c])&&(s=(t?d(o,r,s):d(s))||s);return t&&s&&ar(o,r,s),s},a;const E=class E extends L{constructor(){super();m(this,a);this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{h(this,a,this.attachInternals())}catch{h(this,a,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,s)=>{i(this,a).validity=t,this.errorMessage=s||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const r=this.closest("form");r&&(r.addEventListener("submit",this._handleFormSubmit.bind(this)),r.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(r){const t=this.invalid;i(this,a).setValidity({...i(this,a).validity,customError:r,valid:!r},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),i(this,a).checkValidity()}get invalid(){return!i(this,a).validity.valid}get value(){return this._internalValue}set value(r){this._internalValue=r,i(this,a).setFormValue(r)}get form(){return i(this,a).form}get validity(){return i(this,a).validity}get validationMessage(){return i(this,a).validationMessage}get willValidate(){return i(this,a).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,s=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=s[1]||this.errorMessage,i(this,a).setValidity(s[0],s[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),i(this,a).checkValidity()}reportValidity(){return i(this,a).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(r){r==null||r.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(r){this.checkValidity(),this.validity.valid||r.preventDefault()}};a=new WeakMap,E.formAssociated=!0;let v=E;u([n({attribute:!1})],v.prototype,"validator",2);u([n({type:Boolean})],v.prototype,"required",2);u([n({attribute:"error-message"})],v.prototype,"errorMessage",2);u([n({type:Boolean,reflect:!0})],v.prototype,"invalid",1);u([n()],v.prototype,"label",2);u([n()],v.prototype,"value",1);u([n({reflect:!0})],v.prototype,"name",2);u([n({type:Boolean,reflect:!0})],v.prototype,"disabled",2);u([Z("value",{waitUntilFirstUpdate:!0})],v.prototype,"__handleValueChange",1);const lr=A`
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
`;var cr=Object.defineProperty,dr=Object.getOwnPropertyDescriptor,g=(e,o,r,t)=>{for(var s=t>1?void 0:t?dr(o,r):o,c=e.length-1,d;c>=0;c--)(d=e[c])&&(s=(t?d(o,r,s):d(s))||s);return t&&s&&cr(o,r,s),s};const gr=["aria-label","aria-haspopup","aria-expanded"],pr=ir(B);var b,p,y,F,x,w;const _=class _ extends v{constructor(){super(...arguments);m(this,p);m(this,b);m(this,x);m(this,w);this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",h(this,b,!1),h(this,x,()=>{var t;const r=((t=this._mainSlot)==null?void 0:t.assignedElements())??[];h(this,b,r.length===1&&(r[0].tagName.toLowerCase().startsWith("gds-icon")||r[0].getAttribute("name")==="icon")),this.requestUpdate()}),h(this,w,r=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:r}),this.form&&!i(this,p,y)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}focus(r){var t;(t=this._getValidityAnchor())==null||t.focus(r)}click(){var r;(r=this._getValidityAnchor())==null||r.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),W.instance.apply(this,"gds-button")}render(){const r={button:!0,circle:i(this,b),icon:i(this,b),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=i(this,p,y)?M`a`:M`button`;return R`
      <${t}
        class=${j(r)}
        type="${f(i(this,p,y)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||O}
        href=${f(i(this,p,y)?this.href:void 0)}
        target=${f(i(this,p,y)?this.target:void 0)}
        rel=${f(i(this,p,y)?this.rel||i(this,p,F):void 0)}
        download=${f(i(this,p,y)?this.download:void 0)}
        part="_button"
        @click="${i(this,w)}"
        ${er(s=>s.name.startsWith("gds-aria")||s.name==="gds-role"||gr.includes(s.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${i(this,x)}></slot>
        <slot name="trail"></slot>
        ${U(!this._isUsingTransitionalStyles,()=>pr`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${t}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};b=new WeakMap,p=new WeakSet,y=function(){return this.href.length>0},F=function(){return this.target==="_blank"?"noreferrer noopener":void 0},x=new WeakMap,w=new WeakMap,_.styles=[T,lr],_.shadowRootOptions={mode:"open",delegatesFocus:!0};let l=_;g([n({type:Boolean,reflect:!0})],l.prototype,"disabled",2);g([Y({selector:".button"})],l.prototype,"justify-content",2);g([n({reflect:!0})],l.prototype,"type",2);g([n({reflect:!0})],l.prototype,"rank",2);g([n({reflect:!0})],l.prototype,"variant",2);g([n({reflect:!0})],l.prototype,"size",2);g([n()],l.prototype,"label",2);g([n()],l.prototype,"href",2);g([n()],l.prototype,"target",2);g([n()],l.prototype,"rel",2);g([n()],l.prototype,"download",2);g([V("slot:not([name])")],l.prototype,"_mainSlot",2);g([V(".button")],l.prototype,"_button",2);g([G({attributes:!0,childList:!1,subtree:!1,characterData:!1})],l.prototype,"_attributeChanged",1);let P=class extends I(N(X(l))){};P=g([S("gds-button",{dependsOn:[k]})],P);export{P as G,v as a};

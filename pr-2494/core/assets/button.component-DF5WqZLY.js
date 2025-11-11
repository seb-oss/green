var C=s=>{throw TypeError(s)};var M=(s,o,r)=>o.has(s)||C("Cannot "+r);var i=(s,o,r)=>(M(s,o,"read from private field"),r?r.call(s):o.get(s)),b=(s,o,r)=>o.has(s)?C("Cannot add the same private member more than once"):o instanceof WeakSet?o.add(s):o.set(s,r),y=(s,o,r,t)=>(M(s,o,"write to private field"),t?t.call(s,r):o.set(s,r),r);import{i as O,x as R,E as S}from"./lit-element-Bx14lxc-.js";import{n as c}from"./Reflect-DJ7r0WLU.js";import{a as E}from"./query-p8xgzTDt.js";import{e as j}from"./class-map-CXsQwv0r.js";import{o as f}from"./if-defined-CVqwUuaf.js";import{n as U}from"./when-BR7zwNJC.js";import{i as z,u as B}from"./static-B8S6DEnV.js";import{G as L,g as T,h as H}from"./gds-element-DTROifYq.js";import{t as D,i as W}from"./tokens.style-DeseHqaM.js";import{T as G}from"./transitional-styles-Dla2R8BH.js";import{o as I}from"./observe-light-dom-CmJPHUQ4.js";import{s as N,w as X,b as Y,d as K}from"./declarative-layout-mixins-C4FFYA_h.js";import{e as J,i as Q,t as Z}from"./directive-CF8sV3Lr.js";import{w as rr}from"./watch-tFciLXSI.js";const tr=O`
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
`;var or=Object.defineProperty,er=Object.getOwnPropertyDescriptor,F=(s,o,r,t)=>{for(var e=t>1?void 0:t?er(o,r):o,a=s.length-1,g;a>=0;a--)(g=s[a])&&(e=(t?g(o,r,e):g(e))||e);return t&&e&&or(o,r,e),e};let k=class extends L{constructor(){super(...arguments),this.onmousedown=s=>{this.triggerRipple(s.clientX,s.clientY)}}render(){return R`<div></div>`}triggerRipple(s,o){const r=this._rippleEl,t=this.getBoundingClientRect(),e=s!==void 0?s-t.left:t.width/2,a=o!==void 0?o-t.top:t.height/2;r&&(r.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${a}px`),this.style.setProperty("--gds-ripple-left",`${e}px`),setTimeout(()=>{r.classList.add("gds-ripple-effect")},20))}};k.styles=[D,tr];F([E("div")],k.prototype,"_rippleEl",2);k=F([T("gds-ripple")],k);class sr extends Q{constructor(o){if(super(o),o.type!==Z.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(o){return S}update(o,[r]){var a;const t=o.element,e=(a=o.options)==null?void 0:a.host;Array.from(e.attributes).forEach(g=>{r(g)&&t.setAttribute(g.name.replace("gds-",""),g.value)})}}const ir=J(sr),P=new WeakMap;function ar(s){return(o,...r)=>{let t=P.get(o);return t||(t=o.map(e=>e.replace(/\n[\s]+</gm,"<")),t.raw=o.raw,P.set(o,t)),s(t,...r)}}W||function(s){if(typeof s.requestSubmit=="function")return;s.requestSubmit=function(t=null){t?(o(t,this),t.click()):(t=document.createElement("input"),t.type="submit",t.hidden=!0,this.appendChild(t),t.click(),this.removeChild(t))};function o(t,e){t instanceof HTMLElement||r(TypeError,"parameter 1 is not of type 'HTMLElement'"),t.type=="submit"||r(TypeError,"The specified element is not a submit button"),t.form==e||r(DOMException,"The specified element is not owned by this form element","NotFoundError")}function r(t,e,a="Error"){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",a)}}(HTMLFormElement.prototype);var nr=Object.defineProperty,lr=Object.getOwnPropertyDescriptor,u=(s,o,r,t)=>{for(var e=t>1?void 0:t?lr(o,r):o,a=s.length-1,g;a>=0;a--)(g=s[a])&&(e=(t?g(o,r,e):g(e))||e);return t&&e&&nr(o,r,e),e},n;const $=class $ extends L{constructor(){super();b(this,n);this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{y(this,n,this.attachInternals())}catch{y(this,n,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,e)=>{i(this,n).validity=t,this.errorMessage=e||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const r=this.closest("form");r&&(r.addEventListener("submit",this._handleFormSubmit.bind(this)),r.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(r){const t=this.invalid;i(this,n).setValidity({...i(this,n).validity,customError:r,valid:!r},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",t),i(this,n).checkValidity()}get invalid(){return!i(this,n).validity.valid}get value(){return this._internalValue}set value(r){this._internalValue=r,i(this,n).setFormValue(r)}get form(){return i(this,n).form}get validity(){return i(this,n).validity}get validationMessage(){return i(this,n).validationMessage}get willValidate(){return i(this,n).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,e=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=e[1]||this.errorMessage,i(this,n).setValidity(e[0],e[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),i(this,n).checkValidity()}reportValidity(){return i(this,n).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(r){r==null||r.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(r){this.checkValidity(),this.validity.valid||r.preventDefault()}};n=new WeakMap,$.formAssociated=!0;let v=$;u([c({attribute:!1})],v.prototype,"validator",2);u([c({type:Boolean})],v.prototype,"required",2);u([c({attribute:"error-message"})],v.prototype,"errorMessage",2);u([c({type:Boolean,reflect:!0})],v.prototype,"invalid",1);u([c()],v.prototype,"label",2);u([c()],v.prototype,"value",1);u([c({reflect:!0})],v.prototype,"name",2);u([c({type:Boolean,reflect:!0})],v.prototype,"disabled",2);u([rr("value",{waitUntilFirstUpdate:!0})],v.prototype,"__handleValueChange",1);const cr=O`
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
`;var dr=Object.defineProperty,gr=Object.getOwnPropertyDescriptor,d=(s,o,r,t)=>{for(var e=t>1?void 0:t?gr(o,r):o,a=s.length-1,g;a>=0;a--)(g=s[a])&&(e=(t?g(o,r,e):g(e))||e);return t&&e&&dr(o,r,e),e};const pr=["aria-label","aria-haspopup","aria-expanded"],vr=ar(H);var m,p,h,q,x,w,_;const V=class V extends v{constructor(){super(...arguments);b(this,p);b(this,m);b(this,x);b(this,w);b(this,_);this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",y(this,m,!1),y(this,x,()=>{var t;const r=((t=this._mainSlot)==null?void 0:t.assignedElements())??[];y(this,m,r.length===1&&(r[0].tagName.toLowerCase().startsWith("gds-icon")||r[0].getAttribute("name")==="icon")),this.requestUpdate()}),y(this,w,r=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:r}),this.form&&!i(this,p,h)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())}),y(this,_,r=>{if(!this.disabled&&(r.code==="Space"||r.key==="Enter")&&!r.repeat){const t=this._ripple;t&&t.triggerRipple()}})}focus(r){var t;(t=this._getValidityAnchor())==null||t.focus(r)}click(){var r;(r=this._getValidityAnchor())==null||r.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),G.instance.apply(this,"gds-button")}render(){const r={button:!0,circle:i(this,m),icon:i(this,m),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},t=i(this,p,h)?z`a`:z`button`;return B`
      <${t}
        class=${j(r)}
        type="${f(i(this,p,h)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||S}
        href=${f(i(this,p,h)?this.href:void 0)}
        target=${f(i(this,p,h)?this.target:void 0)}
        rel=${f(i(this,p,h)?this.rel||i(this,p,q):void 0)}
        download=${f(i(this,p,h)?this.download:void 0)}
        part="_button"
        @click="${i(this,w)}"
        @keydown="${i(this,_)}"
        ${ir(e=>e.name.startsWith("gds-aria")||e.name==="gds-role"||pr.includes(e.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${i(this,x)}></slot>
        <slot name="trail"></slot>
        ${U(!this._isUsingTransitionalStyles,()=>vr`<gds-ripple part="_ripple"></gds-ripple>`)}
      </${t}>
      `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};m=new WeakMap,p=new WeakSet,h=function(){return this.href.length>0},q=function(){return this.target==="_blank"?"noreferrer noopener":void 0},x=new WeakMap,w=new WeakMap,_=new WeakMap,V.styles=[D,cr],V.shadowRootOptions={mode:"open",delegatesFocus:!0};let l=V;d([c({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([N({selector:".button"})],l.prototype,"justify-content",2);d([c({reflect:!0})],l.prototype,"type",2);d([c({reflect:!0})],l.prototype,"rank",2);d([c({reflect:!0})],l.prototype,"variant",2);d([c({reflect:!0})],l.prototype,"size",2);d([c()],l.prototype,"label",2);d([c()],l.prototype,"href",2);d([c()],l.prototype,"target",2);d([c()],l.prototype,"rel",2);d([c()],l.prototype,"download",2);d([E("slot:not([name])")],l.prototype,"_mainSlot",2);d([E(".button")],l.prototype,"_button",2);d([E("gds-ripple")],l.prototype,"_ripple",2);d([I({attributes:!0,childList:!1,subtree:!1,characterData:!1})],l.prototype,"_attributeChanged",1);let A=class extends X(Y(K(l))){};A=d([T("gds-button",{dependsOn:[k]})],A);export{A as G,v as a};

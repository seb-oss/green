var z=e=>{throw TypeError(e)};var C=(e,s,r)=>s.has(e)||z("Cannot "+r);var a=(e,s,r)=>(C(e,s,"read from private field"),r?r.call(e):s.get(e)),m=(e,s,r)=>s.has(e)?z("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,r),h=(e,s,r,o)=>(C(e,s,"write to private field"),o?o.call(e,r):s.set(e,r),r);import{i as A,x as q,E as O}from"./lit-element-Bx14lxc-.js";import{G as D,g as L,n,h as F}from"./gds-element-DKcDvDP5.js";import{a as $}from"./query-p8xgzTDt.js";import{e as T}from"./class-map-CXsQwv0r.js";import{o as f}from"./if-defined-CVqwUuaf.js";import{n as R}from"./when-BR7zwNJC.js";import{i as M,u as B}from"./static-B8S6DEnV.js";import{t as S}from"./tokens.style-BebDwfJu.js";import{T as W}from"./transitional-styles-qrfc5e8h.js";import{o as G}from"./observe-light-dom-CmJPHUQ4.js";import{s as I,w as N,b as X,d as Y}from"./declarative-layout-mixins-DHam8wVT.js";import{e as H,i as J,t as K}from"./directive-CF8sV3Lr.js";import{w as Q}from"./watch-tFciLXSI.js";const Z=A`
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
`;var rr=Object.defineProperty,or=Object.getOwnPropertyDescriptor,j=(e,s,r,o)=>{for(var t=o>1?void 0:o?or(s,r):s,g=e.length-1,c;g>=0;g--)(c=e[g])&&(t=(o?c(s,r,t):c(t))||t);return o&&t&&rr(s,r,t),t};let k=class extends D{constructor(){super(...arguments),this.onmousedown=e=>{const r=e.target.getBoundingClientRect(),o=this._rippleEl;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${e.clientY-r.top}px`),this.style.setProperty("--gds-ripple-left",`${e.clientX-r.left}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}}render(){return q`<div></div>`}};k.styles=[S,Z];j([$("div")],k.prototype,"_rippleEl",2);k=j([L("gds-ripple")],k);class sr extends J{constructor(s){if(super(s),s.type!==K.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(s){return O}update(s,[r]){var g;const o=s.element,t=(g=s.options)==null?void 0:g.host;Array.from(t.attributes).forEach(c=>{r(c)&&o.setAttribute(c.name.replace("gds-",""),c.value)})}}const tr=H(sr),P=new WeakMap;function er(e){return(s,...r)=>{let o=P.get(s);return o||(o=s.map(t=>t.replace(/\n[\s]+</gm,"<")),o.raw=s.raw,P.set(s,o)),e(o,...r)}}var ar=Object.defineProperty,ir=Object.getOwnPropertyDescriptor,u=(e,s,r,o)=>{for(var t=o>1?void 0:o?ir(s,r):s,g=e.length-1,c;g>=0;g--)(c=e[g])&&(t=(o?c(s,r,t):c(t))||t);return o&&t&&ar(s,r,t),t},i;const V=class V extends D{constructor(){super();m(this,i);this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{h(this,i,this.attachInternals())}catch{h(this,i,{form:this.closest("form"),setFormValue:o=>{this.value=o},setValidity:(o,t)=>{a(this,i).validity=o,this.errorMessage=t||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:()=>!0,reportValidity:()=>!0})}}set invalid(r){const o=this.invalid;a(this,i).setValidity({...a(this,i).validity,customError:r,valid:!r},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",o),a(this,i).checkValidity()}get invalid(){return!a(this,i).validity.valid}get value(){return this._internalValue}set value(r){this._internalValue=r,a(this,i).setFormValue(r)}get form(){return a(this,i).form}get validity(){return a(this,i).validity}get validationMessage(){return a(this,i).validationMessage}get willValidate(){return a(this,i).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const o=this.invalid,t=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=t[1]||this.errorMessage,a(this,i).setValidity(t[0],t[1],this._getValidityAnchor()),o!==this.invalid&&(this.requestUpdate("invalid",o),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,i).checkValidity()}reportValidity(){return a(this,i).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(r){r==null||r.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(r){this.checkValidity(),this.validity.valid||r.preventDefault()}};i=new WeakMap,V.formAssociated=!0;let p=V;u([n({attribute:!1})],p.prototype,"validator",2);u([n({type:Boolean})],p.prototype,"required",2);u([n({attribute:"error-message"})],p.prototype,"errorMessage",2);u([n({type:Boolean,reflect:!0})],p.prototype,"invalid",1);u([n()],p.prototype,"label",2);u([n()],p.prototype,"value",1);u([n({reflect:!0})],p.prototype,"name",2);u([n({type:Boolean,reflect:!0})],p.prototype,"disabled",2);u([Q("value",{waitUntilFirstUpdate:!0})],p.prototype,"__handleValueChange",1);const nr=A`
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
      background-color: var(--gds-sys-color-l3-01);
      color: var(--gds-sys-color-content-03);
      border-radius: var(--gds-sys-space-max);
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
        outline-color: var(--gds-sys-color-content-01);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-01),
            var(--gds-sys-color-state-neutral-01)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-01),
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
      background-color: var(--gds-sys-color-l3-02);
      color: var(--gds-sys-color-content-01);

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-02),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l3-02),
          var(--gds-sys-color-state-neutral-04)
        );
      }
    }

    :host([rank*='tertiary']) .button {
      background-color: transparent;
      color: var(--gds-sys-color-content-01);

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
        background-color: var(--gds-sys-color-l3-02);
        color: var(--gds-sys-color-content-01);

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l3-02),
              var(--gds-sys-color-state-brand-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l3-02),
            var(--gds-sys-color-state-brand-04)
          );
        }
      }

      &.tertiary {
        background-color: transparent;
        color: var(--gds-sys-color-content-01);

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
      color: var(--gds-sys-color-content-03);

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
`;var lr=Object.defineProperty,cr=Object.getOwnPropertyDescriptor,d=(e,s,r,o)=>{for(var t=o>1?void 0:o?cr(s,r):s,g=e.length-1,c;g>=0;g--)(c=e[g])&&(t=(o?c(s,r,t):c(t))||t);return o&&t&&lr(s,r,t),t};const dr=["aria-label","aria-haspopup","aria-expanded"],gr=er(F);var b,v,y,U,x,w;const _=class _ extends p{constructor(){super(...arguments);m(this,v);m(this,b);m(this,x);m(this,w);this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",h(this,b,!1),h(this,x,()=>{var o;const r=((o=this._mainSlot)==null?void 0:o.assignedElements())??[];h(this,b,r.length===1&&(r[0].tagName.toLowerCase().startsWith("gds-icon")||r[0].getAttribute("name")==="icon")),this.requestUpdate()}),h(this,w,r=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:r}),this.form&&!a(this,v,y)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())})}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),W.instance.apply(this,"gds-button")}focus(r){var o;(o=this._getValidityAnchor())==null||o.focus(r)}render(){const r={button:!0,circle:a(this,b),icon:a(this,b),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary"},o=a(this,v,y)?M`a`:M`button`;return B`
      <${o}
        class=${T(r)}
        type="${f(a(this,v,y)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||O}
        href=${f(a(this,v,y)?this.href:void 0)}
        target=${f(a(this,v,y)?this.target:void 0)}
        rel=${f(a(this,v,y)?this.rel||a(this,v,U):void 0)}
        download=${f(a(this,v,y)?this.download:void 0)}
        part="_button"
        @click="${a(this,w)}"
        ${tr(t=>t.name.startsWith("gds-aria")||t.name==="gds-role"||dr.includes(t.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,x)}></slot>
        <slot name="trail"></slot>
        ${R(!this._isUsingTransitionalStyles,()=>gr`<gds-ripple part="_ripple"></gds-ripple>`)}
        </${o}>
        `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};b=new WeakMap,v=new WeakSet,y=function(){return this.href.length>0},U=function(){return this.target==="_blank"?"noreferrer noopener":void 0},x=new WeakMap,w=new WeakMap,_.styles=[S,nr],_.shadowRootOptions={mode:"open",delegatesFocus:!0};let l=_;d([n({type:Boolean,reflect:!0})],l.prototype,"disabled",2);d([I({selector:".button"})],l.prototype,"justify-content",2);d([n({reflect:!0})],l.prototype,"type",2);d([n({reflect:!0})],l.prototype,"rank",2);d([n({reflect:!0})],l.prototype,"variant",2);d([n({reflect:!0})],l.prototype,"size",2);d([n()],l.prototype,"label",2);d([n()],l.prototype,"href",2);d([n()],l.prototype,"target",2);d([n()],l.prototype,"rel",2);d([n()],l.prototype,"download",2);d([$("slot:not([name])")],l.prototype,"_mainSlot",2);d([$(".button")],l.prototype,"_button",2);d([G({attributes:!0,childList:!1,subtree:!1,characterData:!1})],l.prototype,"_attributeChanged",1);let E=class extends N(X(Y(l))){};E=d([L("gds-button",{dependsOn:[k]})],E);export{E as G,p as a};

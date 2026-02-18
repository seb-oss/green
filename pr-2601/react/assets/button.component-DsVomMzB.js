import{x as q,E as C,i as B,t as W,_ as s,g as R,G as U,f as O,b as y,e as $,d as a,n as i,h as P}from"./tokens.style-Dh2WjNZp.js";import{e as _,w as H}from"./watch-Bh1rs_BK.js";import{e as I}from"./class-map-D9tumyRl.js";import{n as N}from"./when-BR7zwNJC.js";import{e as j,i as X,t as K,w as Y,b as J,a as Q,s as Z}from"./icon.component-CHfinurX.js";import{T as tt}from"./transitional-styles-D918RGK5.js";/**
 * @license
 * Copyright 2020 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const z=Symbol.for(""),et=o=>{if((o==null?void 0:o.r)===z)return o==null?void 0:o._$litStatic$},ft=o=>({_$litStatic$:o,r:z}),A=(o,...t)=>({_$litStatic$:t.reduce(((r,e,l)=>r+(c=>{if(c._$litStatic$!==void 0)return c._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${c}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(e)+o[l+1]),o[0]),r:z}),L=new Map,rt=o=>(t,...r)=>{const e=r.length;let l,c;const g=[],w=[];let x,v=0,b=!1;for(;v<e;){for(x=t[v];v<e&&(c=r[v],(l=et(c))!==void 0);)x+=l+t[++v],b=!0;v!==e&&w.push(c),g.push(x),v++}if(v===e&&g.push(t[e]),b){const S=g.join("$$lit$$");(t=L.get(S))===void 0&&(g.raw=g,L.set(S,t=g)),r=w}return o(t,...r)},ot=rt(q);/**
 * @license
 * Copyright 2018 Google LLC
 * SPDX-License-Identifier: BSD-3-Clause
 */const m=o=>o??C,st=B`
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
`;var at=st;let k=class extends U{constructor(){super(...arguments),this.onmousedown=o=>{this.triggerRipple(o.clientX,o.clientY)}}render(){return q`<div></div>`}triggerRipple(o,t){const r=this._rippleEl,e=this.getBoundingClientRect(),l=o!==void 0?o-e.left:e.width/2,c=t!==void 0?t-e.top:e.height/2;r&&(r.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${c}px`),this.style.setProperty("--gds-ripple-left",`${l}px`),setTimeout(()=>{r.classList.add("gds-ripple-effect")},20))}};k.styles=[W,at];s([_("div")],k.prototype,"_rippleEl",2);k=s([R("gds-ripple")],k);function it(o={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,r,e)=>{let l;const c=t.connectedCallback,g=t.disconnectedCallback;t.connectedCallback=function(){c==null||c.call(this);const w=(x,v)=>{var b;(b=e.value)==null||b.call(this)};l=new MutationObserver(w),l.observe(this,o)},t.disconnectedCallback=function(){g==null||g.call(this),l.disconnect()}}}class D extends X{constructor(t){if(super(t),t.type!==K.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return C}update(t,[r]){var c;const e=t.element,l=(c=t.options)==null?void 0:c.host;Array.from(l.attributes).forEach(g=>{r(g)&&e.setAttribute(g.name.replace("gds-",""),g.value)})}}const nt=j(D);D.__docgenInfo={description:"",methods:[{name:"update",docblock:null,modifiers:[],params:[{name:"part",optional:!1,type:null},{name:"[filter]",optional:!1,type:null}],returns:null}],displayName:"ForwardAttributesDirective"};const F=new WeakMap;function lt(o){return(t,...r)=>{let e=F.get(t);return e||(e=t.map(l=>l.replace(/\n[\s]+</gm,"<")),e.raw=t.raw,F.set(t,e)),o(e,...r)}}O||(function(o){if(typeof o.requestSubmit=="function")return;o.requestSubmit=function(e=null){e?(t(e,this),e.click()):(e=document.createElement("input"),e.type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))};function t(e,l){e instanceof HTMLElement||r(TypeError,"parameter 1 is not of type 'HTMLElement'"),e.type=="submit"||r(TypeError,"The specified element is not a submit button"),e.form==l||r(DOMException,"The specified element is not owned by this form element","NotFoundError")}function r(e,l,c="Error"){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+l+".",c)}})(HTMLFormElement.prototype);var d;class p extends U{constructor(){super(),y(this,d),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{$(this,d,this.attachInternals())}catch{$(this,d,{form:this.closest("form"),setFormValue:r=>{this._internalValue=r},setValidity:(r,e)=>{a(this,d).validity=r,this.errorMessage=e||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const r=this.invalid;a(this,d).setValidity({...a(this,d).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",r),a(this,d).checkValidity()}get invalid(){return!a(this,d).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,a(this,d).setFormValue(t)}get form(){return a(this,d).form}get validity(){return a(this,d).validity}get validationMessage(){return a(this,d).validationMessage}get willValidate(){return a(this,d).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const r=this.invalid,e=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=e[1]||this.errorMessage,a(this,d).setValidity(e[0],e[1],this._getValidityAnchor()),r!==this.invalid&&(this.requestUpdate("invalid",r),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,d).checkValidity()}reportValidity(){return a(this,d).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t==null||t.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}}d=new WeakMap;p.formAssociated=!0;s([i({attribute:!1})],p.prototype,"validator",2);s([i({type:Boolean})],p.prototype,"required",2);s([i({attribute:"error-message"})],p.prototype,"errorMessage",2);s([i({type:Boolean,reflect:!0})],p.prototype,"invalid",1);s([i()],p.prototype,"label",2);s([i()],p.prototype,"value",1);s([i({reflect:!0})],p.prototype,"name",2);s([i({type:Boolean,reflect:!0})],p.prototype,"disabled",2);s([H("value",{waitUntilFirstUpdate:!0})],p.prototype,"__handleValueChange",1);const ct=B`
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
      min-width: 0;
      background-color: var(--gds-sys-color-l3-neutral-01);
      color: var(--gds-sys-color-content-neutral-03);
      border-radius: calc(var(--_block-size) / 1.8);
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
      font: var(--gds-sys-text-detail-book-xs);
      padding-inline: var(--gds-sys-space-s);
      padding-block: 0;
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
`;var dt=ct,f,u,h,G,E,V,M;const gt=["aria-label","aria-haspopup","aria-expanded"],pt=lt(P);class n extends p{constructor(){super(...arguments),y(this,u),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.wrapped=!1,this.href="",y(this,f,!1),y(this,E,()=>{var r;const t=((r=this._mainSlot)==null?void 0:r.assignedElements())??[];$(this,f,t.length===1&&(t[0].tagName.toLowerCase().startsWith("gds-icon")||t[0].getAttribute("name")==="icon")),this.requestUpdate()}),y(this,V,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!a(this,u,h)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())}),y(this,M,t=>{if(!this.disabled&&(t.code==="Space"||t.key==="Enter")&&!t.repeat){const r=this._ripple;r&&r.triggerRipple()}})}focus(t){var r;(r=this._getValidityAnchor())==null||r.focus(t)}click(){var t;(t=this._getValidityAnchor())==null||t.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),tt.instance.apply(this,"gds-button")}render(){const t={button:!0,circle:a(this,f),icon:a(this,f),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary",wrapped:this.wrapped},r=a(this,u,h)?A`a`:A`button`;return ot`
      <${r}
        class=${I(t)}
        type="${m(a(this,u,h)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||C}
        href=${m(a(this,u,h)?this.href:void 0)}
        target=${m(a(this,u,h)?this.target:void 0)}
        rel=${m(a(this,u,h)?this.rel||a(this,u,G):void 0)}
        download=${m(a(this,u,h)?this.download:void 0)}
        part="_button"
        @click="${a(this,V)}"
        @keydown="${a(this,M)}"
        ${nt(e=>e.name.startsWith("gds-aria")||e.name==="gds-role"||gt.includes(e.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,E)}></slot>
        <slot name="trail"></slot>
        ${N(!this._isUsingTransitionalStyles,()=>pt`<gds-ripple part="_ripple"></gds-ripple>`)}
      </${r}>
      `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}f=new WeakMap;u=new WeakSet;h=function(){return this.href.length>0};G=function(){return this.target==="_blank"?"noreferrer noopener":void 0};E=new WeakMap;V=new WeakMap;M=new WeakMap;n.styles=[W,dt];n.shadowRootOptions={mode:"open",delegatesFocus:!0};s([i({type:Boolean,reflect:!0})],n.prototype,"disabled",2);s([Z({selector:".button"})],n.prototype,"justify-content",2);s([i({reflect:!0})],n.prototype,"type",2);s([i({reflect:!0})],n.prototype,"rank",2);s([i({reflect:!0})],n.prototype,"variant",2);s([i({reflect:!0})],n.prototype,"size",2);s([i()],n.prototype,"label",2);s([i({attribute:"wrapped",type:Boolean,reflect:!0})],n.prototype,"wrapped",2);s([i()],n.prototype,"href",2);s([i()],n.prototype,"target",2);s([i()],n.prototype,"rel",2);s([i()],n.prototype,"download",2);s([_("slot:not([name])")],n.prototype,"_mainSlot",2);s([_(".button")],n.prototype,"_button",2);s([_("gds-ripple")],n.prototype,"_ripple",2);s([it({attributes:!0,childList:!1,subtree:!1,characterData:!1})],n.prototype,"_attributeChanged",1);let T=class extends Y(J(Q(n))){};T=s([R("gds-button",{dependsOn:[k]})],T);export{T as G,p as a,m as b,A as i,it as o,ft as s,ot as u};

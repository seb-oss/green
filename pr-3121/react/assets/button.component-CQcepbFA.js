import{x as B,A as C,i as q,G as D,t as R,_ as s,g as U,D as N,n,b as h,e as _,c as a,s as O,f as P,w as I,m as H,h as j}from"./declarative-layout-mixins-qhlmn3Eh.js";import{e as x,w as X,a as K}from"./watch-rsnQmdjn.js";import{e as Y}from"./class-map-CWftihNH.js";import{n as J}from"./when-CI7b_ccM.js";import{T as Q}from"./transitional-styles--Sf0A24C.js";import{e as Z,i as tt,t as et}from"./icon.component-CAofjGnH.js";const M=Symbol.for(""),rt=r=>{if(r?.r===M)return r?._$litStatic$},wt=r=>({_$litStatic$:r,r:M}),A=(r,...t)=>({_$litStatic$:t.reduce((o,e,l)=>o+(c=>{if(c._$litStatic$!==void 0)return c._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${c}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(e)+r[l+1],r[0]),r:M}),F=new Map,ot=r=>(t,...o)=>{const e=o.length;let l,c;const g=[],k=[];let w,v=0,z=!1;for(;v<e;){for(w=t[v];v<e&&(c=o[v],(l=rt(c))!==void 0);)w+=l+t[++v],z=!0;v!==e&&k.push(c),g.push(w),v++}if(v===e&&g.push(t[e]),z){const S=g.join("$$lit$$");(t=F.get(S))===void 0&&(g.raw=g,F.set(S,t=g)),o=k}return r(t,...o)},st=ot(B);const b=r=>r??C,at=q`
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
`;var it=at;let f=class extends D{constructor(){super(...arguments),this.onmousedown=r=>{this.triggerRipple(r.clientX,r.clientY)}}render(){return B`<div></div>`}triggerRipple(r,t){const o=this._rippleEl,e=this.getBoundingClientRect(),l=r!==void 0?r-e.left:e.width/2,c=t!==void 0?t-e.top:e.height/2;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${c}px`),this.style.setProperty("--gds-ripple-left",`${l}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}};f.styles=[R,it];s([x("div")],f.prototype,"_rippleEl",2);f=s([U("gds-ripple")],f);function nt(r={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,o,e)=>{let l;const c=t.connectedCallback,g=t.disconnectedCallback;t.connectedCallback=function(){c?.call(this);const k=(w,v)=>{e.value?.call(this)};l=new MutationObserver(k),l.observe(this,r)},t.disconnectedCallback=function(){g?.call(this),l.disconnect()}}}class W extends tt{constructor(t){if(super(t),t.type!==et.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return C}update(t,[o]){const e=t.element,l=t.options?.host;Array.from(l.attributes).forEach(c=>{if(o(c)){const g=c.name.replace("gds-","");e.setAttribute(g,c.value),g==="tabindex"&&(e.tabIndex=Number(c.value))}})}}const lt=Z(W);W.__docgenInfo={description:"",methods:[{name:"update",docblock:null,modifiers:[],params:[{name:"part",optional:!1,type:null},{name:"[filter]",optional:!1,type:null}],returns:null}],displayName:"ForwardAttributesDirective"};const L=new WeakMap;function ct(r){return(t,...o)=>{let e=L.get(t);return e||(e=t.map(l=>l.replace(/\n[\s]+</gm,"<")),e.raw=t.raw,L.set(t,e)),r(e,...o)}}N||(function(r){if(typeof r.requestSubmit=="function")return;r.requestSubmit=function(e=null){e?(t(e,this),e.click()):(e=document.createElement("input"),e.type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))};function t(e,l){e instanceof HTMLElement||o(TypeError,"parameter 1 is not of type 'HTMLElement'"),e.type=="submit"||o(TypeError,"The specified element is not a submit button"),e.form==l||o(DOMException,"The specified element is not owned by this form element","NotFoundError")}function o(e,l,c="Error"){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+l+".",c)}})(HTMLFormElement.prototype);var d;class p extends D{constructor(){super(),h(this,d),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{_(this,d,this.attachInternals())}catch{_(this,d,{form:this.closest("form"),setFormValue:o=>{this._internalValue=o},setValidity:(o,e)=>{a(this,d).validity=o,this.errorMessage=e||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const o=this.invalid;a(this,d).setValidity({...a(this,d).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",o),a(this,d).checkValidity()}get invalid(){return!a(this,d).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,a(this,d).setFormValue(t)}get form(){return a(this,d).form}get validity(){return a(this,d).validity}get validationMessage(){return a(this,d).validationMessage}get willValidate(){return a(this,d).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const o=this.invalid,e=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=e[1]||this.errorMessage,a(this,d).setValidity(e[0],e[1],this._getValidityAnchor()),o!==this.invalid&&(this.requestUpdate("invalid",o),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,d).checkValidity()}reportValidity(){return a(this,d).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}_setFormValue(t){a(this,d).setFormValue(t)}}d=new WeakMap;p.formAssociated=!0;s([n({attribute:!1})],p.prototype,"validator",2);s([n({type:Boolean})],p.prototype,"required",2);s([n({attribute:"error-message"})],p.prototype,"errorMessage",2);s([n({type:Boolean,reflect:!0})],p.prototype,"invalid",1);s([n()],p.prototype,"label",2);s([n()],p.prototype,"value",1);s([n({reflect:!0})],p.prototype,"name",2);s([n({type:Boolean,reflect:!0})],p.prototype,"disabled",2);s([X("value",{waitUntilFirstUpdate:!0})],p.prototype,"__handleValueChange",1);const dt=q`
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
`;var gt=dt,m,u,y,G,$,V,E;const pt=["aria-label","aria-haspopup","aria-expanded"],ut=[...pt,"gds-tabindex"],vt=ct(j);let i=class extends p{constructor(){super(...arguments),h(this,u),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.wrapped=!1,this.href="",h(this,m,!1),h(this,$,()=>{const r=this._mainSlot?.assignedElements()??[];_(this,m,r.length===1&&(r[0].tagName.toLowerCase().startsWith("gds-icon")||r[0].getAttribute("name")==="icon")),this.requestUpdate()}),h(this,V,r=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:r}),this.form&&!a(this,u,y)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())}),h(this,E,r=>{if(!this.disabled&&(r.code==="Space"||r.key==="Enter")&&!r.repeat){const t=this._ripple;t&&t.triggerRipple()}})}focus(r){this._getValidityAnchor()?.focus(r)}click(){this._getValidityAnchor()?.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),Q.instance.apply(this,"gds-button")}render(){const r={button:!0,circle:a(this,m),icon:a(this,m),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary",wrapped:this.wrapped},t=a(this,u,y)?A`a`:A`button`;return st`
      <${t}
        class=${Y(r)}
        type="${b(a(this,u,y)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||C}
        href=${b(a(this,u,y)?this.href:void 0)}
        target=${b(a(this,u,y)?this.target:void 0)}
        rel=${b(a(this,u,y)?this.rel||a(this,u,G):void 0)}
        download=${b(a(this,u,y)?this.download:void 0)}
        part="_button"
        @click="${a(this,V)}"
        @keydown="${a(this,E)}"
        ${lt(o=>o.name==="gds-role"||ut.includes(o.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,$)}></slot>
        <slot name="trail"></slot>
        ${J(!this._isUsingTransitionalStyles,()=>vt`<gds-ripple part="_ripple"></gds-ripple>`)}
      </${t}>
      `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};m=new WeakMap;u=new WeakSet;y=function(){return this.href.length>0};G=function(){return this.target==="_blank"?"noreferrer noopener":void 0};$=new WeakMap;V=new WeakMap;E=new WeakMap;i.styles=[R,gt];i.shadowRootOptions={mode:"open",delegatesFocus:!0};s([n({type:Boolean,reflect:!0})],i.prototype,"disabled",2);s([O({selector:".button"})],i.prototype,"justify-content",2);s([n({reflect:!0})],i.prototype,"type",2);s([n({reflect:!0})],i.prototype,"rank",2);s([n({reflect:!0})],i.prototype,"variant",2);s([n({reflect:!0})],i.prototype,"size",2);s([n()],i.prototype,"label",2);s([n({attribute:"wrapped",type:Boolean,reflect:!0})],i.prototype,"wrapped",2);s([n()],i.prototype,"href",2);s([n()],i.prototype,"target",2);s([n()],i.prototype,"rel",2);s([n()],i.prototype,"download",2);s([x("slot:not([name])")],i.prototype,"_mainSlot",2);s([x(".button")],i.prototype,"_button",2);s([x("gds-ripple")],i.prototype,"_ripple",2);s([nt({attributes:!0,childList:!1,subtree:!1,characterData:!1})],i.prototype,"_attributeChanged",1);i=s([K({labelledBy:".button",describedBy:".button",controls:".button"})],i);let T=class extends P(I(H(i))){};T=s([U("gds-button",{dependsOn:[f]})],T);export{T as G,p as a,b,nt as o,wt as s,st as u};

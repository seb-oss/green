import{x as q,A as M,i as R,G as W,t as D,_ as s,g as U,D as O,n,b as h,e as _,d as a,s as P,w as I,k as H,m as j,h as X}from"./declarative-layout-mixins-DsnZ6DlD.js";import{e as x,w as K,a as Y}from"./watch-QkQzTQuG.js";import{e as J}from"./class-map-BzNlIhkv.js";import{n as Q}from"./when-CI7b_ccM.js";import{T as Z}from"./transitional-styles-CTHhaKMu.js";import{e as tt,i as et,t as rt}from"./icon.component-BhTGe_lj.js";const S=Symbol.for(""),ot=r=>{if(r?.r===S)return r?._$litStatic$},xt=r=>({_$litStatic$:r,r:S}),F=(r,...t)=>({_$litStatic$:t.reduce((o,e,l)=>o+(c=>{if(c._$litStatic$!==void 0)return c._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${c}. Use 'unsafeStatic' to pass non-literal values, but
            take care to ensure page security.`)})(e)+r[l+1],r[0]),r:S}),L=new Map,st=r=>(t,...o)=>{const e=o.length;let l,c;const g=[],k=[];let w,u=0,z=!1;for(;u<e;){for(w=t[u];u<e&&(c=o[u],(l=ot(c))!==void 0);)w+=l+t[++u],z=!0;u!==e&&k.push(c),g.push(w),u++}if(u===e&&g.push(t[e]),z){const A=g.join("$$lit$$");(t=L.get(A))===void 0&&(g.raw=g,L.set(A,t=g)),o=k}return r(t,...o)},at=st(q);const b=r=>r??M,it=R`
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
`;var nt=it;let f=class extends W{constructor(){super(...arguments),this.onmousedown=r=>{this.triggerRipple(r.clientX,r.clientY)}}render(){return q`<div></div>`}triggerRipple(r,t){const o=this._rippleEl,e=this.getBoundingClientRect(),l=r!==void 0?r-e.left:e.width/2,c=t!==void 0?t-e.top:e.height/2;o&&(o.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${c}px`),this.style.setProperty("--gds-ripple-left",`${l}px`),setTimeout(()=>{o.classList.add("gds-ripple-effect")},20))}};f.styles=[D,nt];s([x("div")],f.prototype,"_rippleEl",2);f=s([U("gds-ripple")],f);function lt(r={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(t,o,e)=>{let l;const c=t.connectedCallback,g=t.disconnectedCallback;t.connectedCallback=function(){c?.call(this);const k=(w,u)=>{e.value?.call(this)};l=new MutationObserver(k),l.observe(this,r)},t.disconnectedCallback=function(){g?.call(this),l.disconnect()}}}class G extends et{constructor(t){if(super(t),t.type!==rt.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return M}update(t,[o]){const e=t.element,l=t.options?.host;Array.from(l.attributes).forEach(c=>{if(o(c)){const g=c.name.replace("gds-","");e.setAttribute(g,c.value),g==="tabindex"&&(e.tabIndex=Number(c.value))}})}}const ct=tt(G);G.__docgenInfo={description:"",methods:[{name:"update",docblock:null,modifiers:[],params:[{name:"part",optional:!1,type:null},{name:"[filter]",optional:!1,type:null}],returns:null}],displayName:"ForwardAttributesDirective"};const T=new WeakMap;function dt(r){return(t,...o)=>{let e=T.get(t);return e||(e=t.map(l=>l.replace(/\n[\s]+</gm,"<")),e.raw=t.raw,T.set(t,e)),r(e,...o)}}O||(function(r){if(typeof r.requestSubmit=="function")return;r.requestSubmit=function(e=null){e?(t(e,this),e.click()):(e=document.createElement("input"),e.type="submit",e.hidden=!0,this.appendChild(e),e.click(),this.removeChild(e))};function t(e,l){e instanceof HTMLElement||o(TypeError,"parameter 1 is not of type 'HTMLElement'"),e.type=="submit"||o(TypeError,"The specified element is not a submit button"),e.form==l||o(DOMException,"The specified element is not owned by this form element","NotFoundError")}function o(e,l,c="Error"){throw new e("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+l+".",c)}})(HTMLFormElement.prototype);var d;class p extends W{constructor(){super(),h(this,d,void 0),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{_(this,d,this.attachInternals())}catch{_(this,d,{form:this.closest("form"),setFormValue:o=>{this._internalValue=o},setValidity:(o,e)=>{a(this,d).validity=o,this.errorMessage=e||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),typeof this.attachInternals!="function"){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const o=this.invalid;a(this,d).setValidity({...a(this,d).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",o),a(this,d).checkValidity()}get invalid(){return!a(this,d).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,a(this,d).setFormValue(t)}get form(){return a(this,d).form}get validity(){return a(this,d).validity}get validationMessage(){return a(this,d).validationMessage}get willValidate(){return a(this,d).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const o=this.invalid,e=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=e[1]||this.errorMessage,a(this,d).setValidity(e[0],e[1],this._getValidityAnchor()),o!==this.invalid&&(this.requestUpdate("invalid",o),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),a(this,d).checkValidity()}reportValidity(){return a(this,d).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){typeof this.value=="string"?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}_setFormValue(t){a(this,d).setFormValue(t)}}d=new WeakMap;p.formAssociated=!0;s([n({attribute:!1})],p.prototype,"validator",2);s([n({type:Boolean})],p.prototype,"required",2);s([n({attribute:"error-message"})],p.prototype,"errorMessage",2);s([n({type:Boolean,reflect:!0})],p.prototype,"invalid",1);s([n()],p.prototype,"label",2);s([n()],p.prototype,"value",1);s([n({reflect:!0})],p.prototype,"name",2);s([n({type:Boolean,reflect:!0})],p.prototype,"disabled",2);s([K("value",{waitUntilFirstUpdate:!0})],p.prototype,"__handleValueChange",1);const gt=R`
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
`;var pt=gt,m,v,y,$,N,V,E,C;const ut=["aria-label","aria-haspopup","aria-expanded"],vt=[...ut,"gds-tabindex"],yt=dt(X);let i=class extends p{constructor(){super(...arguments),h(this,v),h(this,$),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.wrapped=!1,this.href="",h(this,m,!1),h(this,V,()=>{const r=this._mainSlot?.assignedElements()??[];_(this,m,r.length===1&&(r[0].tagName.toLowerCase().startsWith("gds-icon")||r[0].getAttribute("name")==="icon")),this.requestUpdate()}),h(this,E,r=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:r}),this.form&&!a(this,v,y)&&(this.type==="submit"?this.form.requestSubmit():this.type==="reset"&&this.form.reset())}),h(this,C,r=>{if(!this.disabled&&(r.code==="Space"||r.key==="Enter")&&!r.repeat){const t=this._ripple;t&&t.triggerRipple()}})}focus(r){this._getValidityAnchor()?.focus(r)}click(){this._getValidityAnchor()?.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),Z.instance.apply(this,"gds-button")}render(){const r={button:!0,circle:a(this,m),icon:a(this,m),xs:this.size==="xs",small:this.size==="small",large:this.size==="large",brand:this.variant==="brand",positive:this.variant==="positive",negative:this.variant==="negative",notice:this.variant==="notice",warning:this.variant==="warning",primary:this.rank==="primary",secondary:this.rank==="secondary",tertiary:this.rank==="tertiary",wrapped:this.wrapped},t=a(this,v,y)?F`a`:F`button`;return at`
      <${t}
        class=${J(r)}
        type="${b(a(this,v,y)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||M}
        href=${b(a(this,v,y)?this.href:void 0)}
        target=${b(a(this,v,y)?this.target:void 0)}
        rel=${b(a(this,v,y)?this.rel||a(this,$,N):void 0)}
        download=${b(a(this,v,y)?this.download:void 0)}
        part="_button"
        @click="${a(this,E)}"
        @keydown="${a(this,C)}"
        ${ct(o=>o.name==="gds-role"||vt.includes(o.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${a(this,V)}></slot>
        <slot name="trail"></slot>
        ${Q(!this._isUsingTransitionalStyles,()=>yt`<gds-ripple part="_ripple"></gds-ripple>`)}
      </${t}>
      `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}};m=new WeakMap;v=new WeakSet;y=function(){return this.href.length>0};$=new WeakSet;N=function(){return this.target==="_blank"?"noreferrer noopener":void 0};V=new WeakMap;E=new WeakMap;C=new WeakMap;i.styles=[D,pt];i.shadowRootOptions={mode:"open",delegatesFocus:!0};s([n({type:Boolean,reflect:!0})],i.prototype,"disabled",2);s([P({selector:".button"})],i.prototype,"justify-content",2);s([n({reflect:!0})],i.prototype,"type",2);s([n({reflect:!0})],i.prototype,"rank",2);s([n({reflect:!0})],i.prototype,"variant",2);s([n({reflect:!0})],i.prototype,"size",2);s([n()],i.prototype,"label",2);s([n({attribute:"wrapped",type:Boolean,reflect:!0})],i.prototype,"wrapped",2);s([n()],i.prototype,"href",2);s([n()],i.prototype,"target",2);s([n()],i.prototype,"rel",2);s([n()],i.prototype,"download",2);s([x("slot:not([name])")],i.prototype,"_mainSlot",2);s([x(".button")],i.prototype,"_button",2);s([x("gds-ripple")],i.prototype,"_ripple",2);s([lt({attributes:!0,childList:!1,subtree:!1,characterData:!1})],i.prototype,"_attributeChanged",1);i=s([Y({labelledBy:".button",describedBy:".button",controls:".button"})],i);let B=class extends I(H(j(i))){};B=s([U("gds-button",{dependsOn:[f]})],B);export{B as G,p as a,b,lt as o,xt as s,at as u};

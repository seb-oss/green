"use strict";(self.webpackChunkgreen=self.webpackChunkgreen||[]).push([[7595],{685:(t,e,s)=>{function o(t={attributes:!0,childList:!0,subtree:!1,characterData:!0}){return(e,s,o)=>{let r;const i=e.connectedCallback,a=e.disconnectedCallback;e.connectedCallback=function(){i?.call(this),r=new MutationObserver((t,e)=>{o.value?.call(this)}),r.observe(this,t)},e.disconnectedCallback=function(){a?.call(this),r.disconnect()}}}s.d(e,{L:()=>o}),s(6861)},1374:(t,e,s)=>{function o(t,e){const s={waitUntilFirstUpdate:!1,...e};return(e,o,r)=>{const{update:i}=e,a=Array.isArray(t)?t:[t];e.update=function(t){a.forEach(e=>{const o=e;if(t.has(o)){const e=t.get(o),i=this[o];e!==i&&(s.waitUntilFirstUpdate&&!this.hasUpdated||r.value?.call(this,e,i))}}),i.call(this,t)}}}s.d(e,{w:()=>o}),s(6861)},4457:(t,e,s)=>{s.d(e,{n:()=>d});var o,r,i,a=s(6861),n=s(9443),l=s(1569),c=s(7526);o=new WeakMap,r=new WeakMap,i=new WeakMap;let d=class t{constructor(){(0,a.VK)(this,o,new Map),(0,a.VK)(this,r,new Map),(0,a.VK)(this,i,!(0,l.k)())}static get instance(){return globalThis.__gdsTransitionalStyles?.[c.M]||(globalThis.__gdsTransitionalStyles={...globalThis.__gdsTransitionalStyles,[c.M]:new t}),globalThis.__gdsTransitionalStyles[c.M]}apply(t,e){if(!t.shadowRoot)return;const s=(0,a.S7)(this,o).get(e);s&&((0,a.S7)(this,r).set(e,t),this.applyToElement(e,s))}applyToElement(t,e){const s=(0,a.S7)(this,r).get(t);if(!s||!s.shadowRoot)return;const o=()=>{s._dynamicStylesController.clearInitial(),s._dynamicStylesController.inject("t-styles",(0,n.iz)(e)),s._isUsingTransitionalStyles=!0},i=()=>{s._isUsingTransitionalStyles=!1,s._dynamicStylesController.clear("t-styles"),s._dynamicStylesController.restoreInitial()},l="[gds-element=gds-theme]";let c=s.getRootNode(),d=s.closest(l);for(;null===d&&c!==document;)d=c.host?.closest(l),c=c.host?.getRootNode();if(d){const t=d,e=()=>{"2023"===t.designVersion?i():o()};if(t.addEventListener("gds-design-version-changed",e),s.addEventListener("gds-element-disconnected",()=>t.removeEventListener("gds-design-version-changed",e)),"2023"===t.designVersion)return void i()}o()}register(t,e){let s=e;(0,a.S7)(this,i)&&(s=`@layer reset {\n        *:not(style, [gds-element]) {\n          all: revert;\n        }\n      }\n      ${e}`),(0,a.S7)(this,o).set(t,s),this.applyToElement(t,s)}}},7595:(t,e,s)=>{s.d(e,{t:()=>q});var o=s(6861),r=s(9443),i=s(4367),a=s(3578),n=s(4652),l=s(505),c=s(911),d=s(3539),g=s(7526),p=s(5073),v=r.AH`
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
`;let u=class extends d.j{constructor(){super(...arguments),this.onmousedown=t=>{this.triggerRipple(t.clientX,t.clientY)}}render(){return r.qy`<div></div>`}triggerRipple(t,e){const s=this._rippleEl,o=this.getBoundingClientRect(),r=void 0!==t?t-o.left:o.width/2,i=void 0!==e?e-o.top:o.height/2;s&&(s.classList.remove("gds-ripple-effect"),this.style.setProperty("--gds-ripple-top",`${i}px`),this.style.setProperty("--gds-ripple-left",`${r}px`),setTimeout(()=>{s.classList.add("gds-ripple-effect")},20))}};u.styles=[p.LU,v],(0,o.Cc)([(0,i.P)("div")],u.prototype,"_rippleEl",2),u=(0,o.Cc)([(0,g.Y$)("gds-ripple")],u);var y=s(4457),h=s(685),b=s(9399),m=s(4469),f=s(9295);class k extends m.WL{constructor(t){if(super(t),t.type!==m.OA.ELEMENT)throw new Error("The `forwardAttributes` directive must be used in element bindings")}render(t){return f.s6}update(t,[e]){const s=t.element,o=t.options?.host;Array.from(o.attributes).forEach(t=>{e(t)&&s.setAttribute(t.name.replace("gds-",""),t.value)})}}const x=(0,m.u$)(k),w=new WeakMap;var S,C,M,_,V,E,T,z=s(4987),L=s(8558),$=r.AH`
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
`;const A=["aria-label","aria-haspopup","aria-expanded"],Z=(U=g.qy,(t,...e)=>{let s=w.get(t);return s||(s=t.map(t=>t.replace(/\n[\s]+</gm,"<")),s.raw=t.raw,w.set(t,s)),U(s,...e)});var U;class F extends L.S{constructor(){super(...arguments),(0,o.VK)(this,C),this.disabled=!1,this.rank="primary",this.variant="neutral",this.size="medium",this.label="",this.href="",(0,o.VK)(this,S,!1),(0,o.VK)(this,V,()=>{const t=this._mainSlot?.assignedElements()??[];(0,o.OV)(this,S,1===t.length&&(t[0].tagName.toLowerCase().startsWith("gds-icon")||"icon"===t[0].getAttribute("name"))),this.requestUpdate()}),(0,o.VK)(this,E,t=>{this.dispatchCustomEvent("gds-click",{bubbles:!0,composed:!0,detail:t}),this.form&&!(0,o.S7)(this,C,M)&&("submit"===this.type?this.form.requestSubmit():"reset"===this.type&&this.form.reset())}),(0,o.VK)(this,T,t=>{if(!(this.disabled||"Space"!==t.code&&"Enter"!==t.key||t.repeat)){const t=this._ripple;t&&t.triggerRipple()}})}focus(t){this._getValidityAnchor()?.focus(t)}click(){this._getValidityAnchor()?.click()}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none"),y.n.instance.apply(this,"gds-button")}render(){const t={button:!0,circle:(0,o.S7)(this,S),icon:(0,o.S7)(this,S),xs:"xs"===this.size,small:"small"===this.size,large:"large"===this.size,brand:"brand"===this.variant,positive:"positive"===this.variant,negative:"negative"===this.variant,notice:"notice"===this.variant,warning:"warning"===this.variant,primary:"primary"===this.rank,secondary:"secondary"===this.rank,tertiary:"tertiary"===this.rank},e=(0,o.S7)(this,C,M)?c.eu`a`:c.eu`button`;return c.qy`
      <${e}
        class=${(0,a.H)(t)}
        type="${(0,n.J)((0,o.S7)(this,C,M)?void 0:this.type)}"
        ?disabled="${this.disabled}"
        aria-label=${this.label||r.s6}
        href=${(0,n.J)((0,o.S7)(this,C,M)?this.href:void 0)}
        target=${(0,n.J)((0,o.S7)(this,C,M)?this.target:void 0)}
        rel=${(0,n.J)((0,o.S7)(this,C,M)?this.rel||(0,o.S7)(this,C,_):void 0)}
        download=${(0,n.J)((0,o.S7)(this,C,M)?this.download:void 0)}
        part="_button"
        @click="${(0,o.S7)(this,E)}"
        @keydown="${(0,o.S7)(this,T)}"
        ${x(t=>t.name.startsWith("gds-aria")||"gds-role"===t.name||A.includes(t.name))}
      >
        <slot name="lead"></slot>
        <slot @slotchange=${(0,o.S7)(this,V)}></slot>
        <slot name="trail"></slot>
        ${(0,l.z)(!this._isUsingTransitionalStyles,()=>Z`<gds-ripple part="_ripple"></gds-ripple>`)}
      </${e}>
      `}_getValidityAnchor(){return this._button}_attributeChanged(){this.requestUpdate()}}S=new WeakMap,C=new WeakSet,M=function(){return this.href.length>0},_=function(){return"_blank"===this.target?"noreferrer noopener":void 0},V=new WeakMap,E=new WeakMap,T=new WeakMap,F.styles=[p.LU,$],F.shadowRootOptions={mode:"open",delegatesFocus:!0},(0,o.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],F.prototype,"disabled",2),(0,o.Cc)([(0,b.F)({selector:".button"})],F.prototype,"justify-content",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],F.prototype,"type",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],F.prototype,"rank",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],F.prototype,"variant",2),(0,o.Cc)([(0,i.MZ)({reflect:!0})],F.prototype,"size",2),(0,o.Cc)([(0,i.MZ)()],F.prototype,"label",2),(0,o.Cc)([(0,i.MZ)()],F.prototype,"href",2),(0,o.Cc)([(0,i.MZ)()],F.prototype,"target",2),(0,o.Cc)([(0,i.MZ)()],F.prototype,"rel",2),(0,o.Cc)([(0,i.MZ)()],F.prototype,"download",2),(0,o.Cc)([(0,i.P)("slot:not([name])")],F.prototype,"_mainSlot",2),(0,o.Cc)([(0,i.P)(".button")],F.prototype,"_button",2),(0,o.Cc)([(0,i.P)("gds-ripple")],F.prototype,"_ripple",2),(0,o.Cc)([(0,h.L)({attributes:!0,childList:!1,subtree:!1,characterData:!1})],F.prototype,"_attributeChanged",1);let q=class extends((0,z.Q8)((0,z.TM)((0,z.lt)(F)))){};q=(0,o.Cc)([(0,g.Y$)("gds-button",{dependsOn:[u]})],q)},8558:(t,e,s)=>{s.d(e,{S:()=>l});var o,r=s(6861),i=s(4367),a=s(3539),n=s(1374);s(8337).S||function(t){function e(t,e,s="Error"){throw new t("Failed to execute 'requestSubmit' on 'HTMLFormElement': "+e+".",s)}"function"!=typeof t.requestSubmit&&(t.requestSubmit=function(t=null){t?(function(t,s){t instanceof HTMLElement||e(TypeError,"parameter 1 is not of type 'HTMLElement'"),"submit"==t.type||e(TypeError,"The specified element is not a submit button"),t.form==s||e(DOMException,"The specified element is not owned by this form element","NotFoundError")}(t,this),t.click()):((t=document.createElement("input")).type="submit",t.hidden=!0,this.appendChild(t),t.click(),this.removeChild(t))})}(HTMLFormElement.prototype);class l extends a.j{constructor(){super(),(0,r.VK)(this,o),this.required=!1,this.errorMessage="",this.label="",this.name="",this.disabled=!1;try{(0,r.OV)(this,o,this.attachInternals())}catch(t){(0,r.OV)(this,o,{form:this.closest("form"),setFormValue:t=>{this._internalValue=t},setValidity:(t,e)=>{(0,r.S7)(this,o).validity=t,this.errorMessage=e||""},validationMessage:"",validity:{badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valueMissing:!1,valid:!0},willValidate:!0,checkValidity:this.checkValidity.bind(this),reportValidity:this.reportValidity.bind(this)})}}connectedCallback(){if(super.connectedCallback(),"function"!=typeof this.attachInternals){const t=this.closest("form");t&&(t.addEventListener("submit",this._handleFormSubmit.bind(this)),t.addEventListener("reset",this.formResetCallback.bind(this)))}}set invalid(t){const e=this.invalid;(0,r.S7)(this,o).setValidity({...(0,r.S7)(this,o).validity,customError:t,valid:!t},this.errorMessage||this.validationMessage||"   ",this._getValidityAnchor()||void 0),this.requestUpdate("invalid",e),(0,r.S7)(this,o).checkValidity()}get invalid(){return!(0,r.S7)(this,o).validity.valid}get value(){return this._internalValue}set value(t){this._internalValue=t,(0,r.S7)(this,o).setFormValue(t)}get form(){return(0,r.S7)(this,o).form}get validity(){return(0,r.S7)(this,o).validity}get validationMessage(){return(0,r.S7)(this,o).validationMessage}get willValidate(){return(0,r.S7)(this,o).willValidate}checkValidity(){if(!this._getValidityAnchor()||!this.validator)return!0;const t=this.invalid,e=this.validator.validate(this)||[{...this.validity,valid:!0},""];return this.errorMessage=e[1]||this.errorMessage,(0,r.S7)(this,o).setValidity(e[0],e[1],this._getValidityAnchor()),t!==this.invalid&&(this.requestUpdate("invalid",t),this.dispatchCustomEvent("gds-validity-state",{detail:{valid:this.validity.valid,message:this.validationMessage},composed:!0})),(0,r.S7)(this,o).checkValidity()}reportValidity(){return(0,r.S7)(this,o).reportValidity()}__handleValueChange(){this.checkValidity()}formResetCallback(){"string"==typeof this.value?this.value="":Array.isArray(this.value)?this.value=[]:this.value=void 0}formAssociatedCallback(t){t?.addEventListener("submit",this._handleFormSubmit.bind(this))}_handleFormSubmit(t){this.checkValidity(),this.validity.valid||t.preventDefault()}}o=new WeakMap,l.formAssociated=!0,(0,r.Cc)([(0,i.MZ)({attribute:!1})],l.prototype,"validator",2),(0,r.Cc)([(0,i.MZ)({type:Boolean})],l.prototype,"required",2),(0,r.Cc)([(0,i.MZ)({attribute:"error-message"})],l.prototype,"errorMessage",2),(0,r.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],l.prototype,"invalid",1),(0,r.Cc)([(0,i.MZ)()],l.prototype,"label",2),(0,r.Cc)([(0,i.MZ)()],l.prototype,"value",1),(0,r.Cc)([(0,i.MZ)({reflect:!0})],l.prototype,"name",2),(0,r.Cc)([(0,i.MZ)({type:Boolean,reflect:!0})],l.prototype,"disabled",2),(0,r.Cc)([(0,n.w)("value",{waitUntilFirstUpdate:!0})],l.prototype,"__handleValueChange",1)}}]);
//# sourceMappingURL=7595.443d39c4.iframe.bundle.js.map
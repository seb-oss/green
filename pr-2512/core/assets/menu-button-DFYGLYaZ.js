import{n as i}from"./Reflect-DJ7r0WLU.js";import{e as b}from"./class-map-CXsQwv0r.js";import{o as p}from"./if-defined-CVqwUuaf.js";import{i as g,u as m}from"./static-B8S6DEnV.js";import{G as y,g as _}from"./gds-element-DTROifYq.js";import{t as w}from"./tokens.style-DeseHqaM.js";import{w as x,d as k}from"./declarative-layout-mixins-DFPXvh_g.js";import{i as $}from"./lit-element-Bx14lxc-.js";const z=$`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-sys-space-xs);

      --_padding-inline: var(--gds-sys-space-m);
      --_padding-block: var(--gds-sys-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-sys-color-content-neutral-01);
      --_color-border: transparent;

      --_font-size: 1rem;
      --_font-weight: 400;
      --_line-height: 1.25;

      display: inline-block;
      isolation: isolate;
      max-width: 100%;
      height: 100%;
    }
  }

  @layer core {
    .button {
      align-items: center;
      background-color: var(--_color-bg);
      border-bottom-width: 2px;
      border-style: none;
      border-color: var(--_color-border);
      border-bottom-style: solid;
      box-sizing: border-box;
      color-scheme: dark light;
      color: var(--_color-text);
      cursor: pointer;
      display: inline-flex;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      gap: var(--_gap);
      height: 100%;
      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      line-height: var(--_line-height);
      outline-color: transparent;
      outline-offset: -2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      transition-property: color, border-color;
      transition: all var(--gds-sys-motion-duration-fastest);

      &:focus-visible {
        border-color: transparent;
        border-radius: 6px;
        outline-color: currentColor;
        overflow: visible;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-05)
        );
        --_color-border: var(--gds-sys-color-border-interactive);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-sys-color-state-neutral-06)
        );
        --_color-border: var(--gds-sys-color-border-strong);
      }

      slot:not([name]) {
        display: inline-block;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
    }
    .compact {
      display: flex;
      flex-direction: column;
      --_padding-inline: var(--gds-sys-space-s);
      --_gap: 1px;
      font-size: 0.875rem;
      height: 56px;
      justify-content: center;

      & > slot[name] {
        order: 0;
      }
      & > slot:not([name]) {
        order: 1;
      }
    }

    a {
      text-decoration: none;
    }
  }

  :disabled {
    border-color: var(--_color-bg);
    color: var(--gds-sys-color-content-disabled-01);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`;var C=Object.defineProperty,P=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},s=(t,e,r,c)=>{for(var n=c>1?void 0:c?P(e,r):e,h=t.length-1,f;h>=0;h--)(f=t[h])&&(n=(c?f(e,r,n):f(n))||n);return c&&n&&C(e,r,n),n},B=(t,e,r)=>e.has(t)||v("Cannot "+r),l=(t,e,r)=>(B(t,e,"read from private field"),r?r.call(t):e.get(t)),G=(t,e,r)=>e.has(t)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),a,d,u;let o=class extends x(k(y)){constructor(){super(),G(this,a),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const t={button:!0,selected:this.selected,compact:this.compact},e=l(this,a,d)?g`a`:g`button`;return m`
      <${e}
        class="${b(t)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${p(l(this,a,d)?this.href:void 0)}
        target=${p(l(this,a,d)?this.target:void 0)}
        rel=${p(l(this,a,d)?this.rel||l(this,a,u):void 0)}
        download=${p(l(this,a,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};a=new WeakSet;d=function(){return this.href.length>0};u=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[w,z];o.shadowRootOptions={mode:"open",delegatesFocus:!0};s([i({type:Boolean,reflect:!0})],o.prototype,"disabled",2);s([i()],o.prototype,"label",2);s([i()],o.prototype,"href",2);s([i()],o.prototype,"target",2);s([i()],o.prototype,"rel",2);s([i()],o.prototype,"download",2);s([i({type:Boolean,reflect:!0})],o.prototype,"compact",2);s([i({type:Boolean,reflect:!0})],o.prototype,"selected",2);o=s([_("gds-menu-button")],o);o.define();

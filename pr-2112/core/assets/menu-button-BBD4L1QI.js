import{i as u,r as m}from"./lit-element-Bx14lxc-.js";import{n as a,G as _,g as y}from"./custom-element-scoping-b4c89-hi.js";import{e as w}from"./class-map-CXsQwv0r.js";import{o as p}from"./if-defined-CVqwUuaf.js";import{i as f,u as x}from"./static-B8S6DEnV.js";import{t as k}from"./tokens.style-BY4y5f1K.js";import{w as $,d as z}from"./declarative-layout-mixins-CxeMR8ZJ.js";const C=u`
  @layer tokens, core, a11y, disabled, variants, sizes, sets;

  @layer tokens {
    :host {
      --_gap: var(--gds-space-xs);

      --_padding-inline: var(--gds-space-m);
      --_padding-block: var(--gds-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-color-l3-content-tertiary);
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

      border-color: var(--_color-border);
      border-style: none;
      border-bottom-style: solid;
      border-bottom-width: 2px;

      box-sizing: border-box;
      color: var(--_color-text);
      color-scheme: dark light;
      cursor: pointer;

      display: inline-flex;
      gap: var(--_gap);
      height: 100%;

      inline-size: 100%;
      justify-content: space-between;
      justify-items: center;
      outline-color: transparent;
      outline-offset: -2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      line-height: var(--_line-height);
      transition-property: color, border-color;
      transition: all 0.4s;

      &:focus-visible {
        outline-color: currentColor;
        border-radius: 6px;
        overflow: visible;
        border-color: transparent;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-color-l3-border-secondary);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
        --_color-border: var(--gds-color-l3-border-primary);
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
      --_padding-inline: var(--gds-space-s);
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
    color: var(--gds-color-l3-content-disabled);
    pointer-events: none;
  }

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .button {
        transition: none;
      }
    }
  }
`;var P=Object.defineProperty,B=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},s=(t,e,r,c)=>{for(var n=c>1?void 0:c?B(e,r):e,h=t.length-1,g;h>=0;h--)(g=t[h])&&(n=(c?g(e,r,n):g(n))||n);return c&&n&&P(e,r,n),n},G=(t,e,r)=>e.has(t)||v("Cannot "+r),l=(t,e,r)=>(G(t,e,"read from private field"),r?r.call(t):e.get(t)),O=(t,e,r)=>e.has(t)?v("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),i,d,b;let o=class extends $(z(_)){constructor(){super(),O(this,i),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const t={button:!0,selected:this.selected,compact:this.compact},e=l(this,i,d)?f`a`:f`button`;return x`
      <${e}
        class="${w(t)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${p(l(this,i,d)?this.href:void 0)}
        target=${p(l(this,i,d)?this.target:void 0)}
        rel=${p(l(this,i,d)?this.rel||l(this,i,b):void 0)}
        download=${p(l(this,i,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};i=new WeakSet;d=function(){return this.href.length>0};b=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[k,m(C)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};s([a({type:Boolean,reflect:!0})],o.prototype,"disabled",2);s([a()],o.prototype,"label",2);s([a()],o.prototype,"href",2);s([a()],o.prototype,"target",2);s([a()],o.prototype,"rel",2);s([a()],o.prototype,"download",2);s([a({type:Boolean,reflect:!0})],o.prototype,"compact",2);s([a({type:Boolean,reflect:!0})],o.prototype,"selected",2);o=s([y("gds-menu-button")],o);o.define();

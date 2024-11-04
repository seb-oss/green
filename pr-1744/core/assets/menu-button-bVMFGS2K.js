import{i as _,r as u}from"./lit-element-C_s9q329.js";import{n as i,g as m,G as y}from"./custom-element-scoping-CpYtbs9r.js";import{e as x}from"./class-map-Bz98xO8-.js";import{o as p}from"./if-defined-Ct9lF4W9.js";import{i as v,u as w}from"./static-_ukc2i0J.js";import{t as k}from"./tokens.style-Dw60-dNf.js";const $=_`
  @layer tokens, a11y, core, variants, sizes, sets, disabled;

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
      outline-offset: 2px;
      outline-style: solid;
      outline-width: 2px;
      padding-block: var(--_padding-block);
      padding-inline: var(--_padding-inline);
      position: relative;
      font-family: inherit;
      font-size: var(--_font-size);
      font-weight: var(--_font-weight);
      line-height: var(--_line-height);

      &:focus-visible {
        outline-color: color-mix(in srgb, currentcolor, #000 100%);
        border-radius: 2px;
        overflow: visible;
      }

      &:hover,
      &.selected:hover,
      &:active {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
        // --_color-bg: var(--gds-sys-color-base200);
        --_color-border: var(--gds-sys-color-base600);
      }

      &.selected {
        background-color: color-mix(
          in srgb,
          transparent,
          var(--gds-color-l3-states-light-hover)
        );
        // --_color-bg: var(--gds-sys-color-base100);
        --_color-border: var(--gds-sys-color-base700);
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

  @layer disabled {
    :disabled {
      --_color-bg: var(--gds-sys-color-container-container-disabled);
      border-color: var(--_color-bg);
      color: var(--gds-sys-color-content-content-disabled);
      pointer-events: none;
    }
  }
`;var z=Object.defineProperty,B=Object.getOwnPropertyDescriptor,b=o=>{throw TypeError(o)},s=(o,e,r,c)=>{for(var l=c>1?void 0:c?B(e,r):e,h=o.length-1,g;h>=0;h--)(g=o[h])&&(l=(c?g(e,r,l):g(l))||l);return c&&l&&z(e,r,l),l},C=(o,e,r)=>e.has(o)||b("Cannot "+r),n=(o,e,r)=>(C(o,e,"read from private field"),r?r.call(o):e.get(o)),G=(o,e,r)=>e.has(o)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,r),a,d,f;let t=class extends y{constructor(){super(),G(this,a),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const o={button:!0,selected:this.selected,compact:this.compact},e=n(this,a,d)?v`a`:v`button`;return w`
      <${e}
        class="${x(o)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${p(n(this,a,d)?this.href:void 0)}
        target=${p(n(this,a,d)?this.target:void 0)}
        rel=${p(n(this,a,d)?this.rel||n(this,a,f):void 0)}
        download=${p(n(this,a,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};a=new WeakSet;d=function(){return this.href.length>0};f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};t.styles=[k,u($)];t.shadowRootOptions={mode:"open",delegatesFocus:!0};s([i({type:Boolean,reflect:!0})],t.prototype,"disabled",2);s([i()],t.prototype,"label",2);s([i()],t.prototype,"href",2);s([i()],t.prototype,"target",2);s([i()],t.prototype,"rel",2);s([i()],t.prototype,"download",2);s([i({type:Boolean,reflect:!0})],t.prototype,"compact",2);s([i({type:Boolean,reflect:!0})],t.prototype,"selected",2);t=s([m("gds-menu-button")],t);

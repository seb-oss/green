import{i as _,r as u}from"./lit-element-C_s9q329.js";import{n as l,g as y,G as m}from"./custom-element-scoping-CpYtbs9r.js";import{e as x}from"./class-map-Bz98xO8-.js";import{o as p}from"./if-defined-Ct9lF4W9.js";import{i as v,u as w}from"./static-_ukc2i0J.js";import{t as k}from"./tokens.style-RalixZsd.js";const $=_`
  @layer tokens, a11y, core, variants, sizes, sets, disabled;

  @layer tokens {
    :host {
      --_gap: 8px;

      --_padding-inline: var(--gds-space-m);
      --_padding-block: var(--gds-space-xs);

      --_color-bg: transparent;
      --_color-text: var(--gds-sys-color-primary-text);
      --_color-border: transparent;

      --_color-outline-alpha: 60%;
      --_color-outline: var(--gds-sys-color-border-stroke);

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
        outline-color: color-mix(
          in srgb,
          var(--_color-outline),
          transparent var(--_color-outline-alpha)
        );
        border-radius: 2px;
        overflow: visible;
      }

      &:hover,
      &.selected:hover,
      &:active {
        --_color-bg: var(--gds-sys-color-base200);
        --_color-border: var(--gds-sys-color-base600);
      }

      &.selected {
        --_color-bg: var(--gds-sys-color-base100);
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
`;var z=Object.defineProperty,B=Object.getOwnPropertyDescriptor,f=o=>{throw TypeError(o)},s=(o,e,r,c)=>{for(var i=c>1?void 0:c?B(e,r):e,h=o.length-1,g;h>=0;h--)(g=o[h])&&(i=(c?g(e,r,i):g(i))||i);return c&&i&&z(e,r,i),i},C=(o,e,r)=>e.has(o)||f("Cannot "+r),n=(o,e,r)=>(C(o,e,"read from private field"),r?r.call(o):e.get(o)),G=(o,e,r)=>e.has(o)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(o):e.set(o,r),a,d,b;let t=class extends m{constructor(){super(),G(this,a),this.disabled=!1,this.label="",this.href="",this.compact=!1,this.selected=!1}render(){const o={button:!0,selected:this.selected,compact:this.compact},e=n(this,a,d)?v`a`:v`button`;return w`
      <${e}
        class="${x(o)}"
        ?disabled="${this.disabled}"
        aria-label="${this.label}"
        href=${p(n(this,a,d)?this.href:void 0)}
        target=${p(n(this,a,d)?this.target:void 0)}
        rel=${p(n(this,a,d)?this.rel||n(this,a,b):void 0)}
        download=${p(n(this,a,d)?this.download:void 0)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </${e}>
    `}};a=new WeakSet;d=function(){return this.href.length>0};b=function(){return this.target==="_blank"?"noreferrer noopener":void 0};t.styles=[k,u($)];t.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l({type:Boolean,reflect:!0})],t.prototype,"disabled",2);s([l()],t.prototype,"label",2);s([l()],t.prototype,"href",2);s([l()],t.prototype,"target",2);s([l()],t.prototype,"rel",2);s([l()],t.prototype,"download",2);s([l({type:Boolean,reflect:!0})],t.prototype,"compact",2);s([l({type:Boolean,reflect:!0})],t.prototype,"selected",2);t=s([y("gds-menu-button")],t);

import{i as v,r as u}from"./lit-element-C_s9q329.js";import{n as s,g as _,G as y}from"./custom-element-scoping-b4lD3laR.js";import{e as m}from"./class-map-Bz98xO8-.js";import{o as l}from"./if-defined-Ct9lF4W9.js";import{u as g}from"./static-_ukc2i0J.js";import{t as w}from"./tokens.style-Y0rrifyK.js";const x=v`
  @layer core, link;

  @layer core {
    :host {
      display: inline-block;
    }
  }

  @layer link {
    a {
      display: flex;
      align-items: center;
      gap: 1ch;
      text-decoration: underline;
      text-underline-offset: 0.2lh;
      color: currentColor;
      outline-offset: 4px;
      outline-color: currentColor;
      font-weight: var(--gds-text-weight-book);

      &:hover {
        text-decoration: none;
      }

      &.secondary {
        text-decoration: none;

        &:hover {
          text-decoration: underline;
        }
      }

      &.hidden {
        text-decoration: none;
      }
    }
  }
`;var C=Object.defineProperty,k=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},a=(e,t,r,i)=>{for(var n=i>1?void 0:i?k(t,r):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(n=(i?p(t,r,n):p(n))||n);return i&&n&&C(t,r,n),n},E=(e,t,r)=>t.has(e)||h("Cannot "+r),G=(e,t,r)=>(E(e,t,"read from private field"),r?r.call(e):t.get(e)),O=(e,t,r)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c,f;let o=class extends y{constructor(){super(),O(this,c),this.href="",this.variant="default"}render(){const e={secondary:this.variant==="secondary",hidden:this.variant==="hidden"};return g`
      <a
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel||G(this,c,f))}
        download=${l(this.download)}
        class=${m(e)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};c=new WeakSet;f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[w,u(x)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};a([s()],o.prototype,"href",2);a([s()],o.prototype,"target",2);a([s()],o.prototype,"rel",2);a([s()],o.prototype,"download",2);a([s()],o.prototype,"variant",2);o=a([_("gds-link")],o);

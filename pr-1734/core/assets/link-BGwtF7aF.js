import{i as u,r as v}from"./lit-element-C_s9q329.js";import{n as i,g as _,G as g}from"./custom-element-scoping-CpYtbs9r.js";import{o as l}from"./if-defined-Ct9lF4W9.js";import{u as m}from"./static-_ukc2i0J.js";import{t as y}from"./tokens.style-RalixZsd.js";const w=u`
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
    }
  }
`;var k=Object.defineProperty,x=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},a=(e,t,r,s)=>{for(var n=s>1?void 0:s?x(t,r):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(n=(s?p(t,r,n):p(n))||n);return s&&n&&k(t,r,n),n},C=(e,t,r)=>t.has(e)||f("Cannot "+r),G=(e,t,r)=>(C(e,t,"read from private field"),r?r.call(e):t.get(e)),O=(e,t,r)=>t.has(e)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c,h;let o=class extends g{constructor(){super(),O(this,c),this.href=""}render(){return m`
      <a
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel||G(this,c,h))}
        download=${l(this.download)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};c=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[y,v(w)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};a([i()],o.prototype,"href",2);a([i()],o.prototype,"target",2);a([i()],o.prototype,"rel",2);a([i()],o.prototype,"download",2);o=a([_("gds-link")],o);

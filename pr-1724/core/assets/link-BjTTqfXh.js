import{r as v}from"./lit-element-C_s9q329.js";import{n as i,g as u,G as _}from"./custom-element-scoping-CpYtbs9r.js";import{o as l}from"./if-defined-Ct9lF4W9.js";import{u as g}from"./static-_ukc2i0J.js";import{t as m}from"./tokens.style-RalixZsd.js";const y="@layer tokens,a11y,core,variants,sizes,sets;@layer tokens{:host{display:inline-block}}@layer core{a{display:flex;align-items:center;gap:1ch;text-decoration:underline;text-underline-offset:.2lh;color:currentColor;outline-offset:4px;outline-color:currentColor;font-weight:var(--gds-text-weight-book)}a:hover{text-decoration:none}}";var w=Object.defineProperty,k=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},a=(e,t,r,n)=>{for(var s=n>1?void 0:n?k(t,r):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(s=(n?p(t,r,s):p(s))||s);return n&&s&&w(t,r,s),s},x=(e,t,r)=>t.has(e)||f("Cannot "+r),C=(e,t,r)=>(x(e,t,"read from private field"),r?r.call(e):t.get(e)),G=(e,t,r)=>t.has(e)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c,h;let o=class extends _{constructor(){super(),G(this,c),this.href=""}render(){return g`
      <a
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel||C(this,c,h))}
        download=${l(this.download)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};c=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[m,v(y)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};a([i()],o.prototype,"href",2);a([i()],o.prototype,"target",2);a([i()],o.prototype,"rel",2);a([i()],o.prototype,"download",2);o=a([u("gds-link")],o);

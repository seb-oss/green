import{r as v}from"./lit-element-C_s9q329.js";import{n,g as u,G as _}from"./custom-element-scoping-CpYtbs9r.js";import{e as m}from"./class-map-Bz98xO8-.js";import{o as i}from"./if-defined-Ct9lF4W9.js";import{u as y}from"./static-_ukc2i0J.js";import{t as g}from"./tokens.style-RalixZsd.js";const w="@layer tokens,a11y,core,variants,sizes,sets;@layer tokens{:host{display:inline-block}}@layer core{a{display:flex;align-items:center;gap:1ch;text-decoration:underline;text-underline-offset:.2lh;color:currentColor;outline-offset:4px;outline-color:currentColor;font-weight:var(--gds-text-weight-book)}a:hover{text-decoration:none}a.disabled{pointer-events:none;color:var(--gds-color-l3-content-disabled)}}";var k=Object.defineProperty,x=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},a=(e,t,o,l)=>{for(var s=l>1?void 0:l?x(t,o):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(s=(l?p(t,o,s):p(s))||s);return l&&s&&k(t,o,s),s},C=(e,t,o)=>t.has(e)||f("Cannot "+o),G=(e,t,o)=>(C(e,t,"read from private field"),o?o.call(e):t.get(e)),O=(e,t,o)=>t.has(e)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),c,h;let r=class extends _{constructor(){super(),O(this,c),this.href="",this.disabled=!1}render(){const e={disabled:this.disabled};return y`
      <a
        class="${m(e)}"
        href=${i(this.href)}
        target=${i(this.target)}
        rel=${i(this.rel||G(this,c,h))}
        download=${i(this.download)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </a>
    `}};c=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};r.styles=[g,v(w)];r.shadowRootOptions={mode:"open",delegatesFocus:!0};a([n()],r.prototype,"href",2);a([n()],r.prototype,"target",2);a([n()],r.prototype,"rel",2);a([n()],r.prototype,"download",2);a([n({type:Boolean,reflect:!0})],r.prototype,"disabled",2);r=a([u("gds-link")],r);

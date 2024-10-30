import{r as v}from"./lit-element-C_s9q329.js";import{n,g as _,G as m}from"./custom-element-scoping-CpYtbs9r.js";import{e as u}from"./class-map-Bz98xO8-.js";import{o as i}from"./if-defined-Ct9lF4W9.js";import{u as y}from"./static-_ukc2i0J.js";import{t as g}from"./tokens.style-RalixZsd.js";const w="@layer tokens,a11y,core,variants,sizes,sets;@layer tokens{:host{display:inline-block}}@layer core{a{display:flex;align-items:center;gap:1ch;text-decoration:underline;text-underline-offset:.2lh;color:currentColor}a:hover{text-decoration:none}a.disabled{pointer-events:none;color:var(--gds-color-l3-content-disabled)}}";var k=Object.defineProperty,C=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},a=(e,t,r,l)=>{for(var s=l>1?void 0:l?C(t,r):t,d=e.length-1,p;d>=0;d--)(p=e[d])&&(s=(l?p(t,r,s):p(s))||s);return l&&s&&k(t,r,s),s},x=(e,t,r)=>t.has(e)||f("Cannot "+r),G=(e,t,r)=>(x(e,t,"read from private field"),r?r.call(e):t.get(e)),O=(e,t,r)=>t.has(e)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c,h;let o=class extends m{constructor(){super(),O(this,c),this.href="",this.disabled=!1}render(){const e={disabled:this.disabled};return y`
      <a
        class="${u(e)}"
        href=${i(this.href)}
        target=${i(this.target)}
        rel=${i(this.rel||G(this,c,h))}
        download=${i(this.download)}
      >
        <slot name="lead"></slot>
        <slot part="main-slot"></slot>
        <slot name="trail"></slot>
      </a>
    `}};c=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[g,v(w)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};a([n()],o.prototype,"href",2);a([n()],o.prototype,"target",2);a([n()],o.prototype,"rel",2);a([n()],o.prototype,"download",2);a([n({type:Boolean,reflect:!0})],o.prototype,"disabled",2);o=a([_("gds-link")],o);

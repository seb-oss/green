import{i as u,r as v}from"./lit-element-C_s9q329.js";import{n as i,g as _,G as m}from"./custom-element-scoping-BRwcB39g.js";import{o as l}from"./if-defined-Ct9lF4W9.js";import{u as y}from"./static-_ukc2i0J.js";import{t as g}from"./tokens.style-SarioPsh.js";import{s as x}from"./style-expression-property-Dbto4vYM.js";const w=u`
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
      text-decoration: none;
      text-underline-offset: 0.2lh;
      color: currentColor;
      outline-offset: 4px;
      outline-color: currentColor;
      font-weight: var(--gds-text-weight-book);
      transition: all 0.2s ease-in-out;

      &:hover {
        text-decoration: underline;
        text-underline-offset: 0.16lh;

        &:active {
          text-underline-offset: 0.08lh;
        }
      }
    }
  }
`;var k=Object.defineProperty,C=Object.getOwnPropertyDescriptor,c=e=>{throw TypeError(e)},n=(e,t,r,a)=>{for(var s=a>1?void 0:a?C(t,r):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(s=(a?d(t,r,s):d(s))||s);return a&&s&&k(t,r,s),s},E=(e,t,r)=>t.has(e)||c("Cannot "+r),G=(e,t,r)=>(E(e,t,"read from private field"),r?r.call(e):t.get(e)),O=(e,t,r)=>t.has(e)?c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),f,h;let o=class extends m{constructor(){super(),O(this,f),this.href=""}render(){return y`
      <a
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel||G(this,f,h))}
        download=${l(this.download)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};f=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[g,v(w)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};n([i()],o.prototype,"href",2);n([i()],o.prototype,"target",2);n([i()],o.prototype,"rel",2);n([i()],o.prototype,"download",2);n([x({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=n([_("gds-link")],o);

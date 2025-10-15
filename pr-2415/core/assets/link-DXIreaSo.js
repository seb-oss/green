import{i as f,E as u,r as m}from"./lit-element-Bx14lxc-.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{u as _}from"./static-B8S6DEnV.js";import{g as w,G as g}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-BcVhf7GG.js";import{a as x,w as k,b as C,s as P}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as b}from"./props-link-Bzbn9FCH.js";const E=f`
  @layer core, link;

  @layer core {
    :host {
      display: inline-block;
      white-space: normal;
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
      font-weight: var(--gds-sys-text-weight-book);
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
`;var G=Object.defineProperty,O=Object.getOwnPropertyDescriptor,c=e=>{throw TypeError(e)},d=(e,t,r,s)=>{for(var o=s>1?void 0:s?O(t,r):t,l=e.length-1,i;l>=0;l--)(i=e[l])&&(o=(s?i(t,r,o):i(o))||o);return s&&o&&G(t,r,o),o},$=(e,t,r)=>t.has(e)||c("Cannot "+r),L=(e,t,r)=>($(e,t,"read from private field"),r?r.call(e):t.get(e)),S=(e,t,r)=>t.has(e)?c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),p,h;let a=class extends x(k(C(b(g)))){constructor(){super(...arguments),S(this,p),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return _`
      <a
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel||L(this,p,h))}
        download=${n(this.download)}
        aria-label=${this.label||u}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};p=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};a.styles=[y,m(E)];a.shadowRootOptions={mode:"open",delegatesFocus:!0};d([v()],a.prototype,"label",2);d([P({valueTemplate:e=>e,selector:"a"})],a.prototype,"text-decoration",2);a=d([w("gds-link")],a);a.define();export{a as G};

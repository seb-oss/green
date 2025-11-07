import{i as h,E as u,r as m}from"./lit-element-Bx14lxc-.js";import{n as v}from"./Reflect-DJ7r0WLU.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{u as g}from"./static-B8S6DEnV.js";import{g as y,G as _}from"./gds-element-DTROifYq.js";import{t as w}from"./tokens.style-BvFU043k.js";import{b as x,w as k,d as C,s as P}from"./declarative-layout-mixins-DFPXvh_g.js";import{w as b}from"./props-link-q-kPEFpu.js";const E=h`
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
      cursor: pointer;
      border-radius: var(--gds-sys-radius-3xs);
      outline-offset: var(--gds-sys-space-3xs);
      outline-color: currentColor;
      font-weight: var(--gds-sys-text-weight-book);
      will-change: text-underline-offset;
      transition-property: text-underline-offset;
      transition-duration: var(--gds-sys-motion-duration-fastest);
      transition-timing-function: var(--gds-sys-motion-easing-ease-in-out);

      @media (pointer: fine) {
        &:hover {
          text-decoration: underline;
          text-underline-offset: 0.16lh;

          &:active {
            text-underline-offset: 0.08lh;
          }
        }
      }
    }
  }
`;var G=Object.defineProperty,O=Object.getOwnPropertyDescriptor,c=e=>{throw TypeError(e)},p=(e,t,r,a)=>{for(var o=a>1?void 0:a?O(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(o=(a?l(t,r,o):l(o))||o);return a&&o&&G(t,r,o),o},$=(e,t,r)=>t.has(e)||c("Cannot "+r),L=(e,t,r)=>($(e,t,"read from private field"),r?r.call(e):t.get(e)),S=(e,t,r)=>t.has(e)?c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),d,f;let s=class extends x(k(C(b(_)))){constructor(){super(...arguments),S(this,d),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return g`
      <a
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel||L(this,d,f))}
        download=${n(this.download)}
        aria-label=${this.label||u}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};d=new WeakSet;f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};s.styles=[w,m(E)];s.shadowRootOptions={mode:"open",delegatesFocus:!0};p([v()],s.prototype,"label",2);p([P({valueTemplate:e=>e,selector:"a"})],s.prototype,"text-decoration",2);s=p([y("gds-link")],s);s.define();export{s as G};

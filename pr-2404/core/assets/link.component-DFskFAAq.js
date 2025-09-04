import{i as u,E as m,r as v}from"./lit-element-Bx14lxc-.js";import{n as l}from"./Reflect-DJ7r0WLU.js";import{o as i}from"./if-defined-BAXgs-ZI.js";import{u as y}from"./static-B8S6DEnV.js";import{G as _,g}from"./gds-element-DTROifYq.js";import{t as w}from"./tokens.style-BAmYQ5hh.js";import{b as x,w as C,d as k,s as P}from"./declarative-layout-mixins-DjJmHTNk.js";const b=u`
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
`;var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},s=(e,t,r,n)=>{for(var a=n>1?void 0:n?G(t,r):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(a=(n?d(t,r,a):d(a))||a);return n&&a&&E(t,r,a),a},O=(e,t,r)=>t.has(e)||h("Cannot "+r),$=(e,t,r)=>(O(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c,f;let o=class extends x(C(k(_))){constructor(){super(...arguments),L(this,c),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return y`
      <a
        href=${i(this.href)}
        target=${i(this.target)}
        rel=${i(this.rel||$(this,c,f))}
        download=${i(this.download)}
        aria-label=${this.label||m}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};c=new WeakSet;f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[w,v(b)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l()],o.prototype,"href",2);s([l()],o.prototype,"target",2);s([l()],o.prototype,"rel",2);s([l()],o.prototype,"label",2);s([l()],o.prototype,"download",2);s([P({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=s([g("gds-link")],o);export{o as G};

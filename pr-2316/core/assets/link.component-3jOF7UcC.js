import{i as u,E as v,r as m}from"./lit-element-Bx14lxc-.js";import{n as l,G as y,g as _}from"./gds-element-DKcDvDP5.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{u as g}from"./static-B8S6DEnV.js";import{t as w}from"./tokens.style-Khpz0lp_.js";import{b as x,w as C,d as k,s as P}from"./declarative-layout-mixins-D-CzJZ0x.js";const b=u`
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
`;var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},s=(e,t,r,n)=>{for(var a=n>1?void 0:n?G(t,r):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(a=(n?d(t,r,a):d(a))||a);return n&&a&&E(t,r,a),a},O=(e,t,r)=>t.has(e)||h("Cannot "+r),$=(e,t,r)=>(O(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c,f;let o=class extends x(C(k(y))){constructor(){super(...arguments),L(this,c),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return g`
      <a
        href=${i(this.href)}
        target=${i(this.target)}
        rel=${i(this.rel||$(this,c,f))}
        download=${i(this.download)}
        aria-label=${this.label||v}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};c=new WeakSet;f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[w,m(b)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};s([l()],o.prototype,"href",2);s([l()],o.prototype,"target",2);s([l()],o.prototype,"rel",2);s([l()],o.prototype,"label",2);s([l()],o.prototype,"download",2);s([P({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=s([_("gds-link")],o);export{o as G};

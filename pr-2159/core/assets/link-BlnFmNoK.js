import{i as u,E as v,r as m}from"./lit-element-Bx14lxc-.js";import{n,G as y,g as _}from"./custom-element-scoping-b4c89-hi.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{u as g}from"./static-B8S6DEnV.js";import{t as w}from"./tokens.style-OWC-W9l-.js";import{b as x,w as C,d as k,s as P}from"./declarative-layout-mixins-BgWwoHZ-.js";const b=u`
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
`;var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},s=(e,t,o,l)=>{for(var a=l>1?void 0:l?G(t,o):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(a=(l?d(t,o,a):d(a))||a);return l&&a&&E(t,o,a),a},O=(e,t,o)=>t.has(e)||h("Cannot "+o),$=(e,t,o)=>(O(e,t,"read from private field"),o?o.call(e):t.get(e)),L=(e,t,o)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),c,f;let r=class extends x(C(k(y))){constructor(){super(...arguments),L(this,c),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return g`
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
    `}};c=new WeakSet;f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};r.styles=[w,m(b)];r.shadowRootOptions={mode:"open",delegatesFocus:!0};s([n()],r.prototype,"href",2);s([n()],r.prototype,"target",2);s([n()],r.prototype,"rel",2);s([n()],r.prototype,"label",2);s([n()],r.prototype,"download",2);s([P({valueTemplate:e=>e,selector:"a"})],r.prototype,"text-decoration",2);r=s([_("gds-link")],r);r.define();

import{i as u,E as m,r as v}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{u as y}from"./static-B8S6DEnV.js";import{G as _,g}from"./gds-element-DTROifYq.js";import{t as w}from"./tokens.style-CyN6927s.js";import{a as x,w as C,b as k,s as P}from"./declarative-layout-mixins-DLWGR3wk.js";const b=u`
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
`;var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},s=(e,t,o,l)=>{for(var a=l>1?void 0:l?G(t,o):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(a=(l?d(t,o,a):d(a))||a);return l&&a&&E(t,o,a),a},O=(e,t,o)=>t.has(e)||h("Cannot "+o),$=(e,t,o)=>(O(e,t,"read from private field"),o?o.call(e):t.get(e)),L=(e,t,o)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,o),c,f;let r=class extends x(C(k(_))){constructor(){super(...arguments),L(this,c),this.href="",this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return y`
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
    `}};c=new WeakSet;f=function(){return this.target==="_blank"?"noreferrer noopener":void 0};r.styles=[w,v(b)];r.shadowRootOptions={mode:"open",delegatesFocus:!0};s([n()],r.prototype,"href",2);s([n()],r.prototype,"target",2);s([n()],r.prototype,"rel",2);s([n()],r.prototype,"label",2);s([n()],r.prototype,"download",2);s([P({valueTemplate:e=>e,selector:"a"})],r.prototype,"text-decoration",2);r=s([g("gds-link")],r);r.define();export{r as G};

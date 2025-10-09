import{i as _,E as v,r as m}from"./lit-element-Bx14lxc-.js";import{n as i}from"./Reflect-DJ7r0WLU.js";import{o as p}from"./if-defined-CVqwUuaf.js";import{u as w}from"./static-B8S6DEnV.js";import{g as y,G as g}from"./gds-element-DTROifYq.js";import{t as x}from"./tokens.style-CyN6927s.js";import{a as P,w as C,b,s as O}from"./declarative-layout-mixins-DLWGR3wk.js";var $=Object.defineProperty,k=Object.getOwnPropertyDescriptor,c=(t,e,r,s)=>{for(var o=s>1?void 0:s?k(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(o=(s?a(e,r,o):a(o))||o);return s&&o&&$(e,r,o),o};function E(t){class e extends t{get rel(){return this._rel?this._rel:this.target==="_blank"?"noreferrer noopener":void 0}set rel(s){this._rel=s}}return c([i()],e.prototype,"href",2),c([i()],e.prototype,"target",2),c([i()],e.prototype,"rel",1),c([i()],e.prototype,"download",2),e}const G=_`
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
`;var L=Object.defineProperty,D=Object.getOwnPropertyDescriptor,d=t=>{throw TypeError(t)},h=(t,e,r,s)=>{for(var o=s>1?void 0:s?D(e,r):e,n=t.length-1,a;n>=0;n--)(a=t[n])&&(o=(s?a(e,r,o):a(o))||o);return s&&o&&L(e,r,o),o},S=(t,e,r)=>e.has(t)||d("Cannot "+r),A=(t,e,r)=>(S(t,e,"read from private field"),r?r.call(t):e.get(t)),M=(t,e,r)=>e.has(t)?d("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),f,u;let l=class extends P(C(b(E(g)))){constructor(){super(...arguments),M(this,f),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return w`
      <a
        href=${p(this.href)}
        target=${p(this.target)}
        rel=${p(this.rel||A(this,f,u))}
        download=${p(this.download)}
        aria-label=${this.label||v}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};f=new WeakSet;u=function(){return this.target==="_blank"?"noreferrer noopener":void 0};l.styles=[x,m(G)];l.shadowRootOptions={mode:"open",delegatesFocus:!0};h([i()],l.prototype,"label",2);h([O({valueTemplate:t=>t,selector:"a"})],l.prototype,"text-decoration",2);l=h([y("gds-link")],l);l.define();export{l as G,E as w};

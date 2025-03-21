import{i as u,r as v}from"./lit-element-Bx14lxc-.js";import{n as i,G as _,g as m}from"./custom-element-scoping-BOlwUH_F.js";import{o as l}from"./if-defined-CVqwUuaf.js";import{u as y}from"./static-B8S6DEnV.js";import{t as g}from"./tokens.style-Db3B8yEB.js";import{b as w,w as x,d as C,s as P}from"./declarative-layout-mixins-CvhbdVQ9.js";const k=u`
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
`;var E=Object.defineProperty,G=Object.getOwnPropertyDescriptor,h=e=>{throw TypeError(e)},a=(e,t,r,n)=>{for(var s=n>1?void 0:n?G(t,r):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(s=(n?d(t,r,s):d(s))||s);return n&&s&&E(t,r,s),s},O=(e,t,r)=>t.has(e)||h("Cannot "+r),$=(e,t,r)=>(O(e,t,"read from private field"),r?r.call(e):t.get(e)),L=(e,t,r)=>t.has(e)?h("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),f,c;let o=class extends w(x(C(_))){constructor(){super(),L(this,f),this.href=""}render(){return y`
      <a
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel||$(this,f,c))}
        download=${l(this.download)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};f=new WeakSet;c=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[g,v(k)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};a([i()],o.prototype,"href",2);a([i()],o.prototype,"target",2);a([i()],o.prototype,"rel",2);a([i()],o.prototype,"download",2);a([P({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=a([m("gds-link")],o);o.define();

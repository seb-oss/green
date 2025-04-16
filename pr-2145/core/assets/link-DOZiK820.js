import{i as u,r as v}from"./lit-element-Bx14lxc-.js";import{n as i,G as _,g as m}from"./custom-element-scoping-b4c89-hi.js";import{o as l}from"./if-defined-CVqwUuaf.js";import{u as y}from"./static-B8S6DEnV.js";import{t as g}from"./tokens.style-C9bLefPj.js";import{b as w,w as x,d as b,s as C}from"./declarative-layout-mixins-CxeMR8ZJ.js";const P=u`
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
`;var k=Object.defineProperty,L=Object.getOwnPropertyDescriptor,f=e=>{throw TypeError(e)},s=(e,t,a,n)=>{for(var o=n>1?void 0:n?L(t,a):t,p=e.length-1,d;p>=0;p--)(d=e[p])&&(o=(n?d(t,a,o):d(o))||o);return n&&o&&k(t,a,o),o},E=(e,t,a)=>t.has(e)||f("Cannot "+a),G=(e,t,a)=>(E(e,t,"read from private field"),a?a.call(e):t.get(e)),O=(e,t,a)=>t.has(e)?f("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),h,c;let r=class extends w(x(b(_))){constructor(){super(),O(this,h),this.href=""}get"aria-label"(){return this._ariaLabel}set"aria-label"(e){this._ariaLabel=e,this.removeAttribute("aria-label")}render(){return y`
      <a
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel||G(this,h,c))}
        download=${l(this.download)}
        aria-label=${l(this._ariaLabel)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};h=new WeakSet;c=function(){return this.target==="_blank"?"noreferrer noopener":void 0};r.styles=[g,v(P)];r.shadowRootOptions={mode:"open",delegatesFocus:!0};s([i()],r.prototype,"href",2);s([i()],r.prototype,"target",2);s([i()],r.prototype,"rel",2);s([i({attribute:"aria-label"})],r.prototype,"aria-label",1);s([i()],r.prototype,"download",2);s([C({valueTemplate:e=>e,selector:"a"})],r.prototype,"text-decoration",2);r=s([m("gds-link")],r);r.define();

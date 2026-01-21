import{i as u,S as f,a0 as g,Q as v,o as a,E as y,N as _,t as w,a2 as m,n as x,s as k,J as C,g as P}from"./iframe-DMVDZK-F.js";import{w as b}from"./props-link-CHaxRURO.js";const E=u`
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
`;var $=Object.defineProperty,G=Object.getOwnPropertyDescriptor,c=e=>{throw TypeError(e)},p=(e,t,r,n)=>{for(var s=n>1?void 0:n?G(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(s=(n?l(t,r,s):l(s))||s);return n&&s&&$(t,r,s),s},O=(e,t,r)=>t.has(e)||c("Cannot "+r),L=(e,t,r)=>(O(e,t,"read from private field"),r?r.call(e):t.get(e)),S=(e,t,r)=>t.has(e)?c("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),d,h;let o=class extends f(g(v(b(C)))){constructor(){super(...arguments),S(this,d),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return _`
      <a
        href=${a(this.href)}
        target=${a(this.target)}
        rel=${a(this.rel||L(this,d,h))}
        download=${a(this.download)}
        ping=${a(this.ping)}
        aria-label=${this.label||y}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};d=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[w,m(E)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};p([x()],o.prototype,"label",2);p([k({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=p([P("gds-link")],o);export{o as G};

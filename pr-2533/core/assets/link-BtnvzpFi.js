import{i as u,D as f,N as v,H as g,o as n,E as y,a5 as _,t as w,a9 as m,n as x,s as k,I as C,g as P}from"./iframe-MQTvm_E4.js";import{w as b}from"./props-link-BK_Rsd4o.js";const E=u`
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
`;var G=Object.defineProperty,O=Object.getOwnPropertyDescriptor,p=e=>{throw TypeError(e)},c=(e,t,r,a)=>{for(var s=a>1?void 0:a?O(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(s=(a?l(t,r,s):l(s))||s);return a&&s&&G(t,r,s),s},$=(e,t,r)=>t.has(e)||p("Cannot "+r),L=(e,t,r)=>($(e,t,"read from private field"),r?r.call(e):t.get(e)),D=(e,t,r)=>t.has(e)?p("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),d,h;let o=class extends f(v(g(b(C)))){constructor(){super(...arguments),D(this,d),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return _`
      <a
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel||L(this,d,h))}
        download=${n(this.download)}
        aria-label=${this.label||y}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};d=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[w,m(E)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};c([x()],o.prototype,"label",2);c([k({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=c([P("gds-link")],o);o.define();export{o as G};

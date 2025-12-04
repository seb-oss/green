import{i as u,L as f,U as v,K as g,o as n,E as y,D as _,t as w,X as m,n as x,s as k,A as C,g as P}from"./iframe-CVq0p_LP.js";import{w as b}from"./props-link-BY7-xsgp.js";const E=u`
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
`;var G=Object.defineProperty,L=Object.getOwnPropertyDescriptor,p=e=>{throw TypeError(e)},c=(e,t,r,a)=>{for(var s=a>1?void 0:a?L(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(s=(a?l(t,r,s):l(s))||s);return a&&s&&G(t,r,s),s},O=(e,t,r)=>t.has(e)||p("Cannot "+r),$=(e,t,r)=>(O(e,t,"read from private field"),r?r.call(e):t.get(e)),A=(e,t,r)=>t.has(e)?p("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),d,h;let o=class extends f(v(g(b(C)))){constructor(){super(...arguments),A(this,d),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return _`
      <a
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel||$(this,d,h))}
        download=${n(this.download===!0?"":this.download)}
        aria-label=${this.label||y}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};d=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};o.styles=[w,m(E)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};c([x()],o.prototype,"label",2);c([k({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=c([P("gds-link")],o);export{o as G};

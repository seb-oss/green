import{i as u,C as f,T as g,L as v,A as y,o,I as _,B as w,a7 as m,n as x,U as C,a as k,F as P,D as b}from"./iframe-Ckbk1qpL.js";import{w as $}from"./props-link-BkT1GhQ8.js";const E=u`
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
`;var G=Object.defineProperty,L=Object.getOwnPropertyDescriptor,p=e=>{throw TypeError(e)},c=(e,t,r,n)=>{for(var s=n>1?void 0:n?L(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(s=(n?l(t,r,s):l(s))||s);return n&&s&&G(t,r,s),s},O=(e,t,r)=>t.has(e)||p("Cannot "+r),A=(e,t,r)=>(O(e,t,"read from private field"),r?r.call(e):t.get(e)),B=(e,t,r)=>t.has(e)?p("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),d,h;let a=class extends f(g(v($(b)))){constructor(){super(...arguments),B(this,d),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return _`
      <a
        href=${o(this.href)}
        target=${o(this.target)}
        rel=${o(this.rel||A(this,d,h))}
        download=${o(this.download)}
        ping=${o(this.ping)}
        aria-label=${this.label||y}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};d=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};a.styles=[w,m(E)];a.shadowRootOptions={mode:"open",delegatesFocus:!0};c([x()],a.prototype,"label",2);c([C({valueTemplate:e=>e,selector:"a"})],a.prototype,"text-decoration",2);a=c([k("gds-link"),P({labelledBy:"a",describedBy:"a"})],a);a.define();export{a as G};

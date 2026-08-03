import{i as u,I as f,Q as g,H as v,A as y,o,D as _,v as w,a8 as m,n as x,R as k,g as C,y as P,z as b}from"./iframe-C8ehJ7Np.js";import{w as $}from"./props-link-CNtv690B.js";const E=u`
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
`;var G=Object.defineProperty,O=Object.getOwnPropertyDescriptor,p=e=>{throw TypeError(e)},c=(e,t,r,n)=>{for(var s=n>1?void 0:n?O(t,r):t,i=e.length-1,l;i>=0;i--)(l=e[i])&&(s=(n?l(t,r,s):l(s))||s);return n&&s&&G(t,r,s),s},L=(e,t,r)=>t.has(e)||p("Cannot "+r),A=(e,t,r)=>(L(e,t,"read from private field"),r?r.call(e):t.get(e)),D=(e,t,r)=>t.has(e)?p("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),d,h;let a=class extends f(g(v($(b)))){constructor(){super(...arguments),D(this,d),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return _`
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
    `}};d=new WeakSet;h=function(){return this.target==="_blank"?"noreferrer noopener":void 0};a.styles=[w,m(E)];a.shadowRootOptions={mode:"open",delegatesFocus:!0};c([x()],a.prototype,"label",2);c([k({valueTemplate:e=>e,selector:"a"})],a.prototype,"text-decoration",2);a=c([C("gds-link"),P({labelledBy:"a",describedBy:"a"})],a);a.define();export{a as G};

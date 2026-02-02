import{i as v,S as g,a0 as _,Q as y,o as a,E as m,N as w,t as x,a2 as k,n as C,s as b,J as P,g as E}from"./iframe-DP9akqBZ.js";import{w as $}from"./props-link-CVfHFMSL.js";const G=v`
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
`;var O=Object.defineProperty,L=Object.getOwnPropertyDescriptor,p=e=>{throw TypeError(e)},c=(e,t,s,n)=>{for(var r=n>1?void 0:n?L(t,s):t,l=e.length-1,d;l>=0;l--)(d=e[l])&&(r=(n?d(t,s,r):d(r))||r);return n&&r&&O(t,s,r),r},h=(e,t,s)=>t.has(e)||p("Cannot "+s),S=(e,t,s)=>(h(e,t,"read from private field"),s?s.call(e):t.get(e)),A=(e,t,s)=>t.has(e)?p("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),D=(e,t,s)=>(h(e,t,"access private method"),s),i,u,f;let o=class extends g(_(y($(P)))){constructor(){super(...arguments),A(this,i),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return w`
      <a
        href=${a(this.href)}
        target=${a(this.target)}
        rel=${a(this.rel||S(this,i,u))}
        download=${a(this.download)}
        ping=${a(this.ping)}
        aria-label=${this.label||m}
        @click=${D(this,i,f)}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};i=new WeakSet;u=function(){return this.target==="_blank"?"noreferrer noopener":void 0};f=function(e){this.dispatchCustomEvent("gds-link-click",{bubbles:!0,composed:!0,detail:e})};o.styles=[x,k(G)];o.shadowRootOptions={mode:"open",delegatesFocus:!0};c([C()],o.prototype,"label",2);c([b({valueTemplate:e=>e,selector:"a"})],o.prototype,"text-decoration",2);o=c([E("gds-link")],o);export{o as G};

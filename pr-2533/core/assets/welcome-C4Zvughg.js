import{ar as r,n as p,as as H,at as g,au as S,i as v,av as L,aw as Z,ax as G,ay as u,az as $,aA as f,aB as C,f as x,aC as j,aD as D,aE as B,o as m,E as z,a5 as I,aF as R,a9 as T,aG as W,R as e,aH as X,aI as s,aJ as N,aK as l,aL as y,aM as _,aN as w,u as P,j as d,M as A}from"./iframe-UBvDqWHW.js";import"./preload-helper-Dp1pzeXC.js";function F(t){var a;class n extends t{constructor(){super(...arguments),H(this,a)}get rel(){return g(this,a)?g(this,a):this.target==="_blank"?"noreferrer noopener":void 0}set rel(M){S(this,a,M)}}return a=new WeakMap,r([p()],n.prototype,"href",2),r([p()],n.prototype,"target",2),r([p()],n.prototype,"rel",1),r([p({type:String})],n.prototype,"download",2),n}const J=v`
  :host {
    --_c: 12;
    --_grid-col: repeat(var(--_c), 1fr);
    width: 100%;
    display: grid;
    grid-template-columns: var(--_grid-col);
    grid-column-gap: var(--_gap-column, 0px);
    grid-row-gap: var(--_gap-row, 0px);
    box-sizing: border-box;
  }

  :host([auto-columns]) {
    --_col-count: var(--_c, 0);
    --_gap-count: calc(var(--_col-count) - 1);
    --_total-gap-width: calc(var(--_gap-count) * var(--_gap-column, 0px));
    --_col-width-max: calc(
      (100% - var(--_total-gap-width)) / var(--_col-count)
    );
    grid-template-columns: repeat(
      auto-fill,
      minmax(max(var(--_col-width), var(--_col-width-max)), 1fr)
    );
  }
`;var O=J;let i=class extends L{render(){return Z`<slot></slot>`}};i.styles=[G,O];r([u({property:"--_c"})],i.prototype,"columns",2);r([u({...$,styleTemplate:(t,a)=>{const n=a[0];return`--_gap-column: ${a[1]||n}; --_gap-row: ${n};`}})],i.prototype,"gap",2);r([u({reflect:!0,property:"--_col-width",valueTemplate:t=>`${isNaN(t)?t:`${t}px`}`})],i.prototype,"auto-columns",2);i=r([f("gds-grid")],i);const q=t=>{i.define();const a=C("gds-grid"),n={...t,class:t.className};return x.createElement(a,n)},K=v`
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
`;var Q=K,h,V;let c=class extends j(D(B(F(R)))){constructor(){super(...arguments),H(this,h),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return I`
      <a
        href=${m(this.href)}
        target=${m(this.target)}
        rel=${m(this.rel||g(this,h,V))}
        download=${m(this.download)}
        aria-label=${this.label||z}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};h=new WeakSet;V=function(){return this.target==="_blank"?"noreferrer noopener":void 0};c.styles=[G,T(Q)];c.shadowRootOptions={mode:"open",delegatesFocus:!0};r([p()],c.prototype,"label",2);r([u({valueTemplate:t=>t,selector:"a"})],c.prototype,"text-decoration",2);c=r([f("gds-link")],c);const E=t=>{c.define();const a=C("gds-link"),n={...t,class:t.className};return x.createElement(a,n)};let o=class extends W{};o._regularSVG='<path d="M14.9616 6.12292L11.994 8.32052C10.5975 7.12051 8.78639 6.88918 7.78992 6.88918C6.78618 6.88918 5.73152 7.17834 5.5715 7.89401C5.41149 8.58799 6.0661 9.13016 7.18622 9.43377C8.46636 9.77353 9.62285 10.0771 11.4194 10.5832C14.0815 11.3422 15.9072 12.4844 15.9072 15.1374C15.9072 18.8025 12.6341 20.6965 8.25543 20.6965C3.87678 20.6965 0.894641 18.4338 0 17.3784L3.13488 15.0507C5.33875 16.9591 6.86619 17.2266 8.14632 17.2266C9.61557 17.2266 10.9903 16.9157 11.1648 16.0916C11.3103 15.4266 10.7575 14.8989 9.50647 14.6097C8.09541 14.2844 6.89528 14.0242 5.56423 13.6772C1.9493 12.7374 0.931009 10.6482 0.931009 8.76871C0.931009 6.18798 3.34581 3.53495 7.77538 3.53495C12.3068 3.53495 14.9616 6.11569 14.9616 6.12292ZM33.8654 3.7952H20.6422V20.2121H34.1055V16.4242H25.2827V13.7784H31.3561V10.1567H25.2827V7.53979H33.8582V3.7952H33.8654ZM17.2237 24.0001H18.2492V0H17.2237V24.0001ZM35.8438 24.0001H36.8694V0H35.8438V24.0001ZM39.2624 20.2121H49.8817C52.7184 20.2121 55.0241 18.5133 55.0241 15.788C55.0241 13.6627 53.6275 12.2531 51.6637 11.6314C51.5982 11.6169 51.5401 11.6097 51.4746 11.6097C51.5401 11.6025 51.6055 11.5952 51.6637 11.5735C52.7911 11.1326 54.0276 9.95426 54.0276 7.95184C54.0276 5.40725 51.7655 3.78797 48.9725 3.78797H39.2551L39.2624 20.2121ZM43.9247 7.20726H47.6342C48.4852 7.20726 49.1762 7.87955 49.1762 8.64582C49.1762 9.41209 48.4852 10.0916 47.6342 10.0916H43.9247V7.20726ZM48.4561 16.5687H43.9174V13.576H48.4561C49.2562 13.576 49.9108 14.2193 49.9108 15.0724C49.9108 15.9181 49.2634 16.5687 48.4561 16.5687Z" fill="currentColor"/>';o._solidSVG='<path d="M14.9616 6.12292L11.994 8.32052C10.5975 7.12051 8.78639 6.88918 7.78992 6.88918C6.78618 6.88918 5.73152 7.17834 5.5715 7.89401C5.41149 8.58799 6.0661 9.13016 7.18622 9.43377C8.46636 9.77353 9.62285 10.0771 11.4194 10.5832C14.0815 11.3422 15.9072 12.4844 15.9072 15.1374C15.9072 18.8025 12.6341 20.6965 8.25543 20.6965C3.87678 20.6965 0.894641 18.4338 0 17.3784L3.13488 15.0507C5.33875 16.9591 6.86619 17.2266 8.14632 17.2266C9.61557 17.2266 10.9903 16.9157 11.1648 16.0916C11.3103 15.4266 10.7575 14.8989 9.50647 14.6097C8.09541 14.2844 6.89528 14.0242 5.56423 13.6772C1.9493 12.7374 0.931009 10.6482 0.931009 8.76871C0.931009 6.18798 3.34581 3.53495 7.77538 3.53495C12.3068 3.53495 14.9616 6.11569 14.9616 6.12292ZM33.8654 3.7952H20.6422V20.2121H34.1055V16.4242H25.2827V13.7784H31.3561V10.1567H25.2827V7.53979H33.8582V3.7952H33.8654ZM17.2237 24.0001H18.2492V0H17.2237V24.0001ZM35.8438 24.0001H36.8694V0H35.8438V24.0001ZM39.2624 20.2121H49.8817C52.7184 20.2121 55.0241 18.5133 55.0241 15.788C55.0241 13.6627 53.6275 12.2531 51.6637 11.6314C51.5982 11.6169 51.5401 11.6097 51.4746 11.6097C51.5401 11.6025 51.6055 11.5952 51.6637 11.5735C52.7911 11.1326 54.0276 9.95426 54.0276 7.95184C54.0276 5.40725 51.7655 3.78797 48.9725 3.78797H39.2551L39.2624 20.2121ZM43.9247 7.20726H47.6342C48.4852 7.20726 49.1762 7.87955 49.1762 8.64582C49.1762 9.41209 48.4852 10.0916 47.6342 10.0916H43.9247V7.20726ZM48.4561 16.5687H43.9174V13.576H48.4561C49.2562 13.576 49.9108 14.2193 49.9108 15.0724C49.9108 15.9181 49.2634 16.5687 48.4561 16.5687Z" fill="currentColor"/>';o._name="brand-seb";o._width=56;o._height=24;o._viewBox="0 0 56 24";o=r([f("gds-icon-brand-seb")],o);const U=t=>{o.define();const a=C("gds-icon-brand-seb"),n={...t,class:t.className};return x.createElement(a,n)};function Y(){return e.createElement(X,{designVersion:"2023"},e.createElement(s,{"flex-direction":"column","align-items":"center","justify-content":"center","min-height":"80vh"},e.createElement(s,{padding:"0 l","align-items":"center","justify-content":"center",flex:"1"},e.createElement(s,{"min-width":"100%","justify-content":"center","align-items":"center","flex-direction":"column",padding:"0 l",gap:"xl"},e.createElement(N,{size:"2xl"}),e.createElement(l,{tag:"code",font:"display-s"},"@sebgroup/green-core"),e.createElement(l,{font:"heading-s","text-align":"center","font-weight":"regular","text-wrap":"balance","max-width":"90ch"},"Green Core is a carefully crafted set of Web Components that lays the foundation for the Green Design System."),e.createElement(s,{gap:"m","justify-content":"center"},e.createElement(y,{href:"https://storybook.seb.io/latest/core/?path=/docs/get-started--docs",rank:"primary"},"Get Started"),e.createElement(y,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-alert--docs",rank:"secondary"},"View Components")),e.createElement(s,{gap:"s","align-items":"center"},e.createElement(l,null,"Built by:"),e.createElement(U,{size:"m"})),e.createElement(q,{columns:"1; m{2}",gap:"l",padding:"l; m{4xl}"},e.createElement(_,{variant:"primary","flex-direction":"column","align-items":"flex-start",padding:"xl",flex:"1","min-width":"320px",gap:"m","border-radius":"m"},e.createElement(s,{"flex-direction":"column",gap:"m"},e.createElement(l,{font:"heading-s","font-weight":"regular"},"Documentation"),e.createElement(l,{"max-width":"100%",opacity:"0.8"},"Explore our comprehensive guidelines, components documentation, and implementation details.")),e.createElement(E,{href:"https://seb.io",target:"_blank"},e.createElement(w,{slot:"trail",size:"s"}),"View Documentation")),e.createElement(_,{variant:"primary","flex-direction":"column","align-items":"flex-start",padding:"xl",flex:"1","min-width":"320px",gap:"m","border-radius":"m"},e.createElement(s,{"flex-direction":"column",gap:"m"},e.createElement(l,{font:"heading-s","font-weight":"regular"},"Green Studio"),e.createElement(l,{"max-width":"100%",opacity:"0.8"},"Access our design tools, including icons library, component playground, and design tokens.")),e.createElement(E,{href:"https://seb.io/studio",target:"_blank"},e.createElement(w,{slot:"trail",size:"s"}),"Open Studio")))))))}function b(t){return d.jsxs(d.Fragment,{children:[d.jsx(A,{title:"Green Design System"}),`
`,d.jsx(Y,{})]})}function oe(t={}){const{wrapper:a}={...P(),...t.components};return a?d.jsx(a,{...t,children:d.jsx(b,{...t})}):b()}export{oe as default};

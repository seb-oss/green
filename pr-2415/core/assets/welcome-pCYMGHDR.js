import{j as d}from"./jsx-runtime-BjG_zV1W.js";import{u as k}from"./index-BFi40DhA.js";import"./chunk-HLWAVYOI-ailS_MoZ.js";import{ag as h,ae as e,af as v}from"./index-luNe1qSw.js";import{_ as n,G as M,h as S,t as H,s as u,f as L,g as f,a as C,w as Z,b as $,c as j,d as D,e as B,i as I,j as T,k as X,l as s,I as z,m as l,n as _,o as y,p as w}from"./index-CDR5jyl3.js";import{i as G,E as P,r as R}from"./lit-element-Bx14lxc-.js";import{n as m}from"./Reflect-DJ7r0WLU.js";import{o as p}from"./if-defined-CVqwUuaf.js";import{u as W}from"./static-B8S6DEnV.js";import"./iframe-m-ti6Ix8.js";import"../sb-preview/runtime.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./index-D-8MO0q_.js";import"./index-DxKRhftL.js";import"./index-DrFu-skq.js";import"./query-p8xgzTDt.js";import"./class-map-CXsQwv0r.js";import"./directive-CF8sV3Lr.js";import"./when-BR7zwNJC.js";import"./unsafe-html-CYO4avEf.js";function N(t){class r extends t{get rel(){return this._rel?this._rel:this.target==="_blank"?"noreferrer noopener":void 0}set rel(x){this._rel=x}}return n([m()],r.prototype,"href",2),n([m()],r.prototype,"target",2),n([m()],r.prototype,"rel",1),n([m({type:String})],r.prototype,"download",2),r}const A=G`
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
`;var F=A;let i=class extends M{render(){return S`<slot></slot>`}};i.styles=[H,F];n([u({property:"--_c"})],i.prototype,"columns",2);n([u({...L,styleTemplate:(t,r)=>{const o=r[0];return`--_gap-column: ${r[1]||o}; --_gap-row: ${o};`}})],i.prototype,"gap",2);n([u({reflect:!0,property:"--_col-width",valueTemplate:t=>`${isNaN(t)?t:`${t}px`}`})],i.prototype,"auto-columns",2);i=n([f("gds-grid")],i);const J=t=>{i.define();const r=C("gds-grid"),o={...t,class:t.className};return h.createElement(r,o)},O=G`
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
`;var q=O,g,V;let c=class extends Z($(j(N(I)))){constructor(){super(...arguments),D(this,g),this.label=""}connectedCallback(){super.connectedCallback(),this.setAttribute("role","none")}render(){return W`
      <a
        href=${p(this.href)}
        target=${p(this.target)}
        rel=${p(this.rel||B(this,g,V))}
        download=${p(this.download)}
        aria-label=${this.label||P}
      >
        <slot name="lead"></slot>
        <slot></slot>
        <slot name="trail"></slot>
      </a>
    `}};g=new WeakSet;V=function(){return this.target==="_blank"?"noreferrer noopener":void 0};c.styles=[H,R(q)];c.shadowRootOptions={mode:"open",delegatesFocus:!0};n([m()],c.prototype,"label",2);n([u({valueTemplate:t=>t,selector:"a"})],c.prototype,"text-decoration",2);c=n([f("gds-link")],c);const b=t=>{c.define();const r=C("gds-link"),o={...t,class:t.className};return h.createElement(r,o)};let a=class extends T{};a._regularSVG='<path d="M14.9616 6.12292L11.994 8.32052C10.5975 7.12051 8.78639 6.88918 7.78992 6.88918C6.78618 6.88918 5.73152 7.17834 5.5715 7.89401C5.41149 8.58799 6.0661 9.13016 7.18622 9.43377C8.46636 9.77353 9.62285 10.0771 11.4194 10.5832C14.0815 11.3422 15.9072 12.4844 15.9072 15.1374C15.9072 18.8025 12.6341 20.6965 8.25543 20.6965C3.87678 20.6965 0.894641 18.4338 0 17.3784L3.13488 15.0507C5.33875 16.9591 6.86619 17.2266 8.14632 17.2266C9.61557 17.2266 10.9903 16.9157 11.1648 16.0916C11.3103 15.4266 10.7575 14.8989 9.50647 14.6097C8.09541 14.2844 6.89528 14.0242 5.56423 13.6772C1.9493 12.7374 0.931009 10.6482 0.931009 8.76871C0.931009 6.18798 3.34581 3.53495 7.77538 3.53495C12.3068 3.53495 14.9616 6.11569 14.9616 6.12292ZM33.8654 3.7952H20.6422V20.2121H34.1055V16.4242H25.2827V13.7784H31.3561V10.1567H25.2827V7.53979H33.8582V3.7952H33.8654ZM17.2237 24.0001H18.2492V0H17.2237V24.0001ZM35.8438 24.0001H36.8694V0H35.8438V24.0001ZM39.2624 20.2121H49.8817C52.7184 20.2121 55.0241 18.5133 55.0241 15.788C55.0241 13.6627 53.6275 12.2531 51.6637 11.6314C51.5982 11.6169 51.5401 11.6097 51.4746 11.6097C51.5401 11.6025 51.6055 11.5952 51.6637 11.5735C52.7911 11.1326 54.0276 9.95426 54.0276 7.95184C54.0276 5.40725 51.7655 3.78797 48.9725 3.78797H39.2551L39.2624 20.2121ZM43.9247 7.20726H47.6342C48.4852 7.20726 49.1762 7.87955 49.1762 8.64582C49.1762 9.41209 48.4852 10.0916 47.6342 10.0916H43.9247V7.20726ZM48.4561 16.5687H43.9174V13.576H48.4561C49.2562 13.576 49.9108 14.2193 49.9108 15.0724C49.9108 15.9181 49.2634 16.5687 48.4561 16.5687Z" fill="currentColor"/>';a._solidSVG='<path d="M14.9616 6.12292L11.994 8.32052C10.5975 7.12051 8.78639 6.88918 7.78992 6.88918C6.78618 6.88918 5.73152 7.17834 5.5715 7.89401C5.41149 8.58799 6.0661 9.13016 7.18622 9.43377C8.46636 9.77353 9.62285 10.0771 11.4194 10.5832C14.0815 11.3422 15.9072 12.4844 15.9072 15.1374C15.9072 18.8025 12.6341 20.6965 8.25543 20.6965C3.87678 20.6965 0.894641 18.4338 0 17.3784L3.13488 15.0507C5.33875 16.9591 6.86619 17.2266 8.14632 17.2266C9.61557 17.2266 10.9903 16.9157 11.1648 16.0916C11.3103 15.4266 10.7575 14.8989 9.50647 14.6097C8.09541 14.2844 6.89528 14.0242 5.56423 13.6772C1.9493 12.7374 0.931009 10.6482 0.931009 8.76871C0.931009 6.18798 3.34581 3.53495 7.77538 3.53495C12.3068 3.53495 14.9616 6.11569 14.9616 6.12292ZM33.8654 3.7952H20.6422V20.2121H34.1055V16.4242H25.2827V13.7784H31.3561V10.1567H25.2827V7.53979H33.8582V3.7952H33.8654ZM17.2237 24.0001H18.2492V0H17.2237V24.0001ZM35.8438 24.0001H36.8694V0H35.8438V24.0001ZM39.2624 20.2121H49.8817C52.7184 20.2121 55.0241 18.5133 55.0241 15.788C55.0241 13.6627 53.6275 12.2531 51.6637 11.6314C51.5982 11.6169 51.5401 11.6097 51.4746 11.6097C51.5401 11.6025 51.6055 11.5952 51.6637 11.5735C52.7911 11.1326 54.0276 9.95426 54.0276 7.95184C54.0276 5.40725 51.7655 3.78797 48.9725 3.78797H39.2551L39.2624 20.2121ZM43.9247 7.20726H47.6342C48.4852 7.20726 49.1762 7.87955 49.1762 8.64582C49.1762 9.41209 48.4852 10.0916 47.6342 10.0916H43.9247V7.20726ZM48.4561 16.5687H43.9174V13.576H48.4561C49.2562 13.576 49.9108 14.2193 49.9108 15.0724C49.9108 15.9181 49.2634 16.5687 48.4561 16.5687Z" fill="currentColor"/>';a._name="brand-seb";a._width=56;a._height=24;a._viewBox="0 0 56 24";a=n([f("gds-icon-brand-seb")],a);const K=t=>{a.define();const r=C("gds-icon-brand-seb"),o={...t,class:t.className};return h.createElement(r,o)};function Q(){return e.createElement(X,{designVersion:"2023"},e.createElement(s,{"flex-direction":"column","align-items":"center","justify-content":"center","min-height":"80vh"},e.createElement(s,{padding:"0 l","align-items":"center","justify-content":"center",flex:"1"},e.createElement(s,{"min-width":"100%","justify-content":"center","align-items":"center","flex-direction":"column",padding:"0 l",gap:"xl"},e.createElement(z,{size:"2xl"}),e.createElement(l,{tag:"code",font:"display-s"},"@sebgroup/green-core"),e.createElement(l,{font:"heading-s","text-align":"center","font-weight":"regular","text-wrap":"balance","max-width":"90ch"},"Green Core is a carefully crafted set of Web Components that lays the foundation for the Green Design System."),e.createElement(s,{gap:"m","justify-content":"center"},e.createElement(_,{href:"https://storybook.seb.io/latest/core/?path=/docs/get-started--docs",rank:"primary"},"Get Started"),e.createElement(_,{href:"https://storybook.seb.io/latest/core/?path=/docs/components-alert--docs",rank:"secondary"},"View Components")),e.createElement(s,{gap:"s","align-items":"center"},e.createElement(l,null,"Built by:"),e.createElement(K,{size:"m"})),e.createElement(J,{columns:"1; m{2}",gap:"l",padding:"l; m{4xl}"},e.createElement(y,{variant:"primary","flex-direction":"column","align-items":"flex-start",padding:"xl",flex:"1","min-width":"320px",gap:"m","border-radius":"m"},e.createElement(s,{"flex-direction":"column",gap:"m"},e.createElement(l,{font:"heading-s","font-weight":"regular"},"Documentation"),e.createElement(l,{"max-width":"100%",opacity:"0.8"},"Explore our comprehensive guidelines, components documentation, and implementation details.")),e.createElement(b,{href:"https://seb.io",target:"_blank"},e.createElement(w,{slot:"trail",size:"s"}),"View Documentation")),e.createElement(y,{variant:"primary","flex-direction":"column","align-items":"flex-start",padding:"xl",flex:"1","min-width":"320px",gap:"m","border-radius":"m"},e.createElement(s,{"flex-direction":"column",gap:"m"},e.createElement(l,{font:"heading-s","font-weight":"regular"},"Green Studio"),e.createElement(l,{"max-width":"100%",opacity:"0.8"},"Access our design tools, including icons library, component playground, and design tokens.")),e.createElement(b,{href:"https://seb.io/studio",target:"_blank"},e.createElement(w,{slot:"trail",size:"s"}),"Open Studio")))))))}function E(t){return d.jsxs(d.Fragment,{children:[d.jsx(v,{title:"Green Design System"}),`
`,d.jsx(Q,{})]})}function we(t={}){const{wrapper:r}={...k(),...t.components};return r?d.jsx(r,{...t,children:d.jsx(E,{...t})}):E()}export{we as default};

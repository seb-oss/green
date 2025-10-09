import{i as b,E as g}from"./lit-element-Bx14lxc-.js";import{n as f}from"./Reflect-DJ7r0WLU.js";import{e as G}from"./class-map-CXsQwv0r.js";import{o as h}from"./if-defined-CVqwUuaf.js";import{h as s,g as $,G as C}from"./gds-element-DTROifYq.js";import{t as E}from"./tokens.style-CyN6927s.js";import{w,b as S,d as P}from"./declarative-layout-mixins-DFPXvh_g.js";import{w as L}from"./link-props-CzFiDWCP.js";import{G as I}from"./card.component-C4tAIpeI.js";import{G as O}from"./flex.component-My6tsEL-.js";import{I as A}from"./chain-link-DD3U4VL8.js";import{G as F}from"./img.component-9foKhbyn.js";import{G as M}from"./text-DqywFqXI.js";const T=b`
  @layer base, types, layout, motion;
  @layer base {
    :host {
      display: inline-block;
    }

    @layer motion {
      @media (prefers-reduced-motion: reduce) {
        .card {
          transition: none;
        }
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      color: inherit;
      text-decoration: none;
      outline: solid var(--gds-sys-space-4xs) transparent;
      outline-offset: var(--gds-sys-space-4xs);
      border-radius: var(--gds-sys-radius-s);
      padding: var(--gds-sys-space-xs);
      background: var(--gds-sys-color-l2-neutral-01);

      &:focus {
        outline-color: var(--gds-sys-color-content-neutral-01);
        outline-offset: var(--gds-sys-space-3xs);

        &:not(:focus-visible) {
          outline-color: transparent;
        }
      }

      @media (pointer: fine) {
        &:hover {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-neutral-01),
            var(--gds-sys-color-state-neutral-03)
          );
        }
      }

      &:active {
        background-color: color-mix(
          in srgb,
          var(--gds-sys-color-l2-neutral-01),
          var(--gds-sys-color-state-neutral-04)
        );
      }

      .main {
        display: flex;
        flex-direction: column;
        gap: var(--gds-sys-space-m);
        padding: var(--gds-sys-space-m);
      }

      .article {
        display: flex;
        flex-direction: column;
        gap: var(--gds-sys-space-xs);
      }

      .footer {
        pointer-events: none;
      }
    }
  }
`;var H=Object.defineProperty,W=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},p=(e,t,r,i)=>{for(var a=i>1?void 0:i?W(t,r):t,d=e.length-1,m;d>=0;d--)(m=e[d])&&(a=(i?m(t,r,a):m(a))||a);return i&&a&&H(t,r,a),a},D=(e,t,r)=>t.has(e)||y("Cannot "+r),o=(e,t,r)=>(D(e,t,"read from private field"),r?r.call(e):t.get(e)),v=(e,t,r)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),c,x,_,u,k,n;let l=class extends w(S(P(L(C)))){constructor(){super(...arguments),v(this,c),this.title="",this.excerpt="",this.label="",v(this,n,{Header:{Image:()=>s`
        <gds-img
          src=${h(this.src)}
          width="100%"
          height="100%"
          object-fit="cover"
          object-position="center"
          border-radius="xs"
        ></gds-img>
      `,Slot:()=>o(this,c,u).call(this,"header")&&s`<slot name="header"></slot>`,Element:e=>s`
        <header class="header">${e}</header>
      `,render:()=>{const{Image:e,Slot:t,Element:r}=o(this,n).Header;return t()?r(t()):this.src?r(e()):g}},Article:{Title:()=>this.title&&s` <gds-text tag="h2" font="heading-s">${this.title}</gds-text> `,Excerpt:()=>this.excerpt&&s`
          <gds-text font="body-regular-m" lines="3">${this.excerpt}</gds-text>
        `,Element:e=>s`
        <article class="article">${e}</article>
      `,render:()=>{const{Title:e,Excerpt:t,Element:r}=o(this,n).Article;return!this.title&&!this.excerpt?g:r([e(),t()])}},Footer:{Link:()=>this.label&&s`
          <gds-link href="#">
            <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
            ${this.label}
          </gds-link>
        `,Slot:()=>o(this,c,u).call(this,"footer")&&s`<slot name="footer"></slot>`,Element:e=>s`
        <footer class="footer" inert>${e}</footer>
      `,render:()=>{const{Link:e,Slot:t,Element:r}=o(this,n).Footer,i=[e(),t()].filter(Boolean);return i.length?r(i):g}},Main:e=>s`
      <main class="main">${e}</main>
    `,Core:()=>{const{Header:e,Article:t,Footer:r,Main:i}=o(this,n),{Single:a,Group:d}=o(this,c,k);return[a(e),i(d([t,r]))]}})}render(){return this.href?s`
      <a
        href=${h(this.href)}
        target=${h(this.target)}
        rel=${h(this.rel||o(this,c,x))}
        class=${G(o(this,c,_))}
      >
        ${o(this,n).Core()}
      </a>
    `:o(this,n).Core()}};c=new WeakSet;x=function(){return this.target==="_blank"?"noreferrer noopener":void 0};_=function(){return{card:!0,"has-excerpt":!!this.excerpt}};u=function(){return e=>this.querySelector(`[slot="${e}"]`)!==null};k=function(){return{Single:e=>e.render(),Group:e=>e.map(t=>t.render())}};n=new WeakMap;l.styles=[E,T];p([f()],l.prototype,"title",2);p([f()],l.prototype,"excerpt",2);p([f()],l.prototype,"label",2);p([f()],l.prototype,"src",2);l=p([$("gds-card-linked",{dependsOn:[I,F,M,O,A]})],l);l.define();

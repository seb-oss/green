import{i as k,E as m}from"./lit-element-Bx14lxc-.js";import{n as p}from"./Reflect-DJ7r0WLU.js";import{e as G}from"./class-map-CXsQwv0r.js";import{o as f}from"./if-defined-CVqwUuaf.js";import{h as s,G as $,g as C}from"./gds-element-DTROifYq.js";import{t as E}from"./tokens.style-CyN6927s.js";import{w,b as S,d as P}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as L}from"./card.component-C4tAIpeI.js";import{G as I}from"./flex.component-My6tsEL-.js";import{I as O}from"./chain-link-DD3U4VL8.js";import{G as A}from"./img.component-9foKhbyn.js";import{G as F}from"./text-DqywFqXI.js";const M=k`
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
`;var T=Object.defineProperty,H=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},c=(e,t,r,a)=>{for(var n=a>1?void 0:a?H(t,r):t,h=e.length-1,g;h>=0;h--)(g=e[h])&&(n=(a?g(t,r,n):g(n))||n);return a&&n&&T(t,r,n),n},W=(e,t,r)=>t.has(e)||v("Cannot "+r),o=(e,t,r)=>(W(e,t,"read from private field"),r?r.call(e):t.get(e)),y=(e,t,r)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),d,x,_,u,b,l;let i=class extends w(S(P($))){constructor(){super(...arguments),y(this,d),this.title="",this.excerpt="",this.label="",y(this,l,{Header:{Image:()=>s`
        <gds-img
          src=${f(this.src)}
          width="100%"
          height="100%"
          object-fit="cover"
          object-position="center"
          border-radius="xs"
        ></gds-img>
      `,Slot:()=>o(this,d,u).call(this,"header")&&s`<slot name="header"></slot>`,Element:e=>s`
        <header class="header">${e}</header>
      `,render:()=>{const{Image:e,Slot:t,Element:r}=o(this,l).Header;return t()?r(t()):this.src?r(e()):m}},Article:{Title:()=>this.title&&s` <gds-text tag="h2" font="heading-s">${this.title}</gds-text> `,Excerpt:()=>this.excerpt&&s`
          <gds-text font="body-regular-m" lines="3">${this.excerpt}</gds-text>
        `,Element:e=>s`
        <article class="article">${e}</article>
      `,render:()=>{const{Title:e,Excerpt:t,Element:r}=o(this,l).Article;return!this.title&&!this.excerpt?m:r([e(),t()])}},Footer:{Link:()=>this.label&&s`
          <gds-link href="#">
            <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
            ${this.label}
          </gds-link>
        `,Slot:()=>o(this,d,u).call(this,"footer")&&s`<slot name="footer"></slot>`,Element:e=>s`
        <footer class="footer" inert>${e}</footer>
      `,render:()=>{const{Link:e,Slot:t,Element:r}=o(this,l).Footer,a=[e(),t()].filter(Boolean);return a.length?r(a):m}},Main:e=>s`
      <main class="main">${e}</main>
    `,Core:()=>{const{Header:e,Article:t,Footer:r,Main:a}=o(this,l),{Single:n,Group:h}=o(this,d,b);return[n(e),a(h([t,r]))]}})}render(){return this.href?s`
      <a
        href=${f(this.href)}
        target=${f(this.target)}
        rel=${f(this.rel||o(this,d,x))}
        class=${G(o(this,d,_))}
      >
        ${o(this,l).Core()}
      </a>
    `:o(this,l).Core()}};d=new WeakSet;x=function(){return this.target==="_blank"?"noreferrer noopener":void 0};_=function(){return{card:!0,"has-excerpt":!!this.excerpt}};u=function(){return e=>this.querySelector(`[slot="${e}"]`)!==null};b=function(){return{Single:e=>e.render(),Group:e=>e.map(t=>t.render())}};l=new WeakMap;i.styles=[E,M];c([p()],i.prototype,"title",2);c([p()],i.prototype,"excerpt",2);c([p()],i.prototype,"label",2);c([p()],i.prototype,"href",2);c([p()],i.prototype,"target",2);c([p()],i.prototype,"rel",2);c([p()],i.prototype,"src",2);i=c([C("gds-card-linked",{dependsOn:[L,A,F,I,O]})],i);i.define();

import{i as _,E as u}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{o as c,e as b}from"./if-defined-BAXgs-ZI.js";import{h as o,G as k,g as G}from"./gds-element-DTROifYq.js";import{t as $}from"./tokens.style-DPGnhRAf.js";import{w as C,b as w,d as P}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as S}from"./card.component-BnkWCxNn.js";import{G as O}from"./flex.component-BnfhCQqN.js";import{I as L}from"./chain-link-Cojjp_L9.js";import{G as E}from"./img.component-B5w1hZOx.js";import{G as I}from"./text-DuxhXJix.js";const M=_`
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
`;var T=Object.defineProperty,A=Object.getOwnPropertyDescriptor,y=e=>{throw TypeError(e)},a=(e,t,r,l)=>{for(var i=l>1?void 0:l?A(t,r):t,f=e.length-1,g;f>=0;f--)(g=e[f])&&(i=(l?g(t,r,i):g(i))||i);return l&&i&&T(t,r,i),i},F=(e,t,r)=>t.has(e)||y("Cannot "+r),d=(e,t,r)=>(F(e,t,"read from private field"),r?r.call(e):t.get(e)),m=(e,t,r)=>t.has(e)?y("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),p,v,x,h;let s=class extends C(w(P(k))){constructor(){super(...arguments),m(this,p),this.title="",this.excerpt="",this.label="",m(this,h,{Header:()=>{const e=this.querySelector('[slot="header"]')!==null,t=!!this.src&&!e;return!t&&!e?u:o`
        <header class="header">
          ${t?o`
                <figure>
                  <gds-img
                    src=${c(this.src)}
                    width="100%"
                    height="100%"
                    object-fit="cover"
                    object-position="center"
                    border-radius="xs"
                  ></gds-img>
                </figure>
              `:o`<slot name="header"></slot>`}
        </header>
      `},Article:()=>!this.title&&!this.excerpt?u:o`
        <article class="article">
          ${this.title&&o`
            <h2 class="title">
              <gds-text font="heading-s">${this.title}</gds-text>
            </h2>
          `}
          ${this.excerpt&&o`
            <div class="excerpt">
              <gds-text font="body-regular-m" lines="3"
                >${this.excerpt}</gds-text
              >
            </div>
          `}
        </article>
      `,Footer:()=>!(this.querySelector('[slot="footer"]')!==null)&&!this.href?u:o`
        <footer class="footer" inert>
          <gds-link href="#">
            <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
            ${this.label}
          </gds-link>
          <slot name="footer"></slot>
        </footer>
      `,Main:e=>o`
      <main class="main">${e}</main>
    `,Core:()=>{const{Header:e,Article:t,Footer:r,Main:l}=d(this,h);return[e(),l([t(),r()])]}})}render(){return o`
      <a
        href=${c(this.href)}
        target=${c(this.target)}
        rel=${c(this.rel||d(this,p,v))}
        class=${b(d(this,p,x))}
      >
        ${d(this,h).Core()}
      </a>
    `}};p=new WeakSet;v=function(){return this.target==="_blank"?"noreferrer noopener":void 0};x=function(){return{card:!0,"has-excerpt":!!this.excerpt}};h=new WeakMap;s.styles=[$,M];a([n()],s.prototype,"title",2);a([n()],s.prototype,"excerpt",2);a([n()],s.prototype,"label",2);a([n()],s.prototype,"href",2);a([n()],s.prototype,"target",2);a([n()],s.prototype,"rel",2);a([n()],s.prototype,"src",2);s=a([G("gds-card-linked",{dependsOn:[S,E,I,O,L]})],s);s.define();

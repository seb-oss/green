import{i as C,E as k}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{e as $}from"./class-map-CXsQwv0r.js";import{o as c}from"./if-defined-CVqwUuaf.js";import{n as _}from"./when-BR7zwNJC.js";import{G,g as w,h as o}from"./gds-element-DTROifYq.js";import{t as P}from"./tokens.style-CyN6927s.js";import{G as S}from"./card.component-C4tAIpeI.js";import{G as W}from"./flex.component-My6tsEL-.js";import{I as E}from"./chain-link-DD3U4VL8.js";import{G as I}from"./img.component-BvK3KN7H.js";import{G as L}from"./text-DqywFqXI.js";const O=C`
  @layer base, types, layout, motion;
  @layer base {
    :host {
      display: inline-block;
    }

    @layer motion {
      @media (prefers-reduced-motion: reduce) {
        a {
          transition: none;
        }
      }
    }

    .card {
      display: flex;
      flex-direction: column;
      transition: all 264ms;
      color: inherit;
      text-decoration: none;
      position: relative;

      &:not(.layout-plain) {
        border-radius: var(--gds-sys-radius-s);
        padding: var(--gds-sys-space-xs);
        background: var(--gds-sys-color-l2-neutral-01);
      }

      a {
        color: inherit;
        text-decoration: none;
      }

      header {
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        min-height: 160px;
        height: auto;

        img {
          object-fit: cover;
          object-position: center;
          width: 100%;
          height: 100%;
          min-width: 100%;
          max-height: 100%;
          transition: all 420ms;

          @starting-style {
            opacity: 0;
            filter: blur(4px);
            scale: 1.2;
          }
        }
      }

      &:not(.media) header {
        border-radius: var(--gds-sys-radius-s);
        background-color: var(--gds-sys-color-l3-neutral-02);
      }

      .content {
        display: flex;
        flex-direction: column;
        gap: var(--gds-sys-space-xl);
        padding: var(--gds-sys-space-m);
      }

      main {
        display: flex;
        flex-direction: column;
        gap: var(--gds-sys-space-xs);
      }

      footer {
        display: flex;
        align-items: center;
        gap: var(--gds-sys-space-s);

        .pseudo-link,
        .prompt-link {
          display: flex;
          align-items: center;
          gap: var(--gds-sys-space-s);
        }
      }

      /* Type: Linked */
      &.type-linked {
        outline: solid var(--gds-sys-space-4xs) transparent;
        outline-offset: var(--gds-sys-space-4xs);

        &:focus {
          outline-color: var(--gds-sys-color-content-neutral-01);
          outline-offset: var(--gds-sys-space-3xs);

          &:not(:focus-visible) {
            outline-color: transparent;
          }
        }

        &:hover {
          background-color: red;
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
      }
    }
  }
`;var F=Object.defineProperty,M=Object.getOwnPropertyDescriptor,b=t=>{throw TypeError(t)},a=(t,e,s,m)=>{for(var d=m>1?void 0:m?M(e,s):e,u=t.length-1,g;u>=0;u--)(g=t[u])&&(d=(m?g(e,s,d):g(d))||d);return m&&d&&F(e,s,d),d},j=(t,e,s)=>e.has(t)||b("Cannot "+s),i=(t,e,s)=>(j(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>e.has(t)?b("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),l,y,v,x,p,h;let r=class extends G{constructor(){super(...arguments),f(this,l),this.title="",this.type="linked",this.layout="contained",this.media="landscape",f(this,p,{Linked:{Wrapper:t=>o`
        <a
          href=${c(this.href)}
          target=${c(this.target)}
          rel=${c(this.rel||i(this,l,y))}
          class=${$(i(this,l,v))}
        >
          ${t}
        </a>
      `,Content:()=>{const[t,e,s]=i(this,l,x);return o`
          ${t}
          <div class="content">${e} ${s}</div>
        `}},Standard:{Content:()=>{const[t,e,s]=i(this,l,x);return o`
          <div class=${$(i(this,l,v))}>
            ${t}
            <div class="content">${e} ${s}</div>
          </div>
        `}}}),f(this,h,{Header:()=>{const t=this.querySelector('[slot="header"]')!==null;return!this.src&&!t?k:o`
        <header class="header">
          ${_(this.src&&!t,()=>o`
              <gds-img
                src=${c(this.src)}
                object-fit="cover"
                object-position="center"
                border-radius="xs"
                width="100%"
                height="100%"
              ></gds-img>
            `)}
          <slot name="header"></slot>
        </header>
      `},Footer:()=>{const t=[],e=this.querySelector('[slot="footer"]')!==null;return this.type==="linked"&&!this.href||!this.prompt&&!e?k:(this.type==="linked"&&this.prompt&&t.push(o`
          <div class="pseudo-link">
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text font="detail-book-m" class="prompt">
              ${this.prompt}
            </gds-text>
          </div>
        `),this.type==="dynamic"&&this.prompt&&!e&&t.push(o`
          <a
            href=${c(this.href)}
            target=${c(this.target)}
            rel=${c(this.rel||i(this,l,y))}
            class="prompt-link"
          >
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text class="prompt">${this.prompt}</gds-text>
          </a>
        `),this.type==="dynamic"&&e?t.push(o`<slot name="footer"></slot>`):t.push(o`<slot name="footer"></slot>`),o`<footer class="footer">${t}</footer>`)},Main:()=>o`
      <main class="main">
        <gds-text font="heading-s">${this.title}</gds-text>
        ${_(this.excerpt,()=>o`
            <gds-text font="body-regular-m" lines="3">${this.excerpt}</gds-text>
          `)}
        <slot></slot>
      </main>
    `})}render(){if(this.type=="linked"){const t=i(this,p).Linked.Content();return i(this,p).Linked.Wrapper(t)}return i(this,p).Standard.Content()}};l=new WeakSet;y=function(){return this.target==="_blank"?"noreferrer noopener":void 0};v=function(){return{card:!0,[`type-${this.type}`]:!0,[`layout-${this.layout}`]:!0,media:!!this.src,[`media-${this.media}`]:!0}};x=function(){return[i(this,h).Header(),i(this,h).Main(),i(this,h).Footer()]};p=new WeakMap;h=new WeakMap;r.styles=[P,O];a([n()],r.prototype,"title",2);a([n()],r.prototype,"excerpt",2);a([n()],r.prototype,"prompt",2);a([n()],r.prototype,"type",2);a([n()],r.prototype,"layout",2);a([n()],r.prototype,"media",2);a([n()],r.prototype,"src",2);a([n()],r.prototype,"href",2);a([n()],r.prototype,"target",2);a([n()],r.prototype,"rel",2);r=a([w("gds-card-interactive",{dependsOn:[S,I,L,W,E]})],r);r.define();

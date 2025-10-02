import{i as C,E as G}from"./lit-element-Bx14lxc-.js";import{n}from"./Reflect-DJ7r0WLU.js";import{o as p,e as $}from"./if-defined-BAXgs-ZI.js";import{n as _}from"./when-BR7zwNJC.js";import{G as w,g as b,h as r}from"./gds-element-DTROifYq.js";import{t as P}from"./tokens.style-CJKwYBen.js";import{G as S}from"./card.component-_FybjgYi.js";import{G as W}from"./flex.component-CRnwBFQj.js";import{I as E}from"./chain-link-CK6_-QUd.js";import{G as I}from"./img.component-DR91qXzr.js";import{G as O}from"./text.component-3_iRXBRQ.js";const F=C`
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
      gap: var(--gds-sys-space-m);
      position: relative;

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
        border-radius: var(--gds-sys-radius-s);
        overflow: hidden;
        background-color: var(--gds-sys-color-l2-neutral-03);
        color: #fff;

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

      &.media-square header {
        aspect-ratio: 1/1;
      }

      &.media-portrait header {
        aspect-ratio: 2/3;
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

      &.type-linked {
        padding: var(--gds-sys-space-s);

        &::after {
          content: '';
          position: absolute;
          inset: 0;
          background-color: var(--gds-sys-color-l2-neutral-01);
          transition: all 420ms;
          border-radius: var(--gds-sys-radius-l);
          z-index: -1;
        }

        &:hover::after {
          inset: -4px;
        }

        &:hover [gds-element='gds-img'] {
          scale: 1.2;
          transion: all 420ms;
        }
      }
    }
  }
`;var L=Object.defineProperty,M=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},a=(t,e,o,m)=>{for(var d=m>1?void 0:m?M(e,o):e,f=t.length-1,g;f>=0;f--)(g=t[f])&&(d=(m?g(e,o,d):g(d))||d);return m&&d&&L(e,o,d),d},j=(t,e,o)=>e.has(t)||k("Cannot "+o),i=(t,e,o)=>(j(t,e,"read from private field"),o?o.call(t):e.get(t)),y=(t,e,o)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),l,u,v,x,c,h;let s=class extends w{constructor(){super(...arguments),y(this,l),this.title="",this.type="linked",this.layout="contained",this.media="landscape",y(this,c,{Linked:{Wrapper:t=>r`
        <a
          href=${p(this.href)}
          target=${p(this.target)}
          rel=${p(this.rel||i(this,l,u))}
          class=${$(i(this,l,v))}
        >
          ${t}
        </a>
      `,Content:()=>r`${i(this,l,x)}`},Standard:{Content:()=>r`<div class=${$(i(this,l,v))}>
          ${i(this,l,x)}
        </div> `}}),y(this,h,{Header:()=>{const t=this.querySelector('[slot="header"]')!==null;return!this.src&&!t?G:r`
        <header class="header">
          ${_(this.src&&!t,()=>r`
              <img
                src=${p(this.src)}
                object-fit="cover"
                object-position="center"
                width="100%"
                height="100%"
              ></img>
            `)}
          <slot name="header"></slot>
        </header>
      `},Footer:()=>{const t=[],e=this.querySelector('[slot="footer"]')!==null;return this.type==="linked"&&this.prompt&&t.push(r`
          <div class="pseudo-link">
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text class="prompt">${this.prompt}</gds-text>
          </div>
        `),this.type==="dynamic"&&this.prompt&&!e&&t.push(r`
          <a
            href=${p(this.href)}
            target=${p(this.target)}
            rel=${p(this.rel||i(this,l,u))}
            class="prompt-link"
          >
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text class="prompt">${this.prompt}</gds-text>
          </a>
        `),this.type==="dynamic"&&e?t.push(r`<slot name="footer"></slot>`):t.push(r`<slot name="footer"></slot>`),r`<footer class="footer">${t}</footer>`},Main:()=>r`
      <main class="main">
        <gds-text variant="title">${this.title}</gds-text>
        ${_(this.excerpt,()=>r`
            <gds-text variant="body" lines="3">${this.excerpt}</gds-text>
          `)}
        <slot></slot>
      </main>
    `})}render(){if(this.type=="linked"){const t=i(this,c).Linked.Content();return i(this,c).Linked.Wrapper(t)}return i(this,c).Standard.Content()}};l=new WeakSet;u=function(){return this.target==="_blank"?"noreferrer noopener":void 0};v=function(){return{card:!0,[`type-${this.type}`]:!0,[`layout-${this.layout}`]:!0,[`media-${this.media}`]:!0}};x=function(){return[i(this,h).Header(),i(this,h).Main(),i(this,h).Footer()]};c=new WeakMap;h=new WeakMap;s.styles=[P,F];a([n()],s.prototype,"title",2);a([n()],s.prototype,"excerpt",2);a([n()],s.prototype,"prompt",2);a([n()],s.prototype,"type",2);a([n()],s.prototype,"layout",2);a([n()],s.prototype,"media",2);a([n()],s.prototype,"src",2);a([n()],s.prototype,"href",2);a([n()],s.prototype,"target",2);a([n()],s.prototype,"rel",2);s=a([b("gds-card-interactive",{dependsOn:[S,I,O,W,E]})],s);s.define();

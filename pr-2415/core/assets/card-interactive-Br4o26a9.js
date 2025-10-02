import{n}from"./Reflect-DJ7r0WLU.js";import{o as p,e as $}from"./if-defined-BAXgs-ZI.js";import{n as _}from"./when-BR7zwNJC.js";import{G as C,g as G,h as s}from"./gds-element-DTROifYq.js";import{t as w}from"./tokens.style-CJKwYBen.js";import{G as b}from"./card.component-_FybjgYi.js";import{G as P}from"./flex.component-CRnwBFQj.js";import{I as S}from"./chain-link-CK6_-QUd.js";import{G as W}from"./img.component-DR91qXzr.js";import{G as I}from"./text.component-3_iRXBRQ.js";import{i as O}from"./lit-element-Bx14lxc-.js";const E=O`
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
`;var F=Object.defineProperty,L=Object.getOwnPropertyDescriptor,k=t=>{throw TypeError(t)},o=(t,e,a,m)=>{for(var d=m>1?void 0:m?L(e,a):e,f=t.length-1,g;f>=0;f--)(g=t[f])&&(d=(m?g(e,a,d):g(d))||d);return m&&d&&F(e,a,d),d},M=(t,e,a)=>e.has(t)||k("Cannot "+a),i=(t,e,a)=>(M(t,e,"read from private field"),a?a.call(t):e.get(t)),u=(t,e,a)=>e.has(t)?k("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,a),l,y,v,x,c,h;let r=class extends C{constructor(){super(...arguments),u(this,l),this.title="",this.type="linked",this.layout="contained",this.media="landscape",u(this,c,{Linked:{Wrapper:t=>s`
        <a
          href=${p(this.href)}
          target=${p(this.target)}
          rel=${p(this.rel||i(this,l,y))}
          class=${$(i(this,l,v))}
        >
          ${t}
        </a>
      `,Content:()=>s`${i(this,l,x)}`},Standard:{Content:()=>s`<div class=${$(i(this,l,v))}>
          ${i(this,l,x)}
        </div> `}}),u(this,h,{Header:()=>{const t=this.querySelector('[slot="header"]')!==null;return s`
        <header class="header">
          ${_(this.src&&!t,()=>s`
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
      `},Footer:()=>{const t=[],e=this.querySelector('[slot="footer"]')!==null;return this.type==="linked"&&this.prompt&&t.push(s`
          <div class="pseudo-link">
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text class="prompt">${this.prompt}</gds-text>
          </div>
        `),this.type==="dynamic"&&this.prompt&&!e&&t.push(s`
          <a
            href=${p(this.href)}
            target=${p(this.target)}
            rel=${p(this.rel||i(this,l,y))}
            class="prompt-link"
          >
            <gds-icon-chain-link></gds-icon-chain-link>
            <gds-text class="prompt">${this.prompt}</gds-text>
          </a>
        `),this.type==="dynamic"&&e?t.push(s`<slot name="footer"></slot>`):t.push(s`<slot name="footer"></slot>`),s`<footer class="footer">${t}</footer>`},Main:()=>s`
      <main class="main">
        <gds-text variant="title">${this.title}</gds-text>
        ${_(this.excerpt,()=>s` <gds-text variant="body">${this.excerpt}</gds-text> `)}
        <slot></slot>
      </main>
    `})}render(){if(this.type=="linked"){const t=i(this,c).Linked.Content();return i(this,c).Linked.Wrapper(t)}return i(this,c).Standard.Content()}};l=new WeakSet;y=function(){return this.target==="_blank"?"noreferrer noopener":void 0};v=function(){return{card:!0,[`type-${this.type}`]:!0,[`layout-${this.layout}`]:!0,[`media-${this.media}`]:!0}};x=function(){return[i(this,h).Header(),i(this,h).Main(),i(this,h).Footer()]};c=new WeakMap;h=new WeakMap;r.styles=[w,E];o([n()],r.prototype,"title",2);o([n()],r.prototype,"excerpt",2);o([n()],r.prototype,"prompt",2);o([n()],r.prototype,"type",2);o([n()],r.prototype,"layout",2);o([n()],r.prototype,"media",2);o([n()],r.prototype,"src",2);o([n()],r.prototype,"href",2);o([n()],r.prototype,"target",2);o([n()],r.prototype,"rel",2);r=o([G("gds-card-interactive",{dependsOn:[b,W,I,P,S]})],r);r.define();

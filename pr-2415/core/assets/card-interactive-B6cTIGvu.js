import{n as i}from"./Reflect-DJ7r0WLU.js";import{o as l}from"./if-defined-CVqwUuaf.js";import{n as g}from"./when-BR7zwNJC.js";import{G as $,g as x,h as n}from"./gds-element-DTROifYq.js";import{t as C}from"./tokens.style-CJKwYBen.js";import{G}from"./card.component-_FybjgYi.js";import{G as k}from"./flex.component-CRnwBFQj.js";import{I as w}from"./chain-link-CK6_-QUd.js";import{G as W}from"./img.component-DR91qXzr.js";import{G as I}from"./text.component-3_iRXBRQ.js";import{i as M}from"./lit-element-Bx14lxc-.js";const O=M`
  :host {
    display: contents;
  }

  a {
    text-decoration: none;
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-4xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
    border-radius: var(--gds-sys-radius-s);
    height: max-content;

    &:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }
  }

  .card {
    transition: all 264ms;
  }
`;var P=Object.defineProperty,E=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},s=(t,e,o,c)=>{for(var d=c>1?void 0:c?E(e,o):e,m=t.length-1,f;m>=0;m--)(f=t[m])&&(d=(c?f(e,o,d):f(d))||d);return c&&d&&P(e,o,d),d},F=(t,e,o)=>e.has(t)||y("Cannot "+o),a=(t,e,o)=>(F(t,e,"read from private field"),o?o.call(t):e.get(t)),v=(t,e,o)=>e.has(t)?y("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,o),u,_,h,p;let r=class extends ${constructor(){super(...arguments),v(this,u),this.title="",this.plain=!1,this.media="image",v(this,h,{Linked:{Wrapper:t=>n`
        <a
          href=${l(this.href)}
          target=${l(this.target)}
          rel=${l(this.rel||a(this,u,_))}
          class="linked"
        >
          ${t}
        </a>
      `,Content:()=>n`
        ${a(this,p).Header()} ${a(this,p).Main()} ${a(this,p).Footer()}
      `},Standard:{Content:()=>n`
        ${a(this,p).Header()} ${a(this,p).Main()} ${a(this,p).Footer()}
      `}}),v(this,p,{Footer:()=>n`
      <footer class="footer">
        ${g(this.prompt,()=>n` <gds-text class="prompt">${this.prompt}</gds-text> `)}
        <slot name="footer"></slot>
      </footer>
    `,Header:()=>n`
      <header class="header">
        ${g(this.src,()=>n`
            <gds-img
              src=${l(this.src)}
              aspect-ratio=${l(this["aspect-ratio"])}
            ></gds-img>
          `)}
        <slot name="header"></slot>
      </header>
    `,Main:()=>n`
      <main class="main">
        <gds-text variant="title">${this.title}</gds-text>
        ${g(this.excerpt,()=>n` <gds-text variant="body">${this.excerpt}</gds-text> `)}
        <slot></slot>
      </main>
    `})}render(){if(this.href){const t=a(this,h).Linked.Content();return a(this,h).Linked.Wrapper(t)}return a(this,h).Standard.Content()}};u=new WeakSet;_=function(){return this.target==="_blank"?"noreferrer noopener":void 0};h=new WeakMap;p=new WeakMap;r.styles=[C,O];s([i()],r.prototype,"title",2);s([i()],r.prototype,"excerpt",2);s([i()],r.prototype,"prompt",2);s([i({type:Boolean})],r.prototype,"plain",2);s([i()],r.prototype,"media",2);s([i()],r.prototype,"src",2);s([i()],r.prototype,"aspect-ratio",2);s([i()],r.prototype,"href",2);s([i()],r.prototype,"target",2);s([i()],r.prototype,"rel",2);r=s([x("gds-card-interactive",{dependsOn:[G,W,I,k,w]})],r);r.define();

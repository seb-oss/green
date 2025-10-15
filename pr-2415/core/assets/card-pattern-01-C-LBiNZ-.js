import{e as _}from"./class-map-CXsQwv0r.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{n as d}from"./when-BR7zwNJC.js";import{h as o,g as x,G as P}from"./gds-element-DTROifYq.js";import{w as k,B as y}from"./props-card-NkcoEicP.js";import{t as E}from"./tokens.style-BcVhf7GG.js";import{w as I,a as L,b as O}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as S,G as z}from"./img.component-CkdFuKSo.js";import{w as T}from"./props-link-Bzbn9FCH.js";import{G as b}from"./card-linked.component-BnL1fNO3.js";import{G as B}from"./card.component-6SGXofUs.js";import{G as D}from"./flex.component-DCtNQdiu.js";import{I as M}from"./chain-link-COH1QB85.js";import{G as W}from"./text-BgS_Y91N.js";var q=Object.defineProperty,A=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},F=(t,r,s,h)=>{for(var i=h>1?void 0:h?A(r,s):r,c=t.length-1,p;c>=0;c--)(p=t[c])&&(i=(h?p(r,s,i):p(i))||i);return h&&i&&q(r,s,i),i},v=(t,r,s)=>r.has(t)||$("Cannot "+s),C=(t,r,s)=>(v(t,r,"read from private field"),s?s.call(t):r.get(t)),R=(t,r,s)=>r.has(t)?$("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,s),a=(t,r,s)=>(v(t,r,"access private method"),s),e,f,m,g,u,w,G;let l=class extends I(L(O(T(S(k(P)))))){constructor(){super(...arguments),R(this,e)}render(){return d(this.href,()=>a(this,e,w).call(this),()=>a(this,e,G).call(this))}};e=new WeakSet;f=function(){return{...this.classes("pattern-01"),"card-linked":!!this.href}};m=function(){return d(this.src,()=>o`
        <gds-img
          src=${n(this.src)}
          srcset=${n(this.srcset)}
          sizes=${n(this.sizes)}
          width="100%"
          height="100%"
          object-fit="cover"
          object-position="center"
          border-radius="xs"
          aspect-ratio=${this.aspectRatio==="square"?"1/1":"16/9"}
        ></gds-img>
      `)};g=function(){return d(this.title,()=>o`
        <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
      `)};u=function(){return d(this.excerpt,()=>o`
        <gds-text tag="p" lines="3" font="body-regular-m">
          ${this.excerpt}
        </gds-text>
      `)};w=function(){return o`
      <gds-card-linked
        padding="xs"
        class=${_(C(this,e,f))}
        gap="0"
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel)}
      >
        <header class="part-header">${a(this,e,m).call(this)}</header>
        <main class="part-main">
          <article class="part-article">
            ${a(this,e,g).call(this)} ${a(this,e,u).call(this)}
          </article>
          <footer class="part-footer" aria-hidden="true" inert>
            <slot name="footer">
              ${d(this.label,()=>o`
                  <gds-link href=${n(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `)}
            </slot>
          </footer>
        </main>
      </gds-card-linked>
    `};G=function(){return o`
      <gds-card padding="xs" class=${_(C(this,e,f))} gap="0">
        <header class="part-header">${a(this,e,m).call(this)}</header>
        <main class="part-main">
          <article class="part-article">
            ${a(this,e,g).call(this)} ${a(this,e,u).call(this)}
          </article>
          <footer class="part-footer">
            <slot name="footer"></slot>
          </footer>
        </main>
      </gds-card>
    `};l.styles=[E,y];l=F([x("gds-card-pattern-01",{dependsOn:[B,b,z,W,D,M]})],l);l.define();

import{e as x}from"./class-map-CXsQwv0r.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{n as d}from"./when-BR7zwNJC.js";import{h as o,g as G,G as P}from"./gds-element-DTROifYq.js";import{t as k}from"./tokens.style-BcVhf7GG.js";import{w as y,a as E,b as I}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as L}from"./props-card-Blwly523.js";import{w as O,G as S}from"./img.component-CkdFuKSo.js";import{w as z}from"./props-link-Bzbn9FCH.js";import{G as T}from"./card-linked.component-BnL1fNO3.js";import{G as b}from"./card.component-6SGXofUs.js";import{G as D}from"./flex.component-DCtNQdiu.js";import{I as M}from"./chain-link-COH1QB85.js";import{G as W}from"./text-BgS_Y91N.js";var q=Object.defineProperty,A=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},F=(t,s,e,l)=>{for(var i=l>1?void 0:l?A(s,e):s,c=t.length-1,f;c>=0;c--)(f=t[c])&&(i=(l?f(s,e,i):f(i))||i);return l&&i&&q(s,e,i),i},v=(t,s,e)=>s.has(t)||_("Cannot "+e),$=(t,s,e)=>(v(t,s,"read from private field"),e?e.call(t):s.get(t)),R=(t,s,e)=>s.has(t)?_("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),a=(t,s,e)=>(v(t,s,"access private method"),e),r,p,g,m,u,w,C;let h=class extends y(E(I(z(O(L(P)))))){constructor(){super(...arguments),R(this,r)}render(){return d(this.href,()=>a(this,r,w).call(this),()=>a(this,r,C).call(this))}};r=new WeakSet;p=function(){return{...this.classes("pattern-01"),"card-linked":!!this.href}};g=function(){return d(this.src,()=>o`
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
      `)};m=function(){return d(this.title,()=>o`
        <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
      `)};u=function(){return d(this.excerpt,()=>o`
        <gds-text tag="p" lines="3" font="body-regular-m">
          ${this.excerpt}
        </gds-text>
      `)};w=function(){return o`
      <gds-card-linked
        padding="xs"
        class=${x($(this,r,p))}
        gap="0"
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel)}
      >
        <gds-flex>${a(this,r,g).call(this)}</gds-flex>
        <gds-flex flex-direction="column" gap="xl" padding="m">
          <gds-flex flex-direction="column" gap="xs">
            ${a(this,r,m).call(this)} ${a(this,r,u).call(this)}
          </gds-flex>
          <gds-flex
            align-items="center"
            gap="s"
            pointer-events="none"
            aria-hidden="true"
            inert
          >
            <slot name="footer">
              ${d(this.href&&this.label,()=>o`
                  <gds-link href=${n(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `)}
            </slot>
          </gds-flex>
        </gds-flex>
      </gds-card-linked>
    `};C=function(){return o`
      <gds-card padding="xs" class=${x($(this,r,p))} gap="0">
        <header class="part-header">${a(this,r,g).call(this)}</header>
        <main class="part-main">
          <article class="part-article">
            ${a(this,r,m).call(this)} ${a(this,r,u).call(this)}
          </article>
          <footer class="part-footer">
            <slot name="footer"></slot>
          </footer>
        </main>
      </gds-card>
    `};h.styles=[k];h=F([G("gds-card-pattern-01",{dependsOn:[b,T,S,W,D,M]})],h);h.define();

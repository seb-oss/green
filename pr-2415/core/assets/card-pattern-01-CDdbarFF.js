import{e as $}from"./class-map-CXsQwv0r.js";import{o as l}from"./if-defined-CVqwUuaf.js";import{n as f}from"./when-BR7zwNJC.js";import{h,g as k,G as y}from"./gds-element-DTROifYq.js";import{t as b}from"./tokens.style-BcVhf7GG.js";import{w as z,b as O,d as E}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as c}from"./Reflect-DJ7r0WLU.js";import{w as I,G as L}from"./img.component-BgNQb3sW.js";import{w as R}from"./props-link-Bzbn9FCH.js";import{G as S}from"./card-linked.component-BGID1C11.js";import{G as M}from"./card.component-B68xpvsf.js";import{G as T}from"./flex.component-CILQJn0G.js";import{I as D}from"./chain-link-B5E7NdkP.js";import{G as W}from"./text-CLGX1paA.js";var j=Object.defineProperty,p=(e,t,r,i)=>{for(var s=void 0,o=e.length-1,d;o>=0;o--)(d=e[o])&&(s=d(t,r,s)||s);return s&&j(t,r,s),s};function q(e){class t extends e{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.appearance="neutral",this.size="large",this.aspectRatio="landscape"}classes(i){return{card:!0,[`card-${i||"base"}`]:!!i,[`appearance-${this.appearance}`]:!0,[`aspect-ratio-${this.aspectRatio}`]:!0,[`size-${this.size}`]:!0}}}return p([c({reflect:!1})],t.prototype,"title"),p([c({reflect:!1})],t.prototype,"excerpt"),p([c({reflect:!1})],t.prototype,"label"),p([c({reflect:!1})],t.prototype,"appearance"),p([c({reflect:!1})],t.prototype,"size"),p([c({reflect:!1,attribute:"aspect-ratio"})],t.prototype,"aspectRatio"),t}var A=Object.defineProperty,F=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},X=(e,t,r,i)=>{for(var s=i>1?void 0:i?F(t,r):t,o=e.length-1,d;o>=0;o--)(d=e[o])&&(s=(i?d(t,r,s):d(s))||s);return i&&s&&A(t,r,s),s},C=(e,t,r)=>t.has(e)||v("Cannot "+r),G=(e,t,r)=>(C(e,t,"read from private field"),r?r.call(e):t.get(e)),B=(e,t,r)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),n=(e,t,r)=>(C(e,t,"access private method"),r),a,m,u,x,_,P,w;let g=class extends z(O(E(R(I(q(y)))))){constructor(){super(...arguments),B(this,a)}render(){return f(this.href,()=>n(this,a,P).call(this),()=>n(this,a,w).call(this))}};a=new WeakSet;m=function(){return{...this.classes("pattern-01"),"card-linked":!!this.href}};u=function(){return f(this.src,()=>h`
        <gds-img
          src=${l(this.src)}
          srcset=${l(this.srcset)}
          sizes=${l(this.sizes)}
          width="100%"
          height="100%"
          object-fit="cover"
          object-position="center"
          border-radius="xs"
          aspect-ratio=${this.aspectRatio==="square"?"1/1":"16/9"}
        ></gds-img>
      `)};x=function(){return f(this.title,()=>h`
        <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
      `)};_=function(){return f(this.excerpt,()=>h`
        <gds-text tag="p" lines="3" font="body-regular-m">
          ${this.excerpt}
        </gds-text>
      `)};P=function(){return h`
      <gds-card-linked
        padding="xs"
        class=${$(G(this,a,m))}
        gap="0"
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel)}
      >
        <gds-flex>${n(this,a,u).call(this)}</gds-flex>
        <gds-flex flex-direction="column" gap="xl" padding="m">
          <gds-flex flex-direction="column" gap="xs">
            ${n(this,a,x).call(this)} ${n(this,a,_).call(this)}
          </gds-flex>
          <gds-flex
            align-items="center"
            gap="s"
            pointer-events="none"
            aria-hidden="true"
            inert
          >
            <slot name="footer">
              ${f(this.href&&this.label,()=>h`
                  <gds-link href=${l(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `)}
            </slot>
          </gds-flex>
        </gds-flex>
      </gds-card-linked>
    `};w=function(){return h`
      <gds-card padding="xs" class=${$(G(this,a,m))} gap="0">
        <header class="part-header">${n(this,a,u).call(this)}</header>
        <main class="part-main">
          <article class="part-article">
            ${n(this,a,x).call(this)} ${n(this,a,_).call(this)}
          </article>
          <footer class="part-footer">
            <slot name="footer"></slot>
          </footer>
        </main>
      </gds-card>
    `};g.styles=[b];g=X([k("gds-card-pattern-01",{dependsOn:[M,S,L,W,T,D]})],g);g.define();

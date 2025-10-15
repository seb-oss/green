import{e as P}from"./class-map-CXsQwv0r.js";import{o}from"./if-defined-CVqwUuaf.js";import{n as h}from"./when-BR7zwNJC.js";import{h as f,g as w,G as k}from"./gds-element-DTROifYq.js";import{t as y}from"./tokens.style-BcVhf7GG.js";import{w as b,b as z,d as O}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as c}from"./Reflect-DJ7r0WLU.js";import{w as E,G as I}from"./img.component-BgNQb3sW.js";import{w as L}from"./props-link-Bzbn9FCH.js";import{G as R}from"./card-linked.component-BGID1C11.js";import{G as S}from"./card.component-B68xpvsf.js";import{G as M}from"./flex.component-CILQJn0G.js";import{I as T}from"./chain-link-B5E7NdkP.js";import{G as D}from"./text-CLGX1paA.js";var W=Object.defineProperty,p=(t,e,s,i)=>{for(var r=void 0,l=t.length-1,d;l>=0;l--)(d=t[l])&&(r=d(e,s,r)||r);return r&&W(e,s,r),r};function j(t){class e extends t{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.appearance="neutral",this.size="large",this.aspectRatio="landscape"}classes(i){return{card:!0,[`card-${i||"base"}`]:!!i,[`appearance-${this.appearance}`]:!0,[`aspect-ratio-${this.aspectRatio}`]:!0,[`size-${this.size}`]:!0}}}return p([c({reflect:!1})],e.prototype,"title"),p([c({reflect:!1})],e.prototype,"excerpt"),p([c({reflect:!1})],e.prototype,"label"),p([c({reflect:!1})],e.prototype,"appearance"),p([c({reflect:!1})],e.prototype,"size"),p([c({reflect:!1,attribute:"aspect-ratio"})],e.prototype,"aspectRatio"),e}var q=Object.defineProperty,A=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},F=(t,e,s,i)=>{for(var r=i>1?void 0:i?A(e,s):e,l=t.length-1,d;l>=0;l--)(d=t[l])&&(r=(i?d(e,s,r):d(r))||r);return i&&r&&q(e,s,r),r},$=(t,e,s)=>e.has(t)||_("Cannot "+s),X=(t,e,s)=>($(t,e,"read from private field"),s?s.call(t):e.get(t)),B=(t,e,s)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),n=(t,e,s)=>($(t,e,"access private method"),s),a,v,m,u,x,C,G;let g=class extends b(z(O(L(E(j(k)))))){constructor(){super(...arguments),B(this,a)}render(){return h(this.href,()=>n(this,a,C).call(this),()=>n(this,a,G).call(this))}};a=new WeakSet;v=function(){return{...this.classes("pattern-01"),"card-linked":!!this.href}};m=function(){return h(this.src,()=>f`
        <gds-img
          src=${o(this.src)}
          srcset=${o(this.srcset)}
          sizes=${o(this.sizes)}
          width="100%"
          height="100%"
          object-fit="cover"
          object-position="center"
          border-radius="xs"
          aspect-ratio=${this.aspectRatio==="square"?"1/1":"16/9"}
        ></gds-img>
      `)};u=function(){return h(this.title,()=>f`
        <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
      `)};x=function(){return h(this.excerpt,()=>f`
        <gds-text tag="p" lines="3" font="body-regular-m">
          ${this.excerpt}
        </gds-text>
      `)};C=function(){return f`
      <gds-card-linked
        padding="xs"
        gap="0"
        href=${o(this.href)}
        target=${o(this.target)}
        rel=${o(this.rel)}
      >
        <gds-flex>${n(this,a,m).call(this)}</gds-flex>
        <gds-flex flex-direction="column" gap="xl" padding="m">
          <gds-flex flex-direction="column" gap="xs">
            ${n(this,a,u).call(this)} ${n(this,a,x).call(this)}
          </gds-flex>
          <gds-flex
            align-items="center"
            gap="s"
            pointer-events="none"
            aria-hidden="true"
            inert
          >
            <slot name="footer">
              ${h(this.href&&this.label,()=>f`
                  <gds-link href=${o(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `)}
            </slot>
          </gds-flex>
        </gds-flex>
      </gds-card-linked>
    `};G=function(){return f`
      <gds-card padding="xs" class=${P(X(this,a,v))} gap="0">
        <gds-flex>${n(this,a,m).call(this)}</gds-flex>
        <gds-flex flex-direction="column" gap="xl" padding="m">
          <gds-flex flex-direction="column" gap="xs">
            ${n(this,a,u).call(this)} ${n(this,a,x).call(this)}
          </gds-flex>
          <gds-flex align-items="center" gap="s">
            <slot name="footer"></slot>
          </gds-flex>
        </gds-flex>
      </gds-card>
    `};g.styles=[y];g=F([w("gds-card-pattern-01",{dependsOn:[S,R,I,D,M,T]})],g);g.define();

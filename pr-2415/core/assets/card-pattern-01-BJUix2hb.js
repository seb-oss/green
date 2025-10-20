import{o as h}from"./if-defined-CVqwUuaf.js";import{n}from"./when-BR7zwNJC.js";import{h as a,g as w,G as P}from"./gds-element-DTROifYq.js";import{t as G}from"./tokens.style-BcVhf7GG.js";import{w as b,b as k,d as L}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as f}from"./Reflect-DJ7r0WLU.js";import{w as O,G as S}from"./img.component-BgNQb3sW.js";import{w as E}from"./props-link-CDn2X3ta.js";import{G as F}from"./card-linked.component-CL2OFB2C.js";import{G as I}from"./card.component-CxdVhKxM.js";import{G as j}from"./flex.component-Ch_D9mFT.js";import{I as z}from"./chain-link-B5E7NdkP.js";import{G as M}from"./text-4R64gHH_.js";import{i as q}from"./lit-element-Bx14lxc-.js";var D=Object.defineProperty,p=(e,t,s,l)=>{for(var r=void 0,d=e.length-1,c;d>=0;d--)(c=e[d])&&(r=c(t,s,r)||r);return r&&D(t,s,r),r};function T(e){class t extends e{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.ratio="landscape"}classes(l){return{card:!0,outlined:!0,[`card-${l||"base"}`]:!!l,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0}}}return p([f({reflect:!1})],t.prototype,"title"),p([f({reflect:!1})],t.prototype,"excerpt"),p([f({reflect:!1})],t.prototype,"label"),p([f({reflect:!1})],t.prototype,"variant"),p([f({type:Boolean,reflect:!1})],t.prototype,"outlined"),p([f({reflect:!1,attribute:"aspect-ratio"})],t.prototype,"ratio"),t}const W=q`
  :host {
    display: inline-block;
    height: max-content;
  }
`;var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},V=(e,t,s,l)=>{for(var r=l>1?void 0:l?B(t,s):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(r=(l?c(t,s,r):c(r))||r);return l&&r&&A(t,s,r),r},X=(e,t,s)=>t.has(e)||v("Cannot "+s),H=(e,t,s)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,s),o=(e,t,s)=>(X(e,t,"access private method"),s),i,u,m,$,_,C,y,x;let g=class extends b(k(L(E(O(T(P)))))){constructor(){super(...arguments),H(this,i)}render(){return n(this.href,()=>o(this,i,$).call(this),()=>o(this,i,C).call(this))}};i=new WeakSet;u=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')};m=function(){switch(this.variant){case"neutral-02":return this.outlined?"secondary":"tertiary";case"neutral-01":default:return"primary"}};$=function(){return a`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${h(this.href)}
        target=${h(this.target)}
        rel=${h(this.rel)}
        variant=${o(this,i,m).call(this)}
        class="card"
      >
        ${o(this,i,x).call(this)}
      </gds-card-linked>
    `};_=function(){return n(o(this,i,u).call(this,!0),()=>a`
        <gds-flex
          align-items="center"
          gap="m"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${n(this.label,()=>a`
                <gds-link href=${h(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};C=function(){return a`
      <gds-card padding="0" gap="0" variant=${o(this,i,m).call(this)}>
        ${o(this,i,x).call(this)}
      </gds-card>
    `};y=function(){return n(o(this,i,u).call(this),()=>a`
        <gds-flex align-items="center" gap="m">
          <slot name="footer"></slot>
        </gds-flex>
      `)};x=function(){return a`
      ${n(this.src,()=>a`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${h(this.src)}
              srcset=${h(this.srcset)}
              sizes=${h(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
            ></gds-img>
          </gds-flex>
        `)}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${n(!this.src,()=>a`<slot name="header"></slot>`)}
        ${n(this.title||this.excerpt,()=>a`
            <gds-flex flex-direction="column" gap="xs">
              ${n(this.title,()=>a`
                  <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
                `)}
              ${n(this.excerpt,()=>a`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `)}
            </gds-flex>
          `)}
        ${n(this.href,()=>o(this,i,_).call(this),()=>o(this,i,y).call(this))}
      </gds-flex>
    `};g.styles=[G,W];g=V([w("gds-card-pattern-01",{dependsOn:[I,F,S,M,j,z]})],g);g.define();

import{o as c}from"./if-defined-CVqwUuaf.js";import{n}from"./when-BR7zwNJC.js";import{h as a,g as w,G as P}from"./gds-element-DTROifYq.js";import{t as G}from"./tokens.style-BcVhf7GG.js";import{w as k,b,d as L}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as f}from"./Reflect-DJ7r0WLU.js";import{e as O}from"./class-map-CXsQwv0r.js";import{w as S,G as E}from"./img.component-BgNQb3sW.js";import{w as F}from"./props-link-CDn2X3ta.js";import{G as I}from"./card-linked.component-CL2OFB2C.js";import{G as j}from"./card.component-CxdVhKxM.js";import{G as z}from"./flex.component-Ch_D9mFT.js";import{I as M}from"./chain-link-B5E7NdkP.js";import{G as q}from"./text-4R64gHH_.js";import{i as D}from"./lit-element-Bx14lxc-.js";var T=Object.defineProperty,p=(e,t,r,l)=>{for(var s=void 0,d=e.length-1,h;d>=0;d--)(h=e[d])&&(s=h(t,r,s)||s);return s&&T(t,r,s),s};function W(e){class t extends e{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.ratio="landscape"}classes(l){const s={card:!0,[`card-${l}`]:!!l,outlined:this.outlined,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0};return O(s)}}return p([f({reflect:!1})],t.prototype,"title"),p([f({reflect:!1})],t.prototype,"excerpt"),p([f({reflect:!1})],t.prototype,"label"),p([f({reflect:!1})],t.prototype,"variant"),p([f({type:Boolean,reflect:!1})],t.prototype,"outlined"),p([f({reflect:!1,attribute:"aspect-ratio"})],t.prototype,"ratio"),t}const A=D`
  :host {
    display: inline-block;
    height: max-content;
  }

  .card-media {
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-property: opacity;

    @starting-style {
      opacity: 0;
    }
  }
`;var B=Object.defineProperty,V=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},X=(e,t,r,l)=>{for(var s=l>1?void 0:l?V(t,r):t,d=e.length-1,h;d>=0;d--)(h=e[d])&&(s=(l?h(t,r,s):h(s))||s);return l&&s&&B(t,r,s),s},H=(e,t,r)=>t.has(e)||v("Cannot "+r),J=(e,t,r)=>t.has(e)?v("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),o=(e,t,r)=>(H(e,t,"access private method"),r),i,m,u,$,_,y,C,x;let g=class extends k(b(L(F(S(W(P)))))){constructor(){super(...arguments),J(this,i)}render(){return n(this.href,()=>o(this,i,$).call(this),()=>o(this,i,y).call(this))}};i=new WeakSet;m=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')};u=function(){switch(this.variant){case"neutral-02":return this.outlined?"secondary":"tertiary";case"neutral-01":default:return"primary"}};$=function(){return a`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${c(this.href)}
        target=${c(this.target)}
        rel=${c(this.rel)}
        variant=${o(this,i,u).call(this)}
        class=${this.classes("linked")}
      >
        ${o(this,i,x).call(this)}
      </gds-card-linked>
    `};_=function(){return n(o(this,i,m).call(this,!0),()=>a`
        <gds-flex
          align-items="center"
          gap="m"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${n(this.label,()=>a`
                <gds-link href=${c(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};y=function(){return a`
      <gds-card
        padding="0"
        gap="0"
        variant=${o(this,i,u).call(this)}
        class=${this.classes("static")}
      >
        ${o(this,i,x).call(this)}
      </gds-card>
    `};C=function(){return n(o(this,i,m).call(this),()=>a`
        <gds-flex align-items="center" gap="m">
          <slot name="footer"></slot>
        </gds-flex>
      `)};x=function(){return a`
      ${n(this.src,()=>a`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${c(this.src)}
              srcset=${c(this.srcset)}
              sizes=${c(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
              class="card-media"
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
        ${n(this.href,()=>o(this,i,_).call(this),()=>o(this,i,C).call(this))}
      </gds-flex>
    `};g.styles=[G,A];g=X([w("gds-card-pattern-01",{dependsOn:[j,I,E,q,z,M]})],g);g.define();

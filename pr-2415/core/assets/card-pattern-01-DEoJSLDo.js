import{o as n}from"./if-defined-CVqwUuaf.js";import{n as i}from"./when-BR7zwNJC.js";import{h as s,g as y,G as C}from"./gds-element-DTROifYq.js";import{t as b}from"./tokens.style-BcVhf7GG.js";import{w,b as P,d as G}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as f}from"./Reflect-DJ7r0WLU.js";import{w as k,G as O}from"./img.component-BgNQb3sW.js";import{w as S}from"./props-link-CDn2X3ta.js";import{G as j}from"./card-linked.component-CL2OFB2C.js";import{G as z}from"./card.component-CxdVhKxM.js";import{G as L}from"./flex.component-Ch_D9mFT.js";import{I as q}from"./chain-link-B5E7NdkP.js";import{G as E}from"./text-4R64gHH_.js";import{i as I}from"./lit-element-Bx14lxc-.js";var M=Object.defineProperty,p=(e,t,a,l)=>{for(var r=void 0,h=e.length-1,c;h>=0;h--)(c=e[h])&&(r=c(t,a,r)||r);return r&&M(t,a,r),r};function D(e){class t extends e{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.ratio="landscape"}classes(l){return{card:!0,outlined:!0,[`card-${l||"base"}`]:!!l,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0}}}return p([f({reflect:!1})],t.prototype,"title"),p([f({reflect:!1})],t.prototype,"excerpt"),p([f({reflect:!1})],t.prototype,"label"),p([f({reflect:!1})],t.prototype,"variant"),p([f({type:Boolean,reflect:!1})],t.prototype,"outlined"),p([f({reflect:!1,attribute:"aspect-ratio"})],t.prototype,"ratio"),t}const F=I`
  :host {
    display: inline-block;
  }
`;var T=Object.defineProperty,W=Object.getOwnPropertyDescriptor,$=e=>{throw TypeError(e)},A=(e,t,a,l)=>{for(var r=l>1?void 0:l?W(t,a):t,h=e.length-1,c;h>=0;h--)(c=e[h])&&(r=(l?c(t,a,r):c(r))||r);return l&&r&&T(t,a,r),r},B=(e,t,a)=>t.has(e)||$("Cannot "+a),H=(e,t,a)=>t.has(e)?$("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,a),d=(e,t,a)=>(B(e,t,"access private method"),a),o,m,u,x,v,_;let g=class extends w(P(G(S(k(D(C)))))){constructor(){super(...arguments),H(this,o)}render(){return i(this.href,()=>d(this,o,v).call(this),()=>d(this,o,_).call(this))}};o=new WeakSet;m=function(){return this.src||this.querySelector('[slot="header"]')};u=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')};x=function(){switch(this.variant){case"neutral-02":return this.outlined?"secondary":"tertiary";case"neutral-01":default:return"primary"}};v=function(){return s`
      <gds-card-linked
        padding="xs"
        gap="0"
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel)}
        variant=${d(this,o,x).call(this)}
        class="card"
      >
        ${i(d(this,o,m).call(this),()=>s`
            <slot name="header">
              ${i(this.src,()=>s`
                  <gds-img
                    src=${n(this.src)}
                    srcset=${n(this.srcset)}
                    sizes=${n(this.sizes)}
                    width="100%"
                    height="100%"
                    object-fit="cover"
                    object-position="center"
                    border-radius="xs"
                    aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
                  ></gds-img>
                `)}
            </slot>
          `)}

        <gds-flex flex-direction="column" gap="xl" padding="m">
          ${i(this.title||this.excerpt,()=>s`
              <gds-flex flex-direction="column" gap="xs">
                ${i(this.title,()=>s`
                    <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
                  `)}
                ${i(this.excerpt,()=>s`
                    <gds-text tag="p" lines="3" font="body-regular-m">
                      ${this.excerpt}
                    </gds-text>
                  `)}
              </gds-flex>
            `)}
          ${i(d(this,o,u).call(this,!0),()=>s`
              <gds-flex
                align-items="center"
                gap="m"
                pointer-events="none"
                aria-hidden="true"
                inert
              >
                <slot name="footer">
                  ${i(this.label,()=>s`
                      <gds-link href=${n(this.href)}>
                        <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                        ${this.label}
                      </gds-link>
                    `)}
                </slot>
              </gds-flex>
            `)}
        </gds-flex>
      </gds-card-linked>
    `};_=function(){return s`
      <gds-card padding="xs" gap="0" variant=${d(this,o,x).call(this)}>
        ${i(d(this,o,m).call(this),()=>s`
            <slot name="header">
              ${i(this.src,()=>s`
                  <gds-img
                    src=${n(this.src)}
                    srcset=${n(this.srcset)}
                    sizes=${n(this.sizes)}
                    width="100%"
                    height="100%"
                    object-fit="cover"
                    object-position="center"
                    border-radius="xs"
                    aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
                  ></gds-img>
                `)}
            </slot>
          `)}

        <gds-flex flex-direction="column" gap="xl" padding="m">
          ${i(this.title||this.excerpt,()=>s`
              <gds-flex flex-direction="column" gap="xs">
                ${i(this.title,()=>s`
                    <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
                  `)}
                ${i(this.excerpt,()=>s`
                    <gds-text tag="p" lines="3" font="body-regular-m">
                      ${this.excerpt}
                    </gds-text>
                  `)}
              </gds-flex>
            `)}
          ${i(d(this,o,u).call(this),()=>s`
              <gds-flex align-items="center" gap="m">
                <slot name="footer"></slot>
              </gds-flex>
            `)}
        </gds-flex>
      </gds-card>
    `};g.styles=[b,F];g=A([y("gds-card-pattern-01",{dependsOn:[z,j,O,E,L,q]})],g);g.define();

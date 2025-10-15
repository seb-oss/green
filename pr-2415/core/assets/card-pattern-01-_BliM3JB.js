import{o as n}from"./if-defined-CVqwUuaf.js";import{n as a}from"./when-BR7zwNJC.js";import{h as s,g as _,G as b}from"./gds-element-DTROifYq.js";import{t as C}from"./tokens.style-BcVhf7GG.js";import{w,b as y,d as P}from"./declarative-layout-mixins-DFPXvh_g.js";import{n as h}from"./Reflect-DJ7r0WLU.js";import{w as G,G as z}from"./img.component-BgNQb3sW.js";import{w as k}from"./props-link-CDn2X3ta.js";import{G as O}from"./card-linked.component-CL2OFB2C.js";import{G as S}from"./card.component-CxdVhKxM.js";import{G as j}from"./flex.component-Ch_D9mFT.js";import{I as L}from"./chain-link-B5E7NdkP.js";import{G as R}from"./text-4R64gHH_.js";import{i as q}from"./lit-element-Bx14lxc-.js";var E=Object.defineProperty,p=(e,t,i,o)=>{for(var r=void 0,d=e.length-1,c;d>=0;d--)(c=e[d])&&(r=c(t,i,r)||r);return r&&E(t,i,r),r};function I(e){class t extends e{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.appearance="neutral",this.size="large",this.aspectRatio="landscape"}classes(o){return{card:!0,[`card-${o||"base"}`]:!!o,[`appearance-${this.appearance}`]:!0,[`aspect-ratio-${this.aspectRatio}`]:!0,[`size-${this.size}`]:!0}}}return p([h({reflect:!1})],t.prototype,"title"),p([h({reflect:!1})],t.prototype,"excerpt"),p([h({reflect:!1})],t.prototype,"label"),p([h({reflect:!1})],t.prototype,"appearance"),p([h({reflect:!1})],t.prototype,"size"),p([h({reflect:!1,attribute:"aspect-ratio"})],t.prototype,"aspectRatio"),t}const M=q`
  :host {
    display: inline-block;
  }
`;var D=Object.defineProperty,F=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},T=(e,t,i,o)=>{for(var r=o>1?void 0:o?F(t,i):t,d=e.length-1,c;d>=0;d--)(c=e[d])&&(r=(o?c(t,i,r):c(r))||r);return o&&r&&D(t,i,r),r},W=(e,t,i)=>t.has(e)||x("Cannot "+i),A=(e,t,i)=>t.has(e)?x("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,i),f=(e,t,i)=>(W(e,t,"access private method"),i),l,m,u,$,v;let g=class extends w(y(P(k(G(I(b)))))){constructor(){super(...arguments),A(this,l)}render(){return a(this.href,()=>f(this,l,$).call(this),()=>f(this,l,v).call(this))}};l=new WeakSet;m=function(){return this.src||this.querySelector('[slot="header"]')};u=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')};$=function(){return s`
      <gds-card-linked
        padding="xs"
        gap="0"
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel)}
        variant=${this.appearance==="neutral"?"neutral-01":"secondary"}
        border-width=${this.appearance==="plain"?"0":"5xs"}
        class="card"
      >
        ${a(f(this,l,m).call(this),()=>s`
            <slot name="header">
              ${a(this.src,()=>s`
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
                `)}
            </slot>
          `)}

        <gds-flex
          flex-direction="column"
          gap="xl"
          padding=${this.size==="small"?"s":"m"}
        >
          ${a(this.title||this.excerpt,()=>s`
              <gds-flex flex-direction="column" gap="xs">
                ${a(this.title,()=>s`
                    <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
                  `)}
                ${a(this.excerpt,()=>s`
                    <gds-text tag="p" lines="3" font="body-regular-m">
                      ${this.excerpt}
                    </gds-text>
                  `)}
              </gds-flex>
            `)}
          ${a(f(this,l,u).call(this,!0),()=>s`
              <gds-flex
                align-items="center"
                gap="m"
                pointer-events="none"
                aria-hidden="true"
                inert
              >
                <slot name="footer">
                  ${a(this.label,()=>s`
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
    `};v=function(){return s`
      <gds-card
        padding="xs"
        gap="0"
        variant=${this.appearance==="neutral"?"neutral-01":"secondary"}
        border-width=${this.appearance==="plain"?"0":"5xs"}
      >
        ${a(f(this,l,m).call(this),()=>s`
            <slot name="header">
              ${a(this.src,()=>s`
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
                `)}
            </slot>
          `)}

        <gds-flex
          flex-direction="column"
          gap="xl"
          padding=${this.size==="small"?"s":"m"}
        >
          ${a(this.title||this.excerpt,()=>s`
              <gds-flex flex-direction="column" gap="xs">
                ${a(this.title,()=>s`
                    <gds-text tag="h2" font="heading-s">${this.title}</gds-text>
                  `)}
                ${a(this.excerpt,()=>s`
                    <gds-text tag="p" lines="3" font="body-regular-m">
                      ${this.excerpt}
                    </gds-text>
                  `)}
              </gds-flex>
            `)}
          ${a(f(this,l,u).call(this),()=>s`
              <gds-flex align-items="center" gap="m">
                <slot name="footer"></slot>
              </gds-flex>
            `)}
        </gds-flex>
      </gds-card>
    `};g.styles=[C,M];g=T([_("gds-card-pattern-01",{dependsOn:[S,O,z,R,j,L]})],g);g.define();

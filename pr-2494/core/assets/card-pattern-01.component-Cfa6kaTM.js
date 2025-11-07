import{n as c}from"./Reflect-DJ7r0WLU.js";import{e as k}from"./class-map-CXsQwv0r.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{n}from"./when-BR7zwNJC.js";import{G as w}from"./card-linked.component-BszXhyQm.js";import{G as b}from"./card.component-BxcB0340.js";import{G as P}from"./flex.component-DBFKxAN1.js";import{I as L}from"./chain-link-mD-zRhed.js";import{w as S,G as O}from"./img.component-CGz1E6bR.js";import{G as E}from"./text-C8_sHSHj.js";import{h as a,g as F,G as I}from"./gds-element-DTROifYq.js";import{t as z}from"./tokens.style-DeseHqaM.js";import{w as j,b as q,d as D}from"./declarative-layout-mixins-C4FFYA_h.js";import{w as M}from"./props-link-q-kPEFpu.js";import{i as T}from"./lit-element-Bx14lxc-.js";const W=T`
  :host {
    display: inline-block;
    height: max-content;
    text-align: left;
  }

  .card-media {
    transition-timing-function: var(--gds-sys-motion-easing-linear);
    transition-duration: var(--gds-sys-motion-duration-fast);
    transition-property: opacity;

    @starting-style {
      opacity: 0;
    }
  }
`;var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},d=(t,s,l,f)=>{for(var h=f>1?void 0:f?B(s,l):s,p=t.length-1,g;p>=0;p--)(g=t[p])&&(h=(f?g(s,l,h):g(h))||h);return f&&h&&A(s,l,h),h},V=(t,s,l)=>s.has(t)||v("Cannot "+l),X=(t,s,l)=>s.has(t)?v("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,l),r=(t,s,l)=>(V(t,s,"access private method"),l),e,m,u,x,y,_,C,G,$;let o=class extends j(q(D(M(S(I))))){constructor(){super(...arguments),X(this,e),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.tag="h2",this.ratio="landscape"}render(){return n(this.href,()=>r(this,e,y).call(this),()=>r(this,e,C).call(this))}};e=new WeakSet;m=function(t=!1){return t&&this.label||this.querySelector('[slot="footer"]')};u=function(){switch(this.variant){case"neutral-02":return this.outlined?"secondary":"tertiary";case"neutral-01":default:return"primary"}};x=function(t){return k({card:!0,outlined:this.outlined,[`card-${t}`]:!!t,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})};y=function(){return a`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${i(this.href)}
        target=${i(this.target)}
        rel=${i(this.rel)}
        variant=${r(this,e,u).call(this)}
        class=${r(this,e,x).call(this,"linked")}
      >
        ${r(this,e,$).call(this)}
      </gds-card-linked>
    `};_=function(){return n(r(this,e,m).call(this,!0),()=>a`
        <gds-flex
          font="detail-book-m"
          align-items="center"
          gap="s"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${n(this.label,()=>a`
                <gds-link href=${i(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};C=function(){return a`
      <gds-card
        padding="0"
        gap="0"
        variant=${r(this,e,u).call(this)}
        class=${r(this,e,x).call(this,"static")}
      >
        ${r(this,e,$).call(this)}
      </gds-card>
    `};G=function(){return n(r(this,e,m).call(this),()=>a`
        <gds-flex font="detail-book-m" align-items="center" gap="s">
          <slot name="footer"></slot>
        </gds-flex>
      `)};$=function(){return a`
      ${n(this.src,()=>a`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${i(this.src)}
              srcset=${i(this.srcset)}
              sizes=${i(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
              loading=${i(this.loading)}
              decoding=${i(this.decoding)}
              alt=${i(this.alt)}
              class="card-media"
            ></gds-img>
          </gds-flex>
        `)}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${n(!this.src,()=>a`<slot name="header"></slot>`)}
        ${n(this.title||this.excerpt,()=>a`
            <gds-flex flex-direction="column" gap="xs">
              ${n(this.title,()=>a`
                  <gds-text tag=${i(this.tag)} font="heading-s">
                    ${this.title}
                  </gds-text>
                `)}
              ${n(this.excerpt,()=>a`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `)}
            </gds-flex>
          `)}
        ${n(this.href,()=>r(this,e,_).call(this),()=>r(this,e,G).call(this))}
      </gds-flex>
    `};o.styles=[z,W];d([c({reflect:!1})],o.prototype,"title",2);d([c({reflect:!1})],o.prototype,"excerpt",2);d([c({reflect:!1})],o.prototype,"label",2);d([c({reflect:!1})],o.prototype,"variant",2);d([c({type:Boolean,reflect:!1})],o.prototype,"outlined",2);d([c({reflect:!1})],o.prototype,"tag",2);d([c({reflect:!1,attribute:"aspect-ratio"})],o.prototype,"ratio",2);o=d([F("gds-card-pattern-01",{dependsOn:[b,w,O,E,P,L]})],o);export{o as G};

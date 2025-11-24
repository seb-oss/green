import{n as d}from"./Reflect-DJ7r0WLU.js";import{e as k}from"./class-map-CXsQwv0r.js";import{o as l}from"./if-defined-CVqwUuaf.js";import{n as i}from"./when-BR7zwNJC.js";import{G as w}from"./card-linked.component-DyCMD0JU.js";import{G as b}from"./card.component-eDIV52nF.js";import{G as P}from"./flex.component-BYRotL8F.js";import{G as F}from"./formatted-date.component-DtHJ7aYU.js";import{I as L}from"./chain-link-Cr5ekPKw.js";import{w as S,G as O}from"./img.component-BFXJrjKp.js";import{G as E}from"./text-Z9s1gHys.js";import{h as e,g as I,G as z}from"./gds-element-DTROifYq.js";import{t as D}from"./tokens.style-CQAfIFlK.js";import{w as T,b as j,d as q}from"./declarative-layout-mixins-C4FFYA_h.js";import{w as B}from"./props-link-q-kPEFpu.js";import{i as M}from"./lit-element-Bx14lxc-.js";const W=M`
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
`;var A=Object.defineProperty,V=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},n=(t,a,h,f)=>{for(var c=f>1?void 0:f?V(a,h):a,p=t.length-1,g;p>=0;p--)(g=t[p])&&(c=(f?g(a,h,c):g(c))||c);return f&&c&&A(a,h,c),c},X=(t,a,h)=>a.has(t)||y("Cannot "+h),H=(t,a,h)=>a.has(t)?y("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,h),o=(t,a,h)=>(X(t,a,"access private method"),h),s,m,u,x,v,_,G,C,$;let r=class extends T(j(q(B(S(z))))){constructor(){super(...arguments),H(this,s),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.tag="h2",this.ratio="landscape",this.category="",this.date="",this.dateFormat="dateTimeLong",this.locale="en-GB"}render(){return i(this.href,()=>o(this,s,v).call(this),()=>o(this,s,G).call(this))}};s=new WeakSet;m=function(t=!1){return t&&this.label||this.querySelector('[slot="footer"]')};u=function(){switch(this.variant){case"neutral-02":return this.outlined?"secondary":"tertiary";case"neutral-01":default:return"primary"}};x=function(t){return k({card:!0,outlined:this.outlined,[`card-${t}`]:!!t,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})};v=function(){return e`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${l(this.href)}
        target=${l(this.target)}
        rel=${l(this.rel)}
        variant=${o(this,s,u).call(this)}
        class=${o(this,s,x).call(this,"linked")}
      >
        ${o(this,s,$).call(this)}
      </gds-card-linked>
    `};_=function(){return i(o(this,s,m).call(this,!0),()=>e`
        <gds-flex
          font="detail-book-m"
          align-items="center"
          gap="s"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${i(this.label,()=>e`
                <gds-link href=${l(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};G=function(){return e`
      <gds-card
        padding="0"
        gap="0"
        variant=${o(this,s,u).call(this)}
        class=${o(this,s,x).call(this,"static")}
      >
        ${o(this,s,$).call(this)}
      </gds-card>
    `};C=function(){return i(o(this,s,m).call(this),()=>e`
        <gds-flex font="detail-book-m" align-items="center" gap="s">
          <slot name="footer"></slot>
        </gds-flex>
      `)};$=function(){return e`
      ${i(this.src,()=>e`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${l(this.src)}
              srcset=${l(this.srcset)}
              sizes=${l(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
              loading=${l(this.loading)}
              decoding=${l(this.decoding)}
              alt=${l(this.alt)}
              class="card-media"
            ></gds-img>
          </gds-flex>
        `)}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${i(!this.src,()=>e`<slot name="header"></slot>`)}
        ${i(this.title||this.excerpt,()=>e`
            <gds-flex flex-direction="column" gap="xs">
              ${i(this.category||this.date,()=>e`
                  <gds-flex gap="s" align-items="center" flex-wrap="wrap">
                    ${i(this.category,()=>e` <gds-text tag="p" font="detail-book-s">
                          ${this.category}
                        </gds-text>`)}
                    ${i(this.date,()=>e`
                        <gds-formatted-date
                          .value=${this.date}
                          .locale=${this.locale}
                          .format=${this.dateFormat}
                          font="detail-book-s"
                          color="neutral-02"
                        ></gds-formatted-date>
                      `)}
                  </gds-flex>
                `)}
              ${i(this.title,()=>e`
                  <gds-text tag=${l(this.tag)} font="heading-s">
                    ${this.title}
                  </gds-text>
                `)}
              ${i(this.excerpt,()=>e`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `)}
            </gds-flex>
          `)}
        ${i(this.href,()=>o(this,s,_).call(this),()=>o(this,s,C).call(this))}
      </gds-flex>
    `};r.styles=[D,W];n([d({reflect:!1})],r.prototype,"title",2);n([d({reflect:!1})],r.prototype,"excerpt",2);n([d({reflect:!1})],r.prototype,"label",2);n([d({reflect:!1})],r.prototype,"variant",2);n([d({type:Boolean,reflect:!1})],r.prototype,"outlined",2);n([d({reflect:!1})],r.prototype,"tag",2);n([d({reflect:!1,attribute:"aspect-ratio"})],r.prototype,"ratio",2);n([d({reflect:!1})],r.prototype,"category",2);n([d({reflect:!1})],r.prototype,"date",2);n([d({reflect:!1,attribute:"date-format"})],r.prototype,"dateFormat",2);n([d({reflect:!1})],r.prototype,"locale",2);r=n([I("gds-card-pattern-01",{dependsOn:[b,w,O,E,P,F,L]})],r);export{r as G};

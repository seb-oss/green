import{i as k,U as b,L as w,K as P,A as F,b as i,o as l,h as e,t as L,n as d,a as S,g as O}from"./iframe-UDVquwlF.js";import{G as E}from"./card-linked.component-DUbAUM9C.js";import{G as I}from"./card.component-DexI8x62.js";import{G as z}from"./flex.component-7XGJimrB.js";import{G as D}from"./formatted-date.component-C0-zhG1f.js";import{I as T}from"./chain-link-DGTZDGPP.js";import{w as j,G as q}from"./img.component-PhhdZ2L1.js";import{G as A}from"./text-C8r-liCZ.js";import{w as B}from"./props-link-Vps5Y3_Z.js";const M=k`
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
`;var W=Object.defineProperty,K=Object.getOwnPropertyDescriptor,y=t=>{throw TypeError(t)},n=(t,r,h,f)=>{for(var c=f>1?void 0:f?K(r,h):r,g=t.length-1,p;g>=0;g--)(p=t[g])&&(c=(f?p(r,h,c):p(c))||c);return f&&c&&W(r,h,c),c},U=(t,r,h)=>r.has(t)||y("Cannot "+h),V=(t,r,h)=>r.has(t)?y("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,h),o=(t,r,h)=>(U(t,r,"access private method"),h),s,m,u,x,v,_,C,G,$;let a=class extends b(w(P(B(j(F))))){constructor(){super(...arguments),V(this,s),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.outlined=!1,this.tag="h2",this.ratio="landscape",this.category="",this.date="",this.dateFormat="dateTimeLong",this.locale="en-GB"}render(){return i(this.href,()=>o(this,s,v).call(this),()=>o(this,s,C).call(this))}};s=new WeakSet;m=function(t=!1){return t&&this.label||this.querySelector('[slot="footer"]')};u=function(){switch(this.variant){case"neutral-02":return this.outlined?"secondary":"tertiary";case"neutral-01":default:return"primary"}};x=function(t){return S({card:!0,outlined:this.outlined,[`card-${t}`]:!!t,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})};v=function(){return e`
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
      `)};C=function(){return e`
      <gds-card
        padding="0"
        gap="0"
        variant=${o(this,s,u).call(this)}
        class=${o(this,s,x).call(this,"static")}
      >
        ${o(this,s,$).call(this)}
      </gds-card>
    `};G=function(){return i(o(this,s,m).call(this),()=>e`
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
        ${i(this.href,()=>o(this,s,_).call(this),()=>o(this,s,G).call(this))}
      </gds-flex>
    `};a.styles=[L,M];n([d({reflect:!1})],a.prototype,"title",2);n([d({reflect:!1})],a.prototype,"excerpt",2);n([d({reflect:!1})],a.prototype,"label",2);n([d({reflect:!1})],a.prototype,"variant",2);n([d({type:Boolean,reflect:!1})],a.prototype,"outlined",2);n([d({reflect:!1})],a.prototype,"tag",2);n([d({reflect:!1,attribute:"aspect-ratio"})],a.prototype,"ratio",2);n([d({reflect:!1})],a.prototype,"category",2);n([d({reflect:!1})],a.prototype,"date",2);n([d({reflect:!1,attribute:"date-format"})],a.prototype,"dateFormat",2);n([d({reflect:!1})],a.prototype,"locale",2);a=n([O("gds-card-pattern-01",{dependsOn:[I,E,q,A,z,D,T]})],a);export{a as G};

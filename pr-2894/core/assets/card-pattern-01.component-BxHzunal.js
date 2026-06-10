import{i as b,Q as w,I as P,H as F,z as S,d as o,v as L,n as d,o as n,h as e,g as I,a as O}from"./iframe-rbfndJAH.js";import{G as q}from"./card-linked.component-BoLFiZBM.js";import{G as z}from"./card.component-fhJtgAlQ.js";import{G as E}from"./flex.component-Cg0RFAWj.js";import{G as M}from"./formatted-date.component-D7GJ2SZZ.js";import{I as D}from"./chain-link-wQGQlDcD.js";import{w as T,G as j}from"./img.component-Cq7MblOb.js";import{G as W}from"./text.component-DDu8O3K0.js";import{w as A}from"./props-link-HPMLn_Pk.js";const B=b`
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
`;var H=Object.defineProperty,Q=Object.getOwnPropertyDescriptor,v=t=>{throw TypeError(t)},l=(t,a,h,f)=>{for(var c=f>1?void 0:f?Q(a,h):a,g=t.length-1,p;g>=0;g--)(p=t[g])&&(c=(f?p(a,h,c):p(c))||c);return f&&c&&H(a,h,c),c},X=(t,a,h)=>a.has(t)||v("Cannot "+h),J=(t,a,h)=>a.has(t)?v("Cannot add the same private member more than once"):a instanceof WeakSet?a.add(t):a.set(t,h),r=(t,a,h)=>(X(t,a,"access private method"),h),s,m,u,x,y,_,C,G,k,$;let i=class extends w(P(F(A(T(S))))){constructor(){super(...arguments),J(this,s),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.tag="h2",this.ratio="landscape",this.category="",this.date="",this.dateFormat="dateTimeLong",this.locale="en-GB"}render(){return o(this.href,()=>r(this,s,_).call(this),()=>r(this,s,G).call(this))}};s=new WeakSet;m=function(t=!1){return t&&this.label||this.querySelector('[slot="footer"]')};u=function(t){return O({card:!0,[`card-${t}`]:!!t,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})};x=function(){return!!this.querySelector('[slot="media"]')};y=function(){return this.src?e`
        <gds-flex padding="xs xs 0 xs">
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
            loading=${n(this.loading)}
            decoding=${n(this.decoding)}
            alt=${n(this.alt)}
            class="card-media"
          ></gds-img>
        </gds-flex>
      `:r(this,s,x).call(this)?e`
        <gds-flex
          padding="xs xs 0 xs"
          flex="1"
          aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
        >
          <slot name="media"></slot>
        </gds-flex>
      `:null};_=function(){return e`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel)}
        variant=${this.variant}
        class=${r(this,s,u).call(this,"linked")}
      >
        ${r(this,s,$).call(this)}
      </gds-card-linked>
    `};C=function(){return o(r(this,s,m).call(this,!0),()=>e`
        <gds-flex
          font="detail-m-book"
          align-items="center"
          gap="s"
          pointer-events="none"
          inert
        >
          <slot name="footer">
            ${o(this.label,()=>e`
                <gds-link href=${n(this.href)}>
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
        variant=${this.variant}
        class=${r(this,s,u).call(this,"static")}
      >
        ${r(this,s,$).call(this)}
      </gds-card>
    `};k=function(){return o(r(this,s,m).call(this),()=>e`
        <gds-flex font="detail-m-book" align-items="center" gap="s">
          <slot name="footer"></slot>
        </gds-flex>
      `)};$=function(){return e`
      ${r(this,s,y).call(this)}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${o(!this.src&&!r(this,s,x).call(this),()=>e`<slot name="header"></slot>`)}
        ${o(this.title||this.excerpt,()=>e`
            <gds-flex flex-direction="column" gap="xs">
              ${o(this.category||this.date,()=>e`
                  <gds-flex gap="s" align-items="center" flex-wrap="wrap">
                    ${o(this.category,()=>e` <gds-text tag="p" font="detail-s-book">
                          ${this.category}
                        </gds-text>`)}
                    ${o(this.date,()=>e`
                        <gds-formatted-date
                          .value=${this.date}
                          .locale=${this.locale}
                          .format=${this.dateFormat}
                          font="detail-s-book"
                          color="neutral-02"
                        ></gds-formatted-date>
                      `)}
                  </gds-flex>
                `)}
              ${o(this.title,()=>e`
                  <gds-text tag=${n(this.tag)} font="heading-s">
                    ${this.title}
                  </gds-text>
                `)}
              ${o(this.excerpt,()=>e`
                  <gds-text tag="p" lines="3" font="body-m-regular">
                    ${this.excerpt}
                  </gds-text>
                `)}
            </gds-flex>
          `)}
        ${o(this.href,()=>r(this,s,C).call(this),()=>r(this,s,k).call(this))}
      </gds-flex>
    `};i.styles=[L,B];l([d({reflect:!1})],i.prototype,"title",2);l([d({reflect:!1})],i.prototype,"excerpt",2);l([d({reflect:!1})],i.prototype,"label",2);l([d({reflect:!1})],i.prototype,"variant",2);l([d({reflect:!1})],i.prototype,"tag",2);l([d({reflect:!1,attribute:"aspect-ratio"})],i.prototype,"ratio",2);l([d({reflect:!1})],i.prototype,"category",2);l([d({reflect:!1})],i.prototype,"date",2);l([d({reflect:!1,attribute:"date-format"})],i.prototype,"dateFormat",2);l([d({reflect:!1})],i.prototype,"locale",2);i=l([I("gds-card-pattern-01",{dependsOn:[z,q,j,W,E,M,D]})],i);export{i as G};

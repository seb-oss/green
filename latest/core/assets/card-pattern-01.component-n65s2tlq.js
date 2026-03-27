import{i as G,Z as k,S as b,Q as w,I as P,d as a,E as F,n as d,o,h as e,g as L,a as S}from"./iframe-CxIvAeSU.js";import{G as E}from"./card-linked.component-C7oFEXUd.js";import{G as I}from"./card.component-tAmKUbkQ.js";import{G as O}from"./flex.component-DlMPiiPD.js";import{G as z}from"./formatted-date.component-fLLHbgYt.js";import{I as D}from"./chain-link-DagEVe6E.js";import{w as T,G as j}from"./img.component-CPpSLxbR.js";import{G as q}from"./text-DNJgMH5h.js";import{w as M}from"./props-link-WV3eoCl0.js";const W=G`
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
`;var A=Object.defineProperty,B=Object.getOwnPropertyDescriptor,$=t=>{throw TypeError(t)},n=(t,s,h,f)=>{for(var c=f>1?void 0:f?B(s,h):s,g=t.length-1,p;g>=0;g--)(p=t[g])&&(c=(f?p(s,h,c):p(c))||c);return f&&c&&A(s,h,c),c},Q=(t,s,h)=>s.has(t)||$("Cannot "+h),X=(t,s,h)=>s.has(t)?$("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,h),l=(t,s,h)=>(Q(t,s,"access private method"),h),i,m,u,v,y,_,C,x;let r=class extends k(b(w(M(T(P))))){constructor(){super(...arguments),X(this,i),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.tag="h2",this.ratio="landscape",this.category="",this.date="",this.dateFormat="dateTimeLong",this.locale="en-GB"}render(){return a(this.href,()=>l(this,i,v).call(this),()=>l(this,i,_).call(this))}};i=new WeakSet;m=function(t=!1){return t&&this.label||this.querySelector('[slot="footer"]')};u=function(t){return S({card:!0,[`card-${t}`]:!!t,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})};v=function(){return e`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${o(this.href)}
        target=${o(this.target)}
        rel=${o(this.rel)}
        variant=${this.variant}
        class=${l(this,i,u).call(this,"linked")}
      >
        ${l(this,i,x).call(this)}
      </gds-card-linked>
    `};y=function(){return a(l(this,i,m).call(this,!0),()=>e`
        <gds-flex
          font="detail-m-book"
          align-items="center"
          gap="s"
          pointer-events="none"
          aria-hidden="true"
          inert
        >
          <slot name="footer">
            ${a(this.label,()=>e`
                <gds-link href=${o(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};_=function(){return e`
      <gds-card
        padding="0"
        gap="0"
        variant=${this.variant}
        class=${l(this,i,u).call(this,"static")}
      >
        ${l(this,i,x).call(this)}
      </gds-card>
    `};C=function(){return a(l(this,i,m).call(this),()=>e`
        <gds-flex font="detail-m-book" align-items="center" gap="s">
          <slot name="footer"></slot>
        </gds-flex>
      `)};x=function(){return e`
      ${a(this.src,()=>e`
          <gds-flex padding="xs xs 0 xs">
            <gds-img
              src=${o(this.src)}
              srcset=${o(this.srcset)}
              sizes=${o(this.sizes)}
              width="100%"
              height="100%"
              object-fit="cover"
              object-position="center"
              border-radius="xs"
              aspect-ratio=${this.ratio==="square"?"1/1":"16/9"}
              loading=${o(this.loading)}
              decoding=${o(this.decoding)}
              alt=${o(this.alt)}
              class="card-media"
            ></gds-img>
          </gds-flex>
        `)}
      <gds-flex flex-direction="column" gap="xl" padding="xl">
        ${a(!this.src,()=>e`<slot name="header"></slot>`)}
        ${a(this.title||this.excerpt,()=>e`
            <gds-flex flex-direction="column" gap="xs">
              ${a(this.category||this.date,()=>e`
                  <gds-flex gap="s" align-items="center" flex-wrap="wrap">
                    ${a(this.category,()=>e` <gds-text tag="p" font="detail-s-book">
                          ${this.category}
                        </gds-text>`)}
                    ${a(this.date,()=>e`
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
              ${a(this.title,()=>e`
                  <gds-text tag=${o(this.tag)} font="heading-s">
                    ${this.title}
                  </gds-text>
                `)}
              ${a(this.excerpt,()=>e`
                  <gds-text tag="p" lines="3" font="body-m-regular">
                    ${this.excerpt}
                  </gds-text>
                `)}
            </gds-flex>
          `)}
        ${a(this.href,()=>l(this,i,y).call(this),()=>l(this,i,C).call(this))}
      </gds-flex>
    `};r.styles=[F,W];n([d({reflect:!1})],r.prototype,"title",2);n([d({reflect:!1})],r.prototype,"excerpt",2);n([d({reflect:!1})],r.prototype,"label",2);n([d({reflect:!1})],r.prototype,"variant",2);n([d({reflect:!1})],r.prototype,"tag",2);n([d({reflect:!1,attribute:"aspect-ratio"})],r.prototype,"ratio",2);n([d({reflect:!1})],r.prototype,"category",2);n([d({reflect:!1})],r.prototype,"date",2);n([d({reflect:!1,attribute:"date-format"})],r.prototype,"dateFormat",2);n([d({reflect:!1})],r.prototype,"locale",2);r=n([L("gds-card-pattern-01",{dependsOn:[I,E,j,q,O,z,D]})],r);export{r as G};

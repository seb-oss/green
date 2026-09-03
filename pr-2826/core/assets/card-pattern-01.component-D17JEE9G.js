import{i as G,V as b,R as P,z as S,J as F,B as L,d as n,y as q,n as h,o,h as s,a as O,e as E}from"./iframe-YlrCpRF9.js";import{G as I}from"./card-linked.component-DGONg_db.js";import{G as M}from"./card.component-BcnLB8SZ.js";import{G as j}from"./flex.component-BnhA4aEG.js";import{G as B}from"./formatted-date.component-Cxvym-Nn.js";import{I as D}from"./chain-link-DQ2arujH.js";import{w as T,G as W}from"./img.component-DtHVYyIP.js";import{G as A}from"./text.component-PWBd9bKF.js";import{w as H}from"./props-link-B7ZOgybc.js";const J=G`
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
`;var R=Object.defineProperty,V=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},l=(e,r,d,f)=>{for(var c=f>1?void 0:f?V(r,d):r,p=e.length-1,x;p>=0;p--)(x=e[p])&&(c=(f?x(r,d,c):x(c))||c);return f&&c&&R(r,d,c),c},X=(e,r,d)=>r.has(e)||v("Cannot "+d),Y=(e,r,d)=>r.has(e)?v("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,d),a=(e,r,d)=>(X(e,r,"access private method"),d),t,m,u,g,$,_,C,k,w,z,y;let i=class extends b(P(S(F(H(T(L)))))){constructor(){super(...arguments),Y(this,t),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.tag="h2",this.ratio="landscape",this.horizontal=!1,this.category="",this.date="",this.dateFormat="dateTimeLong",this.locale="en-GB"}render(){return n(this.href,()=>a(this,t,C).call(this),()=>a(this,t,w).call(this))}};t=new WeakSet;m=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')};u=function(e){return E({card:!0,[`card-${e}`]:!!e,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0})};g=function(){return!!this.querySelector('[slot="media"]')};$=function(){return!!this.querySelector('[slot="header"]')};_=function(){return this.src?s`
        <gds-flex
          padding=${this.horizontal?"xs 0 xs xs; <600px{xs xs 0 xs}":"xs xs 0 xs"}
          flex=${this.horizontal?"0 0 40%; <600px{none}":"none"}
        >
          <gds-img
            src=${o(this.src)}
            srcset=${o(this.srcset)}
            sizes=${o(this.sizes)}
            width="100%"
            height="100%"
            object-fit="cover"
            object-position="center"
            border-radius="xs"
            aspect-ratio=${o(this.horizontal?void 0:this.ratio==="square"?"1/1":"16/9")}
            loading=${o(this.loading)}
            decoding=${o(this.decoding)}
            alt=${o(this.alt)}
            class="card-media"
          ></gds-img>
        </gds-flex>
      `:a(this,t,g).call(this)?s`
        <gds-flex
          padding=${this.horizontal?"xs 0 xs xs; <600px{xs xs 0 xs}":"xs xs 0 xs"}
          flex=${this.horizontal?"0 0 40%; <600px{1}":"1"}
          aspect-ratio=${o(this.horizontal?void 0:this.ratio==="square"?"1/1":"16/9")}
        >
          <slot name="media"></slot>
        </gds-flex>
      `:this.horizontal&&a(this,t,$).call(this)&&!this.src&&!a(this,t,g).call(this)?s`
        <gds-flex
          padding="xs 0 xs xs; <600px{xs xs 0 xs}"
          flex="0 0 40%; <600px{none}"
          align-items="center"
          justify-content="center"
        >
          <slot name="header"></slot>
        </gds-flex>
      `:null};C=function(){return s`
      <gds-card-linked
        padding="0"
        height="100%"
        gap="0"
        href=${o(this.href)}
        target=${o(this.target)}
        rel=${o(this.rel)}
        variant=${this.variant}
        class=${a(this,t,u).call(this,"linked")}
      >
        ${a(this,t,y).call(this)}
      </gds-card-linked>
    `};k=function(){return n(a(this,t,m).call(this,!0),()=>s`
        <gds-flex
          font="detail-m-book"
          align-items="center"
          margin-block="auto 0"
          gap="s"
          pointer-events="none"
          inert
        >
          <slot name="footer">
            ${n(this.label,()=>s`
                <gds-link href=${o(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};w=function(){return s`
      <gds-card
        height="100%"
        padding="0"
        gap="0"
        variant=${this.variant}
        class=${a(this,t,u).call(this,"static")}
      >
        ${a(this,t,y).call(this)}
      </gds-card>
    `};z=function(){return n(a(this,t,m).call(this),()=>s`
        <gds-flex
          font="detail-m-book"
          align-items="center"
          gap="s"
          margin-block="auto 0"
        >
          <slot name="footer"></slot>
        </gds-flex>
      `)};y=function(){return s`
      <gds-flex
        class="card-content-row"
        flex-direction=${this.horizontal?"row; <600px{column}":"column"}
        align-items=${this.horizontal?"stretch":"normal"}
        flex="1"
      >
        ${a(this,t,_).call(this)}
        <gds-flex flex-direction="column" gap="xl" padding="xl" flex="1">
          ${n(!this.src&&!a(this,t,g).call(this)&&!(this.horizontal&&a(this,t,$).call(this)),()=>s`<slot name="header"></slot>`)}
          ${n(this.title||this.excerpt,()=>s`
              <gds-flex flex-direction="column" gap="xs">
                ${n(this.category||this.date,()=>s`
                    <gds-flex gap="s" align-items="center" flex-wrap="wrap">
                      ${n(this.category,()=>s` <gds-text tag="p" font="detail-s-book">
                            ${this.category}
                          </gds-text>`)}
                      ${n(this.date,()=>s`
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
                ${n(this.title,()=>s`
                    <gds-text tag=${o(this.tag)} font="heading-s">
                      ${this.title}
                    </gds-text>
                  `)}
                ${n(this.excerpt,()=>s`
                    <gds-text tag="p" lines="3" font="body-m-regular">
                      ${this.excerpt}
                    </gds-text>
                  `)}
              </gds-flex>
            `)}
          ${n(this.href,()=>a(this,t,k).call(this),()=>a(this,t,z).call(this))}
        </gds-flex>
      </gds-flex>
    `};i.styles=[q,J];l([h({reflect:!1})],i.prototype,"title",2);l([h({reflect:!1})],i.prototype,"excerpt",2);l([h({reflect:!1})],i.prototype,"label",2);l([h({reflect:!1})],i.prototype,"variant",2);l([h({reflect:!1})],i.prototype,"tag",2);l([h({reflect:!1,attribute:"aspect-ratio"})],i.prototype,"ratio",2);l([h({type:Boolean,reflect:!1})],i.prototype,"horizontal",2);l([h({reflect:!1})],i.prototype,"category",2);l([h({reflect:!1})],i.prototype,"date",2);l([h({reflect:!1,attribute:"date-format"})],i.prototype,"dateFormat",2);l([h({reflect:!1})],i.prototype,"locale",2);i=l([O("gds-card-pattern-01",{dependsOn:[M,I,W,A,j,B,D]})],i);export{i as G};

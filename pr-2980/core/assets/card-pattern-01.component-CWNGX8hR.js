import{i as b,Q as P,I as S,H as F,z as L,d as l,v as q,n as d,o as n,h as s,g as I,a as O}from"./iframe--MLfqQYT.js";import{G as z}from"./card-linked.component-D50BOC3i.js";import{G as E}from"./card.component-C-A1qXE2.js";import{G as M}from"./flex.component-BUCAhQ1W.js";import{G as j}from"./formatted-date.component-DLaj1zgr.js";import{I as D}from"./chain-link-BQIwrMO2.js";import{w as T,G as B}from"./img.component-Bktd_NcI.js";import{G as H}from"./text.component-DibKKvYh.js";import{w as W}from"./props-link-DmZsvgbv.js";const A=b`
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

  /* Landscape layout: media left, content right */
  .landscape .card-content-row {
    flex-direction: row;
  }

  .landscape .card-media-wrapper {
    flex: 0 0 40%;
    min-width: 0;
  }

  /* Revert to stacked on small screens */
  @media (max-width: 600px) {
    .landscape .card-content-row {
      flex-direction: column;
    }

    .landscape .card-media-wrapper {
      flex: none;
      padding: var(--gds-sys-space-xs) var(--gds-sys-space-xs) 0
        var(--gds-sys-space-xs);
    }
  }
`;var Q=Object.defineProperty,R=Object.getOwnPropertyDescriptor,v=e=>{throw TypeError(e)},o=(e,i,c,f)=>{for(var h=f>1?void 0:f?R(i,c):i,g=e.length-1,x;g>=0;g--)(x=e[g])&&(h=(f?x(i,c,h):x(h))||h);return f&&h&&Q(i,c,h),h},X=(e,i,c)=>i.has(e)||v("Cannot "+c),J=(e,i,c)=>i.has(e)?v("Cannot add the same private member more than once"):i instanceof WeakSet?i.add(e):i.set(e,c),a=(e,i,c)=>(X(e,i,"access private method"),c),t,m,u,p,$,w,_,C,k,G,y;let r=class extends P(S(F(W(T(L))))){constructor(){super(...arguments),J(this,t),this.title="",this.excerpt="",this.label="",this.variant="neutral-01",this.tag="h2",this.ratio="landscape",this.landscape=!1,this.category="",this.date="",this.dateFormat="dateTimeLong",this.locale="en-GB"}render(){return l(this.href,()=>a(this,t,_).call(this),()=>a(this,t,k).call(this))}};t=new WeakSet;m=function(e=!1){return e&&this.label||this.querySelector('[slot="footer"]')};u=function(e){return O({card:!0,[`card-${e}`]:!!e,[`variant-${this.variant}`]:!0,[`ratio-${this.ratio}`]:!0,landscape:this.landscape})};p=function(){return!!this.querySelector('[slot="media"]')};$=function(){return!!this.querySelector('[slot="header"]')};w=function(){return this.src?s`
        <gds-flex
          class="card-media-wrapper"
          padding=${this.landscape?"xs 0 xs xs":"xs xs 0 xs"}
          flex=${this.landscape?"0 0 40%":"none"}
        >
          <gds-img
            src=${n(this.src)}
            srcset=${n(this.srcset)}
            sizes=${n(this.sizes)}
            width="100%"
            height="100%"
            object-fit="cover"
            object-position="center"
            border-radius="xs"
            aspect-ratio=${n(this.landscape?void 0:this.ratio==="square"?"1/1":"16/9")}
            loading=${n(this.loading)}
            decoding=${n(this.decoding)}
            alt=${n(this.alt)}
            class="card-media"
          ></gds-img>
        </gds-flex>
      `:a(this,t,p).call(this)?s`
        <gds-flex
          class="card-media-wrapper"
          padding=${this.landscape?"xs 0 xs xs":"xs xs 0 xs"}
          flex=${this.landscape?"0 0 40%":"1"}
          aspect-ratio=${n(this.landscape?void 0:this.ratio==="square"?"1/1":"16/9")}
        >
          <slot name="media"></slot>
        </gds-flex>
      `:this.landscape&&a(this,t,$).call(this)&&!this.src&&!a(this,t,p).call(this)?s`
        <gds-flex
          class="card-media-wrapper"
          padding="xs 0 xs xs"
          flex="0 0 40%"
          align-items="center"
          justify-content="center"
        >
          <slot name="header"></slot>
        </gds-flex>
      `:null};_=function(){return s`
      <gds-card-linked
        padding="0"
        gap="0"
        href=${n(this.href)}
        target=${n(this.target)}
        rel=${n(this.rel)}
        variant=${this.variant}
        class=${a(this,t,u).call(this,"linked")}
      >
        ${a(this,t,y).call(this)}
      </gds-card-linked>
    `};C=function(){return l(a(this,t,m).call(this,!0),()=>s`
        <gds-flex
          font="detail-m-book"
          align-items="center"
          gap="s"
          pointer-events="none"
          inert
        >
          <slot name="footer">
            ${l(this.label,()=>s`
                <gds-link href=${n(this.href)}>
                  <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                  ${this.label}
                </gds-link>
              `)}
          </slot>
        </gds-flex>
      `)};k=function(){return s`
      <gds-card
        padding="0"
        gap="0"
        variant=${this.variant}
        class=${a(this,t,u).call(this,"static")}
      >
        ${a(this,t,y).call(this)}
      </gds-card>
    `};G=function(){return l(a(this,t,m).call(this),()=>s`
        <gds-flex font="detail-m-book" align-items="center" gap="s">
          <slot name="footer"></slot>
        </gds-flex>
      `)};y=function(){return s`
      <gds-flex
        class="card-content-row"
        flex-direction=${this.landscape?"row":"column"}
        align-items=${this.landscape?"stretch":"normal"}
        flex="1"
      >
        ${a(this,t,w).call(this)}
        <gds-flex flex-direction="column" gap="xl" padding="xl" flex="1">
          ${l(!this.src&&!a(this,t,p).call(this)&&!(this.landscape&&a(this,t,$).call(this)),()=>s`<slot name="header"></slot>`)}
          ${l(this.title||this.excerpt,()=>s`
              <gds-flex flex-direction="column" gap="xs">
                ${l(this.category||this.date,()=>s`
                    <gds-flex gap="s" align-items="center" flex-wrap="wrap">
                      ${l(this.category,()=>s` <gds-text tag="p" font="detail-s-book">
                            ${this.category}
                          </gds-text>`)}
                      ${l(this.date,()=>s`
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
                ${l(this.title,()=>s`
                    <gds-text tag=${n(this.tag)} font="heading-s">
                      ${this.title}
                    </gds-text>
                  `)}
                ${l(this.excerpt,()=>s`
                    <gds-text tag="p" lines="3" font="body-m-regular">
                      ${this.excerpt}
                    </gds-text>
                  `)}
              </gds-flex>
            `)}
          ${l(this.href,()=>a(this,t,C).call(this),()=>a(this,t,G).call(this))}
        </gds-flex>
      </gds-flex>
    `};r.styles=[q,A];o([d({reflect:!1})],r.prototype,"title",2);o([d({reflect:!1})],r.prototype,"excerpt",2);o([d({reflect:!1})],r.prototype,"label",2);o([d({reflect:!1})],r.prototype,"variant",2);o([d({reflect:!1})],r.prototype,"tag",2);o([d({reflect:!1,attribute:"aspect-ratio"})],r.prototype,"ratio",2);o([d({type:Boolean,reflect:!1})],r.prototype,"landscape",2);o([d({reflect:!1})],r.prototype,"category",2);o([d({reflect:!1})],r.prototype,"date",2);o([d({reflect:!1,attribute:"date-format"})],r.prototype,"dateFormat",2);o([d({reflect:!1})],r.prototype,"locale",2);r=o([I("gds-card-pattern-01",{dependsOn:[E,z,B,H,M,j,D]})],r);export{r as G};

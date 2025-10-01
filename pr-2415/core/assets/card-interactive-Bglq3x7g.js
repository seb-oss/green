import{i as $,E as g}from"./lit-element-Bx14lxc-.js";import{n as a}from"./Reflect-DJ7r0WLU.js";import{o as d}from"./if-defined-CVqwUuaf.js";import{n as G}from"./when-BR7zwNJC.js";import{G as C,g as b,h}from"./gds-element-DTROifYq.js";import{t as w}from"./tokens.style-CJKwYBen.js";import{G as k}from"./card.component-_FybjgYi.js";import{G as E}from"./flex.component-CRnwBFQj.js";import{I}from"./chain-link-CK6_-QUd.js";import{G as O}from"./img.component-DR91qXzr.js";import{G as P}from"./text.component-3_iRXBRQ.js";const S=$`
  :host {
    display: contents;
  }

  a {
    text-decoration: none;
    outline-color: transparent;
    outline-offset: var(--gds-sys-space-4xs);
    outline-style: solid;
    outline-width: var(--gds-sys-space-4xs);
    border-radius: var(--gds-sys-radius-s);
    height: max-content;

    &:focus {
      outline-color: var(--gds-sys-color-content-neutral-01);

      &:not(:focus-visible) {
        outline-color: transparent;
      }
    }
  }

  .card {
    transition: all 264ms;
  }
`;var D=Object.defineProperty,L=Object.getOwnPropertyDescriptor,m=t=>{throw TypeError(t)},o=(t,e,s,l)=>{for(var i=l>1?void 0:l?L(e,s):e,p=t.length-1,c;p>=0;p--)(c=t[p])&&(i=(l?c(e,s,i):c(i))||i);return l&&i&&D(e,s,i),i},u=(t,e,s)=>e.has(t)||m("Cannot "+s),T=(t,e,s)=>(u(t,e,"read from private field"),s?s.call(t):e.get(t)),W=(t,e,s)=>e.has(t)?m("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),f=(t,e,s)=>(u(t,e,"access private method"),s),n,v,x,y,_;let r=class extends C{constructor(){super(...arguments),W(this,n),this.title="",this.plain=!1,this.media="image"}render(){return f(this,n,x).call(this)}};n=new WeakSet;v=function(){return this.target==="_blank"?"noreferrer noopener":void 0};x=function(){return this.href?f(this,n,y).call(this):f(this,n,_).call(this)};y=function(){return h`
      <a
        href=${d(this.href)}
        target=${d(this.target)}
        rel=${d(this.rel||T(this,n,v))}
      >
        <gds-card
          variant=${this.plain?"secondary":"primary; hover:secondary"}
          border=${this.plain?"5xs solid transparent":g}
          class="card"
          padding=${this.src?"xs":g}
          border-radius="m"
        >
          ${G(this.src,()=>h`<gds-img
                src=${d(this.src)}
                width="100%"
                height="100%"
                aspect-ratio=${d(this["aspect-ratio"])}
                border-radius="xs"
                object-fit="cover"
                object-position="center"
              ></gds-img>`)}

          <gds-flex
            flex-direction="column"
            gap="xl"
            padding=${this.plain||!this.src?"0":"m"}
          >
            <gds-flex flex-direction="column" gap="xs">
              <gds-text font="heading-s" color="neutral-01">
                ${this.title}
              </gds-text>
              <gds-text font="body-regular-m" lines="3">
                ${this.excerpt}
              </gds-text>
            </gds-flex>
            <gds-flex gap="xs" align-items="center">
              <gds-icon-chain-link size="l"></gds-icon-chain-link>
              <gds-text font="detail-book-m" color="neutral-01"
                >${this.prompt}</gds-text
              >
            </gds-flex>
          </gds-flex>
        </gds-card>
      </a>
    `};_=function(){return h`<slot></slot>`};r.styles=[w,S];o([a()],r.prototype,"title",2);o([a()],r.prototype,"excerpt",2);o([a()],r.prototype,"prompt",2);o([a({type:Boolean})],r.prototype,"plain",2);o([a()],r.prototype,"media",2);o([a()],r.prototype,"src",2);o([a()],r.prototype,"aspect-ratio",2);o([a()],r.prototype,"href",2);o([a()],r.prototype,"target",2);o([a()],r.prototype,"rel",2);r=o([b("gds-card-interactive",{dependsOn:[k,O,P,E,I]})],r);r.define();

import{n as l}from"./Reflect-DJ7r0WLU.js";import{o as u}from"./if-defined-CVqwUuaf.js";import{h as y,G as C,g as P}from"./gds-element-DTROifYq.js";import{t as G}from"./tokens.style-CyN6927s.js";import{E as b,x as E,i as O}from"./lit-element-Bx14lxc-.js";import{e as L}from"./class-map-CXsQwv0r.js";import{s as I}from"./button.component-BMTHyITM.js";import{w as M,b as N,d as T}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as W}from"./card.component-C4tAIpeI.js";import{G as z}from"./flex.component-My6tsEL-.js";import{I as D}from"./chain-link-DD3U4VL8.js";import{G as S}from"./img.component-9foKhbyn.js";import{G as j}from"./text-DqywFqXI.js";const f=I(E),_=r=>r!==b&&r!==void 0&&r!==null,q=r=>{const s=(t,e,h)=>{if(e.wrapper)return e.wrapper(t);if(e.className||e.wrap){const i={...typeof e.className=="function"?e.className():e.className||{},...e.wrap?{[`part-${h.toLowerCase()}`]:!0}:{}};return f`<div class=${L(i)}>${t}</div>`}return t},o=(t,e="root")=>({config:t,render:()=>{if(t.parts){const i=Object.entries(t.parts).map(([m,n])=>o(n.config,m).render()).filter(_);if(i.length)return s(f`${i}`,t,e)}if(t.slot&&r.querySelector(`[slot="${t.slot}"]`)){const i=f`<slot name="${t.slot}"></slot>`;return s(i,t,e)}if(t.conditions&&t.templates){const i=Object.entries(t.conditions).filter(([m,n])=>n()).map(([m])=>{var n,g;return(g=(n=t.templates)==null?void 0:n[m])==null?void 0:g.call(n)}).filter(_);if(i.length)return s(f`${i}`,t,e)}return b}});return{Part:t=>o(t)}},A=O`
  @layer base, types, layout, motion;
  @layer base {
    .card {
      transition: opacity 280ms;
      padding: var(--gds-sys-space-xs);
      border-radius: var(--gds-sys-radius-s);
      border-width: var(--gds-sys-space-5xs);
      border-style: solid;
      border-color: transparent;

      @starting-style {
        opacity: 0;
      }

      &.rank-neutral {
        background-color: var(--gds-sys-color-l2-neutral-01);
      }

      &.rank-outlined {
        background-color: var(--gds-sys-color-l2-neutral-02);
        border-color: var(--gds-sys-color-border-subtle-01);
      }

      &.rank-plain {
        background-color: var(--gds-sys-color-l2-neutral-02);
      }
    }

    .part-header {
      overflow: hidden;
      height: max-content;
    }

    .part-main {
      display: flex;
      flex-direction: column;
      gap: var(--gds-sys-space-xl);
      padding: var(--gds-sys-space-m);
    }

    .part-article {
      display: flex;
      flex-direction: column;
      gap: var(--gds-sys-space-xs);
    }

    .part-footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--gds-sys-space-s);
    }
  }
`;var F=Object.defineProperty,H=Object.getOwnPropertyDescriptor,k=r=>{throw TypeError(r)},p=(r,s,o,t)=>{for(var e=t>1?void 0:t?H(s,o):s,h=r.length-1,i;h>=0;h--)(i=r[h])&&(e=(t?i(s,o,e):i(e))||e);return t&&e&&F(s,o,e),e},R=(r,s,o)=>s.has(r)||k("Cannot "+o),d=(r,s,o)=>(R(r,s,"read from private field"),o?o.call(r):s.get(r)),v=(r,s,o)=>s.has(r)?k("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,o),c,x,$,w;let a=class extends M(N(T(C))){constructor(){super(...arguments),v(this,x),v(this,c,q(this)),this.rank="neutral",this.title="",this.excerpt="",this.label="",this.media="landscape",v(this,w,{Root:d(this,c).Part({className:()=>d(this,x,$),parts:{Header:d(this,c).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>y`
              <gds-img
                src=${u(this.src)}
                srcset=${u(this.srcset)}
                sizes=${u(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="3xs"
                aspect-ratio=${this.media==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:d(this,c).Part({wrap:!0,parts:{Article:d(this,c).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>y`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>y`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:d(this,c).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label&&!!this.href},templates:{Link:()=>y`
                  <gds-link href=${u(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `}})}})}})})}render(){return d(this,w).Root.render()}};c=new WeakMap;x=new WeakSet;$=function(){return{card:!0,"card-dynamic":!0,[`rank-${this.rank}`]:!0,[`media-${this.media}`]:!0}};w=new WeakMap;a.styles=[G,A];p([l({reflect:!0})],a.prototype,"rank",2);p([l()],a.prototype,"title",2);p([l()],a.prototype,"excerpt",2);p([l()],a.prototype,"label",2);p([l()],a.prototype,"href",2);p([l()],a.prototype,"target",2);p([l()],a.prototype,"rel",2);p([l()],a.prototype,"src",2);p([l()],a.prototype,"srcset",2);p([l()],a.prototype,"sizes",2);p([l({reflect:!1})],a.prototype,"media",2);a=p([P("gds-card-dynamic",{dependsOn:[W,S,j,z,D]})],a);a.define();

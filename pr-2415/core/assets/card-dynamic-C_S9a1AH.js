import{n as p}from"./Reflect-DJ7r0WLU.js";import{o as u}from"./if-defined-CVqwUuaf.js";import{h as y,g as $,G as C}from"./gds-element-DTROifYq.js";import{t as G}from"./tokens.style-CyN6927s.js";import{E as k,x as E,i as L}from"./lit-element-Bx14lxc-.js";import{e as O}from"./class-map-CXsQwv0r.js";import{s as I}from"./button.component-BMTHyITM.js";import{w as M,b as N,d as T}from"./declarative-layout-mixins-DFPXvh_g.js";import{w as W}from"./link-props-CzFiDWCP.js";import{G as z}from"./card.component-C4tAIpeI.js";import{G as D}from"./flex.component-My6tsEL-.js";import{I as S}from"./chain-link-DD3U4VL8.js";import{G as j}from"./img.component-9foKhbyn.js";import{G as q}from"./text-DqywFqXI.js";const f=I(E),_=r=>r!==k&&r!==void 0&&r!==null,A=r=>{const s=(t,e,h)=>{if(e.wrapper)return e.wrapper(t);if(e.className||e.wrap){const o={...typeof e.className=="function"?e.className():e.className||{},...e.wrap?{[`part-${h.toLowerCase()}`]:!0}:{}};return f`<div class=${O(o)}>${t}</div>`}return t},a=(t,e="root")=>({config:t,render:()=>{if(t.parts){const o=Object.entries(t.parts).map(([m,l])=>a(l.config,m).render()).filter(_);if(o.length)return s(f`${o}`,t,e)}if(t.slot&&r.querySelector(`[slot="${t.slot}"]`)){const o=f`<slot name="${t.slot}"></slot>`;return s(o,t,e)}if(t.conditions&&t.templates){const o=Object.entries(t.conditions).filter(([m,l])=>l()).map(([m])=>{var l,g;return(g=(l=t.templates)==null?void 0:l[m])==null?void 0:g.call(l)}).filter(_);if(o.length)return s(f`${o}`,t,e)}return k}});return{Part:t=>a(t)}},F=L`
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
`;var H=Object.defineProperty,R=Object.getOwnPropertyDescriptor,b=r=>{throw TypeError(r)},n=(r,s,a,t)=>{for(var e=t>1?void 0:t?R(s,a):s,h=r.length-1,o;h>=0;h--)(o=r[h])&&(e=(t?o(s,a,e):o(e))||e);return t&&e&&H(s,a,e),e},V=(r,s,a)=>s.has(r)||b("Cannot "+a),d=(r,s,a)=>(V(r,s,"read from private field"),a?a.call(r):s.get(r)),v=(r,s,a)=>s.has(r)?b("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(r):s.set(r,a),c,w,P,x;let i=class extends M(N(T(W(C)))){constructor(){super(...arguments),v(this,w),v(this,c,A(this)),this.rank="neutral",this.title="",this.excerpt="",this.label="",this.media="landscape",v(this,x,{Root:d(this,c).Part({className:()=>d(this,w,P),parts:{Header:d(this,c).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>y`
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
                `}})}})}})})}render(){return d(this,x).Root.render()}};c=new WeakMap;w=new WeakSet;P=function(){return{card:!0,"card-dynamic":!0,[`rank-${this.rank}`]:!0,[`media-${this.media}`]:!0}};x=new WeakMap;i.styles=[G,F];n([p({reflect:!0})],i.prototype,"rank",2);n([p()],i.prototype,"title",2);n([p()],i.prototype,"excerpt",2);n([p()],i.prototype,"label",2);n([p()],i.prototype,"src",2);n([p()],i.prototype,"srcset",2);n([p()],i.prototype,"sizes",2);n([p({reflect:!1})],i.prototype,"media",2);i=n([$("gds-card-dynamic",{dependsOn:[z,j,q,D,S]})],i);i.define();

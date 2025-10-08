import{n as p}from"./Reflect-DJ7r0WLU.js";import{o as w}from"./if-defined-CVqwUuaf.js";import{h as u,G as P,g as G}from"./gds-element-DTROifYq.js";import{t as $}from"./tokens.style-CyN6927s.js";import{E as _,x as E,i as O}from"./lit-element-Bx14lxc-.js";import{e as L}from"./class-map-CXsQwv0r.js";import{s as N}from"./button.component-BMTHyITM.js";import{w as I,b as M,d as T}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as W}from"./card.component-C4tAIpeI.js";import{G as D}from"./flex.component-My6tsEL-.js";import{I as S}from"./chain-link-DD3U4VL8.js";import{G as j}from"./img.component-BvK3KN7H.js";import{G as A}from"./text-DqywFqXI.js";const y=N(E),b=e=>e!==_&&e!==void 0&&e!==null,F=e=>{const s=(t,r,m)=>{if(r.wrapper)return r.wrapper(t);if(r.className||r.wrap){console.log("Classes:",r.className);const o={...typeof r.className=="function"?r.className():r.className||{},...r.wrap?{[`part-${m.toLowerCase()}`]:!0}:{}};return y`<div class=${L(o)}>${t}</div>`}return t},a=(t,r="root")=>({config:t,render:()=>{if(t.parts){const o=Object.entries(t.parts).map(([h,n])=>a(n.config,h).render()).filter(b);if(o.length)return s(y`${o}`,t,r)}if(t.slot&&e.querySelector(`[slot="${t.slot}"]`)){const o=y`<slot name="${t.slot}"></slot>`;return s(o,t,r)}if(t.conditions&&t.templates){const o=Object.entries(t.conditions).filter(([h,n])=>n()).map(([h])=>{var n,g;return(g=(n=t.templates)==null?void 0:n[h])==null?void 0:g.call(n)}).filter(b);if(o.length)return s(y`${o}`,t,r)}return _}});return{Part:t=>a(t)}},H=O`
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
`;var R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,C=e=>{throw TypeError(e)},l=(e,s,a,t)=>{for(var r=t>1?void 0:t?q(s,a):s,m=e.length-1,o;m>=0;m--)(o=e[m])&&(r=(t?o(s,a,r):o(r))||r);return t&&r&&R(s,a,r),r},z=(e,s,a)=>s.has(e)||C("Cannot "+a),d=(e,s,a)=>(z(e,s,"read from private field"),a?a.call(e):s.get(e)),f=(e,s,a)=>s.has(e)?C("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(e):s.set(e,a),c,v,k,x;let i=class extends I(M(T(P))){constructor(){super(...arguments),f(this,v),f(this,c,F(this)),this.rank="neutral",this.title="",this.excerpt="",this.label="",f(this,x,{Root:d(this,c).Part({className:()=>d(this,v,k),parts:{Header:d(this,c).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>u`
              <gds-img
                src=${w(this.src)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="3xs"
              ></gds-img>
            `}}),Main:d(this,c).Part({wrap:!0,parts:{Article:d(this,c).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>u`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>u`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:d(this,c).Part({slot:"footer",wrap:!0,conditions:{Label:()=>!!this.label},templates:{Label:()=>u`
                  <gds-link href=${w(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `}})}})}})})}render(){return d(this,x).Root.render()}};c=new WeakMap;v=new WeakSet;k=function(){return{card:!0,"card-dynamic":!0,[`rank-${this.rank}`]:!0}};x=new WeakMap;i.styles=[$,H];l([p({reflect:!0})],i.prototype,"rank",2);l([p()],i.prototype,"title",2);l([p()],i.prototype,"excerpt",2);l([p()],i.prototype,"label",2);l([p()],i.prototype,"href",2);l([p()],i.prototype,"target",2);l([p()],i.prototype,"rel",2);l([p()],i.prototype,"src",2);i=l([G("gds-card-dynamic",{dependsOn:[W,j,A,D,S]})],i);i.define();

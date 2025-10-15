import{o as h}from"./if-defined-CVqwUuaf.js";import{h as m,g as $,G as x}from"./gds-element-DTROifYq.js";import{w as G,B as y}from"./props-card-NkcoEicP.js";import{t as g}from"./tokens.style-BcVhf7GG.js";import{E as C,x as k}from"./lit-element-Bx14lxc-.js";import{e as E}from"./class-map-CXsQwv0r.js";import{s as L}from"./button.component-cNcNxtec.js";import{w as O,a as I,b as M}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as N,G as T}from"./img.component-CkdFuKSo.js";import{w as b}from"./props-link-Bzbn9FCH.js";import{G as S}from"./card.component-6SGXofUs.js";import{G as W}from"./flex.component-DCtNQdiu.js";import{I as z}from"./chain-link-COH1QB85.js";import{G as D}from"./text-BgS_Y91N.js";const c=L(k),v=r=>r!==C&&r!==void 0&&r!==null,R=r=>{const e=(t,s,n)=>{if(s.wrapper)return s.wrapper(t);if(s.className||s.wrap){const i={...typeof s.className=="function"?s.className():s.className||{},...s.wrap?{[`part-${n.toLowerCase()}`]:!0}:{}};return c`<div class=${E(i)}>${t}</div>`}return t},a=(t,s="root")=>({config:t,render:()=>{if(t.parts){const i=Object.entries(t.parts).map(([d,o])=>a(o.config,d).render()).filter(v);if(i.length)return e(c`${i}`,t,s)}if(t.slot&&r.querySelector(`[slot="${t.slot}"]`)){const i=c`<slot name="${t.slot}"></slot>`;return e(i,t,s)}if(t.conditions&&t.templates){const i=Object.entries(t.conditions).filter(([d,o])=>o()).map(([d])=>{var o,w;return(w=(o=t.templates)==null?void 0:o[d])==null?void 0:w.call(o)}).filter(v);if(i.length)return e(c`${i}`,t,s)}return C}});return{Part:t=>a(t)}};var j=Object.defineProperty,q=Object.getOwnPropertyDescriptor,_=r=>{throw TypeError(r)},A=(r,e,a,t)=>{for(var s=t>1?void 0:t?q(e,a):e,n=r.length-1,i;n>=0;n--)(i=r[n])&&(s=(t?i(e,a,s):i(s))||s);return t&&s&&j(e,a,s),s},B=(r,e,a)=>e.has(r)||_("Cannot "+a),l=(r,e,a)=>(B(r,e,"read from private field"),a?a.call(r):e.get(r)),P=(r,e,a)=>e.has(r)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(r):e.set(r,a),p,f;let u=class extends O(I(M(b(N(G(x)))))){constructor(){super(...arguments),P(this,p,R(this)),P(this,f,{Root:l(this,p).Part({className:()=>this.classes("dynamic"),parts:{Header:l(this,p).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>m`
              <gds-img
                src=${h(this.src)}
                srcset=${h(this.srcset)}
                sizes=${h(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="xs"
                aspect-ratio=${this.aspectRatio==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:l(this,p).Part({wrap:!0,parts:{Article:l(this,p).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>m`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>m`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:l(this,p).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label&&!!this.href},templates:{Link:()=>m`
                  <gds-link href=${h(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `}})}})}})})}render(){return l(this,f).Root.render()}};p=new WeakMap;f=new WeakMap;u.styles=[g,y];u=A([$("gds-card-dynamic",{dependsOn:[S,T,D,W,z]})],u);u.define();

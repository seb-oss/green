import{n as f}from"./Reflect-DJ7r0WLU.js";import{e as x}from"./class-map-CXsQwv0r.js";import{o as G}from"./if-defined-CVqwUuaf.js";import{h as l,G as b,g as O}from"./gds-element-DTROifYq.js";import{t as k}from"./tokens.style-CyN6927s.js";import{E as y,x as E,i as I}from"./lit-element-Bx14lxc-.js";import{s as L}from"./button.component-BMTHyITM.js";import{w as M,b as T,d as W}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as D}from"./card.component-C4tAIpeI.js";import{G as S}from"./flex.component-My6tsEL-.js";import{I as j}from"./chain-link-DD3U4VL8.js";import{G as A}from"./img.component-BvK3KN7H.js";import{G as F}from"./text-DqywFqXI.js";const g=L(E),H=t=>({Part:o=>({render:()=>{const{conditions:e,templates:s,wrapper:n,parts:$}=o;if(e&&s){const p=Object.keys(e).filter(d=>{var u;return(u=e[d])==null?void 0:u.call(e)}).map(d=>{var u;return(u=s[d])==null?void 0:u.call(s)}).filter(Boolean);if(p.length)return n?n(g`${p}`):g`${p}`}if(o.slot&&t.querySelector(`[slot="${o.slot}"]`)){const p=g`<slot name="${o.slot}"></slot>`;return n?n(p):p}if($){const p=Object.values($).map(d=>d.render()).filter(d=>d!==y);if(p.length)return n?n(g`${p}`):g`${p}`}return y}}),Core:o=>{const e=Object.values(o).map(s=>s.render()).filter(s=>s!==y);return e.length?g`${e}`:y}}),R=I`
  @layer base, types, layout, motion;
  @layer base {
  }
`;var q=Object.defineProperty,z=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},c=(t,r,a,o)=>{for(var e=o>1?void 0:o?z(r,a):r,s=t.length-1,n;s>=0;s--)(n=t[s])&&(e=(o?n(r,a,e):n(e))||e);return o&&e&&q(r,a,e),e},B=(t,r,a)=>r.has(t)||C("Cannot "+a),h=(t,r,a)=>(B(t,r,"read from private field"),a?a.call(t):r.get(t)),v=(t,r,a)=>r.has(t)?C("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,a),m,_,P,w;let i=class extends M(T(W(b))){constructor(){super(...arguments),v(this,_),v(this,m,H(this)),this.title="",this.excerpt="",this.label="",v(this,w,{Root:h(this,m).Part({parts:{Header:h(this,m).Part({slot:"header",conditions:{Image:()=>!!this.src},templates:{Image:()=>l`
              <gds-img
                src=${G(this.src)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="xs"
              ></gds-img>
            `},wrapper:t=>l`<header class="header">${t}</header>`}),Main:h(this,m).Part({parts:{Article:h(this,m).Part({conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>l`<gds-text tag="h2">${this.title}</gds-text>`,Excerpt:()=>l`<gds-text lines="3">${this.excerpt}</gds-text>`},wrapper:t=>l`<article class="article">${t}</article>`}),Footer:h(this,m).Part({slot:"footer",conditions:{Label:()=>!!this.label},templates:{Label:()=>l`
                  <gds-link href="#">
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `},wrapper:t=>l`<footer class="footer">${t}</footer>`})},wrapper:t=>l`<main class="main">${t}</main>`})},wrapper:t=>l`<div class=${x(h(this,_,P))}>${t}</div>`})})}render(){return h(this,w).Root.render()}};m=new WeakMap;_=new WeakSet;P=function(){return{card:!0,"card-dynamic":!0}};w=new WeakMap;i.styles=[k,R];c([f()],i.prototype,"title",2);c([f()],i.prototype,"excerpt",2);c([f()],i.prototype,"label",2);c([f()],i.prototype,"href",2);c([f()],i.prototype,"target",2);c([f()],i.prototype,"rel",2);c([f()],i.prototype,"src",2);i=c([O("gds-card-dynamic",{dependsOn:[D,A,F,S,j]})],i);i.define();

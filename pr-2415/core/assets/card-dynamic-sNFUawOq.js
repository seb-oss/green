import{n as c}from"./Reflect-DJ7r0WLU.js";import{o as $}from"./if-defined-CVqwUuaf.js";import{h as u,G as g,g as b}from"./gds-element-DTROifYq.js";import{t as E}from"./tokens.style-CyN6927s.js";import{E as P,x as O,i as k}from"./lit-element-Bx14lxc-.js";import{e as L}from"./class-map-CXsQwv0r.js";import{s as I}from"./button.component-BMTHyITM.js";import{w as M,b as T,d as W}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as D}from"./card.component-C4tAIpeI.js";import{G as S}from"./flex.component-My6tsEL-.js";import{I as N}from"./chain-link-DD3U4VL8.js";import{G as j}from"./img.component-BvK3KN7H.js";import{G as A}from"./text-DqywFqXI.js";const f=I(O),C=e=>e!==P&&e!==void 0&&e!==null,F=e=>{const r=(t,s,h)=>{if(s.wrapper)return s.wrapper(t);if(s.wrap||s.className){const o={...s.wrap?{[`part-${h.toLowerCase()}`]:!0}:{},...s.className||{}};return f`<div class=${L(o)}>${t}</div>`}return t},a=(t,s="root")=>({config:t,render:()=>{if(t.parts){const o=Object.entries(t.parts).map(([m,p])=>a(p.config,m).render()).filter(C);if(o.length)return r(f`${o}`,t,s)}if(t.slot&&e.querySelector(`[slot="${t.slot}"]`)){const o=f`<slot name="${t.slot}"></slot>`;return r(o,t,s)}if(t.conditions&&t.templates){const o=Object.entries(t.conditions).filter(([m,p])=>p()).map(([m])=>{var p,w;return(w=(p=t.templates)==null?void 0:p[m])==null?void 0:w.call(p)}).filter(C);if(o.length)return r(f`${o}`,t,s)}return P}});return{Part:t=>a(t)}},H=k`
  @layer base, types, layout, motion;
  @layer base {
  }
`;var R=Object.defineProperty,q=Object.getOwnPropertyDescriptor,x=e=>{throw TypeError(e)},n=(e,r,a,t)=>{for(var s=t>1?void 0:t?q(r,a):r,h=e.length-1,o;h>=0;h--)(o=e[h])&&(s=(t?o(r,a,s):o(s))||s);return t&&s&&R(r,a,s),s},z=(e,r,a)=>r.has(e)||x("Cannot "+a),l=(e,r,a)=>(z(e,r,"read from private field"),a?a.call(e):r.get(e)),y=(e,r,a)=>r.has(e)?x("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(e):r.set(e,a),d,v,G,_;let i=class extends M(T(W(g))){constructor(){super(...arguments),y(this,v),y(this,d,F(this)),this.title="",this.excerpt="",this.label="",y(this,_,{Root:l(this,d).Part({className:l(this,v,G),parts:{Header:l(this,d).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>u`
              <gds-img
                src=${$(this.src)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="xs"
              ></gds-img>
            `}}),Main:l(this,d).Part({wrap:!0,parts:{Article:l(this,d).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>u`<gds-text tag="h2">${this.title}</gds-text>`,Excerpt:()=>u`<gds-text lines="3">${this.excerpt}</gds-text>`}}),Footer:l(this,d).Part({slot:"footer",wrap:!0,conditions:{Label:()=>!!this.label},templates:{Label:()=>u`
                  <gds-link href="#">
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `}})}})}})})}render(){return l(this,_).Root.render()}};d=new WeakMap;v=new WeakSet;G=function(){return{card:!0,"card-dynamic":!0}};_=new WeakMap;i.styles=[E,H];n([c()],i.prototype,"title",2);n([c()],i.prototype,"excerpt",2);n([c()],i.prototype,"label",2);n([c()],i.prototype,"href",2);n([c()],i.prototype,"target",2);n([c()],i.prototype,"rel",2);n([c()],i.prototype,"src",2);i=n([b("gds-card-dynamic",{dependsOn:[D,j,A,S,N]})],i);i.define();

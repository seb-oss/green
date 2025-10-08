import{x as u,E as g,i as w}from"./lit-element-Bx14lxc-.js";import{n as c}from"./Reflect-DJ7r0WLU.js";import{o as v}from"./if-defined-CVqwUuaf.js";import{h as p,G as P,g as $}from"./gds-element-DTROifYq.js";import{t as G}from"./tokens.style-CyN6927s.js";import{w as b,b as E,d as O}from"./declarative-layout-mixins-DFPXvh_g.js";import{G as k}from"./card.component-C4tAIpeI.js";import{G as I}from"./flex.component-My6tsEL-.js";import{I as L}from"./chain-link-DD3U4VL8.js";import{G as T}from"./img.component-BvK3KN7H.js";import{G as D}from"./text-DqywFqXI.js";const M=t=>({createPart:a=>({render:()=>{const{conditions:e,templates:s,wrapper:n}=a;if(e&&s){const d=Object.keys(e).filter(y=>{var m;return(m=e[y])==null?void 0:m.call(e)}).map(y=>{var m;return(m=s[y])==null?void 0:m.call(s)}).filter(Boolean);if(d.length)return n?n(u`${d}`):d}if(a.slot&&t.querySelector(`[slot="${a.slot}"]`)){const d=u`<slot name="${a.slot}"></slot>`;return n?n(d):d}return g}}),Core:a=>{const e=Object.values(a).map(s=>s.render()).filter(s=>s!==g);return e.length?u`${e}`:g}}),S=w`
  @layer base, types, layout, motion;
  @layer base {
  }
`;var W=Object.defineProperty,j=Object.getOwnPropertyDescriptor,C=t=>{throw TypeError(t)},l=(t,r,o,a)=>{for(var e=a>1?void 0:a?j(r,o):r,s=t.length-1,n;s>=0;s--)(n=t[s])&&(e=(a?n(r,o,e):n(e))||e);return a&&e&&W(r,o,e),e},A=(t,r,o)=>r.has(t)||C("Cannot "+o),f=(t,r,o)=>(A(t,r,"read from private field"),o?o.call(t):r.get(t)),x=(t,r,o)=>r.has(t)?C("Cannot add the same private member more than once"):r instanceof WeakSet?r.add(t):r.set(t,o),h,_;let i=class extends b(E(O(P))){constructor(){super(...arguments),x(this,h,M(this)),this.title="",this.excerpt="",this.label="",x(this,_,{Header:f(this,h).createPart({slot:"header",conditions:{Image:()=>!!this.src},templates:{Image:()=>p`
          <gds-img
            src=${v(this.src)}
            width="100%"
            height="100%"
            object-fit="cover"
            object-position="center"
            border-radius="xs"
          ></gds-img>
        `},wrapper:t=>p`<header class="header">${t}</header>`}),Article:f(this,h).createPart({conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>p`<gds-text tag="h2" font="heading-s">${this.title}</gds-text>`,Excerpt:()=>p`<gds-text font="body-regular-m" lines="3"
            >${this.excerpt}</gds-text
          >`},wrapper:t=>p`
        <article class="article">${t}</article>
      `}),Footer:f(this,h).createPart({slot:"footer",conditions:{Label:()=>!!this.label},templates:{Label:()=>p`
          <footer class="footer" inert>
            <gds-link href="#">
              <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
              ${this.label}
            </gds-link>
          </footer>
        `}})})}render(){const t=f(this,h).Core(f(this,_));return t===g?g:p`
      <a href=${v(this.href)} target=${v(this.target)}>
        ${t}
      </a>
    `}};h=new WeakMap;_=new WeakMap;i.styles=[G,S];l([c()],i.prototype,"title",2);l([c()],i.prototype,"excerpt",2);l([c()],i.prototype,"label",2);l([c()],i.prototype,"href",2);l([c()],i.prototype,"target",2);l([c()],i.prototype,"rel",2);l([c()],i.prototype,"src",2);i=l([$("gds-card-dynamic",{dependsOn:[k,T,D,I,L]})],i);i.define();

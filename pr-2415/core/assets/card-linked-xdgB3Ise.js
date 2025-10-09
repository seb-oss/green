import{n as d}from"./Reflect-DJ7r0WLU.js";import{e as k}from"./class-map-CXsQwv0r.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{h as p,g as v,G as $}from"./gds-element-DTROifYq.js";import{w as P,a as x,B as C,c as G}from"./link-props-D-aQFxBS.js";import{t as y}from"./tokens.style-CyN6927s.js";import{w as L,a as E,b as I}from"./declarative-layout-mixins-DLWGR3wk.js";import{G as O}from"./card.component-Bj1-hO0L.js";import{G as b}from"./flex.component-DFHyXBrb.js";import{I as M}from"./chain-link-DK2clEwB.js";import{G as S}from"./img.component-DpjyG0Un.js";import{G as T}from"./text-DPpDJQjV.js";var W=Object.defineProperty,z=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},h=(t,e,r,l)=>{for(var a=l>1?void 0:l?z(e,r):e,c=t.length-1,m;c>=0;c--)(m=t[c])&&(a=(l?m(e,r,a):m(a))||a);return l&&a&&W(e,r,a),a},A=(t,e,r)=>e.has(t)||w("Cannot "+r),o=(t,e,r)=>(A(t,e,"read from private field"),r?r.call(t):e.get(t)),f=(t,e,r)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),n,g,_,u;let s=class extends L(E(I(P(x($))))){constructor(){super(...arguments),f(this,g),f(this,n,G(this)),this.title="",this.excerpt="",this.label="",this.rank="neutral",this.media="landscape",f(this,u,{Root:o(this,n).Part({parts:{Header:o(this,n).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>p`
              <gds-img
                src=${i(this.src)}
                srcset=${i(this.srcset)}
                sizes=${i(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="3xs"
                aspect-ratio=${this.media==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:o(this,n).Part({wrap:!0,parts:{Article:o(this,n).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>p`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>p`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:o(this,n).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label&&!!this.href},templates:{Link:()=>p`
                  <gds-link href=${i(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `},wrapper:t=>p`<footer class="part-footer" inert>${t}</footer>`})}})},wrapper:t=>p`<a
          href=${i(this.href)}
          target=${i(this.target)}
          rel=${i(this.rel)}
          class=${k(o(this,g,_))}
        >
          ${t}
        </a>`})})}render(){return o(this,u).Root.render()}};n=new WeakMap;g=new WeakSet;_=function(){return{card:!0,"card-linked":!0,[`rank-${this.rank}`]:!0,[`media-${this.media}`]:!0}};u=new WeakMap;s.styles=[y,C];h([d()],s.prototype,"title",2);h([d()],s.prototype,"excerpt",2);h([d()],s.prototype,"label",2);h([d({reflect:!0})],s.prototype,"rank",2);h([d({reflect:!1})],s.prototype,"media",2);s=h([v("gds-card-linked",{dependsOn:[O,S,T,b,M]})],s);s.define();

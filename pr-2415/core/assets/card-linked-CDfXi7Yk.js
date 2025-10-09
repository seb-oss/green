import{n as h}from"./Reflect-DJ7r0WLU.js";import{e as k}from"./class-map-CXsQwv0r.js";import{o as n}from"./if-defined-CVqwUuaf.js";import{h as p,g as v,G as P}from"./gds-element-DTROifYq.js";import{w as $,a as x,B as C,c as G}from"./link-props-D-aQFxBS.js";import{t as y}from"./tokens.style-CyN6927s.js";import{w as L,a as E,b as I}from"./declarative-layout-mixins-DLWGR3wk.js";import{G as O}from"./card.component-Bj1-hO0L.js";import{G as b}from"./flex.component-DFHyXBrb.js";import{I as M}from"./chain-link-DK2clEwB.js";import{G as S}from"./img.component-DpjyG0Un.js";import{G as T}from"./text-DPpDJQjV.js";var W=Object.defineProperty,z=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},d=(t,e,r,l)=>{for(var a=l>1?void 0:l?z(e,r):e,c=t.length-1,m;c>=0;c--)(m=t[c])&&(a=(l?m(e,r,a):m(a))||a);return l&&a&&W(e,r,a),a},A=(t,e,r)=>e.has(t)||w("Cannot "+r),i=(t,e,r)=>(A(t,e,"read from private field"),r?r.call(t):e.get(t)),f=(t,e,r)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),o,g,_,u;let s=class extends L(E(I($(x(P))))){constructor(){super(...arguments),f(this,g),f(this,o,G(this)),this.title="",this.excerpt="",this.label="",this.rank="neutral",this.media="landscape",f(this,u,{Root:i(this,o).Part({parts:{Header:i(this,o).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>p`
              <gds-img
                src=${n(this.src)}
                srcset=${n(this.srcset)}
                sizes=${n(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="3xs"
                aspect-ratio=${this.media==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:i(this,o).Part({wrap:!0,parts:{Article:i(this,o).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>p`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>p`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:i(this,o).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label},templates:{Link:()=>p`
                  <gds-link inert>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `},wrapper:t=>p`<footer class="part-footer" inert>${t}</footer>`})}})},wrapper:t=>p`<a
          href=${n(this.href)}
          target=${n(this.target)}
          rel=${n(this.rel)}
          class=${k(i(this,g,_))}
        >
          ${t}
        </a>`})})}render(){return i(this,u).Root.render()}};o=new WeakMap;g=new WeakSet;_=function(){return{card:!0,"card-linked":!0,[`rank-${this.rank}`]:!0,[`media-${this.media}`]:!0}};u=new WeakMap;s.styles=[y,C];d([h()],s.prototype,"title",2);d([h()],s.prototype,"excerpt",2);d([h()],s.prototype,"label",2);d([h({reflect:!0})],s.prototype,"rank",2);d([h({reflect:!1})],s.prototype,"media",2);s=d([v("gds-card-linked",{dependsOn:[O,S,T,b,M]})],s);s.define();

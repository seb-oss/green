import{n as p}from"./Reflect-DJ7r0WLU.js";import{o as h}from"./if-defined-CVqwUuaf.js";import{h as c,g as v,G as y}from"./gds-element-DTROifYq.js";import{w as P,a as x,B as k,c as C}from"./link-props-D-aQFxBS.js";import{t as G}from"./tokens.style-CyN6927s.js";import{w as $,a as E,b as I}from"./declarative-layout-mixins-DLWGR3wk.js";import{G as L}from"./card.component-Bj1-hO0L.js";import{G as O}from"./flex.component-DFHyXBrb.js";import{I as b}from"./chain-link-DK2clEwB.js";import{G as D}from"./img.component-DpjyG0Un.js";import{G as M}from"./text-DPpDJQjV.js";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,_=t=>{throw TypeError(t)},n=(t,e,s,d)=>{for(var a=d>1?void 0:d?T(e,s):e,l=t.length-1,m;l>=0;l--)(m=t[l])&&(a=(d?m(e,s,a):m(a))||a);return d&&a&&S(e,s,a),a},W=(t,e,s)=>e.has(t)||_("Cannot "+s),i=(t,e,s)=>(W(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>e.has(t)?_("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),o,g,w,u;let r=class extends $(E(I(P(x(y))))){constructor(){super(...arguments),f(this,g),f(this,o,C(this)),this.title="",this.excerpt="",this.label="",this.rank="neutral",this.media="landscape",f(this,u,{Root:i(this,o).Part({className:()=>i(this,g,w),parts:{Header:i(this,o).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>c`
              <gds-img
                src=${h(this.src)}
                srcset=${h(this.srcset)}
                sizes=${h(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="3xs"
                aspect-ratio=${this.media==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:i(this,o).Part({wrap:!0,parts:{Article:i(this,o).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>c`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>c`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:i(this,o).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label&&!!this.href},templates:{Link:()=>c`
                  <gds-link href=${h(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `}})}})}})})}render(){return i(this,u).Root.render()}};o=new WeakMap;g=new WeakSet;w=function(){return{card:!0,"card-dynamic":!0,[`rank-${this.rank}`]:!0,[`media-${this.media}`]:!0}};u=new WeakMap;r.styles=[G,k];n([p()],r.prototype,"title",2);n([p()],r.prototype,"excerpt",2);n([p()],r.prototype,"label",2);n([p({reflect:!0})],r.prototype,"rank",2);n([p({reflect:!1})],r.prototype,"media",2);r=n([v("gds-card-dynamic",{dependsOn:[L,D,M,O,b]})],r);r.define();

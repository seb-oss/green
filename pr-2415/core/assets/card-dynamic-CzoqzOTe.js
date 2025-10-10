import{o as n}from"./if-defined-CVqwUuaf.js";import{h,g,G as w}from"./gds-element-DTROifYq.js";import{w as v,B as P,c as _}from"./props-card-CK6dJNcy.js";import{t as u}from"./tokens.style-CyN6927s.js";import{w as C,a as x,b as G}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as y,G as k}from"./img.component-BmDz7Qit.js";import{w as $}from"./link-CQz4l2c8.js";import{G as E}from"./card.component-Bj1-hO0L.js";import{G as I}from"./flex.component-DFHyXBrb.js";import{I as L}from"./chain-link-DK2clEwB.js";import{G as O}from"./text-DPpDJQjV.js";var M=Object.defineProperty,T=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},z=(t,s,e,o)=>{for(var r=o>1?void 0:o?T(s,e):s,p=t.length-1,c;p>=0;p--)(c=t[p])&&(r=(o?c(s,e,r):c(r))||r);return o&&r&&M(s,e,r),r},D=(t,s,e)=>s.has(t)||f("Cannot "+e),i=(t,s,e)=>(D(t,s,"read from private field"),e?e.call(t):s.get(t)),l=(t,s,e)=>s.has(t)?f("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),a,m;let d=class extends C(x(G($(y(v(w)))))){constructor(){super(...arguments),l(this,a,_(this)),l(this,m,{Root:i(this,a).Part({className:()=>this.classes("dynamic"),parts:{Header:i(this,a).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>h`
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
            `}}),Main:i(this,a).Part({wrap:!0,parts:{Article:i(this,a).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>h`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>h`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:i(this,a).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label&&!!this.href},templates:{Link:()=>h`
                  <gds-link href=${n(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `}})}})}})})}render(){return i(this,m).Root.render()}};a=new WeakMap;m=new WeakMap;d.styles=[u,P];d=z([g("gds-card-dynamic",{dependsOn:[E,k,O,I,L]})],d);d.define();

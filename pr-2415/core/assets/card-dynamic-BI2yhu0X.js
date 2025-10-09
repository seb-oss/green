import{o as n}from"./if-defined-CVqwUuaf.js";import{h,g,G as w}from"./gds-element-DTROifYq.js";import{w as v,a as P,b as _,B as u,c as C}from"./props-link-_3tzf0vf.js";import{t as x}from"./tokens.style-CyN6927s.js";import{w as G,a as y,b as k}from"./declarative-layout-mixins-DLWGR3wk.js";import{G as $}from"./card.component-Bj1-hO0L.js";import{G as E}from"./flex.component-DFHyXBrb.js";import{I}from"./chain-link-DK2clEwB.js";import{G as L}from"./img.component-DpjyG0Un.js";import{G as O}from"./text-DPpDJQjV.js";var M=Object.defineProperty,T=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},b=(t,s,e,o)=>{for(var r=o>1?void 0:o?T(s,e):s,p=t.length-1,c;p>=0;p--)(c=t[p])&&(r=(o?c(s,e,r):c(r))||r);return o&&r&&M(s,e,r),r},z=(t,s,e)=>s.has(t)||f("Cannot "+e),i=(t,s,e)=>(z(t,s,"read from private field"),e?e.call(t):s.get(t)),m=(t,s,e)=>s.has(t)?f("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),a,l;let d=class extends G(y(k(v(P(_(w)))))){constructor(){super(...arguments),m(this,a,C(this)),m(this,l,{Root:i(this,a).Part({className:()=>this.classes("dynamic"),parts:{Header:i(this,a).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>h`
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
                `}})}})}})})}render(){return i(this,l).Root.render()}};a=new WeakMap;l=new WeakMap;d.styles=[x,u];d=b([g("gds-card-dynamic",{dependsOn:[$,L,O,E,I]})],d);d.define();

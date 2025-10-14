import{e as g}from"./class-map-CXsQwv0r.js";import{o as a}from"./if-defined-CVqwUuaf.js";import{h as o,g as w,G as u}from"./gds-element-DTROifYq.js";import{w as P,B as v,c as _}from"./props-card-DATtUvuf.js";import{t as x}from"./tokens.style-CyN6927s.js";import{w as $,a as C,b as G}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as k,G as b}from"./img.component-BmDz7Qit.js";import{w as y}from"./link-CQz4l2c8.js";import{G as E}from"./flex.component-DFHyXBrb.js";import{I}from"./chain-link-DK2clEwB.js";import{G as L}from"./text-B8Tp-ee7.js";var O=Object.defineProperty,M=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},T=(t,e,r,p)=>{for(var s=p>1?void 0:p?M(e,r):e,d=t.length-1,l;d>=0;d--)(l=t[d])&&(s=(p?l(e,r,s):l(s))||s);return p&&s&&O(e,r,s),s},z=(t,e,r)=>e.has(t)||f("Cannot "+r),n=(t,e,r)=>(z(t,e,"read from private field"),r?r.call(t):e.get(t)),m=(t,e,r)=>e.has(t)?f("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,r),i,c;let h=class extends $(C(G(y(k(P(u)))))){constructor(){super(...arguments),m(this,i,_(this)),m(this,c,{Root:n(this,i).Part({parts:{Header:n(this,i).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>o`
              <gds-img
                src=${a(this.src)}
                srcset=${a(this.srcset)}
                sizes=${a(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="xs"
                aspect-ratio=${this.aspectRatio==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:n(this,i).Part({wrap:!0,parts:{Article:n(this,i).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>o`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>o`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:n(this,i).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label},templates:{Link:()=>o`
                  <gds-link tabindex="-1" aria-hidden="true" inert>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `},wrapper:t=>o`<footer
                  class="part-footer"
                  tabindex="-1"
                  aria-hidden="true"
                  inert
                >
                  ${t}
                </footer>`})}})},wrapper:t=>o`<a
          href=${a(this.href)}
          target=${a(this.target)}
          rel=${a(this.rel)}
          class=${g(this.classes("linked"))}
          tabindex="0"
          aria-label=${a(this.title||this.label)}
        >
          ${t}
        </a>`})})}render(){return n(this,c).Root.render()}};i=new WeakMap;c=new WeakMap;h.styles=[x,v];h=T([w("gds-card-pattern-01",{dependsOn:[b,L,E,I]})],h);h.define();

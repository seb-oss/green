import{e as g}from"./class-map-CXsQwv0r.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{h as o,g as w,G as v}from"./gds-element-DTROifYq.js";import{w as P,B as _,c as u}from"./props-card-ggrEzvXF.js";import{t as C}from"./tokens.style-CyN6927s.js";import{w as $,a as x,b as G}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as k,G as y}from"./img.component-BmDz7Qit.js";import{w as E}from"./link-CQz4l2c8.js";import{G as I}from"./card.component-Bj1-hO0L.js";import{G as L}from"./flex.component-DFHyXBrb.js";import{I as O}from"./chain-link-DK2clEwB.js";import{G as M}from"./text-DPpDJQjV.js";var T=Object.defineProperty,z=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},S=(t,s,r,p)=>{for(var e=p>1?void 0:p?z(s,r):s,h=t.length-1,l;h>=0;h--)(l=t[h])&&(e=(p?l(s,r,e):l(e))||e);return p&&e&&T(s,r,e),e},W=(t,s,r)=>s.has(t)||f("Cannot "+r),n=(t,s,r)=>(W(t,s,"read from private field"),r?r.call(t):s.get(t)),m=(t,s,r)=>s.has(t)?f("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,r),a,c;let d=class extends $(x(G(E(k(P(v)))))){constructor(){super(...arguments),m(this,a,u(this)),m(this,c,{Root:n(this,a).Part({parts:{Header:n(this,a).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>o`
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
            `}}),Main:n(this,a).Part({wrap:!0,parts:{Article:n(this,a).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>o`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>o`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:n(this,a).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label},templates:{Link:()=>o`
                  <gds-link inert>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `},wrapper:t=>o`<footer class="part-footer" inert>${t}</footer>`})}})},wrapper:t=>o`<a
          href=${i(this.href)}
          target=${i(this.target)}
          rel=${i(this.rel)}
          class=${g(this.classes("linked"))}
        >
          ${t}
        </a>`})})}render(){return n(this,c).Root.render()}};a=new WeakMap;c=new WeakMap;d.styles=[C,_];d=S([w("gds-card-linked",{dependsOn:[I,y,M,L,O]})],d);d.define();

import{e as g}from"./class-map-CXsQwv0r.js";import{o as i}from"./if-defined-CVqwUuaf.js";import{h as o,g as w,G as v}from"./gds-element-DTROifYq.js";import{w as P,a as _,b as u,B as C,c as $}from"./props-link-_3tzf0vf.js";import{t as x}from"./tokens.style-CyN6927s.js";import{w as G,a as k,b as y}from"./declarative-layout-mixins-DLWGR3wk.js";import{G as E}from"./card.component-Bj1-hO0L.js";import{G as I}from"./flex.component-DFHyXBrb.js";import{I as L}from"./chain-link-DK2clEwB.js";import{G as O}from"./img.component-DpjyG0Un.js";import{G as M}from"./text-DPpDJQjV.js";var T=Object.defineProperty,b=Object.getOwnPropertyDescriptor,f=t=>{throw TypeError(t)},z=(t,s,e,p)=>{for(var r=p>1?void 0:p?b(s,e):s,h=t.length-1,l;h>=0;h--)(l=t[h])&&(r=(p?l(s,e,r):l(r))||r);return p&&r&&T(s,e,r),r},S=(t,s,e)=>s.has(t)||f("Cannot "+e),n=(t,s,e)=>(S(t,s,"read from private field"),e?e.call(t):s.get(t)),m=(t,s,e)=>s.has(t)?f("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,e),a,c;let d=class extends G(k(y(P(_(u(v)))))){constructor(){super(...arguments),m(this,a,$(this)),m(this,c,{Root:n(this,a).Part({parts:{Header:n(this,a).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>o`
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
        </a>`})})}render(){return n(this,c).Root.render()}};a=new WeakMap;c=new WeakMap;d.styles=[x,C];d=z([w("gds-card-linked",{dependsOn:[E,O,M,I,L]})],d);d.define();

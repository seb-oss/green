import{e as $}from"./class-map-CXsQwv0r.js";import{o as r}from"./if-defined-CVqwUuaf.js";import{h,g as u,G as _}from"./gds-element-DTROifYq.js";import{w as P,B as v,c as x}from"./props-card-CYs4JhgO.js";import{t as C}from"./tokens.style-BcVhf7GG.js";import{w as G,a as k,b}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as y,G as E}from"./img.component-CkdFuKSo.js";import{w as I}from"./props-link-Bzbn9FCH.js";import{G as L}from"./flex.component-DCtNQdiu.js";import{I as O}from"./chain-link-COH1QB85.js";import{G as M}from"./text-BgS_Y91N.js";var S=Object.defineProperty,T=Object.getOwnPropertyDescriptor,w=t=>{throw TypeError(t)},W=(t,e,s,n)=>{for(var i=n>1?void 0:n?T(e,s):e,l=t.length-1,c;l>=0;l--)(c=t[l])&&(i=(n?c(e,s,i):c(i))||i);return n&&i&&S(e,s,i),i},z=(t,e,s)=>e.has(t)||w("Cannot "+s),a=(t,e,s)=>(z(t,e,"read from private field"),s?s.call(t):e.get(t)),f=(t,e,s)=>e.has(t)?w("Cannot add the same private member more than once"):e instanceof WeakSet?e.add(t):e.set(t,s),o,d,m,g;let p=class extends G(k(b(I(y(P(_)))))){constructor(){super(...arguments),f(this,d),f(this,o,x(this)),f(this,g,{Root:a(this,o).Part({className:()=>this.href?{}:a(this,d,m),parts:{Header:a(this,o).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>h`
              <gds-img
                src=${r(this.src)}
                srcset=${r(this.srcset)}
                sizes=${r(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="xs"
                aspect-ratio=${this.aspectRatio==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:a(this,o).Part({wrap:!0,parts:{Article:a(this,o).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>h`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>h`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:a(this,o).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.href},templates:{Link:()=>h`
                  <gds-link
                    href=${r(this.href)}
                    tabindex=${this.href?"-1":"0"}
                    aria-hidden=${this.href?"true":"false"}
                    ?inert=${this.href}
                  >
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `},wrapper:t=>h`<footer
                  class="part-footer"
                  tabindex=${this.href?"-1":"0"}
                  aria-hidden=${this.href?"true":"false"}
                  ?inert=${this.href}
                >
                  ${t}
                </footer>`})}})},wrapper:this.href?t=>h`
            <a
              href=${r(this.href)}
              target=${r(this.target)}
              rel=${r(this.rel)}
              class=${$(a(this,d,m))}
              tabindex="0"
              aria-label=${r(this.title||this.label)}
            >
              ${t}
            </a>
          `:void 0})})}render(){return a(this,g).Root.render()}};o=new WeakMap;d=new WeakSet;m=function(){return{...this.classes("pattern-01"),"card-linked":!!this.href}};g=new WeakMap;p.styles=[C,v];p=W([u("gds-card-pattern-01",{dependsOn:[E,M,L,O]})],p);p.define();

import{o as c}from"./if-defined-CVqwUuaf.js";import{h as m,g as P,G as C}from"./gds-element-DTROifYq.js";import{i as _,E as y,x as b}from"./lit-element-Bx14lxc-.js";import{t as $}from"./tokens.style-BcVhf7GG.js";import{e as k}from"./class-map-CXsQwv0r.js";import{s as G}from"./button.component-cNcNxtec.js";import{w as E,a as L,b as O}from"./declarative-layout-mixins-DLWGR3wk.js";import{w as I}from"./props-card-Blwly523.js";import{w as M,G as N}from"./img.component-CkdFuKSo.js";import{w as T}from"./props-link-Bzbn9FCH.js";import{G as z}from"./card.component-6SGXofUs.js";import{G as S}from"./flex.component-DCtNQdiu.js";import{I as W}from"./chain-link-COH1QB85.js";import{G as D}from"./text-BgS_Y91N.js";const R=_`
  @layer base, types, layout, motion;
  @layer base {
    * {
      box-sizing: border-box;
    }

    :host {
      display: inline-block;
    }

    @layer motion {
      @media (prefers-reduced-motion: reduce) {
        .card {
          transition: none;
        }
      }
    }

    .card {
      &.appearance-neutral {
        background-color: var(--gds-sys-color-l2-neutral-01);
      }

      &.appearance-outlined {
        background-color: var(--gds-sys-color-l2-neutral-02);
        border-color: var(--gds-sys-color-border-subtle-01);
      }

      &.appearance-plain {
        background-color: var(--gds-sys-color-l2-neutral-02);
      }

      &.card-linked {
        .part-footer {
          pointer-events: none;
          user-select: none;
        }
      }
    }

    .part-header {
      overflow: hidden;
      height: max-content;
    }

    .part-main {
      display: flex;
      flex-direction: column;
      gap: var(--gds-sys-space-xl);
      padding: var(--gds-sys-space-m);
    }

    .part-article {
      display: flex;
      flex-direction: column;
      gap: var(--gds-sys-space-xs);
    }

    .part-footer {
      display: flex;
      flex-direction: row;
      align-items: center;
      gap: var(--gds-sys-space-s);
    }
  }
`,h=G(b),g=t=>t!==y&&t!==void 0&&t!==null,j=t=>{const s=(r,e,l)=>{if(e.wrapper)return e.wrapper(r);if(e.className||e.wrap){const o={...typeof e.className=="function"?e.className():e.className||{},...e.wrap?{[`part-${l.toLowerCase()}`]:!0}:{}};return h`<div class=${k(o)}>${r}</div>`}return r},a=(r,e="root")=>({config:r,render:()=>{if(r.parts){const o=Object.entries(r.parts).map(([d,i])=>a(i.config,d).render()).filter(g);if(o.length)return s(h`${o}`,r,e)}if(r.slot&&t.querySelector(`[slot="${r.slot}"]`)){const o=h`<slot name="${r.slot}"></slot>`;return s(o,r,e)}if(r.conditions&&r.templates){const o=Object.entries(r.conditions).filter(([d,i])=>i()).map(([d])=>{var i,f;return(f=(i=r.templates)==null?void 0:i[d])==null?void 0:f.call(i)}).filter(g);if(o.length)return s(h`${o}`,r,e)}return y}});return{Part:r=>a(r)}};var q=Object.defineProperty,A=Object.getOwnPropertyDescriptor,x=t=>{throw TypeError(t)},F=(t,s,a,r)=>{for(var e=r>1?void 0:r?A(s,a):s,l=t.length-1,o;l>=0;l--)(o=t[l])&&(e=(r?o(s,a,e):o(e))||e);return r&&e&&q(s,a,e),e},H=(t,s,a)=>s.has(t)||x("Cannot "+a),p=(t,s,a)=>(H(t,s,"read from private field"),a?a.call(t):s.get(t)),w=(t,s,a)=>s.has(t)?x("Cannot add the same private member more than once"):s instanceof WeakSet?s.add(t):s.set(t,a),n,v;let u=class extends E(L(O(T(M(I(C)))))){constructor(){super(...arguments),w(this,n,j(this)),w(this,v,{Root:p(this,n).Part({className:()=>this.classes("dynamic"),parts:{Header:p(this,n).Part({slot:"header",wrap:!0,conditions:{Image:()=>!!this.src},templates:{Image:()=>m`
              <gds-img
                src=${c(this.src)}
                srcset=${c(this.srcset)}
                sizes=${c(this.sizes)}
                width="100%"
                height="100%"
                object-fit="cover"
                object-position="center"
                border-radius="xs"
                aspect-ratio=${this.aspectRatio==="square"?"1/1":"16/9"}
              ></gds-img>
            `}}),Main:p(this,n).Part({wrap:!0,parts:{Article:p(this,n).Part({wrap:!0,conditions:{Title:()=>!!this.title,Excerpt:()=>!!this.excerpt},templates:{Title:()=>m`
                  <gds-text tag="h2" font="heading-s"> ${this.title} </gds-text>
                `,Excerpt:()=>m`
                  <gds-text tag="p" lines="3" font="body-regular-m">
                    ${this.excerpt}
                  </gds-text>
                `}}),Footer:p(this,n).Part({slot:"footer",wrap:!0,conditions:{Link:()=>!!this.label&&!!this.href},templates:{Link:()=>m`
                  <gds-link href=${c(this.href)}>
                    <gds-icon-chain-link slot="lead"></gds-icon-chain-link>
                    ${this.label}
                  </gds-link>
                `}})}})}})})}render(){return p(this,v).Root.render()}};n=new WeakMap;v=new WeakMap;u.styles=[$,R];u=F([P("gds-card-dynamic",{dependsOn:[z,N,D,S,W]})],u);u.define();

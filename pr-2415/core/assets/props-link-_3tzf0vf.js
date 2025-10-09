import{i as g,E as m,x as h}from"./lit-element-Bx14lxc-.js";import{e as b}from"./class-map-CXsQwv0r.js";import{s as x}from"./button.component-BCsZFCXC.js";import{n}from"./Reflect-DJ7r0WLU.js";const L=g`
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
      color: inherit;
      display: flex;
      flex-direction: column;
      transition-property: all;
      transition-duration: var(--gds-sys-motion-duration-fastest);
      transition-timing-function: var(--gds-sys-motion-easing-ease-in);
      padding: var(--gds-sys-space-xs);
      border-radius: var(--gds-sys-radius-s);
      border-width: var(--gds-sys-space-5xs);
      border-style: solid;
      border-color: transparent;

      @starting-style {
        opacity: 0;
      }

      &.rank-neutral {
        background-color: var(--gds-sys-color-l2-neutral-01);
      }

      &.rank-outlined {
        background-color: var(--gds-sys-color-l2-neutral-02);
        border-color: var(--gds-sys-color-border-subtle-01);
      }

      &.rank-plain {
        background-color: var(--gds-sys-color-l2-neutral-02);
      }

      &.card-linked {
        text-decoration: none;
        cursor: pointer;
        outline: solid var(--gds-sys-space-4xs) transparent;
        outline-offset: var(--gds-sys-space-4xs);

        &:focus {
          outline-color: var(--gds-sys-color-content-neutral-01);
          outline-offset: var(--gds-sys-space-3xs);

          &:not(:focus-visible) {
            outline-color: transparent;
          }
        }

        @media (pointer: fine) {
          &:hover {
            background-color: color-mix(
              in srgb,
              var(--gds-sys-color-l2-neutral-01),
              var(--gds-sys-color-state-neutral-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-neutral-01),
            var(--gds-sys-color-state-neutral-04)
          );
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
`,u=x(h),f=s=>s!==m&&s!==void 0&&s!==null,M=s=>{const r=(t,e,l)=>{if(e.wrapper)return e.wrapper(t);if(e.className||e.wrap){const o={...typeof e.className=="function"?e.className():e.className||{},...e.wrap?{[`part-${l.toLowerCase()}`]:!0}:{}};return u`<div class=${b(o)}>${t}</div>`}return t},a=(t,e="root")=>({config:t,render:()=>{if(t.parts){const o=Object.entries(t.parts).map(([c,i])=>a(i.config,c).render()).filter(f);if(o.length)return r(u`${o}`,t,e)}if(t.slot&&s.querySelector(`[slot="${t.slot}"]`)){const o=u`<slot name="${t.slot}"></slot>`;return r(o,t,e)}if(t.conditions&&t.templates){const o=Object.entries(t.conditions).filter(([c,i])=>i()).map(([c])=>{var i,v;return(v=(i=t.templates)==null?void 0:i[c])==null?void 0:v.call(i)}).filter(f);if(o.length)return r(u`${o}`,t,e)}return m}});return{Part:t=>a(t)}};var _=Object.defineProperty,d=(s,r,a,t)=>{for(var e=void 0,l=s.length-1,o;l>=0;l--)(o=s[l])&&(e=o(r,a,e)||e);return e&&_(r,a,e),e};function N(s){class r extends s{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.rank="neutral",this.media="landscape"}classes(t){return{card:!0,[`card-${t||"base"}`]:!!t,[`rank-${this.rank}`]:!0,[`media-${this.media}`]:!0}}}return d([n()],r.prototype,"title"),d([n()],r.prototype,"excerpt"),d([n()],r.prototype,"label"),d([n({reflect:!1})],r.prototype,"rank"),d([n({reflect:!1})],r.prototype,"media"),r}var P=Object.defineProperty,p=(s,r,a,t)=>{for(var e=void 0,l=s.length-1,o;l>=0;l--)(o=s[l])&&(e=o(r,a,e)||e);return e&&P(r,a,e),e};function z(s){class r extends s{constructor(){super(...arguments),this.loading="lazy",this.decoding="auto"}}return p([n()],r.prototype,"src"),p([n()],r.prototype,"srcset"),p([n()],r.prototype,"sizes"),p([n()],r.prototype,"alt"),p([n()],r.prototype,"loading"),p([n()],r.prototype,"decoding"),r}var w=Object.defineProperty,$=Object.getOwnPropertyDescriptor,y=(s,r,a,t)=>{for(var e=t>1?void 0:t?$(r,a):r,l=s.length-1,o;l>=0;l--)(o=s[l])&&(e=(t?o(r,a,e):o(e))||e);return t&&e&&w(r,a,e),e};function B(s){class r extends s{get rel(){return this._rel?this._rel:this.target==="_blank"?"noreferrer noopener":void 0}set rel(t){this._rel=t}}return y([n()],r.prototype,"href",2),y([n()],r.prototype,"target",2),y([n()],r.prototype,"rel",1),y([n()],r.prototype,"download",2),r}export{L as B,z as a,N as b,M as c,B as w};

import{i as f,E as m,x as g}from"./lit-element-Bx14lxc-.js";import{e as b}from"./class-map-CXsQwv0r.js";import{s as x}from"./button.component-BCsZFCXC.js";import{n as l}from"./Reflect-DJ7r0WLU.js";const O=f`
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
`,c=x(g),v=o=>o!==m&&o!==void 0&&o!==null,j=o=>{const s=(r,e,n)=>{if(e.wrapper)return e.wrapper(r);if(e.className||e.wrap){const t={...typeof e.className=="function"?e.className():e.className||{},...e.wrap?{[`part-${n.toLowerCase()}`]:!0}:{}};return c`<div class=${b(t)}>${r}</div>`}return r},a=(r,e="root")=>({config:r,render:()=>{if(r.parts){const t=Object.entries(r.parts).map(([p,i])=>a(i.config,p).render()).filter(v);if(t.length)return s(c`${t}`,r,e)}if(r.slot&&o.querySelector(`[slot="${r.slot}"]`)){const t=c`<slot name="${r.slot}"></slot>`;return s(t,r,e)}if(r.conditions&&r.templates){const t=Object.entries(r.conditions).filter(([p,i])=>i()).map(([p])=>{var i,y;return(y=(i=r.templates)==null?void 0:i[p])==null?void 0:y.call(i)}).filter(v);if(t.length)return s(c`${t}`,r,e)}return m}});return{Part:r=>a(r)}};var h=Object.defineProperty,d=(o,s,a,r)=>{for(var e=void 0,n=o.length-1,t;n>=0;n--)(t=o[n])&&(e=t(s,a,e)||e);return e&&h(s,a,e),e};function L(o){class s extends o{constructor(){super(...arguments),this.loading="lazy",this.decoding="auto"}}return d([l()],s.prototype,"src"),d([l()],s.prototype,"srcset"),d([l()],s.prototype,"sizes"),d([l()],s.prototype,"alt"),d([l()],s.prototype,"loading"),d([l()],s.prototype,"decoding"),s}var w=Object.defineProperty,_=Object.getOwnPropertyDescriptor,u=(o,s,a,r)=>{for(var e=r>1?void 0:r?_(s,a):s,n=o.length-1,t;n>=0;n--)(t=o[n])&&(e=(r?t(s,a,e):t(e))||e);return r&&e&&w(s,a,e),e};function N(o){class s extends o{get rel(){return this._rel?this._rel:this.target==="_blank"?"noreferrer noopener":void 0}set rel(r){this._rel=r}}return u([l()],s.prototype,"href",2),u([l()],s.prototype,"target",2),u([l()],s.prototype,"rel",1),u([l()],s.prototype,"download",2),s}export{O as B,L as a,j as c,N as w};

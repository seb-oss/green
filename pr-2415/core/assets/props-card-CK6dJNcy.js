import{i as v,E as m,x as f}from"./lit-element-Bx14lxc-.js";import{e as b}from"./class-map-CXsQwv0r.js";import{s as x}from"./button.component-BCsZFCXC.js";import{n as i}from"./Reflect-DJ7r0WLU.js";const C=v`
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
`,p=x(f),y=a=>a!==m&&a!==void 0&&a!==null,P=a=>{const s=(r,e,l)=>{if(e.wrapper)return e.wrapper(r);if(e.className||e.wrap){const t={...typeof e.className=="function"?e.className():e.className||{},...e.wrap?{[`part-${l.toLowerCase()}`]:!0}:{}};return p`<div class=${b(t)}>${r}</div>`}return r},n=(r,e="root")=>({config:r,render:()=>{if(r.parts){const t=Object.entries(r.parts).map(([c,o])=>n(o.config,c).render()).filter(y);if(t.length)return s(p`${t}`,r,e)}if(r.slot&&a.querySelector(`[slot="${r.slot}"]`)){const t=p`<slot name="${r.slot}"></slot>`;return s(t,r,e)}if(r.conditions&&r.templates){const t=Object.entries(r.conditions).filter(([c,o])=>o()).map(([c])=>{var o,u;return(u=(o=r.templates)==null?void 0:o[c])==null?void 0:u.call(o)}).filter(y);if(t.length)return s(p`${t}`,r,e)}return m}});return{Part:r=>n(r)}};var g=Object.defineProperty,d=(a,s,n,r)=>{for(var e=void 0,l=a.length-1,t;l>=0;l--)(t=a[l])&&(e=t(s,n,e)||e);return e&&g(s,n,e),e};function _(a){class s extends a{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.rank="neutral",this.media="landscape"}classes(r){return{card:!0,[`card-${r||"base"}`]:!!r,[`rank-${this.rank}`]:!0,[`media-${this.media}`]:!0}}}return d([i()],s.prototype,"title"),d([i()],s.prototype,"excerpt"),d([i()],s.prototype,"label"),d([i({reflect:!1})],s.prototype,"rank"),d([i({reflect:!1})],s.prototype,"media"),s}export{C as B,P as c,_ as w};

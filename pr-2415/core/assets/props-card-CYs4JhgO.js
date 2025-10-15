import{i as v,E as m,x as f}from"./lit-element-Bx14lxc-.js";import{e as b}from"./class-map-CXsQwv0r.js";import{s as x}from"./button.component-cNcNxtec.js";import{n as i}from"./Reflect-DJ7r0WLU.js";const k=v`
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
      border-radius: var(--gds-sys-radius-m);
      border-width: var(--gds-sys-space-5xs);
      border-style: solid;
      border-color: transparent;

      @starting-style {
        opacity: 0;
      }

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
              var(--gds-sys-color-l2-neutral-02),
              var(--gds-sys-color-state-neutral-03)
            );
          }
        }

        &:active {
          background-color: color-mix(
            in srgb,
            var(--gds-sys-color-l2-neutral-02),
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
`,d=x(f),y=a=>a!==m&&a!==void 0&&a!==null,P=a=>{const t=(r,e,l)=>{if(e.wrapper)return e.wrapper(r);if(e.className||e.wrap){const s={...typeof e.className=="function"?e.className():e.className||{},...e.wrap?{[`part-${l.toLowerCase()}`]:!0}:{}};return d`<div class=${b(s)}>${r}</div>`}return r},n=(r,e="root")=>({config:r,render:()=>{if(r.parts){const s=Object.entries(r.parts).map(([c,o])=>n(o.config,c).render()).filter(y);if(s.length)return t(d`${s}`,r,e)}if(r.slot&&a.querySelector(`[slot="${r.slot}"]`)){const s=d`<slot name="${r.slot}"></slot>`;return t(s,r,e)}if(r.conditions&&r.templates){const s=Object.entries(r.conditions).filter(([c,o])=>o()).map(([c])=>{var o,u;return(u=(o=r.templates)==null?void 0:o[c])==null?void 0:u.call(o)}).filter(y);if(s.length)return t(d`${s}`,r,e)}return m}});return{Part:r=>n(r)}};var g=Object.defineProperty,p=(a,t,n,r)=>{for(var e=void 0,l=a.length-1,s;l>=0;l--)(s=a[l])&&(e=s(t,n,e)||e);return e&&g(t,n,e),e};function z(a){class t extends a{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.appearance="neutral",this.size="large",this.aspectRatio="landscape"}classes(r){return{card:!0,[`card-${r||"base"}`]:!!r,[`appearance-${this.appearance}`]:!0,[`aspect-ratio-${this.aspectRatio}`]:!0,[`size-${this.size}`]:!0}}}return p([i()],t.prototype,"title"),p([i()],t.prototype,"excerpt"),p([i()],t.prototype,"label"),p([i({reflect:!1})],t.prototype,"appearance"),p([i({reflect:!1})],t.prototype,"size"),p([i({reflect:!1,attribute:"aspect-ratio"})],t.prototype,"aspectRatio"),t}export{k as B,P as c,z as w};

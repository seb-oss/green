import{i as n}from"./lit-element-Bx14lxc-.js";import{n as a}from"./Reflect-DJ7r0WLU.js";const f=n`
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
`;var c=Object.defineProperty,t=(s,e,o,l)=>{for(var r=void 0,i=s.length-1,p;i>=0;i--)(p=s[i])&&(r=p(e,o,r)||r);return r&&c(e,o,r),r};function y(s){class e extends s{constructor(){super(...arguments),this.title="",this.excerpt="",this.label="",this.appearance="neutral",this.size="large",this.aspectRatio="landscape"}classes(l){return{card:!0,[`card-${l||"base"}`]:!!l,[`appearance-${this.appearance}`]:!0,[`aspect-ratio-${this.aspectRatio}`]:!0,[`size-${this.size}`]:!0}}}return t([a()],e.prototype,"title"),t([a()],e.prototype,"excerpt"),t([a()],e.prototype,"label"),t([a({reflect:!1})],e.prototype,"appearance"),t([a({reflect:!1})],e.prototype,"size"),t([a({reflect:!1,attribute:"aspect-ratio"})],e.prototype,"aspectRatio"),e}export{f as B,y as w};

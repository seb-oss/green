import{l as d}from"./runtime-CNluP0A8.js";import{n as p}from"./Reflect-DJ7r0WLU.js";import{e as c}from"./class-map-CXsQwv0r.js";import{G as g,h as m,g as f}from"./gds-element-DTROifYq.js";import{t as u}from"./tokens.style-DeseHqaM.js";import{i as b}from"./lit-element-Bx14lxc-.js";const v=b`
  @layer base, a11y;

  @layer a11y {
    @media (prefers-reduced-motion: reduce) {
      .field-label {
        transition: none;
      }
    }
  }

  @layer base {
    * {
      box-sizing: border-box;
    }

    .container {
      display: flex;
      gap: var(--_container-gap, var(--gds-sys-space-s));
    }

    .label {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }

    slot[name='label']::slotted(*) {
      font: var(--_font-label, var(--gds-sys-text-detail-book-m));
      cursor: inherit;
    }

    slot[name='supporting-text']::slotted(*) {
      font: var(--_font-supporting-text);
      font-weight: var(--gds-sys-text-weight-regular);
    }
  }
`;var x=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(s,o,l,r)=>{for(var t=r>1?void 0:r?y(o,l):o,a=s.length-1,n;a>=0;a--)(n=s[a])&&(t=(r?n(o,l,t):n(t))||t);return r&&t&&x(o,l,t),t};let e=class extends g{constructor(){super(),this.label="",this.supportingText=""}render(){const s={label:!0,"has-supporting-text":!!this.supportingText};return m`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${c(s)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};e.styles=[u,v];i([p()],e.prototype,"label",2);i([p({attribute:"supporting-text"})],e.prototype,"supportingText",2);e=i([f("gds-toggle-control-base"),d()],e);export{e as G};

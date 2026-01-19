import{l as d}from"./localized-decorator-CkxI7jm-.js";import{i as c,t as g,n as p,J as u,a as b,h as f,g as v}from"./iframe-i-YM5Qxf.js";const x=c`
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
`;var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,i=(s,o,l,r)=>{for(var t=r>1?void 0:r?y(o,l):o,a=s.length-1,n;a>=0;a--)(n=s[a])&&(t=(r?n(o,l,t):n(t))||t);return r&&t&&m(o,l,t),t};let e=class extends u{constructor(){super(),this.label="",this.supportingText=""}render(){const s={label:!0,"has-supporting-text":!!this.supportingText};return f`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${b(s)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};e.styles=[g,x];i([p()],e.prototype,"label",2);i([p({attribute:"supporting-text"})],e.prototype,"supportingText",2);e=i([v("gds-toggle-control-base"),d()],e);export{e as G};

import{i as d,t as c,n as p,A as g,a as u,h as b,g as v,I as f}from"./iframe-DTCFSq5A.js";const x=d`
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
`;var y=Object.defineProperty,m=Object.getOwnPropertyDescriptor,i=(s,o,r,l)=>{for(var t=l>1?void 0:l?m(o,r):o,a=s.length-1,n;a>=0;a--)(n=s[a])&&(t=(l?n(o,r,t):n(t))||t);return l&&t&&y(o,r,t),t};let e=class extends g{constructor(){super(),this.label="",this.supportingText=""}render(){const s={label:!0,"has-supporting-text":!!this.supportingText};return b`
      <div class="container">
        <div class="control-slot">
          <slot></slot>
        </div>
        <div class="${u(s)}">
          <slot name="label"></slot>
          <slot name="supporting-text"></slot>
        </div>
      </div>
    `}};e.styles=[c,x];i([p()],e.prototype,"label",2);i([p({attribute:"supporting-text"})],e.prototype,"supportingText",2);e=i([v("gds-toggle-control-base"),f()],e);export{e as G};

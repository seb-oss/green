import{i as c,v as u,n as v,G as g,h as b,g as _}from"./iframe-Bezf6Gyf.js";const i=c`
  :host {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-01);
    --_color: var(--gds-sys-color-content-neutral-01);
    box-sizing: border-box;
    border-color: var(--_border);
    background-color: var(--_background);
    color: var(--_color);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    display: flex;
    flex-direction: column;
    --gds-card-variant-background: var(--_background);
  }

  :host([variant='neutral-01']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-01);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-01-2']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-01-2);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-02']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-02);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-02-outlined']) {
    --_border: var(--gds-sys-color-border-neutral-02);
    --_background: var(--gds-sys-color-l2-neutral-02);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='neutral-02-2']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-02-2);
    --_color: var(--gds-sys-color-content-neutral-01);
  }

  :host([variant='brand-01']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-brand-01);
    --_color: var(--gds-sys-color-content-neutral-05);
  }

  :host([variant='brand-02']) {
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-brand-02);
    --_color: var(--gds-sys-color-content-brand-02);
  }
`;var y=Object.defineProperty,p=Object.getOwnPropertyDescriptor,d=(l,o,t,a)=>{for(var r=a>1?void 0:a?p(o,t):o,n=l.length-1,e;n>=0;n--)(e=l[n])&&(r=(a?e(o,t,r):e(r))||r);return a&&r&&y(o,t,r),r};let s=class extends g{constructor(){super(),this.variant="neutral-01",this.padding="m;m{xl}",this["border-radius"]="s",this.gap="m;m{l}"}render(){return b`<slot></slot>`}};s.styles=[u,i];d([v({reflect:!0})],s.prototype,"variant",2);s=d([_("gds-card")],s);export{s as G};

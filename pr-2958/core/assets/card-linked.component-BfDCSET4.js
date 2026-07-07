import{i,o as r,h as c,v as g,g as u}from"./iframe-7cQTFavr.js";import{w as v}from"./props-link-CJkDC_NT.js";import{G as b}from"./card.component-BzA19iC8.js";const p=i`
  :host {
    display: contents;
    --_border: transparent;
    --_background: var(--gds-sys-color-l2-neutral-01);
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

  a {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-color: var(--_border);
    background-color: var(--_background);
    color: var(--_color);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    text-decoration: none;
    cursor: pointer;
    outline: solid var(--gds-sys-space-4xs) transparent;
    outline-offset: var(--gds-sys-space-4xs);
    transition-property: background-color, border-color, color, outline-color;
    transition-duration: var(--gds-sys-motion-duration-fastest);
    transition-timing-function: var(--gds-sys-motion-easing-ease-in);

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
          var(--_background),
          var(--gds-sys-color-state-neutral-03)
        );
      }
    }

    &:active {
      background-color: color-mix(
        in srgb,
        var(--_background),
        var(--gds-sys-color-state-neutral-04)
      );
    }
  }
`;var y=Object.getOwnPropertyDescriptor,f=(e,a,d,n)=>{for(var o=n>1?void 0:n?y(a,d):a,t=e.length-1,l;t>=0;t--)(l=e[t])&&(o=l(o)||o);return o};let s=class extends v(b){render(){return c`<a
      href=${r(this.href)}
      target=${r(this.target)}
      rel=${r(this.rel)}
      ping=${r(this.ping)}
      download=${r(this.download)}
      tabindex="0"
    >
      <slot></slot>
    </a>`}};s.styles=[g,p];s.styleExpressionBaseSelector="a";s=f([u("gds-card-linked")],s);export{s as G};

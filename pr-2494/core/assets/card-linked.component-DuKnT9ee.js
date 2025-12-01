import{i as d,o as r,h as c,t as g,g as u}from"./iframe-BBWJ5-ds.js";import{w as v}from"./props-link-CNPfvJpM.js";import{G as p}from"./card.component-D4eivPwx.js";const y=d`
  :host {
    display: contents;
  }

  a {
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    border-color: var(--_border-color);
    background-color: var(--_background-color);
    color: var(--_color);
    border-width: var(--gds-sys-space-5xs);
    border-style: solid;
    text-decoration: none;
    cursor: pointer;
    outline: solid var(--gds-sys-space-4xs) transparent;
    outline-offset: var(--gds-sys-space-4xs);
    transition-property: all;
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
  }
`;var f=Object.getOwnPropertyDescriptor,b=(e,a,i,n)=>{for(var o=n>1?void 0:n?f(a,i):a,t=e.length-1,l;t>=0;t--)(l=e[t])&&(o=l(o)||o);return o};let s=class extends v(p){render(){return c`<a
      href=${r(this.href)}
      target=${r(this.target)}
      rel=${r(this.rel)}
      download=${r(this.download)}
      tabindex="0"
    >
      <slot></slot>
    </a>`}};s.styles=[g,y];s.styleExpressionBaseSelector="a";s=b([u("gds-card-linked")],s);export{s as G};

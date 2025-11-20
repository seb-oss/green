import{o as t}from"./if-defined-CVqwUuaf.js";import{t as d}from"./tokens.style-CQAfIFlK.js";import{h as c,g as p}from"./gds-element-DTROifYq.js";import{w as g}from"./props-link-q-kPEFpu.js";import{G as u}from"./card.component-DECYILLa.js";import{i as f}from"./lit-element-Bx14lxc-.js";const v=f`
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
`;var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,b=(l,r,a,s)=>{for(var o=s>1?void 0:s?y(r,a):r,n=l.length-1,i;n>=0;n--)(i=l[n])&&(o=(s?i(r,a,o):i(o))||o);return s&&o&&m(r,a,o),o};let e=class extends g(u){render(){return c`<a
      href=${t(this.href)}
      target=${t(this.target)}
      rel=${t(this.rel)}
      download=${t(this.download)}
      tabindex="0"
    >
      <slot></slot>
    </a>`}};e.styles=[d,v];e.styleExpressionBaseSelector="a";e=b([p("gds-card-linked")],e);export{e as G};

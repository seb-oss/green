import{o as e}from"./if-defined-CVqwUuaf.js";import{t as d}from"./tokens.style-BcVhf7GG.js";import{h as c,g as f}from"./gds-element-DTROifYq.js";import{w as g}from"./props-link-Bzbn9FCH.js";import{G as p}from"./card.component-6SGXofUs.js";import{i as u}from"./lit-element-Bx14lxc-.js";const v=u`
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
`;var m=Object.defineProperty,y=Object.getOwnPropertyDescriptor,b=(l,s,a,t)=>{for(var o=t>1?void 0:t?y(s,a):s,n=l.length-1,i;n>=0;n--)(i=l[n])&&(o=(t?i(s,a,o):i(o))||o);return t&&o&&m(s,a,o),o};let r=class extends g(p){render(){return c`<a
      href=${e(this.href)}
      target=${e(this.target)}
      rel=${e(this.rel)}
      download=${e(this.download)}
    >
      <slot></slot>
    </a>`}};r.styles=[d,v];r.styleExpressionBaseSelector="a";r=b([f("gds-card-linked")],r);r.define();

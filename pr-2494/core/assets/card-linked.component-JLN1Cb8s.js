import{i as d,o as s,h as c,t as g,g as u}from"./iframe-xT49PpNG.js";import{w as p}from"./props-link-D7Zk1YYa.js";import{G as v}from"./card.component-CQlDE6uo.js";const y=d`
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
`;var f=Object.getOwnPropertyDescriptor,b=(e,a,l,n)=>{for(var o=n>1?void 0:n?f(a,l):a,t=e.length-1,i;t>=0;t--)(i=e[t])&&(o=i(o)||o);return o};let r=class extends p(v){render(){return c`<a
      href=${s(this.href)}
      target=${s(this.target)}
      rel=${s(this.rel)}
      ping=${s(this.ping)}
      download=${s(this.download)}
      tabindex="0"
    >
      <slot></slot>
    </a>`}};r.styles=[g,y];r.styleExpressionBaseSelector="a";r=b([u("gds-card-linked")],r);export{r as G};

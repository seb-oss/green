import{g as n,G as m,h as d}from"./gds-element-54cd6e2a.js";import{s as c}from"./style-expression-property-89161d08.js";import{i as v}from"./lit-element-71e04f06.js";const y=v`
  :host {
    display: contents;
  }

  hr {
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size) / 2) - (1px / 2));
  }
`;var u=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(r,e,o,p)=>{for(var t=p>1?void 0:p?g(e,o):e,l=r.length-1,i;l>=0;l--)(i=r[l])&&(t=(p?i(e,o,t):i(t))||t);return p&&t&&u(e,o,t),t};let s=class extends m{render(){return d`<hr />`}};s.styles=[y];a([c({property:"color",valueTemplate:r=>{const[e,o]=r.split("/");return o?`color-mix(in srgb, var(--gds-sys-color-${e}) ${parseFloat(o)*100}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],s.prototype,"color",2);a([c({property:"--_size",selector:"hr",valueTemplate:r=>`var(--gds-space-${r})`})],s.prototype,"size",2);a([c({property:"opacity",selector:"hr",valueTemplate:r=>r})],s.prototype,"opacity",2);s=a([n("gds-divider")],s);

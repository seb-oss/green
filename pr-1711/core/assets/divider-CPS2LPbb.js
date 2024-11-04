import{g as c,G as m,h as d}from"./custom-element-scoping-CpYtbs9r.js";import{t as v}from"./tokens.style-CkFfbDVg.js";import{s as n}from"./style-expression-property-C6V8xdlu.js";import{i as y}from"./lit-element-C_s9q329.js";const u=y`
  :host {
    display: block;
    border-radius: 200px;
    background: currentColor;
    font-size: 0;
    border: 0;
    height: 1px;
    width: 100%;
    margin-top: calc((var(--_size, 0) / 2) - (1px / 2));
    margin-bottom: calc((var(--_size, 0) / 2) - (1px / 2));
  }
`;var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(r,e,t,p)=>{for(var o=p>1?void 0:p?g(e,t):e,l=r.length-1,i;l>=0;l--)(i=r[l])&&(o=(p?i(e,t,o):i(o))||o);return p&&o&&f(e,t,o),o};let s=class extends m{render(){return d``}};s.styles=[v,u];a([n({property:"color",valueTemplate:r=>{const[e,t]=r.split("/");return t?`color-mix(in srgb, var(--gds-sys-color-${e}) ${parseFloat(t)*100}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],s.prototype,"color",2);a([n({property:"--_size",valueTemplate:r=>`var(--gds-space-${r})`})],s.prototype,"size",2);a([n({property:"opacity",valueTemplate:r=>r})],s.prototype,"opacity",2);s=a([c("gds-divider")],s);

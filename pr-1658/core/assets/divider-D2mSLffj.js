import{g as n,G as m,h as d}from"./gds-element-RTlSuh_R.js";import{t as v}from"./tokens.style-DuOE18tp.js";import{s as c}from"./style-expression-property-Da3P080T.js";import{i as y}from"./lit-element-BoQqPHl6.js";const u=y`
  :host {
    display: block;
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
`;var f=Object.defineProperty,g=Object.getOwnPropertyDescriptor,a=(r,e,t,p)=>{for(var o=p>1?void 0:p?g(e,t):e,l=r.length-1,i;l>=0;l--)(i=r[l])&&(o=(p?i(e,t,o):i(o))||o);return p&&o&&f(e,t,o),o};let s=class extends m{render(){return d`<hr />`}};s.styles=[v,u];a([c({property:"color",valueTemplate:r=>{const[e,t]=r.split("/");return t?`color-mix(in srgb, var(--gds-sys-color-${e}) ${parseFloat(t)*100}%, transparent 0%)`:`var(--gds-sys-color-${e})`}})],s.prototype,"color",2);a([c({property:"--_size",selector:"hr",valueTemplate:r=>`var(--gds-space-${r})`})],s.prototype,"size",2);a([c({property:"opacity",selector:"hr",valueTemplate:r=>r})],s.prototype,"opacity",2);s=a([n("gds-divider")],s);
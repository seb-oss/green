import{i as n}from"./lit-element-C_s9q329.js";import{t as m}from"./tokens.style-RalixZsd.js";import{s as c}from"./style-expression-property-D0nhDdjH.js";import{g as i,h as v}from"./custom-element-scoping-CpYtbs9r.js";import{G as u}from"./container-C3DkMOGl.js";var b=Object.defineProperty,g=Object.getOwnPropertyDescriptor,p=(o,r,a,e)=>{for(var s=e>1?void 0:e?g(r,a):r,l=o.length-1,d;l>=0;l--)(d=o[l])&&(s=(e?d(r,a,s):d(s))||s);return e&&s&&b(r,a,s),s};let t=class extends u{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return v`<slot></slot>`}};t.styles=[m,n`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `];p([c({property:"box-shadow",valueTemplate:o=>`var(--gds-shadow-${o})`})],t.prototype,"shadow",2);p([c({valueTemplate:o=>o,styleTemplate:(o,r)=>`
      --_border-color: var(--gds-color-l2-background-${r});
      --_background-color: var(--gds-color-l2-background-${r});
      --_color: var(--gds-color-l2-content-${r});
      `})],t.prototype,"variant",2);t=p([i("gds-card")],t);

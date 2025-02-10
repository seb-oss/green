import{i as n}from"./lit-element-C_s9q329.js";import{t as i}from"./tokens.style-CFvqdzpw.js";import{s as c}from"./style-expression-property-w7JDbrjA.js";import{g as m,h as v}from"./custom-element-scoping-BEGY3AqQ.js";import{G as h}from"./container-CVmjjj7H.js";var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(o,r,l,t)=>{for(var s=t>1?void 0:t?b(r,l):r,a=o.length-1,d;a>=0;a--)(d=o[a])&&(s=(t?d(r,l,s):d(s))||s);return t&&s&&u(r,l,s),s};let e=class extends h{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs",this["border-color"]="transparent"}render(){return v`<slot></slot>`}};e.styles=[i,n`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `];p([c({property:"box-shadow",valueTemplate:o=>`var(--gds-shadow-${o})`})],e.prototype,"shadow",2);p([c({valueTemplate:o=>o,styleTemplate:function(o,r){return`
      --_border-color: var(--gds-color-l${this.level}-background-${r});
      --_background-color: var(--gds-color-l${this.level}-background-${r});
      --_color: var(--gds-color-l${this.level}-content-${r});
      `}})],e.prototype,"variant",2);e=p([m("gds-card")],e);

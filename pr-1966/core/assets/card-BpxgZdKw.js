import{i as p}from"./lit-element-C_s9q329.js";import{t as i}from"./tokens.style-CFvqdzpw.js";import{s as n}from"./style-expression-property-w7JDbrjA.js";import{g as m,h as v}from"./custom-element-scoping-BEGY3AqQ.js";import{G as h}from"./container-C7pMixwC.js";var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,c=(s,r,l,e)=>{for(var o=e>1?void 0:e?b(r,l):r,a=s.length-1,d;a>=0;a--)(d=s[a])&&(o=(e?d(r,l,o):d(o))||o);return e&&o&&u(r,l,o),o};let t=class extends h{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this["border-width"]="4xs",this["border-color"]="transparent"}render(){return v`<slot></slot>`}};t.styles=[i,p`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `];c([n({property:"box-shadow",valueTemplate:s=>`var(--gds-shadow-${s})`})],t.prototype,"shadow",2);c([n({styleTemplate:function(s,r){return`
      --_border-color: var(--gds-color-l${this.level}-background-${r});
      --_background-color: var(--gds-color-l${this.level}-background-${r});
      --_color: var(--gds-color-l${this.level}-content-${r});
      `}})],t.prototype,"variant",2);t=c([m("gds-card")],t);

import{i as n}from"./lit-element-C_s9q329.js";import{t as i}from"./tokens.style-EvBKHrBe.js";import{s as c}from"./style-expression-property-CYg4CGI6.js";import{g as m,h as v}from"./custom-element-scoping-b4lD3laR.js";import{G as h}from"./container-knThKums.js";var u=Object.defineProperty,b=Object.getOwnPropertyDescriptor,p=(o,r,l,t)=>{for(var e=t>1?void 0:t?b(r,l):r,a=o.length-1,d;a>=0;a--)(d=o[a])&&(e=(t?d(r,l,e):d(e))||e);return t&&e&&u(r,l,e),e};let s=class extends h{constructor(){super(),this.variant="primary",this.padding="s; m{l}",this["border-radius"]="xs; m{s}",this["border-width"]="4xs"}render(){return v`<slot></slot>`}};s.styles=[i,n`
      :host {
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
      }
    `];p([c({property:"box-shadow",valueTemplate:o=>`var(--gds-shadow-${o})`})],s.prototype,"shadow",2);p([c({valueTemplate:o=>o,styleTemplate:function(o,r){return`
      --_border-color: var(--gds-color-l${this.level}-background-${r});
      --_background-color: var(--gds-color-l${this.level}-border-${r});
      --_color: var(--gds-color-l${this.level}-content-${r});
      `}})],s.prototype,"variant",2);s=p([m("gds-card")],s);

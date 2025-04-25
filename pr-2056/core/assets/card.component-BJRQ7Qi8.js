import{i}from"./lit-element-Bx14lxc-.js";import{t as n}from"./tokens.style-OWC-W9l-.js";import{s as c}from"./declarative-layout-mixins-DCzV-Sjo.js";import{h as m,g as v}from"./custom-element-scoping-b4c89-hi.js";import{G as b}from"./div.component-DDYeyHVz.js";var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=(s,r,l,t)=>{for(var o=t>1?void 0:t?u(r,l):r,a=s.length-1,d;a>=0;a--)(d=s[a])&&(o=(t?d(r,l,o):d(o))||o);return t&&o&&g(r,l,o),o};let e=class extends b{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return m`<slot></slot>`}};e.styles=[n,i`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-sys-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];p([c({property:"box-shadow",valueTemplate:s=>`var(--gds-shadow-${s})`})],e.prototype,"shadow",2);p([c({styleTemplate:function(s,r){return`
      --_border-color: var(--gds-sys-color-l${this.level}-background-${r});
      --_background-color: var(--gds-sys-color-l${this.level}-background-${r});
      --_color: var(--gds-sys-color-l${this.level}-content-${r});
      `}})],e.prototype,"variant",2);e=p([v("gds-card")],e);export{e as G};

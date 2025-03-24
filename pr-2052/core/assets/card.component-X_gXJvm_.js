import{i}from"./lit-element-Bx14lxc-.js";import{t as n}from"./tokens.style-KMm7w703.js";import{s as c}from"./declarative-layout-mixins-DzH2v4OZ.js";import{h as m,g as v}from"./custom-element-scoping-D6CCRyY9.js";import{G as b}from"./div-_ZsOCt9A.js";var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,p=(s,r,l,t)=>{for(var o=t>1?void 0:t?u(r,l):r,a=s.length-1,d;a>=0;a--)(d=s[a])&&(o=(t?d(r,l,o):d(o))||o);return t&&o&&g(r,l,o),o};let e=class extends b{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return m`<slot></slot>`}};e.styles=[n,i`
      :host {
        box-sizing: border-box;
        border-color: var(--_border-color);
        background-color: var(--_background-color);
        color: var(--_color);
        border-width: var(--gds-space-4xs);
        border-style: solid;
        display: flex;
        flex-direction: column;
      }
    `];p([c({property:"box-shadow",valueTemplate:s=>`var(--gds-shadow-${s})`})],e.prototype,"shadow",2);p([c({styleTemplate:function(s,r){return`
      --_border-color: var(--gds-color-l${this.level}-background-${r});
      --_background-color: var(--gds-color-l${this.level}-background-${r});
      --_color: var(--gds-color-l${this.level}-content-${r});
      `}})],e.prototype,"variant",2);e=p([v("gds-card")],e);export{e as G};

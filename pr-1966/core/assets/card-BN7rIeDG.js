import{i as p}from"./lit-element-C_s9q329.js";import{t as n}from"./tokens.style-CFvqdzpw.js";import{s as i}from"./declarative-layout-mixins-FAlKEvM_.js";import{g as m,h as v}from"./custom-element-scoping-BEGY3AqQ.js";import{G as b}from"./div-DhwcAPDZ.js";var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,c=(s,r,l,t)=>{for(var o=t>1?void 0:t?u(r,l):r,a=s.length-1,d;a>=0;a--)(d=s[a])&&(o=(t?d(r,l,o):d(o))||o);return t&&o&&g(r,l,o),o};let e=class extends b{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return v`<slot></slot>`}};e.styles=[n,p`
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
    `];c([i({property:"box-shadow",valueTemplate:s=>`var(--gds-shadow-${s})`})],e.prototype,"shadow",2);c([i({styleTemplate:function(s,r){return`
      --_border-color: var(--gds-color-l${this.level}-background-${r});
      --_background-color: var(--gds-color-l${this.level}-background-${r});
      --_color: var(--gds-color-l${this.level}-content-${r});
      `}})],e.prototype,"variant",2);e=c([m("gds-card")],e);

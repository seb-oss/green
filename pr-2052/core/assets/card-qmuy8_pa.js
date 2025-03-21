import{i as p}from"./lit-element-Bx14lxc-.js";import{t as n}from"./tokens.style-Db3B8yEB.js";import{s as c}from"./declarative-layout-mixins-CvhbdVQ9.js";import{h as m,g as v}from"./custom-element-scoping-BOlwUH_F.js";import{G as b}from"./div-D-66otxp.js";var g=Object.defineProperty,u=Object.getOwnPropertyDescriptor,i=(e,r,l,t)=>{for(var o=t>1?void 0:t?u(r,l):r,a=e.length-1,d;a>=0;a--)(d=e[a])&&(o=(t?d(r,l,o):d(o))||o);return t&&o&&g(r,l,o),o};let s=class extends b{constructor(){super(),this.variant="primary",this.padding="s;m{l}",this["border-radius"]="xs;m{s}",this.gap="s;m{l}"}render(){return m`<slot></slot>`}};s.styles=[n,p`
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
    `];i([c({property:"box-shadow",valueTemplate:e=>`var(--gds-shadow-${e})`})],s.prototype,"shadow",2);i([c({styleTemplate:function(e,r){return`
      --_border-color: var(--gds-color-l${this.level}-background-${r});
      --_background-color: var(--gds-color-l${this.level}-background-${r});
      --_color: var(--gds-color-l${this.level}-content-${r});
      `}})],s.prototype,"variant",2);s=i([v("gds-card")],s);s.define();

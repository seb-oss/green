import{x as l}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-DxXI5tEW.js";import{Default as g}from"./formatted-account.stories-YWdOTki9.js";import{n as h}from"./Reflect-DJ7r0WLU.js";import{n as v}from"./when-BR7zwNJC.js";import{h as b,g as y}from"./gds-element-DTROifYq.js";import{G as D}from"./blur.component-BGBTarqF.js";import{G as _,a as O}from"./formatted-account-1IyS51LY.js";import"./custom-elements-gR53d6wz.js";import"./flex-DBGDy_Wa.js";import"./flex.component-CRnwBFQj.js";import"./tokens.style-CJKwYBen.js";import"./div.component-B56RLpJM.js";import"./declarative-layout-mixins-DFPXvh_g.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-COgHNn0y.js";import"./query-p8xgzTDt.js";import"./text-DmYWJt0y.js";import"./text.component-3_iRXBRQ.js";import"./static-B8S6DEnV.js";import"./default-typography.styles-DG7u6j1x.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(t,s,a,r)=>{for(var e=r>1?void 0:r?$(s,a):s,i=t.length-1,c;i>=0;i--)(c=t[i])&&(e=(r?c(s,a,e):c(e))||e);return r&&e&&P(s,a,e),e};let n=class extends _{constructor(){super(...arguments),this.hide=!1}render(){return v(this.hide,()=>b`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};d([h({type:Boolean})],n.prototype,"hide",2);n=d([y("gds-sensitive-account",{dependsOn:[D]})],n);n.define();const U={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...f("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(O)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},G={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...g.args,hide:!0}},o={...G,render:t=>l`<gds-sensitive-account
      .hide=${t.hide}
      .account=${t.account}
    ></gds-sensitive-account>`};var m,p,u;o.parameters={...o.parameters,docs:{...(m=o.parameters)==null?void 0:m.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-account
      .hide=\${args.hide}
      .account=\${args.account}
    ></gds-sensitive-account>\`
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const V=["Default"];export{o as Default,V as __namedExportsOrder,U as default};

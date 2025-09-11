import{x as l}from"./lit-element-Bx14lxc-.js";import{a as f}from"./argTableProps-CgVgPz2_.js";import{Default as g}from"./formatted-account.stories-BU2-diIL.js";import{n as h}from"./Reflect-DJ7r0WLU.js";import{n as v}from"./when-BR7zwNJC.js";import{h as b,g as y}from"./gds-element-DTROifYq.js";import{G as D}from"./blur.component-BGBTarqF.js";import{G as _,a as O}from"./formatted-account-DsyI5T-E.js";import"./custom-elements-CIXJ1k-t.js";import"./flex-BLY0XvXR.js";import"./flex.component-DFgQuJpw.js";import"./tokens.style-BAmYQ5hh.js";import"./div.component-DqlLNNPU.js";import"./declarative-layout-mixins-DjJmHTNk.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-ZZO1SCb-.js";import"./query-p8xgzTDt.js";import"./text-Bjt3k96C.js";import"./text.component-DPk3dPFa.js";import"./static-B8S6DEnV.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(t,s,a,r)=>{for(var e=r>1?void 0:r?$(s,a):s,i=t.length-1,c;i>=0;i--)(c=t[i])&&(e=(r?c(s,a,e):c(e))||e);return r&&e&&P(s,a,e),e};let n=class extends _{constructor(){super(...arguments),this.hide=!1}render(){return v(this.hide,()=>b`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};d([h({type:Boolean})],n.prototype,"hide",2);n=d([y("gds-sensitive-account",{dependsOn:[D]})],n);n.define();const R={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...f("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(O)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const U=["Default"];export{o as Default,U as __namedExportsOrder,R as default};

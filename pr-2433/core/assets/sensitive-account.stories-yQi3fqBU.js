import{x as l}from"./lit-element-DurN2HL2.js";import{a as f}from"./argTableProps-Cd0fxrZE.js";import{Default as g}from"./formatted-account.stories-OSgmhlpe.js";import{n as h}from"./Reflect-BIo-zK4X.js";import{n as v}from"./when-BR7zwNJC.js";import{h as b,g as y}from"./gds-element-4C_whPou.js";import{G as D}from"./blur.component-C22b0dE9.js";import{G as _,a as O}from"./formatted-account-MNYKAV7a.js";import"./custom-elements-KgpKW7wz.js";import"./flex-Hi-aWsz6.js";import"./flex.component-D5YHBXrr.js";import"./tokens.style-Boei6TBQ.js";import"./div.component-BwtVtTeM.js";import"./declarative-layout-mixins-TUy19cvx.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-Cp014Txr.js";import"./query-p8xgzTDt.js";import"./text-jcXmMPmS.js";import"./static-Bn3NESYl.js";var P=Object.defineProperty,$=Object.getOwnPropertyDescriptor,d=(t,s,a,r)=>{for(var e=r>1?void 0:r?$(s,a):s,c=t.length-1,i;c>=0;c--)(i=t[c])&&(e=(r?i(s,a,e):i(e))||e);return r&&e&&P(s,a,e),e};let n=class extends _{constructor(){super(...arguments),this.hide=!1}render(){return v(this.hide,()=>b`<gds-blur>${super.render()}</gds-blur>`,()=>super.render())}};d([h({type:Boolean})],n.prototype,"hide",2);n=d([y("gds-sensitive-account",{dependsOn:[D]})],n);n.define();const Q={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...f("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(O)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

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
}`,...(u=(p=o.parameters)==null?void 0:p.docs)==null?void 0:u.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,Q as default};

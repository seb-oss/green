import{x as c}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-ZJPYtGQL.js";import{a as s}from"./formatted-account-BNBNfs31.js";import"./flex-BeEfgfCU.js";import"./custom-elements-C0YfINX2.js";import"./Reflect-DJ7r0WLU.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./gds-element-DTROifYq.js";import"./formatted-text-CgfsTNtR.js";import"./query-p8xgzTDt.js";import"./text-RYU0uis7.js";import"./text.component-CIskWtJh.js";import"./static-B8S6DEnV.js";import"./tokens.style-DW_p3hws.js";import"./declarative-layout-mixins-CquYcIh8.js";import"./div.component-DaQR1erW.js";import"./flex.component-Ca7eLWps.js";const P={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>c`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const B=["Default"];export{t as Default,B as __namedExportsOrder,P as default};

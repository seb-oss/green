import{x as c}from"./lit-element-Bx14lxc-.js";import{a as n}from"./argTableProps-VH7JAiB_.js";import{a as s}from"./formatted-account-BsHWDwJ3.js";import"./flex-C_x5I4jr.js";import"./custom-elements-Bh7QQjxO.js";import"./custom-element-scoping-b4c89-hi.js";import"./_commonjsHelpers-Cpj98o6Y.js";import"./formatted-text-DR9DXImI.js";import"./query-p8xgzTDt.js";import"./text-BO4AnSPY.js";import"./text.component-CVlwMV6p.js";import"./static-B8S6DEnV.js";import"./tokens.style-FJSmZZcv.js";import"./declarative-layout-mixins-BgWwoHZ-.js";import"./div.component-BuGkGqpt.js";import"./flex.component-CPPMsy9S.js";const F={title:"Components/Formatted Text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>c`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};var e,a,r;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...(r=(a=t.parameters)==null?void 0:a.docs)==null?void 0:r.source}}};const P=["Default"];export{t as Default,P as __namedExportsOrder,F as default};

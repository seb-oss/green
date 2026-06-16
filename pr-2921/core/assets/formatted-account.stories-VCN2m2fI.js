import{b as e}from"./iframe-B6b8lEsx.js";import{a}from"./argTableProps-CTt8uGct.js";import{a as c}from"./formatted-account-CWeZGsR3.js";import"./flex-BFKK5gCD.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-CfXNO-wz.js";import"./text-Cc9E1CGj.js";import"./text.component-Dg68zOIe.js";import"./default-typography.styles-CnqW_myG.js";import"./flex.component-DiatQJPJ.js";const x={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...a("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(c)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...r,name:"SEB Account",render:o=>e`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...t.parameters?.docs?.source}}};const b=["Default"];export{t as Default,b as __namedExportsOrder,x as default};

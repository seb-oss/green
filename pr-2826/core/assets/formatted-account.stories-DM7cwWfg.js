import{b as e}from"./iframe-BCI2c7Bh.js";import{a}from"./argTableProps-H4RGnk6k.js";import{a as c}from"./formatted-account-CjPZDCt9.js";import"./flex-C3Hxoa7A.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-gm9oKVNx.js";import"./text-DQmP6rRv.js";import"./text.component-qGlgSTZB.js";import"./default-typography.styles-DdTfTVMx.js";import"./flex.component-xNjZLWhM.js";const x={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...a("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(c)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...r,name:"SEB Account",render:o=>e`<gds-flex gap="m" flex-direction="column">
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

import{b as e}from"./iframe-DgBS6O-a.js";import{a}from"./argTableProps-C9TqqsMF.js";import{a as c}from"./formatted-account-DUSH8Gqw.js";import"./flex-C_89Zkne.js";import"./preload-helper-PPVm8Dsz.js";import"./formatted-text-BZ9PFsTa.js";import"./text-BPnuEA-3.js";import"./text.component-BjVsJApD.js";import"./default-typography.styles-CF6cB6xr.js";import"./flex.component-DFBrkLlP.js";const x={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...a("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(c)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},r={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...r,name:"SEB Account",render:o=>e`<gds-flex gap="m" flex-direction="column">
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

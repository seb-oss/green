import{b as r}from"./iframe-BfjVQBhS.js";import{a as n}from"./argTableProps-Qs7z-sFD.js";import{a as s}from"./formatted-account-Dx4nZBhc.js";import"./flex-CsQQXgbH.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-Bzu71g95.js";import"./text-iN91Xt23.js";import"./text.component-Cp7HIdtR.js";import"./default-typography.styles-DgBJUsWr.js";import"./flex.component-C3_-0YKv.js";const y={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>r`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};var e,a,c;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const D=["Default"];export{t as Default,D as __namedExportsOrder,y as default};

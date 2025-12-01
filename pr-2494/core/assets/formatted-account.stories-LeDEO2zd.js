import{x as r}from"./iframe-r7XMIE4J.js";import{a as n}from"./argTableProps-y201VjCF.js";import{a as s}from"./formatted-account-BmyYLAgF.js";import"./flex-IgstLLT-.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-DkjlxPo7.js";import"./text-BKzhkOL1.js";import"./default-typography.styles-D3NTB3uO.js";import"./flex.component-BQ5NBM0P.js";const h={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>r`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=${o.account}></gds-formatted-account>
      <gds-formatted-account>${o.account}</gds-formatted-account>
    </gds-flex>`};var e,a,c;t.parameters={...t.parameters,docs:{...(e=t.parameters)==null?void 0:e.docs,source:{originalSource:`{
  ...DefaultParams,
  name: 'SEB Account',
  render: args => html\`<gds-flex gap="m" flex-direction="column">
      <gds-formatted-account .account=\${args.account}></gds-formatted-account>
      <gds-formatted-account>\${args.account}</gds-formatted-account>
    </gds-flex>\`
}`,...(c=(a=t.parameters)==null?void 0:a.docs)==null?void 0:c.source}}};const y=["Default"];export{t as Default,y as __namedExportsOrder,h as default};

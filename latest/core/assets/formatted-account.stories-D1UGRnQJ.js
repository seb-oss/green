import{b as r}from"./iframe-CsT9moiw.js";import{a as n}from"./argTableProps-A5yy1ZV7.js";import{a as s}from"./formatted-account-Bt10ABKV.js";import"./flex-BGpOyHJY.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-sWTmWu77.js";import"./text-D6YmuKVt.js";import"./text.component-C-iPFyM3.js";import"./default-typography.styles-0H7Awlzh.js";import"./flex.component-DByS7Bd2.js";const y={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>r`<gds-flex gap="m" flex-direction="column">
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

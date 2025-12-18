import{x as r}from"./iframe-BOjKxah_.js";import{a as n}from"./argTableProps-B_wxlf2D.js";import{a as s}from"./formatted-account-DVekBPWY.js";import"./flex-CGCV4cze.js";import"./preload-helper-Dp1pzeXC.js";import"./formatted-text-DHNaV4EQ.js";import"./text-CMtwcPtv.js";import"./default-typography.styles-yY3g6Dh1.js";import"./flex.component-BVX8zNtn.js";const h={title:"Components/Formatted text/Accounts",component:"gds-formatted-account",tags:["autodocs"],argTypes:{...n("gds-formatted-account"),format:{control:{type:"select"},options:Object.keys(s)}},parameters:{docs:{description:{component:"[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/formatted-text/account)\n\n`gds-formatted-account` extends `gds-text` and formats the account to the desired format.\n\n@beta"}}}},m={parameters:{docs:{source:{format:!0,type:"dynamic"}},controls:{expanded:!0}},args:{account:"54400023423"}},t={...m,name:"SEB Account",render:o=>r`<gds-flex gap="m" flex-direction="column">
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

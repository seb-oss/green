import{b as s}from"./iframe-DNybJ50c.js";import{a as o}from"./argTableProps-CuvC6GT3.js";import{Default as r}from"./formatted-account.stories-Bhhq9i0K.js";import{G as a}from"./sensitive-account.component-6FhS3q90.js";import{a as n}from"./formatted-account-B3I0YH-Q.js";import"./preload-helper-PPVm8Dsz.js";import"./flex-TG2_Fjr_.js";import"./flex.component-BdKeRGh3.js";import"./formatted-text-DDItEH7D.js";import"./text-CVjzQ6R3.js";import"./text.component-nxPXvugj.js";import"./default-typography.styles-CHbkP-Ka.js";import"./blur.component-BK6Ppp7q.js";a.define();const S={title:"Components/Sensitive/Account",component:"gds-sensitive-account",tags:["autodocs"],argTypes:{...o("gds-sensitive-account"),format:{control:{type:"select"},options:Object.keys(n)}},parameters:{docs:{description:{component:`[Source code](https://github.com/seb-oss/green/tree/main/libs/core/src/components/sensitive/account)

GdsSensitiveAccount displays a formatted account and optionally hides it using a blur effect
when the 'hide' property is set to true.

@status beta`}}}},c={parameters:{docs:{source:{format:!0,type:"dynamic"}}},args:{...r.args,hide:!0}},t={...c,render:e=>s`<gds-sensitive-account
      .hide=${e.hide}
      .account=${e.account}
    ></gds-sensitive-account>`};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  ...DefaultParams,
  render: args => html\`<gds-sensitive-account
      .hide=\${args.hide}
      .account=\${args.account}
    ></gds-sensitive-account>\`
}`,...t.parameters?.docs?.source}}};const $=["Default"];export{t as Default,$ as __namedExportsOrder,S as default};
